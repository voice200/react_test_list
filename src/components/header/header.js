import React, {Component} from 'react';
import './header.scss'
import {Link} from "react-router-dom";

export default class Header extends Component {

    render() {
        return(
            <div className="header container-fluid d-flex">
                <Link to={'/'}>React app</Link>
            </div>
        )
    }
}