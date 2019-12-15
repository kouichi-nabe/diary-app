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
      redirect_to user_path(current_user)
    else
      render 'new'
    end
  end

  def destroy
    diary = Diary.find(params[:id])
    diary.destroy if current_user.id == diary.user_id

    redirect_to root_path
  end

  def search
    title_diaries = Diary.where('title LIKE(?)', "%#{keyword_params[:keyword]}%")
    content_diaries = Diary.where('content LIKE(?)', "%#{keyword_params[:keyword]}%")

    @diaries = [*title_diaries, *content_diaries]
    @keyword = keyword_params[:keyword]
  end

  private
  def diary_params
    params.require(:diary).permit(:title ,:content, images_attributes: [:image])
  end

  def keyword_params
    params.permit(:keyword)
  end
end
