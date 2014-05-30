module Fetchers
  class Reddit

    def self.url
      "http://www.reddit.com/r/videos.json"
    end

    def self.data
      HTTParty.get(url).parsed_response
    end

    def self.create_videos!
      data = self.data

      data['data']['children'].each do |entry|
        if entry['data']['media']
          info = entry['data']
          title = info['title']
          media_provider = info['media']['oembed']['provider_name']
          media_url = info['url']
          source_provider = "Reddit"
          source_url = "http://www.reddit.com#{info['permalink']}"
          info = info['media']['oembed']['description']
          date_posted = info['created_utc']
          nsfw = info['over_18']
          source_id = info['id']

          Video.create!(info: info, title: title, media_provider: media_provider, media_url: media_url, source_provider: source_provider, source_url: source_url, info: info, date_posted: date_posted, nsfw: nsfw, source_id: source_id)
        end
      end
    end

  end
end
