Philo.VideosIndexController = Ember.ArrayController.extend({
  needs: ["videos"],

  filteredVideos: Ember.computed.alias('controllers.videos.filteredVideos')

});
