Philo.IndexController = Ember.ArrayController.extend({

  firstVideo: function() {
    // TODO: This isn't really the first video, figure out how to get it from the videosIndex controller
    return this.get('lastObject');
  }.property()

});
