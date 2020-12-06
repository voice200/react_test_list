import React, {Component} from 'react';
import './sorting-users.scss'

export default class SortingUsers extends Component{

    state = {
        filter: true
    }

    filterUsers = () =>{
        this.setState(({filter})=>{
            return{
                filter: !filter
            }
        });

        this.props.onFilterChange(this.state.filter);

    }

    render() {

        return (
            <button className="btn myBtn" onClick={()=> this.filterUsers(false)}>
                <i className="fa fa-sort-alpha-asc arrow"/>
            </button>
        );
    }

}