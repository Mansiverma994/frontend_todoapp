import React from 'react';
import Header from './Header';
import Routes from './Route';
import Request from 'react-http-request';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import {Route} from "react-router-dom";
// import {css} from "css-loader";


export default class App extends React.Component{
    constructor() {
        super();

        console.log('-------Constructor call-------');
    }

    componentWillMount() {
        console.log('---------Component will mount-----------');
    }

    componentDidMount() {
        console.log('---------Component did mount-----------');
    }

    componentWillReceiveProps() {
        console.log('---------Component Will Receive Props-----------');
    };

    shouldComponentUpdate() {
        console.log('---------Should Component Update-----------');
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
        console.log('Render method called');
        return (
            <Router>
                <div>

                    <Header />
                    <Routes/>
                </div>
            </Router>
        )
    }

}