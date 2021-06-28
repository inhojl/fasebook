class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)

    if @like.save
      if (like_params[:likeable_type] == 'Comment')
        @comment = @like.likeable
        @post = @comment.post
        render 'api/comments/show'
      elsif (like_params[:likeable_type] == 'Post')
        @post = @like.likeable
        render 'api/posts/show'
      end
    end
  end

  def destroy
    @like = Like.find_by(like_params)
    if @like.destroy
      if (like_params[:likeable_type] == 'Comment')
        @comment = @like.likeable
        @post = @comment.post
        render 'api/comments/show'
      elsif (like_params[:likeable_type] == 'Post')
        @post = @like.likeable
        render 'api/posts/show'
      end
    end
  end

  private
  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type, :liker_id)
  end

end
