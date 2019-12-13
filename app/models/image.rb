class Image < ApplicationRecord
  belongs_to :diary, optional: true
  mount_uploader :image, ImageUploader
  validates :image, presence: true
end
