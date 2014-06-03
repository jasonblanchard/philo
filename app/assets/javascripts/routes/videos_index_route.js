Philo.VideosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('video');
  }
});
