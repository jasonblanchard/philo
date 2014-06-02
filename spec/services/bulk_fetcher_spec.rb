require 'spec_helper'

describe BulkFetcher do

  before :each do 
    BulkFetcher.with_each_service do |klass|
      allow(klass).to receive(:data).and_return("RawFeeds::#{klass.source_provider}".constantize.data)
    end
  end

  describe '.fetch_and_save_all!' do
    it "calls the services 'fetch_and_create_videos!' method" do
      expect(Fetchers::Reddit).to receive(:fetch_and_create_videos!)
      BulkFetcher.fetch_and_save_all!
    end
  end

  describe '.fetchers' do
    it 'returns an array of all the fetcher services' do
      expect(BulkFetcher.fetchers).to be_an Array
      expect(BulkFetcher.fetchers).to include Fetchers::Reddit
    end
  end

  describe '.with_each_service' do
    it 'calls block on each service class' do
      output = []
      BulkFetcher.with_each_service do |klass|
        output << klass
      end

      expect(output).to include Fetchers::Reddit
    end
  end
end
