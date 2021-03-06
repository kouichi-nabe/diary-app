class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_one :profile
  accepts_nested_attributes_for :profile

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # validate
  validates :password, presence: true, length: { minimum: 6 }, format: { with: /\A(?=.*?[a-z])[a-z\d]+\z/i }
  validates :password_confirmation, presence: true, length: { minimum: 6 }
  validates :nickname, presence: true
  validates :email, presence: true, uniqueness: true

  # follow
  has_many :relationships
  has_many :followings, through: :relationships, source: :follow
  has_many :reverse_of_relationships, class_name: 'Relationship', foreign_key: 'follow_id'
  has_many :followers, through: :reverse_of_relationships, source: :user

  def follow(other_user)
    unless self == other_user
      self.relationships.find_or_create_by(follow_id: other_user.id)
    end
  end

  def unfollow(other_user)
    relationship = self.relationships.find_by(follow_id: other_user.id)
    relationship.destroy if relationship
  end

  def following?(other_user)
    self.followings.include?(other_user)
  end

  # like_diary
  has_many :diaries, dependent: :destroy
  has_many :like_diaries, dependent: :destroy
  has_many :bookmark_diaries, through: :like_diaries, source: :diary

  def already_liked?(diary)
    self.likes.exists?(diary_id: diary.id)
  end
end
