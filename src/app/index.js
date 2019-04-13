import React, { Component } from 'react';
import { Layout } from './Layout';
import { Main } from './routes';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Main></Main>
        </Layout>
      </div>
    );
  }
}

export default App;
