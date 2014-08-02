Philo.IndexRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('video');
  },

  setupController: function(model, controller) {
    this._super(model, controller);
    this.controllerFor('videos').set('model', model);
  }

});
