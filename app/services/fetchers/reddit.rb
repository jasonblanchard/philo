module Fetchers
  class Reddit

    def self.url
      "http://www.reddit.com/r/videos.json"
    end

    def self.data
      HTTParty.get(url).parsed_response
    end

    def self.source_provider
      'Reddit'
    end

    def self.fetch_and_create_videos!
      data = self.data

      data['data']['children'].each do |entry|
        if entry['data']['media']
          video = entry['data']

          title = video['title']
          media_provider = video['media']['oembed']['provider_name']
          media_url = video['url']
          source_provider = "Reddit"
          source_url = "http://www.reddit.com#{video['permalink']}"
          info = video['media']['oembed']['description']
          date_posted = DateTime.strptime(video['created_utc'].to_s, '%s')
          nsfw = video['over_18']
          source_id = video['id']

          Video.create!(info: info, title: title, media_provider: media_provider, media_url: media_url, source_provider: source_provider, source_url: source_url, date_posted: date_posted, nsfw: nsfw, source_id: source_id)
        end
      end
    end

  end
end
