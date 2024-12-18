const idioms_questions = [
  "A big draw",
  "A bull in a china shop",
  "A cold fish",
  "A cut above something",
  "A damp squib",
  "A dog's breakfast",
  "A fine state of affairs",
  "A gentleman at large",
  "A hot potato",
  "A house of cards",
  "A kick in the teeth",
  "A lean patch",
  "A little bird told me",
  "A man of straw",
  "A moot point",
  "A nig-nog",
  "A Penelope's web",
  "A penny for your thoughts",
  "A rainy day",
  "A shot in the arm",
  "A stiff-necked person",
  "A stuffed shirt",
  "A vexed question",
  "Adam's ale",
  "Aid and abet",
  "Alive and kicking",
  "All agog",
  "All and sundry",
  "All hat and no cattle",
  "Alphabet soup",
  "An armchair critic",
  "An arrow in the quiver",
  "Argus eyed",
  "As bald as a cue ball",
  "As daft as a brush",
  "As high as a kite",
  "As the crow flies",
  "As thick as two short planks",
  "Asleep at the wheel",
  "Assume airs",
  "At a loss",
  "At beck & call",
  "At daggers drawn",
  "At each other's throats",
  "At large",
  "At loose ends",
  "At sixes and sevens",
  "At the drop of a hat",
  "At the top of your lungs",
  "Babe in the woods",
  "Back in saddle",
  "Back to the drawing board",
  "Banana oil",
  "Bang for the buck",
  "Batten down the hatches",
  "Be a dab hand at something",
  "Be a dead meat",
  "Be all one to",
  "Be down with",
  "Be glad to see the back of",
  "Be going places",
  "Be in the red",
  "Be left stranded",
  "Be off",
  "Be on the air",
  "Bear down",
  "Bear fruit",
  "Bear the brunt of",
  "Bear the palm",
  "Beat one's brains out",
  "Been nipped in the bud",
  "Beside the mark",
  "Best thing since sliced bread",
  "Beyond the pale",
  "Big bucks",
  "Bite someone's head off",
  "Bite the bullet",
  "Black ox",
  "Blow a fuse",
  "Blow his top",
  "Blue-blooded",
  "Boils down",
  "Break new ground",
  "Breathing down his neck",
  "Bring home the bacon",
  "Bring the house down",
  "Broke a lance with",
  "Broke Priscian's head",
  "Broken reed",
  "Brought up",
  "Brown study",
  "Bugs me",
  "Burn your boats",
  "Butt in",
  "By a whisker",
  "By courtesy of",
  "By the same token",
  "Call down",
  "Call it a day",
  "Call off",
  "Calls the shots",
  "Came out of his shell",
  "Can't cut the mustard",
  "Cap in hand",
  "Carry the ball",
  "Carry the can",
  "Carry weight",
  "Carve out a niche",
  "Cast a slur upon",
  "Casting pearls before swine",
  "Catch 22",
  "Catch a tartar",
  "Catch time by the forelock",
  "Cat's whiskers",
  "Cheek by jowl",
  "Chew something over",
  "Chicken feed",
  "Chicken out",
  "Chinks in the armour",
  "Cloak and dagger",
  "Cloven hoof",
  "Cold comfort",
  "Come hell or high water",
  "Come off",
  "Come to blows",
  "Come to grief",
  "Come to terms with something",
  "Cook the books",
  "Cool about working",
  "Cool your heels",
  "Cordoned off",
  "Cross out",
  "Cry down",
  "Cut and dried",
  "Cut in/Cut one short",
  "Cut the mustard",
  "Damp squib",
  "Died in harness",
  "Down and Out",
  "Dressing Down",
  "Drive Home",
  "Egg on",
  "Eye wash",
  "Face the music",
  "Fall back on",
  "Falling head over heels",
  "Feeding frenzy",
  "Finding their feet",
  "Flea market",
  "Floor",
  "Fly off at a tangent",
  "Flying off the handle",
  "For Good",
  "Fuddy Duddy",
  "Full of hot air",
  "Gall and wormwood",
  "Give vent to something",
  "Get cracking",
  "Get down to brass tacks",
  "Get into a soup",
  "Get someone's goat",
  "Get the hang of",
  "Get the sack",
  "Getting in someone's hair",
  "Give in",
  "Give up ghost",
  "Give way",
  "Go belly up",
  "Go dutch",
  "Go for a song",
  "Go for the jugular",
  "Go haywire",
  "God's ape",
  "God's acre",
  "Grin from ear to ear",
  "Hang up your boots",
  "Haul over the coals",
  "Head in the clouds",
  "Helter-skelter",
  "High and dry",
  "High and low",
  "High on the hog",
  "Hold out",
  "Horse around",
  "In a flutter",
  "In a jiffy",
  "In cahoots with",
  "In deep water",
  "In the blues",
  "In the offing",
  "In the running",
  "In the soup",
  "In the swim",
  "In the teeth of",
  "Ivory towers",
  "Jump the gun",
  "Jumping down the throat",
  "Keep abreast of",
  "Keep your wig on",
  "Keep a stiff upper lip",
  "Kicking his heels",
  "Kith and Kin",
  "Learn/know the ropes",
  "Let off steam",
  "Let your hair down",
  "Like a shag on a rock",
  "Lock, stock and barrel",
  "Look out",
  "Made off",
  "Made out of whole cloth",
  "Make believe that",
  "Make off with",
  "Mealy mouthed",
  "Nail your colours to their mast",
  "No dice",
  "No man is an Island",
  "Not mince matters",
  "Of the first water",
  "Off the cuff",
  "Off the hook",
  "On Shank's mare",
  "On the cuff",
  "On the level",
  "Out and Out",
  "Out at the elbows",
  "Out of bounds",
  "Out of the woods",
  "Over head and ears",
  "Palm off",
  "Pandora's box",
  "Parthian shot",
  "Peas in a pod",
  "Pick to pieces",
  "Pie in the sky",
  "Pound the pavement",
  "Pull a fast one",
  "Pull strings",
  "Pull yourself together",
  "Put up with",
  "Run into",
  "Run Riot",
  "Reap the whirlwind",
  "Rip up old sores",
  "Root and branch",
  "Rose coloured glasses",
  "Salad days",
  "Seize the nettle",
  "Shake off",
  "Shooting fish in a barrel",
  "Silver bullet",
  "Sleep on it",
  "Stand-offish",
  "Standstill",
  "Straw in the wind",
  "Swollen headed",
  "Take exception to",
  "Take heart",
  "Take up the hatchet",
  "Take after",
  "The ayes have it",
  "The bee's knees",
  "The die is cast",
  "The Gnomes of Zurich",
  "The nitty gritty",
  "The seamy side",
  "Thin end of wedge",
  "The wheels have come off",
  "Threw a spanner",
  "Thumb one's nose",
  "Throw up the sponge",
  "Til the cows come home",
  "To angle",
  "To be in a quandary",
  "To be pushing up daisies",
  "To be taken aback",
  "To be under the weather",
  "To beat a retreat",
  "To beat the rap",
  "To break a leg",
  "To carry the day",
  "To clear the decks",
  "To cut my teeth on",
  "To cut the crackle",
  "To get wind",
  "To grid up the loins",
  "To go down like a lad balloon",
  "To hammer out",
  "To have a blast",
  "To hit the sack",
  "To jump on the bandwagon",
  "To keep in abeyance",
  "To keep up",
  "To make a pile",
  "To nip in the bud",
  "To pay off old scores",
  "To pick holes",
  "To pick up the threads",
  "To pigeon hole",
  "To play to the gallery",
  "To put one out of countenance",
  "To put up with",
  "To run amok",
  "To shoot the breeze",
  "To shun",
  "To sleep with the fishes",
  "To sow the dragon's teeth",
  "To stave off",
  "To steal a march",
  "To steer clear of",
  "To take the cake",
  "To take someone for a ride",
  "To take to task",
  "To the letter",
  "To throw a fit",
  "To toe the line",
  "To turn over a new leaf",
  "Tongue in cheek",
  "Touch and go",
  "Turn turtle",
  "Turn up",
  "Up in the arms",
  "Vis-à-vis",
  "Wag the dog",
  "Water under the bridge",
  "Weal and woe",
  "Wear the green willow",
  "Weigh anchor",
  "Wet his whistle",
  "What a small world!",
  "When pigs fly",
  "Whistle in the dark",
  "Whoop it up",
  "Will-o-the wisp",
  "Wipe the nose",
  "With a fine tooth comb",
  "Yeoman's service",
  "On the breadline",
  "To dodge a bullet",
  "Pen and Ink",
  "Crack someone up",
  "A plum job",
  "Made a pig's ear",
  "Second wind",
  "Grist to the mill",
  "Loaves and fishes",
  "To a T",
  "Call the shots",
  "In the fast lane",
  "Sly as a fox",
  "Be like chalk & cheese",
  "As phony as a 3 dollars bill",
  "Have egg on your face",
  "Grasping at straws",
  "Run of the mill",
  "Scrape the barrel",
  "Bad iron",
  "Up the creek",
  "On the ball",
  "As dead as a doornail",
  "A pipe dream",
  "Dance attendance",
  "Buy a lemon",
  "In the groove",
  "Dead ringer",
  "Crossed the rubicon",
  "Go bananas",
  "Rust bucket",
  "Hit the hay",
  "A broth of a boy",
  "Chew the fat",
  "Keep someone posted",
  "Ruffle someone's feathers",
  "I don't buy it",
  "Slap on the wrist",
  "A bull market",
  "To meet one's water loo",
  "Slack off",
  "Pig in a poke",
  "To twiddle one's thumbs",
  "Neck of the woods",
  "To lay someone by heels",
  "Cast someone adrift",
  "A brown study",
  "Mumbo jumbo",
  "Fly into a passion",
  "Bob's your uncle",
  "Latin and Greek",
  "Yellow bellies",
  "An olive branch",
  "Down the tubes",
  "Lose your marbles",
  "Went pear shaped",
  "Aladdin's cave",
  "Charley horse",
  "Beside oneself",
  "At the drop of dime",
  "In Vogue",
  "Hornet's nest",
  "Mincing walk",
  "Toffee nosed",
  "Want to curl up & die",
  "To the nine",
  "On the horizon",
  "A cog in the machine",
  "No spring chicken",
  "Sweat of his brow",
  "When the crunch comes",
  "Play it by ear",
  "Memory like sieve",
  "Queer Fish",
  "Have a bash",
  "Queer Pitch",
  "Pell mell",
  "Lily Livered",
  "Drive someone up the wall"
];

const idioms_answers = [
  "Huge attraction",
  "An extremely awkward, clumsy person",
  "Someone who seems unfriendly and does not share feelings",
  "Superior to",
  "A disappointment result",
  "A total mess",
  "An unpleasant situation",
  "A man without a job",
  "A controversial situation",
  "An insecure scheme",
  "A grave setback",
  "A period of poor performance",
  "Used to indicate that the speaker knows something but chooses to keep the identity of their informant secret",
  "A man of no substance/A weak person",
  "Disputed",
  "A fool",
  "Endless",
  "A way of asking what someone is thinking",
  "Time of difficulty",
  "An encouraging stimulus",
  "An obstinate person",
  "A conservative/Pompous person",
  "Controversial",
  "Water",
  "To help someone commit a crime",
  "In good health",
  "Amazed",
  "All included",
  "One who is full of big talk but lacks substance and action",
  "A metaphor for an abundance of acronyms",
  "Someone who gives advice based on theory, not practice",
  "Strategies that can be followed",
  "Observant",
  "Completely bald",
  "Extremely silly",
  "Intoxicated with alcohol",
  "The shortest route",
  "Extremely stupid",
  "Not attentive to one’s duties",
  "Pretend superiority",
  "Unable to decide",
  "At his disposal/to be dominated by someone",
  "Enemies/hostile",
  "Arguing angrily",
  "A criminal escaped or not yet captured",
  "In an uncertain situation",
  "In disorder or confusion",
  "Without any hesitation/instantly",
  "Extremely loud",
  "A young defenseless person",
  "Resume duty",
  "Plan it all over again",
  "Nonsensical talk",
  "More value for money",
  "Prepare for a difficult situation",
  "Skilled in a particular area",
  "To be in serious trouble",
  "Make no difference",
  "Suffering from",
  "Be happy when a person leaves",
  "Talented and successful",
  "To be in loss or debt",
  "To be the last person on whom blame falls",
  "To go away",
  "Broadcast over the radio or TV",
  "To move quickly towards someone in a determined and threatening way",
  "Produce positive results",
  "Suffer the worst of something",
  "To win",
  "To put forth one’s maximum effort",
  "Dropped at an early stage",
  "Irrelevant",
  "Most useful innovation in a long time",
  "Unreasonable or unacceptable",
  "A lot of money",
  "Speak angrily without any reason",
  "To force yourself to do something unpleasant",
  "Misfortune",
  "To react very angrily",
  "Be very angry",
  "Of noble birth",
  "Sums up to",
  "Do or discover something new",
  "Watching all his actions closely",
  "To be successful",
  "Made audience applaud enthusiastically",
  "To argue against",
  "To use bad grammar",
  "Support that failed",
  "Introduced for discussion",
  "A mood of deep absorption or thoughtfulness",
  "Irritates me",
  "Do something that makes it impossible to return to the previous situation",
  "Interrupt",
  "By a small margin",
  "Given or allowed by",
  "In the same way",
  "To scold",
  "Decide or agree to stop doing something",
  "Cancel something",
  "To be in control",
  "Became more sociable",
  "To be unable to do a job",
  "In a respectful manner",
  "Be in charge",
  "To take responsibility for some misdemeanor",
  "Be important",
  "Developed a specific position for himself",
  "Damaged",
  "Offering good things to undeserving people",
  "A particular situation in which one cannot do anything",
  "To deal with a person who is more than one’s match",
  "Seize opportunity",
  "To be highly impressive",
  "Very close together",
  "Discuss or consider something at length",
  "Very little money",
  "To decide not to do something because you are too frightened",
  "A weakness that can be taken advantage of",
  "An activity that involves mystery and secrecy",
  "The evil intention",
  "Slight satisfaction",
  "No matter what/In spite of obstacles",
  "Be separated",
  "Get into a fight physically",
  "Have an accident/meet with disaster",
  "To gradually accept a sad situation",
  "To falsify financial records",
  "Ready to work",
  "To be kept waiting",
  "Isolated",
  "Eliminate",
  "To depreciate",
  "Already decided",
  "Interrupt someone while they are speaking",
  "To perform well",
  "Complete failure",
  "To die while in service",
  "Without money",
  "Give a scolding",
  "To emphasize an important point",
  "To encourage",
  "A deception",
  "To bear the consequences",
  "To seek support out of necessity",
  "Falling deeply in love with someone",
  "An episode of frantic competition",
  "To begin to understand the work, feel confident",
  "A market selling second-hand goods",
  "Puzzled",
  "To start discussing something irrelevant",
  "Suddenly becoming enraged",
  "Permanently",
  "A very old-fashioned person",
  "Full of nonsense",
  "Hateful",
  "To express a negative emotion in a forceful and often unfair way",
  "To start doing something",
  "To start discussing the important facts",
  "To make things difficult",
  "To irritate someone",
  "Learn how to use",
  "To be dismissed",
  "To annoy someone",
  "To accept defeat/yield",
  "To die",
  "To collapse",
  "To go bankrupt",
  "Divide the cost",
  "To be sold cheaply",
  "Attack all out",
  "To become out of control",
  "A born fool",
  "A cemetery beside a church",
  "To smile a lot",
  "To take retirement",
  "To scold",
  "To daydream",
  "In disorderly haste",
  "Neglected",
  "Everywhere",
  "To live in a luxurious way",
  "To endure a difficult situation",
  "To behave in a silly and noisy way",
  "In a nervous state",
  "Something that is done very quickly",
  "In a partnership with",
  "In great difficulty",
  "Cheerless and depressed",
  "Appear soon",
  "Contesting the seat",
  "To be in trouble",
  "Well informed and up-to-date",
  "In direct opposition to",
  "Detachment and seclusion",
  "To act hastily",
  "To scold angrily",
  "Keep oneself updated",
  "To calm down",
  "Remained expressionless",
  "Wasting time",
  "Relatives",
  "Learn to do particular jobs",
  "To work or play off excess energy",
  "To take it easy and relax",
  "Completely alone",
  "Completely",
  "Be careful",
  "Ran away with",
  "Entirely false and fabricated",
  "To pretend",
  "Run away",
  "Afraid of speaking frankly",
  "To tell what you are thinking",
  "No chance of success",
  "No one is self-sufficient",
  "Tell your opinion clearly",
  "Of the best quality",
  "Without preparation",
  "Out of trouble",
  "On foot",
  "On credit",
  "Honest",
  "Totally",
  "Poor",
  "Forbidden",
  "Out of danger",
  "Completely",
  "To dispose of with the intent to deceive",
  "A prolific source of trouble",
  "An unpleasant remark at the end of a conversation",
  "Very similar",
  "Analyse critically",
  "Something not possible",
  "Hunt for a job on street",
  "To trick someone",
  "To use personal influence",
  "To calm oneself down",
  "Tolerate",
  "Meet accidentally",
  "Act without restraint",
  "Face negative consequences of one’s actions",
  "To revive forgotten quarrel",
  "Completely",
  "A positive outlook on life",
  "Adolescence",
  "Dealt firmly",
  "To get rid of",
  "A very easy task",
  "A simple solution to a complicated problem",
  "To wait before making a decision",
  "Indifferent",
  "Complete halt",
  "An indication of what might happen",
  "Pride",
  "To object strongly",
  "To take courage",
  "Prepare to go to war",
  "Similar to",
  "Majority of votes are in favour",
  "Extraordinary",
  "The decision has been taken",
  "Big international bankers",
  "The most important aspect of a subject",
  "The unpleasant aspect",
  "Start of harmful development",
  "Things starting to go wrong",
  "To prevent a plan from succeeding",
  "To express hatred",
  "To surrender",
  "For a long time",
  "To fish",
  "In a confusing situation",
  "To be dead and buried",
  "To be surprised",
  "To feel sick",
  "To run away in fear",
  "To be acquitted of a crime",
  "To wish good luck",
  "To succeed",
  "To remove obstructions",
  "To gain experience",
  "To stop talking and start working",
  "Come to know",
  "To prepare for hard work",
  "A poorly received joke",
  "To arrive at an agreement",
  "To have a good time",
  "To go to sleep",
  "To follow popular trends",
  "In a state of suspension",
  "To be in touch",
  "To make a lot of money",
  "To stop something at the start",
  "To take revenge",
  "To criticise someone",
  "To restart from the previous closing point",
  "Unfairly think of someone (less than his ability)",
  "To seek to win approval",
  "To make one feel ashamed",
  "Tolerate",
  "To run about in a frenzy",
  "To have a casual conversation",
  "To avoid deliberately",
  "To be dead",
  "To act foolishly",
  "Postpone",
  "To outshine",
  "Avoid",
  "To degrade",
  "To deceive someone",
  "To scold someone",
  "In every detail",
  "Express extreme anger",
  "To follow the lead",
  "To change one’s behaviour for the better",
  "In an ironic way",
  "Uncertain",
  "Turn upside down",
  "Appear",
  "To be angry",
  "Face to face",
  "To divert attention from something important",
  "No longer important",
  "Good and bad times",
  "Suffer unrequited love",
  "To prepare ship to sail",
  "To get drunk",
  "What a coincidence",
  "Never going to happen",
  "Pretend to be unafraid",
  "Enjoy in a noisy way",
  "Impossible to achieve",
  "To cheat/rob",
  "Carefully",
  "Excellent service",
  "Be very poor",
  "To narrowly avoid a situation",
  "Smells foul",
  "To make someone laugh",
  "An easy and pleasant job",
  "Made a mess",
  "Burst of energy",
  "Provide useful advantage",
  "Materialistic wealth",
  "Exactly",
  "To tell others what to do",
  "A life filled with excitement",
  "Smart and clever",
  "Completely different from each other",
  "Something that is fake",
  "To look foolish",
  "Desperate attempt to succeed",
  "Average",
  "To use one’s last resource",
  "Bad luck",
  "In trouble",
  "Doing a job quickly/alert",
  "Completely obsolete/out of trend",
  "An unreal hope",
  "Obey someone’s every wish",
  "To buy something worthless",
  "Starting to perform very well",
  "Similar thing/person",
  "Made an irreversible change",
  "To become excited or angry",
  "An old vehicle",
  "To go to bed",
  "Energetic person",
  "To gossip or chat casually",
  "Keep sharing the latest information",
  "To annoy",
  "I am not convinced",
  "A mild punishment",
  "Market where prices are rising",
  "To be badly defeated",
  "To ease pressure on something",
  "Bought without proper examination",
  "To be idle",
  "Neighbourhood",
  "To confine somebody",
  "To leave someone without support",
  "A mood of deep thoughts",
  "Nonsense speech",
  "To become angry suddenly",
  "Easily and quickly achievable",
  "Incomprehensible",
  "Cowards",
  "Gesture of peace",
  "Failing completely",
  "Go insane",
  "Went terribly wrong",
  "A place having many interesting objects",
  "A painful cramp",
  "Out of one’s senses",
  "Happening fast without hesitation",
  "In fashion",
  "Difficult situation",
  "Small steps",
  "A person who thinks himself of high class",
  "To feel sorry",
  "To perfection",
  "Event that is likely to happen soon",
  "Small part of big organisation",
  "No longer young",
  "Hard work",
  "At the time of decision",
  "To perform without rehearsals",
  "Poor memory",
  "Strange person",
  "To make an attempt",
  "Spoil someone’s chance of doing something",
  "Great confusion",
  "Not brave",
  "Make someone extremely angry"
]; 
