import { Course, Principle } from '../../types'

// Principles for Grade 4 Social Studies
const G4_SOC_GEO_PRINCIPLE: Principle = {
  id: 'p-g4-soc-geo',
  title: 'Map Coordinates & Regions of the United States',
  standard: 'C3.D2.Geo.2.3-5',
  summary: 'Latitude runs east-west, longitude runs north-south, and the U.S. has five major regions.',
  bank: [
    {
      id: 'g4-soc-ge-1',
      type: 'mc',
      prompt: 'What line at 0° latitude splits Earth into Northern and Southern Hemispheres?',
      choices: ['The Equator', 'The Prime Meridian', 'The North Pole', 'The Ohio River'],
      answer: 'The Equator',
      explanation: 'The Equator is the imaginary 0° latitude line halfway between the North and South Poles.',
    },
    {
      id: 'g4-soc-ge-2',
      type: 'mc',
      prompt: 'Which map tool compares inches on a map to real miles?',
      choices: ['Map scale', 'Compass rose', 'Map title', 'Map border'],
      answer: 'Map scale',
      explanation: 'A map scale shows how distance on a map matches actual distance on the ground.',
    },
    {
      id: 'g4-soc-ge-3',
      type: 'mc',
      prompt: 'Which U.S. region is called "America’s Breadbasket" for its corn and wheat?',
      choices: ['The Midwest', 'The Northeast', 'The Southwest', 'The West Coast'],
      answer: 'The Midwest',
      explanation: 'The Midwest has flat, fertile plains ideal for growing grain crops like corn, soybeans, and wheat.',
    },
    {
      id: 'g4-soc-ge-4',
      type: 'mc',
      prompt: 'Which mountain range runs through the eastern United States?',
      choices: ['The Appalachian Mountains', 'The Rocky Mountains', 'The Sierra Nevada', 'The Andes Mountains'],
      answer: 'The Appalachian Mountains',
      explanation: 'The Appalachian Mountains stretch from Maine to Georgia in eastern North America.',
    },
    {
      id: 'g4-soc-ge-5',
      type: 'mc',
      prompt: 'Lines of longitude measure distance east or west of what 0° line?',
      choices: ['The Prime Meridian', 'The Equator', 'The Mississippi River', 'The Atlantic Coast'],
      answer: 'The Prime Meridian',
      explanation: 'Longitude lines run pole to pole and measure distance east or west of the Prime Meridian.',
    },
    {
      id: 'g4-soc-ge-6',
      type: 'mc',
      prompt: 'In which U.S. region is the state of Ohio located?',
      choices: ['The Midwest', 'The Southwest', 'The Pacific West', 'New England'],
      answer: 'The Midwest',
      explanation: 'Ohio is part of the Midwest region, bordered by Lake Erie to the north and the Ohio River.',
    },
  ],
}

const G4_SOC_OHIO_HIST_PRINCIPLE: Principle = {
  id: 'p-g4-soc-ohio-hist',
  title: 'Ohio Mound Builders, Northwest Ordinance & Statehood',
  standard: 'OH.4.SS.2',
  summary: 'Adena, Hopewell, and Fort Ancient built earthworks; the Northwest Ordinance led to 1803 statehood.',
  bank: [
    {
      id: 'g4-soc-oh-1',
      type: 'mc',
      prompt: 'Why did ancient Adena and Hopewell peoples build earthwork mounds in Ohio?',
      choices: ['For burials, ceremonies, and gathering places', 'To block modern highways', 'To store coal for steamboats', 'To ski down in winter'],
      answer: 'For burials, ceremonies, and gathering places',
      explanation: 'Prehistoric Indigenous groups in Ohio built thousands of earthen mounds for sacred ceremonies and burials.',
    },
    {
      id: 'g4-soc-oh-2',
      type: 'mc',
      prompt: 'What famous effigy mound in Adams County, Ohio is shaped like a snake?',
      choices: ['Serpent Mound', 'Cahokia Pyramid', 'Mount Rushmore', 'Plymouth Rock'],
      answer: 'Serpent Mound',
      explanation: 'Serpent Mound is a 1,348-foot-long prehistoric effigy mound shaped like a curving snake in southern Ohio.',
    },
    {
      id: 'g4-soc-oh-3',
      type: 'mc',
      prompt: 'What did the Northwest Ordinance of 1787 ban in the Northwest Territory?',
      choices: ['Slavery', 'Public schools', 'Farming corn', 'River travel'],
      answer: 'Slavery',
      explanation: 'The Northwest Ordinance of 1787 outlawed slavery in the territory and encouraged public education.',
    },
    {
      id: 'g4-soc-oh-4',
      type: 'mc',
      prompt: 'In what year did Ohio become the 17th state of the United States?',
      choices: ['1803', '1492', '1776', '1920'],
      answer: '1803',
      explanation: 'Following the rules of the Northwest Ordinance, Ohio achieved statehood in 1803.',
    },
    {
      id: 'g4-soc-oh-5',
      type: 'mc',
      prompt: 'Which town served as Ohio’s very first state capital in 1803?',
      choices: ['Chillicothe', 'Toledo', 'Akron', 'Dayton'],
      answer: 'Chillicothe',
      explanation: 'Chillicothe was Ohio’s first state capital in 1803 before the capital permanently moved to Columbus.',
    },
    {
      id: 'g4-soc-oh-6',
      type: 'mc',
      prompt: 'What do copper and obsidian artifacts in Ohio Hopewell mounds prove?',
      choices: ['They traded across North America.', 'They only stayed in one small cave.', 'They bought metal from Europe.', 'Volcanoes erupted in Columbus.'],
      answer: 'They traded across North America.',
      explanation: 'Copper from Lake Superior and obsidian from the Rocky Mountains show vast Hopewell trade networks.',
    },
  ],
}

const G4_SOC_EXPLORATION_PRINCIPLE: Principle = {
  id: 'p-g4-soc-exploration',
  title: 'European Exploration, Fur Trade & Frontier Conflicts',
  standard: 'OH.4.SS.3',
  summary: 'French and British competed for the Ohio River Valley fur trade leading to the French and Indian War.',
  bank: [
    {
      id: 'g4-soc-ex-1',
      type: 'mc',
      prompt: 'What valuable animal pelt drove French and British traders to Ohio in the 1700s?',
      choices: ['Beaver furs', 'Bison horns', 'Seal blubber', 'Alligator hides'],
      answer: 'Beaver furs',
      explanation: 'Beaver pelts were in high demand in Europe for making fashionable, waterproof felt hats.',
    },
    {
      id: 'g4-soc-ex-2',
      type: 'mc',
      prompt: 'Which major waterway in Ohio connected fur traders to the Mississippi River?',
      choices: ['The Ohio River', 'The Hudson River', 'The Rio Grande', 'The Colorado River'],
      answer: 'The Ohio River',
      explanation: 'The Ohio River provided a direct travel corridor from western Pennsylvania through to the Mississippi River.',
    },
    {
      id: 'g4-soc-ex-3',
      type: 'mc',
      prompt: 'Who fought each other in the French and Indian War over Ohio land?',
      choices: ['Great Britain against France and Native allies', 'Spain against Portugal', 'China against Japan', 'Canada against Mexico'],
      answer: 'Great Britain against France and Native allies',
      explanation: 'Both Britain and France claimed the fertile Ohio Valley, sparking a nine-year war starting in 1754.',
    },
    {
      id: 'g4-soc-ex-4',
      type: 'mc',
      prompt: 'What treaty ended the French and Indian War in 1763?',
      choices: ['The Treaty of Paris', 'The Treaty of Greenville', 'The Mayflower Compact', 'The Declaration of Independence'],
      answer: 'The Treaty of Paris',
      explanation: 'The 1763 Treaty of Paris gave Britain control over French land east of the Mississippi River.',
    },
    {
      id: 'g4-soc-ex-5',
      type: 'mc',
      prompt: 'What was the Proclamation of 1763 meant to do?',
      choices: ['Prevent British colonists from settling west of Appalachians', 'Free all enslaved workers in Virginia', 'Declare war on Spain', 'Sell Ohio land to France'],
      answer: 'Prevent British colonists from settling west of Appalachians',
      explanation: 'King George III issued the proclamation to stop colonial expansion into Indigenous lands west of the mountains.',
    },
    {
      id: 'g4-soc-ex-6',
      type: 'mc',
      prompt: 'What was Marietta, Ohio known for when founded in 1788?',
      choices: ['The first permanent American settlement in Northwest Territory', 'The location of the First Continental Congress', 'The site of the Boston Tea Party', 'The largest gold mine in America'],
      answer: 'The first permanent American settlement in Northwest Territory',
      explanation: 'Marietta was founded along the Muskingum and Ohio Rivers in 1788 as the territory’s first settlement.',
    },
  ],
}

const G4_SOC_CIVICS_PRINCIPLE: Principle = {
  id: 'p-g4-soc-civics',
  title: 'Three Branches of Government & Citizens’ Rights',
  standard: 'C3.D2.Civ.1.3-5',
  summary: 'Legislative makes laws, Executive enforces laws, and Judicial interprets laws under constitutions.',
  bank: [
    {
      id: 'g4-soc-cv-1',
      type: 'mc',
      prompt: 'Which branch of government makes federal laws in Congress?',
      choices: ['The Legislative Branch', 'The Executive Branch', 'The Judicial Branch', 'The City Council'],
      answer: 'The Legislative Branch',
      explanation: 'The Legislative Branch (Congress: Senate and House of Representatives) writes and votes on laws.',
    },
    {
      id: 'g4-soc-cv-2',
      type: 'mc',
      prompt: 'Who leads the Executive Branch of the United States government?',
      choices: ['The President', 'The Chief Justice', 'The Speaker of the House', 'The Mayor'],
      answer: 'The President',
      explanation: 'The President heads the Executive Branch and makes sure federal laws are carried out.',
    },
    {
      id: 'g4-soc-cv-3',
      type: 'mc',
      prompt: 'What are the first ten amendments to the U.S. Constitution called?',
      choices: ['The Bill of Rights', 'The Declaration of Independence', 'The Mayflower Compact', 'The Articles of Confederation'],
      answer: 'The Bill of Rights',
      explanation: 'The Bill of Rights is the first ten amendments, protecting freedoms like speech and religion.',
    },
    {
      id: 'g4-soc-cv-4',
      type: 'mc',
      prompt: 'Which branch includes the Supreme Court and interprets our laws?',
      choices: ['The Judicial Branch', 'The Legislative Branch', 'The Executive Branch', 'The Postal Service'],
      answer: 'The Judicial Branch',
      explanation: 'The Judicial Branch interprets the meaning of laws and applies the U.S. Constitution.',
    },
    {
      id: 'g4-soc-cv-5',
      type: 'mc',
      prompt: 'What is it called when the President refuses to sign a bill?',
      choices: ['A veto', 'A pardon', 'A treaty', 'A ballot'],
      answer: 'A veto',
      explanation: 'A veto is the President’s power to reject a bill passed by Congress, checking legislative power.',
    },
    {
      id: 'g4-soc-cv-6',
      type: 'mc',
      prompt: 'Why does the Constitution divide government into three branches?',
      choices: ['To provide checks and balances on power', 'To make one person a king', 'To stop citizens from voting', 'To eliminate all courts'],
      answer: 'To provide checks and balances on power',
      explanation: 'Checks and balances prevent any single branch of government from becoming too powerful.',
    },
  ],
}

const G4_SOC_ECON_PRINCIPLE: Principle = {
  id: 'p-g4-soc-econ',
  title: 'Scarcity, Opportunity Cost, Goods/Services & Markets',
  standard: 'C3.D2.Eco.1.3-5',
  summary: 'Scarcity means limited resources; opportunity cost is the next best alternative given up.',
  bank: [
    {
      id: 'g4-soc-ec-1',
      type: 'mc',
      prompt: 'Liam picks a ball over a game. What is his opportunity cost?',
      choices: ['The board game he gave up', 'The soccer ball he bought', 'Both items together', 'Zero dollars'],
      answer: 'The board game he gave up',
      explanation: 'Opportunity cost is the next best choice you give up when you make a decision.',
    },
    {
      id: 'g4-soc-ec-2',
      type: 'mc',
      prompt: 'Which choice is a service rather than a physical good?',
      choices: ['A dentist cleaning your teeth', 'A loaf of fresh bread', 'A pair of running shoes', 'A history textbook'],
      answer: 'A dentist cleaning your teeth',
      explanation: 'A service is helpful work done for others, while a good is a physical object.',
    },
    {
      id: 'g4-soc-ec-3',
      type: 'mc',
      prompt: 'What happens to peach prices when a freeze ruins most of the crop?',
      choices: ['Prices rise because supply is low.', 'Prices drop to zero.', 'Supply doubles overnight.', 'Peaches become free.'],
      answer: 'Prices rise because supply is low.',
      explanation: 'When supply drops and demand stays high, scarcity pushes prices upward.',
    },
    {
      id: 'g4-soc-ec-4',
      type: 'mc',
      prompt: 'What does scarcity mean in economics?',
      choices: ['Wants are unlimited but resources are limited.', 'Every store has too many goods.', 'Money grows on trees.', 'Only gold has value.'],
      answer: 'Wants are unlimited but resources are limited.',
      explanation: 'Scarcity means there are not enough resources to satisfy every want at once.',
    },
    {
      id: 'g4-soc-ec-5',
      type: 'mc',
      prompt: 'In a bakery, what type of resource are the ovens and mixing bowls?',
      choices: ['Capital resources', 'Natural resources', 'Consumers', 'Taxes'],
      answer: 'Capital resources',
      explanation: 'Capital resources are man-made tools, machines, and buildings used to produce goods.',
    },
    {
      id: 'g4-soc-ec-6',
      type: 'mc',
      prompt: 'Trees, fresh water, and fertile soil are examples of what resource?',
      choices: ['Natural resources', 'Capital resources', 'Advertising campaigns', 'Synthetic polymers'],
      answer: 'Natural resources',
      explanation: 'Natural resources are raw materials supplied by nature without human alteration.',
    },
  ],
}

export const G4_SOCIAL_COURSE: Course = {
  id: 'g4-social',
  subject: 'social',
  grade: 4,
  title: 'Grade 4 Social Studies',
  subtitle: 'U.S. Geography, Ohio History, Government Branches, and Fundamental Economics',
  credits: 1.0,
  color: '#d97706',
  icon: '🌍',
  units: [
    // UNIT 1: Map skills & geography
    {
      id: 'g4-soc-u1',
      title: 'Unit 1: Map Skills, Grids & Coordinates',
      standards: ['C3.D2.Geo.1.3-5', 'C3.D2.Geo.2.3-5'],
      lessons: [
        {
          id: 'g4-soc-u1-l1',
          unitId: 'g4-soc-u1',
          title: 'Lesson 1: Latitude, Longitude & Hemispheres',
          kind: 'lesson',
          partOf: 'Map Coordinates',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/intro-to-history/v/latitude-and-longitude',
          videoTitle: 'Khan Academy: Latitude and Longitude',
          reading:
            'Latitude lines circle Earth east to west, measuring distance from the Equator (0°). Longitude lines run pole to pole, measuring distance from the Prime Meridian (0°).',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
        {
          id: 'g4-soc-u1-l2',
          unitId: 'g4-soc-u1',
          title: 'Lesson 2: Map Scales, Legends & Compass Rose',
          kind: 'lesson',
          partOf: 'Map Reading Tools',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/intro-to-history/v/map-keys-and-symbols',
          videoTitle: 'Khan Academy: Reading Map Scales and Legends',
          reading:
            'A map legend explains colors and symbols. The map scale converts map inches into real miles, and the compass rose points to cardinal and intermediate directions.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
        {
          id: 'g4-soc-u1-l3',
          unitId: 'g4-soc-u1',
          title: 'Lesson 3: Topographic & Thematic Map Reading',
          kind: 'lesson',
          partOf: 'Thematic Maps',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/intro-to-history/v/thematic-maps',
          videoTitle: 'Khan Academy: Thematic Maps',
          reading:
            'Thematic maps display specific geographic themes such as climate, population density, or natural resource distribution across regions.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
        {
          id: 'g4-soc-u1-l4',
          unitId: 'g4-soc-u1',
          title: 'Quiz 1: Map Grids & Coordinates Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/intro-to-history',
          videoTitle: 'Map Skills Review',
          reading:
            'Review assessment on locating coordinates with latitude and longitude, interpreting scale rulers, and understanding map symbols.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Regions of the United States
    {
      id: 'g4-soc-u2',
      title: 'Unit 2: Geographic Regions of the United States',
      standards: ['C3.D2.Geo.4.3-5'],
      lessons: [
        {
          id: 'g4-soc-u2-l1',
          unitId: 'g4-soc-u2',
          title: 'Lesson 1: The Midwest & Ohio’s Geography',
          kind: 'lesson',
          partOf: 'Midwest Region',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/colonial-north-america/early-colonies/v/the-american-midwest',
          videoTitle: 'Khan Academy: Regions of North America',
          reading:
            'Ohio is located in the fertile Midwest region. It is bordered by Lake Erie to the north and the Ohio River to the south, serving as a historic gateway for migration.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
        {
          id: 'g4-soc-u2-l2',
          unitId: 'g4-soc-u2',
          title: 'Lesson 2: Major U.S. Mountain Ranges & Waterways',
          kind: 'lesson',
          partOf: 'US Landforms',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/colonial-north-america/early-colonies/v/us-geography-and-landforms',
          videoTitle: 'Khan Academy: Major U.S. Mountains and Rivers',
          reading:
            'The Appalachian Mountains rise in the east, while the Rockies dominate the west. Major rivers like the Mississippi and Ohio enabled commerce and transport.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
        {
          id: 'g4-soc-u2-l3',
          unitId: 'g4-soc-u2',
          title: 'Lesson 3: The Great Lakes Basin & Water Highway',
          kind: 'lesson',
          partOf: 'Great Lakes Basin',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/colonial-north-america/early-colonies/v/great-lakes-geography',
          videoTitle: 'Khan Academy: The Great Lakes System',
          reading:
            'The five Great Lakes hold one-fifth of the world’s fresh surface water. Lake Erie creates a mild shoreline climate ideal for vineyards and orchard farming.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
        {
          id: 'g4-soc-u2-l4',
          unitId: 'g4-soc-u2',
          title: 'Quiz 2: U.S. Regions & Ohio Geography Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history',
          videoTitle: 'US Geography Quiz Review',
          reading:
            'Review assessment on Midwest agriculture, Appalachian plateau topography, Mississippi drainage river basin, and Great Lakes transport.',
          principles: [G4_SOC_GEO_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Ancient Ohio earthworks
    {
      id: 'g4-soc-u3',
      title: 'Unit 3: Prehistoric Indigenous Cultures & Mounds',
      standards: ['OH.4.SS.2'],
      lessons: [
        {
          id: 'g4-soc-u3-l1',
          unitId: 'g4-soc-u3',
          title: 'Lesson 1: Adena & Hopewell Earthwork Builders',
          kind: 'lesson',
          partOf: 'Mound Builders',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/student-resources',
          videoTitle: 'Ohio History Connection: Hopewell Ceremonial Earthworks',
          reading:
            'Between 800 BCE and 500 CE, the Adena and Hopewell cultures built massive earthen geometric enclosures and mounds across southern Ohio for astronomy and ceremonial gatherings.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
        {
          id: 'g4-soc-u3-l2',
          unitId: 'g4-soc-u3',
          title: 'Lesson 2: Serpent Mound & Hopewell Trade Networks',
          kind: 'lesson',
          partOf: 'Serpent Mound & Trade',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/visit/browse-historical-sites/serpent-mound',
          videoTitle: 'Ohio History Connection: The Great Serpent Mound',
          reading:
            'Serpent Mound in Adams County is the world’s largest effigy mound. Hopewell artifacts included copper from Lake Superior, shells from the Gulf, and obsidian from the Rockies.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
        {
          id: 'g4-soc-u3-l3',
          unitId: 'g4-soc-u3',
          title: 'Lesson 3: Indigenous Village Life & Agriculture',
          kind: 'lesson',
          partOf: 'Indigenous Villages',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/virtual-learning/early-american-indians',
          videoTitle: 'Ohio History Connection: Fort Ancient Village Life',
          reading:
            'Later prehistoric cultures like the Fort Ancient cultivated maize (corn), beans, and squash, building fortified roundhouse villages along fertile river valleys.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
        {
          id: 'g4-soc-u3-l4',
          unitId: 'g4-soc-u3',
          title: 'Quiz 3: Mound Builders & Trade Networks Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.ohiohistory.org',
          videoTitle: 'Indigenous Cultures Quiz Review',
          reading:
            'Review assessment on Adena burial mounds, Hopewell geometric earthworks, continental trade items (mica, copper, obsidian), and agricultural advances.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: European exploration & conflict
    {
      id: 'g4-soc-u4',
      title: 'Unit 4: European Exploration, Fur Trade & Frontier',
      standards: ['OH.4.SS.3'],
      lessons: [
        {
          id: 'g4-soc-u4-l1',
          unitId: 'g4-soc-u4',
          title: 'Lesson 1: The French and British Fur Trade',
          kind: 'lesson',
          partOf: 'Fur Trade',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/colonial-north-america/early-colonies/v/the-fur-trade',
          videoTitle: 'Khan Academy: The North American Fur Trade',
          reading:
            'Both the French and the British traded metal knives, kettles, and cloth with Indigenous tribes in exchange for beaver furs that were processed into stylish felt hats in Europe.',
          principles: [G4_SOC_EXPLORATION_PRINCIPLE],
        },
        {
          id: 'g4-soc-u4-l2',
          unitId: 'g4-soc-u4',
          title: 'Lesson 2: The French and Indian War in the Ohio Valley',
          kind: 'lesson',
          partOf: 'French & Indian War',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-seven-years-war/v/french-and-indian-war',
          videoTitle: 'Khan Academy: The French and Indian War',
          reading:
            'Rivalry over the Ohio Country sparked the French and Indian War in 1754. Britain’s victory in 1763 forced France to cede its territory east of the Mississippi.',
          principles: [G4_SOC_EXPLORATION_PRINCIPLE],
        },
        {
          id: 'g4-soc-u4-l3',
          unitId: 'g4-soc-u4',
          title: 'Lesson 3: Pontiac’s War & The Proclamation Line of 1763',
          kind: 'lesson',
          partOf: 'Frontier Resistance',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-french-and-indian-war/v/proclamation-of-1763',
          videoTitle: 'Khan Academy: Pontiac’s War and Proclamation Line',
          reading:
            'Ottawa leader Pontiac united Ohio Valley tribes to resist British settler encroachment. King George III issued the Proclamation of 1763 forbidding settlement past the Appalachians.',
          principles: [G4_SOC_EXPLORATION_PRINCIPLE],
        },
        {
          id: 'g4-soc-u4-l4',
          unitId: 'g4-soc-u4',
          title: 'Quiz 4: Fur Trade & Frontier Battles Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history',
          videoTitle: 'Frontier History Quiz Review',
          reading:
            'Review assessment on French voyageur trade posts, British land expansion, Beaver pelt barter economy, and the 1763 Proclamation line.',
          principles: [G4_SOC_EXPLORATION_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Northwest Ordinance & statehood
    {
      id: 'g4-soc-u5',
      title: 'Unit 5: Northwest Ordinance of 1787 & Statehood',
      isOhioExtension: true,
      standards: ['OH.4.SS.2'],
      lessons: [
        {
          id: 'g4-soc-u5-l1',
          unitId: 'g4-soc-u5',
          title: 'Lesson 1: The Northwest Ordinance Banning Slavery',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Northwest Ordinance',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/creating-a-nation/v/the-northwest-ordinance',
          videoTitle: 'Khan Academy: The Northwest Ordinance of 1787',
          reading:
            'Passed in 1787, the Northwest Ordinance established governance for new territories, outlawed slavery in the region, established public education, and guaranteed trial by jury.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
        {
          id: 'g4-soc-u5-l2',
          unitId: 'g4-soc-u5',
          title: 'Lesson 2: Ohio Statehood in 1803 & Early Capitals',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Ohio Statehood',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/student-resources',
          videoTitle: 'Ohio History Connection: Ohio Becomes the 17th State',
          reading:
            'Ohio drafted its first constitution in Chillicothe and officially joined the Union as the 17th state in 1803, with Edward Tiffin elected as its first governor.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
        {
          id: 'g4-soc-u5-l3',
          unitId: 'g4-soc-u5',
          title: 'Lesson 3: The 1802 Constitution & Government Origins',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Ohio Constitution',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/virtual-learning/early-ohio-government',
          videoTitle: 'Ohio History Connection: The 1802 Constitution',
          reading:
            'Ohio’s 1802 Constitution established a powerful General Assembly legislature, limited the governor’s veto power, and affirmed basic religious and trial rights.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
        {
          id: 'g4-soc-u5-l4',
          unitId: 'g4-soc-u5',
          title: 'Quiz 5: Ordinance of 1787 & Statehood Review',
          kind: 'lesson_review',
          isOhioExtension: true,
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.ohiohistory.org',
          videoTitle: 'Statehood Quiz Review',
          reading:
            'Review assessment on the Northwest Ordinance prohibition of slavery, the 60,000 population requirement for statehood, and the 1803 admission to the Union.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Transportation and economy
    {
      id: 'g4-soc-u6',
      title: 'Unit 6: Canals, Pioneer Economy & National Road',
      standards: ['OH.4.SS.3', 'C3.D2.Eco.1.3-5'],
      lessons: [
        {
          id: 'g4-soc-u6-l1',
          unitId: 'g4-soc-u6',
          title: 'Lesson 1: The Ohio & Erie Canal and Waterways',
          kind: 'lesson',
          partOf: 'Ohio Canals',
          estimatedMinutes: 10,
          videoUrl: 'https://ohiodnr.gov/discover-and-learn/history-culture/canals-in-ohio',
          videoTitle: 'Ohio DNR: The Canal Era in Ohio',
          reading:
            'Constructed in the 1820s and 1830s, the Ohio & Erie Canal connected Lake Erie at Cleveland to the Ohio River at Portsmouth, reducing crop shipping costs by 90 percent.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u6-l2',
          unitId: 'g4-soc-u6',
          title: 'Lesson 2: Pioneer Agriculture, Mills & the National Road',
          kind: 'lesson',
          partOf: 'Pioneer Trade',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/student-resources',
          videoTitle: 'Ohio History Connection: The National Road in Ohio',
          reading:
            'The National Road reached Zanesville and Columbus, allowing stagecoaches and Conestoga wagons to transport grain, wool, and timber to bustling eastern cities.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u6-l3',
          unitId: 'g4-soc-u6',
          title: 'Lesson 3: The Steam Railroad Revolution in Ohio',
          kind: 'lesson',
          partOf: 'Railroads',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/virtual-learning/ohio-railroads',
          videoTitle: 'Ohio History Connection: Early Railroads in Ohio',
          reading:
            'By the 1850s, steam locomotives rapidly superseded canal boats, operating year-round through winter ice and creating industrial boom cities across Ohio.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u6-l4',
          unitId: 'g4-soc-u6',
          title: 'Quiz 6: Canals & Pioneer Economy Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.ohiohistory.org',
          videoTitle: 'Transportation Quiz Review',
          reading:
            'Review assessment on lock systems on the Ohio & Erie Canal, National Road stagecoach travel, grist mills, and railroad expansion.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
      ],
    },

    // UNIT 7: Government branches and civics
    {
      id: 'g4-soc-u7',
      title: 'Unit 7: Three Branches of Government & Civics',
      standards: ['C3.D2.Civ.1.3-5', 'C3.D2.Civ.2.3-5'],
      lessons: [
        {
          id: 'g4-soc-u7-l1',
          unitId: 'g4-soc-u7',
          title: 'Lesson 1: Three Branches & Checks and Balances',
          kind: 'lesson',
          partOf: 'Branches of Government',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/creating-a-nation/v/three-branches-of-government',
          videoTitle: 'Khan Academy: The Three Branches of Government',
          reading:
            'The Legislative Branch writes laws in Congress, the Executive Branch carries out laws under the President, and the Judicial Branch interprets laws in the courts.',
          principles: [G4_SOC_CIVICS_PRINCIPLE],
        },
        {
          id: 'g4-soc-u7-l2',
          unitId: 'g4-soc-u7',
          title: 'Lesson 2: The Bill of Rights & Active Citizenship',
          kind: 'lesson',
          partOf: 'Citizen Rights',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/creating-a-nation/v/the-bill-of-rights',
          videoTitle: 'Khan Academy: The Bill of Rights',
          reading:
            'The first ten amendments guarantee basic individual freedoms, including free speech and religion. Good citizens participate by voting and obeying laws.',
          principles: [G4_SOC_CIVICS_PRINCIPLE],
        },
        {
          id: 'g4-soc-u7-l3',
          unitId: 'g4-soc-u7',
          title: 'Lesson 3: State and Local Town Hall Governance',
          kind: 'lesson',
          partOf: 'Local Governance',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-articles-of-confederation/v/state-and-local-governments',
          videoTitle: 'Khan Academy: State and Local Government',
          reading:
            'While federal laws apply nationwide, Ohio state laws and city councils handle local school districts, fire departments, parks, and road maintenance.',
          principles: [G4_SOC_CIVICS_PRINCIPLE],
        },
        {
          id: 'g4-soc-u7-l4',
          unitId: 'g4-soc-u7',
          title: 'Quiz 7: Branches of Government & Civics Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history',
          videoTitle: 'Civics Quiz Review',
          reading:
            'Review assessment on legislative bills, executive enforcement, Supreme Court judicial review, First Amendment rights, and civic voting duties.',
          principles: [G4_SOC_CIVICS_PRINCIPLE],
        },
      ],
    },

    // UNIT 8: Fundamental economics
    {
      id: 'g4-soc-u8',
      title: 'Unit 8: Fundamental Economics: Scarcity & Markets',
      standards: ['C3.D2.Eco.1.3-5', 'C3.D2.Eco.3.3-5'],
      lessons: [
        {
          id: 'g4-soc-u8-l1',
          unitId: 'g4-soc-u8',
          title: 'Lesson 1: Scarcity and Opportunity Cost',
          kind: 'lesson',
          partOf: 'Opportunity Cost',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/economics-finance-domain/microeconomics/basic-economic-concepts-gen-micro/scarcity-and-choice/v/scarcity',
          videoTitle: 'Khan Academy: Scarcity and Opportunity Cost',
          reading:
            'Scarcity exists because human wants exceed available resources. Opportunity cost represents the value of the next best choice given up when deciding.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u8-l2',
          unitId: 'g4-soc-u8',
          title: 'Lesson 2: Natural, Human & Capital Resources',
          kind: 'lesson',
          partOf: 'Economic Resources',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/economics-finance-domain/microeconomics/basic-economic-concepts-gen-micro/scarcity-and-choice/v/factors-of-production',
          videoTitle: 'Khan Academy: Factors of Production',
          reading:
            'Businesses combine natural resources (soil, water), human labor (workers), and capital resources (tools, tractors, buildings) to produce goods and services.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u8-l3',
          unitId: 'g4-soc-u8',
          title: 'Lesson 3: Supply, Demand & Market Pricing',
          kind: 'lesson',
          partOf: 'Market Prices',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium/supply-demand-intro/v/law-of-demand',
          videoTitle: 'Khan Academy: Supply, Demand, and Price',
          reading:
            'When consumer demand rises faster than supply, market prices tend to increase. Competition among producers encourages higher quality and lower consumer costs.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u8-l4',
          unitId: 'g4-soc-u8',
          title: 'Quiz 8: Economics, Resources & Markets Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/economics-finance-domain',
          videoTitle: 'Economics Quiz Review',
          reading:
            'Review assessment on opportunity cost tradeoffs, distinguishing natural from capital goods, and analyzing consumer supply and demand.',
          principles: [G4_SOC_ECON_PRINCIPLE],
        },
      ],
    },

    // UNIT 9: Course Challenge
    {
      id: 'g4-soc-u9',
      title: 'Unit 9: Grade 4 Social Studies Course Challenge',
      standards: ['OH.4.SS', 'C3.Framework'],
      lessons: [
        {
          id: 'g4-soc-u9-l1',
          unitId: 'g4-soc-u9',
          title: 'Ohio History & Indigenous Heritage Review',
          kind: 'lesson_review',
          partOf: 'Course Challenge',
          estimatedMinutes: 15,
          videoUrl: 'https://www.ohiohistory.org',
          videoTitle: 'Ohio History Synthesis Review',
          reading:
            'Spiral review covering Adena and Hopewell mounds, the French and Indian war, Northwest Ordinance anti-slavery laws, and 1803 statehood.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE, G4_SOC_EXPLORATION_PRINCIPLE],
        },
        {
          id: 'g4-soc-u9-l2',
          unitId: 'g4-soc-u9',
          title: 'Geography, Civics & Economics Review',
          kind: 'lesson_review',
          partOf: 'Course Challenge',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/humanities/us-history',
          videoTitle: 'Civics and Economics Synthesis Review',
          reading:
            'Spiral review covering latitude and longitude, the three branches of government, the Bill of Rights, and economic opportunity cost.',
          principles: [G4_SOC_GEO_PRINCIPLE, G4_SOC_CIVICS_PRINCIPLE, G4_SOC_ECON_PRINCIPLE],
        },
        {
          id: 'g4-soc-u9-l3',
          unitId: 'g4-soc-u9',
          title: 'Grade 4 Social Studies Comprehensive Course Challenge',
          kind: 'lesson_review',
          partOf: 'Course Challenge',
          estimatedMinutes: 20,
          videoUrl: 'https://www.ohiohistory.org',
          videoTitle: 'Grade 4 Social Studies Final Exam',
          reading:
            'Final capstone evaluation across all Grade 4 Social Studies geography, history, government, and economic standards.',
          principles: [G4_SOC_OHIO_HIST_PRINCIPLE, G4_SOC_CIVICS_PRINCIPLE],
        },
      ],
    },

    // UNIT 10: Explore Ohio history projects (enrichment)
    {
      id: 'g4-soc-u10',
      title: 'Unit 10: Explore Ohio History & Culture Projects',
      kind: 'explore',
      standards: ['OH.4.SS.2', 'OH.4.SS.3'],
      lessons: [],
      exploreItems: [
        {
          id: 'g4-soc-exp-statehouse',
          title: 'Virtual Field Trip: The Ohio Statehouse in Columbus',
          type: 'virtual_tour',
          description:
            'Take a 360-degree interactive tour of the Greek Revival Ohio Statehouse, including the Governor’s office, the Senate chamber, and the rotunda skylight.',
          url: 'https://www.ohiostatehouse.org/virtual-tour',
          estimatedMinutes: 20,
          reflectionPrompt: 'Which architectural detail in the Ohio Statehouse rotunda did you find most impressive?',
          requiresParentPin: false,
        },
        {
          id: 'g4-soc-exp-hopewell-earthworks',
          title: 'UNESCO World Heritage 3D Tour: Hopewell Ceremonial Earthworks',
          type: 'virtual_tour',
          description:
            'Explore high-resolution LiDAR and 3D renderings of the octagonal earthworks and mounds built by Indigenous architects over 2,000 years ago.',
          url: 'https://www.nps.gov/hocu/index.htm',
          estimatedMinutes: 20,
          reflectionPrompt: 'How do astronomical alignments in Hopewell earthworks show the builders were skilled engineers?',
          requiresParentPin: false,
        },
        {
          id: 'g4-soc-exp-pioneer-journal',
          title: 'Roleplay Simulation: 1830s Canal Packet Boat Captain',
          type: 'hands_on',
          description:
            'Write a 3-day fictional travel journal from the perspective of an Ohio canal packet boat passenger or mule driver traveling from Cleveland to Akron.',
          estimatedMinutes: 25,
          materials: ['Journal or parchment paper', 'Pencil or fountain pen'],
          steps: [
            'Pick your character (passenger, mule driver, or lock tender).',
            'Describe passing through one of Ohio’s stone canal locks.',
            'Describe cargo being carried (wheat sacks, iron plows, wool bales).',
            'Share what food you ate along the canal towpath.',
          ],
          reflectionPrompt: 'Why was traveling at 4 miles per hour on a canal boat considered fast and comfortable in 1835?',
          requiresParentPin: false,
        },
      ],
    },

    // UNIT 11: Teacher Resources & Pacing
    {
      id: 'g4-soc-u11',
      title: 'Unit 11: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['OH.4.SS', 'C3.Framework'],
      lessons: [],
      resources: [
        {
          id: 'g4-soc-res-pacing',
          title: 'Grade 4 Social Studies 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Curriculum roadmap aligning Ohio history, map skills, civics, and economic decision-making across the academic year.',
          body: `## Grade 4 Social Studies Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Map Skills, Grids & Coordinates (C3.Geo.1-2)
- **Weeks 5–8**: Unit 2 — Geographic Regions of the U.S. & Ohio (C3.Geo.4)
- **Weeks 9–13**: Unit 3 — Prehistoric Indigenous Cultures & Mounds (OH.4.SS.2)
- **Week 14**: Quarter 1 Geography & Early Inhabitants Review
- **Weeks 15–18**: Unit 4 — European Exploration, Fur Trade & Frontier (OH.4.SS.3)
- **Weeks 19–22**: Unit 5 — Northwest Ordinance of 1787 & Statehood (OH.4.SS.2)
- **Weeks 23–26**: Unit 6 — Canals, Pioneer Economy & National Road (OH.4.SS.3)
- **Week 27**: Quarter 2 & 3 Ohio History Checkpoint
- **Weeks 28–31**: Unit 7 — Three Branches of Government & Civics (C3.Civ.1-2)
- **Weeks 32–34**: Unit 8 — Fundamental Economics: Scarcity & Markets (C3.Eco.1-3)
- **Weeks 35–36**: Unit 9 — Capstone Statehouse Tour & Pioneer Presentations`,
        },
        {
          id: 'g4-soc-res-standards',
          title: 'Ohio Learning Standards for Social Studies: Grade 4 Crosswalk',
          kind: 'standards_map',
          description:
            'Detailed alignment between Home-School-Lite units and Ohio Grade 4 Social Studies Content Statements.',
          body: `| Unit | Ohio Content Statement | Core Concepts |
|---|---|---|
| Unit 1 | Geography 10-12 | Map grids, cardinal directions, latitude/longitude, map scales |
| Unit 2 | Geography 13-14 | Midwest physical environments, Great Lakes, Appalachian plateau |
| Unit 3 | History 3 | Adena, Hopewell, Fort Ancient ceremonial mounds, trade networks |
| Unit 4 | History 4 | French/British contact, fur trade competition, Treaty of Paris |
| Unit 5 | History 5-6 | Northwest Ordinance of 1787, slavery prohibition, 1803 statehood |
| Unit 6 | History 7-8, Econ 20 | Ohio & Erie Canal, National Road, agricultural market expansion |
| Unit 7 | Government 15-18 | 3 branches, checks and balances, Bill of Rights, citizenship |
| Unit 8 | Economics 19, 21-23 | Scarcity, opportunity cost, productive resources, market price |`,
        },
        {
          id: 'g4-soc-res-primary-pack',
          title: 'Ohio Primary Source Document Pack & Analysis Guide',
          kind: 'printable',
          description:
            'Excerpts of the Northwest Ordinance of 1787 and historic canal maps formatted for student analysis.',
          body: `## Primary Source Spotlight: The Northwest Ordinance of 1787

> "Art. 3. Religion, morality, and knowledge, being necessary to good government and the happiness of mankind, schools and the means of education shall forever be encouraged."
>
> "Art. 6. There shall be neither slavery nor involuntary servitude in the said territory, otherwise than in the punishment of crimes whereof the party shall have been duly convicted..."

### Student Discussion Prompts:
1. What does Article 3 say about the importance of public schools in Ohio?
2. How did Article 6 shape the history and culture of Ohio compared to southern states across the river?`,
        },
      ],
    },
  ],
}
