class Api::FriendsController < ApplicationController

  def index
    @user = User.find_by(id: params[:user_id])
    render :index
  end

  def friend_requests
    @user = User.find_by(id: params[:user_id])
    render 'api/friends/friend_requests'
  end

end
