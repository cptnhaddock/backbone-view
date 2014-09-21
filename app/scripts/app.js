define([
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',    // lib/backbone/backbone
    'router'
], function($, _, Backbone, Router) {
    var initialize = function() {
        Router.initialize();
    };

    return {
        initialize : initialize
    };
});