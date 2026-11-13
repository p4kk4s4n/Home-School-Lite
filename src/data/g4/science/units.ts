import { Unit } from '../../../types'
import { G4_SCIENCE_BANKS } from './banks'

export const G4_SCIENCE_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: ENERGY, SPEED & COLLISIONS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u1',
    title: 'Unit 1: Energy, Speed & Collisions',
    standards: ['4-PS3-1', '4-PS3-3'],
    lessons: [
      {
        id: 'g4-sci-u1-l1',
        unitId: 'g4-sci-u1',
        title: 'Speed and Kinetic Energy',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
        videoTitle: 'Kinetic Energy and Speed',
        reading: 'Kinetic energy is the energy of motion. The faster a given object moves, the more kinetic energy it possesses.',
        principles: [
          {
            id: 'p-g4-sci-kinetic-speed',
            title: 'Speed & Kinetic Energy Relationship',
            standard: '4-PS3-1',
            summary: 'Use evidence to construct an explanation relating the speed of an object to the energy of that object.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
      {
        id: 'g4-sci-u1-l2',
        unitId: 'g4-sci-u1',
        title: 'Gravitational and Elastic Potential Energy',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
        videoTitle: 'Gravitational and Elastic Potential Energy',
        reading: 'Potential energy is stored energy. Objects held high store gravitational potential energy; stretched springs store elastic potential energy.',
        principles: [
          {
            id: 'p-g4-sci-potential',
            title: 'Forms of Stored Potential Energy',
            standard: '4-PS3-1',
            summary: 'Identify gravitational and elastic stored energy in physical systems.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
      {
        id: 'g4-sci-u1-l3',
        unitId: 'g4-sci-u1',
        title: 'Energy Transfer in Collisions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
        videoTitle: 'Collisions and Energy Transfer',
        reading: 'When moving objects collide, contact forces transfer energy from one object to another and transform motion energy into sound and heat.',
        principles: [
          {
            id: 'p-g4-sci-collisions',
            title: 'Collision Energy Transfer',
            standard: '4-PS3-3',
            summary: 'Ask questions and predict outcomes about the changes in energy that occur when objects collide.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
      {
        id: 'g4-sci-u1-l4',
        unitId: 'g4-sci-u1',
        title: 'Thermal and Electrical Energy Transformations',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
        videoTitle: 'Energy Transformations',
        reading: 'Energy cannot be created or destroyed, only changed in form. Appliances convert electrical energy into thermal heat, light, and mechanical work.',
        principles: [
          {
            id: 'p-g4-sci-energy-trans',
            title: 'Energy Transformation Fluency',
            standard: '4-PS3-4',
            summary: 'Apply scientific principles to explain conversions between electrical, thermal, and light energy.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
      {
        id: 'g4-sci-u1-l5',
        unitId: 'g4-sci-u1',
        title: 'Quiz 1: Energy & Motion Review',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
        videoTitle: 'Energy and Motion Quiz Review',
        reading: 'Review quiz checking kinetic energy, potential height energy, collision outcomes, and heat conversions.',
        principles: [
          {
            id: 'p-g4-sci-q1-energy',
            title: 'Energy Concept Synthesis',
            standard: '4-PS3-1',
            summary: 'Review and demonstrate mastery of energy and speed principles.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
      {
        id: 'g4-sci-u1-l6',
        unitId: 'g4-sci-u1',
        title: 'Unit 1 Test: Energy, Speed & Collisions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
        videoTitle: 'Unit 1 Test Review',
        reading: 'Comprehensive assessment of kinetic vs potential energy, collision dynamics, and thermal transformations.',
        principles: [
          {
            id: 'p-g4-sci-u1-test',
            title: 'Energy & Collisions Exam',
            standard: '4-PS3-1',
            summary: 'Comprehensive evaluation of Grade 4 physical energy concepts.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: ENERGY TRANSFER & ELECTRICITY (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u2',
    title: 'Unit 2: Energy Transfer & Electricity',
    standards: ['4-PS3-2', '4-PS3-4'],
    lessons: [
      {
        id: 'g4-sci-u2-l1',
        unitId: 'g4-sci-u2',
        title: 'Electric Circuits and Complete Paths',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
        videoTitle: 'Introduction to Electric Circuits',
        reading: 'An electric circuit is an unbroken path through which electric current can flow from a power source to an output device and back.',
        principles: [
          {
            id: 'p-g4-sci-circuit-path',
            title: 'Closed vs Open Circuits',
            standard: '4-PS3-2',
            summary: 'Make observations to provide evidence that energy can be transferred from place to place by electric currents.',
            bank: G4_SCIENCE_BANKS.circuits,
          },
        ],
      },
      {
        id: 'g4-sci-u2-l2',
        unitId: 'g4-sci-u2',
        title: 'Conductors and Insulators',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
        videoTitle: 'Conductors and Insulators',
        reading: 'Electrical conductors (like copper and aluminum) permit electrons to flow freely. Insulators (like rubber, plastic, and glass) resist electric flow.',
        principles: [
          {
            id: 'p-g4-sci-conductors',
            title: 'Electrical Conductors & Insulators',
            standard: '4-PS3-2',
            summary: 'Classify materials as electrical conductors or insulators based on experimental testing.',
            bank: G4_SCIENCE_BANKS.circuits,
          },
        ],
      },
      {
        id: 'g4-sci-u2-l3',
        unitId: 'g4-sci-u2',
        title: 'Switches and Controlling Electrical Current',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
        videoTitle: 'Switches in Circuits',
        reading: 'A switch allows users to safely open and close an electric circuit without disconnecting wires, stopping or allowing electric flow.',
        principles: [
          {
            id: 'p-g4-sci-switches',
            title: 'Switch Mechanism & Circuit Control',
            standard: '4-PS3-4',
            summary: 'Explain how switches regulate current flow by opening and closing circuits.',
            bank: G4_SCIENCE_BANKS.circuits,
          },
        ],
      },
      {
        id: 'g4-sci-u2-l4',
        unitId: 'g4-sci-u2',
        title: 'Chemical Energy in Batteries',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
        videoTitle: 'How Batteries Work',
        reading: 'Batteries convert stored chemical potential energy into electrical energy when connected to a complete circuit.',
        principles: [
          {
            id: 'p-g4-sci-batteries',
            title: 'Chemical Battery Energy',
            standard: '4-PS3-4',
            summary: 'Describe the transformation of chemical energy to electrical current in battery cells.',
            bank: G4_SCIENCE_BANKS.circuits,
          },
        ],
      },
      {
        id: 'g4-sci-u2-l5',
        unitId: 'g4-sci-u2',
        title: 'Quiz 2: Circuits & Electrical Safety',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
        videoTitle: 'Electricity Quiz Review',
        reading: 'Review quiz on complete loops, conductive metals, insulating coatings, and switch control.',
        principles: [
          {
            id: 'p-g4-sci-q2-circuits',
            title: 'Circuits Review Quiz',
            standard: '4-PS3-2',
            summary: 'Synthesize circuit flow and material properties.',
            bank: G4_SCIENCE_BANKS.circuits,
          },
        ],
      },
      {
        id: 'g4-sci-u2-l6',
        unitId: 'g4-sci-u2',
        title: 'Unit 2 Test: Energy Transfer & Electricity Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
        videoTitle: 'Unit 2 Test Review',
        reading: 'Comprehensive assessment of electric circuits, conductors, insulators, switches, and battery energy.',
        principles: [
          {
            id: 'p-g4-sci-u2-test',
            title: 'Electricity & Circuits Test',
            standard: '4-PS3-4',
            summary: 'Demonstrate comprehensive understanding of electric circuits and conductors.',
            bank: G4_SCIENCE_BANKS.circuits,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: WAVES, AMPLITUDE & INFORMATION (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u3',
    title: 'Unit 3: Waves, Amplitude & Information',
    standards: ['4-PS4-1', '4-PS4-2', '4-PS4-3'],
    lessons: [
      {
        id: 'g4-sci-u3-l1',
        unitId: 'g4-sci-u3',
        title: 'Wave Amplitude and Wavelength',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
        videoTitle: 'Amplitude and Wavelength',
        reading: 'Waves are regular repeating patterns of motion. Amplitude is the crest height; wavelength is the distance between peaks.',
        principles: [
          {
            id: 'p-g4-sci-amplitude',
            title: 'Wave Properties (Amplitude & Wavelength)',
            standard: '4-PS4-1',
            summary: 'Develop a model of waves to describe patterns in terms of amplitude and wavelength.',
            bank: G4_SCIENCE_BANKS.waves,
          },
        ],
      },
      {
        id: 'g4-sci-u3-l2',
        unitId: 'g4-sci-u3',
        title: 'Sound Vibrations and Pitch',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
        videoTitle: 'Sound Waves and Pitch',
        reading: 'Sound energy is produced by vibrating objects and travels through air, liquid, or solids as longitudinal compression waves.',
        principles: [
          {
            id: 'p-g4-sci-sound',
            title: 'Sound Waves & Vibrating Media',
            standard: '4-PS4-1',
            summary: 'Explain how sound travels through vibrating matter particles.',
            bank: G4_SCIENCE_BANKS.waves,
          },
        ],
      },
      {
        id: 'g4-sci-u3-l3',
        unitId: 'g4-sci-u3',
        title: 'Light Reflection and Vision',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
        videoTitle: 'Light Reflection',
        reading: 'An object can be seen only when light reflected from its surface enters our eyes. Shiny surfaces reflect light at matching angles.',
        principles: [
          {
            id: 'p-g4-sci-reflection',
            title: 'Light Reflection & Eye Vision',
            standard: '4-PS4-2',
            summary: 'Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen.',
            bank: G4_SCIENCE_BANKS.waves,
          },
        ],
      },
      {
        id: 'g4-sci-u3-l4',
        unitId: 'g4-sci-u3',
        title: 'Digitized Information and Communication',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
        videoTitle: 'Digital Information and Waves',
        reading: 'Digitized information (encoded into binary 0s and 1s) can be transmitted over light or radio waves more reliably than analog signals.',
        principles: [
          {
            id: 'p-g4-sci-digital-info',
            title: 'Digitized Information Patterns',
            standard: '4-PS4-3',
            summary: 'Generate and compare multiple solutions that use patterns to transfer information.',
            bank: G4_SCIENCE_BANKS.waves,
          },
        ],
      },
      {
        id: 'g4-sci-u3-l5',
        unitId: 'g4-sci-u3',
        title: 'Quiz 3: Waves & Light Reflection',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
        videoTitle: 'Waves Quiz Review',
        reading: 'Review quiz on wave amplitude, wavelength, reflection into eyes, and digital coding.',
        principles: [
          {
            id: 'p-g4-sci-q3-waves',
            title: 'Wave Properties Quiz',
            standard: '4-PS4-1',
            summary: 'Assess understanding of amplitude, reflection, and wave energy.',
            bank: G4_SCIENCE_BANKS.waves,
          },
        ],
      },
      {
        id: 'g4-sci-u3-l6',
        unitId: 'g4-sci-u3',
        title: 'Unit 3 Test: Waves & Information Transfer Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
        videoTitle: 'Unit 3 Test Review',
        reading: 'Comprehensive assessment of wave anatomy, sound vibrations, light reflection, and digitized communication.',
        principles: [
          {
            id: 'p-g4-sci-u3-test',
            title: 'Waves & Information Test',
            standard: '4-PS4-1',
            summary: 'Demonstrate mastery of wave properties, reflection, and digital transmission.',
            bank: G4_SCIENCE_BANKS.waves,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: EARTH'S LANDSCAPES & WEATHERING (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u4',
    title: 'Unit 4: Earth Landscapes & Weathering',
    standards: ['4-ESS2-1', '4-ESS2-2'],
    lessons: [
      {
        id: 'g4-sci-u4-l1',
        unitId: 'g4-sci-u4',
        title: 'Physical and Freeze-Thaw Weathering',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Physical%20Weathering%204th%20grade%20science',
        videoTitle: 'Physical Weathering',
        reading: 'Weathering breaks rocks down in place without moving them. Ice wedging occurs when water seeps into cracks, freezes, expands, and fractures rock.',
        principles: [
          {
            id: 'p-g4-sci-weathering',
            title: 'Mechanisms of Physical Weathering',
            standard: '4-ESS2-1',
            summary: 'Make observations and measurements to provide evidence of the effects of weathering.',
            bank: G4_SCIENCE_BANKS.weathering,
          },
        ],
      },
      {
        id: 'g4-sci-u4-l2',
        unitId: 'g4-sci-u4',
        title: 'Erosion by Water, Wind, and Ice',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Water%20and%20Wind%20Erosion%204th%20grade%20science',
        videoTitle: 'Water and Wind Erosion',
        reading: 'Erosion is the transport of weathered sediments by flowing rivers, gusting wind, or creeping glaciers to new locations.',
        principles: [
          {
            id: 'p-g4-sci-erosion',
            title: 'Water and Wind Erosion Dynamics',
            standard: '4-ESS2-1',
            summary: 'Investigate the rate of erosion by water, ice, wind, and vegetation.',
            bank: G4_SCIENCE_BANKS.weathering,
          },
        ],
      },
      {
        id: 'g4-sci-u4-l3',
        unitId: 'g4-sci-u4',
        title: 'Deposition and River Deltas',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Deposition%20and%20Deltas%204th%20grade%20science',
        videoTitle: 'Deposition and Deltas',
        reading: 'Deposition occurs when flowing water slows down, dropping its sediment load to build sand bars, beaches, and fan-shaped river deltas.',
        principles: [
          {
            id: 'p-g4-sci-deposition',
            title: 'Sediment Deposition & Landforms',
            standard: '4-ESS2-1',
            summary: 'Explain how deposition creates unique coastal and riverine landforms.',
            bank: G4_SCIENCE_BANKS.weathering,
          },
        ],
      },
      {
        id: 'g4-sci-u4-l4',
        unitId: 'g4-sci-u4',
        title: 'Vegetation and Soil Conservation',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Soil%20Conservation%20%26%20Roots%204th%20grade%20science',
        videoTitle: 'Soil Conservation & Roots',
        reading: 'Plant roots bind soil particles together, while plant leaves cushion falling raindrops, drastically reducing topsoil runoff on hills.',
        principles: [
          {
            id: 'p-g4-sci-soil-conservation',
            title: 'Erosion Prevention with Vegetation',
            standard: '4-ESS2-1',
            summary: 'Demonstrate how roots and vegetation mitigate soil erosion.',
            bank: G4_SCIENCE_BANKS.weathering,
          },
        ],
      },
      {
        id: 'g4-sci-u4-l5',
        unitId: 'g4-sci-u4',
        title: 'Topographic Maps and Mountain Landforms',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Topographic%20Maps%204th%20grade%20science',
        videoTitle: 'Topographic Maps',
        reading: 'Topographic maps use contour lines to represent 3D elevation on a flat sheet: closely spaced lines indicate steep cliffs.',
        principles: [
          {
            id: 'p-g4-sci-topo-maps',
            title: 'Topographic Maps & Elevation Models',
            standard: '4-ESS2-2',
            summary: 'Analyze and interpret data from maps to describe patterns of Earth features.',
            bank: G4_SCIENCE_BANKS.weathering,
          },
        ],
      },
      {
        id: 'g4-sci-u4-l6',
        unitId: 'g4-sci-u4',
        title: 'Unit 4 Test: Earth Landscapes & Weathering Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Unit 4 Test Review',
        reading: 'Comprehensive assessment on mechanical weathering, erosion agents, river deltas, vegetation anchors, and topographical maps.',
        principles: [
          {
            id: 'p-g4-sci-u4-test',
            title: 'Weathering & Landscapes Test',
            standard: '4-ESS2-1',
            summary: 'Evaluate understanding of landscape formation, weathering, and erosion.',
            bank: G4_SCIENCE_BANKS.weathering,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: ROCK LAYERS & FOSSILS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u5',
    title: 'Unit 5: Rock Layers & Fossils',
    standards: ['4-ESS1-1'],
    lessons: [
      {
        id: 'g4-sci-u5-l1',
        unitId: 'g4-sci-u5',
        title: 'Sedimentary Rock Formation and Superposition',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
        videoTitle: 'Rock Layers and Superposition',
        reading: 'Sediments settle in horizontal strata. Under the Law of Superposition, younger rock forms above older rock in undisturbed sequences.',
        principles: [
          {
            id: 'p-g4-sci-superposition',
            title: 'Rock Layers & Law of Superposition',
            standard: '4-ESS1-1',
            summary: 'Identify evidence from rock strata patterns and fossils to explain changes in landscapes over time.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
      {
        id: 'g4-sci-u5-l2',
        unitId: 'g4-sci-u5',
        title: 'Fossil Formation: Casts, Molds, and Petrification',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
        videoTitle: 'How Fossils Form',
        reading: 'When organisms die and get rapidly buried by silt or mud, minerals slowly replace biological tissue over millions of years.',
        principles: [
          {
            id: 'p-g4-sci-fossil-types',
            title: 'Fossilization Processes & Molds',
            standard: '4-ESS1-1',
            summary: 'Describe how body fossils, molds, and trace fossils form in sedimentary stone.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
      {
        id: 'g4-sci-u5-l3',
        unitId: 'g4-sci-u5',
        title: 'Ancient Marine Environments and Mountaintop Shells',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
        videoTitle: 'Marine Fossils in Mountain Rock',
        reading: 'Finding seashells and ocean fish fossils high on modern mountains proves those rock strata were originally deposited beneath ancient seas.',
        principles: [
          {
            id: 'p-g4-sci-ancient-seas',
            title: 'Environmental Reconstruction with Fossils',
            standard: '4-ESS1-1',
            summary: 'Infer prehistoric environments from fossil evidence preserved in rock layers.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
      {
        id: 'g4-sci-u5-l4',
        unitId: 'g4-sci-u5',
        title: 'Trace Fossils: Footprints, Tracks, and Burrows',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
        videoTitle: 'Trace Fossils',
        reading: 'Trace fossils preserve proof of animal behavior (walking speed, herd motion, resting spots) without containing actual bones.',
        principles: [
          {
            id: 'p-g4-sci-trace-fossils',
            title: 'Trace Fossil Evidence',
            standard: '4-ESS1-1',
            summary: 'Differentiate between trace fossils and body fossils.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
      {
        id: 'g4-sci-u5-l5',
        unitId: 'g4-sci-u5',
        title: 'Quiz 4: Rock Layers & Fossil Evidence',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
        videoTitle: 'Fossils Quiz Review',
        reading: 'Review quiz on superposition order, sedimentary rock formation, mountaintop marine fossils, and prehistoric climates.',
        principles: [
          {
            id: 'p-g4-sci-q4-fossils',
            title: 'Fossils & Strata Quiz',
            standard: '4-ESS1-1',
            summary: 'Review and demonstrate mastery of rock strata and fossil clues.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
      {
        id: 'g4-sci-u5-l6',
        unitId: 'g4-sci-u5',
        title: 'Unit 5 Test: Rock Layers & Fossils Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
        videoTitle: 'Unit 5 Test Review',
        reading: 'Comprehensive assessment on rock layering, fossil classification, trace fossils, and geological time clues.',
        principles: [
          {
            id: 'p-g4-sci-u5-test',
            title: 'Rock Layers & Fossils Exam',
            standard: '4-ESS1-1',
            summary: 'Demonstrate comprehensive understanding of fossils and geological history.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: PLANT STRUCTURES & FUNCTIONS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u6',
    title: 'Unit 6: Plant Structures & Functions',
    standards: ['4-LS1-1'],
    lessons: [
      {
        id: 'g4-sci-u6-l1',
        unitId: 'g4-sci-u6',
        title: 'Roots and Water Absorption',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
        videoTitle: 'Plant Roots and Absorption',
        reading: 'Roots anchor plants into soil and absorb water and dissolved mineral nutrients through millions of microscopic root hairs.',
        principles: [
          {
            id: 'p-g4-sci-roots',
            title: 'Root Anatomy and Function',
            standard: '4-LS1-1',
            summary: 'Construct an argument that plants have internal and external structures that support survival and growth.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
      {
        id: 'g4-sci-u6-l2',
        unitId: 'g4-sci-u6',
        title: 'Stems and Xylem Vascular Transport',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
        videoTitle: 'Xylem and Phloem Transport',
        reading: 'Xylem vessels act like continuous pipelines pulling water upward from roots to leaves through capillary action and transpiration.',
        principles: [
          {
            id: 'p-g4-sci-xylem',
            title: 'Vascular Xylem Transport System',
            standard: '4-LS1-1',
            summary: 'Explain internal xylem fluid transport mechanisms in vascular plants.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
      {
        id: 'g4-sci-u6-l3',
        unitId: 'g4-sci-u6',
        title: 'Leaves, Chlorophyll and Photosynthesis',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
        videoTitle: 'Photosynthesis in Leaves',
        reading: 'Chlorophyll in leaf chloroplasts harnesses sunlight energy to convert water and carbon dioxide into sugar food and oxygen gas.',
        principles: [
          {
            id: 'p-g4-sci-photosynthesis',
            title: 'Leaf Structure & Photosynthesis',
            standard: '4-LS1-1',
            summary: 'Describe how leaves use chlorophyll and sunlight to synthesize food.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
      {
        id: 'g4-sci-u6-l4',
        unitId: 'g4-sci-u6',
        title: 'Stomata and Transpiration Gas Exchange',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
        videoTitle: 'Stomata and Gas Exchange',
        reading: 'Stomata pores on leaf undersides open to absorb carbon dioxide and close during dry weather to prevent excessive water loss.',
        principles: [
          {
            id: 'p-g4-sci-stomata',
            title: 'Stomata Pores & Transpiration',
            standard: '4-LS1-1',
            summary: 'Explain gas exchange and water preservation regulated by leaf stomata.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
      {
        id: 'g4-sci-u6-l5',
        unitId: 'g4-sci-u6',
        title: 'Flowers, Pollinators, and Seed Dispersal',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
        videoTitle: 'Flower Reproduction and Pollination',
        reading: 'Flowers contain reproductive organs. Petals attract pollinators like bees that move pollen so plants can produce protected seeds.',
        principles: [
          {
            id: 'p-g4-sci-flowers',
            title: 'Flower Anatomy & Pollinator Attraction',
            standard: '4-LS1-1',
            summary: 'Describe reproductive adaptations in flowering plants.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
      {
        id: 'g4-sci-u6-l6',
        unitId: 'g4-sci-u6',
        title: 'Unit 6 Test: Plant Structures & Functions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
        videoTitle: 'Unit 6 Test Review',
        reading: 'Comprehensive assessment of root systems, xylem pipelines, leaf chlorophyll, stomata pores, and flower pollination.',
        principles: [
          {
            id: 'p-g4-sci-u6-test',
            title: 'Plant Structures Exam',
            standard: '4-LS1-1',
            summary: 'Demonstrate comprehensive understanding of internal and external plant structures.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: ANIMAL SENSES & INFORMATION PROCESSING (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u7',
    title: 'Unit 7: Animal Senses & Information Processing',
    standards: ['4-LS1-2'],
    lessons: [
      {
        id: 'g4-sci-u7-l1',
        unitId: 'g4-sci-u7',
        title: 'Sensory Receptors and Environmental Clues',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Animal%20Sensory%20Receptors%204th%20grade%20science',
        videoTitle: 'Animal Sensory Receptors',
        reading: 'Animals have specialized sense organs (eyes, ears, noses, skin) containing receptors that detect light, sound, smell, and pressure.',
        principles: [
          {
            id: 'p-g4-sci-senses',
            title: 'Sensory Receptors Overview',
            standard: '4-LS1-2',
            summary: 'Use a model to describe that animals receive different types of information through their senses.',
            bank: G4_SCIENCE_BANKS.animalSenses,
          },
        ],
      },
      {
        id: 'g4-sci-u7-l2',
        unitId: 'g4-sci-u7',
        title: 'Nocturnal Senses and Echolocation',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Echolocation%20in%20Bats%204th%20grade%20science',
        videoTitle: 'Echolocation in Bats',
        reading: 'Bats emit ultrasonic chirps and interpret returning sound echoes to navigate and pinpoint tiny flying moths in the dark.',
        principles: [
          {
            id: 'p-g4-sci-echolocation',
            title: 'Specialized Sensory Adaptations',
            standard: '4-LS1-2',
            summary: 'Explain specialized senses like echolocation and night vision in nocturnal animals.',
            bank: G4_SCIENCE_BANKS.animalSenses,
          },
        ],
      },
      {
        id: 'g4-sci-u7-l3',
        unitId: 'g4-sci-u7',
        title: 'Nerve Pathways and the Brain',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Brain%20Processing%20and%20Nerves%204th%20grade%20science',
        videoTitle: 'Brain Processing and Nerves',
        reading: 'Sense receptors send rapid electrical signals through nerves to the brain. The brain processes information and directs muscles to respond.',
        principles: [
          {
            id: 'p-g4-sci-brain-nerves',
            title: 'Nerve Pathways & Brain Processing',
            standard: '4-LS1-2',
            summary: 'Describe how nerves transmit sensory signals to the brain for decision-making.',
            bank: G4_SCIENCE_BANKS.animalSenses,
          },
        ],
      },
      {
        id: 'g4-sci-u7-l4',
        unitId: 'g4-sci-u7',
        title: 'Protective Reflexes and External Armor',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Reflexes%20and%20Protective%20Structures%204th%20grade%20science',
        videoTitle: 'Reflexes and Protective Structures',
        reading: 'Reflexes pull hands away from extreme heat before the brain consciously feels pain. Arthropod exoskeletons provide physical armor.',
        principles: [
          {
            id: 'p-g4-sci-reflexes',
            title: 'Protective Reflexes & Exoskeletons',
            standard: '4-LS1-2',
            summary: 'Explain rapid reflexive responses and physical protective adaptations.',
            bank: G4_SCIENCE_BANKS.animalSenses,
          },
        ],
      },
      {
        id: 'g4-sci-u7-l5',
        unitId: 'g4-sci-u7',
        title: 'Quiz 5: Senses & Brain Reactions',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology',
        videoTitle: 'Animal Senses Quiz Review',
        reading: 'Review quiz covering sensory receptors, bat echolocation, brain signal processing, and rapid pain reflexes.',
        principles: [
          {
            id: 'p-g4-sci-q5-senses',
            title: 'Sensory Processing Quiz',
            standard: '4-LS1-2',
            summary: 'Review and demonstrate mastery of sensory perception and nervous system.',
            bank: G4_SCIENCE_BANKS.animalSenses,
          },
        ],
      },
      {
        id: 'g4-sci-u7-l6',
        unitId: 'g4-sci-u7',
        title: 'Unit 7 Test: Animal Senses & Information Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology',
        videoTitle: 'Unit 7 Test Review',
        reading: 'Comprehensive assessment of sensory organs, nerve signal pathways, brain control, and animal survival adaptations.',
        principles: [
          {
            id: 'p-g4-sci-u7-test',
            title: 'Animal Senses Exam',
            standard: '4-LS1-2',
            summary: 'Demonstrate comprehensive understanding of animal sensory systems and reactions.',
            bank: G4_SCIENCE_BANKS.animalSenses,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: NATURAL HAZARDS & ENGINEERING SOLUTIONS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-sci-u8',
    title: 'Unit 8: Natural Hazards & Engineering Solutions',
    standards: ['4-ESS3-2'],
    lessons: [
      {
        id: 'g4-sci-u8-l1',
        unitId: 'g4-sci-u8',
        title: 'Earthquakes, Fault Lines, and Seismographs',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Earthquakes%20and%20Fault%20Lines%204th%20grade%20science',
        videoTitle: 'Earthquakes and Fault Lines',
        reading: 'Earthquakes occur when stress built along tectonic fault lines releases suddenly. Seismographs detect and measure these ground vibrations.',
        principles: [
          {
            id: 'p-g4-sci-earthquakes',
            title: 'Earthquake Causes & Detection',
            standard: '4-ESS3-2',
            summary: 'Generate and compare multiple solutions to reduce the impacts of natural Earth processes on humans.',
            bank: G4_SCIENCE_BANKS.naturalHazards,
          },
        ],
      },
      {
        id: 'g4-sci-u8-l2',
        unitId: 'g4-sci-u8',
        title: 'Earthquake-Resistant Building Design',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Earthquake%20Engineering%20Solutions%204th%20grade%20science',
        videoTitle: 'Earthquake Engineering Solutions',
        reading: 'Structural engineers design buildings with flexible cross-bracing steel frames and rubber base isolators that sway without crumbling.',
        principles: [
          {
            id: 'p-g4-sci-eq-engineering',
            title: 'Earthquake Structural Engineering',
            standard: '4-ESS3-2',
            summary: 'Evaluate engineering designs that protect buildings from seismic ground motion.',
            bank: G4_SCIENCE_BANKS.naturalHazards,
          },
        ],
      },
      {
        id: 'g4-sci-u8-l3',
        unitId: 'g4-sci-u8',
        title: 'Tsunamis, Floods, and Coastal Sea Walls',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Tsunamis%20and%20Coastal%20Protections%204th%20grade%20science',
        videoTitle: 'Tsunamis and Coastal Protections',
        reading: 'Underwater earthquakes trigger giant tsunami waves. Engineers construct reinforced concrete sea walls and flood gates to shield cities.',
        principles: [
          {
            id: 'p-g4-sci-tsunamis',
            title: 'Tsunami & Flood Mitigation Barriers',
            standard: '4-ESS3-2',
            summary: 'Describe how sea walls, levees, and coastal wetlands reduce natural hazard flooding.',
            bank: G4_SCIENCE_BANKS.naturalHazards,
          },
        ],
      },
      {
        id: 'g4-sci-u8-l4',
        unitId: 'g4-sci-u8',
        title: 'Quiz 6: Hazards & Engineering Design',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Natural Hazards Quiz Review',
        reading: 'Review quiz on fault slip earthquakes, seismographs, cross-braced steel buildings, and tsunami defense walls.',
        principles: [
          {
            id: 'p-g4-sci-q6-hazards',
            title: 'Hazards Review Quiz',
            standard: '4-ESS3-2',
            summary: 'Synthesize earthquake detection and protective engineering design.',
            bank: G4_SCIENCE_BANKS.naturalHazards,
          },
        ],
      },
      {
        id: 'g4-sci-u8-l5',
        unitId: 'g4-sci-u8',
        title: 'Unit 8 Test: Natural Hazards & Engineering Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Unit 8 Test Review',
        reading: 'Comprehensive assessment on identifying natural hazards and evaluating engineering solutions that protect human lives.',
        principles: [
          {
            id: 'p-g4-sci-u8-test',
            title: 'Natural Hazards Exam',
            standard: '4-ESS3-2',
            summary: 'Demonstrate mastery of natural hazards and human mitigation technologies.',
            bank: G4_SCIENCE_BANKS.naturalHazards,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: OHIO GEOLOGY, FOSSILS & LANDFORMS (6 Skills / Lessons) [OHIO EXT]
  // =========================================================================
  {
    id: 'g4-sci-u9',
    title: 'Unit 9: Ohio Geology, Fossils & Landforms',
    standards: ['OH.4.ESS.1', 'OH.4.ESS.2'],
    isOhioExtension: true,
    lessons: [
      {
        id: 'g4-sci-u9-l1',
        unitId: 'g4-sci-u9',
        title: 'Ohio Ancient Seas and Isotelus Trilobite',
        estimatedMinutes: 10,
        videoUrl: 'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-odnr/geologic-survey/educational-resources/isotelus-fossil',
        videoTitle: 'Ohio State Fossil Isotelus',
        reading: 'Hundreds of millions of years ago, warm shallow seas covered Ohio. Isotelus maximus, a marine trilobite, is Ohio official state fossil.',
        principles: [
          {
            id: 'p-g4-sci-ohio-fossil',
            title: 'Ohio Marine Fossil Heritage',
            standard: 'OH.4.ESS.1',
            summary: 'Explain how ancient seas created Ohio rich limestone and trilobite fossil record.',
            bank: G4_SCIENCE_BANKS.ohioGeology,
          },
        ],
      },
      {
        id: 'g4-sci-u9-l2',
        unitId: 'g4-sci-u9',
        title: 'Glacial Till Plains of Western Ohio',
        estimatedMinutes: 10,
        videoUrl: 'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/geologic-survey/glacial-geology/evidence-of-glaciers',
        videoTitle: 'Glaciers in Ohio',
        reading: 'Massive continental glaciers flattened hills in western and northern Ohio, leaving behind rich glacial till that created great farmland.',
        principles: [
          {
            id: 'p-g4-sci-ohio-till',
            title: 'Glacial Till & Soil Plains',
            standard: 'OH.4.ESS.1',
            summary: 'Describe how Ice Age glaciers reshaped the topography of western and northern Ohio.',
            bank: G4_SCIENCE_BANKS.ohioGeology,
          },
        ],
      },
      {
        id: 'g4-sci-u9-l3',
        unitId: 'g4-sci-u9',
        title: 'The Unglaciated Allegheny Plateau',
        estimatedMinutes: 10,
        videoUrl: 'https://ohiodnr.gov/glacialgeology',
        videoTitle: 'Unglaciated Plateau in Southeastern Ohio',
        reading: 'Glaciers stopped before reaching southeastern Ohio, preserving rugged hills, deep sandstone gorges, and Hocking Hills waterfalls.',
        principles: [
          {
            id: 'p-g4-sci-ohio-plateau',
            title: 'Unglaciated Appalachian Plateau',
            standard: 'OH.4.ESS.1',
            summary: 'Contrast the rolling hills of southeastern Ohio with the flat glaciated till plains.',
            bank: G4_SCIENCE_BANKS.ohioGeology,
          },
        ],
      },
      {
        id: 'g4-sci-u9-l4',
        unitId: 'g4-sci-u9',
        title: 'Lake Erie Basin and Kelleys Island Grooves',
        estimatedMinutes: 10,
        videoUrl: 'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/geologic-survey/publications-maps/geologic-hiking-guides/geology-of-kelleys-island',
        videoTitle: 'Kelleys Island Glacial Grooves',
        reading: 'Moving glaciers carved Lake Erie basin and scored deep 400-foot grooves into limestone bedrock on Kelleys Island.',
        principles: [
          {
            id: 'p-g4-sci-ohio-grooves',
            title: 'Lake Erie Basin & Bedrock Grooves',
            standard: 'OH.4.ESS.2',
            summary: 'Identify evidence of glacial gouging at Lake Erie and Kelleys Island.',
            bank: G4_SCIENCE_BANKS.ohioGeology,
          },
        ],
      },
      {
        id: 'g4-sci-u9-l5',
        unitId: 'g4-sci-u9',
        title: 'Quiz 7: Ohio Geological Features',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://ohiodnr.gov/',
        videoTitle: 'Ohio Geology Quiz Review',
        reading: 'Review quiz on Isotelus trilobites, glacial till plains, unglaciated Appalachian hills, and Kelleys Island grooves.',
        principles: [
          {
            id: 'p-g4-sci-q7-ohio',
            title: 'Ohio Geology Quiz',
            standard: 'OH.4.ESS.1',
            summary: 'Review and demonstrate mastery of Ohio geological landforms and history.',
            bank: G4_SCIENCE_BANKS.ohioGeology,
          },
        ],
      },
      {
        id: 'g4-sci-u9-l6',
        unitId: 'g4-sci-u9',
        title: 'Unit 9 Test: Ohio Geology & Landforms Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://ohiodnr.gov/',
        videoTitle: 'Unit 9 Test Review',
        reading: 'Comprehensive assessment of Ohio marine fossils, glacial landforms, Lake Erie formation, and regional topography.',
        principles: [
          {
            id: 'p-g4-sci-u9-test',
            title: 'Ohio Geology Exam',
            standard: 'OH.4.ESS.1',
            summary: 'Demonstrate comprehensive understanding of Ohio natural history and landforms.',
            bank: G4_SCIENCE_BANKS.ohioGeology,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 10: COURSE CHALLENGE CAPSTONE (3 Cumulative Reviews)
  // =========================================================================
  {
    id: 'g4-sci-u10',
    title: 'Unit 10: Course Challenge Capstone',
    standards: ['4-PS3', '4-PS4', '4-ESS1', '4-ESS2', '4-LS1'],
    lessons: [
      {
        id: 'g4-sci-u10-l1',
        unitId: 'g4-sci-u10',
        title: 'Physical Science Cumulative Review',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-physics',
        videoTitle: 'Physical Science Review',
        reading: 'Spiral review of kinetic energy, complete electrical circuits, conductors vs insulators, and wave amplitude.',
        principles: [
          {
            id: 'p-g4-sci-cap-phys',
            title: 'Physical Science Synthesis',
            standard: '4-PS3-1',
            summary: 'Spiral review of energy, circuits, and wave mechanisms.',
            bank: G4_SCIENCE_BANKS.energy,
          },
        ],
      },
      {
        id: 'g4-sci-u10-l2',
        unitId: 'g4-sci-u10',
        title: 'Earth & Life Science Cumulative Review',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
        videoTitle: 'Earth and Life Science Review',
        reading: 'Spiral review of physical weathering, rock superposition, xylem plant transport, and animal sensory processing.',
        principles: [
          {
            id: 'p-g4-sci-cap-earth-life',
            title: 'Earth & Life Science Synthesis',
            standard: '4-ESS1-1',
            summary: 'Spiral review of rock strata, plant anatomy, and animal reflexes.',
            bank: G4_SCIENCE_BANKS.fossils,
          },
        ],
      },
      {
        id: 'g4-sci-u10-l3',
        unitId: 'g4-sci-u10',
        title: 'Grade 4 Science Comprehensive Course Challenge',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology',
        videoTitle: 'Grade 4 Science Capstone Exam',
        reading: 'Final capstone assessment synthesizing all Grade 4 physical, earth, space, and life science standards.',
        principles: [
          {
            id: 'p-g4-sci-capstone-final',
            title: 'Course Challenge Final Exam',
            standard: '4-LS1-1',
            summary: 'Demonstrate comprehensive mastery across all Grade 4 science disciplines.',
            bank: G4_SCIENCE_BANKS.plants,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 11: EXPLORE SCIENCE THROUGH SIMULATIONS & LABS (Enrichment, Unlocked)
  // =========================================================================
  {
    id: 'g4-sci-u11',
    title: 'Unit 11: Explore Science Through Simulations & Labs',
    kind: 'explore',
    standards: ['4-PS3-2', '4-PS4-1', '4-ESS2-1', '4-ESS1-1'],
    exploreItems: [
      {
        id: 'g4-sci-exp-phet-circuit',
        title: 'PhET Simulation: Circuit Construction Kit DC',
        type: 'simulation',
        estimatedMinutes: 20,
        url: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
        description: 'Drag batteries, light bulbs, switches, and wires to build functional series and parallel circuits interactively.',
        steps: [
          'Build a simple circuit with 1 battery, 2 wires, and 1 light bulb.',
          'Add a switch and observe the flow of blue electrons starting and stopping.',
          'Test mystery grab-bag items (paperclip, eraser, dollar bill, penny) to identify conductors and insulators.',
        ],
        reflectionPrompt: 'Why does a paperclip allow electrons to flow through while a rubber eraser stops them completely?',
      },
      {
        id: 'g4-sci-exp-phet-wave',
        title: 'PhET Simulation: Wave on a String',
        type: 'simulation',
        estimatedMinutes: 15,
        url: 'https://phet.colorado.edu/en/simulations/wave-on-a-string',
        description: 'Wiggle a wrench or oscillate automatically to observe how wave amplitude and frequency change wave energy.',
        steps: [
          'Select Oscillate mode with No End.',
          'Increase the Amplitude slider from 0.5 cm to 1.25 cm and notice the crest height.',
          'Change the Damping slider to observe how waves gradually lose energy through matter.',
        ],
        reflectionPrompt: 'What happens to the height of the string waves when you increase the amplitude setting?',
      },
      {
        id: 'g4-sci-exp-kitchen-stream',
        title: 'Kitchen Science Lab: Baking Pan Stream Table',
        type: 'hands_on',
        estimatedMinutes: 25,
        description: 'Model river erosion, sediment transport, and delta deposition using sand, gravel, water, and an angled baking sheet.',
        materials: ['Rimmed baking sheet', 'Sand and soil mix', 'Small cup with hole in bottom', 'Water', 'Book to prop sheet'],
        steps: [
          'Spread a 2-inch layer of moist sand and soil at the top half of the propped baking sheet.',
          'Slowly pour water from the top cup to simulate a gentle rainstorm.',
          'Observe small channels forming as running water erodes sand particles.',
          'Watch where sediments settle at the bottom of the tray to form a tiny fan delta.',
        ],
        reflectionPrompt: 'Where did the largest grains of gravel settle compared to the fine particles of sand and mud?',
      },
      {
        id: 'g4-sci-exp-fossil-mold',
        title: 'Hands-On Investigation: Clay Fossil Cast & Mold',
        type: 'hands_on',
        estimatedMinutes: 25,
        description: 'Recreate the fossilization process by pressing shells or leaves into modeling clay and filling the mold with plaster.',
        materials: ['Modeling clay or playdough', 'Seashells, plastic toy dinosaur, or firm leaves', 'Plaster of Paris or school glue', 'Water and paper cup'],
        steps: [
          'Flatten a ball of clay into a smooth 1-inch thick patty.',
          'Press a seashell firmly into the clay to create an imprint mold, then carefully remove it.',
          'Mix plaster with water and spoon it into the mold indentation.',
          'Let dry for 2 hours, then peel away the clay to reveal your cast fossil.',
        ],
        reflectionPrompt: 'What is the difference between the indented mold left in the clay and the 3D cast made from plaster?',
      },
    ],
    lessons: [],
  },

  // =========================================================================
  // UNIT 12: TEACHER RESOURCES & PACING (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g4-sci-u12',
    title: 'Unit 12: Teacher Resources & Pacing',
    kind: 'teacher_resources',
    standards: ['NGSS-4-PS3', 'NGSS-4-PS4', 'NGSS-4-ESS1', 'NGSS-4-ESS2', 'NGSS-4-LS1', 'OH-4-ESS'],
    resources: [
      {
        id: 'g4-sci-res-pacing',
        title: 'Grade 4 Science 36-Week Pacing Guide',
        kind: 'pacing_guide',
        description: 'Recommended weekly lesson distribution to complete Grade 4 Science across a standard 9-month school year.',
        body: `### Grade 4 Science 36-Week Pacing Guide
- **Weeks 1–4**: Unit 1 (Energy, Speed & Collisions) — 6 skills
- **Weeks 5–8**: Unit 2 (Energy Transfer & Electricity) — 6 skills
- **Weeks 9–12**: Unit 3 (Waves, Amplitude & Information) — 6 skills
- **Weeks 13–16**: Unit 4 (Earth Landscapes & Weathering) — 6 skills
- **Weeks 17–19**: Unit 5 (Rock Layers & Fossils) — 6 skills & Mid-Year Check
- **Weeks 20–24**: Unit 6 (Plant Structures & Functions) — 6 skills
- **Weeks 25–28**: Unit 7 (Animal Senses & Information Processing) — 6 skills
- **Weeks 29–31**: Unit 8 (Natural Hazards & Engineering Solutions) — 5 skills
- **Weeks 32–34**: Unit 9 (Ohio Geology, Fossils & Landforms) — 6 skills
- **Weeks 35–36**: Unit 10 (Comprehensive Course Challenge & Science Portfolio).`,
      },
      {
        id: 'g4-sci-res-safety',
        title: 'Home Laboratory Safety & Material Checklist',
        kind: 'printable',
        description: 'Safety guidelines and low-cost household equipment list for Grade 4 hands-on science experiments.',
        body: `### Home Laboratory Safety Guidelines
1. **Adult Supervision**: Always perform experiments with parent or guardian oversight.
2. **Eye Safety**: Wear splash goggles when pouring water, mixing vinegar, or handling soil.
3. **Clean Work Area**: Cover tabletops with newspaper or plastic before starting stream tables.
4. **Electrical Safety**: Only use low-voltage AA/AAA/9V dry cell batteries for circuit activities. Never plug wires into wall outlets.
5. **Safe Disposal**: Rinse non-toxic solutions down the drain with cold water. Dispose of clay in regular trash.`,
      },
      {
        id: 'g4-sci-res-rubric',
        title: 'Scientific Inquiry & Engineering Design Rubric',
        kind: 'assessment_rubric',
        description: 'Scoring guide for evaluating student science notebooks, lab hypotheses, data recording, and engineering solutions.',
        body: `### Scientific Inquiry 4-Point Scoring Rubric
- **Level 4 (Advanced)**: States a clear testable hypothesis; records neat quantitative data; explains results using standard scientific vocabulary (e.g., amplitude, kinetic energy, superposition).
- **Level 3 (Proficient)**: States a reasonable prediction; records complete observational data; draws logical conclusions from experiment results.
- **Level 2 (Developing)**: Records partial observations; requires prompting to link evidence to scientific principles.
- **Level 1 (Beginning)**: Incomplete data record; struggles to state how experiment results relate to the lesson topic.`,
      },
    ],
    lessons: [],
  },
]
