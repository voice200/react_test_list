import React from 'react';
import './users-list.scss'
import UserListItem from "../user-list-item";

const UsersList = ({users, onDeletedUser}) => {

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

export default UsersList;