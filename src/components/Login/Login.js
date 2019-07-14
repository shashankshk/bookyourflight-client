import React, { Component } from 'react';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';


import './style.scss';

class Login extends Component {
    state = {
        user: null
    }
    onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            user: {
                ...this.state.user,
                [key]: value
            }
        });
    }

    onSubmit = async () => {
        if(this.state.user){
            await this.props.loginAction(this.state.user);
            if(this.props.userData) {
                this.props.history.push('/')
            }
        }
    }
    render () {
        return (
            <div className="registration-container">
                <div className="registration-subcontainer">
                    <div className="info">{this.props.msg}</div>
                    <div className="main-heading">
                        <h1>Book Your Flight</h1>
                        <h2>Login</h2>
                    </div>
                    <div className="label-container">
                        <label className="registration-label">Email</label>
                    </div>
                    <input type="text" onChange={this.onChange} name="email" className="registration-input"/>
                    <div className="label-container">
                        <label className="registration-label">Password</label>
                    </div>
                    <input type="password" onChange={this.onChange} name="password" className="registration-input"/>
                    <button onClick={this.onSubmit}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return (
        {
            userData: state.user ? state.user.data: null,
            msg: state.user ? state.user.msg : null 

        }
    )
}
const mapDispatchToProps = {
    loginAction: actions.loginUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);