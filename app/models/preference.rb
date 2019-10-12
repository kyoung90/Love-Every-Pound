class Preference < ApplicationRecord
    has_many :quotes
    has_many :user_quote_preferences
end
