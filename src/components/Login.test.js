import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import middleware from '../middleware'
import { _getUsers } from '../utils/_DATA'
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() })

test('renders dropdown with selection of users', async () => {
	const store = createStore(reducer, middleware);
	const userList = await _getUsers();
	
	const { getByTestId } = render(
		<Provider store={store}>
			<Login users={userList}/>
		</Provider>
	);

	const userSelect = getByTestId('login-select')
	expect(userSelect).toBeInTheDocument();

});
