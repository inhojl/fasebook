import {
  RECEIVE_RELATIONSHIP_STATUSES
} from '../../actions/relationship_status';


const receiveRelationshipStatuses = (state, { relationshipStatuses }) => {

  const newState = {}

  for (const relationshipStatus of relationshipStatuses) {
    newState[relationshipStatus.id] = relationshipStatus
  }

  return newState;
}


const relationshipStatusReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RELATIONSHIP_STATUSES: return receiveRelationshipStatuses(state, action);
    default: return state;
  }
}

export default relationshipStatusReducer;