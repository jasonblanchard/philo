Philo.VideosIndexController = Ember.ArrayController.extend({
  sortProperties: ['createdAt', 'datePosted'],
  sortAscending: false,
  needs: ["application"],
  includeNsfw: Ember.computed.alias('controllers.application.nsfw'),

  filteredVideos: function() {
    var videos = this.filterBy('mediaProvider', 'YouTube');
    if (this.get('includeNsfw') === false) {
      return videos.filterBy('nsfw', false);
    } else {
      return videos;
    }
  }.property('@each.model', 'includeNsfw')

});
