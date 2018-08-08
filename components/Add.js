import React from 'react';
import axios from 'axios';
import gql from "graphql-tag";
import {Mutation} from "react-apollo";
import {addTasksGQL} from './operations'
export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const preState = this.state;
        preState[event.target.name] = event.target.value;
        this.setState(preState);
    }

    handleClick(addTask) {
        addTask({variables: {name: this.state.name}}).then(res => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <Mutation mutation={addTasksGQL()}>
                {(addTask, {data}) => (
                    <div className="add-task">
                        <h1>Add task</h1>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Enter name"
                                       name="name" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            {/* Status<input name="status" type="status" value={this.state.status} onChange={this.handleChange}/><br/> */}
                            <button className="btn btn-success" type="button" onClick={(e) => this.handleClick((addTask))}>Add</button>
                        </form>
                    </div>
                )}
            </Mutation>

        )
    }

}