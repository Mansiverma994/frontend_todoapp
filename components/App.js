import React from 'react';
import Header from './Header';
import Routes from './Route';
import Request from 'react-http-request';
import {BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import {Route} from "react-router-dom";
// import {css} from "css-loader";


export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Header />
                        <Routes/>
                    </div>
                </Router>
            </div>
        )
    }

}