Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :diaries, only: [:index] do
    collection do
      get :search
    end
  end

  root 'diaries#index'
end
