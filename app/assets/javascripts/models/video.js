Philo.Video = DS.Model.extend({
  title: DS.attr('string'),
  mediaProvider: DS.attr('string'),
  mediaUrl: DS.attr('string'),
  sourceProvider: DS.attr('string'),
  sourceUrl: DS.attr('string'),
  info: DS.attr('string'),
  datePosted: DS.attr('date'),
  nsfw: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  sourceId: DS.attr('string')
});
