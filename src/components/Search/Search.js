import React, { Component } from 'react';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import SelectSearch from 'react-select-search';
import *  as actions from '../../actions';
import {cities} from './cities';
import './style.scss';
import "react-datepicker/dist/react-datepicker.css";

class Search extends Component {
    state = {
        currentDate: new Date(),
        date: new Date().getUTCDate(),
        month: new Date().getUTCMonth() +1,
        isInValid: false
    };

    onChange = (data) => {
        this.setState({isInValid:false})
        const {city, name} = data;
        this.setState({
            [name]: city
        });
    }

    onDateChange = (selectedDate) => {
        var month = selectedDate.getUTCMonth() + 1; //months from 1-12
        var day = selectedDate.getUTCDate();
        this.setState({date: day, month, currentDate: selectedDate})
    }

    onSubmit = async () => {
        const {source, destination, date, month} = this.state;
        if(!source || !destination) {
            this.setState({isInValid: true});
            return;
        }
        this.setState({isInValid: false});
        const queryArr = [
            {source: source.name},
            {destination: destination.name},
            {date},
            {month}
        ]
        await this.props.searchFlightsActions(queryArr);
    }

   
    render () {
        return (
            <div className="search-container">
                <div className="source select-city-container">
                    <label>From</label>
                    <SelectSearch options={cities} value={this.state.source? this.state.source.value: ''} placeholder="Select city" name="source" onChange={(city) => this.onChange({city, name: "source"})}/>
                </div>
                <div className="destination select-city-container">
                    <label>To</label>
                    <SelectSearch options={cities} placeholder="Select city" value={this.state.destination? this.state.destination.name: ''} name="destination" onChange={(city) => this.onChange({city, name: "destination"})}/>
                </div>
                <DatePicker
                    selected={this.state.currentDate}
                    onChange={this.onDateChange}
                />

                <button onClick={this.onSubmit}>Search</button>
                {this.state.isInValid ? <div className="warning">Select source and destination.</div> : ''}
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchFlightsActions: actions.fetchFlights
}

export default connect(null, mapDispatchToProps)(Search);