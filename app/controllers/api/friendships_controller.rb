class Api::FriendshipsController < ApplicationController

  before_action :require_login, only: [ :create, :update, :destroy ]

  def create
    render json: [ "User can't friend request self" ], status: :unprocessable_entity if friendship_params[:user_id] == friendship_params[:friend_id]

    if current_user.id == friendship_params[:user_id].to_i
      columns = [ :user_id, :friend_id, :status ]
      values = [
        [ friendship_params[:user_id], friendship_params[:friend_id], "PENDING_SENT" ],
        [ friendship_params[:friend_id], friendship_params[:user_id], "PENDING_RECEIVED" ]
      ]
      Friendship.import columns, values, validate: true
    else
      render json: ["Invalid credentials"], status: :unauthorized
    end

  end

  def update
    render json: [ "User can't friend request self" ], status: :unprocessable_entity if friendship_params[:user_id] == friendship_params[:friend_id]
    if current_user.id == friendship_params[:user_id].to_i
      @user_friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
      @friend_friendship = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])
      if @user_friendship && @friend_friendship
        if @user_friendship.status == "PENDING_RECEIVED"
          Friendship.where('(user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)',
                      friendship_params[:user_id],
                      friendship_params[:friend_id],
                      friendship_params[:friend_id],
                      friendship_params[:user_id] )
                    .update_all(status: 'FRIENDS')
        else
          render json: ["Invalid credentials"], status: :unauthorized
        end
      else
        render json: ["Can't find friendship"], status: :not_found
      end
    else
      render json: ["Invalid credentials"], status: :unauthorized
    end
  end

  def destroy
    render json: [ "User can't friend request self" ], status: :unprocessable_entity if friendship_params[:user_id] == friendship_params[:friend_id]
    if current_user.id == friendship_params[:user_id].to_i
      @user_friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
      @friend_friendship = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])
      @user_friendship.destroy! if @user_friendship
      @friend_friendship.destroy! if @friend_friendship
    end
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
