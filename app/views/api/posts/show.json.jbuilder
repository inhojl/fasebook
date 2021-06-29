json.partial! "api/posts/post", post: @post
json.like_count @post.likes.length
if (@post.likes.find { |like| like.liker_id == current_user.id})
  json.liked true
else
  json.liked false
end