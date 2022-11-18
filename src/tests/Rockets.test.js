import React from 'react';
import {
  fireEvent, render, getByText,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import providerWrapper from '../services/testWrapper';
import store from '../redux/configureStore';

describe('Rockets page ', () => {
  test('renders rockets', async () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText(tree.container, 'Rockets')).toBeInTheDocument();
  });

  test('navigate to rockets', async () => {
    const { getByText } = providerWrapper(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { store },
    );
    setTimeout(() => {
      fireEvent.click(getByText('Rockets'));
      expect(getByText('Description')).toBeInTheDocument();
    }, 1000);
  });

  test('join mission', async () => {
    const { getByText } = providerWrapper(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { store },
    );
    fireEvent.click(getByText('Rockets'));
    setTimeout(() => {
      fireEvent.click(getByText('Reserve Rocket'));
      expect(getByText('Cancel Reservation')).toBeInTheDocument();
    }, 1000);
  });

  test('Active member', async () => {
    const { getByText } = providerWrapper(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { store },
    );
    fireEvent.click(getByText('Rockets'));
    setTimeout(() => {
      fireEvent.click(getByText('Reserve Rocket'));
      expect(getByText('Reserved')).toBeInTheDocument();
    }, 1000);
  });
});
