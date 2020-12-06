import React, {Component} from 'react';
import ServicesData from "../../services/services-data";
import Spinner from "../spinner";
import UsersList from "../users-list";
import ErrorBoundry from "../error-boundry";
import AppHeader from "../app-header";
import {withRouter} from 'react-router-dom';

class UsersPage extends Component{
    services = new ServicesData();
    state={
        users:[],
        loading: true,
        filter: false,
        namePage: 'List of users'
    }
    _isMounted = false;

    getUsers = () =>{
        this.services.getAllUsers()
            .then(this.onUsersLoaded)
            .catch((e)=>{
                console.log(e.message)
            })
    }
    componentDidMount = ()=> {
        this._isMounted = true;
        this.getUsers()
    }
    onUsersLoaded = (users) =>{
        this.setState({
            users,
            loading:false
        })
    }
    onDeleteUserState = (id) =>{
        const users = this.state.users.filter(user => user.id !== id);
        this.onUsersLoaded(users);
    }

    onDeletedUser = (id) =>{
        this.services.deleteUser(id)
            .then(()=>{
                this.onDeleteUserState(id)
            })
            .catch((e)=>{
                console.log(e.message)
            })
    }
    componentWillUnmount = ()=>{
        this._isMounted = false;
    }

    filterUsers = (users, filter) =>{
        if (filter) {
            const arr = [...users]
            arr.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            return arr;
        } else {
            return users;
        }

    }
    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    render() {
        const {users, loading, filter, namePage} = this.state
        const hasDate = !loading;
        const spinner = loading ? <Spinner/> : null
        const content = hasDate ? <UsersList
            users={this.filterUsers(users,filter)}
            onDeletedUser={this.onDeletedUser}
        /> : null;

        return (
            <ErrorBoundry>
                    {spinner}
                    <AppHeader
                        namePage={namePage}
                        onFilterChange = {this.onFilterChange}
                    />
                    {content}
            </ErrorBoundry>
        );
    }
}

export default withRouter(UsersPage)