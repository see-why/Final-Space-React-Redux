import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import store from '../redux/configureStore';

it('App renders the UI as expected', () => {
  let tree;
  act(() => {
    tree = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
  });
  expect(tree).toMatchSnapshot();
});
