import React from 'react';
import ReactGa from 'react-ga';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Root from './components/Root';
import configureStore from './store/configureStore';
import {
  REACT_APP_GRAASP_APP_ID,
  REACT_APP_GRAASP_DEVELOPER_ID,
  REACT_APP_VERSION,
  REACT_APP_GOOGLE_ANALYTICS_ID,
} from './config/env';

ReactGa.initialize(REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGa.ga(
  'send',
  'pageview',
  `/${REACT_APP_GRAASP_DEVELOPER_ID}/${REACT_APP_GRAASP_APP_ID}/${REACT_APP_VERSION}/`,
);

const root = document.getElementById('root');
const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  root,
);
