class DiariesController < ApplicationController
  before_action :authenticate_user!, only: [:show, :create]

  def index
    @diaries = Diary.all
  end

  def new
    @diary = Diary.new
    3.times { @diary.images.build }
  end

  def show
    @diary = Diary.find(params[:id])
  end

  def create
    @diary = Diary.new(diary_params)
    @diary.user_id = current_user.id
    if @diary.save
      redirect_to users_path(current_user)
    else
      render 'new'
    end
  end

  def search

  end

  private
  def diary_params
    params.require(:diary).permit(:title ,:content, images_attributes: [:image])
  end
end
