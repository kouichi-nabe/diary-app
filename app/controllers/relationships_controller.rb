class RelationshipsController < ApplicationController
  before_action :set_user, only: [:create, :destroy]

  def index
    @followings = current_user.followings
    @followers = current_user.followers
  end

  def create
    user = User.find(params[:follow_id])
    following = current_user.follow(user)
    if following.save
      redirect_to user_path(user)
    else
      redirect_to :back
    end
  end

  def destroy
    user = User.find(params[:follow_id])
    following = current_user.unfollow(user)
    if following.destroy
      redirect_to :back
    else
      rredirect_to :back
    end
  end

  private

  def set_user
    user = User.find(params[:follow_id])
  end
end
