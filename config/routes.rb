Rails.application.routes.draw do
  root to: "home#index"
  get "studyv" => "home#vuejs"
end
