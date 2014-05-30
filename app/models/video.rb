class Video < ActiveRecord::Base

  scope :by_source_id, lambda { |id| where(:source_id => id) }
end
