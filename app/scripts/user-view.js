define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../../templates/user.html'
], function($, _, Backbone, Handlebars, template){
    UserView = Backbone.View.extend({
        template: Handlebars.compile(template),

        initialize: function() {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return UserView;
});
