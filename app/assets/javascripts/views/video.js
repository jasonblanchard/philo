Philo.VideoView = Ember.View.extend({

  didInsertElement: function() {

    window.onPlayerReady = function(event) {
      console.log('ready');
    }

    window.onPlayerStateChange = function(event) {
      console.log('player state change');
      if (event.data == YT.PlayerState.ENDED) {
        console.log('done');
      }
    }

    if ( typeof YT.Player === undefined ) {
      (function() {

        console.log("creating player");

        var player;

        window.onYouTubeIframeAPIReady = function() {
          player = new YT.Player('player', {
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }

        window.onPlayerReady = function(event) {
          console.log('ready');
        }

        window.onPlayerStateChange = function(event) {
          console.log('player state change');
          if (event.data == YT.PlayerState.ENDED) {
            console.log('done');
          }
        }
      })();

    } else if ( typeof YT.Player === 'function' ) {
      player = new YT.Player('player', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
  }

});
