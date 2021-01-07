import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LaunchScreen from './screens/LaunchScreen'
import MeetingScreen from './screens/MeetingScreen'
import NoMeetingScreen from './screens/NoMeetingScreen'

function App() {
  return ( <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <LaunchScreen />
        </Route>
        <Route path='/Meeting' exact>
          <MeetingScreen />
        </Route>
        <Route path='/NoMeeting' exact>
          <NoMeetingScreen />
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
