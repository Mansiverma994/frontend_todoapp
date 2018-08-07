
import React from 'react';
import List from './List';
import Add from './Add';
import Update from './Update';
import { Route } from "react-router-dom";

export default class Routes extends React.Component {
    render() {
        return (
                <div>
                        <Route path="/list" component={List}/>
                   <Route path="/addtask" component={Add}/>
                   <Route path="/update/:id" component={Update}/>
                </div>

        )
    }
}