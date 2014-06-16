Philo.VideoView = Ember.View.extend({

  reinitYoutubePlayer: function() {
    this.initYoutubePlayer();
  }.observes('controller'),

  didInsertElement: function() {
    this.initYoutubePlayer();
  },

  initYoutubePlayer: function() {
    var view = this;
    var controller = view.get('controller');
    var router = this.get('controller.target.router');

    var onPlayerReady = function(event) {
      console.log('ready');
      event.target.playVideo();
      if ( (controller.get('autoplay') === true) && (event.target.getDuration() <= 0)  ) {
        router.transitionTo('video', controller.get('nextVideo'));
      }
    };

    var onPlayerStateChange = function(event) {
      console.log('player state change');
      if (event.data == YT.PlayerState.ENDED) {
        console.log('done');
        if ( controller.get('autoplay') === true ) {
          router.transitionTo('video', controller.get('nextVideo'));
        }
      }
    };

    // This path runs on page load
    (function(onPlayerReady, onPlayerStateChange) {
      var player;
      window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      window.onPlayerReady = onPlayerReady;
      window.onPlayerStateChange = onPlayerStateChange;
    })(onPlayerReady, onPlayerStateChange);

    // After page load, we can re-defined player
    if ( typeof YT.Player === 'function' ) {

      player = new YT.Player('player', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      window.onPlayerReady = onPlayerReady;
      window.onPlayerStateChange = onPlayerStateChange;
    }
  }

});
