Ember.Handlebars.helper('youtubeEmbed', function(video) {
  return (function(video) {

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
      if (event.data == YT.PlayerState.ENDED) {
        console.log('done');
      }
    }
  })(video)

}, 'youtubeId');
