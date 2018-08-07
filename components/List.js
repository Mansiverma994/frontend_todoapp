import React from 'react';
import axios from 'axios';
import Update from './Update';
import {Route} from "react-router-dom";

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8000")
            .then((response) => {
                console.log(response);

                this.setState({response: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete("http://localhost:8000/" + id)
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const list = this.state.response;
        console.log(list);
        return (
            <div>

                <table border="1">
                    <tbody>
                    <tr>
                        <th>Task Name</th>
                        <th>Task Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        list.map((data, index) => {
                        
                            return (
                                <tr key={index}>
                                    <td >{data.name}</td>
                                    <td >{data.status}</td>
                                    <td>
            <button onClick={() => this.deleteUser(data._id)}>Delete</button>
          
            const Button = () => (
                                            <Route render={({ history}) => (
        <button type='button' onClick={() => { history.push('/update') }}>
          Click Me!
        </button>
      )}/>
                                            )
                                            
                                        </td>
                                </tr>
                            )
                        })

                    }

                    </tbody>
                </table>
            </div>
        )
    }
}