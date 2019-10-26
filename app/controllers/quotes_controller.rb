class QuotesController < ApplicationController
    before_action :authenticate_user!

    def random
        preference = current_user.preferences.sample

        if preference 
            quote = preference.quotes.sample
            render :json => quote
        else 
            quote = Quote.all.sample
            render json: quote
        end 
    end 
end
