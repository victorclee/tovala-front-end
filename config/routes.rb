Rails.application.routes.draw do
  # Since this is a single page JavaScript app, I broke the RESTful routing guidelines of "get-index", "get-new", "post-create", "get-show", "get-edit", "put-update", "delete-destroy" and used "home" instead, made more sense this way.

  get '/' => 'rectangles#home'

end
