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
      skip
    end
  end
end
