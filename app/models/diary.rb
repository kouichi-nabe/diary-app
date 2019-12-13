class Diary < ApplicationRecord
  belongs_to :user
  has_many :images, dependent: :destroy

  accepts_nested_attributes_for :images

  with_options presence: true do
    validates :title
    validates :content
    validates :images
  end
end
