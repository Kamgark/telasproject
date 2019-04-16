import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/layout';
import Leftbar from './components/leftbar';
import Dashboard from './components/dashboard';
import LayoutOne from './components/layout-one';
import DashboardOne from './components/dashboardOne';
import Atendimento from './components/atendimento';
import Horarius from './components/horarius';
import Profile from './components/pro';
import Twodiv from './components/twodiv';
import Login from './components/login';
import Identification from './components/identification';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          
            
              <Route path="/" component={Dashboard} exact/>
              <Route path="/dashboardone" component={DashboardOne}/>
              <Route path="/atendimento" component={Atendimento}/>
              <Route path="/horarius" component={Horarius}/>
              <Route path="/pro" component={Profile}/>
              <Route path="/twodiv" component={Twodiv}/>
              <Route path="/login" component={Login}/>
              <Route path="/identification" component={Identification}/>
        
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
