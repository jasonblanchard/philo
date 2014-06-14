Philo.VideoView = Ember.View.extend({

  didInsertElement: function() {
    
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

    if ( typeof YT.Player === undefined ) {
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
