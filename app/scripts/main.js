/*global require*/
'use strict';

require.config({
    shim: {
        handlebars : {
            exports : 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'app'
], function (App) {
    App.initialize();
});
