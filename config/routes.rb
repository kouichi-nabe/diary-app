Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :diaries, only: [:index, :new, :show] do
    collection do
      get :search
    end
  end

  resources :users, only: [:index]

  post "create" => "diaries#create"

  root 'diaries#index'
end
