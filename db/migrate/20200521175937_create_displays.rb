class CreateDisplays < ActiveRecord::Migration[6.0]
  def change
    create_table :displays do |t|
      t.string :title
      t.text :message
      t.string :font
      t.string :size

      t.timestamps
    end
  end
end
