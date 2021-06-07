json.array!(@relationship_statuses) do |relationship_status|
  json.extract! relationship_status, :id, :label
end