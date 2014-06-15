Philo.VideoView = Ember.View.extend({

  didInsertElement: function() {

    console.log('after insert element');
    
    var view = this;
    var controller = view.get('controller');
    var router = this.get('controller.target.router');

    var onPlayerReady = function(event) {
      console.log('ready');
      event.target.playVideo();
    };

    var onPlayerStateChange = function(event) {
      console.log('player state change');
      if (event.data == YT.PlayerState.ENDED) {
        console.log('done');
        router.transitionTo('video', controller.get('nextVideo'));
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

      console.log('redefining player');

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
