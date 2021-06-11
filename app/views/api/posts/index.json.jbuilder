json.posts do

  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end

end

json.users do
  @posts.each do |post|
    json.set! post.author_id do
      json.partial! 'api/users/user', user: post.author
    end

    post.comments.each do |comment|
      json.set! comment.author_id do
        json.partial! 'api/users/user', user: comment.author
      end
    end

  end
end

json.profiles do
  @posts.each do |post|
    json.set! post.author.profile.id do
      json.partial! 'api/profiles/profile', profile: post.author.profile
    end

    post.comments.each do |comment|
      json.set! comment.author.profile.id do
        json.partial! 'api/profiles/profile', profile: comment.author.profile
      end
    end

  end
end




json.comments do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end