import React from 'react';
import { Link } from "react-router-dom";
import { css } from '../public/stylesheet/index.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                To Do App
            <ul>

                    <li>
                        <Link to="/addtask">Add task</Link>
                    </li>
                    <li>
                        <Link to="/list">Task List</Link>
                    </li>
                </ul>
            </div>


        )
    }
}