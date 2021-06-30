class Api::UsersController < ApplicationController

  def index
    if params[:query]

      @users = User.where(
        "lower(first_name) like ? OR lower(last_name) like ?", 
        params[:query].downcase, 
        params[:query].downcase
      )
      
      render 'api/users/index'
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
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
    @user = User.find_by(id: params[:id])
    if @user
      if @user.update(user_params)
        render "api/users/show"
      else
        render status: :unprocessable_entity
      end
    else
      render status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email, 
      :password, 
      :first_name, 
      :last_name, 
      :birthdate, 
      :gender_id,
      
    )
  end

  

end
