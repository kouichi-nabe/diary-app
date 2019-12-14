class UsersController < ApplicationController

  def show
    @diaries = User.find(params[:id]).diaries.all
    @user = User.find(params[:id])
  end

end
