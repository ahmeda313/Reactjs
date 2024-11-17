import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import ProductContextProvider from './context/product-context';
import { configureStore } from './hooks-store/product-store';
// import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

configureStore()

ReactDOM.render(
  // <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductContextProvider>
  ,document.getElementById('root')
);
