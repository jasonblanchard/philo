module Fetchers
  class Reddit

    def self.url
      "http://www.reddit.com/r/videos.json"
    end

    def self.data
      HTTParty.get(url).parsed_response
    end

    def create_videos!
    end

  end
end
