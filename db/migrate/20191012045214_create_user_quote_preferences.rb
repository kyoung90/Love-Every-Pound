class CreateUserQuotePreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :user_quote_preferences do |t|
      t.integer :preference_id
      t.integer :user_id

      t.timestamps
    end
  end
end
