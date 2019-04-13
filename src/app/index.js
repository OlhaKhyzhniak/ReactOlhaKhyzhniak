import React, { Component } from 'react';
import { Layout } from './Layout';
import { Main, UserPage } from './routes';
import './styles.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/user:login' component={UserPage} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}


