json.comment do
  json.partial! "api/comments/comment", comment: @comment
  json.like_count @comment.likes.length
end


json.post do
   json.partial! "api/posts/post", post: @post
end


if @comment.parent
  json.parent_comment do
    json.partial! "api/comments/comment", comment: @comment.parent
  end

end