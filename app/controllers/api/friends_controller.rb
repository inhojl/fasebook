class Api::FriendsController < ApplicationController

  def index
    @user = User.find_by(id: params[:user_id])
    render :index
  end

end
