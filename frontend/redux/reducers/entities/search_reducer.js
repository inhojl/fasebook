import {

  RECEIVE_SEARCH
} from '../../actions/user'



const searchReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SEARCH:
    return action.users.usersResults;

    default: return state;
  }
}

export default searchReducer;