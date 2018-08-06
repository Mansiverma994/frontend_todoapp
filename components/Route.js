import React from 'react';
import List from './List';
import { Route } from "react-router-dom";

export default class Routes extends React.Component {
    render() {
        return (
                <div>
                    <Route path="/list" component={List}/>
                </div>

        )
    }
}