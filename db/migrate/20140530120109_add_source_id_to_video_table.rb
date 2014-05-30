class AddSourceIdToVideoTable < ActiveRecord::Migration
  def change
    add_column :videos, :source_id, :string
    add_index :videos, :source_id
  end
end
