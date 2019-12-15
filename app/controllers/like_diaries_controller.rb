class LikeDiariesController < ApplicationController
  before_action :set_variables, except: [:index]

  def index
    @diaries = current_user.like_diaries
  end

  def like
    like_diary = current_user.like_diaries.new(diary_id: params[:diary_id])
    like_diary.save
  end

  def unlike
    like_diary = LikeDiary.find_by(diary_id: params[:diary_id], user_id: current_user.id)
    like_diary.destroy
  end

  private

  def set_variables
    @diary = Diary.find(params[:diary_id])
    @id_name = "#like-link-#{@diary.id}"
  end
end
