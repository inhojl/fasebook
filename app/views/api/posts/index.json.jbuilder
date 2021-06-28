
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
      if post.author_id == current_user.id
        json.friend_requester_ids current_user.friend_request_senders.ids
      end
      if post.author_id == current_user.id
        json.newsfeed_post_ids @posts.map { |p| p.id }
      end
    end

    json.set! post.wall_id do
      json.partial! 'api/users/user', user: post.wall
      if post.wall_id == current_user.id
        json.friend_requester_ids current_user.friend_request_senders.ids
      end
      if post.wall_id == current_user.id
        json.newsfeed_post_ids @posts.map { |p| p.id }
      end
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