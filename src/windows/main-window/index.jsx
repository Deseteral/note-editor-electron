import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../../saga';
import reducer from '../../reducer';
import App from '../../components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'),
  );
}

export default render;
