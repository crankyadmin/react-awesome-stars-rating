import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Form from './formContainer';

const store = createStore();

function ReduxFormExample() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default ReduxFormExample;
