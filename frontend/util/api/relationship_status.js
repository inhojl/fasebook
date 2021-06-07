export const fetchRelationshipStatuses = () => (
  $.ajax({
    method: 'GET',
    url: `/api/relationship_statuses`
  })
)