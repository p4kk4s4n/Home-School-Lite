import { Course } from '../types'

// =========================================================================
// REUSABLE PLAIN-LANGUAGE QUESTION BANKS (8+ ITEMS PER PRINCIPLE)
// =========================================================================

const SCI_PHOTOSYNTHESIS_BANK = [
  {
    id: 'g5-sci-photo-1',
    type: 'mc' as const,
    prompt: 'What process do green plants use to make their own food?',
    choices: ['Photosynthesis', 'Erosion', 'Evaporation', 'Hibernation'],
    answer: 'Photosynthesis',
    explanation:
      'Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to make sugar.',
  },
  {
    id: 'g5-sci-photo-2',
    type: 'mc' as const,
    prompt: 'Where do plants get the majority of matter to grow?',
    choices: ['Air and water', 'Rocks and sand', 'Soil minerals only', 'Moonlight'],
    answer: 'Air and water',
    explanation:
      'Plants build their tissues mostly from carbon dioxide in air and water, not soil.',
  },
  {
    id: 'g5-sci-photo-3',
    type: 'mc' as const,
    prompt: 'Which gas do plants take in from the air during photosynthesis?',
    choices: ['Carbon dioxide', 'Oxygen', 'Helium', 'Argon'],
    answer: 'Carbon dioxide',
    explanation:
      'Leaves take in carbon dioxide gas through tiny pores to make plant sugars.',
  },
  {
    id: 'g5-sci-photo-4',
    type: 'mc' as const,
    prompt: 'Which gas do plants release into the air during photosynthesis?',
    choices: ['Oxygen', 'Carbon dioxide', 'Methane', 'Hydrogen'],
    answer: 'Oxygen',
    explanation:
      'Plants release oxygen gas as a product of photosynthesis, which animals need to breathe.',
  },
  {
    id: 'g5-sci-photo-5',
    type: 'mc' as const,
    prompt: 'What provides the energy plants need to perform photosynthesis?',
    choices: ['Sunlight', 'Wind', 'Gravity', 'Ocean waves'],
    answer: 'Sunlight',
    explanation:
      'Chlorophyll in green leaves captures energy from sunlight to power photosynthesis.',
  },
  {
    id: 'g5-sci-photo-6',
    type: 'mc' as const,
    prompt: 'What role do green plants play in an ecosystem food web?',
    choices: ['Producers', 'Decomposers', 'Carnivores', 'Scavengers'],
    answer: 'Producers',
    explanation:
      'Producers are living things like plants that make their own food using sunlight.',
  },
  {
    id: 'g5-sci-photo-7',
    type: 'mc' as const,
    prompt: 'What are the tiny openings on leaves that exchange gases?',
    choices: ['Stomata', 'Roots', 'Seeds', 'Thorns'],
    answer: 'Stomata',
    explanation:
      'Stomata are microscopic pores on leaves that let carbon dioxide in and oxygen out.',
  },
  {
    id: 'g5-sci-photo-8',
    type: 'mc' as const,
    prompt: 'What happens to a green plant kept in total darkness?',
    choices: [
      'It cannot make food by photosynthesis',
      'It grows twice as fast',
      'It turns into a mushroom',
      'It makes extra oxygen',
    ],
    answer: 'It cannot make food by photosynthesis',
    explanation:
      'Without light energy, a plant cannot perform photosynthesis to produce sugar.',
  },
]

const SCI_FOODWEB_BANK = [
  {
    id: 'g5-sci-web-1',
    type: 'mc' as const,
    prompt: 'What do arrows in a food chain show?',
    choices: [
      'The flow of energy and matter',
      'Which animal runs faster',
      'Where rivers flow',
      'How tall plants grow',
    ],
    answer: 'The flow of energy and matter',
    explanation:
      'An arrow points from the organism being eaten to the organism that gets its energy.',
  },
  {
    id: 'g5-sci-web-2',
    type: 'mc' as const,
    prompt: 'What do decomposers like fungi and bacteria do in an ecosystem?',
    choices: [
      'Break down dead matter into nutrients',
      'Make food from sunlight',
      'Hunt large predators',
      'Freeze water into ice',
    ],
    answer: 'Break down dead matter into nutrients',
    explanation:
      'Decomposers recycle dead plants and animals back into soil nutrients that plants can use.',
  },
  {
    id: 'g5-sci-web-3',
    type: 'mc' as const,
    prompt: 'What is an animal that eats only plants called?',
    choices: ['Herbivore', 'Carnivore', 'Producer', 'Decomposer'],
    answer: 'Herbivore',
    explanation:
      'A herbivore is a consumer, such as a rabbit or deer, that eats only plants.',
  },
  {
    id: 'g5-sci-web-4',
    type: 'mc' as const,
    prompt: 'What is an animal that eats both plants and animals called?',
    choices: ['Omnivore', 'Herbivore', 'Producer', 'Mineral'],
    answer: 'Omnivore',
    explanation:
      'An omnivore, such as a bear or raccoon, eats both plant and animal matter.',
  },
  {
    id: 'g5-sci-web-5',
    type: 'mc' as const,
    prompt: 'Where does almost all energy in Earth’s food webs begin?',
    choices: ['The Sun', 'The Moon', 'Ocean tides', 'Rocks'],
    answer: 'The Sun',
    explanation:
      'Sunlight provides the original energy that producers capture and pass to consumers.',
  },
  {
    id: 'g5-sci-web-6',
    type: 'mc' as const,
    prompt: 'In Grass → Rabbit → Hawk, what is the rabbit?',
    choices: ['Primary consumer', 'Producer', 'Decomposer', 'Apex predator'],
    answer: 'Primary consumer',
    explanation:
      'A primary consumer is a herbivore that eats producers like grass.',
  },
  {
    id: 'g5-sci-web-7',
    type: 'mc' as const,
    prompt: 'Which organism is an example of a decomposer?',
    choices: ['Mushroom', 'Oak tree', 'Red-tailed hawk', 'Grasshopper'],
    answer: 'Mushroom',
    explanation:
      'Mushrooms are fungi that act as decomposers by breaking down dead wood and leaves.',
  },
  {
    id: 'g5-sci-web-8',
    type: 'mc' as const,
    prompt: 'What happens if all decomposers disappear from a forest?',
    choices: [
      'Dead waste piles up and soil loses nutrients',
      'Trees get extra fertilizer',
      'Sunlight stops shining',
      'Herbivores turn into plants',
    ],
    answer: 'Dead waste piles up and soil loses nutrients',
    explanation:
      'Without decomposers, nutrients stay locked in dead matter instead of returning to the soil.',
  },
]

const SCI_FORCE_LIGHT_SOUND_BANK = [
  {
    id: 'g5-sci-phys-1',
    type: 'mc' as const,
    prompt: 'What happens when a stronger force pushes the same object?',
    choices: [
      'Its speed changes more quickly',
      'Its mass disappears',
      'It stops moving forever',
      'Gravity turns off',
    ],
    answer: 'Its speed changes more quickly',
    explanation:
      'A greater net force causes a larger change in an object’s motion or speed.',
  },
  {
    id: 'g5-sci-phys-2',
    type: 'mc' as const,
    prompt: 'Which cart speeds up more when pushed with the same force?',
    choices: [
      'The lighter cart',
      'The heavier cart',
      'Both speed up equally',
      'Neither cart moves',
    ],
    answer: 'The lighter cart',
    explanation:
      'Objects with less mass experience a greater change in motion from the same force.',
  },
  {
    id: 'g5-sci-phys-3',
    type: 'mc' as const,
    prompt: 'How does light travel through air or empty space?',
    choices: [
      'In straight lines until it hits something',
      'In zig-zag loops',
      'Only through metal wires',
      'Backward into the source',
    ],
    answer: 'In straight lines until it hits something',
    explanation:
      'Light rays travel in straight lines outward from a source until absorbed, reflected, or refracted.',
  },
  {
    id: 'g5-sci-phys-4',
    type: 'mc' as const,
    prompt: 'What is the bouncing of light off a smooth mirror called?',
    choices: ['Reflection', 'Refraction', 'Absorption', 'Friction'],
    answer: 'Reflection',
    explanation:
      'Reflection happens when light rays bounce off a surface such as a mirror.',
  },
  {
    id: 'g5-sci-phys-5',
    type: 'mc' as const,
    prompt: 'What is the bending of light as it passes from air into water?',
    choices: ['Refraction', 'Reflection', 'Gravity', 'Magnetism'],
    answer: 'Refraction',
    explanation:
      'Refraction is the bending of light when it changes speed moving into a new material.',
  },
  {
    id: 'g5-sci-phys-6',
    type: 'mc' as const,
    prompt: 'What causes all sounds to be produced?',
    choices: [
      'Vibrating matter',
      'Complete silence',
      'Cold temperatures',
      'Shadows',
    ],
    answer: 'Vibrating matter',
    explanation:
      'Sound is produced when an object vibrates back and forth, creating waves in the air.',
  },
  {
    id: 'g5-sci-phys-7',
    type: 'mc' as const,
    prompt: 'How does a faster vibration change the pitch of a sound?',
    choices: [
      'It makes the pitch higher',
      'It makes the pitch lower',
      'It turns sound into light',
      'It stops the sound',
    ],
    answer: 'It makes the pitch higher',
    explanation:
      'Pitch is how high or low a sound is; faster vibrations (higher frequency) make higher pitch.',
  },
  {
    id: 'g5-sci-phys-8',
    type: 'mc' as const,
    prompt: 'What force opposes motion when two surfaces rub together?',
    choices: ['Friction', 'Refraction', 'Photosynthesis', 'Condensation'],
    answer: 'Friction',
    explanation:
      'Friction is a contact force between rubbing surfaces that slows moving objects down.',
  },
]

const SCI_SPHERES_BANK = [
  {
    id: 'g5-sci-sph-1',
    type: 'mc' as const,
    prompt: 'Which Earth sphere includes all rocks, soil, and mountains?',
    choices: ['Geosphere', 'Hydrosphere', 'Atmosphere', 'Biosphere'],
    answer: 'Geosphere',
    explanation:
      'The geosphere consists of Earth’s solid rock, soil, landforms, and interior layers.',
  },
  {
    id: 'g5-sci-sph-2',
    type: 'mc' as const,
    prompt: 'Which Earth sphere contains all oceans, rivers, lakes, and glaciers?',
    choices: ['Hydrosphere', 'Geosphere', 'Atmosphere', 'Biosphere'],
    answer: 'Hydrosphere',
    explanation:
      'The hydrosphere includes all liquid water, ice, and water vapor on Earth.',
  },
  {
    id: 'g5-sci-sph-3',
    type: 'mc' as const,
    prompt: 'Which Earth sphere is the blanket of gases surrounding the planet?',
    choices: ['Atmosphere', 'Biosphere', 'Geosphere', 'Hydrosphere'],
    answer: 'Atmosphere',
    explanation:
      'The atmosphere is the layer of air (mostly nitrogen and oxygen) around Earth.',
  },
  {
    id: 'g5-sci-sph-4',
    type: 'mc' as const,
    prompt: 'Which Earth sphere includes all living plants, animals, and microbes?',
    choices: ['Biosphere', 'Geosphere', 'Atmosphere', 'Hydrosphere'],
    answer: 'Biosphere',
    explanation:
      'The biosphere is made up of all living things on land, in water, and in air.',
  },
  {
    id: 'g5-sci-sph-5',
    type: 'mc' as const,
    prompt: 'Where is most of Earth’s water found?',
    choices: [
      'Saltwater in the oceans',
      'Freshwater in rivers',
      'Clouds in the sky',
      'Puddles on land',
    ],
    answer: 'Saltwater in the oceans',
    explanation:
      'About 97 percent of Earth’s water is saltwater stored in the oceans.',
  },
  {
    id: 'g5-sci-sph-6',
    type: 'mc' as const,
    prompt: 'Where is the largest amount of Earth’s freshwater stored?',
    choices: [
      'Frozen in glaciers and ice caps',
      'In swimming pools',
      'In tree leaves',
      'In desert sand',
    ],
    answer: 'Frozen in glaciers and ice caps',
    explanation:
      'Most of Earth’s freshwater is frozen solid in glaciers and polar ice caps.',
  },
  {
    id: 'g5-sci-sph-7',
    type: 'mc' as const,
    prompt: 'When a river carves a canyon in rock, which two spheres interact?',
    choices: [
      'Hydrosphere and geosphere',
      'Biosphere and moon',
      'Atmosphere and sun',
      'Geosphere and stars',
    ],
    answer: 'Hydrosphere and geosphere',
    explanation:
      'Moving water (hydrosphere) erodes solid rock (geosphere) to carve a canyon.',
  },
  {
    id: 'g5-sci-sph-8',
    type: 'mc' as const,
    prompt: 'Why is most of Earth’s water unavailable for humans to drink?',
    choices: [
      'Most water is salty or frozen',
      'Earth has almost no water',
      'Oceans are made of freshwater',
      'Rain never falls on land',
    ],
    answer: 'Most water is salty or frozen',
    explanation:
      'About 97% of water is salty ocean water, and most freshwater is locked in ice.',
  },
]

const SCI_SPACE_BANK = [
  {
    id: 'g5-sci-spc-1',
    type: 'mc' as const,
    prompt: 'What causes the daily cycle of day and night on Earth?',
    choices: [
      'Earth’s rotation on its axis',
      'Earth’s yearly orbit around the Sun',
      'The Moon blocking the Sun daily',
      'Clouds covering the sky',
    ],
    answer: 'Earth’s rotation on its axis',
    explanation:
      'Earth spins (rotates) once every 24 hours, causing day on the side facing the Sun.',
  },
  {
    id: 'g5-sci-spc-2',
    type: 'mc' as const,
    prompt: 'How long does it take Earth to complete one orbit around the Sun?',
    choices: ['About 365 days (1 year)', '24 hours', '30 days', '10 years'],
    answer: 'About 365 days (1 year)',
    explanation:
      'One full revolution (orbit) of Earth around the Sun takes one year, or about 365 days.',
  },
  {
    id: 'g5-sci-spc-3',
    type: 'mc' as const,
    prompt: 'Why does the Sun look brighter and larger than other stars?',
    choices: [
      'It is much closer to Earth',
      'It is the biggest star in space',
      'Other stars do not make light',
      'It orbits inside Earth’s atmosphere',
    ],
    answer: 'It is much closer to Earth',
    explanation:
      'The Sun is an average-sized star, but it looks brightest because it is closest to Earth.',
  },
  {
    id: 'g5-sci-spc-4',
    type: 'mc' as const,
    prompt: 'In what direction does Earth’s gravity pull objects near the surface?',
    choices: [
      'Downward toward Earth’s center',
      'Upward into outer space',
      'Sideways toward the east',
      'Toward the North Pole only',
    ],
    answer: 'Downward toward Earth’s center',
    explanation:
      'Gravity pulls all objects inward toward the center of the planet.',
  },
  {
    id: 'g5-sci-spc-5',
    type: 'mc' as const,
    prompt: 'When is a shadow on the ground shortest during a sunny day?',
    choices: ['Around noon', 'At sunrise', 'At sunset', 'At midnight'],
    answer: 'Around noon',
    explanation:
      'At noon the Sun is highest in the sky, casting the shortest shadows.',
  },
  {
    id: 'g5-sci-spc-6',
    type: 'mc' as const,
    prompt: 'Why do we see different constellations in winter than in summer?',
    choices: [
      'Earth orbits to different sides of the Sun',
      'Stars swim across the ocean',
      'The Sun turns off in winter',
      'Earth stops rotating in summer',
    ],
    answer: 'Earth orbits to different sides of the Sun',
    explanation:
      'As Earth revolves around the Sun each year, our night sky faces different parts of space.',
  },
  {
    id: 'g5-sci-spc-7',
    type: 'mc' as const,
    prompt: 'Which object is at the center of our solar system?',
    choices: ['The Sun', 'The Moon', 'Earth', 'Mars'],
    answer: 'The Sun',
    explanation:
      'All eight planets, including Earth, orbit the Sun at the center of our solar system.',
  },
  {
    id: 'g5-sci-spc-8',
    type: 'mc' as const,
    prompt: 'Which way does a shadow point when the morning Sun is east?',
    choices: ['West', 'East', 'Straight up', 'Nowhere'],
    answer: 'West',
    explanation:
      'Shadows always point away from the light source, so a morning Sun casts shadows westward.',
  },
]

const ELA_THEME_EVIDENCE_BANK = [
  {
    id: 'g5-ela-thm-1',
    type: 'mc' as const,
    passage:
      'Maya practiced her violin for twenty minutes every evening, even when the notes sounded squeaky. By the spring concert, she played her solo smoothly.',
    prompt: 'What is the theme of this passage?',
    choices: [
      'Steady practice leads to improvement',
      'Violins are too hard to play',
      'Concerts only happen in spring',
      'Talent needs no effort',
    ],
    answer: 'Steady practice leads to improvement',
    explanation:
      'Theme is the life lesson of a story; Maya’s daily effort helped her succeed.',
  },
  {
    id: 'g5-ela-thm-2',
    type: 'mc' as const,
    passage:
      'Leo noticed the new student sitting alone at lunch. Leo walked over, smiled, and asked, "Want to join our table?"',
    prompt: 'Which trait best describes Leo based on the text?',
    choices: ['Welcoming', 'Selfish', 'Forgetful', 'Timid'],
    answer: 'Welcoming',
    explanation:
      'Text evidence shows Leo kindly invited a lonely student to sit with him.',
  },
  {
    id: 'g5-ela-thm-3',
    type: 'mc' as const,
    passage:
      'The heavy rain flooded the trail. Eli checked his map and led his sister along the high ridge so their boots stayed dry.',
    prompt: 'Which detail proves Eli is a careful problem solver?',
    choices: [
      'He checked his map and took high ground',
      'It rained heavily on the trail',
      'He wore boots outside',
      'He has a sister',
    ],
    answer: 'He checked his map and took high ground',
    explanation:
      'Strong text evidence directly supports the claim with specific actions from the passage.',
  },
  {
    id: 'g5-ela-thm-4',
    type: 'mc' as const,
    prompt: 'What is an inference when reading a story?',
    choices: [
      'A conclusion based on text clues and experience',
      'The title printed on the cover',
      'A list of chapter numbers',
      'A random guess without clues',
    ],
    answer: 'A conclusion based on text clues and experience',
    explanation:
      'An inference combines details in the text with what you already know to figure out unstated ideas.',
  },
  {
    id: 'g5-ela-thm-5',
    type: 'mc' as const,
    passage:
      'Cara wanted to ride the tall roller coaster, while her brother Ben preferred the calm ferris wheel. They agreed to ride one together first.',
    prompt: 'How do Cara and Ben differ in this story?',
    choices: [
      'Cara likes fast thrills; Ben likes calm rides',
      'Neither likes amusement parks',
      'Both are afraid of heights',
      'Ben loves fast roller coasters',
    ],
    answer: 'Cara likes fast thrills; Ben likes calm rides',
    explanation:
      'Comparing characters shows how their feelings or choices are alike and different.',
  },
  {
    id: 'g5-ela-thm-6',
    type: 'mc' as const,
    prompt: 'Why do readers use quotation marks when citing text evidence?',
    choices: [
      'To show the exact words from the author',
      'To make up new facts',
      'To change the story’s ending',
      'To skip reading the passage',
    ],
    answer: 'To show the exact words from the author',
    explanation:
      'Quotation marks enclose a direct quote copied word-for-word from the text.',
  },
  {
    id: 'g5-ela-thm-7',
    type: 'mc' as const,
    passage:
      'When the team lost the final game, Captain Sam shook every player’s hand and said, "We played hard and learned a lot today."',
    prompt: 'What theme does Sam’s response show?',
    choices: [
      'Good sportsmanship matters win or lose',
      'Winning is the only thing that counts',
      'Never play team sports',
      'Blame others for losing',
    ],
    answer: 'Good sportsmanship matters win or lose',
    explanation:
      'Sam’s encouraging words after a loss show the lesson of good sportsmanship.',
  },
  {
    id: 'g5-ela-thm-8',
    type: 'mc' as const,
    passage:
      'Mira stared at her empty bird feeder. Tiny footprints in the snow led straight to a plump squirrel under the pine tree.',
    prompt: 'What can the reader infer happened to the birdseed?',
    choices: [
      'The squirrel ate the birdseed',
      'The wind blew the feeder away',
      'Mira forgot to buy a feeder',
      'Snow melted the seeds',
    ],
    answer: 'The squirrel ate the birdseed',
    explanation:
      'The empty feeder and footprints leading to a plump squirrel are clues that support this inference.',
  },
]

const ELA_MAIN_IDEA_STRUCTURE_BANK = [
  {
    id: 'g5-ela-inf-1',
    type: 'mc' as const,
    passage:
      'Honeybees pollinate apple, almond, and berry crops. They also make honey and beeswax. Because of their work, farms grow far more food.',
    prompt: 'What is the main idea of this passage?',
    choices: [
      'Honeybees are helpful insects that support food crops',
      'Almonds grow on trees',
      'Beeswax is yellow',
      'Farms only grow apples',
    ],
    answer: 'Honeybees are helpful insects that support food crops',
    explanation:
      'The main idea is the central point that all supporting details in the paragraph explain.',
  },
  {
    id: 'g5-ela-inf-2',
    type: 'mc' as const,
    passage:
      'Because heavy snow blocked the mountain pass, road crews closed the highway for six hours until snowplows cleared the lanes.',
    prompt: 'Which text structure does this passage use?',
    choices: [
      'Cause and effect',
      'Chronological biography',
      'Poetry stanza',
      'Fairy tale dialogue',
    ],
    answer: 'Cause and effect',
    explanation:
      'Cause and effect explains why something happened (heavy snow) and what resulted (road closure).',
  },
  {
    id: 'g5-ela-inf-3',
    type: 'mc' as const,
    passage:
      'Both frogs and toads are amphibians. However, frogs have smooth, wet skin and long jumping legs, while toads have dry, bumpy skin.',
    prompt: 'How is the information in this passage organized?',
    choices: [
      'Compare and contrast',
      'Problem and solution',
      'Step-by-step recipe',
      'Alphabetical list',
    ],
    answer: 'Compare and contrast',
    explanation:
      'Compare and contrast shows how two topics (frogs and toads) are alike and different.',
  },
  {
    id: 'g5-ela-inf-4',
    type: 'mc' as const,
    passage:
      'Plastic bottles litter city parks. To solve this problem, the town installed recycling bins and refillable water stations near every playground.',
    prompt: 'Which text structure does the author use here?',
    choices: [
      'Problem and solution',
      'Compare and contrast',
      'First-person fiction',
      'Rhyme scheme',
    ],
    answer: 'Problem and solution',
    explanation:
      'Problem and solution states an issue (litter) and explains actions taken to fix it.',
  },
  {
    id: 'g5-ela-inf-5',
    type: 'mc' as const,
    passage:
      'First, gather two slices of bread and peanut butter. Next, spread peanut butter on one slice. Finally, press the slices together.',
    prompt: 'Which text structure is used in this passage?',
    choices: ['Sequence (chronological order)', 'Compare and contrast', 'Cause and effect', 'Debate'],
    answer: 'Sequence (chronological order)',
    explanation:
      'Signal words like "First," "Next," and "Finally" show steps in sequence order.',
  },
  {
    id: 'g5-ela-inf-6',
    type: 'mc' as const,
    passage:
      'Wearing a bike helmet protects your head. Studies show helmets reduce serious head injuries by more than half during falls.',
    prompt: 'What evidence supports the author’s claim about bike helmets?',
    choices: [
      'Studies show helmets cut head injuries in half',
      'Bikes have two wheels',
      'Helmets come in bright colors',
      'Parks have paved bike paths',
    ],
    answer: 'Studies show helmets cut head injuries in half',
    explanation:
      'Authors use facts and study results as evidence to prove their claim is true.',
  },
  {
    id: 'g5-ela-inf-7',
    type: 'mc' as const,
    prompt: 'Which signal words often show a compare-and-contrast text structure?',
    choices: [
      'Both, similarly, however, on the other hand',
      'Once upon a time',
      'First, second, third, last',
      'Dear Sir or Madam',
    ],
    answer: 'Both, similarly, however, on the other hand',
    explanation:
      'Words like "both" and "however" signal similarities and differences between two subjects.',
  },
  {
    id: 'g5-ela-inf-8',
    type: 'mc' as const,
    prompt: 'What should a good summary of an informational article include?',
    choices: [
      'The main idea and key supporting details',
      'Every single word from the article',
      'Made-up characters',
      'Only the last word of the page',
    ],
    answer: 'The main idea and key supporting details',
    explanation:
      'A summary briefly states the main idea and the most important details in your own words.',
  },
]

const ELA_FIGURATIVE_BANK = [
  {
    id: 'g5-ela-fig-1',
    type: 'mc' as const,
    prompt: 'What type of figurative language is "The lake was a shining mirror"?',
    choices: ['Metaphor', 'Simile', 'Alliteration', 'Idiom'],
    answer: 'Metaphor',
    explanation:
      'A metaphor compares two things directly without using "like" or "as."',
  },
  {
    id: 'g5-ela-fig-2',
    type: 'mc' as const,
    prompt: 'What type of figurative language is "Her hands were as cold as ice"?',
    choices: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'],
    answer: 'Simile',
    explanation:
      'A simile compares two things using the word "like" or "as."',
  },
  {
    id: 'g5-ela-fig-3',
    type: 'mc' as const,
    prompt: 'What does the idiom "spill the beans" mean?',
    choices: [
      'Tell a secret by mistake',
      'Cook dinner on the stove',
      'Plant a vegetable garden',
      'Clean the kitchen floor',
    ],
    answer: 'Tell a secret by mistake',
    explanation:
      'An idiom is an expression whose figurative meaning differs from the literal words.',
  },
  {
    id: 'g5-ela-fig-4',
    type: 'mc' as const,
    prompt: 'Which sentence uses personification?',
    choices: [
      'The autumn wind whispered through the trees.',
      'The wind blew at ten miles per hour.',
      'Leaves fell on the grass.',
      'The tree is forty feet tall.',
    ],
    answer: 'The autumn wind whispered through the trees.',
    explanation:
      'Personification gives human actions or feelings (like whispering) to non-human things.',
  },
  {
    id: 'g5-ela-fig-5',
    type: 'mc' as const,
    prompt: 'What does the adage "Actions speak louder than words" mean?',
    choices: [
      'Your actions matter more than your words',
      'Shouting is the best way to talk',
      'Never speak in a library',
      'Words are louder than drums',
    ],
    answer: 'Your actions matter more than your words',
    explanation:
      'An adage or proverb is a traditional saying that shares a common truth or piece of advice.',
  },
  {
    id: 'g5-ela-fig-6',
    type: 'mc' as const,
    prompt: 'What does the idiom "under the weather" mean?',
    choices: [
      'Feeling slightly sick or tired',
      'Standing under an umbrella',
      'Watching a weather forecast',
      'Flying above the clouds',
    ],
    answer: 'Feeling slightly sick or tired',
    explanation:
      'The idiom "under the weather" means feeling unwell.',
  },
  {
    id: 'g5-ela-fig-7',
    type: 'mc' as const,
    prompt: 'What does the metaphor "The classroom was a beehive of activity" mean?',
    choices: [
      'Students were busy working everywhere',
      'Bees lived inside the desks',
      'The room was completely empty',
      'Everyone was asleep',
    ],
    answer: 'Students were busy working everywhere',
    explanation:
      'Comparing the classroom to a beehive shows that everyone was actively working.',
  },
  {
    id: 'g5-ela-fig-8',
    type: 'mc' as const,
    prompt: 'Which sentence contains a simile?',
    choices: [
      'The kitten crept like a shadow across the rug.',
      'The kitten is a tiny tiger.',
      'The kitten purred softly.',
      'The rug was soft and warm.',
    ],
    answer: 'The kitten crept like a shadow across the rug.',
    explanation:
      'Using "like" to compare the kitten to a shadow makes this a simile.',
  },
]

const ELA_ROOTS_PREFIXES_BANK = [
  {
    id: 'g5-ela-rt-1',
    type: 'mc' as const,
    prompt: 'What does the Greek root "tele" (as in telescope) mean?',
    choices: ['Far or distant', 'Tiny', 'Underground', 'Cold'],
    answer: 'Far or distant',
    explanation:
      'The Greek root "tele" means far away, so a telescope helps you see distant stars.',
  },
  {
    id: 'g5-ela-rt-2',
    type: 'mc' as const,
    prompt: 'What does the Latin root "port" (as in transport) mean?',
    choices: ['To carry', 'To write', 'To sleep', 'To freeze'],
    answer: 'To carry',
    explanation:
      'The Latin root "port" means to carry; "transport" means to carry across from one place to another.',
  },
  {
    id: 'g5-ela-rt-3',
    type: 'mc' as const,
    prompt: 'What does the Greek root "photo" (as in photograph) mean?',
    choices: ['Light', 'Sound', 'Water', 'Stone'],
    answer: 'Light',
    explanation:
      'The Greek root "photo" means light, used in words like photograph and photosynthesis.',
  },
  {
    id: 'g5-ela-rt-4',
    type: 'mc' as const,
    prompt: 'What does the prefix "pre-" mean in the word "preview"?',
    choices: ['Before', 'After', 'Never', 'Against'],
    answer: 'Before',
    explanation:
      'The prefix "pre-" means before, so "preview" means to view beforehand.',
  },
  {
    id: 'g5-ela-rt-5',
    type: 'mc' as const,
    prompt: 'What does the suffix "-less" mean in the word "fearless"?',
    choices: ['Without', 'Full of', 'Able to', 'One who'],
    answer: 'Without',
    explanation:
      'The suffix "-less" means without, so "fearless" means without fear.',
  },
  {
    id: 'g5-ela-rt-6',
    type: 'mc' as const,
    prompt: 'What does the Greek root "bio" (as in biology) mean?',
    choices: ['Life', 'Rock', 'Fire', 'Number'],
    answer: 'Life',
    explanation:
      'The Greek root "bio" means life; biology is the study of living things.',
  },
  {
    id: 'g5-ela-rt-7',
    type: 'mc' as const,
    prompt: 'What does the Latin root "spect" (as in inspect) mean?',
    choices: ['To look or see', 'To run fast', 'To build', 'To hide'],
    answer: 'To look or see',
    explanation:
      'The Latin root "spect" means to look; to inspect means to look closely at something.',
  },
  {
    id: 'g5-ela-rt-8',
    type: 'mc' as const,
    prompt: 'The arid desert had no rain. What does "arid" mean?',
    choices: ['Very dry', 'Freezing cold', 'Flooded', 'Loud'],
    answer: 'Very dry',
    explanation:
      'The context clue "no rain" tells the reader that "arid" means very dry.',
  },
]

const ELA_GRAMMAR_VERBS_BANK = [
  {
    id: 'g5-ela-grm-1',
    type: 'mc' as const,
    prompt: 'Which sentence uses the present perfect verb tense correctly?',
    choices: [
      'She has finished her science project.',
      'She will finish her project tomorrow.',
      'She finishes her project yesterday.',
      'She finishing her project now.',
    ],
    answer: 'She has finished her science project.',
    explanation:
      'Present perfect tense uses "has" or "have" plus a past participle (has finished).',
  },
  {
    id: 'g5-ela-grm-2',
    type: 'mc' as const,
    prompt: 'Which pair of words is a correlative conjunction?',
    choices: ['Either / or', 'Run / jump', 'Quickly / slowly', 'Under / over'],
    answer: 'Either / or',
    explanation:
      'Correlative conjunctions work in pairs, such as "either/or," "neither/nor," and "both/and."',
  },
  {
    id: 'g5-ela-grm-3',
    type: 'mc' as const,
    prompt: 'Choose the correct word: "Neither the coach ___ the players were late."',
    choices: ['nor', 'or', 'but', 'and'],
    answer: 'nor',
    explanation:
      '"Neither" always pairs with the correlative conjunction "nor."',
  },
  {
    id: 'g5-ela-grm-4',
    type: 'mc' as const,
    prompt: 'Where does a comma belong in "Yes I would love to help"?',
    choices: [
      'After the introductory word "Yes"',
      'Between "would" and "love"',
      'After the word "to"',
      'No comma is needed',
    ],
    answer: 'After the introductory word "Yes"',
    explanation:
      'Use a comma to set off introductory words like "Yes," "No," or "Well" at the start of a sentence.',
  },
  {
    id: 'g5-ela-grm-5',
    type: 'mc' as const,
    prompt: 'How should the title of a full-length book be formatted?',
    choices: [
      'Italicized (or underlined when handwritten)',
      'Written in all lowercase letters',
      'Hidden in parentheses',
      'Crossed out',
    ],
    answer: 'Italicized (or underlined when handwritten)',
    explanation:
      'Titles of long works like books, movies, and newspapers are italicized or underlined.',
  },
  {
    id: 'g5-ela-grm-6',
    type: 'mc' as const,
    prompt: 'How should the title of a short poem or short story be punctuated?',
    choices: [
      'Placed inside quotation marks',
      'Written without capital letters',
      'Followed by three question marks',
      'Underlined twice',
    ],
    answer: 'Placed inside quotation marks',
    explanation:
      'Use quotation marks around titles of short works like poems, articles, songs, and short stories.',
  },
  {
    id: 'g5-ela-grm-7',
    type: 'mc' as const,
    prompt: 'Which sentence has an inappropriate shift in verb tense?',
    choices: [
      'Sam walked to the door and opens it.',
      'Sam walked to the door and opened it.',
      'Sam walks to the door and opens it.',
      'Sam will walk to the door and open it.',
    ],
    answer: 'Sam walked to the door and opens it.',
    explanation:
      'Verbs describing actions at the same time should stay in the same tense (walked / opened).',
  },
  {
    id: 'g5-ela-grm-8',
    type: 'mc' as const,
    prompt: 'What part of speech is "Wait!" in "Wait! Watch out!"?',
    choices: ['Interjection', 'Preposition', 'Pronoun', 'Adjective'],
    answer: 'Interjection',
    explanation:
      'An interjection is a word or phrase that expresses strong or sudden emotion.',
  },
]

const SOC_ANCIENT_AMERICAS_BANK = [
  {
    id: 'g5-soc-anc-1',
    type: 'mc' as const,
    prompt: 'Which civilization built stone pyramids and a 365-day calendar in Central America?',
    choices: ['The Maya', 'The Inca', 'The Vikings', 'The Iroquois'],
    answer: 'The Maya',
    explanation:
      'The Maya civilization developed hieroglyphic writing, astronomy, and stone pyramids in Mesoamerica.',
  },
  {
    id: 'g5-soc-anc-2',
    type: 'mc' as const,
    prompt: 'What was the island capital city of the Aztec Empire in Mexico?',
    choices: ['Tenochtitlan', 'Cuzco', 'Jamestown', 'Plymouth'],
    answer: 'Tenochtitlan',
    explanation:
      'The Aztecs built their grand capital, Tenochtitlan, on an island in Lake Texcoco.',
  },
  {
    id: 'g5-soc-anc-3',
    type: 'mc' as const,
    prompt: 'How did the Aztecs grow crops on shallow lake beds?',
    choices: [
      'Floating garden islands called chinampas',
      'Glass greenhouses',
      'Steel tractors',
      'Desert windmills',
    ],
    answer: 'Floating garden islands called chinampas',
    explanation:
      'Chinampas were fertile, man-made garden beds built in shallow lake water around Tenochtitlan.',
  },
  {
    id: 'g5-soc-anc-4',
    type: 'mc' as const,
    prompt: 'Where did the Inca Empire build its road network and terraced farms?',
    choices: [
      'The Andes Mountains of South America',
      'The Great Plains of North America',
      'The Arctic tundra',
      'The islands of Hawaii',
    ],
    answer: 'The Andes Mountains of South America',
    explanation:
      'The Inca carved step-like terraces into steep Andes mountainsides and connected their empire with stone roads.',
  },
  {
    id: 'g5-soc-anc-5',
    type: 'mc' as const,
    prompt: 'What was the largest Mississippian mound-building city near the Mississippi River?',
    choices: ['Cahokia', 'Tenochtitlan', 'Machu Picchu', 'Boston'],
    answer: 'Cahokia',
    explanation:
      'Cahokia was a major Mississippian trade center famous for Monks Mound and earthen plazas.',
  },
  {
    id: 'g5-soc-anc-6',
    type: 'mc' as const,
    prompt: 'Why did the Inca cut flat steps (terraces) into steep mountain slopes?',
    choices: [
      'To create flat farmland and stop erosion',
      'To park wagons',
      'To catch ocean fish',
      'To melt snow into lava',
    ],
    answer: 'To create flat farmland and stop erosion',
    explanation:
      'Terrace farming kept soil and water in place so crops could grow on steep mountainsides.',
  },
  {
    id: 'g5-soc-anc-7',
    type: 'mc' as const,
    prompt: 'Which Ohio earthwork was built by ancient American Indian mound builders?',
    choices: ['Serpent Mound', 'Hoover Dam', 'Mount Rushmore', 'Golden Gate Bridge'],
    answer: 'Serpent Mound',
    explanation:
      'Serpent Mound in southern Ohio is a famous effigy mound shaped like a giant curving snake.',
  },
  {
    id: 'g5-soc-anc-8',
    type: 'mc' as const,
    prompt: 'What knotted cords did the Inca use to record numbers and supplies?',
    choices: ['Quipu', 'Papyrus', 'Wampum', 'Telegraph'],
    answer: 'Quipu',
    explanation:
      'A quipu was a system of colored, knotted strings used by the Inca to keep numerical records.',
  },
]

const SOC_WOODLANDS_CULTURES_BANK = [
  {
    id: 'g5-soc-wd-1',
    type: 'mc' as const,
    prompt: 'What were the "Three Sisters" crops grown by Eastern Woodland peoples?',
    choices: [
      'Corn, beans, and squash',
      'Wheat, rice, and oats',
      'Apples, oranges, and bananas',
      'Cotton, tea, and coffee',
    ],
    answer: 'Corn, beans, and squash',
    explanation:
      'Corn, beans, and squash were planted together because corn stalks supported beans and squash shaded the soil.',
  },
  {
    id: 'g5-soc-wd-2',
    type: 'mc' as const,
    prompt: 'What type of multi-family bark homes did the Haudenosaunee (Iroquois) build?',
    choices: ['Longhouses', 'Igloos', 'Adobe apartments', 'Grass huts'],
    answer: 'Longhouses',
    explanation:
      'Eastern Woodland Haudenosaunee families lived in long wooden frames covered with elm bark called longhouses.',
  },
  {
    id: 'g5-soc-wd-3',
    type: 'mc' as const,
    prompt: 'Why did Great Plains nations build portable tipis?',
    choices: [
      'Tipis were easy to move while following bison',
      'Tipis were built from heavy stone blocks',
      'Tipis floated on the ocean',
      'Tipis were carved inside caves',
    ],
    answer: 'Tipis were easy to move while following bison',
    explanation:
      'Plains nations used portable cone-shaped tipis made of poles and bison hides during seasonal hunts.',
  },
  {
    id: 'g5-soc-wd-4',
    type: 'mc' as const,
    prompt: 'How did Ancestral Pueblo peoples in the arid Southwest water their crops?',
    choices: [
      'Irrigation canals that directed scarce water',
      'Melting polar icebergs',
      'Daily tropical monsoons',
      'Ocean saltwater pipes',
    ],
    answer: 'Irrigation canals that directed scarce water',
    explanation:
      'Southwest peoples adapted to dry desert climates by building irrigation ditches and adobe homes.',
  },
  {
    id: 'g5-soc-wd-5',
    type: 'mc' as const,
    prompt: 'What natural resource was most important to Pacific Northwest Coast cultures?',
    choices: [
      'Cedar trees and ocean salmon',
      'Desert cactus',
      'Prairie sod',
      'Arctic seal blubber',
    ],
    answer: 'Cedar trees and ocean salmon',
    explanation:
      'Pacific Northwest nations used giant cedar trees for plank houses and canoes and fished for salmon.',
  },
  {
    id: 'g5-soc-wd-6',
    type: 'mc' as const,
    prompt: 'What was the Haudenosaunee (Iroquois) Confederacy?',
    choices: [
      'A peaceful alliance of American Indian nations',
      'A Spanish fleet of ships',
      'A gold mine in South America',
      'A British tax law',
    ],
    answer: 'A peaceful alliance of American Indian nations',
    explanation:
      'The Haudenosaunee Confederacy united nations under the Great Law of Peace to make shared decisions.',
  },
  {
    id: 'g5-soc-wd-7',
    type: 'mc' as const,
    prompt: 'What material did Southwest Pueblo builders use for cool, sturdy homes?',
    choices: ['Sun-dried clay bricks called adobe', 'Birch bark', 'Whale bones', 'Sheet metal'],
    answer: 'Sun-dried clay bricks called adobe',
    explanation:
      'Adobe bricks made from clay, sand, and straw kept Southwest homes cool in desert heat.',
  },
  {
    id: 'g5-soc-wd-8',
    type: 'mc' as const,
    prompt: 'Why did different American Indian cultural regions have different foods and homes?',
    choices: [
      'They adapted to local climate and natural resources',
      'They all lived in identical climates',
      'Europeans built their houses first',
      'No plants grew in North America',
    ],
    answer: 'They adapted to local climate and natural resources',
    explanation:
      'Indigenous peoples shaped their shelter, clothing, and food around the environment of their region.',
  },
]

const SOC_COLONIES_REV_BANK = [
  {
    id: 'g5-soc-col-1',
    type: 'mc' as const,
    prompt: 'What was the Columbian Exchange?',
    choices: [
      'Exchange of plants, animals, and goods across oceans',
      'A railroad across South America',
      'A treaty between Ohio and Canada',
      'A gold coin used in Boston',
    ],
    answer: 'Exchange of plants, animals, and goods across oceans',
    explanation:
      'The Columbian Exchange moved crops, livestock, people, and diseases between the Americas and Afro-Eurasia.',
  },
  {
    id: 'g5-soc-col-2',
    type: 'mc' as const,
    prompt: 'What was the first permanent English settlement in North America (1607)?',
    choices: ['Jamestown, Virginia', 'Plymouth, Massachusetts', 'St. Augustine', 'Quebec'],
    answer: 'Jamestown, Virginia',
    explanation:
      'English colonists founded Jamestown in Virginia in 1607 as their first permanent settlement.',
  },
  {
    id: 'g5-soc-col-3',
    type: 'mc' as const,
    prompt: 'Why did the Pilgrims sign the Mayflower Compact in 1620?',
    choices: [
      'To agree on fair laws and self-government',
      'To declare war on France',
      'To buy land in California',
      'To ban farming in New England',
    ],
    answer: 'To agree on fair laws and self-government',
    explanation:
      'The Mayflower Compact was an early agreement establishing self-government in Plymouth Colony.',
  },
  {
    id: 'g5-soc-col-4',
    type: 'mc' as const,
    prompt: 'Why did American colonists protest British taxes like the Stamp Act?',
    choices: [
      'They had no elected representatives in Parliament',
      'They wanted higher taxes on tea',
      'They wanted to return to England',
      'They disliked using paper money',
    ],
    answer: 'They had no elected representatives in Parliament',
    explanation:
      'Colonists argued "no taxation without representation" because they had no voice in the British Parliament.',
  },
  {
    id: 'g5-soc-col-5',
    type: 'mc' as const,
    prompt: 'Who was the primary author of the Declaration of Independence in 1776?',
    choices: ['Thomas Jefferson', 'King George III', 'Abraham Lincoln', 'Christopher Columbus'],
    answer: 'Thomas Jefferson',
    explanation:
      'Thomas Jefferson wrote the Declaration of Independence explaining why the colonies broke away from Britain.',
  },
  {
    id: 'g5-soc-col-6',
    type: 'mc' as const,
    prompt: 'According to the Declaration of Independence, what are people’s natural rights?',
    choices: [
      'Life, liberty, and the pursuit of happiness',
      'Free gold and silver',
      'Rule by a king forever',
      'No laws or courts',
    ],
    answer: 'Life, liberty, and the pursuit of happiness',
    explanation:
      'The Declaration states that all people have natural rights to life, liberty, and the pursuit of happiness.',
  },
  {
    id: 'g5-soc-col-7',
    type: 'mc' as const,
    prompt: 'What are the three branches of the U.S. government under the Constitution?',
    choices: [
      'Legislative, Executive, and Judicial',
      'Army, Navy, and Air Force',
      'Local, County, and City',
      'Banks, Farms, and Factories',
    ],
    answer: 'Legislative, Executive, and Judicial',
    explanation:
      'The Constitution divides power among the Legislative (Congress), Executive (President), and Judicial (Courts) branches.',
  },
  {
    id: 'g5-soc-col-8',
    type: 'mc' as const,
    prompt: 'What do the first ten amendments to the U.S. Constitution protect?',
    choices: [
      'Individual freedoms in the Bill of Rights',
      'British royal taxes',
      'Only state borders',
      'Airline schedules',
    ],
    answer: 'Individual freedoms in the Bill of Rights',
    explanation:
      'The Bill of Rights guarantees freedoms such as speech, religion, press, and fair trials.',
  },
]

const SOC_GEO_ECON_BANK = [
  {
    id: 'g5-soc-geo-1',
    type: 'mc' as const,
    prompt: 'What do lines of latitude measure on a globe or map?',
    choices: [
      'Distance north or south of the Equator',
      'Distance east or west of the Prime Meridian',
      'Height of mountains in feet',
      'Depth of the ocean floor',
    ],
    answer: 'Distance north or south of the Equator',
    explanation:
      'Parallels of latitude run east-west and measure degrees north or south of the Equator.',
  },
  {
    id: 'g5-soc-geo-2',
    type: 'mc' as const,
    prompt: 'What do lines of longitude measure on a globe or map?',
    choices: [
      'Distance east or west of the Prime Meridian',
      'Distance north or south of the Equator',
      'Daily rainfall totals',
      'Population density',
    ],
    answer: 'Distance east or west of the Prime Meridian',
    explanation:
      'Meridians of longitude run from pole to pole and measure degrees east or west of the Prime Meridian.',
  },
  {
    id: 'g5-soc-geo-3',
    type: 'mc' as const,
    prompt: 'How does climate generally change as you travel closer to the Equator?',
    choices: [
      'Temperatures become warmer year-round',
      'Temperatures become freezing all year',
      'Sunlight disappears for six months',
      'Blizzards happen every day',
    ],
    answer: 'Temperatures become warmer year-round',
    explanation:
      'Low latitudes near the Equator receive direct sunlight all year, creating warm tropical climates.',
  },
  {
    id: 'g5-soc-geo-4',
    type: 'mc' as const,
    prompt: 'In economics, what is "opportunity cost"?',
    choices: [
      'The next best choice you give up when deciding',
      'The price tag printed on a toy',
      'Money saved in a piggy bank',
      'A free gift from a friend',
    ],
    answer: 'The next best choice you give up when deciding',
    explanation:
      'Opportunity cost is the value of the second-best option you give up when you make a choice.',
  },
  {
    id: 'g5-soc-geo-5',
    type: 'mc' as const,
    prompt: 'Why do countries in the Western Hemisphere specialize and trade?',
    choices: [
      'Different regions produce goods they make best',
      'Every country has identical resources',
      'Trade reduces the variety of goods',
      'No country grows its own food',
    ],
    answer: 'Different regions produce goods they make best',
    explanation:
      'Specialization and trade let regions exchange products they make efficiently for goods they need.',
  },
  {
    id: 'g5-soc-geo-6',
    type: 'mc' as const,
    prompt: 'What happens to orange prices if a frost ruins the crop?',
    choices: [
      'Prices rise because supply is lower',
      'Prices drop to zero',
      'Oranges become free',
      'Supply becomes unlimited',
    ],
    answer: 'Prices rise because supply is lower',
    explanation:
      'When supply drops and demand stays the same, scarcity causes the price of a good to increase.',
  },
  {
    id: 'g5-soc-geo-7',
    type: 'mc' as const,
    prompt: 'Which 0° latitude line divides Earth into Northern and Southern Hemispheres?',
    choices: ['The Equator', 'The Prime Meridian', 'The Arctic Circle', 'The Tropic of Cancer'],
    answer: 'The Equator',
    explanation:
      'The Equator sits at 0 degrees latitude halfway between the North and South Poles.',
  },
  {
    id: 'g5-soc-geo-8',
    type: 'mc' as const,
    prompt: 'Mia picks a book over a game. What is her opportunity cost?',
    choices: ['The board game', 'The book', 'Twenty dollars', 'The library'],
    answer: 'The board game',
    explanation:
      'Because Mia chose the book, the board game she gave up is her opportunity cost.',
  },
]

// =========================================================================
// GRADE 5 COURSES (ADHD-Friendly Bite-Sized Micro-Lessons + Reviews + Exams)
// =========================================================================

export const GRADE_5_COURSES: Course[] = [
  // =========================================================================
  // GRADE 5 MATHEMATICS
  // =========================================================================
  {
    id: 'g5-math',
    subject: 'math',
    grade: 5,
    title: 'Grade 5 Mathematics',
    subtitle: 'Powers of 10, Decimals, Fractions, Volume & the Coordinate Plane',
    credits: 1.0,
    color: '#2563eb',
    icon: '📐',
    units: [
      {
        id: 'g5-math-u1',
        title: 'Unit 1: Powers of 10, Decimals & Multi-Digit Operations',
        standards: ['5.NBT.A.2', '5.NBT.A.4', '5.NBT.B.5', '5.NBT.B.6', '5.NBT.B.7'],
        lessons: [
          {
            id: 'g5-math-u1-l1',
            unitId: 'g5-math-u1',
            title: 'Powers of 10 & Place Value Shifts',
            kind: 'lesson',
            partOf: 'Decimals & Powers of 10',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten',
            videoTitle: 'Khan Academy: Multiplying by Powers of 10',
            reading:
              'An exponent on 10 tells how many times 10 is multiplied by itself. For example, 10² = 100 (2 zeros) and 10³ = 1,000 (3 zeros). To multiply a whole number by 10ⁿ, shift the digits n places to the left.',
            principles: [
              {
                id: 'p-g5-pow10',
                title: 'Multiplying by Powers of 10',
                standard: '5.NBT.A.2',
                summary: 'Use exponents to represent powers of 10 and shift place values accurately.',
                generatorId: 'g5.powers-of-ten',
              },
            ],
          },
          {
            id: 'g5-math-u1-l2',
            unitId: 'g5-math-u1',
            title: 'Rounding, Adding & Subtracting Decimals',
            kind: 'lesson',
            partOf: 'Decimals & Powers of 10',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-add-and-subtract-decimals',
            videoTitle: 'Khan Academy: Rounding, Adding & Subtracting Decimals',
            reading:
              'To round a decimal to the nearest tenth, check the hundredths digit (5 or more rounds up). When adding or subtracting decimals, line up the decimal points vertically so tenths add to tenths.',
            principles: [
              {
                id: 'p-g5-dec-addsub',
                title: 'Adding and Subtracting Decimals to Tenths',
                standard: '5.NBT.B.7',
                summary: 'Line up decimal points vertically to add and subtract decimals.',
                generatorId: 'g5.decimal-add-sub',
              },
            ],
          },
          {
            id: 'g5-math-u1-l3',
            unitId: 'g5-math-u1',
            title: 'Multi-Digit Multiplication & 2-Digit Division',
            kind: 'lesson',
            partOf: 'Multi-Digit Operations',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division',
            videoTitle: 'Khan Academy: Multi-Digit Multiplication & Division',
            reading:
              'Use the standard algorithm to multiply 3-digit numbers by 2-digit numbers by adding partial products. For division by a 2-digit divisor, use inverse multiplication to find the exact quotient.',
            principles: [
              {
                id: 'p-g5-mult-multi',
                title: 'Multi-Digit Whole Number Multiplication',
                standard: '5.NBT.B.5',
                summary: 'Fluently multiply multi-digit whole numbers using the standard algorithm.',
                generatorId: 'g5.mult-multi-digit',
              },
            ],
          },
          {
            id: 'g5-math-u1-test',
            unitId: 'g5-math-u1',
            title: 'Unit 1 Exam: Powers of 10, Decimals & Whole-Number Fluency',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten',
            videoTitle: 'Unit 1 Review: Decimals & Multi-Digit Operations',
            reading:
              'This Unit Exam checks mastery of powers of 10, decimal rounding, decimal addition/subtraction/multiplication, and multi-digit multiplication and division.',
            principles: [
              {
                id: 'p-g5-pow10',
                title: 'Multiplying by Powers of 10',
                standard: '5.NBT.A.2',
                summary: 'Multiply whole numbers by powers of 10.',
                generatorId: 'g5.powers-of-ten',
              },
              {
                id: 'p-g5-dec-round',
                title: 'Rounding Decimals to the Nearest Tenth',
                standard: '5.NBT.A.4',
                summary: 'Inspect the hundredths place to round decimals to the nearest tenth.',
                generatorId: 'g5.decimal-round',
              },
              {
                id: 'p-g5-dec-addsub',
                title: 'Adding and Subtracting Decimals',
                standard: '5.NBT.B.7',
                summary: 'Line up decimal points to add or subtract decimals.',
                generatorId: 'g5.decimal-add-sub',
              },
              {
                id: 'p-g5-dec-mult',
                title: 'Multiplying Decimals by Whole Numbers',
                standard: '5.NBT.B.7',
                summary: 'Multiply tenths by whole numbers and place the decimal point.',
                generatorId: 'g5.decimal-mult',
              },
              {
                id: 'p-g5-mult-multi',
                title: 'Multi-Digit Whole Number Multiplication',
                standard: '5.NBT.B.5',
                summary: 'Multiply 3-digit by 2-digit whole numbers.',
                generatorId: 'g5.mult-multi-digit',
              },
              {
                id: 'p-g5-div-2digit',
                title: 'Dividing by 2-Digit Divisors',
                standard: '5.NBT.B.6',
                summary: 'Find whole-number quotients with 2-digit divisors.',
                generatorId: 'g5.div-2digit',
              },
            ],
          },
        ],
      },
      {
        id: 'g5-math-u2',
        title: 'Unit 2: Adding, Subtracting, Multiplying & Dividing Fractions',
        standards: ['5.NF.A.1', '5.NF.B.4', '5.NF.B.7'],
        lessons: [
          {
            id: 'g5-math-u2-l1',
            unitId: 'g5-math-u2',
            title: 'Adding & Subtracting Fractions with Unlike Denominators',
            kind: 'lesson',
            partOf: 'Fraction Operations',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3',
            videoTitle: 'Khan Academy: Adding & Subtracting Unlike Fractions',
            reading:
              'Before adding or subtracting fractions with different denominators, rewrite one or both as equivalent fractions with a common denominator. Then add or subtract the numerators and simplify.',
            principles: [
              {
                id: 'p-g5-frac-add',
                title: 'Adding Fractions with Unlike Denominators',
                standard: '5.NF.A.1',
                summary: 'Find a common denominator, add numerators, and simplify.',
                generatorId: 'g5.fraction-add-unlike',
              },
            ],
          },
          {
            id: 'g5-math-u2-l2',
            unitId: 'g5-math-u2',
            title: 'Multiplying Fractions & Dividing by Unit Fractions',
            kind: 'lesson',
            partOf: 'Fraction Operations',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplying-and-dividing-fractions',
            videoTitle: 'Khan Academy: Multiplying & Dividing Fractions',
            reading:
              'To multiply two fractions, multiply the numerators together and multiply the denominators together. To divide a whole number by a unit fraction (such as 4 ÷ 1/3), count how many 1/3 pieces fit in 4 wholes: 4 × 3 = 12.',
            principles: [
              {
                id: 'p-g5-frac-mult',
                title: 'Multiplying Fractions',
                standard: '5.NF.B.4',
                summary: 'Multiply numerators and denominators, then simplify to lowest terms.',
                generatorId: 'g5.fraction-mult',
              },
            ],
          },
          {
            id: 'g5-math-u2-test',
            unitId: 'g5-math-u2',
            title: 'Unit 2 Exam: All Four Fraction Operations',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplying-and-dividing-fractions',
            videoTitle: 'Unit 2 Review: Fraction Operations Mastery',
            reading:
              'Demonstrate mastery of adding and subtracting unlike fractions, multiplying fractions, and dividing whole numbers by unit fractions.',
            principles: [
              {
                id: 'p-g5-frac-add',
                title: 'Adding Fractions with Unlike Denominators',
                standard: '5.NF.A.1',
                summary: 'Rewrite with a common denominator and add.',
                generatorId: 'g5.fraction-add-unlike',
              },
              {
                id: 'p-g5-frac-sub',
                title: 'Subtracting Fractions with Unlike Denominators',
                standard: '5.NF.A.1',
                summary: 'Rewrite with a common denominator and subtract.',
                generatorId: 'g5.fraction-sub-unlike',
              },
              {
                id: 'p-g5-frac-mult',
                title: 'Multiplying Fractions',
                standard: '5.NF.B.4',
                summary: 'Multiply numerators and denominators and simplify.',
                generatorId: 'g5.fraction-mult',
              },
              {
                id: 'p-g5-frac-div',
                title: 'Dividing Whole Numbers by Unit Fractions',
                standard: '5.NF.B.7',
                summary: 'Find how many unit fractions fit into a whole number.',
                generatorId: 'g5.fraction-div-unit',
              },
            ],
          },
        ],
      },
      {
        id: 'g5-math-u3',
        title: 'Unit 3: Volume, Metric Conversions, Coordinate Plane & Expressions',
        standards: ['5.MD.C.5', 'OH.5.MD.A.1', '5.G.A.1', '5.OA.A.1'],
        lessons: [
          {
            id: 'g5-math-u3-l1',
            unitId: 'g5-math-u3',
            title: 'Volume of Rectangular Prisms',
            kind: 'lesson',
            partOf: 'Volume & Measurement',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume',
            videoTitle: 'Khan Academy: Volume of Rectangular Prisms',
            reading:
              'Volume measures the 3-D space inside a solid figure in cubic units. For any rectangular prism, multiply length × width × height (V = l × w × h).',
            principles: [
              {
                id: 'p-g5-vol',
                title: 'Volume of a Rectangular Prism',
                standard: '5.MD.C.5',
                summary: 'Calculate volume using V = length × width × height.',
                generatorId: 'g5.volume-prism',
              },
            ],
          },
          {
            id: 'g5-math-u3-l2',
            unitId: 'g5-math-u3',
            title: 'Metric & Customary Unit Conversions',
            kind: 'lesson',
            partOf: 'Volume & Measurement',
            isOhioExtension: true,
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3',
            videoTitle: 'Khan Academy: Converting Metric & Customary Units',
            reading:
              'Convert larger units to smaller units by multiplying: 1 meter = 100 centimeters, 1 kilometer = 1,000 meters, 1 kilogram = 1,000 grams, 1 liter = 1,000 milliliters, and 1 foot = 12 inches.',
            principles: [
              {
                id: 'p-g5-conv',
                title: 'Converting Measurement Units',
                standard: 'OH.5.MD.A.1',
                summary: 'Convert among standard metric and customary measurement units.',
                generatorId: 'g5.unit-convert',
              },
            ],
          },
          {
            id: 'g5-math-u3-l3',
            unitId: 'g5-math-u3',
            title: 'Coordinate Plane & Order of Operations',
            kind: 'lesson',
            partOf: 'Coordinate Plane & Expressions',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking',
            videoTitle: 'Khan Academy: Order of Operations & Coordinate Plane',
            reading:
              'Evaluate parentheses first, then multiplication or division, then addition or subtraction. On the coordinate plane, an ordered pair (x, y) gives the horizontal x-coordinate first and the vertical y-coordinate second.',
            principles: [
              {
                id: 'p-g5-order',
                title: 'Order of Operations with Parentheses',
                standard: '5.OA.A.1',
                summary: 'Evaluate inside parentheses first, then multiply/divide before adding/subtracting.',
                generatorId: 'g5.order-of-ops',
              },
            ],
          },
          {
            id: 'g5-math-u3-test',
            unitId: 'g5-math-u3',
            title: 'Unit 3 Exam: Volume, Conversions, Coordinates & Expressions',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume',
            videoTitle: 'Unit 3 Review: Geometry, Measurement & Expressions',
            reading:
              'Demonstrate mastery of rectangular prism volume, unit conversions, coordinate pairs, and order of operations.',
            principles: [
              {
                id: 'p-g5-vol',
                title: 'Volume of a Rectangular Prism',
                standard: '5.MD.C.5',
                summary: 'Use V = l × w × h to find cubic volume.',
                generatorId: 'g5.volume-prism',
              },
              {
                id: 'p-g5-conv',
                title: 'Converting Measurement Units',
                standard: 'OH.5.MD.A.1',
                summary: 'Convert metric and customary units accurately.',
                generatorId: 'g5.unit-convert',
              },
              {
                id: 'p-g5-coord',
                title: 'Ordered Pairs on the Coordinate Plane',
                standard: '5.G.A.1',
                summary: 'Identify the x-coordinate and y-coordinate in an ordered pair (x, y).',
                generatorId: 'g5.coord-plane',
              },
              {
                id: 'p-g5-order',
                title: 'Order of Operations with Parentheses',
                standard: '5.OA.A.1',
                summary: 'Evaluate expressions with parentheses.',
                generatorId: 'g5.order-of-ops',
              },
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GRADE 5 SCIENCE
  // =========================================================================
  {
    id: 'g5-science',
    subject: 'science',
    grade: 5,
    title: 'Grade 5 Science',
    subtitle: 'Ecosystems, Photosynthesis, Force, Light, Sound & Earth in Space',
    credits: 1.0,
    color: '#059669',
    icon: '🔬',
    units: [
      {
        id: 'g5-sci-u1',
        title: 'Unit 1: Ecosystems, Food Webs & Physical Forces',
        standards: ['5-LS1-1', '5-LS2-1', 'OH.5.PS.1', 'OH.5.PS.2'],
        lessons: [
          {
            id: 'g5-sci-u1-l1',
            unitId: 'g5-sci-u1',
            title: 'Photosynthesis & How Plants Gain Matter',
            kind: 'lesson',
            partOf: 'Ecosystems & Energy',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-biology-ngss/x86f8a288a4b4cc01:matter-and-energy-in-organisms',
            videoTitle: 'Khan Academy: Photosynthesis in Plants',
            reading:
              'Green plants are producers. Using energy from sunlight, leaves combine carbon dioxide from air and water from soil to make sugar and release oxygen. Plants get almost all of their matter from air and water.',
            principles: [
              {
                id: 'p-g5-sci-photo',
                title: 'Photosynthesis and Plant Matter',
                standard: '5-LS1-1',
                summary: 'Plants use sunlight, water, and carbon dioxide to make food and release oxygen.',
                bank: SCI_PHOTOSYNTHESIS_BANK,
              },
            ],
          },
          {
            id: 'g5-sci-u1-l2',
            unitId: 'g5-sci-u1',
            title: 'Food Webs, Consumers & Decomposers',
            kind: 'lesson',
            partOf: 'Ecosystems & Energy',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-biology-ngss/x86f8a288a4b4cc01:matter-and-energy-in-ecosystems',
            videoTitle: 'Khan Academy: Food Chains, Food Webs & Decomposers',
            reading:
              'Food webs show how energy and matter move from producers to herbivores, omnivores, and carnivores. Decomposers like fungi and bacteria break down dead material and recycle nutrients back into the soil.',
            principles: [
              {
                id: 'p-g5-sci-web',
                title: 'Energy Flow and Decomposers in Ecosystems',
                standard: '5-LS2-1',
                summary: 'Energy flows from the Sun to producers and consumers; decomposers recycle matter.',
                bank: SCI_FOODWEB_BANK,
              },
            ],
          },
          {
            id: 'g5-sci-u1-rev',
            unitId: 'g5-sci-u1',
            title: 'Review: Photosynthesis & Food Webs',
            kind: 'lesson_review',
            partOf: 'Ecosystems & Energy',
            estimatedMinutes: 10,
            questionCount: 6,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-biology-ngss/x86f8a288a4b4cc01:matter-and-energy-in-ecosystems',
            videoTitle: 'Review: Producers, Consumers & Decomposers',
            reading:
              'Review how plants capture sunlight during photosynthesis and how energy and matter cycle through food webs.',
            principles: [
              {
                id: 'p-g5-sci-photo',
                title: 'Photosynthesis and Plant Matter',
                standard: '5-LS1-1',
                summary: 'Plants build matter mostly from air and water using sunlight.',
                bank: SCI_PHOTOSYNTHESIS_BANK,
              },
              {
                id: 'p-g5-sci-web',
                title: 'Energy Flow and Decomposers in Ecosystems',
                standard: '5-LS2-1',
                summary: 'Arrows show energy flow and decomposers recycle nutrients.',
                bank: SCI_FOODWEB_BANK,
              },
            ],
          },
          {
            id: 'g5-sci-u1-l3',
            unitId: 'g5-sci-u1',
            title: 'Force, Motion, Light & Sound',
            kind: 'lesson',
            partOf: 'Force, Light & Sound',
            isOhioExtension: true,
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:forces-and-motion',
            videoTitle: 'Khan Academy: Forces, Motion, Light & Sound Waves',
            reading:
              'Greater force causes a bigger change in speed, while heavier objects need more force to accelerate. Light travels in straight lines and can reflect (bounce) or refract (bend). Sound comes from vibrations—faster vibrations make a higher pitch.',
            principles: [
              {
                id: 'p-g5-sci-phys',
                title: 'Force, Mass, Light, and Sound Pitch',
                standard: 'OH.5.PS.1',
                summary: 'Force and mass govern motion; light reflects/refracts and vibration speed sets pitch.',
                bank: SCI_FORCE_LIGHT_SOUND_BANK,
              },
            ],
          },
          {
            id: 'g5-sci-u1-test',
            unitId: 'g5-sci-u1',
            title: 'Unit 1 Exam: Ecosystems & Physical Science',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-biology-ngss/x86f8a288a4b4cc01:matter-and-energy-in-ecosystems',
            videoTitle: 'Unit 1 Review: Ecosystems, Forces, Light & Sound',
            reading:
              'Complete the Unit 1 Exam covering photosynthesis, food webs, decomposers, force and motion, light reflection/refraction, and sound vibrations.',
            principles: [
              {
                id: 'p-g5-sci-photo',
                title: 'Photosynthesis and Plant Matter',
                standard: '5-LS1-1',
                summary: 'Plants use sunlight, air, and water to make sugar and oxygen.',
                bank: SCI_PHOTOSYNTHESIS_BANK,
              },
              {
                id: 'p-g5-sci-web',
                title: 'Energy Flow and Decomposers in Ecosystems',
                standard: '5-LS2-1',
                summary: 'Producers, consumers, and decomposers cycle matter and energy.',
                bank: SCI_FOODWEB_BANK,
              },
              {
                id: 'p-g5-sci-phys',
                title: 'Force, Mass, Light, and Sound Pitch',
                standard: 'OH.5.PS.1',
                summary: 'Forces change motion; light travels in straight lines; vibrations make sound.',
                bank: SCI_FORCE_LIGHT_SOUND_BANK,
              },
            ],
          },
        ],
      },
      {
        id: 'g5-sci-u2',
        title: 'Unit 2: Earth’s Four Spheres & the Solar System',
        standards: ['5-ESS2-1', '5-ESS2-2', '5-ESS1-2', 'OH.5.ESS.1'],
        lessons: [
          {
            id: 'g5-sci-u2-l1',
            unitId: 'g5-sci-u2',
            title: 'Earth’s Four Spheres & Water Distribution',
            kind: 'lesson',
            partOf: 'Earth Systems & Space',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-systems',
            videoTitle: 'Khan Academy: Geosphere, Hydrosphere, Atmosphere & Biosphere',
            reading:
              'Earth has four interacting spheres: geosphere (rock/soil), hydrosphere (water/ice), atmosphere (air), and biosphere (living things). About 97% of Earth’s water is salty ocean water, and most freshwater is frozen in glaciers.',
            principles: [
              {
                id: 'p-g5-sci-sph',
                title: 'Earth’s Spheres and Freshwater Distribution',
                standard: '5-ESS2-1',
                summary: 'Identify the four Earth spheres and explain where salt and fresh water are stored.',
                bank: SCI_SPHERES_BANK,
              },
            ],
          },
          {
            id: 'g5-sci-u2-l2',
            unitId: 'g5-sci-u2',
            title: 'Solar System, Rotation, Shadows & Orbits',
            kind: 'lesson',
            partOf: 'Earth Systems & Space',
            isOhioExtension: true,
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space',
            videoTitle: 'Khan Academy: Earth’s Rotation, Orbit & Stars',
            reading:
              'Earth rotates on its axis every 24 hours to cause day, night, and changing shadow lengths (shortest at noon). Earth orbits the Sun once every 365 days. The Sun looks brighter than other stars because it is much closer to Earth.',
            principles: [
              {
                id: 'p-g5-sci-spc',
                title: 'Earth’s Rotation, Orbit, Gravity, and Star Brightness',
                standard: 'OH.5.ESS.1',
                summary: 'Rotation causes day/night; yearly orbit changes seasonal stars; distance affects star brightness.',
                bank: SCI_SPACE_BANK,
              },
            ],
          },
          {
            id: 'g5-sci-u2-test',
            unitId: 'g5-sci-u2',
            title: 'Unit 2 Exam: Earth’s Spheres & Space Cycles',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space',
            videoTitle: 'Unit 2 Review: Earth Systems & the Solar System',
            reading:
              'Complete the Unit 2 Exam on Earth’s four spheres, water distribution, gravity, rotation, shadows, and the solar system.',
            principles: [
              {
                id: 'p-g5-sci-sph',
                title: 'Earth’s Spheres and Freshwater Distribution',
                standard: '5-ESS2-1',
                summary: 'Geosphere, hydrosphere, atmosphere, and biosphere interact across Earth.',
                bank: SCI_SPHERES_BANK,
              },
              {
                id: 'p-g5-sci-spc',
                title: 'Earth’s Rotation, Orbit, Gravity, and Star Brightness',
                standard: 'OH.5.ESS.1',
                summary: '24-hour rotation and 365-day orbit create predictable sky patterns.',
                bank: SCI_SPACE_BANK,
              },
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GRADE 5 ENGLISH LANGUAGE ARTS (ELA)
  // =========================================================================
  {
    id: 'g5-ela',
    subject: 'ela',
    grade: 5,
    title: 'Grade 5 English Language Arts',
    subtitle: 'Theme, Text Evidence, Informational Structure, Word Roots & Grammar',
    credits: 1.0,
    color: '#7c3aed',
    icon: '📖',
    units: [
      {
        id: 'g5-ela-u1',
        title: 'Unit 1: Reading Literature & Informational Text',
        standards: ['RL.5.1', 'RL.5.2', 'RI.5.2', 'RI.5.5', 'RI.5.8'],
        lessons: [
          {
            id: 'g5-ela-u1-l1',
            unitId: 'g5-ela-u1',
            title: 'Quoting Text Evidence, Inferences & Theme',
            kind: 'lesson',
            partOf: 'Reading Comprehension',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/ela/cc-5th-reading-vocab',
            videoTitle: 'Khan Academy: Quoting Evidence & Finding Theme',
            reading:
              'Strong readers quote exact details from a passage to prove an inference. The theme of a story is its central life lesson—what the characters learn through challenges and choices.',
            principles: [
              {
                id: 'p-g5-ela-thm',
                title: 'Text Evidence, Inferences, and Theme',
                standard: 'RL.5.1',
                summary: 'Quote accurately from a text to support inferences and determine theme.',
                bank: ELA_THEME_EVIDENCE_BANK,
              },
            ],
          },
          {
            id: 'g5-ela-u1-l2',
            unitId: 'g5-ela-u1',
            title: 'Main Idea, Text Structure & Author’s Evidence',
            kind: 'lesson',
            partOf: 'Reading Comprehension',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/ela/cc-5th-reading-vocab',
            videoTitle: 'Khan Academy: Informational Text Structures & Evidence',
            reading:
              'Informational texts organize ideas using structures such as cause/effect, compare/contrast, problem/solution, or sequence. Authors support their main claims with facts, statistics, and examples.',
            principles: [
              {
                id: 'p-g5-ela-inf',
                title: 'Main Idea, Text Structure, and Supporting Evidence',
                standard: 'RI.5.2',
                summary: 'Identify main ideas, informational text structures, and supporting evidence.',
                bank: ELA_MAIN_IDEA_STRUCTURE_BANK,
              },
            ],
          },
          {
            id: 'g5-ela-u1-rev',
            unitId: 'g5-ela-u1',
            title: 'Review: Literature & Informational Reading',
            kind: 'lesson_review',
            partOf: 'Reading Comprehension',
            estimatedMinutes: 10,
            questionCount: 6,
            videoUrl: 'https://www.khanacademy.org/ela/cc-5th-reading-vocab',
            videoTitle: 'Review: Theme, Text Structure & Evidence',
            reading:
              'Review how to cite evidence for themes in stories and identify text structures in informational passages.',
            principles: [
              {
                id: 'p-g5-ela-thm',
                title: 'Text Evidence, Inferences, and Theme',
                standard: 'RL.5.1',
                summary: 'Use text clues to infer meaning and find the theme.',
                bank: ELA_THEME_EVIDENCE_BANK,
              },
              {
                id: 'p-g5-ela-inf',
                title: 'Main Idea, Text Structure, and Supporting Evidence',
                standard: 'RI.5.2',
                summary: 'Recognize text structures and evidence supporting an author’s point.',
                bank: ELA_MAIN_IDEA_STRUCTURE_BANK,
              },
            ],
          },
          {
            id: 'g5-ela-u1-test',
            unitId: 'g5-ela-u1',
            title: 'Unit 1 Exam: Reading Literature & Informational Texts',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/ela/cc-5th-reading-vocab',
            videoTitle: 'Unit 1 Exam Review: Reading Comprehension',
            reading:
              'Demonstrate mastery of quoting text evidence, finding theme, comparing characters, and analyzing informational text structures.',
            principles: [
              {
                id: 'p-g5-ela-thm',
                title: 'Text Evidence, Inferences, and Theme',
                standard: 'RL.5.2',
                summary: 'Determine theme and support inferences with text evidence.',
                bank: ELA_THEME_EVIDENCE_BANK,
              },
              {
                id: 'p-g5-ela-inf',
                title: 'Main Idea, Text Structure, and Supporting Evidence',
                standard: 'RI.5.8',
                summary: 'Identify main ideas, text structures, and author evidence.',
                bank: ELA_MAIN_IDEA_STRUCTURE_BANK,
              },
            ],
          },
        ],
      },
      {
        id: 'g5-ela-u2',
        title: 'Unit 2: Figurative Language, Word Roots & Grammar',
        standards: ['L.5.5', 'OH.L.5.4', 'L.5.1', 'L.5.2'],
        lessons: [
          {
            id: 'g5-ela-u2-l1',
            unitId: 'g5-ela-u2',
            title: 'Similes, Metaphors, Personification & Idioms',
            kind: 'lesson',
            partOf: 'Language & Word Study',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/ela/cc-5th-reading-vocab',
            videoTitle: 'Khan Academy: Figurative Language & Idioms',
            reading:
              'Similes compare two things using "like" or "as." Metaphors compare directly without "like" or "as." Personification gives human actions to non-human things, and idioms/adages carry non-literal meanings.',
            principles: [
              {
                id: 'p-g5-ela-fig',
                title: 'Figurative Language, Idioms, and Adages',
                standard: 'L.5.5',
                summary: 'Interpret similes, metaphors, personification, idioms, and proverbs.',
                bank: ELA_FIGURATIVE_BANK,
              },
            ],
          },
          {
            id: 'g5-ela-u2-l2',
            unitId: 'g5-ela-u2',
            title: 'Greek & Latin Roots, Prefixes & Context Clues',
            kind: 'lesson',
            partOf: 'Language & Word Study',
            isOhioExtension: true,
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/ela/cc-5th-reading-vocab',
            videoTitle: 'Khan Academy: Greek & Latin Roots and Affixes',
            reading:
              'Common Greek and Latin roots unlock unfamiliar words: tele (far), photo (light), bio (life), port (carry), and spect (look). Combine root meanings with prefixes like pre- (before) and suffixes like -less (without).',
            principles: [
              {
                id: 'p-g5-ela-rt',
                title: 'Greek/Latin Roots, Affixes, and Context Clues',
                standard: 'OH.L.5.4',
                summary: 'Use Greek and Latin roots, prefixes, suffixes, and context clues to define words.',
                bank: ELA_ROOTS_PREFIXES_BANK,
              },
            ],
          },
          {
            id: 'g5-ela-u2-l3',
            unitId: 'g5-ela-u2',
            title: 'Perfect Verb Tenses, Conjunctions & Titles',
            kind: 'lesson',
            partOf: 'Language & Word Study',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/humanities/grammar',
            videoTitle: 'Khan Academy: Perfect Verb Tenses & Conjunctions',
            reading:
              'Perfect verb tenses use has/have/had + a past participle (e.g., "She has finished"). Correlative conjunctions work in pairs (either/or, neither/nor). Italicize book titles and put short story or poem titles in quotation marks.',
            principles: [
              {
                id: 'p-g5-ela-grm',
                title: 'Verb Tenses, Conjunctions, Commas, and Titles',
                standard: 'L.5.1',
                summary: 'Use perfect verb tenses, correlative conjunctions, introductory commas, and title formatting.',
                bank: ELA_GRAMMAR_VERBS_BANK,
              },
            ],
          },
          {
            id: 'g5-ela-u2-test',
            unitId: 'g5-ela-u2',
            title: 'Unit 2 Exam: Figurative Language, Roots & Grammar',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/humanities/grammar',
            videoTitle: 'Unit 2 Exam Review: Vocabulary & Grammar Conventions',
            reading:
              'Complete the Unit 2 Exam on similes, metaphors, idioms, Greek and Latin roots, verb tenses, conjunctions, and punctuation.',
            principles: [
              {
                id: 'p-g5-ela-fig',
                title: 'Figurative Language, Idioms, and Adages',
                standard: 'L.5.5',
                summary: 'Identify and explain similes, metaphors, idioms, and adages.',
                bank: ELA_FIGURATIVE_BANK,
              },
              {
                id: 'p-g5-ela-rt',
                title: 'Greek/Latin Roots, Affixes, and Context Clues',
                standard: 'OH.L.5.4',
                summary: 'Decode words using roots, prefixes, suffixes, and context.',
                bank: ELA_ROOTS_PREFIXES_BANK,
              },
              {
                id: 'p-g5-ela-grm',
                title: 'Verb Tenses, Conjunctions, Commas, and Titles',
                standard: 'L.5.1',
                summary: 'Apply Grade 5 grammar and punctuation conventions.',
                bank: ELA_GRAMMAR_VERBS_BANK,
              },
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GRADE 5 SOCIAL STUDIES (WESTERN HEMISPHERE & EARLY AMERICA)
  // =========================================================================
  {
    id: 'g5-social',
    subject: 'social',
    grade: 5,
    title: 'Grade 5 Social Studies',
    subtitle: 'Ancient Americas, Indigenous Regions, U.S. Founding & Western Hemisphere Geography',
    credits: 1.0,
    color: '#d97706',
    icon: '🌎',
    units: [
      {
        id: 'g5-soc-u1',
        title: 'Unit 1: Early Indigenous Civilizations & Cultural Regions',
        standards: ['OH.5.SS.1', 'OH.5.SS.2'],
        lessons: [
          {
            id: 'g5-soc-u1-l1',
            unitId: 'g5-soc-u1',
            title: 'Maya, Aztec, Inca & Mound-Building Civilizations',
            kind: 'lesson',
            partOf: 'Early Americas',
            isOhioExtension: true,
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/humanities/world-history/medieval-times/maya-aztec-and-inca/v/maya-civilization',
            videoTitle: 'Khan Academy: Maya, Aztec, Inca & Mississippian Civilizations',
            reading:
              'Long before European arrival, the Maya built stone pyramids and calendars, the Aztecs built Tenochtitlan with floating chinampas, the Inca built Andes mountain terraces and roads, and Mississippian/Ohio mound builders constructed Cahokia and Serpent Mound.',
            principles: [
              {
                id: 'p-g5-soc-anc',
                title: 'Early Civilizations of the Americas',
                standard: 'OH.5.SS.1',
                summary: 'Compare achievements of the Maya, Aztec, Inca, and Mississippian mound builders.',
                bank: SOC_ANCIENT_AMERICAS_BANK,
              },
            ],
          },
          {
            id: 'g5-soc-u1-l2',
            unitId: 'g5-soc-u1',
            title: 'American Indian Cultural Regions of North America',
            kind: 'lesson',
            partOf: 'Early Americas',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/humanities/us-history/precontact-and-early-colonial-era/before-contact/v/native-indian-culture-of-the-northeast',
            videoTitle: 'Khan Academy: Indigenous Cultural Regions of North America',
            reading:
              'American Indian nations adapted to their environments: Eastern Woodlands peoples grew the Three Sisters (corn, beans, squash) and built longhouses; Plains nations used portable tipis; Southwest Pueblo peoples built adobe homes and irrigation canals.',
            principles: [
              {
                id: 'p-g5-soc-wd',
                title: 'North American Cultural Regions and Adaptations',
                standard: 'OH.5.SS.2',
                summary: 'Explain how Indigenous groups adapted food and shelter to local environments.',
                bank: SOC_WOODLANDS_CULTURES_BANK,
              },
            ],
          },
          {
            id: 'g5-soc-u1-rev',
            unitId: 'g5-soc-u1',
            title: 'Review: Early Civilizations & Cultural Regions',
            kind: 'lesson_review',
            partOf: 'Early Americas',
            estimatedMinutes: 10,
            questionCount: 6,
            videoUrl: 'https://www.khanacademy.org/humanities/world-history/medieval-times/maya-aztec-and-inca/v/maya-civilization',
            videoTitle: 'Review: Ancient Americas & Cultural Regions',
            reading:
              'Review the achievements of the Maya, Aztec, Inca, and Mississippian civilizations alongside North American cultural regions.',
            principles: [
              {
                id: 'p-g5-soc-anc',
                title: 'Early Civilizations of the Americas',
                standard: 'OH.5.SS.1',
                summary: 'Identify Maya, Aztec, Inca, and Mound Builder achievements.',
                bank: SOC_ANCIENT_AMERICAS_BANK,
              },
              {
                id: 'p-g5-soc-wd',
                title: 'North American Cultural Regions and Adaptations',
                standard: 'OH.5.SS.2',
                summary: 'Match Indigenous housing and food to geographic regions.',
                bank: SOC_WOODLANDS_CULTURES_BANK,
              },
            ],
          },
          {
            id: 'g5-soc-u1-test',
            unitId: 'g5-soc-u1',
            title: 'Unit 1 Exam: Early Civilizations of the Americas',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/humanities/world-history/medieval-times/maya-aztec-and-inca/v/maya-civilization',
            videoTitle: 'Unit 1 Exam Review: Indigenous Civilizations & Regions',
            reading:
              'Complete the Unit 1 Exam covering the Maya, Aztec, Inca, Mississippian mound builders, and North American Indigenous cultural regions.',
            principles: [
              {
                id: 'p-g5-soc-anc',
                title: 'Early Civilizations of the Americas',
                standard: 'OH.5.SS.1',
                summary: 'Compare Maya, Aztec, Inca, and Mississippian civilizations.',
                bank: SOC_ANCIENT_AMERICAS_BANK,
              },
              {
                id: 'p-g5-soc-wd',
                title: 'North American Cultural Regions and Adaptations',
                standard: 'OH.5.SS.2',
                summary: 'Compare Eastern Woodlands, Plains, Southwest, and Northwest cultures.',
                bank: SOC_WOODLANDS_CULTURES_BANK,
              },
            ],
          },
        ],
      },
      {
        id: 'g5-soc-u2',
        title: 'Unit 2: Exploration, Thirteen Colonies, U.S. Founding & Geography',
        standards: ['OH.5.SS.5', 'OH.5.SS.11', 'OH.5.SS.14'],
        lessons: [
          {
            id: 'g5-soc-u2-l1',
            unitId: 'g5-soc-u2',
            title: 'Exploration, Thirteen Colonies & the American Revolution',
            kind: 'lesson',
            partOf: 'Colonies, Geography & Economics',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-american-revolution/v/the-seven-years-war-part-1',
            videoTitle: 'Khan Academy: Colonies, Revolution & the U.S. Constitution',
            reading:
              'European exploration started the Columbian Exchange. English colonists founded Jamestown (1607) and Plymouth (1620). Later, colonists protested British taxes without representation, adopted the Declaration of Independence (1776), and created the U.S. Constitution with three branches of government.',
            principles: [
              {
                id: 'p-g5-soc-col',
                title: 'Exploration, Colonial America, and Constitutional Government',
                standard: 'OH.5.SS.5',
                summary: 'Trace the Columbian Exchange, Jamestown/Plymouth, the Revolution, and the three branches of government.',
                bank: SOC_COLONIES_REV_BANK,
              },
            ],
          },
          {
            id: 'g5-soc-u2-l2',
            unitId: 'g5-soc-u2',
            title: 'Western Hemisphere Geography, Trade & Opportunity Cost',
            kind: 'lesson',
            partOf: 'Colonies, Geography & Economics',
            estimatedMinutes: 10,
            videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings',
            videoTitle: 'Khan Academy: Latitude, Longitude, Trade & Opportunity Cost',
            reading:
              'Latitude measures degrees north or south of the Equator (0°), and longitude measures degrees east or west of the Prime Meridian. Regions near the Equator are warmer. In economics, opportunity cost is the next best choice you give up when making a decision.',
            principles: [
              {
                id: 'p-g5-soc-geo',
                title: 'Latitude, Longitude, Specialization, and Opportunity Cost',
                standard: 'OH.5.SS.14',
                summary: 'Use latitude/longitude and explain specialization, trade, and opportunity cost.',
                bank: SOC_GEO_ECON_BANK,
              },
            ],
          },
          {
            id: 'g5-soc-u2-test',
            unitId: 'g5-soc-u2',
            title: 'Unit 2 Exam: Colonies, Government, Geography & Economics',
            kind: 'unit_test',
            estimatedMinutes: 15,
            questionCount: 8,
            videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-american-revolution/v/the-seven-years-war-part-1',
            videoTitle: 'Unit 2 Exam Review: Early America & Western Hemisphere Geography',
            reading:
              'Complete the Unit 2 Exam covering the Columbian Exchange, Thirteen Colonies, Declaration of Independence, U.S. Constitution, latitude/longitude, and opportunity cost.',
            principles: [
              {
                id: 'p-g5-soc-col',
                title: 'Exploration, Colonial America, and Constitutional Government',
                standard: 'OH.5.SS.5',
                summary: 'Explain colonial founding, the American Revolution, and the three branches of government.',
                bank: SOC_COLONIES_REV_BANK,
              },
              {
                id: 'p-g5-soc-geo',
                title: 'Latitude, Longitude, Specialization, and Opportunity Cost',
                standard: 'OH.5.SS.14',
                summary: 'Apply map coordinates, climate patterns, supply/demand, and opportunity cost.',
                bank: SOC_GEO_ECON_BANK,
              },
            ],
          },
        ],
      },
    ],
  },
]
