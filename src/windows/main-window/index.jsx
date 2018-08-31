import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
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
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    document.getElementById('root'),
  );
}

export default render;
