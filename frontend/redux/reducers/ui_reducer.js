import {
  SENDING_REQUEST,
  RECEIVED_REQUEST
} from '../actions/ui'

const INITIAL_STATE = {
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  Object.freeze(state)
  switch (action.type) {
    case SENDING_REQUEST: return { ...state, loading: true }
    case RECEIVED_REQUEST: return { ...state, loading: false }
    default: return state;
  }
}