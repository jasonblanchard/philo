module("Integration Tests", {
  setup: function() {
    //Ember.run(Philo, Philo.advanceReadiness);
  },
  teardown: function() {
    Philo.reset();
  }
});

test("Homepage", function() {
  visit("/");
  click('a.play-first-video');

  andThen(function() {
    equal(currentRouteName(), 'video');
  });

});

test("simple test", function() {
  equal('test', 'test');
});

