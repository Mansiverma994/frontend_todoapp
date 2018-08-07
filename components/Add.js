import React from 'react';
import axios from 'axios';

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
    handleClick() {
        axios.post('http://localhost:8000/', {
            name: this.state.name,
            // status: this.state.status
        })
            .then(function (response) {
                console.log('Task added successfully')
            });
    }

    render() {
        return (
            <div>
                <h1>Add task</h1>
                <form>
                    Name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/><br/>
                    {/* Status<input name="status" type="status" value={this.state.status} onChange={this.handleChange}/><br/> */}
                    <button type="button" onClick={this.handleClick}>Add</button>
                </form>
            </div>

        )
    }

}