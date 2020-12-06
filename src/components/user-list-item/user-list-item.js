import React, {Component} from 'react';
import './user-list-item.scss';
import {withRouter} from 'react-router'

class UserListItem extends Component{

    onUpdateUser= (event) =>{
        const id = event.target.dataset.id
        this.props.history.push(`/update/${id}`)
    }
    render() {
        const {user:{name, country, age, phone, email, id}, onDeleted} = this.props
        return (
            <div className="user-item d-flex">
                <div className="profile d-flex">
                    <div className="leftBlock">
                        <div className="name">{name}</div>
                        <div className="country">{country}</div>
                    </div>
                    <div className="info">
                        <div>age: {age}</div>
                        <div>phone: {phone}</div>
                        <div>email: {email}</div>
                    </div>
                </div>
                <div className="d-flex btns">
                    <button
                        className="btn btn-success update"
                        data-id={id}
                        onClick={this.onUpdateUser}
                    > Update</button>
                    <button className="btn btn-danger delete" onClick={onDeleted}> Delete </button>
                </div>
            </div>
        );
    }
}

export default  withRouter(UserListItem);
