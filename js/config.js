var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    compliments: {
        interval: 60000,
        fadeInterval: 4000,
        morning: [
			'<i class="fa-5x fa-hand-peace-o"></i>',
			'Good morning, BDW',
            		'There has never been a sadness that cannot be cured by breakfast. Ron Swanson',
            		'Do one this every day that scares you. Eleanor Roosevelt',
			'Every day may not be good, but there is something good in every day.',
			'The French philosopher Voltaire is said to have drank 50 cups of coffee a day.',
			'Coffee beans are actually the pit of a berry, which makes them a fruit.',
			'I dig your look!',
			'You light up the room!',
			
        ],
        afternoon: [
            'You look nice!',
            'You look terrific!',
            "You're not a total idiot!",
			'Well done!',
			'Nice fine motor control!',
			'Your skin is radiant!',
			'Killer boots, man!',
			'You look symmetrical!',
			"You're sweeter than High Fructose Corn Syrup!",
			'Nice job on that thing you did that time!',
			'That color is perfect on you!'
			
        ],
        evening: [
			'There are more trees on Earth than stars in the Milky Way.',
            		'There are more stars in the universe than grains of sand on earth',
			'We are closer in time to a T-Rex than T-Rex is to a Stegasourus.',
			'Nothing is a mistake. There is no win and no fail, ther is only make. John Cage',
			'All of the planets could fit in between the earth and the moon.',
			'Dogs love you! Some of them. Some dogs are dumb though, so...',
			'Well-behaved women rarely make history. Eleanor Roosevelt',
			'This is the sign you have been looking for',
			'You are the fairest of them all'
        ],
		bedtime: [
			'Hey, what are you still doing here?',
			'Go Home. Go to Sleep.',
			'HEY! GO HOME!',
			'Well, Kobe Bryant only sleeps four hours a night.',
			'But, YOU ARE NOT KOBE!'
		],
        birthday: [
			'<i class="fa-3x fa-birthday-cake"></i><br>Happy Birthday ',
            'Happy Birthday ',
            'Have a great birthday today ',
            'Yay, your birthday is today, '
        ],
        christmas: [
            'Merry Christmas!',
            '¡Feliz Navidad!',
            'Nollaig Shona Duit!',
			'Happy Christmas!'
        ]

    },
    news: {
        feed: [
			'http://feeds.denverpost.com/dp-news-topstories',
			'http://feeds.denverpost.com/dp-news-marijuana',
			'http://feeds.reuters.com/reuters/technologyNews',
			'http://feeds.denverpost.com/dp-news-animals',
			'http://feeds.denverpost.com/dp-business',
			'http://feeds.reuters.com/Reuters/worldNews',
		]
    },
	traffic: {
		active: true,
		regular: false,			//Regular is true if you work a consistent schedule and want traffic displayed before work, false if you want your commute displayed all the time
		weekStart: 1,
		weekEnd: 5,				//Day of the week, Sunday = 0, etc
		startTimeHour: 7, 		//Hour of the day you at which you start work, in 24H format
		startTimeMinute: 0, 	//Minute of the day you at which you start work
		preTime: 3				//How many hours before work you'd like to see traffic info
	},
	calendar: {
		traffic: true
	}
};
