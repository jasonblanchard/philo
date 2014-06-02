class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :media_provider, :media_url, :source_provider, :source_url, :info, :date_posted, :nsfw, :created_at, :updated_at, :source_id
end
