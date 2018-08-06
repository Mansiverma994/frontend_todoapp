import React from 'react';
import Header from './Header';
import Routes from './Route';
import Request from 'react-http-request';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import {Route} from "react-router-dom";
// import Body from './Body';
// import Footer from './Footer';
// import {css} from "css-loader";


export default class App extends React.Component{


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

    componentDidMount() {
        console.log('---------Component did mount-----------');
    }

    componentWillReceiveProps() {
        console.log('---------Component Will Receive Props-----------');
    };

    shouldComponentUpdate() {
        console.log('---------Should Component Update-----------');
        return true;
    }

    componentWillUpdate() {
        console.log('---------Component will update-----------');
    }

    componentDidUpdate() {
        console.log('---------Component did update-----------');
    }

    componentWillUnmount() {
        console.log('---------Component will unupdate-----------');
    }

    render() {
        const list = this.state.response;
        console.log('Render method called');
        return (
                <div>

                    <Header />
                   
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