import { Course, Principle } from '../../types'

// Principles for Grade 8 Science
const P_G8_SCI_NET_FORCE: Principle = {
  id: 'p-g8-sci-net-force',
  title: 'Forces, Net Force & Balanced Motion',
  standard: 'MS-PS2-2 / OH.8.PS.2',
  summary: 'Net force is the combined push or pull on an object; unbalanced forces change speed or direction.',
  bank: [
    {
      id: 'g8-sci-nf-1',
      type: 'mc',
      prompt: 'What is the total combined force acting on an object called?',
      choices: ['Net force', 'Mass', 'Inertia', 'Density'],
      answer: 'Net force',
      explanation: 'Net force is the overall force left after combining all pushes and pulls on an object.',
    },
    {
      id: 'g8-sci-nf-2',
      type: 'mc',
      prompt: 'Two students push a box right with 15 N each. Find net force.',
      choices: ['30 N to the right', '0 N balanced', '15 N to the left', '225 N upward'],
      answer: '30 N to the right',
      explanation: 'Forces acting in the same direction add together: 15 N + 15 N = 30 N right.',
    },
    {
      id: 'g8-sci-nf-3',
      type: 'mc',
      prompt: 'You push right with 20 N against 20 N left. What happens?',
      choices: [
        'Net force is 0 N; motion stays unchanged.',
        'Net force is 40 N right.',
        'The object speeds up to the left.',
        'Gravity disappears.',
      ],
      answer: 'Net force is 0 N; motion stays unchanged.',
      explanation: 'Equal forces in opposite directions cancel out (balanced forces), so net force is 0 N.',
    },
    {
      id: 'g8-sci-nf-4',
      type: 'mc',
      prompt: 'What causes a moving hockey puck to slow down on rough ice?',
      choices: ['Friction opposing the motion', 'Balanced forces', 'Zero gravity', 'Magnetic attraction'],
      answer: 'Friction opposing the motion',
      explanation: 'Friction is a contact force between surfaces that acts opposite to the direction of motion.',
    },
    {
      id: 'g8-sci-nf-5',
      type: 'mc',
      prompt: 'According to F = m × a, what happens if force doubles?',
      choices: [
        'Acceleration doubles for the same mass.',
        'Acceleration drops to zero.',
        'Mass doubles automatically.',
        'The object stops moving.',
      ],
      answer: 'Acceleration doubles for the same mass.',
      explanation: 'In Newton’s Second Law (F = ma), doubling the net force on the same mass doubles acceleration.',
    },
    {
      id: 'g8-sci-nf-6',
      type: 'mc',
      prompt: 'An object’s tendency to resist any change in motion is called:',
      choices: ['Inertia', 'Velocity', 'Friction', 'Compression'],
      answer: 'Inertia',
      explanation: 'Inertia is the property of matter that keeps resting objects still and moving objects in motion.',
    },
    {
      id: 'g8-sci-nf-7',
      type: 'mc',
      prompt: 'A 10 N force pulls right and 4 N pulls left. Net force?',
      choices: ['6 N to the right', '14 N to the right', '6 N to the left', '40 N balanced'],
      answer: '6 N to the right',
      explanation: 'Subtract opposite forces: 10 N right minus 4 N left leaves 6 N to the right.',
    },
    {
      id: 'g8-sci-nf-8',
      type: 'mc',
      prompt: 'In Newton’s Third Law, when a swimmer pushes water backward, the water:',
      choices: [
        'Pushes the swimmer forward with equal force',
        'Applies zero force to the swimmer',
        'Pulls the swimmer backward',
        'Loses all mass',
      ],
      answer: 'Pushes the swimmer forward with equal force',
      explanation: 'Every action force has an equal and opposite reaction force pushing back on the swimmer.',
    },
  ],
}

const P_G8_SCI_FIELDS: Principle = {
  id: 'p-g8-sci-fields',
  title: 'Gravitational, Electric & Magnetic Force Fields',
  standard: 'OH.8.PS.1',
  summary: 'Non-contact forces act across space through fields; field strength increases with mass or charge and decreases with distance.',
  bank: [
    {
      id: 'g8-sci-fld-1',
      type: 'mc',
      prompt: 'Which force pulls two masses toward each other across space without touching?',
      choices: ['Gravity', 'Friction', 'Tension', 'Air resistance'],
      answer: 'Gravity',
      explanation: 'Gravity is a non-contact attractive force that exists between all objects with mass.',
    },
    {
      id: 'g8-sci-fld-2',
      type: 'mc',
      prompt: 'What happens to gravitational pull when two objects move farther apart?',
      choices: [
        'Gravitational force weakens significantly.',
        'Gravitational force grows much stronger.',
        'Gravitational force reverses into a push.',
        'Mass turns into energy.',
      ],
      answer: 'Gravitational force weakens significantly.',
      explanation: 'Gravitational attraction decreases as distance between objects increases (inverse-square law).',
    },
    {
      id: 'g8-sci-fld-3',
      type: 'mc',
      prompt: 'Two socks stick together after tumbling in the dryer because of:',
      choices: [
        'Static electric charges attracting each other',
        'Strong magnetic poles in the cotton',
        'Mantle convection currents',
        'Zero air pressure',
      ],
      answer: 'Static electric charges attracting each other',
      explanation: 'Opposite electric charges (+ and -) attract each other, creating static cling between fabrics.',
    },
    {
      id: 'g8-sci-fld-4',
      type: 'mc',
      prompt: 'What happens when two North poles of bar magnets face each other?',
      choices: [
        'They repel each other.',
        'They attract and stick tight.',
        'They lose all magnetism permanently.',
        'They heat up to boiling.',
      ],
      answer: 'They repel each other.',
      explanation: 'Like magnetic poles (N-N or S-S) repel, while opposite poles (N-S) attract.',
    },
    {
      id: 'g8-sci-fld-5',
      type: 'mc',
      prompt: 'How can you strengthen a simple electromagnet made with a nail?',
      choices: [
        'Add more wire coils or increase battery voltage.',
        'Remove the iron core nail.',
        'Unwind half the wire loops.',
        'Submerge it in ice water.',
      ],
      answer: 'Add more wire coils or increase battery voltage.',
      explanation: 'More wire loops or higher electrical current strengthens the induced magnetic field.',
    },
    {
      id: 'g8-sci-fld-6',
      type: 'mc',
      prompt: 'Why does Earth pull you downward with more force than the Moon?',
      choices: [
        'Earth has far greater mass than the Moon.',
        'Earth is closer to the Sun.',
        'The Moon has no gravity at all.',
        'Earth spins much faster.',
      ],
      answer: 'Earth has far greater mass than the Moon.',
      explanation: 'Gravitational pull depends on mass; Earth has about 81 times the mass of the Moon.',
    },
    {
      id: 'g8-sci-fld-7',
      type: 'mc',
      prompt: 'Invisible force regions around magnets, charges, or masses are called:',
      choices: ['Fields', 'Frictions', 'Inertias', 'Collisions'],
      answer: 'Fields',
      explanation: 'Fields allow non-contact forces (gravitational, electric, and magnetic) to exert forces across distance.',
    },
    {
      id: 'g8-sci-fld-8',
      type: 'mc',
      prompt: 'A negatively charged balloon repels another balloon because the second balloon is:',
      choices: ['Negatively charged', 'Positively charged', 'Neutral', 'Grounded with water'],
      answer: 'Negatively charged',
      explanation: 'Like electric charges repel each other, so two negatively charged balloons push apart.',
    },
  ],
}

const P_G8_SCI_EARTH_LAYERS: Principle = {
  id: 'p-g8-sci-earth-layers',
  title: 'Earth’s Interior Layers & Seismic Waves',
  standard: 'OH.8.ESS.1',
  summary: 'Earth consists of the crust, mantle, liquid outer core, and solid inner core; seismic waves reveal internal layers.',
  bank: [
    {
      id: 'g8-sci-el-1',
      type: 'mc',
      prompt: 'Which layer of Earth is the thin, rocky outer shell?',
      choices: ['Crust', 'Mantle', 'Outer core', 'Inner core'],
      answer: 'Crust',
      explanation: 'The crust is Earth’s thin outermost layer of solid rock where continents and oceans sit.',
    },
    {
      id: 'g8-sci-el-2',
      type: 'mc',
      prompt: 'What causes tectonic plates to slowly move across Earth’s surface?',
      choices: [
        'Convection currents in the hot mantle',
        'Ocean waves hitting beaches',
        'Wind blowing across mountains',
        'Moonlight heating the crust',
      ],
      answer: 'Convection currents in the hot mantle',
      explanation: 'Hot mantle rock rises, cools, and sinks in slow convection loops that drag tectonic plates.',
    },
    {
      id: 'g8-sci-el-3',
      type: 'mc',
      prompt: 'Which layer of Earth is made of liquid iron and nickel?',
      choices: ['Outer core', 'Crust', 'Inner core', 'Upper mantle'],
      answer: 'Outer core',
      explanation: 'The outer core is molten liquid metal whose churning motion generates Earth’s magnetic field.',
    },
    {
      id: 'g8-sci-el-4',
      type: 'mc',
      prompt: 'Why is Earth’s inner core solid despite extreme heat?',
      choices: [
        'Immense pressure squeezes atoms into a solid.',
        'It is made of frozen water.',
        'Sunlight cannot reach the core.',
        'It has zero gravity.',
      ],
      answer: 'Immense pressure squeezes atoms into a solid.',
      explanation: 'Crushing pressure at Earth’s center keeps the iron-nickel inner core solid even at extreme temperatures.',
    },
    {
      id: 'g8-sci-el-5',
      type: 'mc',
      prompt: 'How do geologists know the outer core is liquid without drilling there?',
      choices: [
        'S-waves from earthquakes cannot pass through liquid.',
        'Cameras floated to the center of Earth.',
        'Volcanoes erupt core ice.',
        'Satellites see through solid rock.',
      ],
      answer: 'S-waves from earthquakes cannot pass through liquid.',
      explanation: 'Seismic shear waves (S-waves) stop at the outer core boundary because S-waves only travel through solids.',
    },
    {
      id: 'g8-sci-el-6',
      type: 'mc',
      prompt: 'What rigid layer includes the crust and uppermost solid mantle?',
      choices: ['Lithosphere', 'Atmosphere', 'Hydrosphere', 'Inner core'],
      answer: 'Lithosphere',
      explanation: 'The lithosphere is the rigid outer shell broken into tectonic plates.',
    },
    {
      id: 'g8-sci-el-7',
      type: 'mc',
      prompt: 'Which layer makes up the largest portion of Earth’s volume?',
      choices: ['Mantle', 'Crust', 'Inner core', 'Soil layer'],
      answer: 'Mantle',
      explanation: 'The thick rocky mantle between the crust and core makes up over 80% of Earth’s volume.',
    },
    {
      id: 'g8-sci-el-8',
      type: 'mc',
      prompt: 'What generates Earth’s protective global magnetic field?',
      choices: [
        'Swirling liquid iron in the outer core',
        'Trees growing in rainforests',
        'Sand dunes in deserts',
        'Clouds in the troposphere',
      ],
      answer: 'Swirling liquid iron in the outer core',
      explanation: 'Convection of electrically conducting liquid iron in the outer core creates Earth’s magnetic field.',
    },
  ],
}

const P_G8_SCI_TECTONICS: Principle = {
  id: 'p-g8-sci-tectonics',
  title: 'Plate Boundaries, Seafloor Spreading & the Rock Record',
  standard: 'OH.8.ESS.2 / OH.8.ESS.3',
  summary: 'Divergent, convergent, and transform plate boundaries shape Earth’s crust through volcanoes, trenches, and faults.',
  bank: [
    {
      id: 'g8-sci-tec-1',
      type: 'mc',
      prompt: 'What happens at a divergent boundary on the ocean floor?',
      choices: [
        'Plates pull apart and magma forms new crust.',
        'Plates collide to build dry deserts.',
        'All crust disappears into space.',
        'Ocean water freezes into glaciers.',
      ],
      answer: 'Plates pull apart and magma forms new crust.',
      explanation: 'At divergent boundaries (mid-ocean ridges), plates separate and rising magma cools into new oceanic crust.',
    },
    {
      id: 'g8-sci-tec-2',
      type: 'mc',
      prompt: 'When a dense oceanic plate slides beneath a continental plate, it is:',
      choices: ['Subduction', 'Evaporation', 'Deposition', 'Photosynthesis'],
      answer: 'Subduction',
      explanation: 'Subduction occurs when a denser oceanic plate sinks into the mantle beneath a lighter plate.',
    },
    {
      id: 'g8-sci-tec-3',
      type: 'mc',
      prompt: 'Two plates grind horizontally past each other along the San Andreas Fault:',
      choices: ['Transform boundary', 'Divergent boundary', 'Hot spot', 'River delta'],
      answer: 'Transform boundary',
      explanation: 'At a transform boundary, plates slide sideways past one another, causing frequent earthquakes.',
    },
    {
      id: 'g8-sci-tec-4',
      type: 'mc',
      prompt: 'Matching fossils on South America and Africa support which idea?',
      choices: [
        'Continental drift from an ancient supercontinent (Pangaea)',
        'Land bridges made of ice yesterday',
        'Reptiles flying across the Atlantic Ocean',
        'Continents never moving',
      ],
      answer: 'Continental drift from an ancient supercontinent (Pangaea)',
      explanation: 'Identical fossils and rock belts across separated continents show they were once joined together.',
    },
    {
      id: 'g8-sci-tec-5',
      type: 'mc',
      prompt: 'Where is the youngest oceanic crust located on the seafloor?',
      choices: [
        'Right along the center of mid-ocean ridges',
        'Deep inside continental mountains',
        'Only at the North Pole',
        'All seafloor rock is the same age',
      ],
      answer: 'Right along the center of mid-ocean ridges',
      explanation: 'New magma erupts at mid-ocean ridges, so crust gets older as you move farther from the ridge.',
    },
    {
      id: 'g8-sci-tec-6',
      type: 'mc',
      prompt: 'What forms when two continental plates collide head-on?',
      choices: ['High folded mountain ranges like the Himalayas', 'Deep ocean trenches', 'Mid-ocean ridges', 'Flat coral atolls'],
      answer: 'High folded mountain ranges like the Himalayas',
      explanation: 'Neither buoyant continental plate subducts easily, so the crust buckles upward into tall mountains.',
    },
    {
      id: 'g8-sci-tec-7',
      type: 'mc',
      prompt: 'In undisturbed rock layers, what does the Law of Superposition state?',
      choices: [
        'Bottom layers are oldest and top layers are youngest.',
        'Top layers are always the oldest.',
        'All layers formed on the same day.',
        'Fossils only form in magma.',
      ],
      answer: 'Bottom layers are oldest and top layers are youngest.',
      explanation: 'Sedimentary layers stack from bottom to top over time, making lower layers older than upper layers.',
    },
    {
      id: 'g8-sci-tec-8',
      type: 'mc',
      prompt: 'How do wide-ranging index fossils help geologists study rock layers?',
      choices: [
        'They match the relative age of rocks across regions.',
        'They measure daily rainfall.',
        'They melt sedimentary rock into lava.',
        'They predict tomorrow’s weather.',
      ],
      answer: 'They match the relative age of rocks across regions.',
      explanation: 'Index fossils come from species that lived briefly over wide areas, dating the rock layer.',
    },
  ],
}

const P_G8_SCI_GENETICS: Principle = {
  id: 'p-g8-sci-genetics',
  title: 'Reproduction, Punnett Squares & Natural Selection',
  standard: 'MS-LS3-2 / OH.8.LS.1 / OH.8.LS.3',
  summary: 'Sexual reproduction creates genetic variation via meiosis; dominant and recessive alleles follow Mendelian inheritance.',
  bank: [
    {
      id: 'g8-sci-gen-1',
      type: 'mc',
      prompt: 'How does asexual reproduction compare to sexual reproduction?',
      choices: [
        'Asexual makes genetically identical offspring from one parent.',
        'Asexual combines DNA from two parents.',
        'Sexual makes exact clones of one parent.',
        'Neither passes DNA to offspring.',
      ],
      answer: 'Asexual makes genetically identical offspring from one parent.',
      explanation: 'Asexual reproduction uses mitosis from one parent to produce genetically identical offspring.',
    },
    {
      id: 'g8-sci-gen-2',
      type: 'mc',
      prompt: 'Which cell division produces sperm and egg cells with half the chromosomes?',
      choices: ['Meiosis', 'Mitosis', 'Photosynthesis', 'Respiration'],
      answer: 'Meiosis',
      explanation: 'Meiosis cuts the chromosome number in half so fertilization restores a full set.',
    },
    {
      id: 'g8-sci-gen-3',
      type: 'mc',
      prompt: 'In pea plants, tall (T) is dominant over short (t). Genotype Tt is:',
      choices: ['Tall (heterozygous)', 'Short (homozygous)', 'Medium height', 'Seedless'],
      answer: 'Tall (heterozygous)',
      explanation: 'A dominant allele (T) masks the recessive allele (t) in a heterozygous (Tt) organism.',
    },
    {
      id: 'g8-sci-gen-4',
      type: 'mc',
      prompt: 'Which genotype will show a recessive trait like blue eyes (b)?',
      choices: ['bb (homozygous recessive)', 'BB (homozygous dominant)', 'Bb (heterozygous)', 'Any genotype with B'],
      answer: 'bb (homozygous recessive)',
      explanation: 'A recessive trait appears only when an organism inherits two recessive alleles (bb) and no dominant allele.',
    },
    {
      id: 'g8-sci-gen-5',
      type: 'mc',
      prompt: 'Cross Tt × Tt in a Punnett square. What percent are tt?',
      choices: ['25% (1 out of 4)', '75% (3 out of 4)', '100% (4 out of 4)', '0% (none)'],
      answer: '25% (1 out of 4)',
      explanation: 'Crossing Tt × Tt produces TT, Tt, Tt, and tt—giving a 1 in 4 (25%) chance of tt.',
    },
    {
      id: 'g8-sci-gen-6',
      type: 'mc',
      prompt: 'What is the difference between an organism’s genotype and phenotype?',
      choices: [
        'Genotype is allele letters; phenotype is observable traits.',
        'Phenotype is DNA code; genotype is diet.',
        'They mean the exact same thing.',
        'Only plants have a phenotype.',
      ],
      answer: 'Genotype is allele letters; phenotype is observable traits.',
      explanation: 'Genotype is the genetic makeup (like Bb), while phenotype is the physical trait seen (like brown fur).',
    },
    {
      id: 'g8-sci-gen-7',
      type: 'mc',
      prompt: 'Why is genetic variation helpful when a species’ environment changes?',
      choices: [
        'Some individuals may have traits that help them survive.',
        'Every individual dies at the exact same moment.',
        'Variation prevents all reproduction.',
        'Traits never affect survival.',
      ],
      answer: 'Some individuals may have traits that help them survive.',
      explanation: 'In natural selection, individuals with helpful inherited traits survive better and pass those traits on.',
    },
    {
      id: 'g8-sci-gen-8',
      type: 'mc',
      prompt: 'After tree bark darkened with soot, dark moths survived better. This shows:',
      choices: ['Natural selection through camouflage', 'Asexual cloning', 'Plate tectonics', 'Artificial weather'],
      answer: 'Natural selection through camouflage',
      explanation: 'Predators spotted light moths more easily on dark bark, so dark moths survived and reproduced more.',
    },
  ],
}

export const G8_SCIENCE_COURSE: Course = {
  id: 'g8-science',
  subject: 'science',
  grade: 8,
  title: 'Grade 8 Integrated Science',
  subtitle: 'Forces, Motion & Fields, Plate Tectonics, Earth’s Interior & Heredity',
  credits: 1.0,
  color: '#059669',
  icon: '⚡',
  units: [
    // UNIT 1: Forces, Net Force & Newton’s Laws of Motion
    {
      id: 'g8-sci-u1',
      title: 'Unit 1: Forces, Net Force & Newton’s Laws of Motion',
      standards: ['MS-PS2-1', 'MS-PS2-2', 'OH.8.PS.2'],
      lessons: [
        {
          id: 'g8-sci-u1-l1',
          unitId: 'g8-sci-u1',
          title: 'Lesson 1: Balanced & Unbalanced Forces and Net Force',
          kind: 'lesson',
          partOf: 'Forces & Net Force',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/middle-school-physics/forces-and-motion-ms/unbalanced-forces-and-motion/v/balanced-and-unbalanced-forces',
          videoTitle: 'Khan Academy: Balanced and Unbalanced Forces',
          reading:
            'Forces are pushes or pulls measured in newtons (N). When forces balance, net force is zero and motion does not change. Unbalanced forces cause acceleration.',
          principles: [P_G8_SCI_NET_FORCE],
        },
        {
          id: 'g8-sci-u1-l2',
          unitId: 'g8-sci-u1',
          title: 'Lesson 2: Newton’s First Law & Inertia',
          kind: 'lesson',
          partOf: 'Newton’s First Law',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/v/newton-s-first-law-of-motion',
          videoTitle: 'Khan Academy: Newton’s First Law of Motion',
          reading:
            'Newton’s First Law states that an object at rest remains at rest, and an object in motion continues at constant velocity unless acted upon by a net external force.',
          principles: [P_G8_SCI_NET_FORCE],
        },
        {
          id: 'g8-sci-u1-l3',
          unitId: 'g8-sci-u1',
          title: 'Lesson 3: Newton’s Second Law: F = m × a',
          kind: 'lesson',
          partOf: 'Newton’s Second Law',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/v/newton-s-second-law-of-motion',
          videoTitle: 'Khan Academy: Newton’s Second Law of Motion',
          reading:
            'Acceleration depends directly on net force and inversely on mass: F = ma. Doubling force on an object doubles acceleration, while doubling mass cuts acceleration in half.',
          principles: [P_G8_SCI_NET_FORCE],
        },
        {
          id: 'g8-sci-u1-l4',
          unitId: 'g8-sci-u1',
          title: 'Lesson 4: Newton’s Third Law: Action-Reaction Pairs',
          kind: 'lesson',
          partOf: 'Newton’s Third Law',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/v/newton-s-third-law-of-motion',
          videoTitle: 'Khan Academy: Newton’s Third Law of Motion',
          reading:
            'For every action force, there is an equal and opposite reaction force. Forces always occur in pairs acting on two distinct interacting objects.',
          principles: [P_G8_SCI_NET_FORCE],
        },
        {
          id: 'g8-sci-u1-l5',
          unitId: 'g8-sci-u1',
          title: 'Lesson 5: Unit 1 Checkpoint Review: Forces & Motion',
          kind: 'lesson_review',
          partOf: 'Forces Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/science/middle-school-physics/forces-and-motion-ms/v/forces-review',
          videoTitle: 'Khan Academy: Newton’s Laws Review',
          reading:
            'Review net force calculations, vector balance, friction, inertia, F = ma problem solving, and action-reaction pairings.',
          principles: [P_G8_SCI_NET_FORCE],
        },
      ],
    },

    // UNIT 2: Non-Contact Forces & Force Fields
    {
      id: 'g8-sci-u2',
      title: 'Unit 2: Gravitational, Electric & Magnetic Force Fields',
      standards: ['MS-PS2-3', 'MS-PS2-5', 'OH.8.PS.1'],
      lessons: [
        {
          id: 'g8-sci-u2-l1',
          unitId: 'g8-sci-u2',
          title: 'Lesson 1: Gravitational Fields & Planetary Mass',
          kind: 'lesson',
          partOf: 'Gravity & Distance',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/gravity/v/introduction-to-gravity',
          videoTitle: 'Khan Academy: Introduction to Gravity and Gravitational Fields',
          reading:
            'Gravity is a non-contact attractive force between masses. Field strength increases with greater mass and decreases rapidly as distance between objects expands.',
          principles: [P_G8_SCI_FIELDS],
        },
        {
          id: 'g8-sci-u2-l2',
          unitId: 'g8-sci-u2',
          title: 'Lesson 2: Electric Fields & Static Charges',
          kind: 'lesson',
          partOf: 'Electric Fields',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage/charge-electric-force/v/charge-and-electric-force-intro',
          videoTitle: 'Khan Academy: Electric Charges and Electric Force Fields',
          reading:
            'Objects with like electrical charges repel while opposite charges attract. Electric fields permeate the space around charged particles, exerting non-contact forces.',
          principles: [P_G8_SCI_FIELDS],
        },
        {
          id: 'g8-sci-u2-l3',
          unitId: 'g8-sci-u2',
          title: 'Lesson 3: Magnetic Fields & Electromagnetism',
          kind: 'lesson',
          partOf: 'Magnetic Fields',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic-fields/v/introduction-to-magnetism',
          videoTitle: 'Khan Academy: Magnetic Fields and Electromagnets',
          reading:
            'Magnetic field lines exit the north pole and enter the south pole of magnets. Running electric current through a wire coil creates an adjustable electromagnet.',
          principles: [P_G8_SCI_FIELDS],
        },
        {
          id: 'g8-sci-u2-l4',
          unitId: 'g8-sci-u2',
          title: 'Lesson 4: Unit 2 Checkpoint Review: Force Fields',
          kind: 'lesson_review',
          partOf: 'Fields Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/v/force-fields-review',
          videoTitle: 'Khan Academy: Non-Contact Forces Review',
          reading:
            'Synthesize field interactions: inverse distance relationships, charge attraction/repulsion, and electromagnetic strength factors.',
          principles: [P_G8_SCI_FIELDS],
        },
      ],
    },

    // UNIT 3: Earth’s Interior Layers & Seismic Waves
    {
      id: 'g8-sci-u3',
      title: 'Unit 3: Earth’s Interior Layers & Seismic Waves',
      standards: ['OH.8.ESS.1'],
      lessons: [
        {
          id: 'g8-sci-u3-l1',
          unitId: 'g8-sci-u3',
          title: 'Lesson 1: Earth’s Layered Structure: Crust, Mantle, Cores',
          kind: 'lesson',
          partOf: 'Earth Interior Layers',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/plate-techtonics/v/structure-of-the-earth',
          videoTitle: 'Khan Academy: Structure of the Earth',
          reading:
            'Earth is organized into distinct density layers: thin rocky crust, semi-solid churning mantle, molten iron-nickel outer core, and dense solid iron inner core.',
          principles: [P_G8_SCI_EARTH_LAYERS],
        },
        {
          id: 'g8-sci-u3-l2',
          unitId: 'g8-sci-u3',
          title: 'Lesson 2: Mantle Convection & Thermal Dynamics',
          kind: 'lesson',
          partOf: 'Mantle Convection',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/plate-techtonics/v/plate-tectonics-convection-in-the-mantle',
          videoTitle: 'Khan Academy: Thermal Convection in Earth’s Mantle',
          reading:
            'Deep radioactive decay heats the lower mantle. Heated ductile rock becomes less dense, slowly buoying toward the crust and driving lithospheric plate movement.',
          principles: [P_G8_SCI_EARTH_LAYERS],
        },
        {
          id: 'g8-sci-u3-l3',
          unitId: 'g8-sci-u3',
          title: 'Lesson 3: Seismic Waves: P-Waves, S-Waves & Core Shadow Zones',
          kind: 'lesson',
          partOf: 'Seismic Wave Probing',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/seismic-waves/v/seismic-waves',
          videoTitle: 'Khan Academy: Seismic Waves and Earth’s Interior',
          reading:
            'Primary compressional waves (P-waves) travel through both solids and liquids. Secondary shear waves (S-waves) cannot travel through liquids, revealing Earth’s liquid outer core.',
          principles: [P_G8_SCI_EARTH_LAYERS],
        },
        {
          id: 'g8-sci-u3-l4',
          unitId: 'g8-sci-u3',
          title: 'Lesson 4: Unit 3 Checkpoint Review: Earth’s Interior',
          kind: 'lesson_review',
          partOf: 'Earth Interior Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/v/earth-layers-review',
          videoTitle: 'Khan Academy: Earth Layers Review',
          reading:
            'Review Earth’s density stratification, lithosphere/asthenosphere mechanics, seismic wave refraction, and magnetosphere generation.',
          principles: [P_G8_SCI_EARTH_LAYERS],
        },
      ],
    },

    // UNIT 4: Plate Tectonics & Seismic Activity (Ohio Extension)
    {
      id: 'g8-sci-u4',
      title: 'Unit 4: Plate Tectonics & Seismic Activity',
      standards: ['OH.8.ESS.2', 'OH.8.ESS.3'],
      isOhioExtension: true,
      lessons: [
        {
          id: 'g8-sci-u4-l1',
          unitId: 'g8-sci-u4',
          title: 'Lesson 1: Divergent Boundaries & Seafloor Spreading',
          kind: 'lesson',
          partOf: 'Divergent Boundaries',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/plate-techtonics/v/seafloor-spreading-and-magnetic-striping',
          videoTitle: 'Khan Academy: Seafloor Spreading & Magnetic Striping',
          reading:
            'At divergent boundaries along mid-ocean ridges, tectonic plates pull apart. Upwelling basalt magma solidifies, recording geomagnetic reversals in expanding crust.',
          principles: [P_G8_SCI_TECTONICS],
        },
        {
          id: 'g8-sci-u4-l2',
          unitId: 'g8-sci-u4',
          title: 'Lesson 2: Convergent Boundaries, Subduction & Mountains',
          kind: 'lesson',
          partOf: 'Convergent Boundaries',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/plate-techtonics/v/convergent-plate-boundaries',
          videoTitle: 'Khan Academy: Convergent Plate Boundaries and Subduction',
          reading:
            'Dense oceanic slabs subduct beneath lighter continental plates, carving deep trenches and fueling volcanic arcs. Colliding continental plates crumple into mountain belts.',
          principles: [P_G8_SCI_TECTONICS],
        },
        {
          id: 'g8-sci-u4-l3',
          unitId: 'g8-sci-u4',
          title: 'Lesson 3: Transform Faults, Seismic Hazards & Ohio Geology',
          kind: 'lesson',
          partOf: 'Transform Faults & Ohio Rock Record',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/plate-techtonics/v/transform-boundaries-and-earthquakes',
          videoTitle: 'Khan Academy: Transform Boundaries and Seismic Hazards',
          reading:
            'Plates slide past each other along transform faults, accumulating strain until brittle slip releases seismic energy. Ohio’s sedimentary bedrock preserves ancient Paleozoic marine fossils.',
          principles: [P_G8_SCI_TECTONICS],
        },
        {
          id: 'g8-sci-u4-l4',
          unitId: 'g8-sci-u4',
          title: 'Lesson 4: Unit 4 Checkpoint Review: Plate Tectonics',
          kind: 'lesson_review',
          partOf: 'Tectonics Review',
          isOhioExtension: true,
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/science/cosmology-and-astronomy/earth-history-topic/v/plate-tectonics-review',
          videoTitle: 'Khan Academy: Plate Tectonics and Geology Review',
          reading:
            'Review boundary classification, continental drift evidence (Pangaea), relative fossil dating via superposition, and regional seismic fault networks.',
          principles: [P_G8_SCI_TECTONICS],
        },
      ],
    },

    // UNIT 5: Genetics, Speciation & Natural Selection
    {
      id: 'g8-sci-u5',
      title: 'Unit 5: Genetics, Speciation & Natural Selection',
      standards: ['MS-LS3-2', 'OH.8.LS.1', 'OH.8.LS.3'],
      lessons: [
        {
          id: 'g8-sci-u5-l1',
          unitId: 'g8-sci-u5',
          title: 'Lesson 1: Asexual vs. Sexual Reproduction & Meiosis',
          kind: 'lesson',
          partOf: 'Cell Division & Reproduction',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/high-school-biology/hs-reproduction-and-cell-division/hs-meiosis/v/meiosis',
          videoTitle: 'Khan Academy: Meiosis and Genetic Variation',
          reading:
            'Asexual reproduction yields genetically identical clones through mitosis. Sexual reproduction produces haploid gametes through meiosis, combining alleles to create genetic variation.',
          principles: [P_G8_SCI_GENETICS],
        },
        {
          id: 'g8-sci-u5-l2',
          unitId: 'g8-sci-u5',
          title: 'Lesson 2: Mendelian Genetics: Dominant & Recessive Alleles',
          kind: 'lesson',
          partOf: 'Mendelian Genetics',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/high-school-biology/hs-classical-genetics/hs-introduction-to-heredity/v/alleles-and-genes',
          videoTitle: 'Khan Academy: Alleles, Genes and Dominance',
          reading:
            'Genes exist in alternative forms called alleles. A dominant allele expresses its phenotype even when heterozygous (Tt), while a recessive trait requires two homozygous alleles (tt).',
          principles: [P_G8_SCI_GENETICS],
        },
        {
          id: 'g8-sci-u5-l3',
          unitId: 'g8-sci-u5',
          title: 'Lesson 3: Punnett Squares & Genotypic Probabilities',
          kind: 'lesson',
          partOf: 'Punnett Squares',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/high-school-biology/hs-classical-genetics/hs-introduction-to-heredity/v/punnett-squares',
          videoTitle: 'Khan Academy: Punnett Squares and Monohybrid Crosses',
          reading:
            'Punnett squares map parental gamete combinations to calculate offspring genotype and phenotype probabilities. A heterozygous cross (Tt × Tt) produces a 3:1 dominant phenotype ratio.',
          principles: [P_G8_SCI_GENETICS],
        },
        {
          id: 'g8-sci-u5-l4',
          unitId: 'g8-sci-u5',
          title: 'Lesson 4: Natural Selection & Environmental Adaptation',
          kind: 'lesson',
          partOf: 'Natural Selection',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/science/high-school-biology/hs-evolution/hs-evolution-and-natural-selection/v/natural-selection-and-the-owl-butterfly',
          videoTitle: 'Khan Academy: Natural Selection and Adaptation',
          reading:
            'In changing environments, individuals with advantageous heritable traits experience higher survival and reproductive success, shifting population allele frequencies over generations.',
          principles: [P_G8_SCI_GENETICS],
        },
        {
          id: 'g8-sci-u5-l5',
          unitId: 'g8-sci-u5',
          title: 'Lesson 5: Unit 5 Checkpoint Review: Genetics & Evolution',
          kind: 'lesson_review',
          partOf: 'Genetics Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/science/high-school-biology/hs-evolution/v/evolution-and-genetics-review',
          videoTitle: 'Khan Academy: Heredity and Natural Selection Review',
          reading:
            'Synthesize genetic mechanisms: meiosis chromosome distribution, monohybrid cross prediction, and selective pressures shaping biodiversity.',
          principles: [P_G8_SCI_GENETICS],
        },
      ],
    },

    // UNIT 6: Explore Science Through Interactive Simulations
    {
      id: 'g8-sci-u6',
      title: 'Unit 6: Explore Science Through Interactive Simulations',
      kind: 'explore',
      standards: ['MS-PS.Explore', 'MS-ESS.Explore', 'MS-LS.Explore'],
      lessons: [],
      exploreItems: [
        {
          id: 'g8-sci-exp-forces-motion',
          title: 'PhET Forces and Motion: Net Force & Acceleration Lab',
          type: 'simulation',
          description:
            'Tug of war and crate pushing simulation to test balanced vs. unbalanced forces, friction coefficients, and acceleration.',
          url: 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'What happens to the speed of the cart once applied pulling forces exactly balance friction?',
        },
        {
          id: 'g8-sci-exp-gravity-orbits',
          title: 'PhET Gravity and Orbits: Planetary Field Dynamics',
          type: 'simulation',
          description:
            'Adjust the mass of the Sun, Earth, and space station to visualize gravitational field vectors and orbital trajectories.',
          url: 'https://phet.colorado.edu/en/simulations/gravity-and-orbits',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'What happens to Earth’s orbit if the Sun’s mass doubles? If distance doubles?',
        },
        {
          id: 'g8-sci-exp-plate-tectonics',
          title: 'PhET Plate Tectonics: Crust Density & Subduction',
          type: 'simulation',
          description:
            'Adjust lithosphere temperature, density, and plate thickness to observe convergent subduction, mountain folding, and trench formation.',
          url: 'https://phet.colorado.edu/en/simulations/plate-tectonics',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'Why does older oceanic crust subduct more readily than newly cooled oceanic crust?',
        },
        {
          id: 'g8-sci-exp-punnett-lab',
          title: 'Coin-Toss Mendelian Heredity Simulation Lab',
          type: 'hands_on',
          description:
            'Toss two coins 50 times (Heads = dominant allele T, Tails = recessive allele t) to model meiosis, gamete union, and observe 3:1 phenotypic ratios.',
          estimatedMinutes: 25,
          requiresParentPin: false,
          materials: ['Two coins (pennies or quarters)', 'Data table', 'Pencil'],
          reflectionPrompt: 'How closely did your 50 simulated coin tosses match the theoretical 25% tt Punnett expectation?',
        },
        {
          id: 'g8-sci-exp-usgs-faults',
          title: 'USGS Real-Time Earthquake & Plate Boundary Map',
          type: 'virtual_tour',
          description:
            'Explore real-time seismic event feeds across the Pacific Ring of Fire and North American transform fault lines.',
          url: 'https://earthquake.usgs.gov/earthquakes/map/',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'What geographic patterns do you notice when comparing global earthquake clusters against plate boundary lines?',
        },
      ],
    },

    // UNIT 7: Teacher Resources & Standards Alignment
    {
      id: 'g8-sci-u7',
      title: 'Unit 7: Teacher Resources & Standards Alignment',
      kind: 'teacher_resources',
      standards: ['OH.8.Science', 'NGSS.MS'],
      lessons: [],
      resources: [
        {
          id: 'g8-sci-res-pacing',
          title: 'Grade 8 Science 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Full-year curriculum sequence coordinating physical forces, non-contact fields, Earth interior dynamics, tectonics, and genetics.',
          body: `## Grade 8 Science Pacing Guide (36 Weeks)

- **Weeks 1–6**: Unit 1 — Forces, Net Force & Newton’s Laws (MS-PS2-1, MS-PS2-2, OH.8.PS.2)
- **Weeks 7–12**: Unit 2 — Gravitational, Electric & Magnetic Force Fields (OH.8.PS.1)
- **Week 13**: Quarter 1 Physical Science Assessment
- **Weeks 14–19**: Unit 3 — Earth’s Interior Layers & Seismic Waves (OH.8.ESS.1)
- **Weeks 20–25**: Unit 4 — Plate Tectonics & Seismic Activity (OH.8.ESS.2, OH.8.ESS.3)
- **Week 26**: Quarter 2 & 3 Earth and Space Science Checkpoint
- **Weeks 27–33**: Unit 5 — Genetics, Speciation & Natural Selection (MS-LS3-2, OH.8.LS.1)
- **Weeks 34–36**: Unit 6 — PhET Capstone Simulations & Scientific Inquiry Defense`,
        },
        {
          id: 'g8-sci-res-standards',
          title: 'Grade 8 Ohio & Next Generation Science Standards Crosswalk',
          kind: 'standards_map',
          description:
            'Standards alignment crosswalk connecting Home-School-Lite units to Ohio Grade 8 Science expectations.',
          body: `| Unit | Ohio Standard | Core Scientific Concept |
|---|---|---|
| Unit 1 | OH.8.PS.2 | Forces, friction, net force vectors, Newton’s laws of motion |
| Unit 2 | OH.8.PS.1 | Non-contact fields, inverse-square gravity, electromagnetism |
| Unit 3 | OH.8.ESS.1 | Earth layers, mantle convection currents, seismic body waves |
| Unit 4 | OH.8.ESS.2, 3 | Plate boundaries, seafloor spreading, relative dating, Ohio geology |
| Unit 5 | OH.8.LS.1, 3 | Meiosis genetic variation, Punnett square inheritance, natural selection |`,
        },
        {
          id: 'g8-sci-res-safety',
          title: 'Middle School Physical & Earth Science Lab Safety Protocols',
          kind: 'printable',
          description:
            'Laboratory protocols covering physics projectile safety, electrical circuit setup, and geological specimen handling.',
          body: `## Middle School Laboratory Safety Rules

1. **Eye Protection**: Wear impact-resistant goggles during force and motion kinetic trials.
2. **Electrical Safety**: Disconnect batteries promptly after testing electromagnets to avoid wire overheating.
3. **Specimen Care**: Handle rock specimens carefully; wash hands thoroughly after studying mineral samples.
4. **Clean Workspaces**: Maintain clear floor aisles free of rolling weights, balls, or pull cords.
5. **Supervisor Oversight**: Never launch projectile or spring mechanisms without adult supervisor approval.`,
        },
      ],
    },
  ],
}
