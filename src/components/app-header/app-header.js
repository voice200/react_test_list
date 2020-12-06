import React from 'react';
import './app-header.scss'
import SortingUsers from "../sorting-users";

const AppHeader = ({onFilterChange, namePage})=>{

        let sorting;
        if (namePage === 'List of users'){
            sorting = <SortingUsers onFilterChange = {onFilterChange}/>;
        } else {
            sorting = null;
        }
        return (
            <div className="app-header d-flex">
                <span>{namePage}</span>
                {sorting}
            </div>
        );
}

export default AppHeader;
