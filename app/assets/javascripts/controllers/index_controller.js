Philo.IndexController = Ember.ArrayController.extend({

  needs: ['videos'],

  videos: Ember.computed.alias('controllers.videos.filteredVideos'),

  firstVideo: function() {
    return this.get('videos').get('firstObject');
  }.property('controllers.videos.filteredVideos')

});
