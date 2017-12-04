import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App';

function render() {
  ReactDOM.render(
    <AppContainer>
      <App />
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
