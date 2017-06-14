import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, IndexRedirect, IndexRoute, Redirect,DefaultRoute, Switch } from "react-router-dom"
import promise from "redux-promise";
import reducers from './reducers';

import PostsIndex from "./components/posts_index"
import PostNew from "./components/post_new"
import PostShow from "./components/post_show"


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promise)
));

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
      <div className="">
        <Switch> 
          <Route path="/posts/new" component={PostNew}></Route>
          <Route path="/posts/:id" component={PostShow}></Route>
          <Route path="/"  component={PostsIndex}></Route>
          <Redirect from="*" to="/"/>
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
