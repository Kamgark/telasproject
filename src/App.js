import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/layout';
import Leftbar from './components/leftbar';
import Dashboard from './components/dashboard';
import LayoutOne from './components/layout-one';
import DashboardOne from './components/dashboardOne';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Leftbar/>
            <LayoutOne>
              <Route path="/" component={Dashboard} exact/>
              <Route path="/dashboardone" component={DashboardOne}/>
            </LayoutOne>
        </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
