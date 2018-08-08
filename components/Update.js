import React from 'react';
import axios from 'axios';
import {Query} from "react-apollo";
import {getTasksByIdGQL, updateTasksGQL} from './operations'
import {Mutation} from "react-apollo";
export default class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                name: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }


    handleChange(event) {
        const preState = this.state.list;
        preState[event.target.name] = event.target.value;
        this.setState({list: preState});
    }

    updateTask(updateTaskMutation, task, name) {
        updateTaskMutation({variables: {name: name, id: task.id, status: task.status}}).then(res => {
            this.props.history.push('/');
        })
    }

    render() {
        const id = this.props.match.params.id
        const UpdateTask = ({task, name}) => (
            <Mutation mutation={updateTasksGQL()}>
                {(updateTask, {data}) => {
                    return (
                        <button className="btn btn-success" type="button"
                                onClick={(e) => this.updateTask(updateTask, task, name)}>Update</button>
                    )
                }}
            </Mutation>
        )

        return (
            <Query query={getTasksByIdGQL()} variables={{id}}>
                {({loading, error, data}) => {
                    if (loading) return <h1>Loading...</h1>
                    const task = data.getTaskListById
                    const name = this.state.list.name || task.name
                    return (
                        <div className="update-task">
                            <form>
                                <div className="form-group">
                                    Name:<input className="form-control" name="name" type="input" value={name}
                                                onChange={this.handleChange}/><br/>
                                    <UpdateTask task={task} name={name}/>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Query>
        )
    }

}