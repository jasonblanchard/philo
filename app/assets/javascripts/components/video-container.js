Philo.VideoPlayerComponent = Ember.Component.extend({
  classNames: ['mediaelements'],

  showAutoplay: function() {
    console.log(this.autoplay);
  }.observes('autoplay'),

  reinitVideo: function() {
    this.rerender();
  }.observes('video.mediaUrl'),

  didInsertElement: function() {
    this.initVideo();
  },

  initVideo: function() {

    var self = this;

    var player = new MediaElementPlayer('#video-player', {
      success: function(player, domElement) {
        player.addEventListener('canplay', function() {
          self.playVideo(player);
        });

        player.addEventListener('ended', function() {
          self.videoEnded();
        });
      }
    });
  },

  playVideo: function(player) {
    if (this.autoplay) {
      player.play();
    }
  },

  videoEnded: function() {

    //TODO: Add a transition state before going to next video
    
    var self = this;
    if (this.autoplay) {
      setTimeout(function() {
        Philo.Router.router.transitionTo('video', self.nextVideo);
      }, 2000);
    }
  }

});
