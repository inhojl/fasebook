class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render "api/users/login_errors", status: :unauthorized
    end
  end

  def destroy
    if logged_in?
      @user = current_user
      logout
      render "api/users/show"
    else
      render json: ["No user signed in"], status: :not_found
    end
  end

end
