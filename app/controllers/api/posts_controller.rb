class Api::PostsController < ApplicationController

  def index

  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

end
