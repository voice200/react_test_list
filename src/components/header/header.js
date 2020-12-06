import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";

const Header = ()=> {

        return(
            <div className="header container-fluid d-flex">
                <Link to={'/'}>React app</Link>
            </div>
        );
}

export default Header;