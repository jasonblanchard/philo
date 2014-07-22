Philo.VideoRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('video', params.video_id);
  },
});
