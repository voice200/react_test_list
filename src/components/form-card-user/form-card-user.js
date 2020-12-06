import React, {Component} from 'react';
import './form-card-user.scss';
import ServicesData from '../../services/services-data';
import {withRouter} from 'react-router';

class FormCardUser extends Component{
    services = new ServicesData()
    state = {
        user:{},
        countryAll:[]
    }
    _isMounted = false;

    onUpdateUser = (event) =>{
       const id = this.props.itemId;
       const {user} = this.state;

        event.preventDefault();
        this.services.updateUser(id, user)
            .then(()=> {
                this.props.history.push(`/`);
            })
            .catch((e)=>{
                console.log(e.message)
            })
    }
    userChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(({user}) =>{
            const arr = {...user};
            const newState = {...arr, [name]: value};
            return {user: newState};
        });
    }

    getUser = (id) =>{
        this.services.getUserId(id)
            .then(data=>{
                this.setState({
                    user:data
                })
            })
            .catch((e)=>{
                console.log(e.message);
            })
    }
    getCountry= () =>{
        this._isMounted = true;
        if(this._isMounted){
            this.services.getCountry()
                .then(data =>{
                    this.setState({
                        countryAll: data
                    })
                })
                .catch((e)=>{
                    console.log(e.message);
                })
        }
    }
    componentDidMount = () => {
        const id = this.props.itemId;
        this.getUser(id);
        this.getCountry();
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    noSave = (event) =>{
        event.preventDefault();
        this.props.history.push(`/`);
    }
    render() {
        const {id, name, age, phone, email, country} = this.state.user;
        const{countryAll} = this.state

        const countrySelect = countryAll.map((item,index) =>{
                return <option key={index}>{item}</option>;
        });

        return(
          <form className="form-group myForm" onSubmit={this.onUpdateUser} onChange={this.userChange}>
                  <label htmlFor="name">Name</label>
                  <input type="text"
                         className="form-control"
                         id="name" placeholder="Ivan"
                         name="name" value={name} required/>
                  <label htmlFor="phone" >Phone</label>
                  <input type="number" className="form-control" id="phone"
                         placeholder="79998884567" name = "phone" value={phone} required/>
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email"
                             placeholder="name@example.com" name="email" value={email} required/>
                  <label htmlFor="country">Country</label>
                  <select className="form-control" id="country" name="country" value={country} required>
                      {countrySelect}
                  </select>
                    <input type="hidden" name="id" value={id}/>
                  <label htmlFor="age">Age</label>
                   <input type="number" className="form-control" id="age"
                                 placeholder="18" name="age" value={age} required/>
                  <div className="btns d-flex">
                    <button
                        className="btn update"
                        onSubmit={this.onUpdateUser}

                    >Update</button>
                    <button
                        className="btn btn-warning"
                        onClick={this.noSave}
                    >Close</button>
                 </div>
          </form>
        );
    }
}

export default withRouter(FormCardUser);