/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './style.scss';

class Header extends Component {
    renderUserDetail = () => {
        const {user} = this.props;
        const detail = user ? 
            <ul>
                <li>Add credits</li>
                <li>Credits</li>
                <li>
                    <a href="/api/logout">Logout</a>
                </li>
            </ul> : 
            <ul>
                <li>
                    <a href="/login" >
                        Sign Up
                    </a>
                    <a href="/signin" >
                        Sign Up
                    </a>
                </li>
            </ul>;
        return detail;
    }
    render () {
        return (
            <nav>
                <div className="header-container">
                    <div className="heading">
                        <Link to="/"><h2>Book Your Flight</h2></Link>
                    </div>
                    <div className="sign-in">
                        {this.renderUserDetail()}
                    </div>
                    
                </div>
            </nav>
        )
    }
}
const  mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Header);