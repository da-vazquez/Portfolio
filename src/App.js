import React from 'react';
import { ApmRoute } from '@elastic/apm-rum-react'
import { Redirect } from 'react-router-dom';
import "./App.css";
//components
import Home from './components/Home/Home';

import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
  serviceName: 'portfolio-dv',
  serverUrl: process.env.REACT_APP_APM_SERVER_URL,
  serviceVersion: '1.0',
  environment: 'production',
  active: true
})

function App() {
  return (
    <div className='App'>
      <ApmRoute
          exact
          path="/"
          component={() => (
            <Redirect to={{pathname: '/home'}}/>
          )}
        />
        <ApmRoute path="/home" component={Home}/>
  </div>
  );
}

export default App;
