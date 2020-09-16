import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Components
import Header from './Components/Header/Header';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path={'/'} exact component={App} />
        <Route path={'/playlist'} exact component={App} />
        <Route path={'/live'} exact component={App} />
        <Route path={'/charts'} exact component={App} />
        <Route render={() => <h1 style={{ color: 'red', textAlign: 'center', height: '665px' }}>404 not found</h1>} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// Make routing here!
// Import Components here
serviceWorker.unregister();
