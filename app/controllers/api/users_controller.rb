class Api::UsersController < ApplicationController

  def show
    
  end

  def index

  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render "api/users/signup_errors", status: :unprocessable_entity
    end
  end

  def update

  end

  private

  def user_params
    params.require(:user).permit(
      :email, 
      :password, 
      :first_name, 
      :last_name, 
      :birthdate, 
      :gender_id
    )
  end

end
