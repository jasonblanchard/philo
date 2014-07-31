Philo.VideoController = Ember.ObjectController.extend({

  needs: ["videos", "application"],

  autoplay: Ember.computed.alias('controllers.application.autoplay'),

  videos: Ember.computed.alias('controllers.videos.filteredVideos'),

  pageTitle: function() {
    title = this.get('title');
    if (this.get('nsfw')) {
      title + '[nsfw]';
    }
    return title;
  }.property('model'),

  previousVideo: function() {
    var videos = this.get('videos');
    var index = videos.indexOf(this.get('model')) - 1;
    return videos.objectAt(index);
  }.property('model', 'videos'),

  nextVideo: function() {
    var videos = this.get('videos');
    var index = videos.indexOf(this.get('model')) + 1;
    return videos.objectAt(index);
  }.property('model', 'videos'),

});
