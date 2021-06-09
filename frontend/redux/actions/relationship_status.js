import * as RelationshipStatusAPIUtil from '../../util/api/relationship_status';

export const RECEIVE_RELATIONSHIP_STATUSES = 'RECEIVE_RELATIONSHIP_STATUSES';

const receiveRelationshipStatuses = (relationshipStatuses) => ({
  type: RECEIVE_RELATIONSHIP_STATUSES,
  relationshipStatuses
})

export const fetchRelationshipStatuses = () => (dispatch) => (
  RelationshipStatusAPIUtil.fetchRelationshipStatuses()
    .then(relationshipStatuses => {
      dispatch(receiveRelationshipStatuses(relationshipStatuses))
    })
)