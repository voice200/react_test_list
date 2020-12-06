import React, {Component} from 'react';
import ErrorBoundry from "../error-boundry";
import FormCardUser from "../form-card-user";
import AppHeader from "../app-header";

export default class FormPage extends Component{
    state = {
        namePage: 'Edit User'
    }
    render() {

        return (
            <ErrorBoundry>
                <AppHeader namePage={this.state.namePage} />
                <FormCardUser itemId={this.props.itemsId}/>
            </ErrorBoundry>

        );
    }
}