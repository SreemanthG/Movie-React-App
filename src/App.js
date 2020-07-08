import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Item from './components/item';
import NavButtons from './components/navbuttons'
import {createStore} from "redux"
import { act } from 'react-dom/test-utils';

const reducer = (state={movies:[]},action)=>{
    switch(action.type){
      case "ADDMOVIE":
        state = {
            movies:[...state.movies,action.payload]
        }
        // state.movies.push(action.payload)
        break;
      case "Hello":
        break;
    }
    return state;
};

const store = createStore(reducer,{movies:[]})

store.subscribe(()=>{
  console.log(store.getState())
})

function App() {
  return (
    <div className="App">
      <Navbar store={store}/>
      {/* <NavButtons /> */}
      <Item store={store}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
