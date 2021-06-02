export const currentUserState = () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    }
  }
  delete window.currentUser;
  return preloadedState;
}
