Philo.LoadingRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render({outlet: 'loading'});
  }

});
