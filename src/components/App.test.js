import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import middleware from '../middleware'
import App from './App';

test('renders main app', () => {
	const store = createStore(reducer, middleware);
	
	const { getByTestId } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	// const loginComponent = getByTestId('app')
	// expect(loginComponent).toBeInTheDocument();
});
