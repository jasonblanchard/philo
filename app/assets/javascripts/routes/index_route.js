Philo.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('video');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
