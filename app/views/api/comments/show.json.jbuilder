json.comment do
  json.partial! "api/comments/comment", comment: @comment
  json.like_count @comment.likes.length
  if (@comment.likes.find { |like| like.liker_id == current_user.id})
    json.liked true
  else
    json.liked false
  end
end


json.post do
   json.partial! "api/posts/post", post: @post
    json.like_count @post.likes.length
    if (@post.likes.find { |like| like.liker_id == current_user.id})
      json.liked true
    else
      json.liked false
    end

end


if @comment.parent
  json.parent_comment do
    json.partial! "api/comments/comment", comment: @comment.parent
    json.like_count @comment.parent.likes.length
    if (@comment.parent.likes.find { |like| like.liker_id == current_user.id})
      json.liked true
    else
      json.liked false
    end
  end

end