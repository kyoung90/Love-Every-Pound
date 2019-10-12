class QuotesController < ApplicationController
    before_action :authenticate_user!

    def random
        preference = current_user.preferences.sample

        if preference 
            quote = Quote.where(preference_id: preference.id).sample 
            render json: quote
        else 
            quote = Quote.all.sample
            render json: quote
        end 
    end 
end
