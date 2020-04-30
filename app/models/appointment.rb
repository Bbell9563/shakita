class Appointment < ApplicationRecord
  serialize :scheduled_users, Array
  belongs_to :user
end
