class Api::CommentsController < ApplicationController

  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @comments = Comment.where('post_id = ?', params[:post_id])
    render :index
  end

  def show
    debugger
    @comment = Comment.find_by(id: params[:id])
    @post = @comment.post
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @post = @comment.post
      render :show
    else
      render status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      @post = @comment.post
      render :show
    else
      render status: :unprocessable_entity
    end
  end 

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      @post = @comment.post
      render 'api/posts/show', post: @post
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:parent_id, :author_id, :post_id, :body)
  end
end
