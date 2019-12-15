class Diary < ApplicationRecord
  belongs_to :user
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images

  has_many :like_diaries, dependent: :destroy
  has_many :bookmark_users, through: :like_diaries, source: :user

  with_options presence: true do
    validates :title
    validates :images
  end
end
