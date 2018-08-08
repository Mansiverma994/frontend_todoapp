import React from 'react';
import { Link } from "react-router-dom";
import { css } from '../public/stylesheet/index.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <ul>
                <li>
                    <Link to="/">To Do App</Link>
                </li>
                    <li>
                        <Link to="/addtask">Add task</Link>
                    </li>
                </ul>
            </div>


        )
    }
}