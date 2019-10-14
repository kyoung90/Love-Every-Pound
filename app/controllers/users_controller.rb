class UsersController < ApplicationController
    before_action :authenticate_user!

    def show
        if current_user.id.to_s == params[:id]
            render json: current_user
        else
            render json: {error: "You can only look at your data!"}
        end 
    end 


end
