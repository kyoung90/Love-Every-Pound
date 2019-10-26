class WeightsController < ApplicationController
    before_action :authenticate_user!

    def update
        weight = Weight.find_by(id: params[:id])
        if weight 
            if weight.user_id == current_user.id
                weight.weight = params[:weight]
                if weight.save 
                    render :json => current_user
                else 
                    render :json => {message: "Something went wrong updating weight"}
                end
            else 
                render :json => {error: "You cannot update a weight that is not yours."}
            end
        else
            render :json => {error: "Could not find a weight with the given id #{params[:id]}"}
        end 
    end

    def create
        givenDay = Date.parse(params[:date]) + 12.hour
        if givenDay && givenDay < Time.now.end_of_day
            weight = Weight.find_by(user_id: current_user.id, created_at: givenDay.beginning_of_day..givenDay.end_of_day)

            if weight 
                render :json => {error: "Can't submit multiple weights for one day."}
            else 
                weight = Weight.create(user_id: current_user.id, weight: params["weight"])
                weight.created_at = givenDay
                weight.save
                current_user.weights << weight 
                current_user.save  
                render :json => current_user
            end
        else 
            render :json => {error: "Can't submit weight for date in the future"}
        end
       
        # only allow to create today
        # if current_user.weights.last 

        #     if current_user.weights.last.created_at < Time.now.beginning_of_day
        #         weight = Weight.create(user_id: current_user.id, weight: params[:weight])
        #         current_user.weights << weight 
        #         current_user.save 
        #         render :json => {message: "Created weight successfully"} 
        #     else
        #         render :json => {error: "Can't submit multiple weights for one day."}
        #     end
        # else 
            # weight = Weight.create(user_id: current_user.id, weight: params["weight"])
            # current_user.weights << weight 
            # current_user.save  
            # render :json => {message: "Created weight successfully"}
        # end
    end

    def destroy
        weight = Weight.find_by(id: params[:id])

        if weight 
            if weight.user_id == current_user.id
                weight.destroy
                render :json => current_user
            else 
                render :json => {error: "You cannot delete a weight that is not yours."}
            end
        else
            render :json => {error: "Could not find a weight with the given id #{params[:id]}"}
        end 
    end

    private

    def weight_update_params
        params.require(:weight).permit(:id, :weight)
    end
end
