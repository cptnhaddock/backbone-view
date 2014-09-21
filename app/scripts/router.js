define([
  'jquery',
  'underscore',
  'backbone',
  'main-view'
], function($, _, Backbone, ApplicationMainView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'todo': 'showTodo',
      '' : 'showMain'
    },
    showMain: function(){
      var amv = new ApplicationMainView();
    },
    defaultAction: function() {
      console.log('No route');
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});