import { Unit } from '../../../types'
import { G7_SCIENCE_BANKS } from './banks'

export const G7_SCIENCE_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: ELEMENTS, COMPOUNDS & CONSERVATION OF MATTER (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u1',
    title: 'Unit 1: Elements, Compounds & Conservation of Matter',
    standards: ['MS-PS1-1', 'MS-PS1-5'],
    lessons: [
      {
        id: 'g7-sci-u1-l1',
        unitId: 'g7-sci-u1',
        title: 'Pure Substances, Elements, and Molecular Compounds',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/introduction-to-the-atom/v/elements-and-atoms',
        videoTitle: 'Elements, Atoms and Compounds',
        reading: 'Elements consist of identical atoms. Compounds are formed when two or more elements chemically bond in fixed stoichiometric ratios.',
        principles: [
          {
            id: 'p-g7-sci-substances',
            title: 'Atomic Structure of Pure Substances',
            standard: 'MS-PS1-1',
            summary: 'Develop models to describe the atomic composition of simple molecules and extended structures.',
            bank: G7_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g7-sci-u1-l2',
        unitId: 'g7-sci-u1',
        title: 'Conservation of Mass in Chemical Reactions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/balancing-chemical-equations/v/balancing-chemical-equations-introduction',
        videoTitle: 'Conservation of Mass in Reactions',
        reading: 'Atoms are neither created nor destroyed during chemical reactions. Total mass of products equals total mass of reactants.',
        principles: [
          {
            id: 'p-g7-sci-mass-conserve',
            title: 'Chemical Reactions and Mass Conservation',
            standard: 'MS-PS1-5',
            summary: 'Develop and use a model to describe how the total number of atoms does not change in a chemical reaction.',
            bank: G7_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g7-sci-u1-l3',
        unitId: 'g7-sci-u1',
        title: 'Homogeneous Solutions vs. Heterogeneous Mixtures',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/mixtures-and-solutions/v/suspensions-colloids-and-solutions',
        videoTitle: 'Solutions and Mixtures',
        reading: 'Mixtures combine substances physically without chemical bonds. Solutions are homogeneous mixtures where solutes dissolve evenly in solvents.',
        principles: [
          {
            id: 'p-g7-sci-mixtures-sol',
            title: 'Physical Mixtures and Solutions',
            standard: 'MS-PS1-1',
            summary: 'Distinguish between pure chemical compounds and physically blended mixtures.',
            bank: G7_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g7-sci-u1-l4',
        unitId: 'g7-sci-u1',
        title: 'Unit 1 Test: Matter & Conservation Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/chemistry',
        videoTitle: 'Unit 1 Test Review',
        reading: 'Assessment testing pure substances, elements, compounds, mixtures, and chemical reaction mass conservation.',
        principles: [
          {
            id: 'p-g7-sci-u1-test',
            title: 'Matter and Chemical Reactions Exam',
            standard: 'MS-PS1-5',
            summary: 'Demonstrate complete mastery of middle school chemical matter standards.',
            bank: G7_SCIENCE_BANKS.matter,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: PERIODIC TABLE GROUPS & CHEMICAL PROPERTIES (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u2',
    title: 'Unit 2: Periodic Table Groups & Chemical Properties',
    standards: ['OH.7.PS.1', 'MS-PS1-1'],
    lessons: [
      {
        id: 'g7-sci-u2-l1',
        unitId: 'g7-sci-u2',
        title: 'Atomic Number, Protons, and Periodic Table Organization',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/names-and-formulas-of-ionic-compounds/v/periodic-table-introduction',
        videoTitle: 'Periodic Table Organization',
        reading: 'Elements are ordered by increasing atomic number (number of protons). Periods are rows, and groups/families are columns sharing valence electron counts.',
        principles: [
          {
            id: 'p-g7-sci-per-table',
            title: 'Periodic Table Architecture',
            standard: 'OH.7.PS.1',
            summary: 'Explain how the periodic table organizes elements by atomic number and recurring chemical properties.',
            bank: G7_SCIENCE_BANKS.periodic,
          },
        ],
      },
      {
        id: 'g7-sci-u2-l2',
        unitId: 'g7-sci-u2',
        title: 'Metals, Nonmetals, Metalloids, and Noble Gases',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/names-and-formulas-of-ionic-compounds/v/metals-nonmetals-and-metalloids',
        videoTitle: 'Metals, Nonmetals and Metalloids',
        reading: 'Metals are conductive and malleable. Nonmetals are insulators and brittle. Noble gases possess full valence shells and are chemically inert.',
        principles: [
          {
            id: 'p-g7-sci-metal-classes',
            title: 'Elemental Classes and Chemical Families',
            standard: 'OH.7.PS.1',
            summary: 'Classify elements into metals, nonmetals, metalloids, and noble gas families based on physical and chemical traits.',
            bank: G7_SCIENCE_BANKS.periodic,
          },
        ],
      },
      {
        id: 'g7-sci-u2-l3',
        unitId: 'g7-sci-u2',
        title: 'Physical Properties vs. Chemical Reactivity',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/introduction-to-the-atom/v/physical-and-chemical-properties',
        videoTitle: 'Physical and Chemical Properties',
        reading: 'Physical properties (density, boiling point, color) can be measured without changing identity. Chemical properties (reactivity, flammability) describe how bonds form or break.',
        principles: [
          {
            id: 'p-g7-sci-prop-compare',
            title: 'Physical and Chemical Properties',
            standard: 'MS-PS1-2',
            summary: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.',
            bank: G7_SCIENCE_BANKS.periodic,
          },
        ],
      },
      {
        id: 'g7-sci-u2-l4',
        unitId: 'g7-sci-u2',
        title: 'Unit 2 Test: Periodic Table & Chemical Properties Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/chemistry',
        videoTitle: 'Unit 2 Test Review',
        reading: 'Assessment testing atomic structure, periodic table trends, and chemical reactivity.',
        principles: [
          {
            id: 'p-g7-sci-u2-test',
            title: 'Periodic Table Mastery Exam',
            standard: 'OH.7.PS.1',
            summary: 'Demonstrate complete proficiency with the periodic table of elements.',
            bank: G7_SCIENCE_BANKS.periodic,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: HYDROSPHERE, ATMOSPHERE & WEATHER SYSTEMS (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u3',
    title: 'Unit 3: Hydrosphere, Atmosphere & Weather Systems',
    standards: ['MS-ESS2-4', 'MS-ESS2-5', 'MS-ESS2-6'],
    lessons: [
      {
        id: 'g7-sci-u3-l1',
        unitId: 'g7-sci-u3',
        title: 'Solar Heating, Air Masses & Atmospheric Convection',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-systems/x87d03b443efbea0a:earths-atmosphere/v/atmospheric-circulation',
        videoTitle: 'Atmospheric Heating and Winds',
        reading: 'Unequal solar energy heats the tropics more than the poles, creating large-scale atmospheric convection cells that drive global winds.',
        principles: [
          {
            id: 'p-g7-sci-atmos-heat',
            title: 'Solar Energy and Atmospheric Circulation',
            standard: 'MS-ESS2-6',
            summary: 'Develop and use a model to describe how unequal heating and rotation of the Earth cause patterns of atmospheric and oceanic circulation that determine regional climates.',
            bank: G7_SCIENCE_BANKS.weather,
          },
        ],
      },
      {
        id: 'g7-sci-u3-l2',
        unitId: 'g7-sci-u3',
        title: 'Coriolis Effect and Global Wind Patterns',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-systems/x87d03b443efbea0a:weather-and-climate/v/coriolis-effect-weather',
        videoTitle: 'The Coriolis Effect and Global Winds',
        reading: 'Earth’s rotation deflects moving air masses to the right in the Northern Hemisphere and left in the Southern Hemisphere, creating trade winds and westerlies.',
        principles: [
          {
            id: 'p-g7-sci-coriolis',
            title: 'Coriolis Effect and Wind Paths',
            standard: 'MS-ESS2-6',
            summary: 'Explain how Earth’s rotation curves atmospheric air masses and ocean currents.',
            bank: G7_SCIENCE_BANKS.weather,
          },
        ],
      },
      {
        id: 'g7-sci-u3-l3',
        unitId: 'g7-sci-u3',
        title: 'Weather Fronts, Air Pressure & Storm Dynamics',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-systems/x87d03b443efbea0a:weather-and-climate/v/weather-fronts',
        videoTitle: 'Weather Fronts and Air Pressure',
        reading: 'Cold fronts, warm fronts, and stationary fronts mark collisions between contrasting air masses. Low-pressure systems bring precipitation, while high-pressure systems bring dry skies.',
        principles: [
          {
            id: 'p-g7-sci-fronts-pressure',
            title: 'Weather Fronts and Pressure Systems',
            standard: 'MS-ESS2-5',
            summary: 'Collect data to provide evidence for how the motions and complex interactions of air masses result in changes in weather conditions.',
            bank: G7_SCIENCE_BANKS.weather,
          },
        ],
      },
      {
        id: 'g7-sci-u3-l4',
        unitId: 'g7-sci-u3',
        title: 'Unit 3 Test: Hydrosphere & Weather Systems Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Unit 3 Test Review',
        reading: 'Assessment testing solar energy convection, Coriolis deflection, ocean currents, and weather front meteorology.',
        principles: [
          {
            id: 'p-g7-sci-u3-test',
            title: 'Weather and Atmosphere Systems Exam',
            standard: 'MS-ESS2-6',
            summary: 'Demonstrate complete mastery of atmospheric and hydrosphere circulation science.',
            bank: G7_SCIENCE_BANKS.weather,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: EARTH-MOON-SUN CYCLES: PHASES, ECLIPSES & TIDES (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u4',
    title: 'Unit 4: Earth-Moon-Sun Cycles: Phases, Eclipses & Tides',
    standards: ['MS-ESS1-1', 'OH.7.ESS.1'],
    lessons: [
      {
        id: 'g7-sci-u4-l1',
        unitId: 'g7-sci-u4',
        title: 'Moon Phases & 29.5-Day Lunar Cycle',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space/x87d03b443efbea0a:moon-phases/v/phases-of-the-moon',
        videoTitle: 'Phases of the Moon',
        reading: 'The Moon orbits Earth every 27.3 days (29.5 days between new moons). Changing phases result from viewing different portions of the Moon’s illuminated half.',
        principles: [
          {
            id: 'p-g7-sci-moon-phases',
            title: 'Lunar Orbital Phases',
            standard: 'MS-ESS1-1',
            summary: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases.',
            bank: G7_SCIENCE_BANKS.astronomy,
          },
        ],
      },
      {
        id: 'g7-sci-u4-l2',
        unitId: 'g7-sci-u4',
        title: 'Solar and Lunar Eclipses: Umbra and Penumbra',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space/x87d03b443efbea0a:eclipses/v/solar-and-lunar-eclipses',
        videoTitle: 'Solar and Lunar Eclipses',
        reading: 'In a solar eclipse, the Moon casts a shadow on Earth. In a lunar eclipse, Earth blocks sunlight from reaching the full Moon. Eclipses occur only when orbits align.',
        principles: [
          {
            id: 'p-g7-sci-eclipses',
            title: 'Mechanics of Solar and Lunar Eclipses',
            standard: 'MS-ESS1-1',
            summary: 'Model the geometric alignments that create solar and lunar eclipses.',
            bank: G7_SCIENCE_BANKS.astronomy,
          },
        ],
      },
      {
        id: 'g7-sci-u4-l3',
        unitId: 'g7-sci-u4',
        title: 'Gravitational Tides: Spring vs. Neap Tides',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space/x87d03b443efbea0a:ocean-tides/v/ocean-tides-explained',
        videoTitle: 'Ocean Tides and Gravitational Pull',
        reading: 'The Moon’s differential gravity pulls ocean water into two opposite bulges. Spring tides occur during new/full moons (maximum range); neap tides occur during quarter moons.',
        principles: [
          {
            id: 'p-g7-sci-tides-grav',
            title: 'Gravitational Tides and Orbital Resonance',
            standard: 'MS-ESS1-1',
            summary: 'Explain how the gravitational pull of the moon and sun causes cyclical ocean tides.',
            bank: G7_SCIENCE_BANKS.astronomy,
          },
        ],
      },
      {
        id: 'g7-sci-u4-l4',
        unitId: 'g7-sci-u4',
        title: 'Unit 4 Test: Earth-Moon-Sun Cycles Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Unit 4 Test Review',
        reading: 'Assessment testing lunar phases, eclipse orbital geometry, and tidal gravitational mechanics.',
        principles: [
          {
            id: 'p-g7-sci-u4-test',
            title: 'Earth-Moon-Sun Systems Exam',
            standard: 'MS-ESS1-1',
            summary: 'Demonstrate complete mastery of lunar phases, eclipses, and tidal science.',
            bank: G7_SCIENCE_BANKS.astronomy,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: BIOMES, FOOD PYRAMIDS & NUTRIENT CYCLES (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u5',
    title: 'Unit 5: Biomes, Food Pyramids & Nutrient Cycles',
    standards: ['MS-LS2-2', 'MS-LS2-3'],
    lessons: [
      {
        id: 'g7-sci-u5-l1',
        unitId: 'g7-sci-u5',
        title: 'Energy Pyramids & The 10% Trophic Rule',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/biology/ecology/energy-flow-through-ecosystems/v/energy-flow-and-primary-productivity',
        videoTitle: 'Energy Pyramids and Trophic Transfer',
        reading: 'Only about 10% of chemical energy stored as biomass transfers up each trophic level, limiting food chains to 4 or 5 levels.',
        principles: [
          {
            id: 'p-g7-sci-trophic-pyramid',
            title: 'Trophic Energy Pyramids',
            standard: 'MS-LS2-3',
            summary: 'Develop a model to describe the cycling of matter and flow of energy among living and nonliving parts of an ecosystem.',
            bank: G7_SCIENCE_BANKS.ecology,
          },
        ],
      },
      {
        id: 'g7-sci-u5-l2',
        unitId: 'g7-sci-u5',
        title: 'Carbon and Nitrogen Biogeochemical Cycles',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/v/carbon-cycle',
        videoTitle: 'The Carbon and Nitrogen Cycles',
        reading: 'Carbon cycles through photosynthesis, respiration, and fossil fuels. Nitrogen-fixing bacteria in legume roots convert atmospheric N₂ into bioavailable nitrates.',
        principles: [
          {
            id: 'p-g7-sci-nutrient-cycles',
            title: 'Biogeochemical Nutrient Cycling',
            standard: 'MS-LS2-3',
            summary: 'Model how matter cycles continuously through ecosystems via cellular respiration, photosynthesis, and decomposition.',
            bank: G7_SCIENCE_BANKS.ecology,
          },
        ],
      },
      {
        id: 'g7-sci-u5-l3',
        unitId: 'g7-sci-u5',
        title: 'Major Terrestrial and Aquatic Biomes of Earth',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/biology/ecology/biomes/v/terrestrial-biomes',
        videoTitle: 'World Biomes and Adaptations',
        reading: 'Biomes are large regional ecosystems defined by climate and vegetation: tropical rainforest, temperate deciduous forest, taiga, tundra, desert, and oceans.',
        principles: [
          {
            id: 'p-g7-sci-biomes',
            title: 'Global Biomes and Climate Zones',
            standard: 'MS-LS2-2',
            summary: 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems.',
            bank: G7_SCIENCE_BANKS.ecology,
          },
        ],
      },
      {
        id: 'g7-sci-u5-l4',
        unitId: 'g7-sci-u5',
        title: 'Unit 5 Test: Ecology & Nutrient Cycling Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/biology/ecology',
        videoTitle: 'Unit 5 Test Review',
        reading: 'Assessment testing energy pyramids, 10% trophic efficiency, carbon/nitrogen cycles, and biome characteristics.',
        principles: [
          {
            id: 'p-g7-sci-u5-test',
            title: 'Ecology and Nutrient Cycles Exam',
            standard: 'MS-LS2-3',
            summary: 'Demonstrate complete mastery of middle school ecological and biome science.',
            bank: G7_SCIENCE_BANKS.ecology,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: PLATE TECTONICS & EARTH HISTORY (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u6',
    title: 'Unit 6: Plate Tectonics & Earth History',
    standards: ['MS-ESS2-1', 'MS-ESS2-2', 'MS-ESS2-3'],
    lessons: [
      {
        id: 'g7-sci-u6-l1',
        unitId: 'g7-sci-u6',
        title: 'Plate Boundaries: Convergent, Divergent, and Transform',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-history/x87d03b443efbea0a:plate-tectonics/v/plate-tectonics',
        videoTitle: 'Plate Tectonics and Boundaries',
        reading: 'Lithospheric plates float on the semi-fluid asthenosphere. Convergent boundaries collide (mountains, trenches), divergent spread (mid-ocean ridges), and transform slide past (faults).',
        principles: [
          {
            id: 'p-g7-sci-plate-bounds',
            title: 'Tectonic Plate Boundaries',
            standard: 'MS-ESS2-2',
            summary: 'Construct an explanation based on evidence for how geoscience processes have changed Earth’s surface at varying time and spatial scales.',
            bank: G7_SCIENCE_BANKS.tectonics,
          },
        ],
      },
      {
        id: 'g7-sci-u6-l2',
        unitId: 'g7-sci-u6',
        title: 'Continental Drift and Seafloor Spreading Evidence',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-history/x87d03b443efbea0a:plate-tectonics/v/continental-drift',
        videoTitle: 'Evidence for Continental Drift',
        reading: 'Fossil correlations (Mesosaurus, Glossopteris), matching rock strata across oceans, and magnetic zebra stripes on the seafloor prove continents drift over time.',
        principles: [
          {
            id: 'p-g7-sci-drift-evidence',
            title: 'Evidence of Continental Drift',
            standard: 'MS-ESS2-3',
            summary: 'Analyze and interpret data on the distribution of fossils and rocks, continental shapes, and seafloor structures to provide evidence of past plate motions.',
            bank: G7_SCIENCE_BANKS.tectonics,
          },
        ],
      },
      {
        id: 'g7-sci-u6-l3',
        unitId: 'g7-sci-u6',
        title: 'Geologic Time Scale & Law of Superposition',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-history/x87d03b443efbea0a:geologic-time/v/geologic-time-scale',
        videoTitle: 'Geologic Time and Stratigraphy',
        reading: 'The Law of Superposition states that in undeformed sedimentary rock, younger layers lie on top of older layers. Index fossils date relative ages across global strata.',
        principles: [
          {
            id: 'p-g7-sci-superposition',
            title: 'Relative Dating and Superposition',
            standard: 'MS-ESS1-4',
            summary: 'Construct a scientific explanation based on evidence from rock strata for how the geologic time scale is used to organize Earth’s history.',
            bank: G7_SCIENCE_BANKS.tectonics,
          },
        ],
      },
      {
        id: 'g7-sci-u6-l4',
        unitId: 'g7-sci-u6',
        title: 'Unit 6 Test: Plate Tectonics & Earth History Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Unit 6 Test Review',
        reading: 'Assessment testing plate boundary geology, seafloor spreading, relative dating, and stratigraphy.',
        principles: [
          {
            id: 'p-g7-sci-u6-test',
            title: 'Plate Tectonics & Geologic Time Exam',
            standard: 'MS-ESS2-2',
            summary: 'Demonstrate complete mastery of plate tectonics and historical geology standards.',
            bank: G7_SCIENCE_BANKS.tectonics,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: THERMAL ENERGY TRANSFER & HEAT WAVES (4 Lessons)
  // =========================================================================
  {
    id: 'g7-sci-u7',
    title: 'Unit 7: Thermal Energy Transfer & Heat Waves',
    standards: ['MS-PS3-3', 'MS-PS3-4', 'MS-PS3-5'],
    lessons: [
      {
        id: 'g7-sci-u7-l1',
        unitId: 'g7-sci-u7',
        title: 'Conduction, Convection, and Thermal Radiation',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/physics/thermodynamics/thermal-conduction/v/thermal-conduction-convection-and-radiation',
        videoTitle: 'Methods of Heat Transfer',
        reading: 'Thermal energy transfers in three modes: conduction (particle collision), convection (bulk fluid circulation), and radiation (electromagnetic waves through space).',
        principles: [
          {
            id: 'p-g7-sci-heat-modes',
            title: 'Modes of Heat Transfer',
            standard: 'MS-PS3-4',
            summary: 'Plan an investigation to determine the relationships among the energy transferred, the type of matter, the mass, and the change in the average kinetic energy of the particles.',
            bank: G7_SCIENCE_BANKS.thermal,
          },
        ],
      },
      {
        id: 'g7-sci-u7-l2',
        unitId: 'g7-sci-u7',
        title: 'Thermal Insulators, Conductors & Device Design',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/physics/thermodynamics/thermal-conduction/v/thermal-insulators',
        videoTitle: 'Thermal Conductors and Insulators',
        reading: 'Thermal conductors (metals) allow rapid heat transfer. Thermal insulators (foam, fiberglass, vacuum) resist heat transfer to maintain temperatures.',
        principles: [
          {
            id: 'p-g7-sci-insulators',
            title: 'Thermal Insulation and Engineering',
            standard: 'MS-PS3-3',
            summary: 'Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer.',
            bank: G7_SCIENCE_BANKS.thermal,
          },
        ],
      },
      {
        id: 'g7-sci-u7-l3',
        unitId: 'g7-sci-u7',
        title: 'Molecular Kinetic Energy and Temperature',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/physics/thermodynamics/temp-kinetic-theory-ideal-gas-law/v/temperature-and-kinetic-theory',
        videoTitle: 'Temperature and Molecular Motion',
        reading: 'Temperature is a measure of the average kinetic energy of particles in a sample. Heat is the thermal energy transferred between samples at different temperatures.',
        principles: [
          {
            id: 'p-g7-sci-temp-ke',
            title: 'Temperature and Particle Kinetic Motion',
            standard: 'MS-PS3-4',
            summary: 'Explain temperature as the average kinetic energy of vibrating or moving particles.',
            bank: G7_SCIENCE_BANKS.thermal,
          },
        ],
      },
      {
        id: 'g7-sci-u7-l4',
        unitId: 'g7-sci-u7',
        title: 'Unit 7 Test: Thermal Energy Transfer Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/physics',
        videoTitle: 'Unit 7 Test Review',
        reading: 'Assessment testing conduction, convection, radiation, thermal insulation, and particle kinetic theory.',
        principles: [
          {
            id: 'p-g7-sci-u7-test',
            title: 'Thermal Energy Transfer Exam',
            standard: 'MS-PS3-3',
            summary: 'Demonstrate complete mastery of thermal physics and energy transfer.',
            bank: G7_SCIENCE_BANKS.thermal,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: COURSE CHALLENGE
  // =========================================================================
  {
    id: 'g7-sci-u8',
    title: 'Unit 8: Grade 7 Science Course Challenge',
    standards: ['MS-PS', 'MS-LS', 'MS-ESS'],
    lessons: [
      {
        id: 'g7-sci-u8-l1',
        unitId: 'g7-sci-u8',
        title: 'Course Challenge Part 1: Chemistry, Periodic Table & Thermal Physics',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-chemistry',
        videoTitle: 'Science Course Challenge Part 1',
        reading: 'Comprehensive review testing conservation of mass, periodic table families, and thermal energy conduction/convection.',
        principles: [
          {
            id: 'p-g7-sci-cc-part1',
            title: 'Physical Science Capstone',
            standard: 'MS-PS1',
            summary: 'Comprehensive evaluation of Grade 7 physical chemistry and thermal standards.',
            bank: G7_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g7-sci-u8-l2',
        unitId: 'g7-sci-u8',
        title: 'Course Challenge Part 2: Atmosphere, Hydrosphere & Weather Systems',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Science Course Challenge Part 2',
        reading: 'Comprehensive review covering atmospheric circulation, Coriolis effect, ocean currents, and meteorology.',
        principles: [
          {
            id: 'p-g7-sci-cc-part2',
            title: 'Earth Systems Capstone',
            standard: 'MS-ESS2',
            summary: 'Comprehensive evaluation of Grade 7 atmospheric and Earth systems standards.',
            bank: G7_SCIENCE_BANKS.weather,
          },
        ],
      },
      {
        id: 'g7-sci-u8-l3',
        unitId: 'g7-sci-u8',
        title: 'Course Challenge Part 3: Earth-Moon-Sun Cycles & Plate Tectonics',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Science Course Challenge Part 3',
        reading: 'Final comprehensive assessment covering lunar phases, eclipses, tides, plate boundaries, and geologic time.',
        principles: [
          {
            id: 'p-g7-sci-cc-part3',
            title: 'Space & Geologic History Capstone',
            standard: 'MS-ESS1',
            summary: 'Comprehensive evaluation of Grade 7 astronomy, plate tectonics, and ecology standards.',
            bank: G7_SCIENCE_BANKS.astronomy,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: EXPLORE SCIENCE THROUGH SIMULATIONS & LABS (Non-graded enrichment)
  // =========================================================================
  {
    id: 'g7-sci-u9',
    title: 'Unit 9: Explore Science Through Simulations & Labs',
    kind: 'explore',
    standards: ['MS-PS1-5', 'MS-ESS2-6', 'MS-ESS1-1'],
    lessons: [],
    exploreItems: [
      {
        id: 'g7-sci-exp-phet-reactants',
        title: 'PhET Simulation: Reactants, Products and Leftovers',
        type: 'simulation',
        description: 'Combine atoms of hydrogen, oxygen, and carbon to build custom water and methane molecules, verifying conservation of matter.',
        url: 'https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'Why do leftover unbonded atoms remain when reactants are not supplied in exact balanced proportions?',
        requiresParentPin: false,
      },
      {
        id: 'g7-sci-exp-phet-greenhouse',
        title: 'PhET Simulation: The Greenhouse Effect',
        type: 'simulation',
        description: 'Adjust concentrations of carbon dioxide and methane in the atmosphere to observe how infrared radiation is trapped near Earth’s surface.',
        url: 'https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'How does atmospheric gas composition alter the equilibrium surface temperature of the planet?',
        requiresParentPin: false,
      },
      {
        id: 'g7-sci-exp-phet-plate',
        title: 'PhET Simulation: Plate Tectonics Laboratory',
        type: 'simulation',
        description: 'Control crust temperature, composition, and thickness to observe oceanic-continental subduction and mountain formation in real time.',
        url: 'https://phet.colorado.edu/en/simulations/plate-tectonics',
        estimatedMinutes: 20,
        reflectionPrompt: 'Why does denser oceanic basalt always subduct underneath lighter continental granite?',
        requiresParentPin: false,
      },
      {
        id: 'g7-sci-exp-density-convection',
        title: 'Hands-on Kitchen Lab: Salinity & Temperature Water Convection Cell',
        type: 'hands_on',
        description: 'Layer warm colored freshwater over cold salted water in a clear container to observe density stratification and thermohaline circulation.',
        estimatedMinutes: 30,
        materials: ['Clear plastic shoe box or glass baking dish', 'Food coloring (red and blue)', 'Table salt', 'Ice water and warm water'],
        steps: [
          'Fill half the container with room temperature water.',
          'Mix 3 tablespoons of salt and blue food coloring into ice-cold water in a cup.',
          'Mix red food coloring into warm tap water in a separate cup.',
          'Gently pour the blue saltwater down the side of the container and observe it sink to the bottom.',
          'Gently pour warm red water onto the top and observe how the two layers resist mixing until temperatures equalize.',
        ],
        reflectionPrompt: 'How does this experiment model the deep thermohaline conveyor belt currents in Earth’s oceans?',
        requiresParentPin: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 10: TEACHER RESOURCES (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g7-sci-u10',
    title: 'Unit 10: Teacher Resources & Pacing',
    kind: 'teacher_resources',
    standards: ['MS-PS', 'MS-LS', 'MS-ESS'],
    lessons: [],
    resources: [
      {
        id: 'g7-sci-res-pacing',
        title: 'Grade 7 Science 36-Week Pacing Guide',
        kind: 'pacing_guide',
        description: 'Comprehensive 36-week schedule allotting 4–5 weeks per major NGSS and Ohio science unit.',
        body: `## Grade 7 Science Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Elements, Compounds & Conservation of Matter (MS-PS1-1, MS-PS1-5)
- **Weeks 5–8**: Unit 2 — Periodic Table Groups & Chemical Properties (OH.7.PS.1)
- **Weeks 9–13**: Unit 3 — Hydrosphere, Atmosphere & Weather Systems (MS-ESS2-4..6)
- **Week 14**: Quarter 1 Physical & Atmospheric Science Assessment
- **Weeks 15–18**: Unit 4 — Earth-Moon-Sun Cycles: Phases, Eclipses & Tides (MS-ESS1-1)
- **Weeks 19–23**: Unit 5 — Biomes, Food Pyramids & Nutrient Cycles (MS-LS2-2..3)
- **Weeks 24–28**: Unit 6 — Plate Tectonics & Earth History (MS-ESS2-1..3)
- **Week 29**: Quarter 2 & 3 Astronomy and Geology Review
- **Weeks 30–34**: Unit 7 — Thermal Energy Transfer & Heat Waves (MS-PS3-3..5)
- **Weeks 35–36**: Unit 8 — Capstone Science Simulations & Course Challenge`,
      },
      {
        id: 'g7-sci-res-standards',
        title: 'NGSS & Ohio Science Standards Crosswalk',
        kind: 'standards_map',
        description: 'Crosswalk mapping each Grade 7 unit to Ohio Learning Standards and Next Generation Science Standards.',
        body: `| Unit | Standards | Target Focus |
|---|---|---|
| Unit 1 | MS-PS1-1, MS-PS1-5 | Elements, molecules, compounds, and conservation of mass in reactions |
| Unit 2 | OH.7.PS.1 | Atomic structure, periodic table groups, metals vs nonmetals |
| Unit 3 | MS-ESS2-4..6 | Atmospheric convection, Coriolis effect, ocean currents, weather fronts |
| Unit 4 | MS-ESS1-1, OH.7.ESS.1 | Lunar phases, solar/lunar eclipses, spring and neap ocean tides |
| Unit 5 | MS-LS2-2, MS-LS2-3 | 10% trophic rule, carbon/nitrogen cycling, global biomes |
| Unit 6 | MS-ESS2-1..3 | Plate boundaries, continental drift, Law of Superposition |
| Unit 7 | MS-PS3-3..5 | Conduction, convection, radiation, thermal insulation engineering |`,
      },
      {
        id: 'g7-sci-res-rubric',
        title: 'Middle School Scientific Inquiry & Lab Journal Rubric',
        kind: 'assessment_rubric',
        description: 'Scoring guide for evaluating student science notebooks, lab hypotheses, data recording, and engineering solutions.',
        body: `### Scientific Inquiry 4-Point Scoring Rubric
- **Level 4 (Advanced)**: States a clear testable hypothesis; records neat quantitative data; explains results using standard scientific vocabulary (e.g., Coriolis effect, thermohaline circulation, superposition).
- **Level 3 (Proficient)**: States a reasonable prediction; records complete observational data; draws logical conclusions from experiment results.
- **Level 2 (Developing)**: Records partial observations; requires prompting to link evidence to scientific principles.
- **Level 1 (Beginning)**: Incomplete data record; struggles to state how experiment results relate to the lesson topic.`,
      },
    ],
  },
]
