# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: 'Master',
  age: '1000',
  gender: 'Other',
  email: 'admin@email.com',
  password: 'Password',
  role: 'admin',
  medical_history: 'Nothing Relavent',
  phone: '(801) 946-4684',
  image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
)

User.create(
  name: 'Tester',
  age: '21',
  gender: 'female',
  email: 'test@test.com',
  password: 'passoword',
  role: 'user',
  medical_history: 'Nothing Relavent',
  phone: '(801) 946-4684',
  image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
)

User.create(
  name: 'Testing',
  age: '21',
  gender: 'male',
  email: 'test1@test.com',
  password: 'password',
  role: 'user',
  medical_history: 'Nothing Relavent',
  phone: '(801) 946-4684',
  image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
)

Appointment.create(
  user_id: 1,
  date: '04/30/2020',
  time: '11:00 AM - 12:10 PM',
  scheduled_users: [{id:2, name: 'Tester'},{id:3, name: 'Testing'}],
)
