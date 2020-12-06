import React, {Component} from 'react';
import './app.scss'
import {BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Header from '../header';
import ErrorBoundry from "../error-boundry";
import {UsersPage} from "../pages";
import {FormPage} from "../pages";

export default class App extends Component {

   render() {
       const Demo = () => {
           return <div className="container">Demo</div>

       }
       return (
           <ErrorBoundry>
               <Router>
                       <Header/>
                       <div className="container">
                           <Route path="/" component={UsersPage}
                           exact
                           />
                         <Route path="/update/:id" exact
                                render={(match)=>{
                                    const {id} = match.match.params
                                    return <FormPage itemsId={id}/>}}/>
                         <Redirect to={'/'}/>
                       </div>

               </Router>
           </ErrorBoundry>
       );
   }

}