class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.string :media_provider
      t.string :media_url
      t.string :source_provider
      t.string :source_url
      t.text :info
      t.datetime :date_posted
      t.boolean :nsfw

      t.timestamps
    end

    add_index :videos, :source_provider
    add_index :videos, :media_provider
  end
end
