import React, { Component } from 'react';
import { Layout } from './Layout';
import { Main, UserPage } from './routes';
import './styles.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider} from "react-redux";
import { store } from './store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}


