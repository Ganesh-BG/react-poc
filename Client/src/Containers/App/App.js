import React from 'react';
import Container from '../../Components/Container/Container';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../../Components/Header/Header';
import Styles from './App.module.scss';

function App() {
  return (
    <Provider store={store} data-test="AppComponent">
      <div className={Styles.app_container}>
        <Header />
        <Container />
      </div>
    </Provider>
  );
}

export default App;
