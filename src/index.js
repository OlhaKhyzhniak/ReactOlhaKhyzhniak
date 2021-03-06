import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import * as serviceWorker from './serviceWorker';
import './utils/styles/main.scss';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
