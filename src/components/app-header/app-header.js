import React, {Component} from 'react';
import './app-header.scss'
import SortingUsers from "../sorting-users";

export default class AppHeader extends Component{

    render() {
        const {onFilterChange, namePage} = this.props
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

}