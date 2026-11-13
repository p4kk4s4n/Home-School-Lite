import { Unit } from '../../../types'
import { G5_SCIENCE_BANKS } from './banks'

export const G5_SCIENCE_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: STRUCTURE & PROPERTIES OF MATTER (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u1',
    title: 'Unit 1: Structure & Properties of Matter',
    standards: ['5-PS1-1', '5-PS1-2', '5-PS1-3'],
    lessons: [
      {
        id: 'g5-sci-u1-l1',
        unitId: 'g5-sci-u1',
        title: 'Particles of Matter Too Small to Be Seen',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Particles%20of%20Matter%205th%20grade%20science',
        videoTitle: 'Particles of Matter',
        reading: 'All matter is composed of particles too microscopic to be seen. Examples include air filling a basketball or sugar dissolving invisibly into water.',
        principles: [
          {
            id: 'p-g5-sci-part-matter',
            title: 'Microscopic Particle Theory of Matter',
            standard: '5-PS1-1',
            summary: 'Develop a model to describe that matter is made of particles too small to be seen.',
            bank: G5_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g5-sci-u1-l2',
        unitId: 'g5-sci-u1',
        title: 'Conservation of Matter During State Changes',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Conservation%20of%20Mass%20in%20Physical%20Changes%205th%20grade%20science',
        videoTitle: 'Conservation of Mass in Physical Changes',
        reading: 'When water freezes into ice or evaporates into vapor, total weight does not change. Mass is conserved across all heating, cooling, and phase shifts.',
        principles: [
          {
            id: 'p-g5-sci-conserve-mass',
            title: 'Conservation of Matter Across Phase Changes',
            standard: '5-PS1-2',
            summary: 'Measure and graph quantities to provide evidence that regardless of the type of change, the total weight of matter is conserved.',
            bank: G5_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g5-sci-u1-l3',
        unitId: 'g5-sci-u1',
        title: 'Identifying Materials by Characteristic Properties',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Identifying%20Materials%20by%20Properties%205th%20grade%20science',
        videoTitle: 'Identifying Materials by Properties',
        reading: 'Substances have unique properties like color, hardness, reflectivity, electrical and thermal conductivity, response to magnetic forces, and solubility.',
        principles: [
          {
            id: 'p-g5-sci-mat-prop',
            title: 'Characteristic Properties of Substances',
            standard: '5-PS1-3',
            summary: 'Make observations and measurements to identify materials based on their properties.',
            bank: G5_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g5-sci-u1-l4',
        unitId: 'g5-sci-u1',
        title: 'Unit 1 Test: Properties of Matter Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%201%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 1 Test Review',
        reading: 'Assessment testing particle models, conservation of weight, and identifying unknown materials.',
        principles: [
          {
            id: 'p-g5-sci-u1-test',
            title: 'Properties of Matter Exam',
            standard: '5-PS1-1',
            summary: 'Demonstrate complete mastery of 5th grade matter standards.',
            bank: G5_SCIENCE_BANKS.matter,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: CHEMICAL REACTIONS & MIXING SUBSTANCES (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u2',
    title: 'Unit 2: Chemical Reactions & Mixing Substances',
    standards: ['5-PS1-4'],
    lessons: [
      {
        id: 'g5-sci-u2-l1',
        unitId: 'g5-sci-u2',
        title: 'Mixtures vs. Solutions and Separation Techniques',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Mixtures%20and%20Solutions%205th%20grade%20science',
        videoTitle: 'Mixtures and Solutions',
        reading: 'In a mixture, individual substances retain their chemical identities. Separation techniques include filtering, magnetism, sifting, and evaporation.',
        principles: [
          {
            id: 'p-g5-sci-mixtures',
            title: 'Properties of Mixtures and Solutions',
            standard: '5-PS1-4',
            summary: 'Conduct an investigation to determine whether the mixing of two or more substances results in new substances.',
            bank: G5_SCIENCE_BANKS.reactions,
          },
        ],
      },
      {
        id: 'g5-sci-u2-l2',
        unitId: 'g5-sci-u2',
        title: 'Evidence of Chemical Reactions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Evidence%20of%20Chemical%20Reactions%205th%20grade%20science',
        videoTitle: 'Evidence of Chemical Reactions',
        reading: 'A chemical reaction occurs when bonds break and atoms rearrange. Evidence includes unexpected gas formation, heat emission, or color change.',
        principles: [
          {
            id: 'p-g5-sci-evidence-rx',
            title: 'Detecting Chemical Reactions',
            standard: '5-PS1-4',
            summary: 'Identify evidence proving new substances with different properties formed.',
            bank: G5_SCIENCE_BANKS.reactions,
          },
        ],
      },
      {
        id: 'g5-sci-u2-l3',
        unitId: 'g5-sci-u2',
        title: 'Conservation of Mass in Chemical Reactions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Conservation%20in%20Chemical%20Reactions%205th%20grade%20science',
        videoTitle: 'Conservation in Chemical Reactions',
        reading: 'When vinegar and baking soda react inside a sealed container, total mass before and after remains identical because all gas is trapped.',
        principles: [
          {
            id: 'p-g5-sci-rx-conserve',
            title: 'Mass Conservation During Chemical Reactions',
            standard: '5-PS1-2',
            summary: 'Prove total weight is conserved during chemical reactions in closed systems.',
            bank: G5_SCIENCE_BANKS.reactions,
          },
        ],
      },
      {
        id: 'g5-sci-u2-l4',
        unitId: 'g5-sci-u2',
        title: 'Unit 2 Test: Chemical Reactions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%202%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 2 Test Review',
        reading: 'Comprehensive assessment of mixtures, solutions, chemical reactions, and mass conservation.',
        principles: [
          {
            id: 'p-g5-sci-u2-test',
            title: 'Chemical Reactions Exam',
            standard: '5-PS1-4',
            summary: 'Assess complete understanding of chemical vs physical changes and reaction evidence.',
            bank: G5_SCIENCE_BANKS.reactions,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: ENERGY & PLANT MATTER IN ECOSYSTEMS (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u3',
    title: 'Unit 3: Energy & Plant Matter in Ecosystems',
    standards: ['5-LS1-1', '5-PS3-1'],
    lessons: [
      {
        id: 'g5-sci-u3-l1',
        unitId: 'g5-sci-u3',
        title: 'Photosynthesis: Where Plant Mass Comes From',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Intro%20to%20Photosynthesis%205th%20grade%20science',
        videoTitle: 'Intro to Photosynthesis',
        reading: 'Contrary to common belief, plants do not get their mass from soil. Jan Baptist van Helmont proved trees gain mass almost entirely from air and water.',
        principles: [
          {
            id: 'p-g5-sci-photo-mass',
            title: 'Plant Biomass from Air and Water',
            standard: '5-LS1-1',
            summary: 'Support an argument that plants get the materials they need for growth chiefly from air and water.',
            bank: G5_SCIENCE_BANKS.photosynthesis,
          },
        ],
      },
      {
        id: 'g5-sci-u3-l2',
        unitId: 'g5-sci-u3',
        title: 'Sunlight as the Primary Energy Driver',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Sunlight%20Energy%20Flow%205th%20grade%20science',
        videoTitle: 'Sunlight Energy Flow',
        reading: 'Energy in all animal food was once energy from the Sun that was captured by plants through photosynthesis.',
        principles: [
          {
            id: 'p-g5-sci-sun-energy',
            title: 'Solar Energy in Biological Systems',
            standard: '5-PS3-1',
            summary: 'Use models to describe that energy in animals’ food was once energy from the sun.',
            bank: G5_SCIENCE_BANKS.photosynthesis,
          },
        ],
      },
      {
        id: 'g5-sci-u3-l3',
        unitId: 'g5-sci-u3',
        title: 'Gas Exchange in Plants: Stomata & Respiration',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Plant%20Gas%20Exchange%205th%20grade%20science',
        videoTitle: 'Plant Gas Exchange',
        reading: 'Stomata allow carbon dioxide into leaves and release oxygen gas. Plants also break down sugars at night during cellular respiration.',
        principles: [
          {
            id: 'p-g5-sci-stomata',
            title: 'Stomata and Cellular Gas Exchange',
            standard: '5-LS1-1',
            summary: 'Describe the role of stomata in plant respiration and gas transport.',
            bank: G5_SCIENCE_BANKS.photosynthesis,
          },
        ],
      },
      {
        id: 'g5-sci-u3-l4',
        unitId: 'g5-sci-u3',
        title: 'Unit 3 Test: Photosynthesis & Plant Growth Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%203%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 3 Test Review',
        reading: 'Assessment testing understanding of photosynthesis chemistry, plant mass origins, and solar energy capture.',
        principles: [
          {
            id: 'p-g5-sci-u3-test',
            title: 'Photosynthesis & Plant Growth Exam',
            standard: '5-LS1-1',
            summary: 'Demonstrate complete proficiency with photosynthesis mechanisms.',
            bank: G5_SCIENCE_BANKS.photosynthesis,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: MATTER FLOW & ECOSYSTEM WEBS (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u4',
    title: 'Unit 4: Matter Flow & Ecosystem Webs',
    standards: ['5-LS2-1'],
    lessons: [
      {
        id: 'g5-sci-u4-l1',
        unitId: 'g5-sci-u4',
        title: 'Producers, Consumers, and Apex Predators',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Food%20Chains%20and%20Webs%205th%20grade%20science',
        videoTitle: 'Food Chains and Webs',
        reading: 'Producers make their own food. Primary consumers eat producers, secondary consumers eat herbivores, and apex predators sit at the top.',
        principles: [
          {
            id: 'p-g5-sci-trophic',
            title: 'Trophic Levels and Food Web Roles',
            standard: '5-LS2-1',
            summary: 'Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment.',
            bank: G5_SCIENCE_BANKS.foodWebs,
          },
        ],
      },
      {
        id: 'g5-sci-u4-l2',
        unitId: 'g5-sci-u4',
        title: 'Decomposers and Soil Nutrient Cycling',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Decomposers%20in%20Ecosystems%205th%20grade%20science',
        videoTitle: 'Decomposers in Ecosystems',
        reading: 'Fungi, earthworms, and bacteria break down dead organisms and waste, recycling nitrogen and minerals back into the soil for plants.',
        principles: [
          {
            id: 'p-g5-sci-decomposers',
            title: 'Decomposition and Nutrient Recycling',
            standard: '5-LS2-1',
            summary: 'Explain the essential role of decomposers in replenishing soil matter.',
            bank: G5_SCIENCE_BANKS.foodWebs,
          },
        ],
      },
      {
        id: 'g5-sci-u4-l3',
        unitId: 'g5-sci-u4',
        title: 'Ecosystem Disruptions and Food Web Collapse',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Food%20Web%20Disruptions%205th%20grade%20science',
        videoTitle: 'Food Web Disruptions',
        reading: 'Removing a keystone species or introducing an invasive species creates cascading effects that destabilize the entire web.',
        principles: [
          {
            id: 'p-g5-sci-disruptions',
            title: 'Ecosystem Interdependence and Disruptions',
            standard: '5-LS2-1',
            summary: 'Predict the consequences of removing or adding organisms to an interconnected food web.',
            bank: G5_SCIENCE_BANKS.foodWebs,
          },
        ],
      },
      {
        id: 'g5-sci-u4-l4',
        unitId: 'g5-sci-u4',
        title: 'Unit 4 Test: Food Webs & Matter Cycling Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%204%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 4 Test Review',
        reading: 'Comprehensive assessment of food chains, food webs, decomposers, and ecosystem matter cycling.',
        principles: [
          {
            id: 'p-g5-sci-u4-test',
            title: 'Food Webs & Matter Cycling Exam',
            standard: '5-LS2-1',
            summary: 'Demonstrate complete mastery of ecosystem energy and matter flow.',
            bank: G5_SCIENCE_BANKS.foodWebs,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: EARTH'S FOUR SPHERES & WATER DISTRIBUTION (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u5',
    title: 'Unit 5: Earth’s Four Spheres & Water Distribution',
    standards: ['5-ESS2-1', '5-ESS2-2'],
    lessons: [
      {
        id: 'g5-sci-u5-l1',
        unitId: 'g5-sci-u5',
        title: 'Geosphere, Biosphere, Hydrosphere, and Atmosphere',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=The%20Four%20Spheres%20of%20Earth%205th%20grade%20science',
        videoTitle: 'The Four Spheres of Earth',
        reading: 'Earth consists of four interconnected systems: geosphere (rock and soil), hydrosphere (all water), atmosphere (air gases), and biosphere (living things).',
        principles: [
          {
            id: 'p-g5-sci-spheres-intro',
            title: 'Interactions of Earth’s Four Spheres',
            standard: '5-ESS2-1',
            summary: 'Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact.',
            bank: G5_SCIENCE_BANKS.spheres,
          },
        ],
      },
      {
        id: 'g5-sci-u5-l2',
        unitId: 'g5-sci-u5',
        title: 'Water Distribution: Oceans, Ice Caps, and Groundwater',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Water%20Distribution%20on%20Earth%205th%20grade%20science',
        videoTitle: 'Water Distribution on Earth',
        reading: 'Nearly 97% of Earth’s water is salty ocean water. Of the 3% freshwater, roughly two-thirds is frozen in glaciers, leaving less than 1% as accessible liquid freshwater.',
        principles: [
          {
            id: 'p-g5-sci-water-dist',
            title: 'Global Water Reservoir Distribution',
            standard: '5-ESS2-2',
            summary: 'Describe and graph the amounts of salt water and fresh water in various reservoirs to provide evidence about the distribution of water on Earth.',
            bank: G5_SCIENCE_BANKS.spheres,
          },
        ],
      },
      {
        id: 'g5-sci-u5-l3',
        unitId: 'g5-sci-u5',
        title: 'Sphere Interactions: Weathering, Clouds, and Transpiration',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Sphere%20Interactions%205th%20grade%20science',
        videoTitle: 'Sphere Interactions',
        reading: 'Plants (biosphere) pull water from soil (geosphere) and transpire vapor into clouds (atmosphere), which rain back down into lakes (hydrosphere).',
        principles: [
          {
            id: 'p-g5-sci-sphere-interact',
            title: 'Dynamic Sphere Feedback Loops',
            standard: '5-ESS2-1',
            summary: 'Analyze examples of complex interactions connecting all four Earth spheres.',
            bank: G5_SCIENCE_BANKS.spheres,
          },
        ],
      },
      {
        id: 'g5-sci-u5-l4',
        unitId: 'g5-sci-u5',
        title: 'Unit 5 Test: Earth Systems Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%205%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 5 Test Review',
        reading: 'Assessment testing understanding of Earth’s four major spheres and freshwater reservoir distribution.',
        principles: [
          {
            id: 'p-g5-sci-u5-test',
            title: 'Earth Systems Mastery Exam',
            standard: '5-ESS2-1',
            summary: 'Demonstrate complete proficiency with Earth system spheres and water science.',
            bank: G5_SCIENCE_BANKS.spheres,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: FORCE, MOTION, LIGHT & SOUND WAVES (4 Lessons - Ohio Standard)
  // =========================================================================
  {
    id: 'g5-sci-u6',
    title: 'Unit 6: Force, Motion, Light & Sound Waves',
    isOhioExtension: true,
    standards: ['OH.5.PS.1', 'OH.5.PS.2'],
    lessons: [
      {
        id: 'g5-sci-u6-l1',
        unitId: 'g5-sci-u6',
        title: 'Net Force, Mass, and Changes in Speed',
        isOhioExtension: true,
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Forces%20and%20Changes%20in%20Motion%205th%20grade%20science',
        videoTitle: 'Forces and Changes in Motion',
        reading: 'The amount of change in motion depends on the strength of the force and the mass of the object. A larger force or smaller mass produces faster acceleration.',
        principles: [
          {
            id: 'p-g5-sci-force-motion',
            title: 'Force, Mass, and Acceleration',
            standard: 'OH.5.PS.1',
            summary: 'The amount of change in movement of an object is based on the mass of the object and the amount of force exerted.',
            bank: G5_SCIENCE_BANKS.forcesWaves,
          },
        ],
      },
      {
        id: 'g5-sci-u6-l2',
        unitId: 'g5-sci-u6',
        title: 'Light Rays: Straight Paths, Reflection, and Refraction',
        isOhioExtension: true,
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Reflection%20and%20Refraction%20of%20Light%205th%20grade%20science',
        videoTitle: 'Reflection and Refraction of Light',
        reading: 'Light travels in straight lines until it interacts with matter. Reflection is light bouncing off smooth surfaces. Refraction is light bending as it changes speed in water or glass.',
        principles: [
          {
            id: 'p-g5-sci-light-optics',
            title: 'Geometric Optics: Reflection & Refraction',
            standard: 'OH.5.PS.2',
            summary: 'Light travels in straight lines until usually absorbed, reflected, or refracted.',
            bank: G5_SCIENCE_BANKS.forcesWaves,
          },
        ],
      },
      {
        id: 'g5-sci-u6-l3',
        unitId: 'g5-sci-u6',
        title: 'Sound Waves: Vibrations, Pitch, and Mediums',
        isOhioExtension: true,
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Production%20and%20Pitch%20of%20Sound%20Waves%205th%20grade%20science',
        videoTitle: 'Production and Pitch of Sound Waves',
        reading: 'All sound is produced by vibrating objects. Sound travels through solids, liquids, and gases, but cannot travel through the vacuum of empty space.',
        principles: [
          {
            id: 'p-g5-sci-sound-vibe',
            title: 'Sound Wave Generation and Transmission',
            standard: 'OH.5.PS.2',
            summary: 'Sound is produced by vibrating objects and requires a medium through which to travel.',
            bank: G5_SCIENCE_BANKS.forcesWaves,
          },
        ],
      },
      {
        id: 'g5-sci-u6-l4',
        unitId: 'g5-sci-u6',
        title: 'Unit 6 Test: Forces & Waves Mastery',
        kind: 'lesson_review',
        isOhioExtension: true,
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/physics',
        videoTitle: 'Unit 6 Test Review',
        reading: 'Assessment testing net force calculations, light path optics, and sound vibration properties.',
        principles: [
          {
            id: 'p-g5-sci-u6-test',
            title: 'Forces & Waves Mastery Exam',
            standard: 'OH.5.PS.1',
            summary: 'Demonstrate complete proficiency with Ohio Grade 5 physical science standards.',
            bank: G5_SCIENCE_BANKS.forcesWaves,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: EARTH'S ROTATION, ORBITS & STARS (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u7',
    title: 'Unit 7: Earth’s Rotation, Orbits & Stars',
    standards: ['5-ESS1-1', '5-ESS1-2', '5-PS2-1'],
    lessons: [
      {
        id: 'g5-sci-u7-l1',
        unitId: 'g5-sci-u7',
        title: 'Earth’s Daily Rotation, Day/Night & Shadow Tracking',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Earth%20Rotation%20and%20Shadows%205th%20grade%20science',
        videoTitle: 'Earth Rotation and Shadows',
        reading: 'Earth rotates counterclockwise on its axis once every 24 hours. Morning shadows are long, noon shadows are shortest, and evening shadows point east.',
        principles: [
          {
            id: 'p-g5-sci-rotation-shadow',
            title: 'Daily Rotation and Shadow Patterns',
            standard: '5-ESS1-2',
            summary: 'Represent data in graphical displays to reveal patterns of daily changes in length and direction of shadows, day and night.',
            bank: G5_SCIENCE_BANKS.spaceStars,
          },
        ],
      },
      {
        id: 'g5-sci-u7-l2',
        unitId: 'g5-sci-u7',
        title: 'Yearly Revolution, Seasonal Constellations & Gravity',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Seasonal%20Constellations%20and%20Revolution%205th%20grade%20science',
        videoTitle: 'Seasonal Constellations and Revolution',
        reading: 'Earth orbits the Sun in 365.25 days. Constellations shift seasonally because Earth faces different sectors of space at night.',
        principles: [
          {
            id: 'p-g5-sci-orbit-stars',
            title: 'Orbital Revolution and Constellation Shifts',
            standard: '5-ESS1-2',
            summary: 'Explain seasonal appearance of some stars in the night sky.',
            bank: G5_SCIENCE_BANKS.spaceStars,
          },
        ],
      },
      {
        id: 'g5-sci-u7-l3',
        unitId: 'g5-sci-u7',
        title: 'Star Brightness, Distance & Gravitational Center',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Star%20Brightness%20and%20Distance%205th%20grade%20science',
        videoTitle: 'Star Brightness and Distance',
        reading: 'The Sun is an average yellow dwarf star. It appears far brighter than giant stars like Betelgeuse simply because it is 93 million miles away, while other stars are light-years away.',
        principles: [
          {
            id: 'p-g5-sci-star-bright',
            title: 'Apparent vs Absolute Star Brightness',
            standard: '5-ESS1-1',
            summary: 'Support an argument that differences in the apparent brightness of the sun compared to other stars is due to their relative distances from the Earth.',
            bank: G5_SCIENCE_BANKS.spaceStars,
          },
        ],
      },
      {
        id: 'g5-sci-u7-l4',
        unitId: 'g5-sci-u7',
        title: 'Unit 7 Test: Space Systems Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%207%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 7 Test Review',
        reading: 'Assessment testing understanding of rotation, shadow tracking, orbits, star distances, and gravitational force.',
        principles: [
          {
            id: 'p-g5-sci-u7-test',
            title: 'Space Systems Mastery Exam',
            standard: '5-ESS1-1',
            summary: 'Demonstrate complete proficiency with Grade 5 Earth and Space science.',
            bank: G5_SCIENCE_BANKS.spaceStars,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: HUMAN IMPACT & EARTH'S RESOURCES (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u8',
    title: 'Unit 8: Human Impact & Earth’s Resources',
    standards: ['5-ESS3-1'],
    lessons: [
      {
        id: 'g5-sci-u8-l1',
        unitId: 'g5-sci-u8',
        title: 'Renewable vs. Nonrenewable Energy Resources',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Renewable%20and%20Nonrenewable%20Energy%205th%20grade%20science',
        videoTitle: 'Renewable and Nonrenewable Energy',
        reading: 'Fossil fuels (coal, oil, gas) take millions of years to form. Renewable energy (wind, solar, geothermal) replenishes naturally and reduces pollution.',
        principles: [
          {
            id: 'p-g5-sci-resources',
            title: 'Natural Resources and Energy Sustainability',
            standard: '5-ESS3-1',
            summary: 'Obtain and combine information about ways individual communities use science ideas to protect the Earth’s resources and environment.',
            bank: G5_SCIENCE_BANKS.humanImpact,
          },
        ],
      },
      {
        id: 'g5-sci-u8-l2',
        unitId: 'g5-sci-u8',
        title: 'Agricultural Runoff, Water Pollution & Watershed Protection',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Protecting%20Water%20Supplies%205th%20grade%20science',
        videoTitle: 'Protecting Water Supplies',
        reading: 'Runoff carrying fertilizer leads to toxic algae blooms in lakes and rivers. Planting buffer vegetation and wetland conservation filters groundwater.',
        principles: [
          {
            id: 'p-g5-sci-runoff',
            title: 'Water Protection and Watershed Stewardship',
            standard: '5-ESS3-1',
            summary: 'Analyze community solutions for filtering agricultural runoff and preserving freshwater.',
            bank: G5_SCIENCE_BANKS.humanImpact,
          },
        ],
      },
      {
        id: 'g5-sci-u8-l3',
        unitId: 'g5-sci-u8',
        title: 'Conservation, Recycling & Waste Reduction Strategies',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Recycling%20and%20Resource%20Conservation%205th%20grade%20science',
        videoTitle: 'Recycling and Resource Conservation',
        reading: 'The 3 Rs: Reduce waste consumption, Reuse materials, and Recycle metals, glass, and plastics to decrease landfill waste and save energy.',
        principles: [
          {
            id: 'p-g5-sci-conservation',
            title: 'Resource Conservation and Recycling Systems',
            standard: '5-ESS3-1',
            summary: 'Evaluate community recycling and resource reduction programs.',
            bank: G5_SCIENCE_BANKS.humanImpact,
          },
        ],
      },
      {
        id: 'g5-sci-u8-l4',
        unitId: 'g5-sci-u8',
        title: 'Unit 8 Test: Human Impact & Conservation Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Unit%208%20Test%20Review%205th%20grade%20science',
        videoTitle: 'Unit 8 Test Review',
        reading: 'Assessment testing knowledge of renewable energy, pollution reduction, and community environmental solutions.',
        principles: [
          {
            id: 'p-g5-sci-u8-test',
            title: 'Human Impact & Conservation Exam',
            standard: '5-ESS3-1',
            summary: 'Demonstrate complete proficiency in environmental science and resource conservation.',
            bank: G5_SCIENCE_BANKS.humanImpact,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: ENGINEERING DESIGN PROCESS (4 Lessons)
  // =========================================================================
  {
    id: 'g5-sci-u9',
    title: 'Unit 9: Engineering Design Process',
    standards: ['3-5-ETS1-1', '3-5-ETS1-2', '3-5-ETS1-3'],
    lessons: [
      {
        id: 'g5-sci-u9-l1',
        unitId: 'g5-sci-u9',
        title: 'Defining Problems: Criteria and Constraints',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Engineering%20Criteria%20and%20Constraints%205th%20grade%20science',
        videoTitle: 'Engineering Criteria and Constraints',
        reading: 'Engineering starts with a clearly defined problem. Criteria specify what the solution must achieve. Constraints limit the budget, materials, or time.',
        principles: [
          {
            id: 'p-g5-sci-eng-criteria',
            title: 'Defining Engineering Criteria & Constraints',
            standard: '3-5-ETS1-1',
            summary: 'Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost.',
            bank: G5_SCIENCE_BANKS.engineering,
          },
        ],
      },
      {
        id: 'g5-sci-u9-l2',
        unitId: 'g5-sci-u9',
        title: 'Building Prototypes and Fair Testing',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Prototypes%20and%20Fair%20Testing%205th%20grade%20science',
        videoTitle: 'Prototypes and Fair Testing',
        reading: 'A prototype is an initial test model. Engineers run fair tests where variables are controlled to isolate what causes a prototype to succeed or fail.',
        principles: [
          {
            id: 'p-g5-sci-eng-proto',
            title: 'Prototyping and Controlled Variable Testing',
            standard: '3-5-ETS1-2',
            summary: 'Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved.',
            bank: G5_SCIENCE_BANKS.engineering,
          },
        ],
      },
      {
        id: 'g5-sci-u9-l3',
        unitId: 'g5-sci-u9',
        title: 'Iterative Design & Data-Driven Optimization',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Iterative%20Engineering%20Design%205th%20grade%20science',
        videoTitle: 'Iterative Engineering Design',
        reading: 'Engineering is cyclical: test, collect data, redesign, and test again. Iterative optimization improves durability and performance.',
        principles: [
          {
            id: 'p-g5-sci-eng-optimize',
            title: 'Iterative Optimization and Redesign',
            standard: '3-5-ETS1-3',
            summary: 'Generate and compare multiple possible solutions to a problem based on how well each is likely to meet the criteria and constraints.',
            bank: G5_SCIENCE_BANKS.engineering,
          },
        ],
      },
      {
        id: 'g5-sci-u9-l4',
        unitId: 'g5-sci-u9',
        title: 'Unit 9 Test: Engineering Design Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics',
        videoTitle: 'Unit 9 Test Review',
        reading: 'Assessment testing criteria, constraints, prototype evaluation, and iterative redesign principles.',
        principles: [
          {
            id: 'p-g5-sci-u9-test',
            title: 'Engineering Design Mastery Exam',
            standard: '3-5-ETS1-1',
            summary: 'Demonstrate complete proficiency with elementary engineering design standards.',
            bank: G5_SCIENCE_BANKS.engineering,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 10: COURSE CHALLENGE
  // =========================================================================
  {
    id: 'g5-sci-u10',
    title: 'Unit 10: Grade 5 Science Course Challenge',
    standards: ['5-PS', '5-LS', '5-ESS', 'ETS1'],
    lessons: [
      {
        id: 'g5-sci-u10-l1',
        unitId: 'g5-sci-u10',
        title: 'Course Challenge Part 1: Physical Science & Matter Properties',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Science%20Course%20Challenge%20Part%201',
        videoTitle: 'Science Course Challenge Part 1',
        reading: 'Comprehensive review covering particle models of matter, physical/chemical changes, and force/motion waves.',
        principles: [
          {
            id: 'p-g5-sci-cc-part1',
            title: 'Physical Science Capstone',
            standard: '5-PS1',
            summary: 'Comprehensive evaluation of Grade 5 Physical Science standards.',
            bank: G5_SCIENCE_BANKS.matter,
          },
        ],
      },
      {
        id: 'g5-sci-u10-l2',
        unitId: 'g5-sci-u10',
        title: 'Course Challenge Part 2: Life Science & Ecosystem Energy Flow',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Science%20Course%20Challenge%20Part%202',
        videoTitle: 'Science Course Challenge Part 2',
        reading: 'Comprehensive review testing photosynthesis principles, food chains, decomposers, and matter cycling.',
        principles: [
          {
            id: 'p-g5-sci-cc-part2',
            title: 'Life Science Capstone',
            standard: '5-LS2',
            summary: 'Comprehensive evaluation of Grade 5 Life Science standards.',
            bank: G5_SCIENCE_BANKS.foodWebs,
          },
        ],
      },
      {
        id: 'g5-sci-u10-l3',
        unitId: 'g5-sci-u10',
        title: 'Course Challenge Part 3: Earth Spheres, Space & Environmental Conservation',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Science%20Course%20Challenge%20Part%203',
        videoTitle: 'Science Course Challenge Part 3',
        reading: 'Final capstone assessment covering Earth’s spheres, water distribution, solar system orbits, and engineering design solutions.',
        principles: [
          {
            id: 'p-g5-sci-cc-part3',
            title: 'Earth & Space Science Capstone',
            standard: '5-ESS2',
            summary: 'Comprehensive evaluation of Grade 5 Earth and Space Science standards.',
            bank: G5_SCIENCE_BANKS.spheres,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 11: EXPLORE SCIENCE THROUGH SIMULATIONS & LABS (Non-graded enrichment)
  // =========================================================================
  {
    id: 'g5-sci-u11',
    title: 'Unit 11: Explore Science Through Simulations & Labs',
    kind: 'explore',
    standards: ['5-PS1-1', '5-LS1-1', '5-ESS2-1'],
    lessons: [],
    exploreItems: [
      {
        id: 'g5-sci-exp-phet-states',
        title: 'PhET Simulation: States of Matter Basics',
        type: 'simulation',
        description: 'Heat, cool, and compress atoms and molecules of neon, argon, oxygen, and water to see phase transitions in real time.',
        url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'What happens to the spacing between water molecules when heated from ice to steam?',
        requiresParentPin: false,
      },
      {
        id: 'g5-sci-exp-phet-gravity-orbit',
        title: 'PhET Simulation: Gravity and Orbits',
        type: 'simulation',
        description: 'Change the mass of the Sun and Earth to observe how gravity shapes the orbit and length of a planet’s year.',
        url: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'What happens to Earth’s orbit if the Sun’s gravitational pull is turned off?',
        requiresParentPin: false,
      },
      {
        id: 'g5-sci-exp-phet-density',
        title: 'PhET Simulation: Density and Buoyancy Lab',
        type: 'simulation',
        description: 'Modify the mass and volume of custom blocks to test why objects sink or float in water.',
        url: 'https://phet.colorado.edu/sims/html/density/latest/density_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'Does cutting an object in half change its density? Explain why.',
        requiresParentPin: false,
      },
      {
        id: 'g5-sci-exp-van-helmont-lab',
        title: 'Hands-on Kitchen Lab: Van Helmont Seed Growth Trial',
        type: 'hands_on',
        description: 'Plant three bean seeds in clean, dry sand vs. moist potting soil to observe if early growth mass comes from soil minerals or water/air.',
        estimatedMinutes: 30,
        materials: ['3 dry pinto bean seeds', '2 clear plastic cups', 'Potting soil and clean sand', 'Kitchen scale or balance', 'Water'],
        steps: [
          'Weigh each dry bean seed and record starting weight.',
          'Place one bean in Cup A with moist potting soil.',
          'Place one bean in Cup B with moist sand (nutrient-free).',
          'Place both cups on a sunny windowsill and water equally for 10 days.',
          'Gently wash roots, dry on a paper towel, and reweigh both seedlings.',
        ],
        reflectionPrompt: 'Did the bean sprout and gain mass in nutrient-free sand? What does this prove about plant food?',
        requiresParentPin: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 12: TEACHER RESOURCES (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g5-sci-u12',
    title: 'Unit 12: Teacher Resources & Pacing',
    kind: 'teacher_resources',
    standards: ['5-PS', '5-LS', '5-ESS', 'ETS1'],
    lessons: [],
    resources: [
      {
        id: 'g5-sci-res-pacing',
        title: 'Grade 5 Science 36-Week Pacing Guide',
        kind: 'pacing_guide',
        description: 'Comprehensive 36-week schedule allotting 3–4 weeks per unit with built-in lab weeks and review periods.',
        body: `## Grade 5 Science Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Structure & Properties of Matter (5-PS1-1, 5-PS1-2, 5-PS1-3)
- **Weeks 5–8**: Unit 2 — Chemical Reactions & Mixing Substances (5-PS1-4)
- **Weeks 9–12**: Unit 3 — Energy & Plant Matter in Ecosystems (5-LS1-1, 5-PS3-1)
- **Weeks 13–16**: Unit 4 — Matter Flow & Ecosystem Webs (5-LS2-1)
- **Weeks 17–18**: Mid-Year Comprehensive Review & Lab Portfolio Check
- **Weeks 19–22**: Unit 5 — Earth's Four Spheres & Water Distribution (5-ESS2-1, 5-ESS2-2)
- **Weeks 23–26**: Unit 6 — Force, Motion, Light & Sound Waves (OH.5.PS.1, OH.5.PS.2)
- **Weeks 27–30**: Unit 7 — Earth's Rotation, Orbits & Stars (5-ESS1-1, 5-ESS1-2)
- **Weeks 31–33**: Unit 8 — Human Impact & Earth's Resources (5-ESS3-1)
- **Weeks 34–35**: Unit 9 — Engineering Design Process (3-5-ETS1)
- **Week 36**: Capstone Science Presentations & Course Challenge`,
      },
      {
        id: 'g5-sci-res-standards',
        title: 'NGSS & Ohio Science Standards Crosswalk',
        kind: 'standards_map',
        description: 'Alignment of Grade 5 units to Ohio Learning Standards and Next Generation Science Standards.',
        body: `| Unit | Standards | Core Focus |
|---|---|---|
| Unit 1 | 5-PS1-1, 5-PS1-2, 5-PS1-3 | Particle theory, conservation of weight, characteristic properties |
| Unit 2 | 5-PS1-4 | Mixtures, solutions, and evidence of chemical changes |
| Unit 3 | 5-LS1-1, 5-PS3-1 | Photosynthesis, plant biomass from air/water, solar energy |
| Unit 4 | 5-LS2-1 | Trophic levels, decomposers, and ecosystem food webs |
| Unit 5 | 5-ESS2-1, 5-ESS2-2 | Four spheres interaction, ocean vs freshwater reservoirs |
| Unit 6 | OH.5.PS.1, OH.5.PS.2 | Force/mass acceleration, light reflection/refraction, sound waves |
| Unit 7 | 5-ESS1-1, 5-ESS1-2 | Day/night rotation, shadow tracking, orbits, star distances |
| Unit 8 | 5-ESS3-1 | Renewable energy, agricultural runoff, resource conservation |
| Unit 9 | 3-5-ETS1-1..3 | Engineering criteria, constraints, prototyping, and optimization |`,
      },
      {
        id: 'g5-sci-res-rubric',
        title: 'Scientific Inquiry & Engineering Design Rubric',
        kind: 'assessment_rubric',
        description: 'Scoring guide for evaluating student lab journals, hypotheses, data collection, and prototype performance.',
        body: `### Scientific Inquiry 4-Point Scoring Rubric
- **Level 4 (Advanced)**: States a clear testable hypothesis; records neat quantitative data; explains results using standard scientific vocabulary (e.g., conservation of mass, photosynthesis, refraction).
- **Level 3 (Proficient)**: States a reasonable prediction; records complete observational data; draws logical conclusions from experiment results.
- **Level 2 (Developing)**: Records partial observations; requires prompting to link evidence to scientific principles.
- **Level 1 (Beginning)**: Incomplete data record; struggles to state how experiment results relate to the lesson topic.`,
      },
    ],
  },
]
