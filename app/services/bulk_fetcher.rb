class BulkFetcher

  def self.fetch_and_save_all!
    with_each_service do |klass|
      klass.fetch_and_create_videos!
    end
  end

  def self.fetchers
    Dir.entries(Rails.root.to_s + "/app/services/fetchers").keep_if { |file| /.rb$/.match(file) }.map do |file|
      klass = ("Fetchers::" + /([a-zA-Z]+).rb/.match(file)[1].classify).constantize
    end
  end

  def self.with_each_service
    fetchers.each do |klass|
      yield klass
    end
  end

end
