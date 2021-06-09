class Api::FriendsController < ApplicationController

  def index
    debugger
    @user = User.find_by(id: params[:user_id])
    render :index
  end

end
