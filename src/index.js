import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import config  from './store/config'
import App from './App'



const store = config()


 

store.subscribe(()=>{
  console.log(store.getState())
})







ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
