import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {ToDoList} from './to-do-list.js';

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start();
  },

  routes: {
    '' : 'showHomeWork'
  },

  showHomeWork: function(){
    ReactDOM.render(<ToDoList/>, document.querySelector('#app-container'))
  }
})

let app = new AppRouter()
