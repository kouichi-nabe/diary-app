Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :diaries, only: [:index, :new, :show, :destroy, :edit, :update] do
    collection do
      get :search
    end
  end

  resources :users, only: [:show]
  resources :relationships, only: [:create, :destroy, :index]
  resources :like_diaries, only: [:index]

  post   '/like_diaries/:diary_id' => 'like_diaries#like',   as: 'like'
  delete '/like_diaries/:diary_id' => 'like_diaries#unlike', as: 'unlike'

  post "create" => "diaries#create"

  root 'diaries#index'
end
