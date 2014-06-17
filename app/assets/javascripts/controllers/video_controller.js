Philo.VideoController = Ember.ObjectController.extend({

  needs: ["videos", "application"],

  autoplay: Ember.computed.alias('controllers.application.autoplay'),

  nextVideo: function() {
    var videos = this.get('controllers.videos');
    var index = videos.indexOf(this.get('model')) - 1;
    return videos.objectAt(index);
  }.property('model'),

  previousVideo: function() {
    var videos = this.get('controllers.videos');
    var index = videos.indexOf(this.get('model')) + 1;
    return videos.objectAt(index);
  }.property('model'),

  youtubeId: function() {
    var mediaUrl = this.get('mediaUrl');
    var id;
    var longRegex = /v=([A-Za-z\d-_]*)/;
    var shortRegex = /youtu.be\/([A-Za-z\d-_]+)/;
    if (mediaUrl.match(longRegex)) {
      id = mediaUrl.match(longRegex)[1];
    } else if (mediaUrl.match(shortRegex)) {
      id = mediaUrl.match(shortRegex)[1];
    };

    return id;
  }.property('mediaUrl'),

  youtubeSrc: function() {
    return "http://www.youtube.com/embed/" + this.get('youtubeId')  + "?enablejsapi=1"
  }.property('youtubeId')

});
