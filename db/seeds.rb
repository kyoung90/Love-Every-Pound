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

# authors
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
will = Author.create(name: "Will Rogers")
unknown = Author.create(name: "Unknown")
vince = Author.create(name: "Vince Lombardi")
steve = Author.create(name: "Steve Jobs")
rob = Author.create(name: "Rob Siltanen")
og = Author.create(name: "Og Mandino")
george = Author.create(name: "George R.R. Martin")

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


# inspiration

quotes = [
    {content: "If I look back I am lost.", author_id: walt.id, preference_id: inspiration.id},
    {content: "When the going gets tough, put one foot in front of the other and just keep going. Don’t give up.", author_id: winston.id, preference_id: inspiration.id},
    {content: "What's done is done. What's gone is gone. One of life's lessons is always moving on. It’s okay to look back to see how far you’ve come but keep moving forward.", author_id: will.id, preference_id: inspiration.id},
    {content: "Failure is a bend in the road, not the end of the road. Learn from failure and keep moving forward.", author_id: unknown.id, preference_id: inspiration.id},
    {content: "If you really want to eat, keep climbing. The fruits are on the top of the tree. Stretch your hands and keep stretching them. Success is on the top, keep going.", author_id: vince.id, preference_id: inspiration.id},
    {content: "Then she told me why a tiger is gold and black. It has two ways. The gold side leaps with its fierce heart. The black side stands still with cunning, hiding its gold between the trees, seeing and not being seen, waiting patiently for things to come. I did not learn to use my black side until after the bad man left me.", author_id: steve.id, preference_id: inspiration.id},
    {content: "I don't know what lies ahead, but I want to keep going forever...", author_id: rob.id, preference_id: inspiration.id},
    {content: "I'm not going to do it. I'm not going to wish for a perfect life. the things that knock you down in life are tests, forcing you to make a choice between giving in and remaining on the ground or wiping the dirt off and standing up even taller than you did before you were knocked down. I'm choosing to stand up taller. I'll probably get knocked down a few more times before this life is through with me, but I can guarantee you I'll never stay on the ground.", author_id: og.id, preference_id: inspiration.id},
    {content: "Yes, a deep lesson from the postage stamp. It attaches itself to a moveable material, the envelope and gets going. A good relationship keeps you going forward; a bad one keeps you static. Attach yourself to someone who is also going forward and you will also get there.", author_id: , preference_id: inspiration.id},
    {content: "When in doubt, throw doubt out and have a little faith....", author_id: , preference_id: inspiration.id},
    {content: "It's the days you have every right to breakdown and fall apart, yet choose to show up anyway that matter most. Don't diminish the small steps that others can't see.", author_id: , preference_id: inspiration.id},
    {content: "If I just keep putting one foot in front of the other, it stands to reason that I'm going to get there.", author_id: , preference_id: inspiration.id},
    {content: "Never give up hope. All things are working for your good. One day, you'll look back on everything you've been through and thank God for it.", author_id: , preference_id: inspiration.id},
    {content: "Do you believe there's hope at the end?' I ask. 'No,' she says simply, looking away. 'No, I don't, but I'm still going.' She eyes me. 'You coming with?", author_id: , preference_id: inspiration.id},
    {content: "....there was always a way to get through a difficulty. If you just keep swimming, you’ll find your way. And when your brain wants to give up because there’s no land in sight, you keep swimming, not because you’re certain swimming will take you where you want to go, but to prove to yourself that you can still swim.", author_id: , preference_id: inspiration.id},
    {content: "When you're an original it may take time for people to catch on. So keep at it and don't question yourself.", author_id: , preference_id: inspiration.id},
    {content: "It’s easier to keep up than to catch up...", author_id: , preference_id: inspiration.id},
    {content: "Following your convictions means you must be willing to face criticism from those who lack the same courage to do what is right. It’s called the road less traveled.", author_id: , preference_id: inspiration.id},
    {content: "The hugest pile of challenges and hardships will not hold back a needle of the clock.", author_id: , preference_id: inspiration.id},
    {content: "Relish the opportunity to be an outsider. Embrace that label.", author_id: , preference_id: inspiration.id},
    {content: "In darkness, you only need to see just as far as you headlights extend. As long as you keep going, it is enough.", author_id: , preference_id: inspiration.id}
]

Quote.create(quotes)