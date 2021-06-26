json.comment do
  json.partial! "api/comments/comment", comment: @comment
end


json.post do
   json.partial! "api/posts/post", post: @post
end


if @comment.parent
  
  json.parent_comment do
    json.partial! "api/comments/comment", comment: @comment.parent
  end

end