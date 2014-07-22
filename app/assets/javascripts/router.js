// For more information see: http://emberjs.com/guides/routing/

Philo.Router.map(function() {
  this.resource('videos', function() {
    this.resource('video', {path: '/:video_id'});
  });
});

Ember.Route.reopen({
  setupController: function(controller, model) {
    this._super(controller, model);
    if (controller.get('pageTitle')) {
      this.controllerFor('application').set('pageTitle', controller.get('pageTitle'));
    } else {
      this.controllerFor('application').set('pageTitle', 'Philo');
    }
  }
});
