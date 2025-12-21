const PET_PROFILES = {
    "NoPets": {
    name: "Non-Pet Person (The Autonomous Rationalist)",
    main_trait: "Highly autonomous, control-oriented, and cognitively self-contained. Strong preference for predictability and personal boundaries.",
    strength: "Exceptional independence, strong self-regulation, clear priorities, and resistance to emotional manipulation.",
    weakness: "Low tolerance for dependency, noise, unpredictability, and unsolicited emotional demands.",
    mental_tendency: "Values rational systems, cleanliness, and efficiency over emotional bonding with animals. Often anthropocentric or task-focused in worldview.",
    communication: "Direct, minimalistic, and boundary-driven. Prefers clarity over emotional subtext.",
    work_style: "The System Optimizer; excels in structured, low-distraction environments. Highly productive when uninterrupted.",
    friendship_style: "Selective and principle-based. Bonds through shared values, intellect, or goals rather than shared caretaking.",
    romance_style: "Independent and contract-like; requires mutual respect for space, routines, and personal autonomy.",
    gender_insights: "Men often score high on emotional suppression and control needs. Women often report sensory sensitivity and boundary fatigue.",

    best_friend: "Fish Owner or Fellow No-Pet Person — respects silence, autonomy, and non-intrusive coexistence.",
    worst_enemy: "Dog or Bird Owner — constant noise, neediness, and emotional intrusion trigger irritation.",
    best_romantic_partner: "Cat Owner (high-autonomy subtype) or Horse Owner — independent, disciplined, and low-cling.",
    possible_mental_disorders: [
        "Likelihood of Any Disorder is Equal"
    ]
},
    "Cat": {
        name: "Cat Owner (The Intellectual Non-Conformist)",
        main_trait: "Open-minded, creative, and intellectually curious. High value on autonomy.",
        strength: "Independent thinker, imaginative, and comfortable with solitude.",
        weakness: "Prone to worry, sensitive to stress, and can be socially reserved.",
        mental_tendency: "Non-conformist with a Liberal worldview. Values meaningful over many connections.",
        communication: "Subtle, sarcastic, and observant. Prefers one-on-one dialogue over group settings.",
        work_style: "The Independent Creative; dislikes micromanagement. Works in bursts of intellectual focus.",
        friendship_style: "Selective. Prefers a small circle of deep connections. Socializing is done on their own terms.",
        romance_style: "Low-maintenance but deeply intuitive. Needs a partner who respects boundaries and silence.",
        gender_insights: "Female owners may report higher sensitivity. Male owners often defy gender norms.",
        best_friend: "Rabbit or Fish Owner — shares quiet companionship, respects boundaries, low-drama presence.",
        worst_enemy: "Bird Owner — overstimulation, noise, and dominance fatigue the Cat personality.",
        best_romantic_partner: "Reptile or Horse Owner — respects autonomy, values depth over constant interaction.",
        possible_mental_disorders: [
        "Generalized Anxiety Tendencies",
        "Avoidant Attachment Traits",
        "High Sensory Sensitivity"
        ],
        breeds: {
            "British Shorthair": {
                main_trait: "The Stoic Intellectual; values peace and predictability.",
                strength: "Calm and undemanding.",
                weakness: "Can seem emotionally distant.",
                romance_style: "A quiet, steady presence; affection is shown through proximity."
            },
            "Siamese": {
                main_trait: "The Vocal Extrovert; high personality convergence with owner.",
                strength: "Highly communicative and intelligent.",
                weakness: "Demanding of attention, prone to anxiety if ignored.",
                romance_style: "Intense and chatty; wants to be involved in every aspect of your life."
            },
            "Persian": {
                main_trait: "The Indoor Aristocrat; prefers a curated, aesthetic environment.",
                strength: "Gentle and placid.",
                weakness: "High maintenance grooming; low tolerance for chaos.",
                romance_style: "Expects to be pampered; love is receiving service and comfort."
            },
            "Maine Coon": {
                main_trait: "The Dog-Like Cat Person; bridges the gap between independence and sociability.",
                strength: "Friendly and adaptable.",
                weakness: "Underestimates their own size and presence.",
                romance_style: "Playful and loyal; the most likely cat to actually greet you at the door."
            },
            "Sphynx": {
                main_trait: "The Radical Non-Conformist.",
                strength: "Unbothered by societal norms, seeks warmth.",
                weakness: "High physical needs regarding warmth and skin care.",
                romance_style: "Velcro-love; literally needs physical contact to survive."
            },
            "Bengal": {
                main_trait: "The Active Explorer; requires high stimulation.",
                strength: "Highly intelligent and adventurous.",
                weakness: "Can be destructive if bored.",
                romance_style: "Exciting and dynamic; needs a partner who enjoys activity and play."
            },
            "Scottish Fold": {
                main_trait: "The Sweet Observer; prefers a quiet, stable home.",
                strength: "Adaptable and affectionate.",
                weakness: "Can be overly passive.",
                romance_style: "Gentle and relying; enjoys quiet evenings on the sofa."
            },
            "Ragdoll": {
                main_trait: "The Relaxed Pacifist; goes with the flow.",
                strength: "Exceptionally patient and tolerant.",
                weakness: "Lacks street smarts; too trusting.",
                romance_style: "The ultimate cuddler; physically affectionate and devoted."
            },
            "Russian Blue": {
                main_trait: "The Shy Introvert; deeply loyal to one person.",
                strength: "Sensitive and routine-oriented.",
                weakness: "Startles easily; dislikes change.",
                romance_style: "Slow to trust, but unwavering once a bond is formed."
            },
            "Abyssinian": {
                main_trait: "The Busy Body; intensely curious and active.",
                strength: "Smart and engaging.",
                weakness: "Cannot sit still; prone to climbing curtains.",
                romance_style: "Fun and energetic, but requires a partner with high stamina."
            },
            "Mixed Breed (Moggy)": {
                main_trait: "The Pragmatic Realist; values personality over pedigree.",
                strength: "Resilient and unpretentious.",
                weakness: "Unpredictable traits.",
                romance_style: "Down-to-earth and genuine; appreciates character over status."
            }
        }
    },
    "Dog": {
        name: "Dog Owner (The Resilient Socialite)",
        main_trait: "Extroverted, agreeable, and highly conscientious. Operates with high energy.",
        strength: "Resilient, optimistic, and disciplined. Excellent at handling structure.",
        weakness: "Requires external validation; can be competitive in social hierarchies.",
        mental_tendency: "Pack-oriented. Believes in hierarchy, rules, and loyalty. Low tolerance for ambiguity.",
        communication: "Direct, enthusiastic, and expansive. Loves group dynamics.",
        work_style: "The Team Player; values hierarchy, clear goals, and routine.",
        friendship_style: "The Social Connector. Makes friends easily in parks. Values broad, active social groups.",
        romance_style: "Secure and devoted. Views relationships as a partnership. High need for togetherness.",
        gender_insights: "Men report higher self-esteem. Women are viewed as pragmatic and resilient.",
        best_friend: "Bird or Horse Owner — thrives in shared activity, leadership, and expressive environments.",
        worst_enemy: "Fish Owner — perceived emotional distance feels like rejection.",
        best_romantic_partner: "Cat Owner (secure Cat subtype) or Horse Owner — balances loyalty with independence.",
        possible_mental_disorders: [
            "External Validation Dependence",
            "Mild Obsessive-Compulsive Traits (routine fixation)",
            "Performance Anxiety"
        ],
        breeds: {
            "Rottweiler": {
                main_trait: "The Protector; correlated with high masculinity and happiness scores.",
                strength: "Fearless and fiercely loyal.",
                weakness: "Can be overly defensive or suspicious of strangers.",
                romance_style: "Protective and traditional; takes the guardian role very seriously."
            },
            "German Shepherd": {
                main_trait: "The Disciplined Worker; strongly correlated with masculine personality traits.",
                strength: "High intelligence and focus.",
                weakness: "Needs a job to feel fulfilled; can be high-strung.",
                romance_style: "Intense loyalty; bonds deeply with one person above all others."
            },
            "Yorkshire Terrier": {
                main_trait: "The Feisty Companion; strongly correlated with feminine personality traits.",
                strength: "Brave and affectionate.",
                weakness: "Can be bossy.",
                romance_style: "Demanding but devoted; expects to be treated like royalty."
            },
            "Maltese": {
                main_trait: "The Nurturing Companion; strongly correlated with feminine personality traits.",
                strength: "Attentive and affectionate.",
                weakness: "Prone to separation anxiety.",
                romance_style: "Cuddly and dependent; wants to be the center of your emotional world."
            },
            "Golden Retriever": {
                main_trait: "The Social Butterfly; considered an androgynous choice appealing to all.",
                strength: "High emotional intelligence and empathy.",
                weakness: "Neediness; struggles with being alone.",
                romance_style: "The classic romantic; brings you gifts and offers unconditional adoration."
            },
            "Schnauzer": {
                main_trait: "The Serious Planner; alert and spirited.",
                strength: "Intelligent and obedient.",
                weakness: "Can be vocal and stubborn.",
                romance_style: "Loyal but independent; appreciates a partner with their own hobbies."
            },
            "Labrador Retriever": {
                main_trait: "The Agreeable Optimist; high scores on social connection.",
                strength: "Universally friendly and resilient.",
                weakness: "Lacks discernment; trusts everyone.",
                romance_style: "Happy-go-lucky love; rarely holds a grudge."
            },
            "Bulldog": {
                main_trait: "The Determined Chill; stubborn but charmingly so.",
                strength: "Patient and low-energy.",
                weakness: "Very resistant to change or exercise.",
                romance_style: "The ultimate comfort partner; values shared snacks and naps above all else."
            },
            "Poodle": {
                main_trait: "The Elegant Genius; sharp, stylish, and highly trainable.",
                strength: "Sophisticated and observant.",
                weakness: "High mental stimulation needs; can be neurotic if bored.",
                romance_style: "Charming and attentive; expects a partner who can keep up intellectually."
            },
            "Beagle": {
                main_trait: "The Nose-Led Wanderer; focused and food-motivated.",
                strength: "Friendly and gentle.",
                weakness: "Easily distracted; selective hearing.",
                romance_style: "Fun-loving and curious; loves an adventure, especially if it involves lunch."
            },
            "Dachshund": {
                main_trait: "The Stubborn Individualist; brave and persistent.",
                strength: "Courageous despite size.",
                weakness: "Surprisingly dominant and stubborn.",
                romance_style: "Possessive; a big personality that demands devotion."
            },
            "Chihuahua": {
                main_trait: "The Pocket Guardian; intensely bonded to one person.",
                strength: "Fearless and alert.",
                weakness: "Prone to jealousy.",
                romance_style: "Fiercely exclusive; you are their one and only, everyone else is a threat."
            },
            "Boxer": {
                main_trait: "The Playful Guardian; energetic and fun-loving.",
                strength: "Protective but goofy.",
                weakness: "High energy requires constant outlet.",
                romance_style: "Exuberant and physical; loves roughhousing and cuddling equally."
            },
            "Siberian Husky": {
                main_trait: "The Free Spirit; independent and dramatic.",
                strength: "Athletic and friendly.",
                weakness: "Master escape artist; dramatic vocalizations.",
                romance_style: "Independent love; they come to you when they want, not when you call."
            }
        }
    },
    "Bird": {
        name: "Bird Owner (The Socially Expressive)",
        main_trait: "Socially outgoing, expressive, and communicative.",
        strength: "High levels of social interaction and expression.",
        weakness: "Can be perceived as dominant or loud.",
        mental_tendency: "Polite and caring, but high potential for social dominance.",
        communication: "Vocal and expressive; comfortable with noise and chatter.",
        work_style: "The Communicator; thrives in environments allowing for self-expression.",
        friendship_style: "Gregarious and outgoing; enjoys being heard.",
        romance_style: "Expressive and engaging; values verbal affirmation.",
        gender_insights: "Female bird owners score significantly higher in dominance traits.",
        best_friend: "Dog Owner — enjoys audience, engagement, and shared social energy.",
        worst_enemy: "Cat or Rabbit Owner — feels ignored or emotionally starved.",
        best_romantic_partner: "Bird or Hamster Owner — matches verbal energy and expressive bonding.",
        possible_mental_disorders: [
            "Histrionic Tendencies",
            "Attention Regulation Issues",
            "Emotional Volatility Under Neglect"
        ],
        breeds: {
            "Parrot (General)": {
                main_trait: "The Eloquent Intellectual; requires constant stimulation.",
                strength: "Exceptional mimicry and memory.",
                weakness: "Prone to screaming fits when bored.",
                romance_style: "Passionate but demanding; expects you to listen to their opinions."
            },
            "Budgerigar": {
                main_trait: "The Chatterbox; cheerful and social.",
                strength: "Easy to bond with.",
                weakness: "Can be fragile and easily stressed.",
                romance_style: "Sweet and constant; loves to be near you and chatter away."
            },
            "Cockatiel": {
                main_trait: "The Whistling Performer; affectionate and gentle.",
                strength: "Social but not overly demanding.",
                weakness: "Night frights; needs reassurance.",
                romance_style: "Gentle affection; loves head scratches and whistling duets."
            },
            "Macaw": {
                main_trait: "The Larger Than Life Personality; loud and colorful.",
                strength: "Deeply emotional bonds.",
                weakness: "Intimidating beak; extremely loud.",
                romance_style: "Intense, lifelong pair bonding; can be jealous of others."
            },
            "Cockatoo": {
                main_trait: "The Velcro Bird; extreme emotional neediness.",
                strength: "Incredibly cuddly and loving.",
                weakness: "Destructive if ignored; emotional manipulation.",
                romance_style: "Obsessive love; wants to be physically attached to you 24/7."
            },
            "African Grey": {
                main_trait: "The Cognitive Genius; serious and observant.",
                strength: "Unparalleled intelligence.",
                weakness: "Neurotic and prone to feather plucking.",
                romance_style: "Intellectual bond; requires respect and mental engagement."
            },
            "Canary": {
                main_trait: "The Solitary Singer; values personal space.",
                strength: "Beautiful voice; independent.",
                weakness: "Not hands-on; prefers not to be handled.",
                romance_style: "Distant admiration; happy to sing for you, but don't touch."
            },
            "Finch": {
                main_trait: "The Social Observer; prefers bird company over humans.",
                strength: "Active and cheerful watching.",
                weakness: "Flighty; hard to tame.",
                romance_style: "Hands-off; they are happy you are there, but prefer their flock."
            },
            "Conure": {
                main_trait: "The Clown; playful and loud.",
                strength: "Entertaining and bold.",
                weakness: "Nippy and screechy.",
                romance_style: "Fun and chaotic; life is a party and they are the DJ."
            },
            "Lovebird": {
                main_trait: "The Feisty Partner; big attitude in a small body.",
                strength: "Determined and bonded.",
                weakness: "Territorial and aggressive.",
                romance_style: "Fiercely loyal to their chosen person; aggressive to everyone else."
            }
        }
    },
    "Reptile": {
        name: "Reptile Owner (The Fascinated Hobbyist)",
        main_trait: "Unconventional, novelty-seeking, and open to new experiences.",
        strength: "Detail-oriented, knowledgeable, and appreciates 'wild' beauty.",
        weakness: "Can be perceived as 'bizarre' or 'asocial' by outsiders.",
        mental_tendency: "High openness to experience. Often views pets as family, despite misconceptions.",
        communication: "Educational; likes to share knowledge about their unique animals.",
        work_style: "The Specialist; dedicated to mastering complex husbandry requirements.",
        friendship_style: "Niche; bonds deeply with fellow enthusiasts who understand the hobby.",
        romance_style: "Unconventional; requires a partner who accepts the non-traditional.",
        gender_insights: "Women owners are highly Open and Agreeable. Men owners score lower on Agreeableness.",
        best_friend: "Cat or Fish Owner — quiet respect, fascination without pressure.",
        worst_enemy: "Dog Owner — overwhelms with structure, noise, and constant engagement.",
        best_romantic_partner: "Cat or Rabbit Owner — accepts unconventional attachment and solitude.",
        possible_mental_disorders: [
            "Social Detachment Traits",
            "Obsessive Focus Patterns",
            "Low Expressive Affect"
        ],
        breeds: {
            "Snake (General)": {
                main_trait: "The Novelty Seeker; values the unusual.",
                strength: "Unconventional and aesthetic appreciation.",
                weakness: "Stigmatized by society.",
                romance_style: "Fascinated by beauty and danger; not needy for affection."
            },
            "Ball Python": {
                main_trait: "The Chill Introvert; slow-moving and docile.",
                strength: "Low stress, easy handling.",
                weakness: "Picky eater.",
                romance_style: "Calm and steady; happy to just hang around your neck."
            },
            "Corn Snake": {
                main_trait: "The Reliable Classic; active and docile.",
                strength: "Easy to care for, tolerant.",
                weakness: "Escape artist.",
                romance_style: "Easy-going and low drama; a perfect starter relationship."
            },
            "Turtle/Tortoise": {
                main_trait: "The Hard-Working Realist; reliable and upwardly mobile.",
                strength: "Long-term commitment; stable.",
                weakness: "Stubborn and very long-lived.",
                romance_style: "A lifetime commitment; slow and steady wins the race."
            },
            "Red-Eared Slider": {
                main_trait: "The Aquatic Active; requires a complex setup.",
                strength: "Interactive and food-motivated.",
                weakness: "Messy and requires high maintenance.",
                romance_style: "High effort but rewarding; needs a lot of filtered attention."
            },
            "Lizard (General)": {
                main_trait: "The Family Member; most likely reptile to be viewed as family.",
                strength: "Interactive and communicative.",
                weakness: "Complex environmental needs.",
                romance_style: " Surprisingly bonded; recognizes you and wants interaction."
            },
            "Bearded Dragon": {
                main_trait: "The Dog of Reptiles; social and chill.",
                strength: "Docile and enjoys handling.",
                weakness: "Needy regarding temperature and diet.",
                romance_style: "The cuddle-bug of the cold-blooded world; wants to watch TV with you."
            },
            "Leopard Gecko": {
                main_trait: "The Smiling Nocturnal; cute and manageable.",
                strength: "Clean and docile.",
                weakness: "Sleeps while you are awake.",
                romance_style: "Low pressure; happy to see you in the evening."
            },
            "Iguana": {
                main_trait: "The Difficult Dinosaur; intelligent but dominant.",
                strength: "Impressive and smart.",
                weakness: "Can be aggressive and dangerous.",
                romance_style: "High maintenance and risky; requires respect and careful handling."
            },
            "Chameleon": {
                main_trait: "The Sensitive Observer; stress-prone and beautiful.",
                strength: "Fascinating to watch.",
                weakness: "Does not like being touched.",
                romance_style: "Look but don't touch; admires you from a distance."
            }
        }
    },
    "Horse": {
        name: "Horse Owner (The Assertive Introspective)",
        main_trait: "Assertive, introspective, and disciplined.",
        strength: "Hard-working, physically active, and commanding.",
        weakness: "Can be low in warmth and nurturance; viewed as intense.",
        mental_tendency: "Goal-oriented and rational. High dedication to duty.",
        communication: "Direct and commanding; used to controlling large animals.",
        work_style: "The Leader; takes charge and expects high standards.",
        friendship_style: "Activity-based; bonds over shared hard work and riding.",
        romance_style: "Intense and lifestyle-focused; the horse often comes first.",
        gender_insights: "Men are aggressive and dominant. Women are easy-going and non-aggressive.",
        best_friend: "Dog Owner — shared discipline, leadership, and physical engagement.",
        worst_enemy: "Fish Owner — perceived passivity causes frustration.",
        best_romantic_partner: "Cat Owner — emotional depth without clinginess.",
        possible_mental_disorders: [
            "Type-A Stress Patterns",
            "Emotional Suppression",
            "Control-Oriented Coping Mechanisms"
        ],
        breeds: {
            "Thoroughbred": {
                main_trait: "The High-Performance Athlete; sensitive and fast.",
                strength: "Incredible drive and speed.",
                weakness: "High-strung and reactive.",
                romance_style: "Fast-paced and intense; requires a calming influence."
            },
            "Quarter Horse": {
                main_trait: "The Versatile Worker; calm and quick.",
                strength: "Level-headed and agile.",
                weakness: "Can be stubborn.",
                romance_style: "Reliable and adaptable; down for anything."
            },
            "Arabian": {
                main_trait: "The Sensitive Soul; high endurance and intelligence.",
                strength: "Loyal and people-oriented.",
                weakness: "Easily spooked; emotional.",
                romance_style: "Deeply bonded; wants to be in your personal space."
            },
            "Appaloosa": {
                main_trait: "The Independent Spotted; hardy and unique.",
                strength: "Endurance and distinct look.",
                weakness: "Known for being opinionated.",
                romance_style: "Fun and flashy; likes to stand out from the crowd."
            },
            "Morgan": {
                main_trait: "The Cooperative Partner; friendly and eager.",
                strength: "Versatile and people-pleasing.",
                weakness: "Can be pushy for treats.",
                romance_style: "Sweet and helpful; wants to work together."
            },
            "Warmblood": {
                main_trait: "The Professional Competitor; athletic and calm.",
                strength: "Powerful and disciplined.",
                weakness: "Expensive maintenance.",
                romance_style: "High standards; expects the best and gives the best."
            },
            "Shetland Pony": {
                main_trait: "The Napoleon Complex; small but mighty.",
                strength: "Hardy and clever.",
                weakness: "Incredibly stubborn and cheeky.",
                romance_style: "Full of personality; will outsmart you if you aren't careful."
            },
            "Mustang": {
                main_trait: "The Wild Spirit; strong survival instincts.",
                strength: "Sure-footed and smart.",
                weakness: "Hard to gain trust.",
                romance_style: "Earned love; once you have their trust, you have it forever."
            },
            "Clydesdale": {
                main_trait: "The Gentle Giant; calm and powerful.",
                strength: "Steady and strong.",
                weakness: "Expensive to feed.",
                romance_style: "Big-hearted and gentle; a rock in the storm."
            },
            "Andalusian": {
                main_trait: "The Dramatic Artist; noble and brave.",
                strength: "Beautiful movement and presence.",
                weakness: "Sensitive to harsh handling.",
                romance_style: "Romantic and fairytale-like; focused on beauty and connection."
            }
        }
    },
    "Fish": {
        name: "Fish Owner (The Zen Minimalist)",
        main_trait: "Calm, contemplative, stable, trusting and low-key.",
        strength: "Extremely patient, excellent at creating a soothing atmosphere and coping with mental pressure; high empathy.",
        weakness: "Emotionally distant, sometimes feels like 'zoned out', rarely remembers what happened five minutes ago.",
        mental_tendency: "Tendency toward dissociation; finds human interaction stressful. Low neuroticism and low stress scores; naturally soothing presence.",
        communication: "Silent and cryptic; communicates through environmental shifts; excellent listener.",
        work_style: "The Observer; excels at passive monitoring, human-centric or therapy roles.",
        friendship_style: "Low maintenance; happy to coexist in silence. Stable and reliable like a rock.",
        romance_style: "Low-pressure, reliable; happy to sit in comfortable silence.",
        gender_insights: "N/A",
        best_friend: "Cat or Reptile Owner — silent coexistence, mutual respect for space.",
        worst_enemy: "Bird Owner — sensory overload, verbal intrusion.",
        best_romantic_partner: "Rabbit or Fish Owner — calm, safe, non-demanding attachment.",
        possible_mental_disorders: [
            "Dissociative Tendencies",
            "Emotional Withdrawal",
            "Depersonalization Under Stress"
        ],
        breeds: {
            "Goldfish": { main_trait: "The Classic; hardy and hungry.", strength: "Resilient.", weakness: "Messy.", romance_style: "Simple and demanding of snacks." },
            "Betta": { main_trait: "The Solitary Warrior; beautiful but angry.", strength: "Independent.", weakness: "Aggressive.", romance_style: "Look but don't touch." },
            "Guppy": { main_trait: "The Social Swarmer; active and colorful.", strength: "Easy breeder.", weakness: "Short lifespan.", romance_style: "Safety in numbers." },
            "Tetra": { main_trait: "The Schooling Follower; peaceful.", strength: "Community player.", weakness: "Nervous alone.", romance_style: "Needs a group to feel safe." },
            "Angelfish": { main_trait: "The Elegant Grace; distinctive shape.", strength: "Beautiful display.", weakness: "Can be territorial.", romance_style: "Graceful but sharp." },
            "Cichlid": { main_trait: "The Intelligent Aggressor; complex behavior.", strength: "Smart parents.", weakness: "Territorial.", romance_style: "Intense family protector." },
            "Oscar": { main_trait: "The Water Puppy; recognizes owners.", strength: "Personality plus.", weakness: "Destructive redecorator.", romance_style: "Moody but interactive." },
            "Discus": { main_trait: "The High Maintenance Diva; stunning colors.", strength: "Showstopper.", weakness: "Needs perfect water.", romance_style: "Perfectionist." },
            "Koi": { main_trait: "The Pond Giant; long-lived.", strength: "Peaceful and large.", weakness: "Needs space.", romance_style: "Generational commitment." },
            "Plecostomus": { main_trait: "The Cleaner; hides and works.", strength: "Algae eater.", weakness: "Gets huge.", romance_style: "Hidden support system." }
        }
    },
    "Hamster": {
        name: "Hamster/Gerbil Owner (The Night Owl Hustler)",
        main_trait: "Endlessly energetic, highly focused on small tasks. Highly educated, intelligent, brainy, and sharp.",
        strength: "Incredible stamina, efficient, excellent at resource hoarding. Exceptional data processing and stamina.",
        weakness: "Nocturnal tendencies, prone to excessive, nervous chewing. Night owl; can be socially elusive or overly focused on tasks.",
        mental_tendency: "Obsessive-Compulsive behaviors regarding wheels and tunnels.",
        communication: "Muffled and rapid-fire; always seems busy.",
        work_style: "The Independent Contractor and Deep Thinker; excels at technical and numerical problems; gets best work done between 1 AM and 5 AM.",
        friendship_style: "Intellectual and activity-based.",
        romance_style: "Sweet but elusive; always busy but affectionate when stopped.",
        gender_insights: "N/A",
        best_friend: "Bird or Hamster Owner — shared energy, fast-paced cognition.",
        worst_enemy: "Horse Owner — feels pressured, controlled, and overstimulated.",
        best_romantic_partner: "Cat or Rabbit Owner — grounding presence balances intensity.",
        possible_mental_disorders: [
            "Obsessive-Compulsive Tendencies",
            "Sleep Phase Delay",
            "Anxiety-Driven Hyperfocus"
        ],
        breeds: {
            "Syrian Hamster": { main_trait: "The Solitary Sovereign.", strength: "Easy to handle.", weakness: "Must live alone.", romance_style: "Independent." },
            "Dwarf Hamster": { main_trait: "The Social Sprinter.", strength: "Fast.", weakness: "Hard to hold.", romance_style: "Energetic." },
            "Roborovski": { main_trait: "The Speedster.", strength: "Super fast.", weakness: "Look only.", romance_style: "Fleeting." },
            "Chinese Hamster": { main_trait: "The Climber.", strength: "Agile.", weakness: "Shy.", romance_style: "Clingy once trusted." },
            "Gerbil": { main_trait: "The Digger.", strength: "Social groups.", weakness: "Chews everything.", romance_style: "Community focused." },
            "Guinea Pig": { main_trait: "The Vocal Potato.", strength: "Cuddly.", weakness: "Loud wheeking.", romance_style: "Food focused affection." },
            "Rat": { main_trait: "The Puppy Pocket.", strength: "Super smart.", weakness: "Short life.", romance_style: "Deeply bonded." },
            "Mouse": { main_trait: "The Tiny Busybody.", strength: "Active.", weakness: "Smelly.", romance_style: "Curious observer." },
            "Chinchilla": { main_trait: "The Soft Cloud.", strength: "Long lived.", weakness: "Dust baths only.", romance_style: "Soft but independent." },
            "Degu": { main_trait: "The Chatty Explorer.", strength: "Social.", weakness: "Diabetes prone.", romance_style: "Interactive." }
        }
    },
    "Rabbit": {
        name: "Rabbit Owner (The Anxious Perfectionist)",
        main_trait: "Gentle, shy, and extremely sensitive to their environment. Moody, creative, introverted, and laid-back.",
        strength: "Quiet observer, sensitive observer, very organized, excellent groomer.",
        weakness: "Easily spooked, prone to passive-aggressive thumping.",
        mental_tendency: "High tendency towards anxiety; worries about loud noises; penchant for aesthetic/creative fields.",
        communication: "Subtle and non-confrontational; artistic; prefers non-verbal expression.",
        work_style: "The Detail-Oriented Planner; excels at organizing; thrives in visual/written roles; good freelancer.",
        friendship_style: "Quiet, selective and domestic.",
        romance_style: "Nervously sweet; love is earned through patience; requires quiet environments.",
        gender_insights: "N/A",
        best_friend: "Cat or Fish Owner — gentle, quiet, emotionally safe.",
        worst_enemy: "Bird or Dog Owner — noise and dominance trigger anxiety.",
        best_romantic_partner: "Cat or Horse Owner (gentle subtype) — protective without overwhelm.",
        possible_mental_disorders: [
            "Generalized Anxiety",
            "Avoidant Attachment",
            "Sensory Processing Sensitivity"
        ],
        breeds: {
            "Holland Lop": { main_trait: "The Floppy Baby.", strength: "Cute.", weakness: "Ear infections.", romance_style: "Cuddly." },
            "Netherland Dwarf": { main_trait: "The Tiny Tyrant.", strength: "Small.", weakness: "Feisty.", romance_style: "Spicy love." },
            "Rex": { main_trait: "The Velveteen Touch.", strength: "Softest fur.", weakness: "Prone to sore hocks.", romance_style: "Tactile." },
            "Flemish Giant": { main_trait: "The Gentle Giant.", strength: "Chill.", weakness: "Expensive food bill.", romance_style: "Dog-like affection." },
            "Lionhead": { main_trait: "The Bad Hair Day.", strength: "Distinct look.", weakness: "Grooming needs.", romance_style: "High maintenance." },
            "Angora": { main_trait: "The Fluff Ball.", strength: "Wool production.", weakness: "Matting.", romance_style: "Labor of love." },
            "Dutch": { main_trait: "The Tuxedo Wearer.", strength: "Consistent temperament.", weakness: "Generic.", romance_style: "Reliable." },
            "Mini Rex": { main_trait: "The Soft Sprite.", strength: "Personality.", weakness: "Fragile.", romance_style: "Velvet hugs." },
            "English Spot": { main_trait: "The Runner.", strength: "Active.", weakness: "Needs space.", romance_style: "On the go." },
            "Himalayan": { main_trait: "The Chill Bean.", strength: "Calm.", weakness: "Light sensitive.", romance_style: "Laid back." }
        }
    }
};

const PET_ICONS = {
    Cat: "🐱",
    Dog: "🐶",
    Bird: "🐦",
    Reptile: "🦎",
    Horse: "🐎",
    Fish: "🐟",
    Hamster: "🐹",
    Rabbit: "🐰",
    NoPets: "😠" 
};

const JOKES = [
    "What do you call a dog owner who can't stop talking about their pet? A Labra-bore!",
    "Why did the cat owner break up with the dog owner? Because they felt like their relationship was going to the dogs!",
    "What's a snake's favorite subject? Hiss-tory!",
    "What do you call a bulldog in the summer? A hot dog!",
    "Did you hear about the new pet owner horoscope app? It’s completely biased toward a-paw-thecary!",
    "How does a rabbit owner flirt? They tell you they've always wanted to 'hare' a home with you.",
    "Why are fish owners terrible conversationalists? Because they never stop talking about their tank mates!",
    "A Golden Retriever owner walks into a bar... and apologizes to everyone for no reason.",
    "A British Shorthair owner asked me what I was doing. I told them I was writing a web app. They sighed, rolled their eyes, and asked, 'Must you?'",
    "What's a Siamese owner's favorite game? Silent but deadly... just kidding, they're never silent!",
    "Why don’t cat owners play poker? Too many tells… and judgment.",
    "Dog owners don’t have calendars — they schedule life around walk time.",
    "Reptile owners say they like low-maintenance pets. The heat lamp disagrees.",
    "Why did the bird owner get kicked out of the library? Excessive chirping during group work.",
    "Horse owners call it a hobby. Their bank account calls it a lifestyle.",
    "Fish owners say their pets are low effort — and then spend three hours adjusting water chemistry.",
    "Hamster owners believe in cardio. At 3 AM.",
    "Rabbit owners don’t slam doors. Ever. The bunny might hear.",
    "Why do parrot owners make great debaters? They repeat your argument louder until you give up.",
    "A Husky owner said their dog is 'quiet today.' That was a lie.",
    "No-pet people don’t hate animals — they just prefer relationships that don’t shed.",
    "Why don’t NoPet people visit pet owners? The floor has opinions.",
    "A NoPets person sees a dog and thinks: 'That’s a lot of responsibility wearing fur.'",
    "NoPet people call it 'freedom.' Pet owners call it 'suspicious.'",
    "Why did the NoPets person leave the party early? Someone brought a dog. And expectations.",
    "Your pet personality says more about you than your browser history. Probably.",
    "This app does not diagnose you. Your pet already did.",
    "If you disagree with your result, that’s very on brand.",
    "According to this app, your pet didn’t choose you. It assessed you.",
    "Remember: it’s not astrology. It’s fur-based psychology.",
    "What did the cat say after he ate the canary? Yuck! That’s the last time I order the Tweet and Sour!",
    "What did the dog say when he saw a clay pot? Oh, look, a fancy terrier-acotta warrior!",
    "What do cats like to eat for breakfast? Some delicious Mice Krispies!",
    "What did the cat say when he didn’t want to share his toy? It’s mine, fur-ever and ever!",
    "Cats have it all: admiration, an endless sleep, and company only when they want it.",
    "I wonder if other dogs think poodles are members of a weird religious cult.",
    "My cat is not insane; she’s just a really good actress.",
    "Behind every successful person is a cat (and a pile of dirty laundry).",
    "Pets have more love and compassion in them than most humans.",
    "If your dog is fat, you’re not getting enough exercise.",
    "The best therapist has fur and four legs.",
    "Parrots make great pets. They have more personality than goldfish.",
    "In ancient times, cats were worshipped as gods; they have not forgotten this.",
    "A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down.",
    "Ever notice how dogs are the new kids? You take a walk with them, they ride in strollers, and the only trick they know is 'stay'.",
    "A fish tank is just interactive television for cats.",
    "Whoever said diamonds are a girl’s best friend never owned a dog.",
    "Every snack you make, every meal you bake, every bite you take, I’ll be watching you.",
    "Dogs and philosophers do the greatest good and get the fewest rewards.",
    "You can’t trust a dog to watch your food.",
    "I’m convinced my cat only pretends to sleep, just to listen to me better.",
    "If I could be half the person my dog is, I’d be twice the human I am.",
    "“Cats are smarter than dogs. You can’t get eight cats to pull a sled through snow.",
    "If a dog jumps into your lap, it’s because he loves you; if a cat does the same thing, it’s because your lap is warmer.",
    "I don’t think twice about picking up my dog’s poop, but if another dog’s poop is next to it, I think, 'Eww, dog poop!'",
    "Dogs are not our whole life, but they make our lives whole.",
    "Time spent with cats is never wasted. Especially when they're plotting world domination.",
    "If you get to thinking you’re a person of some influence, try ordering somebody else’s dog around.",
    "My fashion philosophy is if you’re not covered in dog hair, your life is empty.",
    "The difference between cats and dogs is, dogs come when they're called. Cats take a message and get back to you.",
    "Anyone who says they can't live without chocolate has clearly never had a good dog!",
    "I named my dog '5 miles' so I can tell people I walk 5 miles every day.",
    "Cats choose us; we don’t own them.",
    "I don’t need an alarm clock. My cat ensures I wake up every day at 4 am.",
    "If dogs could talk, perhaps we'd find it just as hard to get along with them as we do with people.",
    "What do dogs do on their day off? Can’t lie around – that’s their job!",
    "Cats have an infallible understanding of total concentration – and get between you and it.",
    "When your cat rubs the side of its face along your leg, it's affectionately marking you with its scent, saying, ‘You belong to me, silly human!",
    "Dogs come into our lives to teach us about love and loyalty. They depart to teach us about loss. A new dog never replaces an old dog; it merely expands the heart.",
    "I wonder if dogs think, ‘Humans return from the store with THE BEST things: Food, toys... Everything but my poop. Why do they keep collecting that?’",
    "Dogs are the universe's way of apologizing for your relatives.",
    "If cats looked like frogs, we'd realize what nasty, cruel little devils they are.",
    "I told my cat a joke about a dog. She wasn't amused.",
    "The world would be a nicer place if everyone had the ability to love as unconditionally as a pet."
];

// --- Warning Messages ---
const messages = [
    'Please, make your choice first!',
    'The pets are waiting. Choose wisely.',
    'You must select a creature before unleashing it.',
    'No pet selected. Chaos averted.'
];

// --- DOM Elements ---
const petSelect = document.getElementById('pet-selection');
const breedSelect = document.getElementById('breed-selection');
const generateButton = document.getElementById('generate-button');
const portraitOutput = document.getElementById('portrait-output');
const petJoke = document.getElementById('pet-joke');
const messageEl = document.getElementById('message');

// --- Core Functions ---

/**
 * Populates the Pet Type dropdown upon page load.
 */
function populatePetTypes() {
    for (const petType in PET_PROFILES) {
        const option = document.createElement('option');
        option.value = petType;
        option.textContent = PET_PROFILES[petType].name.split('(')[0].trim();
        petSelect.appendChild(option);
    }
}

/**
 * Handles Pet Type selection.
 */
function handlePetSelection() {
    const selectedPet = petSelect.value;

    portraitOutput.classList.remove('visible');
    petJoke.textContent = '';
    messageEl.textContent = '';

    breedSelect.innerHTML = '<option value="">-- Select Specific Breed (if applicable) --</option>';

    if (!selectedPet) {
    resetProfileView();
    breedSelect.style.display = 'none';
    
    return;
}

    if (PET_PROFILES[selectedPet].breeds) {
        const breeds = PET_PROFILES[selectedPet].breeds;

        for (const breed in breeds) {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;
            breedSelect.appendChild(option);
        }

        breedSelect.style.display = 'inline-block';
        
    } else {
        
        breedSelect.style.display = 'none';
    }
}

/**
 * Handles Breed selection.
 */
function handleBreedSelection() {
    portraitOutput.classList.remove('visible');
    messageEl.textContent = '';
    petJoke.textContent = '';

    const selectedPet = petSelect.value;
    const selectedBreed = breedSelect.value;

}

/**
 * Validates selection and generates portrait.
 */
function handleGenerateClick() {
    const selectedPet = petSelect.value;
    const selectedBreed = breedSelect.value;

    messageEl.textContent = '';

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    if (!selectedPet) {
        messageEl.textContent = randomMessage;
        return;
    }

    if (PET_PROFILES[selectedPet].breeds && !selectedBreed) {
        messageEl.textContent = randomMessage;
        return;
    }

    generatePortrait();
}

/**
 * Generates and displays the final psychological portrait.
 */
function generatePortrait() {
    const selectedPet = petSelect.value;
    const selectedBreed = breedSelect.value;

    portraitOutput.classList.remove('visible');
    petJoke.textContent = '';

    let profileData = PET_PROFILES[selectedPet];
    let portraitTitle = profileData.name;

    if (
        selectedBreed &&
        profileData.breeds &&
        profileData.breeds[selectedBreed]
    ) {
        profileData = {
            ...profileData,
            ...profileData.breeds[selectedBreed]
        };

        portraitTitle =
            selectedBreed +
            ' Owner (' +
            PET_PROFILES[selectedPet].name.split('(')[1];
    }

    const petIcon = PET_ICONS[selectedPet] || '🌟';

    let html = `<button class="close-btn" id="close-profile-btn">✖</button>
    <h3>${petIcon} Your Inner Pet-sonality Profile:<br>${portraitTitle}</h3>`;
    html += `<div class="portrait-section"><strong>Main Trait:</strong> ${profileData.main_trait}</div>`;
    html += `<div class="portrait-section"><strong>Greatest Strength:</strong> ${profileData.strength}</div>`;
    html += `<div class="portrait-section"><strong>Biggest Weakness:</strong> ${profileData.weakness}</div>`;
    html += `<div class="portrait-section"><strong>Work Style:</strong> ${profileData.work_style}</div>`;

    if (profileData.friendship_style) {
        html += `<div class="portrait-section"><strong>Friendship Style:</strong> ${profileData.friendship_style}</div>`;
    }

    html += `<div class="portrait-section"><strong>Romance Style:</strong> ${profileData.romance_style}</div>`;
    html += `<div class="portrait-section" style="color: var(--primary-color);"><strong>Worldview / Mental Tendency:</strong> ${profileData.mental_tendency}</div>`;

    if (profileData.gender_insights && profileData.gender_insights !== 'N/A') {
        html += `<div class="portrait-section" style="font-style: italic; font-size: 0.9em; border-top: 1px solid #eee; padding-top: 5px;">
            <strong>Gender Research Insight:</strong> ${profileData.gender_insights}
        </div>`;
    }

    html += `<div class="portrait-section" style="color: var(--primary-color);"><strong>Best Friend:</strong> ${profileData.best_friend}</div>`;
    html += `<div class="portrait-section" style="color: var(--primary-color);"><strong>Worst Friend:</strong> ${profileData.worst_enemy}</div>`;
    html += `<div class="portrait-section" style="color: var(--primary-color);"><strong>Best Romantic Partner:</strong> ${profileData.best_romantic_partner}</div>`;
    html += `<div class="portrait-section" style="color: var(--primary-color);"><strong>Possible Mental Disorders:</strong> ${profileData.possible_mental_disorders.join(', ')}</div>`;

    petJoke.textContent =
        JOKES[Math.floor(Math.random() * JOKES.length)];

    portraitOutput.innerHTML = html;

    setTimeout(() => {
        portraitOutput.classList.add('visible');
    }, 50);
}

function resetProfileView() {
    portraitOutput.innerHTML = '';
    portraitOutput.classList.remove('visible');
    petJoke.textContent = '';
}

// --- Initialization ---
populatePetTypes();
handlePetSelection();

// --- Event Listeners ---
petSelect.addEventListener('change', handlePetSelection);
breedSelect.addEventListener('change', handleBreedSelection);
generateButton.addEventListener('click', handleGenerateClick);

// --- Quiz Logic ---
const quizStartBtn = document.getElementById('start-quiz-btn');
const quizHideBtn = document.getElementById('close-quiz')
const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');
const revealPetBtn = document.getElementById('reveal-pet-btn');

const PETS = {
    Cat: "🐱",
    Dog: "🐶",
    Bird: "🐦",
    Reptile: "🦎",
    Horse: "🐎",
    Fish: "🐟",
    Hamster: "🐹",
    Rabbit: "🐰"
};

// Reveal quiz
quizStartBtn.addEventListener('click', () => {
    quizForm.classList.remove('hidden');
    quizResult.innerHTML = '';
});

// Hide quiz
quizHideBtn.addEventListener('click', () => {
    quizForm.classList.add('hidden');
})


// Calculate results
revealPetBtn.addEventListener('click', () => {
    const scores = {};
    Object.keys(PETS).forEach(p => scores[p] = 0);

    document.querySelectorAll('#quiz-form input[type="checkbox"]:checked')
        .forEach(box => {
            scores[box.dataset.pet]++;
        });

    renderQuizResult(scores);
});

// Render results
function renderQuizResult(scores) {
    quizResult.innerHTML = '';

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const best = sorted[0];
    const worst = sorted[sorted.length - 1];

    let html = `<button class="close-btn" id="close-quiz-btn">✖</button>
    <h3>Your Ideal Pet: ${PETS[best[0]]} ${best[0]}</h3>
                <p><strong>Why?</strong> Your traits align strongly with this pet’s needs.</p>`;

    // Score bars
    sorted.forEach(([pet, score]) => {
        html += `
            <div>${PETS[pet]} ${pet}</div>
            <div class="score-bar">
                <div class="score-fill" style="width:${score * 20}%"></div>
            </div>`;
    });

    html += `<p style="margin-top:10px;color:#c0392b;">
                ⚠ Worst Match: ${PETS[worst[0]]} ${worst[0]}
             </p>`;

    quizResult.innerHTML = html;
}

function resetQuizView() {
    quizResult.innerHTML = '';
}

// ================= PET THERAPY LOGIC =================

// --- Therapy DOM Elements ---
const startTherapyBtn = document.getElementById('start-therapy-btn');
const closeTherapyBtn = document.getElementById('close-therapy');
const therapyForm = document.getElementById('therapy-form');
const therapyGenerateBtn = document.getElementById('therapy-generate-btn');
const therapyResult = document.getElementById('therapy-result');

// --- Therapy Pets ---
const THERAPY_PETS = {
    Dog: "🐶",
    Cat: "🐱",
    Horse: "🐎",
    Bird: "🐦",
    Rabbit: "🐰",
    Fish: "🐟"
};

// --- Condition Evidence Map ---
const THERAPY_CONDITIONS = {
    depression: { weights: { Dog: 3, Cat: 3, Rabbit: 1 } },
    anxiety: { weights: { Dog: 3, Cat: 2, Rabbit: 2, Fish: 1 } },
    loneliness: { weights: { Dog: 3, Cat: 2, Bird: 2 } },
    autism: { weights: { Dog: 3, Horse: 2 } },
    cerebral_palsy: { weights: { Horse: 4 } },
    stroke: { weights: { Horse: 4 } },
    ms: { weights: { Horse: 3 } }
};

// --- Core Functions ---

/**
 * Starts therapy quiz.
 */

startTherapyBtn.addEventListener('click', () => {
    therapyForm.classList.remove('hidden');
    therapyResult.innerHTML = '';
});

closeTherapyBtn.addEventListener('click', () => {
    therapyForm.classList.add('hidden');
});

/**
 * Calculates therapy scores.
 */
function calculateTherapyScores() {
    const scores = {};
    Object.keys(THERAPY_PETS).forEach(p => scores[p] = 0);

    const selected =
        therapyForm.querySelectorAll('input[type="checkbox"]:checked');

    if (selected.length === 0) {
        therapyResult.innerHTML =
            '<p class="message">Please select at least one condition.</p>';
        return;
    }

    selected.forEach(box => {
        const condition = THERAPY_CONDITIONS[box.dataset.condition];
        if (!condition) return;

        for (const pet in condition.weights) {
            scores[pet] += condition.weights[pet];
        }
    });

    renderTherapyResult(scores);
}

/**
 * Renders therapy output.
 */
function renderTherapyResult(scores) {
    therapyResult.innerHTML = '';

    const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);

    const best = sorted[0];

    let html = `
        <button class="close-btn" id="close-therapy-btn">✖</button>
        <h3>Recommended Therapy Companion</h3>

        <p style="font-size:1.1em;">
            <strong>${THERAPY_PETS[best[0]]} ${best[0]}</strong>
        </p>

        <div class="portrait-section">
            <strong>Mental vs Physical Benefit:</strong>
            ${best[0] === 'Horse'
                ? 'Primarily physical & neurological support'
                : 'Primarily mental & emotional support'}
        </div>

        <div class="portrait-section" style="color:#c0392b;">
            <strong>Not recommended if:</strong>
            You have severe allergies, animal phobias, or strong aversion.
        </div>

        <h4>Relative Evidence Strength</h4>
    `;

    sorted.forEach(([pet, score]) => {
        html += `
            <div>${THERAPY_PETS[pet]} ${pet}</div>
            <div class="score-bar">
                <div class="score-fill" style="width:${score * 12}%"></div>
            </div>
        `;
    });

    therapyResult.innerHTML = html;
}

/**
 * Resets therapy section.
 */
function resetTherapyView() {
    therapyForm.reset();
    therapyForm.classList.add('hidden');
    therapyResult.innerHTML = '';
}

// --- Therapy Event Listeners ---
startTherapyBtn.addEventListener('click', startTherapyBtn);
therapyGenerateBtn.addEventListener('click', calculateTherapyScores);

document.addEventListener('click', (e) => {
    if (e.target.id === 'close-therapy-btn') {
        resetTherapyView();
    }
});


document.addEventListener('click', (e) => {

    if (e.target.id === 'close-profile-btn') {
        resetProfileView();
        petSelect.value = '';
        breedSelect.style.display = 'none';
        generateButton.disabled = true;
    }

    if (e.target.id === 'close-quiz-btn') {
        resetQuizView();
        quizForm.classList.add('hidden');
    }

});

