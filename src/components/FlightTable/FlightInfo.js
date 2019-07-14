import React, { Component } from 'react'

class FlightInfo extends Component {
    render () {
        const {operator, number, source, destination, departure, arrival, seats,price} = this.props.data;
        const duration = Math.abs(new Date(departure) - new Date(arrival)) / 36e5;
        const departureDate = new Date(departure);
        const arrivalDate = new Date(arrival);
        const departureTime = departureDate.getHours() + ':' + departureDate.getMinutes() + 'hrs.';
        const arrivalTime = arrivalDate.getHours() + ':' + arrivalDate.getMinutes() + 'hrs.';
        return (
            <div className="flight-info-container">
                <div className="flight-number">
                   {operator + ' ' + number}
                </div>
                <div className="info-badge">
                    <h3>{source}</h3>
                    <p>{departureTime}</p>
                </div>
                <div className="info-badge">
                    <h3>{destination}</h3>
                    <p>{arrivalTime}</p>
                </div>
                <div className="duration">
                    <p>Total duration{' ' + duration + ' hrs.'}</p>
                    {!this.props.booking && <p>Seats{' '+seats}</p>}
                    <p>Price: {' '+price}Rs</p>
                </div>{
                    this.props.user ? <button onClick={this.props.bookFlight} id={this.props.flightKey}>Book</button> :
                    !this.props.booking? 'Login to book': ''
                }
                
            </div>
        )
    }
}

export default FlightInfo;