class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_username(params[:authentication][:auth][:username])
    # print @user
    if @user.authenticate(params[:authentication][:auth][:password]) 
      token = encode(user_id: @user.id, username: @user.username)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end

  def user_params
    params.require(:authentication).require(:auth).permit(:username)
  end
end
