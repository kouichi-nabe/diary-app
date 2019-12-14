class UsersController < ApplicationController
  def index
    @diaries = current_user.diaries.all
  end
end
