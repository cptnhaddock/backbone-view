define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'user-view',
    'text!../../templates/main.html'
], function($, _, Backbone, Handlebars, UserView, template) {
    ApplicationMainView = Backbone.View.extend({
        template: Handlebars.compile(template),
        el: $('#container'),

        initialize: function() {
            this.render();

            new UserView({el: this.$('user')});
        },

        render: function() {
            this.$el.html(this.template());
        }
    });

    return ApplicationMainView;
});
