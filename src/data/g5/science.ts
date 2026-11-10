import { Course, Principle } from '../../types'

// Principles for Grade 5 Science
const G5_SCI_PHOTOSYNTHESIS_PRINCIPLE: Principle = {
  id: 'p-g5-sci-photo',
  title: 'Photosynthesis & Plant Matter from Air and Water',
  standard: '5-LS1-1',
  summary: 'Plants acquire their material for growth chiefly from air and water using sunlight energy.',
  bank: [
    {
      id: 'g5-sci-photo-1',
      type: 'mc',
      prompt: 'What process do green plants use to make their own food?',
      choices: ['Photosynthesis', 'Erosion', 'Evaporation', 'Hibernation'],
      answer: 'Photosynthesis',
      explanation: 'Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to make sugar.',
    },
    {
      id: 'g5-sci-photo-2',
      type: 'mc',
      prompt: 'Where do plants get the majority of matter to grow?',
      choices: ['Air and water', 'Rocks and sand', 'Soil minerals only', 'Moonlight'],
      answer: 'Air and water',
      explanation: 'Plants build their tissues mostly from carbon dioxide in air and water, not soil.',
    },
    {
      id: 'g5-sci-photo-3',
      type: 'mc',
      prompt: 'Which gas do plants take in from the air during photosynthesis?',
      choices: ['Carbon dioxide', 'Oxygen', 'Helium', 'Argon'],
      answer: 'Carbon dioxide',
      explanation: 'Leaves take in carbon dioxide gas through tiny pores to make plant sugars.',
    },
    {
      id: 'g5-sci-photo-4',
      type: 'mc',
      prompt: 'Which gas do plants release into the air during photosynthesis?',
      choices: ['Oxygen', 'Carbon dioxide', 'Methane', 'Hydrogen'],
      answer: 'Oxygen',
      explanation: 'Plants release oxygen gas as a product of photosynthesis, which animals need to breathe.',
    },
    {
      id: 'g5-sci-photo-5',
      type: 'mc',
      prompt: 'What provides the energy plants need to perform photosynthesis?',
      choices: ['Sunlight', 'Wind', 'Gravity', 'Ocean waves'],
      answer: 'Sunlight',
      explanation: 'Chlorophyll in green leaves captures energy from sunlight to power photosynthesis.',
    },
    {
      id: 'g5-sci-photo-6',
      type: 'mc',
      prompt: 'What are the tiny openings on leaves that exchange gases?',
      choices: ['Stomata', 'Roots', 'Seeds', 'Thorns'],
      answer: 'Stomata',
      explanation: 'Stomata are microscopic pores on leaves that let carbon dioxide in and oxygen out.',
    },
  ],
}

const G5_SCI_FOODWEB_PRINCIPLE: Principle = {
  id: 'p-g5-sci-web',
  title: 'Food Webs & Matter Flow in Ecosystems',
  standard: '5-LS2-1',
  summary: 'Producers, consumers, and decomposers cycle matter and energy through ecosystem food webs.',
  bank: [
    {
      id: 'g5-sci-web-1',
      type: 'mc',
      prompt: 'What do arrows in a food chain show?',
      choices: ['The flow of energy and matter', 'Which animal runs faster', 'Where rivers flow', 'How tall plants grow'],
      answer: 'The flow of energy and matter',
      explanation: 'An arrow points from the organism being eaten to the organism that gets its energy.',
    },
    {
      id: 'g5-sci-web-2',
      type: 'mc',
      prompt: 'What do decomposers like fungi and bacteria do in an ecosystem?',
      choices: ['Break down dead matter into nutrients', 'Make food from sunlight', 'Hunt large predators', 'Freeze water into ice'],
      answer: 'Break down dead matter into nutrients',
      explanation: 'Decomposers recycle dead plants and animals back into soil nutrients that plants can use.',
    },
    {
      id: 'g5-sci-web-3',
      type: 'mc',
      prompt: 'What is an animal that eats only plants called?',
      choices: ['Herbivore', 'Carnivore', 'Producer', 'Decomposer'],
      answer: 'Herbivore',
      explanation: 'A herbivore is a consumer, such as a rabbit or deer, that eats only plants.',
    },
    {
      id: 'g5-sci-web-4',
      type: 'mc',
      prompt: 'What is an animal that eats both plants and animals called?',
      choices: ['Omnivore', 'Herbivore', 'Producer', 'Mineral'],
      answer: 'Omnivore',
      explanation: 'An omnivore, such as a bear or raccoon, eats both plant and animal matter.',
    },
    {
      id: 'g5-sci-web-5',
      type: 'mc',
      prompt: 'Where does almost all energy in Earth’s food webs begin?',
      choices: ['The Sun', 'The Moon', 'Ocean tides', 'Rocks'],
      answer: 'The Sun',
      explanation: 'Sunlight provides the original energy that producers capture and pass to consumers.',
    },
    {
      id: 'g5-sci-web-6',
      type: 'mc',
      prompt: 'In Grass → Rabbit → Hawk, what is the rabbit?',
      choices: ['Primary consumer', 'Producer', 'Decomposer', 'Apex predator'],
      answer: 'Primary consumer',
      explanation: 'A primary consumer is a herbivore that eats producers like grass.',
    },
  ],
}

const G5_SCI_MATTER_PRINCIPLE: Principle = {
  id: 'p-g5-sci-matter',
  title: 'Properties & Structure of Matter',
  standard: '5-PS1-1',
  summary: 'Matter is made of particles too small to be seen; total weight is conserved during state changes.',
  bank: [
    {
      id: 'g5-sci-mat-1',
      type: 'mc',
      prompt: 'What happens to the total weight of ice when it melts into liquid water?',
      choices: ['Weight stays exactly the same.', 'Weight increases greatly.', 'Weight disappears completely.', 'Weight is cut in half.'],
      answer: 'Weight stays exactly the same.',
      explanation: 'The law of conservation of matter states that mass is neither created nor destroyed during state changes.',
    },
    {
      id: 'g5-sci-mat-2',
      type: 'mc',
      prompt: 'What happens to sugar particles when sugar dissolves completely in water?',
      choices: ['They separate and spread evenly in water.', 'They turn into gold atoms.', 'They evaporate into the sky.', 'They catch fire instantly.'],
      answer: 'They separate and spread evenly in water.',
      explanation: 'Dissolved sugar breaks down into tiny microscopic molecules that mix evenly throughout the water.',
    },
    {
      id: 'g5-sci-mat-3',
      type: 'mc',
      prompt: 'Which state of matter has a definite volume but takes the shape of its container?',
      choices: ['Liquid', 'Solid', 'Gas', 'Plasma'],
      answer: 'Liquid',
      explanation: 'Liquids have fixed volume but no fixed shape, flowing to match their container.',
    },
    {
      id: 'g5-sci-mat-4',
      type: 'mc',
      prompt: 'Which state of matter expands to fill any container completely?',
      choices: ['Gas', 'Liquid', 'Solid', 'Ice'],
      answer: 'Gas',
      explanation: 'Gas particles move freely and spread apart until they fill the entire volume of a container.',
    },
    {
      id: 'g5-sci-mat-5',
      type: 'mc',
      prompt: 'What is a property that can identify an unknown metal cube?',
      choices: ['Electrical conductivity and density', 'The room temperature', 'The day of the week', 'The color of the box holding it'],
      answer: 'Electrical conductivity and density',
      explanation: 'Density, electrical conductivity, magnetism, and solubility are characteristic properties of substances.',
    },
    {
      id: 'g5-sci-mat-6',
      type: 'mc',
      prompt: 'Water (100 g) dissolves 15 g of salt. What is the total weight?',
      choices: ['115 grams', '100 grams', '85 grams', '200 grams'],
      answer: '115 grams',
      explanation: 'Dissolving is a physical change where masses add together: 100 g + 15 g = 115 g.',
    },
  ],
}

const G5_SCI_SPHERES_PRINCIPLE: Principle = {
  id: 'p-g5-sci-spheres',
  title: 'Earth’s Four Spheres & Water Distribution',
  standard: '5-ESS2-1',
  summary: 'The geosphere, hydrosphere, atmosphere, and biosphere interact to shape Earth’s systems.',
  bank: [
    {
      id: 'g5-sci-sph-1',
      type: 'mc',
      prompt: 'Which Earth sphere includes all rocks, soil, and mountains?',
      choices: ['Geosphere', 'Hydrosphere', 'Atmosphere', 'Biosphere'],
      answer: 'Geosphere',
      explanation: 'The geosphere consists of Earth’s solid rock, soil, landforms, and interior layers.',
    },
    {
      id: 'g5-sci-sph-2',
      type: 'mc',
      prompt: 'Which Earth sphere contains all oceans, rivers, lakes, and glaciers?',
      choices: ['Hydrosphere', 'Geosphere', 'Atmosphere', 'Biosphere'],
      answer: 'Hydrosphere',
      explanation: 'The hydrosphere includes all liquid water, ice, and water vapor on Earth.',
    },
    {
      id: 'g5-sci-sph-3',
      type: 'mc',
      prompt: 'Which Earth sphere is the blanket of gases surrounding the planet?',
      choices: ['Atmosphere', 'Biosphere', 'Geosphere', 'Hydrosphere'],
      answer: 'Atmosphere',
      explanation: 'The atmosphere is the layer of air (mostly nitrogen and oxygen) around Earth.',
    },
    {
      id: 'g5-sci-sph-4',
      type: 'mc',
      prompt: 'Which Earth sphere includes all living plants, animals, and microbes?',
      choices: ['Biosphere', 'Geosphere', 'Atmosphere', 'Hydrosphere'],
      answer: 'Biosphere',
      explanation: 'The biosphere is made up of all living things on land, in water, and in air.',
    },
    {
      id: 'g5-sci-sph-5',
      type: 'mc',
      prompt: 'Where is most of Earth’s water found?',
      choices: ['Saltwater in the oceans', 'Freshwater in rivers', 'Clouds in the sky', 'Puddles on land'],
      answer: 'Saltwater in the oceans',
      explanation: 'About 97 percent of Earth’s water is saltwater stored in the oceans.',
    },
    {
      id: 'g5-sci-sph-6',
      type: 'mc',
      prompt: 'When a river carves a canyon in rock, which two spheres interact?',
      choices: ['Hydrosphere and geosphere', 'Biosphere and moon', 'Atmosphere and sun', 'Geosphere and stars'],
      answer: 'Hydrosphere and geosphere',
      explanation: 'Moving water (hydrosphere) erodes solid rock (geosphere) to carve a canyon.',
    },
  ],
}

const G5_SCI_FORCE_PRINCIPLE: Principle = {
  id: 'p-g5-sci-force',
  title: 'Force, Motion, Light & Sound Waves',
  standard: 'OH.5.PS.1',
  summary: 'Forces change speed; light reflects or refracts in straight lines; sound is produced by vibrations.',
  bank: [
    {
      id: 'g5-sci-phys-1',
      type: 'mc',
      prompt: 'What happens when a stronger force pushes the same object?',
      choices: ['Its speed changes more quickly', 'Its mass disappears', 'It stops moving forever', 'Gravity turns off'],
      answer: 'Its speed changes more quickly',
      explanation: 'A greater net force causes a larger change in an object’s motion or speed.',
    },
    {
      id: 'g5-sci-phys-2',
      type: 'mc',
      prompt: 'Which cart speeds up more when pushed with the same force?',
      choices: ['The lighter cart', 'The heavier cart', 'Both speed up equally', 'Neither cart moves'],
      answer: 'The lighter cart',
      explanation: 'Objects with less mass experience a greater change in motion from the same force.',
    },
    {
      id: 'g5-sci-phys-3',
      type: 'mc',
      prompt: 'How does light travel through air or empty space?',
      choices: ['In straight lines until it hits something', 'In zig-zag loops', 'Only through metal wires', 'Backward into the source'],
      answer: 'In straight lines until it hits something',
      explanation: 'Light rays travel in straight lines outward from a source until absorbed, reflected, or refracted.',
    },
    {
      id: 'g5-sci-phys-4',
      type: 'mc',
      prompt: 'What is the bouncing of light off a smooth mirror called?',
      choices: ['Reflection', 'Refraction', 'Absorption', 'Friction'],
      answer: 'Reflection',
      explanation: 'Reflection happens when light rays bounce off a surface such as a mirror.',
    },
    {
      id: 'g5-sci-phys-5',
      type: 'mc',
      prompt: 'What is the bending of light as it passes from air into water?',
      choices: ['Refraction', 'Reflection', 'Gravity', 'Magnetism'],
      answer: 'Refraction',
      explanation: 'Refraction is the bending of light when it changes speed moving into a new material.',
    },
    {
      id: 'g5-sci-phys-6',
      type: 'mc',
      prompt: 'What causes all sounds to be produced?',
      choices: ['Vibrating matter', 'Complete silence', 'Cold temperatures', 'Shadows'],
      answer: 'Vibrating matter',
      explanation: 'Sound is produced when an object vibrates back and forth, creating waves in the air.',
    },
  ],
}

const G5_SCI_SPACE_PRINCIPLE: Principle = {
  id: 'p-g5-sci-space',
  title: 'Earth’s Rotation, Orbits, Shadows & Gravity',
  standard: 'OH.5.ESS.1',
  summary: 'Earth’s rotation causes day/night; Earth orbits the Sun in 365 days; gravity pulls to center.',
  bank: [
    {
      id: 'g5-sci-spc-1',
      type: 'mc',
      prompt: 'What causes the daily cycle of day and night on Earth?',
      choices: ['Earth’s rotation on its axis', 'Earth’s yearly orbit around the Sun', 'The Moon blocking the Sun daily', 'Clouds covering the sky'],
      answer: 'Earth’s rotation on its axis',
      explanation: 'Earth spins (rotates) once every 24 hours, causing day on the side facing the Sun.',
    },
    {
      id: 'g5-sci-spc-2',
      type: 'mc',
      prompt: 'How long does it take Earth to complete one orbit around the Sun?',
      choices: ['About 365 days (1 year)', '24 hours', '30 days', '10 years'],
      answer: 'About 365 days (1 year)',
      explanation: 'One full revolution (orbit) of Earth around the Sun takes one year, or about 365 days.',
    },
    {
      id: 'g5-sci-spc-3',
      type: 'mc',
      prompt: 'Why does the Sun look brighter and larger than other stars?',
      choices: ['It is much closer to Earth', 'It is the biggest star in space', 'Other stars do not make light', 'It orbits inside Earth’s atmosphere'],
      answer: 'It is much closer to Earth',
      explanation: 'The Sun is an average-sized star, but it looks brightest because it is closest to Earth.',
    },
    {
      id: 'g5-sci-spc-4',
      type: 'mc',
      prompt: 'In what direction does Earth’s gravity pull objects near the surface?',
      choices: ['Downward toward Earth’s center', 'Upward into outer space', 'Sideways toward the east', 'Toward the North Pole only'],
      answer: 'Downward toward Earth’s center',
      explanation: 'Gravity pulls all objects inward toward the center of the planet.',
    },
    {
      id: 'g5-sci-spc-5',
      type: 'mc',
      prompt: 'When is a shadow on the ground shortest during a sunny day?',
      choices: ['Around noon', 'At sunrise', 'At sunset', 'At midnight'],
      answer: 'Around noon',
      explanation: 'At noon the Sun is highest in the sky, casting the shortest shadows.',
    },
    {
      id: 'g5-sci-spc-6',
      type: 'mc',
      prompt: 'Why do we see different constellations in winter than in summer?',
      choices: ['Earth orbits to different sides of the Sun', 'Stars swim across the ocean', 'The Sun turns off in winter', 'Earth stops rotating in summer'],
      answer: 'Earth orbits to different sides of the Sun',
      explanation: 'As Earth revolves around the Sun each year, our night sky faces different parts of space.',
    },
  ],
}

export const G5_SCIENCE_COURSE: Course = {
  id: 'g5-science',
  subject: 'science',
  grade: 5,
  title: 'Grade 5 Science',
  subtitle: 'Matter Properties, Photosynthesis, Ecosystems, Earth Systems, and Space Science',
  credits: 1.0,
  color: '#059669',
  icon: '🔬',
  units: [
    // UNIT 1: Structure & Properties of Matter
    {
      id: 'g5-sci-u1',
      title: 'Unit 1: Structure & Properties of Matter',
      standards: ['5-PS1-1', '5-PS1-2', '5-PS1-3'],
      lessons: [
        {
          id: 'g5-sci-u1-l1',
          unitId: 'g5-sci-u1',
          title: 'Lesson 1: Particles of Matter & Conservation of Weight',
          kind: 'lesson',
          partOf: 'Conservation of Matter',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:properties-of-matter/x2e35759163e5e4fa:matter-is-made-of-particles/v/matter-and-particles',
          videoTitle: 'Khan Academy: Particles of Matter',
          reading:
            'Matter is made of particles too small to be seen. Regardless of whether matter is heated, cooled, or mixed with another substance, total mass is conserved.',
          principles: [G5_SCI_MATTER_PRINCIPLE],
        },
        {
          id: 'g5-sci-u1-l2',
          unitId: 'g5-sci-u1',
          title: 'Lesson 2: Physical Properties & Identifying Materials',
          kind: 'lesson',
          partOf: 'Physical Properties',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:properties-of-matter/x2e35759163e5e4fa:identifying-substances/v/identifying-materials',
          videoTitle: 'Khan Academy: Identifying Materials by Properties',
          reading:
            'Materials can be identified based on characteristic properties such as magnetism, conductivity of heat or electricity, solubility in water, and hardness.',
          principles: [G5_SCI_MATTER_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Chemical & Physical Changes
    {
      id: 'g5-sci-u2',
      title: 'Unit 2: Chemical Reactions & Mixing Substances',
      standards: ['5-PS1-4'],
      lessons: [
        {
          id: 'g5-sci-u2-l1',
          unitId: 'g5-sci-u2',
          title: 'Lesson 1: Mixtures vs. Chemical Solutions',
          kind: 'lesson',
          partOf: 'Mixtures & Solutions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:properties-of-matter/x2e35759163e5e4fa:chemical-reactions/v/chemical-reactions',
          videoTitle: 'Khan Academy: Chemical Reactions in Matter',
          reading:
            'In a physical mixture like sand and water, substances keep their identities and can be separated. Dissolving sugar in water creates a uniform solution.',
          principles: [G5_SCI_MATTER_PRINCIPLE],
        },
        {
          id: 'g5-sci-u2-l2',
          unitId: 'g5-sci-u2',
          title: 'Lesson 2: Signs of Chemical Change & Reactions',
          kind: 'lesson',
          partOf: 'Chemical Changes',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:properties-of-matter/x2e35759163e5e4fa:chemical-reactions/v/evidence-of-chemical-change',
          videoTitle: 'Khan Academy: Evidence of Chemical Change',
          reading:
            'When two substances react to form new materials with different properties, signs include gas bubbles, unexpected temperature change, or a color change.',
          principles: [G5_SCI_MATTER_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Photosynthesis & Plant Growth
    {
      id: 'g5-sci-u3',
      title: 'Unit 3: Photosynthesis & Plant Matter',
      standards: ['5-LS1-1'],
      lessons: [
        {
          id: 'g5-sci-u3-l1',
          unitId: 'g5-sci-u3',
          title: 'Lesson 1: Plant Matter from Air & Water',
          kind: 'lesson',
          partOf: 'Plant Matter',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:matter-and-energy-in-ecosystems/x2e35759163e5e4fa:plants-get-matter-from-air-and-water/v/plant-growth',
          videoTitle: 'Khan Academy: How Plants Get Matter to Grow',
          reading:
            'Plants do not eat soil. Instead, they absorb water from their roots and take in carbon dioxide gas from the air through microscopic stomata on their leaves.',
          principles: [G5_SCI_PHOTOSYNTHESIS_PRINCIPLE],
        },
        {
          id: 'g5-sci-u3-l2',
          unitId: 'g5-sci-u3',
          title: 'Lesson 2: Sunlight Energy & Sugar Synthesis',
          kind: 'lesson',
          partOf: 'Photosynthesis',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:matter-and-energy-in-ecosystems/x2e35759163e5e4fa:plants-get-matter-from-air-and-water/v/photosynthesis',
          videoTitle: 'Khan Academy: Photosynthesis and Energy',
          reading:
            'Using solar energy trapped by chlorophyll, plants transform water and carbon dioxide into glucose sugar for food and release vital oxygen into the air.',
          principles: [G5_SCI_PHOTOSYNTHESIS_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: Ecosystems & Food Webs
    {
      id: 'g5-sci-u4',
      title: 'Unit 4: Food Webs & Decomposers',
      standards: ['5-LS2-1'],
      lessons: [
        {
          id: 'g5-sci-u4-l1',
          unitId: 'g5-sci-u4',
          title: 'Lesson 1: Producers, Consumers & Energy Pyramids',
          kind: 'lesson',
          partOf: 'Food Chains',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:matter-and-energy-in-ecosystems/x2e35759163e5e4fa:energy-in-ecosystems/v/food-chains-and-energy',
          videoTitle: 'Khan Academy: Food Chains and Food Webs',
          reading:
            'Food chains show the path of energy from the Sun to producers, herbivores, carnivores, and omnivores. Arrows point in the direction of energy transfer.',
          principles: [G5_SCI_FOODWEB_PRINCIPLE],
        },
        {
          id: 'g5-sci-u4-l2',
          unitId: 'g5-sci-u4',
          title: 'Lesson 2: Decomposers & Nutrient Recycling',
          kind: 'lesson',
          partOf: 'Decomposers',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:matter-and-energy-in-ecosystems/x2e35759163e5e4fa:decomposers/v/decomposers',
          videoTitle: 'Khan Academy: Role of Decomposers',
          reading:
            'Decomposers like mushrooms and bacteria break down dead organisms and animal waste, recycling essential minerals and nutrients back into the soil.',
          principles: [G5_SCI_FOODWEB_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Earth's Four Spheres
    {
      id: 'g5-sci-u5',
      title: 'Unit 5: Earth’s Four Interacting Spheres',
      standards: ['5-ESS2-1'],
      lessons: [
        {
          id: 'g5-sci-u5-l1',
          unitId: 'g5-sci-u5',
          title: 'Lesson 1: Geosphere, Hydrosphere, Atmosphere & Biosphere',
          kind: 'lesson',
          partOf: 'Earth Spheres',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:earths-systems/x2e35759163e5e4fa:earths-major-systems/v/four-spheres-part-1',
          videoTitle: 'Khan Academy: Earth’s Four Spheres',
          reading:
            'Earth’s major systems are the geosphere (solid ground), hydrosphere (all water and ice), atmosphere (air gases), and biosphere (all living organisms).',
          principles: [G5_SCI_SPHERES_PRINCIPLE],
        },
        {
          id: 'g5-sci-u5-l2',
          unitId: 'g5-sci-u5',
          title: 'Lesson 2: Sphere Interactions & the Water Cycle',
          kind: 'lesson',
          partOf: 'Sphere Interactions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:earths-systems/x2e35759163e5e4fa:earths-major-systems/v/four-spheres-part-2',
          videoTitle: 'Khan Academy: Sphere Interactions',
          reading:
            'The spheres constantly interact: Rain (hydrosphere) weathers rock (geosphere), plants (biosphere) release oxygen to the air (atmosphere), and roots prevent erosion.',
          principles: [G5_SCI_SPHERES_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Water Distribution on Earth
    {
      id: 'g5-sci-u6',
      title: 'Unit 6: Water on Earth & Water Conservation',
      standards: ['5-ESS2-2'],
      lessons: [
        {
          id: 'g5-sci-u6-l1',
          unitId: 'g5-sci-u6',
          title: 'Lesson 1: Saltwater vs. Freshwater Distribution',
          kind: 'lesson',
          partOf: 'Water Distribution',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:earths-systems/x2e35759163e5e4fa:earths-water/v/distribution-of-water-on-earth',
          videoTitle: 'Khan Academy: Distribution of Water on Earth',
          reading:
            'Roughly 97% of Earth’s water is salty ocean water. Of the remaining 3% that is freshwater, over two-thirds is frozen in glaciers and polar ice caps.',
          principles: [G5_SCI_SPHERES_PRINCIPLE],
        },
        {
          id: 'g5-sci-u6-l2',
          unitId: 'g5-sci-u6',
          title: 'Lesson 2: Protecting Groundwater & Freshwater Reservoirs',
          kind: 'lesson',
          partOf: 'Water Conservation',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-5-science/x2e35759163e5e4fa:earths-systems/x2e35759163e5e4fa:earths-water/v/protecting-earths-water',
          videoTitle: 'Khan Academy: Protecting Freshwater Resources',
          reading:
            'Usable liquid freshwater makes up less than 1% of all water on Earth, making wetland conservation and groundwater protection essential for human survival.',
          principles: [G5_SCI_SPHERES_PRINCIPLE],
        },
      ],
    },

    // UNIT 7: Ohio Extension: Forces, Motion, Light & Sound
    {
      id: 'g5-sci-u7',
      title: 'Unit 7: Forces, Motion, Light & Sound Waves',
      isOhioExtension: true,
      standards: ['OH.5.PS.1'],
      lessons: [
        {
          id: 'g5-sci-u7-l1',
          unitId: 'g5-sci-u7',
          title: 'Lesson 1: Forces, Mass & Friction in Motion',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Force and Motion',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:forces-and-motion/x1baed5db7c1bb50b:balanced-and-unbalanced-forces/v/forces-and-motion',
          videoTitle: 'Khan Academy: Forces, Mass and Motion',
          reading:
            'Greater force causes larger changes in speed. Heavier objects require more force to accelerate, and friction opposes motion between contact surfaces.',
          principles: [G5_SCI_FORCE_PRINCIPLE],
        },
        {
          id: 'g5-sci-u7-l2',
          unitId: 'g5-sci-u7',
          title: 'Lesson 2: Light Reflection, Refraction & Sound Pitch',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Light and Sound',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves/x1baed5db7c1bb50b:light-waves/v/reflection-and-refraction',
          videoTitle: 'Khan Academy: Light Waves, Reflection and Sound',
          reading:
            'Light rays travel in straight lines, reflecting off mirrors and refracting as they bend through water. Vibrating objects produce sound waves with varying pitch.',
          principles: [G5_SCI_FORCE_PRINCIPLE],
        },
      ],
    },

    // UNIT 8: Ohio Extension: Solar System, Rotation & Gravity
    {
      id: 'g5-sci-u8',
      title: 'Unit 8: Solar System, Rotation, Shadows & Orbits',
      isOhioExtension: true,
      standards: ['OH.5.ESS.1'],
      lessons: [
        {
          id: 'g5-sci-u8-l1',
          unitId: 'g5-sci-u8',
          title: 'Lesson 1: Earth Rotation, Day/Night & Shadow Lengths',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Rotation & Shadows',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space/x87d03b443efbea0a:earth-rotation-and-revolution/v/day-and-night-cycle',
          videoTitle: 'Khan Academy: Earth’s Rotation and Shadows',
          reading:
            'Earth rotates on its axis once every 24 hours to create day and night. Shadows point opposite the Sun and reach their shortest length at midday noon.',
          principles: [G5_SCI_SPACE_PRINCIPLE],
        },
        {
          id: 'g5-sci-u8-l2',
          unitId: 'g5-sci-u8',
          title: 'Lesson 2: Yearly Revolution, Constellations & Gravity',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Orbits and Gravity',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space/x87d03b443efbea0a:gravity-in-space/v/gravity-and-orbits',
          videoTitle: 'Khan Academy: Gravity and Planetary Orbits',
          reading:
            'Earth takes 365 days to orbit the Sun, revealing different constellations throughout the year. Gravity pulls all objects downward toward Earth’s center.',
          principles: [G5_SCI_SPACE_PRINCIPLE],
        },
      ],
    },

    // UNIT 9: Explore Science Through Simulations (enrichment)
    {
      id: 'g5-sci-u9',
      title: 'Unit 9: Explore Science Through Simulations & Labs',
      kind: 'explore',
      standards: ['5-PS1-1', '5-ESS1-2', '5-LS2-1'],
      lessons: [],
      exploreItems: [
        {
          id: 'g5-sci-exp-phet-gravity',
          title: 'PhET Simulation: Gravity and Orbits',
          type: 'simulation',
          description:
            'Manipulate masses of the Sun, Earth, Moon, and space station to see how gravitational pull controls orbital paths and space trajectories.',
          url: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'What happens to Earth’s orbit if you turn gravity off completely?',
          requiresParentPin: false,
        },
        {
          id: 'g5-sci-exp-phet-matter',
          title: 'PhET Simulation: States of Matter Basics',
          type: 'simulation',
          description:
            'Heat and cool neon, argon, oxygen, and water molecules to observe phase changes between solid, liquid, and gas states at the molecular level.',
          url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'How does heating affect the speed and spacing of water molecules?',
          requiresParentPin: false,
        },
        {
          id: 'g5-sci-exp-sugar-dissolve',
          title: 'Kitchen Science Experiment: Dissolving Rate Investigation',
          type: 'experiment',
          description:
            'Compare how fast granulated sugar dissolves in equal amounts of cold water, warm water, and hot water to investigate molecular kinetic energy.',
          estimatedMinutes: 25,
          materials: ['3 clear drinking glasses', 'Measuring cup', 'Cold, warm, and hot tap water', 'Granulated sugar', 'Stopwatch or timer'],
          steps: [
            'Pour 1 cup of cold water into glass 1, warm water into glass 2, and hot tap water into glass 3.',
            'Add 1 teaspoon of sugar to each glass at the same time.',
            'Stir each glass at the same speed and time how many seconds it takes for all crystals to disappear.',
            'Record the three times in your science journal.',
          ],
          reflectionPrompt: 'Why does higher temperature cause sugar to dissolve much faster?',
          requiresParentPin: false,
        },
        {
          id: 'g5-sci-exp-quadrat-survey',
          title: 'Backyard Ecology Lab: 1-Square-Meter Quadrat Survey',
          type: 'project',
          description:
            'Lay down a 1-meter square perimeter of yarn on a lawn or garden bed and catalog all producers, consumers, and decomposers inside.',
          estimatedMinutes: 30,
          materials: ['4 meters of string or yarn', '4 small stakes or twigs', 'Magnifying glass', 'Notebook and pencil'],
          steps: [
            'Mark a 1m by 1m square in an outdoor grassy or wooded patch.',
            'Count the different types of plant producers (grasses, clovers, moss, weeds).',
            'Search gently for primary consumers (ants, caterpillars, beetles) and decomposers (earthworms, mushrooms).',
            'Draw a mini food web connecting at least four species found inside your quadrat.',
          ],
          reflectionPrompt: 'How many different living organisms were interacting in just one square meter of soil?',
          requiresParentPin: false,
        },
      ],
    },

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g5-sci-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['5-PS', '5-LS', '5-ESS'],
      lessons: [],
      resources: [
        {
          id: 'g5-sci-res-pacing',
          title: 'Grade 5 Science 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Comprehensive curriculum timeline aligning NGSS and Ohio science performance expectations with laboratory investigations.',
          body: `## Grade 5 Science Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Structure & Properties of Matter (5-PS1-1 to 3)
- **Weeks 5–8**: Unit 2 — Chemical Reactions & Mixing Substances (5-PS1-4)
- **Weeks 9–12**: Unit 3 — Photosynthesis & Plant Matter (5-LS1-1)
- **Week 13**: Quarter 1 Matter and Energy Assessment
- **Weeks 14–18**: Unit 4 — Food Webs & Decomposers (5-LS2-1)
- **Weeks 19–22**: Unit 5 — Earth’s Four Interacting Spheres (5-ESS2-1)
- **Weeks 23–26**: Unit 6 — Water on Earth & Water Conservation (5-ESS2-2)
- **Week 27**: Quarter 2 & 3 Earth and Life Science Review
- **Weeks 28–31**: Unit 7 — Forces, Motion, Light & Sound (OH.5.PS.1)
- **Weeks 32–34**: Unit 8 — Solar System, Rotation & Gravity (OH.5.ESS.1)
- **Weeks 35–36**: Unit 9 — Capstone PhET Simulations & Science Fair`,
        },
        {
          id: 'g5-sci-res-safety',
          title: 'Home Laboratory Safety & Equipment Checklist',
          kind: 'printable',
          description:
            'Safety checklist covering eye protection, heat handling, and disposal protocols for home science labs.',
          body: `## Grade 5 Science Safety Rules

1. **Adult Supervision**: Adult presence is mandatory when handling hot water or household chemicals.
2. **Wear Eye Protection**: Use safety glasses during dissolving rate and chemical mixing experiments.
3. **No Tasting**: Never consume materials used in experiments.
4. **Clean Workspace**: Use a dedicated plastic tray or newspaper to contain spills.
5. **Hand Washing**: Always wash hands thoroughly with soap and warm water after soil and quadrat studies.`,
        },
        {
          id: 'g5-sci-res-rubric',
          title: 'Grade 5 Science Investigation & Modeling Rubric',
          kind: 'assessment_rubric',
          description:
            'Four-level scoring rubric evaluating hypothesis generation, data collection, and scientific argumentation.',
          body: `## Science Inquiry Rubric (4-Point Scale)

- **4 - Advanced**: Develops testable hypothesis; records quantitative data with metric units; explains phenomena using molecular/systemic models.
- **3 - Proficient**: Forms clear prediction; records accurate observations; answers all reflection questions with supporting scientific vocabulary.
- **2 - Developing**: Partial prediction; inconsistent data logging; answers prompts with limited conceptual explanation.
- **1 - Beginning**: Requires direct adult guidance to perform steps and document observations.`,
        },
      ],
    },
  ],
}
