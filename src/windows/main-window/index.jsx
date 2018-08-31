import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../../saga';
import reducer from '../../reducer';
import App from '../../components/App';

function render() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(saga);


  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'),
  );
}

export default render;
