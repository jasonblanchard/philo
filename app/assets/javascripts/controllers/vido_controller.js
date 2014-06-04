Philo.VideoController = Ember.ObjectController.extend({
  youtubeId: function() {
    var mediaUrl = this.get('mediaUrl');
    var id;
    if (mediaUrl.match(/v=([A-Za-z\d]*)/)) {
      id = mediaUrl.match(/v=([A-Za-z\d]*)/)[1];
    } else if (mediaUrl.match(/youtu.be\/([A-Za-z\d]+)/)) {
      id = mediaUrl.match(/youtu.be\/([A-Za-z\d]+)/)[1];
    };

    return id;
  }.property('mediaUrl')
});
