Philo.IndexController = Ember.ArrayController.extend({

  firstVideo: function() {
    return this.get('firstObject');
  }.property()

});
