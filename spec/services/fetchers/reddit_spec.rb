require 'spec_helper'
require_relative '../../raw_feeds/reddit'

describe Fetchers::Reddit do

  before :each do
    allow(Fetchers::Reddit).to receive(:data).and_return(RawFeeds::Reddit.data)
  end

  describe '.url' do
    it 'returns a string URL' do
      expect(Fetchers::Reddit.url).to eq 'http://www.reddit.com/r/videos.json'
    end
  end

  describe '.create_videos!' do
    it 'builds video objects' do
      Fetchers::Reddit.create_videos!

      expect(Video.all.count).to eq 2

      v = Video.by_source_id('26o2v7').first

      expect(v.title).to eq 'How to do visual comedy'
      expect(v.media_provider).to eq 'Vimeo'
      expect(v.media_url).to eq 'https://vimeo.com/96558506'
      expect(v.source_provider).to eq 'Reddit'
      expect(v.source_url).to eq 'http://www.reddit.com/r/videos/comments/26o2v7/how_to_do_visual_comedy/'
      expect(v.info).to eq "If you love visual comedy, you gotta love Edgar Wright, one of the few filmmakers who is consistently finding humor through framing, camera movement, editing, goofy sound effects and music. This is an analysis and an appreciation of a director so awesome that Marvel had to fire him on a holiday."
      expect(v.date_posted).to eq DateTime.strptime("1401249726",'%s')
      expect(v.nsfw).to eq false
    end
  end
end
