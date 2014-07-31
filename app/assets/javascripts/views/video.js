Philo.VideoView = Ember.View.extend({

  reinitVideo: function() {
    this.initVideo();
  }.observes('controller', 'controller.autoplay'),

  didInsertElement: function() {
    this.initVideo();
  },

  initVideo: function() {
    console.log('initVideo');
    var vid = $('#player1').first();
    //vid.get(0).player.remove();
    vid.mediaelementplayer();
  },

});
