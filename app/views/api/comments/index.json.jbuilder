json.comments do

  @comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      json.likes_count comment.likes.length
      if (comment.likes.find { |like| like.liker_id == current_user.id})
        json.liked true
      else
        json.liked false
      end
    end
  end

end
