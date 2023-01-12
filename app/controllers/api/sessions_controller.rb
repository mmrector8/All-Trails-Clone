class Api::SessionsController < ApplicationController
    def show
      if current_user
        @user = current_user
        render 'api/users/show'
      else
        render json: {user: nil}
      end
  end

  def create
    credential = params[:credential]
    password = params[:password]
    @user = User.find_by_credentials(credential, password)
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['Email or password is incorrect'] }, status: :unauthorized
    end
  end

  def destroy
      logout! if logged_in?
      render json: {message: 'success'}
  end
end