import { Course, Principle } from '../../types'

// Principles for Grade 7 Science
const G7_SCI_MATTER_PRINCIPLE: Principle = {
  id: 'p-g7-sci-matter',
  title: 'Elements, Compounds, Mixtures & Conservation of Matter',
  standard: 'MS-PS1-5 / OH.7.PS.1',
  summary: 'Atoms rearrange during chemical reactions, so total mass stays the same.',
  bank: [
    {
      id: 'g7-sci-mat-1',
      prompt: 'What is a pure substance made of one atom type?',
      type: 'mc',
      choices: ['An element', 'A mixture', 'A solution', 'An alloy'],
      answer: 'An element',
      explanation: 'An element is a pure substance made of only one kind of atom, like gold or oxygen.',
    },
    {
      id: 'g7-sci-mat-2',
      prompt: 'What forms when two elements chemically bond together?',
      type: 'mc',
      choices: ['A compound', 'A mixture', 'An electron', 'A proton'],
      answer: 'A compound',
      explanation: 'A compound is a substance formed when two or more elements chemically bond in a fixed ratio.',
    },
    {
      id: 'g7-sci-mat-3',
      prompt: 'How are substances combined inside a mixture?',
      type: 'mc',
      choices: ['Blended physically without chemical bonds', 'Fused inside atomic nuclei', 'Bonded into new molecules', 'Destroyed by heat energy'],
      answer: 'Blended physically without chemical bonds',
      explanation: 'A mixture combines substances physically so each substance keeps its own chemical identity.',
    },
    {
      id: 'g7-sci-mat-4',
      prompt: 'What happens to total mass during a chemical reaction?',
      type: 'mc',
      choices: ['Total mass stays the same', 'Total mass doubles quickly', 'Total mass disappears completely', 'Total mass turns into light'],
      answer: 'Total mass stays the same',
      explanation: 'Conservation of matter means matter is neither created nor destroyed during a chemical reaction.',
    },
    {
      id: 'g7-sci-mat-5',
      prompt: 'What happens to atoms during a chemical change?',
      type: 'mc',
      choices: ['Atoms rearrange into new molecules', 'Atoms vanish into empty space', 'Atoms change into different elements', 'Atoms stop moving forever'],
      answer: 'Atoms rearrange into new molecules',
      explanation: 'In a chemical reaction, existing atoms break apart and rearrange to form new products.',
    },
    {
      id: 'g7-sci-mat-6',
      prompt: 'What is a uniform mixture like salt water called?',
      type: 'mc',
      choices: ['A homogeneous solution', 'A pure element', 'A suspension', 'A heavy precipitate'],
      answer: 'A homogeneous solution',
      explanation: 'A solution is a homogeneous mixture where one substance dissolves evenly into another.',
    },
  ],
}

const G7_SCI_PERIODIC_PRINCIPLE: Principle = {
  id: 'p-g7-sci-periodic',
  title: 'Periodic Table Groups & Chemical Properties',
  standard: 'OH.7.PS.1',
  summary: 'Elements in the same column share similar chemical properties.',
  bank: [
    {
      id: 'g7-sci-per-1',
      prompt: 'What are columns on the periodic table called?',
      type: 'mc',
      choices: ['Groups or families', 'Horizontal periods', 'Atomic shells', 'Phase mixtures'],
      answer: 'Groups or families',
      explanation: 'Groups are vertical columns on the periodic table whose elements have similar chemical behavior.',
    },
    {
      id: 'g7-sci-per-2',
      prompt: 'Why do elements in the same group react similarly?',
      type: 'mc',
      choices: ['They have similar outer electrons', 'They have identical atomic masses', 'They were discovered the same year', 'They are all liquids'],
      answer: 'They have similar outer electrons',
      explanation: 'Chemical reactivity depends on outer electrons, which match within a periodic table group.',
    },
    {
      id: 'g7-sci-per-3',
      prompt: 'Which property is a physical property of matter?',
      type: 'mc',
      choices: ['Melting point and density', 'Ability to rust in air', 'Reactivity with strong acid', 'Flammability'],
      answer: 'Melting point and density',
      explanation: 'Physical properties like melting point, density, and color can be observed without changing identity.',
    },
    {
      id: 'g7-sci-per-4',
      prompt: 'What type of change creates a completely new substance?',
      type: 'mc',
      choices: ['A chemical reaction', 'Freezing liquid water', 'Tearing a paper sheet', 'Dissolving table salt'],
      answer: 'A chemical reaction',
      explanation: 'Chemical changes break and form bonds to create substances with new chemical properties.',
    },
    {
      id: 'g7-sci-per-5',
      prompt: 'Which group contains highly unreactive noble gases?',
      type: 'mc',
      choices: ['Group 18 on far right', 'Group 1 alkali metals', 'Group 2 alkaline earths', 'Transition metals in middle'],
      answer: 'Group 18 on far right',
      explanation: 'Noble gases in Group 18 have full outer valence electron shells, making them extremely stable.',
    },
    {
      id: 'g7-sci-per-6',
      prompt: 'What is a sign that a chemical reaction occurred?',
      type: 'mc',
      choices: ['Gas bubbles or unexpected heat', 'Ice melting in warm air', 'Water turning into ice', 'Rock breaking into gravel'],
      answer: 'Gas bubbles or unexpected heat',
      explanation: 'Unexpected temperature shifts, gas production, or color change indicate chemical reactions.',
    },
  ],
}

const G7_SCI_HYDRO_ATMOS_PRINCIPLE: Principle = {
  id: 'p-g7-sci-hydro',
  title: 'Hydrosphere, Atmosphere & Weather Systems',
  standard: 'OH.7.ESS.1',
  summary: 'Thermal energy from the Sun drives global ocean currents and atmospheric convection cells.',
  bank: [
    {
      id: 'g7-sci-hyd-1',
      prompt: 'What primary energy source drives the water cycle and weather?',
      type: 'mc',
      choices: ['Solar radiation from the Sun', 'Heat from Earth’s core', 'The Moon’s gravitational pull', 'Wind blowing over trees'],
      answer: 'Solar radiation from the Sun',
      explanation: 'Sunlight warms land and water unevenly, providing energy that drives evaporation and wind.',
    },
    {
      id: 'g7-sci-hyd-2',
      prompt: 'How does warm air behave compared to cold air?',
      type: 'mc',
      choices: ['Warm air rises because less dense', 'Warm air sinks because heavier', 'Warm air never moves at all', 'Warm air freezes into ice'],
      answer: 'Warm air rises because less dense',
      explanation: 'Warming causes air molecules to spread apart, decreasing density and causing warm air to rise.',
    },
    {
      id: 'g7-sci-hyd-3',
      prompt: 'What causes deep ocean conveyor belt currents to circulate?',
      type: 'mc',
      choices: ['Differences in temperature and salinity', 'Whales swimming together', 'Boat motors across oceans', 'Falling autumn leaves'],
      answer: 'Differences in temperature and salinity',
      explanation: 'Thermohaline circulation is driven by cold, salty water sinking at poles and warm water rising.',
    },
    {
      id: 'g7-sci-hyd-4',
      prompt: 'What happens when moist air cools as it rises?',
      type: 'mc',
      choices: ['Water vapor condenses to form clouds', 'Water vapor disappears forever', 'The air turns into pure salt', 'The air becomes a volcano'],
      answer: 'Water vapor condenses to form clouds',
      explanation: 'As air rises and cools, water vapor condenses around dust particles into visible cloud droplets.',
    },
    {
      id: 'g7-sci-hyd-5',
      prompt: 'Which global wind belts blow weather across the continental United States?',
      type: 'mc',
      choices: ['The prevailing westerlies', 'The polar easterlies', 'The tropical trade winds', 'The equatorial doldrums'],
      answer: 'The prevailing westerlies',
      explanation: 'Prevailing westerlies carry weather systems from west to east across mid-latitude North America.',
    },
    {
      id: 'g7-sci-hyd-6',
      prompt: 'What happens to atmospheric pressure as altitude increases up a mountain?',
      type: 'mc',
      choices: ['Air pressure decreases with altitude', 'Air pressure doubles every mile', 'Air pressure stays identical', 'Air pressure turns into water'],
      answer: 'Air pressure decreases with altitude',
      explanation: 'There are fewer air molecules pushing downward at higher elevations, so pressure drops.',
    },
  ],
}

const G7_SCI_MOON_TIDES_PRINCIPLE: Principle = {
  id: 'p-g7-sci-moon',
  title: 'Earth-Sun-Moon: Phases, Eclipses & Ocean Tides',
  standard: 'OH.7.ESS.2',
  summary: 'Moon phases result from orbital position; gravitational pull creates ocean tides.',
  bank: [
    {
      id: 'g7-sci-mn-1',
      prompt: 'What causes the phases of the Moon seen from Earth?',
      type: 'mc',
      choices: ['Changing angles of sunlight on Moon', 'Earth’s shadow covering the Moon', 'Clouds passing over night sky', 'The Moon turning on and off'],
      answer: 'Changing angles of sunlight on Moon',
      explanation: 'As the Moon orbits Earth every 29.5 days, we see varying fractions of its sunlit half.',
    },
    {
      id: 'g7-sci-mn-2',
      prompt: 'What primary force creates daily ocean high and low tides?',
      type: 'mc',
      choices: ['The Moon’s gravitational pull', 'Ocean winds blowing steady', 'Underwater volcanic eruptions', 'Sunlight evaporating surface water'],
      answer: 'The Moon’s gravitational pull',
      explanation: 'The Moon’s gravitational pull creates tidal bulges on the near and opposite sides of Earth.',
    },
    {
      id: 'g7-sci-mn-3',
      prompt: 'What occurs during a total solar eclipse?',
      type: 'mc',
      choices: ['Moon passes directly between Earth and Sun', 'Earth passes between Sun and Moon', 'The Sun runs out of hydrogen', 'Mars blocks the planet Venus'],
      answer: 'Moon passes directly between Earth and Sun',
      explanation: 'During a solar eclipse, the Moon casts its shadow (umbra) onto Earth’s surface.',
    },
    {
      id: 'g7-sci-mn-4',
      prompt: 'What occurs during a total lunar eclipse?',
      type: 'mc',
      choices: ['Earth passes between Sun and Moon', 'Moon passes between Sun and Earth', 'The Moon falls into ocean', 'Sun turns completely green'],
      answer: 'Earth passes between Sun and Moon',
      explanation: 'A lunar eclipse occurs at full Moon when Earth blocks sunlight from reaching the lunar surface.',
    },
    {
      id: 'g7-sci-mn-5',
      prompt: 'When do the highest spring tides occur during a month?',
      type: 'mc',
      choices: ['During new and full moon phases', 'During first and third quarter moons', 'Only in the month of April', 'Only during solar midnight'],
      answer: 'During new and full moon phases',
      explanation: 'When Sun, Moon, and Earth align in a line, combined gravity produces highest spring tides.',
    },
    {
      id: 'g7-sci-mn-6',
      prompt: 'What are moderate, lower-range ocean tides called?',
      type: 'mc',
      choices: ['Neap tides during quarter moons', 'Spring tides during new moon', 'Tsunami wave crests', 'Rip tides in shallow surf'],
      answer: 'Neap tides during quarter moons',
      explanation: 'When the Sun and Moon are at right angles (first/third quarter), gravitational pulls partially cancel, causing neap tides.',
    },
  ],
}

const G7_SCI_ECOSYSTEM_PRINCIPLE: Principle = {
  id: 'p-g7-sci-eco',
  title: 'Ecosystem Dynamics, Trophic Levels & Energy Flow',
  standard: 'MS-LS2-3 / OH.7.LS.1',
  summary: 'Energy flows through trophic levels (10% rule); matter cycles through biogeochemical processes.',
  bank: [
    {
      id: 'g7-sci-eco-1',
      prompt: 'How much energy typically transfers to the next trophic level?',
      type: 'mc',
      choices: ['About 10 percent of energy', 'About 50 percent of energy', 'Exactly 100 percent of energy', 'Zero percent of energy'],
      answer: 'About 10 percent of energy',
      explanation: 'The 10% ecological rule states that 90% of energy is lost as heat or used for metabolic life functions.',
    },
    {
      id: 'g7-sci-eco-2',
      prompt: 'What level forms the base of every terrestrial energy pyramid?',
      type: 'mc',
      choices: ['Autotrophic producers (green plants)', 'Apex carnivore predators', 'Primary consumer herbivores', 'Secondary consumer omnivores'],
      answer: 'Autotrophic producers (green plants)',
      explanation: 'Producers capture solar energy via photosynthesis, forming the foundational biomass of ecosystems.',
    },
    {
      id: 'g7-sci-eco-3',
      prompt: 'Why are top predators in an ecosystem relatively scarce?',
      type: 'mc',
      choices: ['Energy decreases at higher trophic levels', 'Top predators sleep all day', 'Producers hunt top predators', 'Herbivores refuse to be eaten'],
      answer: 'Energy decreases at higher trophic levels',
      explanation: 'Because 90% of energy is lost at each level, fewer top carnivores can be supported by ecosystem biomass.',
    },
    {
      id: 'g7-sci-eco-4',
      prompt: 'What happens when a top keystone predator is removed?',
      type: 'mc',
      choices: ['Herbivores overpopulate and overgraze vegetation', 'All plants grow twice as tall', 'The ecosystem becomes perfectly stable', 'Rainfall stops in the region'],
      answer: 'Herbivores overpopulate and overgraze vegetation',
      explanation: 'Without apex predators, prey populations explode, leading to overgrazing and trophic cascades.',
    },
    {
      id: 'g7-sci-eco-5',
      prompt: 'What is the gradual change in an ecosystem over time called?',
      type: 'mc',
      choices: ['Ecological succession', 'Ecosystem extinction', 'Photosynthetic respiration', 'Thermohaline circulation'],
      answer: 'Ecological succession',
      explanation: 'Ecological succession is the predictable sequence of community replacement following a disturbance.',
    },
    {
      id: 'g7-sci-eco-6',
      prompt: 'What role do decomposers like fungi play in nutrient cycles?',
      type: 'mc',
      choices: ['Recycle organic matter into soil nutrients', 'Produce new energy from moonlight', 'Consume living apex predators', 'Block all carbon from air'],
      answer: 'Recycle organic matter into soil nutrients',
      explanation: 'Decomposers break down dead biomass, releasing nitrogen, carbon, and phosphorus back to producers.',
    },
  ],
}

export const G7_SCIENCE_COURSE: Course = {
  id: 'g7-science',
  subject: 'science',
  grade: 7,
  title: 'Grade 7 Science',
  subtitle: 'Conservation of Matter, Periodic Table, Hydrosphere, Earth-Moon-Sun Systems & Ecology',
  credits: 1.0,
  color: '#059669',
  icon: '🧪',
  units: [
    // UNIT 1: Matter & Chemical Reactions
    {
      id: 'g7-sci-u1',
      title: 'Unit 1: Elements, Compounds & Conservation of Matter',
      standards: ['MS-PS1-1', 'MS-PS1-5'],
      lessons: [
        {
          id: 'g7-sci-u1-l1',
          unitId: 'g7-sci-u1',
          title: 'Lesson 1: Pure Substances, Elements & Compounds',
          kind: 'lesson',
          partOf: 'Chemical Structure',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/introduction-to-the-atom/v/elements-and-atoms',
          videoTitle: 'Khan Academy: Elements, Compounds and Mixtures',
          reading:
            'Pure substances are composed of a single type of atom (elements) or chemically bonded combinations of atoms in fixed ratios (compounds). Mixtures combine substances physically.',
          principles: [G7_SCI_MATTER_PRINCIPLE],
        },
        {
          id: 'g7-sci-u1-l2',
          unitId: 'g7-sci-u1',
          title: 'Lesson 2: Conservation of Mass in Chemical Reactions',
          kind: 'lesson',
          partOf: 'Conservation of Mass',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/balancing-chemical-equations/v/balancing-chemical-equations-introduction',
          videoTitle: 'Khan Academy: Conservation of Mass in Chemical Reactions',
          reading:
            'Atoms are neither created nor destroyed during chemical changes; they break apart and rearrange. Therefore, total mass of the products always equals total mass of reactants.',
          principles: [G7_SCI_MATTER_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Periodic Table Groups & Properties
    {
      id: 'g7-sci-u2',
      title: 'Unit 2: Periodic Table Groups & Chemical Properties',
      standards: ['OH.7.PS.1'],
      lessons: [
        {
          id: 'g7-sci-u2-l1',
          unitId: 'g7-sci-u2',
          title: 'Lesson 1: Periodic Table Organization & Groups',
          kind: 'lesson',
          partOf: 'Periodic Table Groups',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/names-and-formulas-of-ionic-compounds/v/periodic-table-introduction',
          videoTitle: 'Khan Academy: The Periodic Table Groups',
          reading:
            'Vertical columns (groups) share valence electron configurations, giving elements in the same group similar chemical reactivity (e.g. Group 1 alkali metals, Group 18 noble gases).',
          principles: [G7_SCI_PERIODIC_PRINCIPLE],
        },
        {
          id: 'g7-sci-u2-l2',
          unitId: 'g7-sci-u2',
          title: 'Lesson 2: Physical vs. Chemical Properties of Matter',
          kind: 'lesson',
          partOf: 'Matter Properties',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/introduction-to-the-atom/v/physical-and-chemical-properties',
          videoTitle: 'Khan Academy: Physical and Chemical Properties',
          reading:
            'Physical properties (density, boiling point, solubility) can be measured without altering chemical composition. Chemical properties describe reactivity and bonding potential.',
          principles: [G7_SCI_PERIODIC_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Ohio Extension: Hydrosphere & Atmosphere
    {
      id: 'g7-sci-u3',
      title: 'Unit 3: Earth’s Hydrosphere, Atmosphere & Weather Systems',
      isOhioExtension: true,
      standards: ['OH.7.ESS.1'],
      lessons: [
        {
          id: 'g7-sci-u3-l1',
          unitId: 'g7-sci-u3',
          title: 'Lesson 1: The Global Water Cycle & Ocean Currents',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Hydrosphere',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-earth-and-space-science/x37589312f55438b9:water-and-weather/x37589312f55438b9:water-cycle/v/the-water-cycle',
          videoTitle: 'Khan Academy: The Water Cycle & Ocean Currents',
          reading:
            'Solar energy powers global evaporation and ocean circulation. Thermohaline currents circulate worldwide driven by water density, temperature, and salinity differences.',
          principles: [G7_SCI_HYDRO_ATMOS_PRINCIPLE],
        },
        {
          id: 'g7-sci-u3-l2',
          unitId: 'g7-sci-u3',
          title: 'Lesson 2: Atmospheric Convection, Air Pressure & Winds',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Atmosphere',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-earth-and-space-science/x37589312f55438b9:water-and-weather/x37589312f55438b9:atmospheric-circulation/v/global-convection',
          videoTitle: 'Khan Academy: Atmospheric Convection and Pressure',
          reading:
            'Uneven heating creates warm rising low-pressure air and cool sinking high-pressure air. Convection cells and Coriolis deflection generate predictable prevailing winds.',
          principles: [G7_SCI_HYDRO_ATMOS_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: Ohio Extension: Earth-Sun-Moon System
    {
      id: 'g7-sci-u4',
      title: 'Unit 4: Moon Phases, Eclipses & Ocean Tides',
      isOhioExtension: true,
      standards: ['OH.7.ESS.2'],
      lessons: [
        {
          id: 'g7-sci-u4-l1',
          unitId: 'g7-sci-u4',
          title: 'Lesson 1: Moon Phases & Solar/Lunar Eclipses',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Moon Phases & Eclipses',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-earth-and-space-science/x37589312f55438b9:earth-sun-moon-system/x37589312f55438b9:phases-of-the-moon/v/moon-phases',
          videoTitle: 'Khan Academy: Moon Phases and Eclipses',
          reading:
            'The Moon orbits Earth every 29.5 days, displaying changing illuminated phases. Eclipses occur when the Moon aligns directly between Sun and Earth or enters Earth’s shadow.',
          principles: [G7_SCI_MOON_TIDES_PRINCIPLE],
        },
        {
          id: 'g7-sci-u4-l2',
          unitId: 'g7-sci-u4',
          title: 'Lesson 2: Gravitational Tides: Spring vs. Neap Tides',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Ocean Tides',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-earth-and-space-science/x37589312f55438b9:earth-sun-moon-system/x37589312f55438b9:ocean-tides/v/spring-and-neap-tides',
          videoTitle: 'Khan Academy: Ocean Tides and Gravitational Forces',
          reading:
            'The Moon’s gravitational pull creates tidal bulges. Full and new moons produce high spring tides; quarter moons produce moderate neap tides.',
          principles: [G7_SCI_MOON_TIDES_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Ecosystem Dynamics & Energy Flow
    {
      id: 'g7-sci-u5',
      title: 'Unit 5: Ecosystem Dynamics, Trophic Levels & Succession',
      standards: ['MS-LS2-3', 'OH.7.LS.1'],
      lessons: [
        {
          id: 'g7-sci-u5-l1',
          unitId: 'g7-sci-u5',
          title: 'Lesson 1: Trophic Levels & The 10% Energy Transfer Rule',
          kind: 'lesson',
          partOf: 'Energy Transfer',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/high-school-biology/hs-ecology/hs-energy-flow-through-ecosystems/v/energy-flow-and-primary-productivity',
          videoTitle: 'Khan Academy: Trophic Levels and Energy Pyramids',
          reading:
            'Energy enters ecosystems via primary producers. Roughly 10% transfers up each trophic level (herbivores, carnivores, apex predators), while 90% is lost as metabolic heat.',
          principles: [G7_SCI_ECOSYSTEM_PRINCIPLE],
        },
        {
          id: 'g7-sci-u5-l2',
          unitId: 'g7-sci-u5',
          title: 'Lesson 2: Keystone Species, Trophic Cascades & Succession',
          kind: 'lesson',
          partOf: 'Ecosystem Stability',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/high-school-biology/hs-ecology/hs-community-ecology/v/trophic-cascades',
          videoTitle: 'Khan Academy: Keystone Species & Ecological Succession',
          reading:
            'Keystone species exercise disproportionate control over ecosystem structure. Following disturbances, ecological succession rebuilds plant and animal communities over time.',
          principles: [G7_SCI_ECOSYSTEM_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Explore Science Through Simulations (enrichment)
    {
      id: 'g7-sci-u6',
      title: 'Unit 6: Explore Science Through Simulations & Labs',
      kind: 'explore',
      standards: ['MS-PS1-5', 'MS-ESS1-1', 'MS-LS2-3'],
      lessons: [],
      exploreItems: [
        {
          id: 'g7-sci-exp-phet-chem-balance',
          title: 'PhET Simulation: Balancing Chemical Equations',
          type: 'simulation',
          description:
            'Balance nitrogen, hydrogen, oxygen, and carbon atoms across reactants and products in dynamic molecular reaction visualizers.',
          url: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'Why must the number of atoms on the reactant side equal the product side?',
          requiresParentPin: false,
        },
        {
          id: 'g7-sci-exp-phet-greenhouse',
          title: 'PhET Simulation: The Greenhouse Effect & Atmosphere',
          type: 'simulation',
          description:
            'Explore how atmospheric gases like carbon dioxide and water vapor absorb infrared photons and affect surface temperatures.',
          url: 'https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'How does atmospheric gas concentration affect photon absorption in Earth’s atmosphere?',
          requiresParentPin: false,
        },
        {
          id: 'g7-sci-exp-moon-oreo',
          title: 'Hands-On Lab: Moon Phase Modeling Investigation',
          type: 'hands_on',
          description:
            'Twist open 8 sandwich cookies. Scrape frosting to represent the 8 distinct lunar phases (New, Waxing Crescent, First Quarter, Waxing Gibbous, Full, Waning Gibbous, Third Quarter, Waning Crescent).',
          estimatedMinutes: 25,
          materials: ['8 sandwich cookies (e.g. Oreos)', 'Butter knife or plastic spoon', 'Paper plate and marker'],
          steps: [
            'Draw Earth in the center of a paper plate and draw incoming sunlight rays on one edge.',
            'Twist apart 8 cookies and arrange them in an orbital circle around Earth.',
            'Scrape frosting away to show the accurate lit side facing the Sun for each lunar phase.',
            'Label each phase with its proper astronomical name.',
          ],
          reflectionPrompt: 'Why does the lit side of the Moon always face toward the Sun from space?',
          requiresParentPin: false,
        },
        {
          id: 'g7-sci-exp-weather-map',
          title: 'Meteorology Investigation: Analyzing Fronts & Pressure Systems',
          type: 'project',
          description:
            'Print or display an active national NOAA weather map. Identify high and low pressure systems, cold fronts, warm fronts, and forecast tomorrow’s regional weather.',
          url: 'https://www.wpc.ncep.noaa.gov/sfc/sfcobs/radsfcus_exp.php',
          estimatedMinutes: 25,
          reflectionPrompt: 'What kind of weather is associated with a passing cold front?',
          requiresParentPin: false,
        },
      ],
    },

    // UNIT 7: Teacher Resources & Pacing
    {
      id: 'g7-sci-u7',
      title: 'Unit 7: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['MS-PS', 'MS-ESS', 'MS-LS', 'OH.7.Sci'],
      lessons: [],
      resources: [
        {
          id: 'g7-sci-res-pacing',
          title: 'Grade 7 Science 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Full-year curriculum sequence coordinating physical chemistry, hydrologic/atmospheric systems, astronomy, and community ecology.',
          body: `## Grade 7 Science Pacing Guide (36 Weeks)

- **Weeks 1–6**: Unit 1 — Elements, Compounds & Conservation of Matter (MS-PS1-1, MS-PS1-5)
- **Weeks 7–12**: Unit 2 — Periodic Table Groups & Chemical Properties (OH.7.PS.1)
- **Week 13**: Quarter 1 Physical Science Assessment
- **Weeks 14–19**: Unit 3 — Earth’s Hydrosphere, Atmosphere & Weather Systems (OH.7.ESS.1)
- **Weeks 20–25**: Unit 4 — Moon Phases, Eclipses & Ocean Tides (OH.7.ESS.2)
- **Week 26**: Quarter 2 & 3 Earth and Space Science Checkpoint
- **Weeks 27–33**: Unit 5 — Ecosystem Dynamics, Trophic Levels & Succession (MS-LS2-3)
- **Weeks 34–36**: Unit 6 — Capstone PhET Simulations & Ecological Inquiry Presentations`,
        },
        {
          id: 'g7-sci-res-standards',
          title: 'Grade 7 Next Generation & Ohio Science Standards Crosswalk',
          kind: 'standards_map',
          description:
            'Standards alignment crosswalk connecting Home-School-Lite units to Ohio Grade 7 Science expectations.',
          body: `| Unit | Ohio Standard | Core Scientific Concept |
|---|---|---|
| Unit 1 | OH.7.PS.1 | Pure substances, elements, compounds, conservation of mass |
| Unit 2 | OH.7.PS.1 | Periodic table group patterns, valence electron reactivity |
| Unit 3 | OH.7.ESS.1 | Hydrosphere thermal energy, thermohaline circulation, convection |
| Unit 4 | OH.7.ESS.2 | Earth-Sun-Moon orbital geometry, lunar phases, gravitational ocean tides |
| Unit 5 | OH.7.LS.1 | 10% trophic energy transfer, biomass pyramids, succession |`,
        },
        {
          id: 'g7-sci-res-safety',
          title: 'Middle School Science Laboratory Safety Standards',
          kind: 'printable',
          description:
            'Laboratory protocols covering chemical handling, glassware precautions, and disposal guidelines.',
          body: `## Middle School Laboratory Safety Rules

1. **Eye Protection**: Always wear splash goggles when mixing chemical compounds or household liquids.
2. **Thermal Care**: Use heat-resistant tongs or oven mitts when handling heated glassware or water.
3. **Food Separation**: Keep lab experimental materials separate from personal food and beverages.
4. **Waste Management**: Dispose of organic materials and solutions as instructed by adult supervisors.
5. **Cleanliness**: Wash experimental stations and thoroughly wash hands after every laboratory period.`,
        },
      ],
    },
  ],
}
