import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import middleware from '../middleware'
import App from './App';


test('renders learn react link', () => {
	const store = createStore(reducer, middleware);
  const { getByTestId } = render(
  	<Provider store={store}>
			<App />
		</Provider>
	);
  const appdiv = getByTestId('app')
  expect(appdiv).toBeInTheDocument();
});
