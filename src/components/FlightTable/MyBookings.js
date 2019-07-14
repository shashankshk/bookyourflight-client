import React, { Component } from 'react';
import {connect} from 'react-redux';
import FlightInfo from './FlightInfo';
import './style.scss';
import * as actions from '../../actions';

class MyBookings extends Component {
    componentDidMount = () => {
        const {user} = this.props;
        if(user){
            this.props.fetchBookingsAction({email: this.props.user.data.email});
        }
        
    }
    renderFlightsInfo = () => {
        const flighstInfo = this.props.booking? this.props.booking.bookings.map((flight, index) => {
            return <FlightInfo data={flight} user='' booking={true} key={index} flightKey={index}/>
        }) : '';
        return flighstInfo;
    }
    render () {
        return (
            <div className="flight-table-container">
                {this.renderFlightsInfo()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        booking: state.booking,
        user: state.user
    }
}

const mapDispatchToProps = {
    fetchBookingsAction: actions.fetchBookings
}


export default connect(mapStateToProps, mapDispatchToProps)(MyBookings);