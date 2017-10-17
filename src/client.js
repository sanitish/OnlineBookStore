import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import {addToCart} from'./actions/cartActions';
const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducers, middleware);
import BooksList from'./components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from'./components/pages/booksForm';
import About from'./components/pages/about';
import Contact from'./components/pages/contact';


import Main from './main';
const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList}/>
                <Route path="/admin" component={BooksForm}/>
                <Route path="/cart_item" component={Cart}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contact}/>
                <Route path="/cart_item" component={Cart}/>

              </Route>
        </Router>
    </Provider>
)
ReactDOM.render(Routes, document.getElementById('app'));
