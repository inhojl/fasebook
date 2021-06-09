class Api::ProfilesController < ApplicationController

  def show
    @profile = Profile.find_by(id: params[:id])
    render "api/profiles/show"

  end

  def update
    @profile = Profile.find_by(id: params[:id])
    if @profile
      if @profile.update(profile_params)
        render "api/profiles/show"
      else
        render status: :unprocessable_entity
      end
    else
      render status: :unprocessable_entity
    end
  end

  private

  def profile_params
    params.require(:profile).permit(
      :relationship_status_id,
      :current_city,
      :hometown,
      :biography,
      :profile_picture,
      :cover_photo
    )
  end
end
