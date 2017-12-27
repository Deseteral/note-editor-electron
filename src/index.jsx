import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducer';
import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(sagaMiddleware),
);

function render() {
  ReactDOM.render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    document.getElementById('root'),
  );
}

function start() {
  render();
  if (module.hot) {
    module.hot.accept(render);
  }
}

export default start;
