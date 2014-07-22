Philo.VideosIndexController = Ember.ArrayController.extend({
  needs: ["videos"],
  pageTitle: "All the Videos",

  filteredVideos: Ember.computed.alias('controllers.videos.filteredVideos')

});
