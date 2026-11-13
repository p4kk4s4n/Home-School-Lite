import { Unit } from '../../../types'
import {
  SCI_CELLS_BANK,
  SCI_ECO_ENERGY_BANK,
  SCI_ECO_INTERACTION_BANK,
  SCI_ENERGY_BANK,
  SCI_EVOLUTION_BANK,
  SCI_GENETICS_BANK,
  SCI_REPRO_BANK,
  SCI_SELECTION_BANK,
} from './banks'

export const G6_SCIENCE_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: CELLS AND ORGANISMS (6 skills + 2 Quizzes + 1 Exam = 9 steps)
  // =========================================================================
  {
    id: 'g6-sci-u1',
    title: 'Unit 1: Cells and Organisms',
    standards: ['MS-LS1-1', 'MS-LS1-2', 'MS-LS1-3'],
    lessons: [
      {
        id: 'g6-sci-u1-l1',
        unitId: 'g6-sci-u1',
        title: 'Intro to Cells & Cell Theory',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Introduction to the Cell',
        reading: 'All living organisms consist of one or more microscopic cells. Cells are the basic structural and functional units of life, and all new cells arise from existing cells dividing.',
        principles: [
          {
            id: 'p-g6-sci-cell-theory',
            title: 'Cell Theory and Microscopic Life',
            standard: 'MS-LS1-1',
            summary: 'Conduct an investigation to provide evidence that living things are made of cells.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l2',
        unitId: 'g6-sci-u1',
        title: 'Plant vs. Animal Cell Structures',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:cell-parts-and-functions/v/comparing-animal-and-plant-cells',
        videoTitle: 'Plant Cells vs Animal Cells',
        reading: 'Plant cells have rigid cellulose walls, large central vacuoles, and chloroplasts for photosynthesis. Animal cells have flexible membranes and lack chloroplasts and cell walls.',
        activity: {
          id: 'act-plants-wilt',
          title: 'Why do plants wilt when they don’t get enough water?',
          type: 'experiment',
          description: 'Investigate osmosis and vacuole turgor pressure by placing crisp celery stalks into fresh water with food coloring versus concentrated salt water.',
          estimatedMinutes: 25,
          materials: ['2 fresh celery stalks with leaves', '2 clear cups', 'Water', 'Table salt', 'Food coloring (red or blue)'],
          steps: [
            'Fill cup 1 with tap water and 10 drops of food coloring.',
            'Fill cup 2 with water, 3 tablespoons of dissolved salt, and food coloring.',
            'Place a freshly cut celery stalk upright into each cup.',
            'Observe after 2 hours and 24 hours: note crispness, leaf droop, and dye elevation.',
            'Slice the stalk crosswise to observe colored xylem tubes.',
          ],
          reflectionPrompt: 'How does high turgor pressure inside plant cell vacuoles keep non-woody plant stems standing upright against gravity?',
        },
        principles: [
          {
            id: 'p-g6-sci-cell-compare',
            title: 'Plant and Animal Cell Organelles',
            standard: 'MS-LS1-2',
            summary: 'Develop and use a model to describe the function of a cell as a whole and ways parts of cells contribute to the function.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l3',
        unitId: 'g6-sci-u1',
        title: 'Cell Membrane & Cellular Transport',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Cell Membrane Overview',
        reading: 'The cell membrane is selectively permeable. It allows essential water, oxygen, and nutrients into the cytoplasm while keeping waste products out and maintaining cellular balance.',
        principles: [
          {
            id: 'p-g6-sci-membrane',
            title: 'Selective Permeability and Transport',
            standard: 'MS-LS1-2',
            summary: 'Describe how the cell membrane regulates internal cell conditions.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l4',
        unitId: 'g6-sci-u1',
        title: 'Mid-Unit Quiz 1: Cell Organelles',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Cell Organelle Check',
        reading: 'Review check evaluating knowledge of mitochondria, chloroplasts, nucleus, cell walls, and selective permeability.',
        principles: [
          {
            id: 'p-g6-sci-u1-quiz1',
            title: 'Cell Organelle Review',
            standard: 'MS-LS1-2',
            summary: 'Review of plant and animal cell components and functions.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l5',
        unitId: 'g6-sci-u1',
        title: 'Unicellular vs. Multicellular Organisms',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Unicellular vs Multicellular Organisms',
        reading: 'Unicellular organisms like bacteria and amoebas perform all life processes within a single cell. Multicellular organisms consist of specialized cells that cooperate.',
        principles: [
          {
            id: 'p-g6-sci-unicellular',
            title: 'Single-Celled vs Multicellular Life',
            standard: 'MS-LS1-1',
            summary: 'Contrast single-celled organisms with specialized multicellular organisms.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l6',
        unitId: 'g6-sci-u1',
        title: 'Levels of Cellular Organization',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Levels of Organization',
        reading: 'Multicellular bodies are arranged hierarchically: specialized cells form tissues, different tissues form organs, organs form organ systems, and organ systems form the complete organism.',
        principles: [
          {
            id: 'p-g6-sci-org-levels',
            title: 'Hierarchy of Life',
            standard: 'MS-LS1-3',
            summary: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of cells.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l7',
        unitId: 'g6-sci-u1',
        title: 'Interacting Body Systems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:organization-in-the-human-body/v/ms-organization-in-the-human-body',
        videoTitle: 'Human Body Systems Working Together',
        reading: 'Organ systems never work alone. For example, the digestive system breaks down nutrients, the respiratory system absorbs oxygen, and the circulatory system transports both to working muscle cells.',
        principles: [
          {
            id: 'p-g6-sci-systems-interact',
            title: 'Cooperating Organ Systems',
            standard: 'MS-LS1-3',
            summary: 'Analyze how body systems interact to maintain homeostasis.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l8',
        unitId: 'g6-sci-u1',
        title: 'Mid-Unit Quiz 2: Organization & Systems',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Body Systems Review',
        reading: 'Review check covering tissues, organs, organ systems, and how systems cooperate to sustain life.',
        principles: [
          {
            id: 'p-g6-sci-u1-quiz2',
            title: 'Organization Check',
            standard: 'MS-LS1-3',
            summary: 'Review of multicellular organization from cells to organ systems.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u1-l9',
        unitId: 'g6-sci-u1',
        title: 'Unit 1 Exam: Cells and Organisms',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
        videoTitle: 'Cells and Organisms Exam',
        reading: 'Comprehensive unit exam testing cell theory, organelles, cell transport, and levels of multicellular organization.',
        principles: [
          {
            id: 'p-g6-sci-u1-exam',
            title: 'Cells and Organisms Mastery Exam',
            standard: 'MS-LS1-2',
            summary: 'Demonstrate mastery of cell structures, functions, and body system interactions.',
            bank: SCI_CELLS_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: ORGANISM GROWTH AND REPRODUCTION (4 skills + 1 Quiz + 1 Exam = 6 steps)
  // =========================================================================
  {
    id: 'g6-sci-u2',
    title: 'Unit 2: Organism Growth and Reproduction',
    standards: ['MS-LS1-4', 'MS-LS1-5'],
    lessons: [
      {
        id: 'g6-sci-u2-l1',
        unitId: 'g6-sci-u2',
        title: 'Plant Reproduction & Seed Dispersal',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction',
        videoTitle: 'Plant Reproduction and Seed Dispersal',
        reading: 'Flowering plants rely on specialized structures like flowers to attract pollinators, and fruits, burs, or wind-borne wings to disperse seeds away from the parent plant.',
        principles: [
          {
            id: 'p-g6-sci-plant-repro',
            title: 'Plant Reproductive Structures',
            standard: 'MS-LS1-4',
            summary: 'Use argument based on empirical evidence and scientific reasoning to support an explanation for how characteristic animal behaviors and specialized plant structures affect the probability of successful reproduction.',
            bank: SCI_REPRO_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u2-l2',
        unitId: 'g6-sci-u2',
        title: 'Animal Behaviors for Reproduction',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction',
        videoTitle: 'Animal Behaviors for Reproduction',
        reading: 'Animals engage in courtship behaviors (vocal calls, colorful displays, dancing) to attract mates, and parental care behaviors (nest building, guarding, feeding) to ensure offspring survive.',
        principles: [
          {
            id: 'p-g6-sci-animal-behav',
            title: 'Courtship and Parental Care',
            standard: 'MS-LS1-4',
            summary: 'Explain how animal behaviors increase reproductive success.',
            bank: SCI_REPRO_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u2-l3',
        unitId: 'g6-sci-u2',
        title: 'Environmental Factors on Growth',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction',
        videoTitle: 'Environmental Factors on Growth',
        reading: 'Environmental conditions such as sunlight availability, temperature, soil moisture, and nutrient levels strongly dictate whether organisms reach their full potential size.',
        principles: [
          {
            id: 'p-g6-sci-env-growth',
            title: 'Environmental Impacts on Growth',
            standard: 'MS-LS1-5',
            summary: 'Construct a scientific explanation based on evidence for how environmental factors influence the growth of organisms.',
            bank: SCI_REPRO_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u2-l4',
        unitId: 'g6-sci-u2',
        title: 'Genetic Factors on Organism Growth',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:organism-growth-and-the-environment/a/organism-growth-and-the-environment',
        videoTitle: 'Genetic Factors on Growth',
        reading: 'An organism’s inherited DNA sets the upper boundaries and structural patterns for growth, such as adult height potential, leaf shape, and fur thickness.',
        principles: [
          {
            id: 'p-g6-sci-gen-growth',
            title: 'Genetic Instructions for Growth',
            standard: 'MS-LS1-5',
            summary: 'Explain how genetic factors influence growth and development.',
            bank: SCI_REPRO_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u2-l5',
        unitId: 'g6-sci-u2',
        title: 'Mid-Unit Quiz: Growth & Reproduction',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction',
        videoTitle: 'Reproduction Check',
        reading: 'Review check testing flower anatomy, seed dispersal, animal courtship, and environmental vs. genetic growth influences.',
        principles: [
          {
            id: 'p-g6-sci-u2-quiz',
            title: 'Reproduction and Growth Review',
            standard: 'MS-LS1-4',
            summary: 'Review of plant and animal reproductive strategies and growth influences.',
            bank: SCI_REPRO_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u2-l6',
        unitId: 'g6-sci-u2',
        title: 'Unit 2 Exam: Organism Growth & Reproduction',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction',
        videoTitle: 'Growth and Reproduction Exam',
        reading: 'Comprehensive unit exam assessing reproductive adaptations, parental care, and environmental/genetic growth factors.',
        principles: [
          {
            id: 'p-g6-sci-u2-exam',
            title: 'Growth and Reproduction Mastery Exam',
            standard: 'MS-LS1-4',
            summary: 'Demonstrate mastery of reproductive behaviors, structures, and growth factors.',
            bank: SCI_REPRO_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: MATTER AND ENERGY IN ORGANISMS (4 skills + 1 Quiz + 1 Exam = 6 steps)
  // =========================================================================
  {
    id: 'g6-sci-u3',
    title: 'Unit 3: Matter and Energy in Organisms',
    standards: ['MS-LS1-6', 'MS-LS1-7'],
    lessons: [
      {
        id: 'g6-sci-u3-l1',
        unitId: 'g6-sci-u3',
        title: 'Photosynthesis: Harnessing Sunlight',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms',
        videoTitle: 'Introduction to Photosynthesis',
        reading: 'Photosynthesis takes place inside chloroplasts. Plants take in carbon dioxide and water, absorb sunlight using green chlorophyll, and produce glucose and oxygen.',
        principles: [
          {
            id: 'p-g6-sci-photo-chem',
            title: 'Photosynthetic Chemical Reaction',
            standard: 'MS-LS1-6',
            summary: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms.',
            bank: SCI_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u3-l2',
        unitId: 'g6-sci-u3',
        title: 'Cellular Respiration: Releasing Energy',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms/x0c5bb03129646fd6:food-and-energy-in-organisms/v/cellular-respiration-ms',
        videoTitle: 'Cellular Respiration Overview',
        reading: 'Inside mitochondria, oxygen combines with glucose to release energy stored in chemical bonds. This reaction produces ATP energy along with carbon dioxide and water.',
        activity: {
          id: 'act-respiration-fitness',
          title: 'How can measuring cellular respiration help us reach a fitness goal?',
          type: 'experiment',
          description: 'Measure breathing rate and pulse before, during, and after exercise to analyze how cellular respiration increases to meet working muscle ATP demands.',
          estimatedMinutes: 25,
          materials: ['Stopwatch or phone timer', 'Heart rate monitor or radial wrist pulse tracker'],
          steps: [
            'Sit quietly for 3 minutes. Record baseline resting pulse (beats per minute) and breathing rate (breaths per minute).',
            'Perform jumping jacks or high knees for 2 minutes.',
            'Immediately measure pulse and breathing rate.',
            'Record pulse recovery every 60 seconds until returning to baseline.',
            'Graph heart rate recovery curve over 5 minutes.',
          ],
          reflectionPrompt: 'Why do muscle cells require more oxygen and glucose during intense exercise, and how does cardiovascular training improve cellular respiration efficiency?',
        },
        principles: [
          {
            id: 'p-g6-sci-resp-chem',
            title: 'Cellular Respiration Reaction',
            standard: 'MS-LS1-7',
            summary: 'Develop a model to describe how food is rearranged through chemical reactions forming new molecules that support growth and release energy.',
            bank: SCI_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u3-l3',
        unitId: 'g6-sci-u3',
        title: 'Cycling of Oxygen and Carbon Dioxide',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms',
        videoTitle: 'Carbon and Oxygen Cycling',
        reading: 'Photosynthesis and cellular respiration form a linked atmospheric cycle. The oxygen produced by plants is used by animals, while the carbon dioxide exhaled by animals is taken in by plants.',
        principles: [
          {
            id: 'p-g6-sci-gas-cycle',
            title: 'Atmospheric Gas Cycling',
            standard: 'MS-LS1-6',
            summary: 'Describe the interdependent relationship between photosynthesis and cellular respiration.',
            bank: SCI_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u3-l4',
        unitId: 'g6-sci-u3',
        title: 'Food Molecules & Cellular Growth',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms',
        videoTitle: 'Rearranging Food Molecules',
        reading: 'Organisms do not just burn food for energy; they break down amino acids, fatty acids, and simple sugars to assemble new cell walls, proteins, and tissues for bodily growth.',
        principles: [
          {
            id: 'p-g6-sci-molecule-rearrange',
            title: 'Molecular Rearrangement for Growth',
            standard: 'MS-LS1-7',
            summary: 'Model how matter from food is rearranged into body tissue.',
            bank: SCI_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u3-l5',
        unitId: 'g6-sci-u3',
        title: 'Mid-Unit Quiz: Cellular Energy Cycles',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms',
        videoTitle: 'Energy Review',
        reading: 'Review check comparing the reactants and products of photosynthesis and aerobic cellular respiration.',
        principles: [
          {
            id: 'p-g6-sci-u3-quiz',
            title: 'Energy Cycles Review',
            standard: 'MS-LS1-6',
            summary: 'Review of photosynthesis, respiration, and molecular cycling.',
            bank: SCI_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u3-l6',
        unitId: 'g6-sci-u3',
        title: 'Unit 3 Exam: Matter & Energy in Organisms',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms',
        videoTitle: 'Matter and Energy Exam',
        reading: 'Comprehensive unit exam assessing understanding of photosynthesis, cellular respiration, ATP release, and biochemical cycling.',
        principles: [
          {
            id: 'p-g6-sci-u3-exam',
            title: 'Matter and Energy Mastery Exam',
            standard: 'MS-LS1-6',
            summary: 'Demonstrate mastery of biochemical energy transformations in living cells.',
            bank: SCI_ENERGY_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: INTERACTIONS IN ECOSYSTEMS (5 skills + 1 Quiz + 1 Exam = 7 steps)
  // =========================================================================
  {
    id: 'g6-sci-u4',
    title: 'Unit 4: Interactions in Ecosystems',
    standards: ['MS-LS2-1', 'MS-LS2-2'],
    lessons: [
      {
        id: 'g6-sci-u4-l1',
        unitId: 'g6-sci-u4',
        title: 'Biotic and Abiotic Factors',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems/x0c5bb03129646fd6:populations-communities-and-ecosystems/v/biotic-and-abiotic-factors',
        videoTitle: 'Biotic and Abiotic Factors',
        reading: 'An ecosystem combines all living organisms (biotic factors like trees, insects, and bacteria) with all nonliving parts of the physical environment (abiotic factors like sunlight, temperature, rocks, and water).',
        activity: {
          id: 'act-ecosystem-health',
          title: 'What evidence can scientists use to tell if an ecosystem is healthy?',
          type: 'hands_on',
          description: 'Conduct a mini biodiversity quadrat survey to sample plant and invertebrate species richness and analyze abiotic health indicators.',
          estimatedMinutes: 30,
          materials: ['1-meter string loop or hula hoop', 'Magnifying glass', 'Species observation tally sheet'],
          steps: [
            'Place your 1-meter string loop on a patch of outdoor grass, garden, or park soil.',
            'Carefully count each unique type of plant, insect, or fungus visible inside the boundary.',
            'Record abiotic factors: soil moisture, sunlight exposure, and temperature.',
            'Calculate a simple biodiversity ratio: number of unique species divided by total individuals.',
            'Compare a high-diversity lawn patch with a low-diversity gravel or paved border.',
          ],
          reflectionPrompt: 'Why is high species biodiversity a stronger indicator of ecosystem stability than simply having a large population of just one species?',
        },
        principles: [
          {
            id: 'p-g6-sci-biotic-abiotic',
            title: 'Ecosystem Components',
            standard: 'MS-LS2-1',
            summary: 'Analyze and interpret data to provide evidence for the effects of resource availability on organisms and populations of organisms in an ecosystem.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u4-l2',
        unitId: 'g6-sci-u4',
        title: 'Resource Availability & Populations',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems/x0c5bb03129646fd6:populations-communities-and-ecosystems/v/biotic-and-abiotic-factors',
        videoTitle: 'Carrying Capacity and Limiting Factors',
        reading: 'Limiting factors such as food, shelter, and water set an ecosystem’s carrying capacity. When resources decline, population birth rates drop and mortality rises.',
        activity: {
          id: 'act-limited-resources',
          title: 'How do limited resources impact populations that live near us?',
          type: 'project',
          description: 'Model how availability of food, water, and nesting space sets an ecosystem carrying capacity through an "Oh Deer!" population simulation.',
          estimatedMinutes: 25,
          materials: ['Coin or counter markers', 'Population graphing grid'],
          steps: [
            'Assign 10 starting deer and 10 habitat resources (food, water, shelter).',
            'Flip coins to model drought years (loss of 5 water units) versus lush rainy seasons.',
            'Track deer births when resources exceed population and deer deaths when population exceeds resources.',
            'Graph deer population over 15 simulated years to observe cyclical oscillation around carrying capacity.',
          ],
          reflectionPrompt: 'What happens to a population when its numbers overshoot its habitat’s carrying capacity?',
        },
        principles: [
          {
            id: 'p-g6-sci-carrying-cap',
            title: 'Limiting Factors and Carrying Capacity',
            standard: 'MS-LS2-1',
            summary: 'Explain how resource abundance directly determines maximum population sizes.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u4-l3',
        unitId: 'g6-sci-u4',
        title: 'Predation and Herbivory Dynamics',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems',
        videoTitle: 'Predator-Prey Dynamics',
        reading: 'Predation and herbivory describe feeding relationships where one organism consumes another. Predator and prey population levels fluctuate in linked cycles.',
        principles: [
          {
            id: 'p-g6-sci-predation',
            title: 'Predator-Prey Cycles',
            standard: 'MS-LS2-2',
            summary: 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u4-l4',
        unitId: 'g6-sci-u4',
        title: 'Symbiosis: Mutualism, Commensalism, Parasitism',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems',
        videoTitle: 'Symbiotic Relationships',
        reading: 'Symbiosis involves close, long-term species interactions: mutualism (+/+), commensalism (+/0), and parasitism (+/-).',
        principles: [
          {
            id: 'p-g6-sci-symbiosis',
            title: 'Patterns of Symbiosis',
            standard: 'MS-LS2-2',
            summary: 'Differentiate between mutualistic, commensal, and parasitic ecological relationships.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u4-l5',
        unitId: 'g6-sci-u4',
        title: 'Intraspecific & Interspecific Competition',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems',
        videoTitle: 'Competition in Ecosystems',
        reading: 'Competition occurs when organisms attempt to use the same limited resource, such as sunlight in forest canopies or nesting territory on rocky cliffs.',
        principles: [
          {
            id: 'p-g6-sci-competition',
            title: 'Resource Competition',
            standard: 'MS-LS2-2',
            summary: 'Describe competitive pressures within and between species.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u4-l6',
        unitId: 'g6-sci-u4',
        title: 'Mid-Unit Quiz: Ecological Interactions',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems',
        videoTitle: 'Interactions Review',
        reading: 'Review check evaluating abiotic vs. biotic factors, carrying capacity, predation, and the three forms of symbiosis.',
        principles: [
          {
            id: 'p-g6-sci-u4-quiz',
            title: 'Ecological Interactions Review',
            standard: 'MS-LS2-2',
            summary: 'Review of symbiotic relationships and resource competition.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u4-l7',
        unitId: 'g6-sci-u4',
        title: 'Unit 4 Exam: Interactions in Ecosystems',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems',
        videoTitle: 'Interactions Exam',
        reading: 'Comprehensive unit exam assessing ecological limiting factors, population curves, symbiotic partnerships, and niche competition.',
        principles: [
          {
            id: 'p-g6-sci-u4-exam',
            title: 'Interactions in Ecosystems Exam',
            standard: 'MS-LS2-1',
            summary: 'Demonstrate mastery of biotic relationships, carrying capacity, and symbiosis.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: MATTER AND ENERGY IN ECOSYSTEMS (2 skills + 1 Quiz + 1 Exam = 4 steps)
  // =========================================================================
  {
    id: 'g6-sci-u5',
    title: 'Unit 5: Matter and Energy in Ecosystems',
    standards: ['MS-LS2-3'],
    lessons: [
      {
        id: 'g6-sci-u5-l1',
        unitId: 'g6-sci-u5',
        title: 'Energy Pyramids & The 10% Rule',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-ecosystems/x0c5bb03129646fd6:matter-and-energy-in-foodwebs/v/matter-and-energy-in-food-webs-ms',
        videoTitle: 'Energy Pyramids and Trophic Levels',
        reading: 'Energy flows one-way through ecosystems: from the sun to producers, then primary, secondary, and apex consumers. Only about 10% of energy transfers up each trophic level.',
        activity: {
          id: 'act-food-web-disturbed',
          title: 'What happens when a food web is disturbed?',
          type: 'hands_on',
          description: 'Simulate a trophic cascade and food web interconnectivity using a yarn web or tower blocks to explore how removing an apex predator impacts producers and herbivores.',
          estimatedMinutes: 25,
          materials: ['Ball of yarn or wooden tower blocks', 'Organism role cards (sun, grass, rabbit, fox, hawk)'],
          steps: [
            'Assign family or class members different roles in a forest food web.',
            'Pass yarn from producers to herbivores to carnivores, forming a tight interconnected web.',
            'Simulate a disease or overhunting that eliminates the apex predator (hawk).',
            'Tug on the hawk’s yarn: notice every connected species feels the tension or slack.',
            'Explain how herbivore overpopulation leads to overgrazing and loss of producer vegetation.',
          ],
          reflectionPrompt: 'How does the reintroduction of wolves to Yellowstone National Park demonstrate that top predators protect riverbanks and plant biodiversity?',
        },
        principles: [
          {
            id: 'p-g6-sci-trophic-energy',
            title: 'Trophic Levels and 10% Rule',
            standard: 'MS-LS2-3',
            summary: 'Develop a model to describe the cycling of matter and flow of energy among living and nonliving parts of an ecosystem.',
            bank: SCI_ECO_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u5-l2',
        unitId: 'g6-sci-u5',
        title: 'The Carbon Cycle & Decomposers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-ecosystems/x0c5bb03129646fd6:matter-and-energy-in-foodwebs/v/matter-and-energy-in-food-webs-ms',
        videoTitle: 'Biogeochemical Cycles',
        reading: 'Unlike energy which dissipates as heat, chemical matter is recycled continuously. Decomposers break down dead tissues, releasing carbon, nitrogen, and phosphorus back into the soil and air.',
        principles: [
          {
            id: 'p-g6-sci-matter-recycle',
            title: 'Decomposition and Biogeochemical Cycling',
            standard: 'MS-LS2-3',
            summary: 'Explain how matter is conserved and recycled through ecosystems.',
            bank: SCI_ECO_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u5-l3',
        unitId: 'g6-sci-u5',
        title: 'Mid-Unit Quiz: Flow of Energy & Matter',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-ecosystems/x0c5bb03129646fd6:matter-and-energy-in-foodwebs/v/matter-and-energy-in-food-webs-ms',
        videoTitle: 'Energy Flow Review',
        reading: 'Review check contrasting open energy flow with closed chemical matter cycling and trophic pyramid efficiency.',
        principles: [
          {
            id: 'p-g6-sci-u5-quiz',
            title: 'Energy and Matter Flow Review',
            standard: 'MS-LS2-3',
            summary: 'Review of trophic levels, energy loss, and nutrient recycling.',
            bank: SCI_ECO_ENERGY_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u5-l4',
        unitId: 'g6-sci-u5',
        title: 'Unit 5 Exam: Matter & Energy in Ecosystems',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-ecosystems/x0c5bb03129646fd6:matter-and-energy-in-foodwebs/v/matter-and-energy-in-food-webs-ms',
        videoTitle: 'Matter and Energy Exam',
        reading: 'Comprehensive unit exam assessing food webs, ecological pyramids, heat dissipation, and decomposer nutrient recycling.',
        principles: [
          {
            id: 'p-g6-sci-u5-exam',
            title: 'Ecosystem Energy and Matter Exam',
            standard: 'MS-LS2-3',
            summary: 'Demonstrate mastery of trophic energy pyramids and carbon nutrient cycling.',
            bank: SCI_ECO_ENERGY_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: ECOSYSTEMS AND BIODIVERSITY (6 skills + 2 Quizzes + 1 Exam = 9 steps)
  // =========================================================================
  {
    id: 'g6-sci-u6',
    title: 'Unit 6: Ecosystems and Biodiversity',
    standards: ['MS-LS2-4', 'MS-LS2-5'],
    lessons: [
      {
        id: 'g6-sci-u6-l1',
        unitId: 'g6-sci-u6',
        title: 'Components of Biodiversity',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'What is Biodiversity?',
        reading: 'Biodiversity measures variety across three levels: genetic diversity within a population, species diversity within an ecosystem, and ecosystem diversity across landscapes.',
        principles: [
          {
            id: 'p-g6-sci-biodiv-concept',
            title: 'Three Levels of Biodiversity',
            standard: 'MS-LS2-5',
            summary: 'Evaluate competing design solutions for maintaining biodiversity and ecosystem services.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l2',
        unitId: 'g6-sci-u6',
        title: 'Essential Ecosystem Services',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Ecosystem Services to Humans',
        reading: 'Healthy ecosystems provide services humans depend on: clean drinking water from wetlands, insect crop pollination, coastal storm surge protection, and climate regulation.',
        principles: [
          {
            id: 'p-g6-sci-services',
            title: 'Valuing Ecosystem Services',
            standard: 'MS-LS2-5',
            summary: 'Describe how biodiversity sustains life-supporting services for human civilization.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l3',
        unitId: 'g6-sci-u6',
        title: 'Natural Ecosystem Disruptions',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Ecological Disruptions and Succession',
        reading: 'Ecosystems face natural disturbances such as wildfires, floods, volcanic eruptions, and droughts. Diverse ecosystems show greater resilience and recover more quickly.',
        principles: [
          {
            id: 'p-g6-sci-disruptions',
            title: 'Disturbances and Ecosystem Resilience',
            standard: 'MS-LS2-4',
            summary: 'Construct an argument supported by empirical evidence that changes to physical or biological components of an ecosystem affect populations.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l4',
        unitId: 'g6-sci-u6',
        title: 'Mid-Unit Quiz 1: Diversity & Disturbances',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Biodiversity Check 1',
        reading: 'Review check on species diversity, ecosystem services, and natural disturbance recovery.',
        principles: [
          {
            id: 'p-g6-sci-u6-quiz1',
            title: 'Diversity and Resilience Check',
            standard: 'MS-LS2-4',
            summary: 'Review of ecosystem services and natural disturbances.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l5',
        unitId: 'g6-sci-u6',
        title: 'Human Impacts: Habitat Loss & Invasives',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Habitat Loss and Invasive Species',
        reading: 'Human activities, including deforestation, road building, pollution, and the accidental introduction of aggressive non-native species, threaten native biodiversity.',
        principles: [
          {
            id: 'p-g6-sci-human-impact',
            title: 'Human Threats to Ecosystems',
            standard: 'MS-LS2-4',
            summary: 'Analyze how habitat destruction and invasive organisms destabilize food webs.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l6',
        unitId: 'g6-sci-u6',
        title: 'Engineering Conservation Solutions',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Wildlife Corridors and Conservation Design',
        reading: 'Conservation engineers design solutions like wildlife overpass bridges, protected marine reserves, and wetland restoration projects to preserve biodiversity.',
        principles: [
          {
            id: 'p-g6-sci-conservation-design',
            title: 'Designing Ecological Solutions',
            standard: 'MS-LS2-5',
            summary: 'Evaluate criteria and constraints of competing conservation engineering designs.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l7',
        unitId: 'g6-sci-u6',
        title: 'Evaluating Conservation Tradeoffs',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Evaluating Conservation Tradeoffs',
        reading: 'Every conservation project balances ecological benefits against economic costs, land use, and local community needs to achieve long-term sustainability.',
        principles: [
          {
            id: 'p-g6-sci-tradeoffs',
            title: 'Conservation Evaluation Criteria',
            standard: 'MS-LS2-5',
            summary: 'Compare scientific criteria and human constraints in conservation management.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l8',
        unitId: 'g6-sci-u6',
        title: 'Mid-Unit Quiz 2: Conservation & Solutions',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Conservation Check 2',
        reading: 'Review check on invasive species, wildlife corridors, and conservation design constraints.',
        principles: [
          {
            id: 'p-g6-sci-u6-quiz2',
            title: 'Conservation Review',
            standard: 'MS-LS2-5',
            summary: 'Review of human impacts and ecological design solutions.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u6-l9',
        unitId: 'g6-sci-u6',
        title: 'Unit 6 Exam: Ecosystems & Biodiversity',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
        videoTitle: 'Biodiversity Exam',
        reading: 'Comprehensive unit exam assessing species richness, ecosystem services, disturbance resilience, invasive species, and conservation design.',
        principles: [
          {
            id: 'p-g6-sci-u6-exam',
            title: 'Ecosystems and Biodiversity Exam',
            standard: 'MS-LS2-5',
            summary: 'Demonstrate mastery of biodiversity value and ecological engineering solutions.',
            bank: SCI_ECO_INTERACTION_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: INHERITANCE AND VARIATION (6 skills + 2 Quizzes + 1 Exam = 9 steps)
  // =========================================================================
  {
    id: 'g6-sci-u7',
    title: 'Unit 7: Inheritance and Variation',
    standards: ['MS-LS3-1', 'MS-LS3-2'],
    lessons: [
      {
        id: 'g6-sci-u7-l1',
        unitId: 'g6-sci-u7',
        title: 'DNA, Chromosomes & Genes',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation/x0c5bb03129646fd6:chromosomes/v/chromosomes-and-genes',
        videoTitle: 'DNA, Chromosomes, and Genes',
        reading: 'Genes are specific sections of long DNA chromosomes that carry the biochemical instructions for manufacturing proteins and shaping an organism’s physical traits.',
        principles: [
          {
            id: 'p-g6-sci-dna-genes',
            title: 'DNA and Chromosomal Structure',
            standard: 'MS-LS3-1',
            summary: 'Develop and use a model to describe why structural changes to genes (mutations) located on chromosomes may affect proteins and result in harmful, beneficial, or neutral effects to the structure and function of the organism.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l2',
        unitId: 'g6-sci-u7',
        title: 'Asexual vs. Sexual Reproduction & Variation',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation/x0c5bb03129646fd6:reproduction-and-genetic-variation/v/sexual-reproduction-and-genetic-variation',
        videoTitle: 'Asexual vs Sexual Reproduction',
        reading: 'Asexual reproduction copies DNA from one parent producing genetically identical offspring. Sexual reproduction combines two sets of chromosomes, creating genetic variation.',
        principles: [
          {
            id: 'p-g6-sci-repro-variation',
            title: 'Sources of Genetic Diversity',
            standard: 'MS-LS3-2',
            summary: 'Develop and use a model to describe why asexual reproduction results in offspring with identical genetic information and sexual reproduction results in offspring with genetic variation.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l3',
        unitId: 'g6-sci-u7',
        title: 'Dominant and Recessive Alleles',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'Dominant and Recessive Alleles',
        reading: 'Alleles are different versions of a gene. A dominant allele expresses its phenotype even with one copy (Bb), while a recessive allele requires two copies (bb) to be seen.',
        principles: [
          {
            id: 'p-g6-sci-alleles',
            title: 'Allele Expression and Phenotypes',
            standard: 'MS-LS3-2',
            summary: 'Distinguish between dominant and recessive alleles and their physical expressions.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l4',
        unitId: 'g6-sci-u7',
        title: 'Mid-Unit Quiz 1: DNA & Alleles',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'Genetics Check 1',
        reading: 'Review check on chromosomes, asexual vs. sexual reproduction, and dominant vs. recessive alleles.',
        principles: [
          {
            id: 'p-g6-sci-u7-quiz1',
            title: 'DNA and Alleles Review',
            standard: 'MS-LS3-2',
            summary: 'Review of genetic inheritance fundamentals.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l5',
        unitId: 'g6-sci-u7',
        title: 'Punnett Squares & Probability',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'Monohybrid Punnett Squares',
        reading: 'Punnett squares cross parental alleles to model the mathematical probability of offspring inheriting homozygous dominant (BB), heterozygous (Bb), or homozygous recessive (bb) genotypes.',
        principles: [
          {
            id: 'p-g6-sci-punnett',
            title: 'Punnett Square Probability',
            standard: 'MS-LS3-2',
            summary: 'Use Punnett square models to calculate phenotypic ratios in offspring.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l6',
        unitId: 'g6-sci-u7',
        title: 'Gene Mutations: Beneficial, Neutral, Harmful',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'DNA Mutations Overview',
        reading: 'Mutations are random changes in the DNA sequence. Some are harmful diseases, many are neutral with no noticeable change, and some are beneficial adaptations that aid survival.',
        principles: [
          {
            id: 'p-g6-sci-mutations',
            title: 'Types and Impacts of Mutations',
            standard: 'MS-LS3-1',
            summary: 'Explain how mutations create new alleles and evaluate their phenotypic effects.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l7',
        unitId: 'g6-sci-u7',
        title: 'Environmental Influence on Gene Expression',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'Environment and Gene Expression',
        reading: 'An organism’s final phenotype is shaped by the interplay between its genetic code and its physical environment (such as nutrition altering height, or temperature changing reptile egg sex).',
        principles: [
          {
            id: 'p-g6-sci-epigenetics',
            title: 'Environmental Phenotypic Modulation',
            standard: 'MS-LS3-1',
            summary: 'Analyze how environmental factors interact with genes to shape observable traits.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l8',
        unitId: 'g6-sci-u7',
        title: 'Mid-Unit Quiz 2: Punnett Squares & Mutations',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'Genetics Check 2',
        reading: 'Review check on monohybrid Punnett square probabilities, mutation types, and environmental gene expression.',
        principles: [
          {
            id: 'p-g6-sci-u7-quiz2',
            title: 'Punnett Square and Mutation Check',
            standard: 'MS-LS3-1',
            summary: 'Review of genetic crosses and mutation classifications.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u7-l9',
        unitId: 'g6-sci-u7',
        title: 'Unit 7 Exam: Inheritance and Variation',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
        videoTitle: 'Genetics Exam',
        reading: 'Comprehensive unit exam assessing DNA structure, alleles, Punnett square probability ratios, mutations, and environmental interactions.',
        principles: [
          {
            id: 'p-g6-sci-u7-exam',
            title: 'Inheritance and Variation Exam',
            standard: 'MS-LS3-2',
            summary: 'Demonstrate mastery of heredity, Punnett squares, and genetic mutations.',
            bank: SCI_GENETICS_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: EVOLUTION (6 skills + 2 Quizzes + 1 Exam = 9 steps)
  // =========================================================================
  {
    id: 'g6-sci-u8',
    title: 'Unit 8: Evolution',
    standards: ['MS-LS4-1', 'MS-LS4-2', 'MS-LS4-3'],
    lessons: [
      {
        id: 'g6-sci-u8-l1',
        unitId: 'g6-sci-u8',
        title: 'Fossil Formation & Sedimentary Strata',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'The Fossil Record',
        reading: 'Fossils form when dead organisms are buried under sediments like mud and sand. Over millions of years, pressure turns sediment into rock, preserving mineralized skeletons.',
        principles: [
          {
            id: 'p-g6-sci-fossil-record',
            title: 'Sedimentary Strata and Superposition',
            standard: 'MS-LS4-1',
            summary: 'Analyze and interpret data for patterns in the fossil record that document the existence, diversity, extinction, and change of life forms throughout the history of life on Earth.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l2',
        unitId: 'g6-sci-u8',
        title: 'Chronology & Mass Extinctions',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Extinction in the Fossil Record',
        reading: 'The fossil record documents chronological changes in life over deep geologic time, including transitional forms that bridge major groups and catastrophic mass extinction boundaries.',
        principles: [
          {
            id: 'p-g6-sci-extinctions',
            title: 'Patterns of Extinction and Transition',
            standard: 'MS-LS4-1',
            summary: 'Interpret patterns of organism appearance and extinction across rock strata.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l3',
        unitId: 'g6-sci-u8',
        title: 'Homologous Structures & Common Ancestry',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution/x0c5bb03129646fd6:evolution-and-common-ancestry/e/understand-evolution-and-common-ancestry',
        videoTitle: 'Homologous Structures',
        reading: 'Vertebrates like humans, cats, whales, and bats share identical skeletal layouts in their forelimbs (one upper bone, two lower bones, wrist, and digits), indicating common descent.',
        principles: [
          {
            id: 'p-g6-sci-homology',
            title: 'Comparative Anatomical Homology',
            standard: 'MS-LS4-2',
            summary: 'Apply scientific ideas to construct an explanation for the anatomical similarities and differences among modern organisms and between modern and fossil organisms to infer evolutionary relationships.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l4',
        unitId: 'g6-sci-u8',
        title: 'Mid-Unit Quiz 1: Fossils & Anatomy',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Evolution Check 1',
        reading: 'Review check on fossil rock layers, the law of superposition, and homologous vertebrate limb bones.',
        principles: [
          {
            id: 'p-g6-sci-u8-quiz1',
            title: 'Fossils and Homology Review',
            standard: 'MS-LS4-2',
            summary: 'Review of fossil evidence and comparative anatomy.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l5',
        unitId: 'g6-sci-u8',
        title: 'Vestigial Structures: Anatomical Remnants',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Vestigial Structures',
        reading: 'Vestigial structures are anatomical remnants that had crucial functions in ancestral species but are reduced or nonfunctional today, such as pelvis bones inside whales or wings on flightless birds.',
        principles: [
          {
            id: 'p-g6-sci-vestigial',
            title: 'Vestigial Evolutionary Remnants',
            standard: 'MS-LS4-2',
            summary: 'Analyze vestigial anatomical features as evidence of evolutionary history.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l6',
        unitId: 'g6-sci-u8',
        title: 'Comparative Embryology',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Embryological Evidence for Evolution',
        reading: 'During early developmental stages, embryos of fish, birds, reptiles, and mammals exhibit strikingly similar features (like pharyngeal slits and tail structures) that diverge as they mature.',
        principles: [
          {
            id: 'p-g6-sci-embryo',
            title: 'Embryological Developmental Patterns',
            standard: 'MS-LS4-3',
            summary: 'Analyze displays of pictorial data to compare patterns of similarities in the embryological development across multiple species to identify relationships not evident in the fully formed anatomy.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l7',
        unitId: 'g6-sci-u8',
        title: 'Evolutionary Trees & Shared Characteristics',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Reading Evolutionary Trees',
        reading: 'Cladograms and phylogenetic trees visually organize shared derived characteristics. Branch points represent common ancestors where lineages diverged over evolutionary time.',
        principles: [
          {
            id: 'p-g6-sci-trees',
            title: 'Interpreting Phylogenetic Trees',
            standard: 'MS-LS4-2',
            summary: 'Construct and read evolutionary branching diagrams based on shared anatomical traits.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l8',
        unitId: 'g6-sci-u8',
        title: 'Mid-Unit Quiz 2: Embryology & Trees',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Evolution Check 2',
        reading: 'Review check covering vestigial organs, embryological similarities, and cladogram interpretation.',
        principles: [
          {
            id: 'p-g6-sci-u8-quiz2',
            title: 'Embryology and Trees Review',
            standard: 'MS-LS4-3',
            summary: 'Review of embryological homologies and evolutionary branching diagrams.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u8-l9',
        unitId: 'g6-sci-u8',
        title: 'Unit 8 Exam: Evolution',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
        videoTitle: 'Evolution Exam',
        reading: 'Comprehensive unit exam testing fossil layer chronology, homologous limbs, vestigial traits, comparative embryology, and evolutionary trees.',
        principles: [
          {
            id: 'p-g6-sci-u8-exam',
            title: 'Evolution Mastery Exam',
            standard: 'MS-LS4-2',
            summary: 'Demonstrate mastery of fossil, anatomical, and embryological evidence for evolution.',
            bank: SCI_EVOLUTION_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: NATURAL AND ARTIFICIAL SELECTION (4 skills + 1 Quiz + 1 Exam = 6 steps)
  // =========================================================================
  {
    id: 'g6-sci-u9',
    title: 'Unit 9: Natural and Artificial Selection',
    standards: ['MS-LS4-4', 'MS-LS4-5', 'MS-LS4-6'],
    lessons: [
      {
        id: 'g6-sci-u9-l1',
        unitId: 'g6-sci-u9',
        title: 'Variation & Overproduction in Populations',
        estimatedMinutes: 8,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
        videoTitle: 'Variation in Populations',
        reading: 'Natural populations produce more offspring than the environment can support. Because individuals inherit different genetic variations, some have traits that make finding food or avoiding predators easier.',
        principles: [
          {
            id: 'p-g6-sci-pop-variation',
            title: 'Overproduction and Variation',
            standard: 'MS-LS4-4',
            summary: 'Construct an explanation based on evidence that describes how genetic variations of traits in a population increase some individuals’ probability of surviving and reproducing.',
            bank: SCI_SELECTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u9-l2',
        unitId: 'g6-sci-u9',
        title: 'Natural Selection & Differential Survival',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
        videoTitle: 'Darwin and Natural Selection',
        reading: 'Natural selection is the mechanism driving evolution: organisms best adapted to their local environment survive longer and produce more offspring, passing their beneficial alleles to future generations.',
        principles: [
          {
            id: 'p-g6-sci-nat-select',
            title: 'Mechanism of Natural Selection',
            standard: 'MS-LS4-4',
            summary: 'Explain how selective environmental pressures alter allele frequencies over time.',
            bank: SCI_SELECTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u9-l3',
        unitId: 'g6-sci-u9',
        title: 'Adaptations to Changing Environments',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
        videoTitle: 'Adaptation Examples',
        reading: 'When environmental conditions change (such as climate shifts or new diseases), traits that were once neutral can become vital adaptations, shifting the entire population’s phenotypic distribution.',
        principles: [
          {
            id: 'p-g6-sci-adaptations',
            title: 'Environmental Shifts and Adaptation',
            standard: 'MS-LS4-6',
            summary: 'Use mathematical representations to support explanations of how natural selection may lead to increases and decreases of specific traits in populations over time.',
            bank: SCI_SELECTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u9-l4',
        unitId: 'g6-sci-u9',
        title: 'Artificial Selection: Selective Breeding',
        estimatedMinutes: 9,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
        videoTitle: 'Selective Breeding',
        reading: 'In artificial selection, humans intentionally choose which animals or plants reproduce based on desired traits, creating dog breeds, sweet modern corn, and high-yield dairy cows.',
        principles: [
          {
            id: 'p-g6-sci-art-select',
            title: 'Artificial Selection in Agriculture',
            standard: 'MS-LS4-5',
            summary: 'Gather and synthesize information about the technologies that have changed the way humans influence the inheritance of desired traits in organisms.',
            bank: SCI_SELECTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u9-l5',
        unitId: 'g6-sci-u9',
        title: 'Mid-Unit Quiz: Selection Pressures',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
        videoTitle: 'Selection Review',
        reading: 'Review check contrasting natural selection in wild populations with artificial selection driven by human agricultural goals.',
        principles: [
          {
            id: 'p-g6-sci-u9-quiz',
            title: 'Selection Review',
            standard: 'MS-LS4-4',
            summary: 'Review of natural vs. artificial selection and population adaptation.',
            bank: SCI_SELECTION_BANK,
          },
        ],
      },
      {
        id: 'g6-sci-u9-l6',
        unitId: 'g6-sci-u9',
        title: 'Unit 9 Exam: Natural & Artificial Selection',
        kind: 'unit_test',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
        videoTitle: 'Selection Exam',
        reading: 'Comprehensive unit exam assessing genetic overproduction, differential reproductive success, adaptation graphs, and selective breeding.',
        principles: [
          {
            id: 'p-g6-sci-u9-exam',
            title: 'Selection Mastery Exam',
            standard: 'MS-LS4-4',
            summary: 'Demonstrate mastery of natural selection mechanisms and artificial breeding.',
            bank: SCI_SELECTION_BANK,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 10: EXPLORE BIOLOGY THROUGH SIMULATIONS (Enrichment, Unlocked)
  // =========================================================================
  {
    id: 'g6-sci-u10',
    title: 'Unit 10: Explore Biology Through Simulations',
    kind: 'explore',
    standards: ['MS-LS1-2', 'MS-LS2-3', 'MS-LS4-4'],
    exploreItems: [
      {
        id: 'g6-sci-sim-phet-natural-selection',
        title: 'PhET Interactive Simulation: Natural Selection with Bunnies',
        type: 'simulation',
        estimatedMinutes: 20,
        url: 'https://phet.colorado.edu/en/simulations/natural-selection',
        description: 'Control wolves, food supply, and fur mutations in an Arctic vs. Equator environment. Watch allele frequencies shift over generations in real time.',
        steps: [
          'Add a mate and introduce the brown fur gene mutation.',
          'Change the environment from white snow to brown equator dirt.',
          'Add wolves as a predator pressure and record which bunny phenotypes survive.',
          'Observe the population graph showing natural selection in action.',
        ],
        reflectionPrompt: 'Why did the dominant white fur color become disadvantageous when the environmental background changed to brown dirt?',
      },
      {
        id: 'g6-sci-sim-cell-tour',
        title: 'Cellular 3D Virtual Tour & Microscopic Explorer',
        type: 'virtual_tour',
        estimatedMinutes: 15,
        url: 'https://learn.genetics.utah.edu/content/cells/insideacell/',
        description: 'Zoom through a 3D animal and plant cell to inspect how ribosomes, mitochondria, and chloroplasts operate in real time.',
        steps: [
          'Navigate to the plant cell view and click on the chloroplast.',
          'Observe the thylakoid discs converting sunlight into ATP.',
          'Switch to the animal cell and locate the lysosomes digesting cellular debris.',
        ],
        reflectionPrompt: 'What structural feature of the cell membrane enables it to maintain internal chemical equilibrium?',
      },
      {
        id: 'g6-sci-exp-kitchen-osmosis',
        title: 'Hands-On Kitchen Experiment: Gummy Bear Osmosis',
        type: 'experiment',
        estimatedMinutes: 25,
        description: 'Observe passive water transport across a selectively permeable membrane using gummy bears soaked in fresh water vs. concentrated salt water.',
        materials: ['3 Gummy bears', '3 Clear cups', 'Water', 'Table salt', 'Ruler'],
        steps: [
          'Measure the length, width, and height of 3 identical gummy bears with a ruler.',
          'Place Bear #1 in tap water (hypotonic solution).',
          'Place Bear #2 in saturated salt water (hypertonic solution).',
          'Leave Bear #3 dry on the counter as a negative control.',
          'Wait 12–24 hours and remeasure the dimensions of all 3 bears.',
        ],
        reflectionPrompt: 'Did water move into or out of the gummy bear in the salt water? How does this model a dehydrated cell?',
      },
      {
        id: 'g6-sci-vid-hhmi-origin-species',
        title: 'HHMI BioInteractive Video: The Origin of Species & Finches',
        type: 'video',
        estimatedMinutes: 16,
        url: 'https://www.biointeractive.org/classroom-resources/origin-species-beak-finch',
        description: 'Rosemary and Peter Grant document 40 years of natural selection on Galápagos finch beaks during alternating severe droughts and torrential rains.',
        reflectionPrompt: 'How did drought change the size of available seeds, and why did that favor finches with deeper, larger beaks?',
      },
    ],
    lessons: [],
  },

  // =========================================================================
  // UNIT 11: TEACHER RESOURCES (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g6-sci-u11',
    title: 'Unit 11: Teacher Resources',
    kind: 'teacher_resources',
    standards: ['NGSS-MS-LS1', 'NGSS-MS-LS2', 'NGSS-MS-LS3', 'NGSS-MS-LS4'],
    resources: [
      {
        id: 'g6-sci-tr-pacing',
        title: '36-Week Middle School Biology Pacing & Scope',
        kind: 'pacing_guide',
        description: 'Standard 36-week schedule allotting 3–4 weeks per unit with built-in lab weeks, review periods, and semester exam windows.',
        body: `### 36-Week Middle School Biology Pacing Guide
- **Weeks 1–4**: Unit 1 (Cells & Organisms — microscope labs & organelle models)
- **Weeks 5–8**: Unit 2 (Organism Growth & Reproduction — flower dissections)
- **Weeks 9–12**: Unit 3 (Matter & Energy in Organisms — photosynthesis light trials)
- **Weeks 13–16**: Unit 4 (Interactions in Ecosystems — food webs & symbiosis projects)
- **Weeks 17–18**: Unit 5 & Mid-Year Comprehensive Review (Energy pyramids & carbon cycle)
- **Weeks 19–23**: Unit 6 (Ecosystems & Biodiversity — wildlife corridor conservation designs)
- **Weeks 24–28**: Unit 7 (Inheritance & Variation — Punnett squares & mutation modeling)
- **Weeks 29–32**: Unit 8 (Evolution — fossil strata & comparative anatomy)
- **Weeks 33–35**: Unit 9 (Natural & Artificial Selection — selective breeding debates)
- **Week 36**: Capstone presentations and annual science portfolio review.`,
      },
      {
        id: 'g6-sci-tr-standards-crosswalk',
        title: 'NGSS & Ohio Learning Standards Crosswalk',
        kind: 'standards_map',
        description: 'Detailed alignment mapping each unit to Ohio Grade 6 Life Science Standards and National NGSS standards.',
        body: `### Standards Crosswalk
- **MS-LS1-1 & MS-LS1-2**: Ohio 6.LS.1 (All organisms are composed of cells, the fundamental units of life).
- **MS-LS1-3**: Ohio 6.LS.2 (Levels of organization: cells, tissues, organs, organ systems).
- **MS-LS1-4 & MS-LS1-5**: Ohio 6.LS.3 (Reproductive adaptations and environmental/genetic growth limits).
- **MS-LS1-6 & MS-LS1-7**: Ohio 6.LS.4 (Photosynthesis and cellular respiration energy flow).
- **MS-LS2-1 through MS-LS2-5**: Ohio 6.LS.5 (Ecosystem dynamics, energy pyramids, biodiversity services).
- **MS-LS3 & MS-LS4**: Ohio 8.LS foundation (Genetics, selective breeding, and fossil history).`,
      },
      {
        id: 'g6-sci-tr-rubric',
        title: 'Lab Investigation & Scientific Reasoning Rubric',
        kind: 'assessment_rubric',
        description: 'Rubric for assessing student science journals, CER (Claim, Evidence, Reasoning) statements, and hands-on lab experiments.',
        body: `### CER Scientific Investigation Rubric (4-Point Scale)
- **Claim (1 pt)**: Clear, testable statement answering the investigative question.
- **Evidence (1.5 pts)**: Sufficient qualitative and quantitative data from simulation or lab.
- **Scientific Reasoning (1.5 pts)**: Applies biological principles (e.g., natural selection, osmosis) explaining why the evidence supports the claim.`,
      },
    ],
    lessons: [],
  },
]
