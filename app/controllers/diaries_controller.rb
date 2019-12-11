class DiariesController < ApplicationController
  before_action :authenticate_user!, only: [:show, :create]
  def index
    @diaries = Diary.all
    @diary = Diary.new
  end

  def show
    @diary = Diary.find(params[:id])
  end

  def create
    @diary = Diary.new(diary_params)
    @diary.user_id = current_user.id
    if @diary.save
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  private
  def diary_params
    params.require(:diary).permit(:title ,:content)
  end
end
