import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "mobx-react";
import RootStore from './stores/RootStore';
import MainComponent from "./components/MainComponent";

const store = new RootStore();

class App extends React.Component {
  render(){
    return (
      <Provider store = {store}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
