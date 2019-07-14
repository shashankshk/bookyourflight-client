import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import FlightInfo from './FlightInfo';
import './style.scss';
class FlightTable extends Component {
    state = {
        sort:''
    };
    onSortSelect =(e) => {
        const value = e.target.value;
        this.setState({sort: value});
    }
    bookFlight = async (e) => {
        console.log(e.target.id);
        const flight = this.props.flights[e.target.id];
        const data = {
            id: flight._id,
            seats: flight.seats,
            user : {
                email: this.props.user.data? this.props.user.data.email : ''
            }
        }
        const confirm = window.confirm("Do you want to book this flight?");
        if (confirm) {
            await this.props.bookFlightAction(data);
        }
    }
    sort = async () => {
        const {sort} = this.state;
        console.log(sort);
        const sortedFlights = JSON.parse(JSON.stringify(this.props.flights)).sort((a,b) =>{
            if(sort ==='duration' || sort ==='price'){
                return a[sort] -b[sort]
            } 
            return new Date(a[sort]) - new Date(b[sort])
        } );
        await this.props.sortAction(sortedFlights);
        this.forceUpdate();
    }
    renderFlightsInfo = () => {
        const flighstInfo = this.props.flights? this.props.flights.map((flight, index) => {
            return <FlightInfo data={flight} user={this.props.user} key={index} bookFlight={this.bookFlight} flightKey={index}/>
        }) : '';
        return flighstInfo;
    }
    
    renderBookingConfirmation = () => {

        if(this.props.booking && this.props.booking.isbookingSuccesfull) {
            return <div className="booking-info">Booking succesful!</div>
        }
        return '';
    }

    render () {
        return (
            <div className="flight-table-container">
                {this.renderBookingConfirmation()}
                {
                    this.props.flights ? 
                    <div className="sort-container">
                    <select className="sort-select" onClick={this.onSortSelect}>
                        <option value="departure">Departure</option>
                        <option value="arrival">Arrival</option>
                        <option value="duration">Total duration</option>
                        <option value="price">Price</option>
                    </select>
                    <button onClick={this.sort}>Sort</button>
                    </div>
                     : ''
                }
                    
                    
                {this.renderFlightsInfo()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights,
        user: state.user,
        booking: state.booking
    }
}

const mapDispatchToProps = {
    sortAction: actions.sortFlights,
    bookFlightAction: actions.bookFlight
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable);