import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';
import registerServiceWorker from 'utils/registerServiceWorker';
import { App } from 'views';
import { CustomConnectedRouter } from 'components';
import { store, persistor, history } from './redux';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomConnectedRouter history={history}>
            <Component />
          </CustomConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./views/app/App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./views/app/App').default;
    render(nextApp);
  });
}

registerServiceWorker();
