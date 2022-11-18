import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

test('renders App', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );

  expect(tree).toMatchSnapshot();
});
