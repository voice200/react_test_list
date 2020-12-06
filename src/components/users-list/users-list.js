import React, {Component} from 'react';
import './users-list.scss'
import UserListItem from "../user-list-item";

export default class UsersList extends Component{
    render() {

        const {users, onDeletedUser} = this.props

        const elements = users.map((user) => {
            return (
                <div key={user.id} >
                    <UserListItem
                        user={user}
                        onDeleted={() => onDeletedUser(user.id)}
                         />
                </div>
            );
        });

        return(
            <div className="container users-list">
                {elements}
            </div>
        );
    }
}