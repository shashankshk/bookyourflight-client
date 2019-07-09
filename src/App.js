import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
// import Landing from './Landing';
// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
