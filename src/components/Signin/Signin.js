import React, { Component } from 'react';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './style.scss';

class Signin extends Component {
    state = {
        user: null
    };
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
            this.props.signInAction(this.state.user);
        }
        return <Redirect to='/'/>
    }
    render () {
        return (
            <div className="registration-container">
                <div className="registration-subcontainer">
                    <div className="main-heading">
                        <h1>Book Your Flight</h1>
                        <h2>Sign in</h2>
                    </div>
                    <div className="info">{this.props.msg}</div>

                    <div className="label-container">
                        <label className="registration-label">Name</label>
                    </div>
                    <input type="text" onChange={this.onChange} name="name" className="registration-input"/>
                    <div className="label-container">
                        <label className="registration-label">Email</label>
                    </div>
                    <input type="text" onChange={this.onChange} name="email" className="registration-input"/>
                    <div className="label-container">
                        <label className="registration-label">Phone</label>
                    </div>
                    <input type="text" onChange={this.onChange} name="phone" className="registration-input"/>
                    <div className="label-container">
                        <label className="registration-label">Password</label>
                    </div>
                    <input type="password" onChange={this.onChange} name="password" className="registration-input"/>
                    <button onClick={this.onSubmit}>Sign in</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        msg: state.user ? state.user.msg : null 
    }
}

const mapDispatchToProps = {
    signInAction : actions.signInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);