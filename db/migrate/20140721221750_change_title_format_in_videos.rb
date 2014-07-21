class ChangeTitleFormatInVideos < ActiveRecord::Migration
  def change
    change_column :videos, :title, :text
  end
end
