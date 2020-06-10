import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// Import configureStore function. Another implementation to create and configure store
import { ConfigureStore } from './redux/configureStore';

//we assign the returned value of the function to the "store" variable
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
