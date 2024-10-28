import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'; // the Provide tag is imported from here
import { createStore, applyMiddleware } from 'redux';
// import ReactDOM from 'react-dom'; // used in the tutorial 
import App from './components/App';
import reducers from './reducers';


const store = createStore( ()=> [],{}, applyMiddleware());
const el = document.getElementById("root");
const root= ReactDOM.createRoot(el);
root.render(<Provider store={store}><App/></Provider>) // Provider is a pre-made components, that passes store to all Ract component within the Provider tag is there are updated to the store

// ReactDOM.render(<App/>, document.querySelector('#root')); // used in the tutorial