class UserQuotePreference < ApplicationRecord
    belongs_to :preference
    belongs_to :user
end
