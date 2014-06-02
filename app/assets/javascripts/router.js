// For more information see: http://emberjs.com/guides/routing/

Philo.Router.map(function() {
  this.resource('videos', function() {
    this.resource('book', {path: '/:video_id'});
  });
});
