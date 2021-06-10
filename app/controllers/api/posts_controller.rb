class Api::PostsController < ApplicationController

  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @posts = Post.where('wall_id = ?', params[:user_id])
    render :index
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render :show
    else
      render status: :unprocessable_entity
    end

  end 

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.destroy
      render json: {}, stauts: :ok
    end
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :wall_id, :body)
  end

end
