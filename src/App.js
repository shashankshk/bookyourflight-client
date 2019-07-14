import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Search from './components/Search/Search';
import FlightTable from './components/FlightTable/FlightTable';
import Booking from './components/FlightTable/MyBookings';
import './App.scss';
// import Landing from './Landing';
// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            {/* <Search/> */}
            <Route exact path="/" component={Search} key="1"/>

            <Route exact path="/" component={FlightTable} key="1"/>
            <Route exact path="/booking" component={Booking} key="2"/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/Signin" component={Signin} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
