class Api::RelationshipStatusesController < ApplicationController

  def index
    @relationship_statuses = RelationshipStatus.all
    render 'api/relationship_statuses/index'
  end

end
