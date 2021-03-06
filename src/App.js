import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './containers/Home/Home';
import Navigation from './containers/Navigation/Navigation';
import RegisterCertificate from './containers/RegisterCertificate/RegisterCertificate';
import ViewCertificate from './containers/ViewCertificate/ViewCertificate';
import Hash from './containers/ViewCertificate/Hash/Hash';
import AddCertifier from './containers/AddCertifier/AddCertifier';
import ListAuthorities from './containers/ListAuthorities/ListAuthorities';
import SignCertificate from './containers/SignCertificate/SignCertificate';
import './App.css';

import { network } from './env';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

window.ethers = require('ethers');
window.provider = window.ethers.getDefaultProvider(network);
window._z = require('./functions');
window.certificates = {};

require('./ethereum');
// window.certificateContractInstance = require('./ethereum').certificateContractInstance;

const App = props => (
  <Router history={history}>
    <div className="App">
      <img className="background-lines top" src='cert-background-lines.png' />
      <img className="background-lines bottom" src='cert-background-lines2.png' />
      <header className="App-header">
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register-certificate" exact component={RegisterCertificate} />
            <Route path="/view-certificate" exact component={ViewCertificate} />
            <Route path="/view-certificate/:hash" exact component={Hash} />
            <Route path="/add-certifier" exact component={AddCertifier} />
            <Route path="/list-authorities" exact component={ListAuthorities} />
            <Route path="/sign-certificate" exact component={SignCertificate} />
          </Switch>
        </div>
      </header>
    </div>
  </Router>
)

export default App;
