# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


inspiration = Preference.create(name: "Inspirational")
fitness = Preference.create(name: "Fitness")
self_love = Preference.create(name: "Self Love")
positive_affirmation = Preference.create(name: "Positive Affirmation")

john = User.create(username: "john doe", email: "john@doe.com", password: "topsecret", password_confirmation: "topsecret", weight_unit: "lb")
john.preferences << fitness

arnold = Author.create(name: "Arnold Schwarzenegger")
henry = Author.create(name: "Henry David Thoreau")
michael = Author.create(name: "Michael John Bobak")
bret = Author.create(name: "Bret Contreras")
vidal = Author.create(name: "Vidal Sassoon")
greg = Author.create(name: "Greg Plitt")
henry = Author.create(name: "Henry Ford")
bruce = Author.create(name: "Bruce Lee")
jordan = Author.create(name: "Michael Jordan")
pablo = Author.create(name: "Pablo Picasso")
abraham = Author.create(name: "Abraham Lincoln")
benjamin = Author.create(name: "Benjamin Franklin")
walt = Author.create(name: "Walt Disney")
jack = Author.create(name: "Jack Dempsey")
jay = Author.create(name: "Jay Cutler")
dwayne = Author.create(name: "Dwayne 'the rock' Johnson")
thomas = Author.create(name: "Thomas Jefferson")
kai = Author.create(name: "Kai Greene")
john = Author.create(name: "John Wooden")
winston = Author.create(name: "Winston Churchill")


fitness_quote1 = Quote.create(content: "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.", author_id: arnold.id, preference_id: fitness.id)
fitness_quote2 = Quote.create(content: "Success usually comes to those who are too busy to be looking for it.", author_id: henry.id, preference_id: fitness.id)
fitness_quote3 = Quote.create(content: "All progress takes place outside the comfort zone.", author_id: michael.id, preference_id: fitness.id)
fitness_quote4 = Quote.create(content: "If you think lifting is dangerous, try being weak. Being weak is dangerous.")
fitness_quote5 = Quote.create(content: "The only place where success comes before work is in the dictionary.", author_id: vidal.id, preference_id: fitness.id)
fitness_quote6 = Quote.create(content: "The clock is ticking. Are you becoming the person you want to be?", author_id: greg.id, preference_id: fitness.id)
fitness_quote7 = Quote.create(content: "Whether you think you can, or you think you can’t, you’re right.", author_id: henry.id, preference_id: fitness.id)
fitness_quote8 = Quote.create(content: "The successful warrior is the average man, with laser-like focus.", author_id: bruce.id, preference_id: fitness.id)
fitness_quote9 = Quote.create(content: "You must expect great things of yourself before you can do them.", author_id: jordan.id, preference_id: fitness.id)
fitness_quote10 = Quote.create(content: "Action is the foundational key to all success.", author_id: pablo.id, preference_id: fitness.id)
fitness_quote11 = Quote.create(content: "Things may come to those who wait, but only the things left by those who hustle.", author_id: abraham.id, preference_id: fitness.id)
fitness_quote12 = Quote.create(content: "Well done is better than well said.", author_id: benjamin.id, preference_id: fitness.id)
fitness_quote13 = Quote.create(content: "All our dreams can come true if we have the courage to pursue them.", author_id: walt.id, preference_id: fitness.id)
fitness_quote14 = Quote.create(content: "A champion is someone who gets up when they can’t.", author_id: jack.id, preference_id: fitness.id)
fitness_quote15 = Quote.create(content: "What hurts today makes you stronger tomorrow.", author_id: jay.id, preference_id: fitness.id)
fitness_quote16 = Quote.create(content: "If something stands between you and your success, move it. Never be denied.", author_id: dwayne.id, preference_id: fitness.id)
fitness_quote17 = Quote.create(content: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author_id: thomas.id, preference_id: fitness.id)
fitness_quote18 = Quote.create(content: "You have to think it before you can do it. The mind is what makes it all possible.", author_id: kai.id, preference_id: fitness.id)
fitness_quote19 = Quote.create(content: "Things work out best for those who make the best of how things work out.", author_id: john.id, preference_id: fitness.id)
fitness_quote20 = Quote.create(content: "Success is walking from failure to failure with no loss of enthusiasm.", author_id: winston.id, preference_id: fitness.id)
