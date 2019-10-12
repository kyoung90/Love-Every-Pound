class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :content
      t.integer :preference_id
      t.integer :author_id

      t.timestamps
    end
  end
end
