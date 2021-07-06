# README

# Fasebook
Fasebook is a fully-responsive, near pixel-perfect mini-clone of the popular social media app Facebook.

![image](https://user-images.githubusercontent.com/74887895/124522723-1d8e2b00-dda9-11eb-9d48-3ffb95c7f04e.png)

# Table of Contents
- [Technologies Used](https://link-url-here.org)
- [Key Features](https://link-url-here.org)
  - [User Profiles](https://link-url-here.org)
  - [User Friends](https://link-url-here.org)
  - [User Newsfeed](https://link-url-here.org)
  - [User Likes](https://link-url-here.org)
- [Code Snippets](https://link-url-here.org)
- [Maintainers](https://link-url-here.org)
- [License](https://link-url-here.org)
- [Design Documents](https://link-url-here.org)

## Technology

This full stack project utilizes the following technologies: Ruby on Rails, Redux, React, PostgreSQL, AWS S3, and Heroku.

## Features
The hallmark Fasebook features highlighted in this section are:
  1. User Profiles
  2. User Friends
  3. User Newsfeed
  4. User Likes

The following additional functionalities have also been implemented: user authentication and error handling, creation/deletion/modification of posts and comments, user friend search, and user likes.

### Profiles
Each registered user has their own profile page, on which they can do the following:
- Update their profile picture and cover photo and edit their 'Bio' and 'About' information

  ![about](https://user-images.githubusercontent.com/74887895/124524900-d0fb1d80-ddb1-11eb-8d3b-9005ccbe143b.gif)
  
- View their and other users' friends list on both the 'Posts' and the 'Friends' pages of the respective user

  ![friends](https://user-images.githubusercontent.com/74887895/124525071-9b0a6900-ddb2-11eb-9922-fbf1883d60fb.gif)
  
- Create/update/delete their own posts/comments (either on their own wall or their friends' walls), or delete any posts/comments on their own wall

  ![posts](https://user-images.githubusercontent.com/74887895/124525283-90040880-ddb3-11eb-8632-1b5143e39d81.gif)

### Friending
Users can establish friendships, which enables them to post/comment on each others' walls. Specifically, the following have been implemented for friending:

- Send/cancel outgoing friend requests through different avenues (e.g., navbar search results, profile page)
  
  ![friend-sending](https://user-images.githubusercontent.com/74887895/124525920-ebcf9100-ddb5-11eb-8913-10bccada0672.gif)

- Confirm/delete incoming friend requests through different avenues (e.g., notifications, navbar search results)

  ![friend-confirm](https://user-images.githubusercontent.com/74887895/124526124-9f388580-ddb6-11eb-86d1-d42987d3d17a.gif)

- Remove existing friends through different avenues (e.g., navbar search results, profile page)

  ![unfriend](https://user-images.githubusercontent.com/74887895/124526358-68af3a80-ddb7-11eb-8572-f447290bbaee.gif)

### Newsfeed
Users can see their and their friends' posts through the newsfeed feature, which appears upon logging onto Fasebook. The following actions are available:
- Create/update/delete one's own posts/comments on the newsfeed
  
  ![newsfeed](https://user-images.githubusercontent.com/74887895/124526773-7f09c600-ddb8-11eb-96be-12422373c9e6.gif)


### Likes
Users can like any of their and their friends' posts/comments on their newsfeed or their or their friends' profile page.

![likes](https://user-images.githubusercontent.com/74887895/124526912-f8091d80-ddb8-11eb-8f54-8ea5de5487fc.gif)


## Maintainers
[@inhojl](https://www.github.com/inhojl)

## Design Documents
[Design Documents](https://github.com/inhojl/fasebook/wiki)
