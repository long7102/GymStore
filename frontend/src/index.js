import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Đảm bảo đường dẫn này là chính xác
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);