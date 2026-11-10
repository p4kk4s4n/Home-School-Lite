import { Course, QuestionBankItem } from '../../types'

const SOC_GEOGRAPHY_BANK: QuestionBankItem[] = [
  {
    id: 'g6-soc-geo1',
    type: 'mc',
    prompt: 'What imaginary lines run parallel to the Equator and measure degrees North and South?',
    choices: ['Latitude lines', 'Longitude meridians', 'Prime Meridians', 'Time zones'],
    answer: 'Latitude lines',
    explanation: 'Lines of latitude run horizontally east-west around the globe, measuring distance north or south of the Equator (0°).',
  },
  {
    id: 'g6-soc-geo2',
    type: 'mc',
    prompt: 'What line of 0° longitude passes through Greenwich, England?',
    choices: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'International Date Line'],
    answer: 'Prime Meridian',
    explanation: 'The Prime Meridian is the reference line at 0° longitude measuring degrees east and west.',
  },
  {
    id: 'g6-soc-geo3',
    type: 'mc',
    prompt: 'What type of map shows elevation, mountains, valleys, and landforms?',
    choices: ['Topographic (physical) map', 'Political map', 'Climate map', 'Population density map'],
    answer: 'Topographic (physical) map',
    explanation: 'Physical and topographic maps use contour lines and shading to display landscape elevations and terrain.',
  },
  {
    id: 'g6-soc-geo4',
    type: 'mc',
    prompt: 'What does a political map primarily show?',
    choices: ['Government boundaries, countries, states, and capital cities', 'Rock layers and tectonic plates', 'Deep ocean depths', 'Average yearly snowfall'],
    answer: 'Government boundaries, countries, states, and capital cities',
    explanation: 'Political maps display human-created political borders between nations, states, and territories.',
  },
  {
    id: 'g6-soc-geo5',
    type: 'mc',
    prompt: 'What is an example of human-environment interaction?',
    choices: [
      'Building irrigation canals to water desert farm crops',
      'The rotation of Earth around the sun',
      'Ocean tides rising and falling',
      'Volcanic eruptions on uninhabited islands',
    ],
    answer: 'Building irrigation canals to water desert farm crops',
    explanation: 'Human-environment interaction describes how people adapt to, depend on, and modify their natural surroundings.',
  },
  {
    id: 'g6-soc-geo6',
    type: 'mc',
    prompt: 'Which map feature connects map distance to real-world ground distance?',
    choices: ['Map scale', 'Compass rose', 'Legend key', 'Map title'],
    answer: 'Map scale',
    explanation: 'The scale bar translates centimeters or inches on the map into real-world miles or kilometers.',
  },
  {
    id: 'g6-soc-geo7',
    type: 'mc',
    prompt: 'Which hemisphere contains both North America and South America?',
    choices: ['Western Hemisphere', 'Eastern Hemisphere', 'Southern Hemisphere only', 'Northern Polar Hemisphere only'],
    answer: 'Western Hemisphere',
    explanation: 'The Americas are situated west of the Prime Meridian in the Western Hemisphere.',
  },
  {
    id: 'g6-soc-geo8',
    type: 'mc',
    prompt: 'What climate zone lies between the Tropic of Cancer and Tropic of Capricorn?',
    choices: ['Tropical zone', 'Polar zone', 'Temperate zone', 'Subarctic zone'],
    answer: 'Tropical zone',
    explanation: 'The tropics receive direct sunlight year-round, resulting in warm, tropical climates.',
  },
]

const SOC_RIVER_BANK: QuestionBankItem[] = [
  {
    id: 'g6-soc-riv1',
    type: 'mc',
    prompt: 'Between which two rivers did the ancient civilization of Mesopotamia develop?',
    choices: ['Tigris and Euphrates', 'Nile and Amazon', 'Indus and Ganges', 'Yellow and Yangtze'],
    answer: 'Tigris and Euphrates',
    explanation: 'Mesopotamia means "land between the rivers" in Greek, referring to the Tigris and Euphrates in modern-day Iraq.',
  },
  {
    id: 'g6-soc-riv2',
    type: 'mc',
    prompt: 'Why were annual river floods essential to early civilizations in Egypt and Mesopotamia?',
    choices: ['They deposited nutrient-rich silt for farming', 'They froze into bridges', 'They washed away all buildings', 'They brought salt water'],
    answer: 'They deposited nutrient-rich silt for farming',
    explanation: 'River floods deposited fertile black silt across floodplains, allowing bountiful agricultural harvests in dry lands.',
  },
  {
    id: 'g6-soc-riv3',
    type: 'mc',
    prompt: 'What ancient Babylonian legal code is known for the principle "an eye for an eye"?',
    choices: ['Code of Hammurabi', 'Justinian Code', 'Magna Carta', 'Twelve Tables'],
    answer: 'Code of Hammurabi',
    explanation: 'King Hammurabi inscribed 282 legal statutes on a stone stele to unify Babylonian justice.',
  },
  {
    id: 'g6-soc-riv4',
    type: 'mc',
    prompt: 'What wedge-shaped writing system was invented by the Sumerians on clay tablets?',
    choices: ['Cuneiform', 'Hieroglyphics', 'Phoenician alphabet', 'Calligraphy'],
    answer: 'Cuneiform',
    explanation: 'Cuneiform, written with reed styluses on wet clay, is one of the earliest writing systems in human history.',
  },
  {
    id: 'g6-soc-riv5',
    type: 'mc',
    prompt: 'What famous river was central to ancient Egyptian life, religion, and agriculture?',
    choices: ['Nile River', 'Danube River', 'Rhine River', 'Congo River'],
    answer: 'Nile River',
    explanation: 'The Nile flowed north through Egypt, earning Egypt the historical title "Gift of the Nile."',
  },
  {
    id: 'g6-soc-riv6',
    type: 'mc',
    prompt: 'What ancient South Asian cities showed advanced urban planning with brick drains and sewer systems?',
    choices: ['Harappa and Mohenjo-Daro', 'Athens and Sparta', 'Rome and Carthage', 'Thebes and Memphis'],
    answer: 'Harappa and Mohenjo-Daro',
    explanation: 'The Indus Valley civilization built remarkable planned cities with standardized brick dimensions and municipal drainage.',
  },
  {
    id: 'g6-soc-riv7',
    type: 'mc',
    prompt: 'What ancient trade network connected China, Central Asia, and the Mediterranean world?',
    choices: ['The Silk Road', 'The Trans-Saharan route', 'The Royal Road', 'The Northwest Passage'],
    answer: 'The Silk Road',
    explanation: 'The Silk Road was an overland network that exchanged silk, spices, papermaking, and philosophical ideas.',
  },
  {
    id: 'g6-soc-riv8',
    type: 'mc',
    prompt: 'What ancient river valley civilization developed along the Yellow (Huang He) River?',
    choices: ['Ancient China', 'Ancient Greece', 'Ancient Rome', 'Mesopotamia'],
    answer: 'Ancient China',
    explanation: 'Early Chinese civilization emerged along the fertile loess soil banks of the Yellow River.',
  },
]

const SOC_MEDITERRANEAN_BANK: QuestionBankItem[] = [
  {
    id: 'g6-soc-med1',
    type: 'mc',
    prompt: 'In which Greek city-state did citizens vote directly on laws in an assembly?',
    choices: ['Athens', 'Sparta', 'Troy', 'Corinth'],
    answer: 'Athens',
    explanation: 'Athens developed the world’s first direct democracy where free adult male citizens debated and voted on laws.',
  },
  {
    id: 'g6-soc-med2',
    type: 'mc',
    prompt: 'How did the Spartan city-state differ most noticeably from Athens?',
    choices: [
      'Sparta prioritized military training and discipline above all',
      'Sparta banned all sports and athletics',
      'Sparta had no soldiers',
      'Sparta was ruled by ocean sailors',
    ],
    answer: 'Sparta prioritized military training and discipline above all',
    explanation: 'Spartan society centered on strict military training, physical fitness, and an oligarchic warrior culture.',
  },
  {
    id: 'g6-soc-med3',
    type: 'mc',
    prompt: 'What type of government did the Roman Republic establish after overthrowing its kings?',
    choices: ['A representative republic where citizens elected leaders', 'A direct democracy where all slaves voted', 'An absolute monarchy', 'A feudal kingdom'],
    answer: 'A representative republic where citizens elected leaders',
    explanation: 'In the Roman Republic, citizens elected consuls, tribunes, and senators to represent them in government.',
  },
  {
    id: 'g6-soc-med4',
    type: 'mc',
    prompt: 'What engineering achievement allowed Romans to transport fresh mountain water across miles into cities?',
    choices: ['Aqueducts with stone arches', 'Steam-powered pumps', 'Electric pipes', 'Wooden canoes'],
    answer: 'Aqueducts with stone arches',
    explanation: 'Roman aqueducts used gravity and durable stone arches to convey billions of gallons of clean water to baths and fountains.',
  },
  {
    id: 'g6-soc-med5',
    type: 'mc',
    prompt: 'What was the Pax Romana?',
    choices: ['A 200-year era of peace across the Roman Empire', 'A Roman war ship', 'A gladiator stadium', 'A famous Roman poet'],
    answer: 'A 200-year era of peace across the Roman Empire',
    explanation: 'The Pax Romana (Roman Peace) was an era of commercial growth, road building, and internal stability started under Augustus.',
  },
  {
    id: 'g6-soc-med6',
    type: 'mc',
    prompt: 'Which famous Greek philosopher was known for questioning assumptions using dialogue?',
    choices: ['Socrates', 'Julius Caesar', 'Alexander the Great', 'Homer'],
    answer: 'Socrates',
    explanation: 'The Socratic method uses structured questioning to encourage critical thinking and philosophical self-examination.',
  },
  {
    id: 'g6-soc-med7',
    type: 'mc',
    prompt: 'Which written Roman laws were posted in the Forum for all citizens?',
    choices: ['The Twelve Tables', 'The Ten Commandments', 'The US Constitution', 'The Justinian Code'],
    answer: 'The Twelve Tables',
    explanation: 'The Twelve Tables inscribed Roman civil law on bronze tablets so rights and penalties were public.',
  },
  {
    id: 'g6-soc-med8',
    type: 'mc',
    prompt: 'What athletic festival originated in ancient Greece in 776 BCE to honor Zeus?',
    choices: ['The Olympic Games', 'The Roman Colosseum fights', 'The World Cup', 'The Panathenaic Regatta'],
    answer: 'The Olympic Games',
    explanation: 'Greek city-states declared truces to gather at Olympia every four years for athletic competitions.',
  },
]

const SOC_ECON_BANK: QuestionBankItem[] = [
  {
    id: 'g6-soc-ec1',
    type: 'mc',
    prompt: 'What basic economic concept states that human wants exceed available resources?',
    choices: ['Scarcity', 'Surplus', 'Inflation', 'Depreciation'],
    answer: 'Scarcity',
    explanation: 'Scarcity is the fundamental economic problem: resources (time, money, materials) are limited, while human wants are unlimited.',
  },
  {
    id: 'g6-soc-ec2',
    type: 'mc',
    prompt: 'What is opportunity cost in economics?',
    choices: [
      'The value of the next best choice given up',
      'The price tag in dollars printed on an item',
      'The sales tax collected by local government',
      'The cost to ship a package by airplane',
    ],
    answer: 'The value of the next best choice given up',
    explanation: 'Opportunity cost is whatever you sacrifice when you choose one option over another (e.g. studying vs. playing video games).',
  },
  {
    id: 'g6-soc-ec3',
    type: 'mc',
    prompt: 'What happens to an item’s price when demand rises and supply stays low?',
    choices: ['The price tends to rise', 'The price drops to zero', 'The price stays permanently unchanged', 'Money loses all value'],
    answer: 'The price tends to rise',
    explanation: 'When many buyers compete for a limited supply of goods, market prices typically increase.',
  },
  {
    id: 'g6-soc-ec4',
    type: 'mc',
    prompt: 'Why do nations trade goods and services with one another?',
    choices: [
      'Countries trade for goods they cannot produce efficiently',
      'Trade is legally required by world kings',
      'All countries produce identical crops',
      'Ships cannot travel in straight lines',
    ],
    answer: 'Countries trade for goods they cannot produce efficiently',
    explanation: 'Countries specialize in what their natural resources and climate produce best, trading surpluses for other necessities.',
  },
  {
    id: 'g6-soc-ec5',
    type: 'mc',
    prompt: 'What is the term for goods sold to another country?',
    choices: ['Exports', 'Imports', 'Tariffs', 'Subsidies'],
    answer: 'Exports',
    explanation: 'Exports are domestically produced goods shipped abroad for international sale.',
  },
  {
    id: 'g6-soc-ec6',
    type: 'mc',
    prompt: 'What medium of exchange replaced bartering in ancient civilizations?',
    choices: ['Standardized minted coins and currency', 'Heavy stone boulders', 'Glass bottles', 'Raw grain bags exclusively'],
    answer: 'Standardized minted coins and currency',
    explanation: 'Stamped metal coins provided a durable, portable, and agreed-upon unit of value for commercial trade.',
  },
  {
    id: 'g6-soc-ec7',
    type: 'mc',
    prompt: 'What is specialization in the workforce?',
    choices: [
      'Focusing on performing a specific job or craft skillfully',
      'Forcing everyone in a town to farm the same crop',
      'Working only on weekend holidays',
      'Refusing to trade with neighbors',
    ],
    answer: 'Focusing on performing a specific job or craft skillfully',
    explanation: 'Specialization allows individuals and regions to develop expert efficiency in particular crafts, medicine, or industries.',
  },
  {
    id: 'g6-soc-ec8',
    type: 'mc',
    prompt: 'What is inflation?',
    choices: [
      'A general rise in prices over time',
      'A decrease in population',
      'The speed at which money travels in banks',
      'The total number of coins minted in a year',
    ],
    answer: 'A general rise in prices over time',
    explanation: 'Inflation means everyday goods cost more dollars over time, reducing each dollar’s purchasing power.',
  },
]

const SOC_OHIO_BANK: QuestionBankItem[] = [
  {
    id: 'g6-soc-oh1',
    type: 'mc',
    prompt: 'Which 1787 federal law governed Ohio territory and banned slavery?',
    choices: ['Northwest Ordinance of 1787', 'Declaration of Independence', 'Monroe Doctrine', 'Emancipation Proclamation'],
    answer: 'Northwest Ordinance of 1787',
    explanation: 'The Northwest Ordinance of 1787 organized the Northwest Territory, set criteria for statehood, and outlawed slavery in the region.',
  },
  {
    id: 'g6-soc-oh2',
    type: 'mc',
    prompt: 'In what year did Ohio officially become the 17th state admitted to the United States?',
    choices: ['1803', '1776', '1865', '1901'],
    answer: '1803',
    explanation: 'President Thomas Jefferson approved the enabling act for Ohio’s statehood in 1803.',
  },
  {
    id: 'g6-soc-oh3',
    type: 'mc',
    prompt: 'How did Ohio play a major role in the historic Underground Railroad?',
    choices: [
      'Ohio provided critical escape routes north to Canada',
      'Ohio was a Confederate state',
      'Ohio banned all trains',
      'Ohio was completely unpopulated',
    ],
    answer: 'Ohio provided critical escape routes north to Canada',
    explanation: 'Ohio abolitionists maintained safe houses and secret routes across the state for freedom seekers escaping across the Ohio River.',
  },
  {
    id: 'g6-soc-oh4',
    type: 'mc',
    prompt: 'What is the highest law and foundational document of Ohio’s state government?',
    choices: ['The Ohio State Constitution', 'The Columbus City Charter', 'The Articles of Confederation', 'The Mayflower Compact'],
    answer: 'The Ohio State Constitution',
    explanation: 'The Ohio Constitution establishes the framework, branches, and fundamental rights guaranteed in Ohio.',
  },
  {
    id: 'g6-soc-oh5',
    type: 'mc',
    prompt: 'What are the three co-equal branches of Ohio’s state government?',
    choices: ['Legislative (General Assembly), Executive (Governor), and Judicial (Courts)', 'Mayor, Police, and Fire', 'President, Congress, and Senate', 'Military, Banks, and Schools'],
    answer: 'Legislative (General Assembly), Executive (Governor), and Judicial (Courts)',
    explanation: 'Like the federal government, Ohio divides governmental authority between the legislature, governor, and court system.',
  },
  {
    id: 'g6-soc-oh6',
    type: 'mc',
    prompt: 'What is the capital city of Ohio where the state legislature convenes?',
    choices: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
    answer: 'Columbus',
    explanation: 'Columbus became Ohio’s permanent state capital in 1816, located centrally along the Scioto River.',
  },
  {
    id: 'g6-soc-oh7',
    type: 'mc',
    prompt: 'Which canal system connected Lake Erie to the Ohio River in the 1830s?',
    choices: ['The Ohio and Erie Canal system', 'Interstate highways', 'Commercial passenger airplanes', 'Subway tunnels'],
    answer: 'The Ohio and Erie Canal system',
    explanation: 'Canals linked inland Ohio agricultural markets to coastal trade on Lake Erie and the Mississippi River.',
  },
  {
    id: 'g6-soc-oh8',
    type: 'mc',
    prompt: 'Which ancient Indigenous cultures built the Great Serpent Mound in Ohio?',
    choices: ['Adena and Hopewell cultures', 'Aztec Empire', 'Inca engineers', 'Viking explorers'],
    answer: 'Adena and Hopewell cultures',
    explanation: 'The ancient Adena and Hopewell built sophisticated effigy and burial earthworks throughout southern and central Ohio.',
  },
]

export const G6_SOCIAL_COURSE: Course = {
  id: 'g6-social',
  subject: 'social',
  grade: 6,
  title: 'Grade 6 Social Studies (World Regions & History)',
  subtitle: 'Geography, Ancient Civilizations, Mediterranean Cultures, Economics & Civics',
  credits: 1.0,
  color: '#f59e0b',
  icon: '🌍',
  units: [
    // UNIT 1: GEOGRAPHY AND SPATIAL THINKING
    {
      id: 'g6-soc-u1',
      title: 'Unit 1: Geography Tools & Spatial Thinking',
      standards: ['C3.D2.Geo.1.6-8', 'C3.D2.Geo.2.6-8', 'C3.D2.Geo.3.6-8'],
      lessons: [
        {
          id: 'g6-soc-u1-l1',
          unitId: 'g6-soc-u1',
          title: 'Latitude, Longitude & Reading Thematic Maps',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/intro-to-world-history/v/human-geography',
          videoTitle: 'Maps and Geographic Tools',
          reading: 'Geographers use coordinate grids of latitude and longitude to determine absolute location. Physical and thematic maps reveal spatial relationships, climate zones, and human settlements.',
          principles: [
            {
              id: 'p-g6-soc-geography',
              title: 'Geographic Tools and Spatial Reasoning',
              standard: 'C3.D2.Geo.1.6-8',
              summary: 'Construct and interpret maps to explain relationships between the location of places and regions.',
              bank: SOC_GEOGRAPHY_BANK,
            },
          ],
        },
        {
          id: 'g6-soc-u1-l2',
          unitId: 'g6-soc-u1',
          title: 'Unit 1 Test: Geography and Spatial Thinking',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history',
          videoTitle: 'Geography Unit Test Practice',
          reading: 'Unit exam testing latitude, longitude, Prime Meridian, map projections, physical vs. political maps, and human-environment interaction.',
          principles: [
            {
              id: 'p-g6-soc-geo-exam',
              title: 'Geography Tools Mastery',
              standard: 'C3.D2.Geo.1.6-8',
              summary: 'Check of spatial reasoning, coordinate mapping, and geographic tools.',
              bank: SOC_GEOGRAPHY_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 2: EARLY RIVER VALLEY CIVILIZATIONS
    {
      id: 'g6-soc-u2',
      title: 'Unit 2: Early River Valley Civilizations',
      standards: ['C3.D2.His.1.6-8', 'C3.D2.His.2.6-8', 'C3.D2.His.14.6-8'],
      lessons: [
        {
          id: 'g6-soc-u2-l1',
          unitId: 'g6-soc-u2',
          title: 'Mesopotamia, Ancient Egypt & Indus Cities',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings/ancient-mesopotamia/v/ancient-mesopotamia',
          videoTitle: 'Mesopotamia and River Valley Civilizations',
          reading: 'The agricultural revolution and fertile river silt enabled complex urban societies in Mesopotamia, the Nile Valley, the Indus River, and the Yellow River, producing written laws and trade networks.',
          principles: [
            {
              id: 'p-g6-soc-river-civs',
              title: 'River Valley Civilizations and Urbanization',
              standard: 'C3.D2.His.14.6-8',
              summary: 'Explain how economic and political institutions developed in early river valley civilizations.',
              bank: SOC_RIVER_BANK,
            },
          ],
        },
        {
          id: 'g6-soc-u2-l2',
          unitId: 'g6-soc-u2',
          title: 'Unit 2 Test: River Valley Civilizations',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings',
          videoTitle: 'River Civilizations Review',
          reading: 'Unit exam testing Mesopotamia, the Tigris and Euphrates, Hammurabi’s Code, cuneiform, Egyptian Nile agriculture, and the Indus Valley.',
          principles: [
            {
              id: 'p-g6-soc-river-exam',
              title: 'River Valley History',
              standard: 'C3.D2.His.14.6-8',
              summary: 'Comprehensive check of early civilizational developments.',
              bank: SOC_RIVER_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 3: CLASSICAL MEDITERRANEAN CIVILIZATIONS
    {
      id: 'g6-soc-u3',
      title: 'Unit 3: Classical Mediterranean Civilizations',
      standards: ['C3.D2.Civ.2.6-8', 'C3.D2.His.3.6-8'],
      lessons: [
        {
          id: 'g6-soc-u3-l1',
          unitId: 'g6-soc-u3',
          title: 'Athenian Democracy & Roman Republic to Empire',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/ancient-medieval/ancient-greece/v/ancient-greece-overview',
          videoTitle: 'Ancient Greece and the Roman Republic',
          reading: 'Classical Greece pioneered direct democracy and philosophical reasoning, while Rome established representative republican government, legal codes, and monumental engineering across the Mediterranean basin.',
          principles: [
            {
              id: 'p-g6-soc-med-civs',
              title: 'Civic Traditions of Greece and Rome',
              standard: 'C3.D2.Civ.2.6-8',
              summary: 'Examine the origins, purposes, and development of democratic and republican ideas in Greece and Rome.',
              bank: SOC_MEDITERRANEAN_BANK,
            },
          ],
        },
        {
          id: 'g6-soc-u3-l2',
          unitId: 'g6-soc-u3',
          title: 'Unit 3 Test: Classical Mediterranean',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/humanities/world-history/ancient-medieval',
          videoTitle: 'Classical World Test Practice',
          reading: 'Unit exam testing Athens vs. Sparta, Socratic philosophy, Roman Republic checks and balances, aqueducts, and the Twelve Tables.',
          principles: [
            {
              id: 'p-g6-soc-med-exam',
              title: 'Classical Civics and Culture',
              standard: 'C3.D2.Civ.2.6-8',
              summary: 'Check of classical Mediterranean democratic and institutional structures.',
              bank: SOC_MEDITERRANEAN_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 4: ECONOMICS AND GLOBAL TRADE
    {
      id: 'g6-soc-u4',
      title: 'Unit 4: Economics, Global Trade & Scarcity',
      standards: ['C3.D2.Eco.1.6-8', 'C3.D2.Eco.3.6-8', 'C3.D2.Eco.14.6-8'],
      lessons: [
        {
          id: 'g6-soc-u4-l1',
          unitId: 'g6-soc-u4',
          title: 'Scarcity, Trade & Supply and Demand',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro/scarcity-and-opportunity-cost/v/scarcity',
          videoTitle: 'Scarcity and Opportunity Cost',
          reading: 'Because resources are scarce, individuals and societies must make economic choices with opportunity costs. Specialization and trade allow nations to exchange goods and build interregional markets.',
          principles: [
            {
              id: 'p-g6-soc-economics-core',
              title: 'Economic Decision Making and Markets',
              standard: 'C3.D2.Eco.1.6-8',
              summary: 'Explain how economic scarcity, opportunity cost, and supply/demand influence decision making and trade.',
              bank: SOC_ECON_BANK,
            },
          ],
        },
        {
          id: 'g6-soc-u4-l2',
          unitId: 'g6-soc-u4',
          title: 'Unit 4 Test: Economics and Global Trade',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/economics-finance-domain',
          videoTitle: 'Economics Test Review',
          reading: 'Unit exam testing scarcity, opportunity cost, supply and demand pricing, specialization, and export/import balances.',
          principles: [
            {
              id: 'p-g6-soc-econ-exam',
              title: 'Economics Principles',
              standard: 'C3.D2.Eco.1.6-8',
              summary: 'Check of basic economic and trade principles.',
              bank: SOC_ECON_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 5: OHIO HISTORY AND CIVICS EXTENSIONS
    {
      id: 'g6-soc-u5-ohio',
      title: 'Unit 5: Ohio History, Constitution & Civics Extensions',
      standards: ['OH.6.SS.1', 'OH.6.SS.7'],
      isOhioExtension: true,
      lessons: [
        {
          id: 'g6-soc-u5-l1',
          unitId: 'g6-soc-u5-ohio',
          title: 'Northwest Ordinance, Ohio Statehood & Underground Railroad',
          isOhioExtension: true,
          estimatedMinutes: 12,
          videoUrl: 'https://www.youtube.com/results?search_query=ohio+history+northwest+ordinance+statehood',
          videoTitle: 'Ohio History & Statehood',
          reading: 'Ohio became the 17th state in 1803 under the Northwest Ordinance of 1787. Ohio’s state constitution and its pivotal role as a corridor for the Underground Railroad shaped its historic democratic identity.',
          principles: [
            {
              id: 'p-g6-soc-ohio-hist',
              title: 'Ohio Statehood and Constitutional Governance',
              standard: 'OH.6.SS.1',
              summary: 'Analyze the Northwest Ordinance, Ohio Constitution, and historical civic movements in Ohio.',
              bank: SOC_OHIO_BANK,
            },
          ],
        },
        {
          id: 'g6-soc-u5-l2',
          unitId: 'g6-soc-u5-ohio',
          title: 'Unit 5 Test: Ohio History and Civics',
          kind: 'unit_test',
          isOhioExtension: true,
          estimatedMinutes: 15,
          videoUrl: 'https://www.youtube.com/results?search_query=ohio+constitution+and+civics',
          videoTitle: 'Ohio Civics Test Review',
          reading: 'Unit exam testing Ohio statehood (1803), the Northwest Ordinance of 1787, three branches of Ohio state government, and the Underground Railroad.',
          principles: [
            {
              id: 'p-g6-soc-ohio-exam',
              title: 'Ohio Civics and History',
              standard: 'OH.6.SS.1',
              summary: 'Check of Ohio historical foundations and state government.',
              bank: SOC_OHIO_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 6: EXPLORE HISTORY THROUGH VIRTUAL TOURS (UNGRADED)
    {
      id: 'g6-soc-u6-explore',
      title: 'Unit 6: Explore History Through Virtual Tours & Archaeology',
      standards: ['C3 Social Studies Inquiry Arc'],
      kind: 'explore',
      lessons: [],
      exploreItems: [
        {
          id: 'exp-so6-smithsonian-tour',
          title: 'Smithsonian National Museum of Natural History Virtual Tour',
          type: 'virtual_tour',
          description: 'Walk through 360-degree digital museum exhibits featuring ancient human fossils, Egyptian mummies, and ancient artifacts.',
          url: 'https://naturalhistory.si.edu/visit/virtual-tour',
          estimatedMinutes: 20,
          requiresParentPin: false,
          reflectionPrompt: 'Which ancient artifact exhibit felt most surprising to you, and what material was it made from?',
        },
        {
          id: 'exp-so6-british-museum-timeline',
          title: 'British Museum: The Museum of the World Interactive Timeline',
          type: 'simulation',
          description: 'Navigate an interactive 3D visual music timeline connecting ancient Mesopotamia, Asia, the Americas, and Europe.',
          url: 'https://britishmuseum.withgoogle.com/',
          estimatedMinutes: 20,
          requiresParentPin: false,
        },
        {
          id: 'exp-so6-hammurabi-court',
          title: 'Primary Source Roleplay: Hammurabi’s Courtroom',
          type: 'project',
          description: 'Act as an ancient Babylonian judge! Read 4 translated laws from Hammurabi’s Code and decide if the punishment fits the modern standard of fairness.',
          estimatedMinutes: 25,
          materials: ['Paper & pencil for judge’s ruling'],
          steps: [
            'Read Law #21: "If anyone breaks a hole into a house, he shall be put to death in front of that breach."',
            'Compare this punishment with modern legal punishments for burglary.',
            'Write a 3-sentence judge’s opinion on whether ancient Babylonian justice protected property or was excessively harsh.',
          ],
          reflectionPrompt: 'Why do you think ancient Babylonian laws emphasized strict public consequences?',
        },
        {
          id: 'exp-so6-google-earth-wonders',
          title: 'Google Earth: Expeditions to the Seven Ancient Wonders',
          type: 'virtual_tour',
          description: 'Fly over satellite imagery of the Pyramids of Giza, the Roman Colosseum, and the Parthenon in Athens.',
          url: 'https://earth.google.com/web/',
          estimatedMinutes: 15,
          requiresParentPin: false,
        },
        {
          id: 'exp-so6-ohio-history-connection',
          title: 'Ohio History Connection Digital Collections',
          type: 'reading',
          description: 'Inspect authentic photographs, maps, and primary source documents from Ohio’s canal era and the Underground Railroad.',
          url: 'https://www.ohiohistory.org/research/digital-collections/',
          estimatedMinutes: 15,
          requiresParentPin: false,
        },
      ],
    },

    // UNIT 7: TEACHER RESOURCES
    {
      id: 'g6-soc-u7-teacher',
      title: 'Unit 7: Teacher Resources',
      standards: ['Teacher Reference'],
      kind: 'teacher_resources',
      lessons: [],
      resources: [
        {
          id: 'tr-so6-pacing',
          title: 'Grade 6 Social Studies 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description: 'Curriculum map for global history, geography, classical civic traditions, and Ohio history.',
          body: `### Grade 6 Social Studies 36-Week Map
- **Weeks 1–6**: Geography, Coordinate Grids & Spatial Thinking
- **Weeks 7–13**: Mesopotamia, Ancient Egypt & River Civilizations
- **Weeks 14–20**: Classical Greece (Athens vs. Sparta) & Roman Republic
- **Weeks 21–26**: World Religions, Philosophies & Cultural Diffusion
- **Weeks 27–31**: Economics, Scarcity & Interregional Trade
- **Weeks 32–36**: Ohio Constitution, Northwest Ordinance & Historic Civic Movements`,
        },
        {
          id: 'tr-so6-maps',
          title: 'Printable World Maps & Primary Source Analysis Worksheets',
          kind: 'printable',
          description: 'Blank outline maps of the Mediterranean, Nile basin, and ancient trade routes for student cartography.',
          body: `### Document Analysis Questions (HIPPO Method)
- **Historical Context**: When and where was this historical document created?
- **Intended Audience**: Who did the author expect to read or hear this?
- **Purpose**: Why did the author produce this artifact?
- **Point of View**: What was the author’s social, political, or economic perspective?
- **Outside Knowledge**: What other historical facts confirm or contradict this source?`,
        },
      ],
    },
  ],
}
