/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './style.scss';

import * as actions from '../../actions/index';

class Header extends Component {
    onLogOut = () => {
        this.props.logoutAction();
        return <Redirect to='/'/>
    }

    renderUserDetail = () => {
        const {user} = this.props;
        const detail = user ? 
            <ul>
               <li><Link
                    to='/booking'
                >My Bookings </Link></li> 
                <li>
                    <a onClick={this.onLogOut}>Logout</a>
                </li>
            </ul> : 
            <ul>
                <li>
                <Link
                    to='/login'
                >Login </Link>
                    <Link
                    to='/signin'
                >Sign in  </Link>
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

const mapDispachToProps = {
    logoutAction: actions.logOut
}
export default connect(mapStateToProps, mapDispachToProps)(Header);