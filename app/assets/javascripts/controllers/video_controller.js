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
    var regex = /v=([A-Za-z\d-_]*)/
    if (mediaUrl.match(regex)) {
      id = mediaUrl.match(regex)[1];
    } else if (mediaUrl.match(/youtu.be\/([A-Za-z\d]+)/)) {
      id = mediaUrl.match(/youtu.be\/([A-Za-z\d]+)/)[1];
    };

    return id;
  }.property('mediaUrl'),

  youtubeSrc: function() {
    return "http://www.youtube.com/embed/" + this.get('youtubeId')  + "?enablejsapi=1"
  }.property('youtubeId')

});
