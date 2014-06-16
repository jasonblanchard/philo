Philo.VideosIndexController = Ember.ArrayController.extend({
  sortProperties: ['createdAt', 'datePosted'],
  sortAscending: false,

  filteredVideos: function() {
    return this.filterBy('mediaProvider', 'YouTube');
  }.property('@each.model')

});
