class Api::NewsfeedController < ApplicationController

  def index
    @user = User.find_by(id: params[:user_id])
    @posts = @user.newsfeed
    render 'api/posts/index'
  end 

end
