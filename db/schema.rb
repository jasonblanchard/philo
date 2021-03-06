# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140721221750) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "videos", force: true do |t|
    t.text     "title"
    t.string   "media_provider"
    t.string   "media_url"
    t.string   "source_provider"
    t.string   "source_url"
    t.text     "info"
    t.datetime "date_posted"
    t.boolean  "nsfw"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "source_id"
  end

  add_index "videos", ["media_provider"], name: "index_videos_on_media_provider", using: :btree
  add_index "videos", ["source_id"], name: "index_videos_on_source_id", using: :btree
  add_index "videos", ["source_provider"], name: "index_videos_on_source_provider", using: :btree

end
