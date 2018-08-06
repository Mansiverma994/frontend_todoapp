import React from 'react';
import axios from 'axios';
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

   

    render() {
        const list = this.state.response;
        console.log(list);
        return (
            <div>

                <table border="1">
                    <tbody>
                    <tr>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                    {
                        list.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td >{data.name}</td>
                                   
                                    <td>
                                   
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