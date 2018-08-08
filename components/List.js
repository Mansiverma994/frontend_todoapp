import React from 'react';
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
import {getTasksGQL, updateTasksGQL, deleteTasksGQL} from './operations'
import Update from './Update';

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);

    }

    deleteUser(deleteTask, id) {
        deleteTask({variables: {id: id}}).then(res => {
            window.location.reload()
        })
    }

    handleUpdateStatus(event, updateTask, task) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const status = value ? 'Completed' : 'Pending'
        updateTask({variables: {name: task.name, id: task.id, status: status}}).then(res => {
            window.location.reload()
        })
        console.log(task)
    }
    updateTask(id) {
        this.props.history.push('/update/'+id);
    }
    render() {
        const UpdateTask = ({task, isCompleted}) => (
            <Mutation mutation={updateTasksGQL()}>
                {(updateTask, {data}) => {
                    return (
                        <input
                            name="status"
                            type="checkbox"
                            checked={isCompleted}
                            onChange={(e) => {
                                this.handleUpdateStatus(e, updateTask, task)
                            }}/>
                    )
                }}
            </Mutation>
        )

        const DeleteTask = ({task}) => (
            <Mutation mutation={deleteTasksGQL()}>
                {(deleteTask, {data}) => {
                    return (
                        <button onClick={() => this.deleteUser(deleteTask, task.id)}>Delete</button>
                    )
                }}
            </Mutation>
        )
        const FetchTasks = () => (
            <Query query={getTasksGQL()}>
                {({loading, error, data}) => {
                    if (loading) return null;
                    const tasks = data.getTaskList
                    return tasks.map((data, index) => {
                        const isCompleted = (data.status === 'Completed')
                        return (
                            <tr key={index}>
                                <td><UpdateTask task={data} isCompleted={isCompleted}/></td>
                                <td className={isCompleted ? 'task-name' : ''}>{data.name}</td>
                                <td >{data.status}</td>
                                <td><DeleteTask task={data}/> <button onClick={() => this.updateTask(data.id)}>Update</button></td>
                            </tr>
                        )
                    })
                }}
            </Query>
        )
        return (
            <div>
                <table border="1" className="table table-hover">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Task Name</th>
                        <th>Task Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <FetchTasks />
                    </tbody>
                </table>
            </div>
        )
    }
}