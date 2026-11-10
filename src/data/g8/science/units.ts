import { Unit, Principle } from '../../../types'
import {
  G8_SCI_FORCES_BANK,
  G8_SCI_FIELDS_BANK,
  G8_SCI_WAVES_BANK,
  G8_SCI_EARTH_LAYERS_BANK,
  G8_SCI_TECTONICS_BANK,
  G8_SCI_GEOLOGIC_TIME_BANK,
  G8_SCI_HEREDITY_BANK,
  G8_SCI_EVOLUTION_BANK,
} from './banks'

// Principles
const P_G8_SCI_NET_FORCE: Principle = {
  id: 'p-g8-sci-net-force',
  title: 'Forces, Net Force & Balanced Motion',
  standard: 'MS-PS2-2 / OH.8.PS.2',
  summary: 'Net force is the combined push or pull on an object; unbalanced forces change speed or direction.',
  bank: G8_SCI_FORCES_BANK,
}

const P_G8_SCI_FIELDS: Principle = {
  id: 'p-g8-sci-fields',
  title: 'Gravitational, Electric & Magnetic Force Fields',
  standard: 'MS-PS2-3 / MS-PS2-5 / OH.8.PS.1',
  summary: 'Non-contact forces act across space through fields; field strength increases with mass or charge and decreases with distance.',
  bank: G8_SCI_FIELDS_BANK,
}

const P_G8_SCI_WAVES: Principle = {
  id: 'p-g8-sci-waves',
  title: 'Waves, Electromagnetic Spectrum & Digital Signals',
  standard: 'MS-PS4-1 / MS-PS4-2 / MS-PS4-3',
  summary: 'Waves transmit energy via frequency and amplitude; electromagnetic waves travel in vacuums; digital signals reliably encode data.',
  bank: G8_SCI_WAVES_BANK,
}

const P_G8_SCI_EARTH_LAYERS: Principle = {
  id: 'p-g8-sci-earth-layers',
  title: 'Earth’s Interior Layers & Seismic Waves',
  standard: 'OH.8.ESS.1',
  summary: 'Earth consists of the crust, mantle, liquid outer core, and solid inner core; seismic waves reveal internal layers.',
  bank: G8_SCI_EARTH_LAYERS_BANK,
}

const P_G8_SCI_TECTONICS: Principle = {
  id: 'p-g8-sci-tectonics',
  title: 'Plate Boundaries, Seafloor Spreading & Continental Drift',
  standard: 'OH.8.ESS.2 / OH.8.ESS.3',
  summary: 'Divergent, convergent, and transform plate boundaries shape Earth’s crust through volcanoes, trenches, and faults.',
  bank: G8_SCI_TECTONICS_BANK,
}

const P_G8_SCI_GEOLOGIC_TIME: Principle = {
  id: 'p-g8-sci-geologic-time',
  title: 'Geologic Time, Rock Strata & Index Fossils',
  standard: 'MS-ESS1-4 / OH.8.ESS.3',
  summary: 'Rock strata and index fossils establish relative geologic age, while radiometric isotopes provide absolute numeric dates.',
  bank: G8_SCI_GEOLOGIC_TIME_BANK,
}

const P_G8_SCI_GENETICS: Principle = {
  id: 'p-g8-sci-genetics',
  title: 'Reproduction, Meiosis & Punnett Square Heredity',
  standard: 'MS-LS3-2 / OH.8.LS.1',
  summary: 'Sexual reproduction creates genetic variation via meiosis; dominant and recessive alleles follow Mendelian inheritance patterns.',
  bank: G8_SCI_HEREDITY_BANK,
}

const P_G8_SCI_EVOLUTION: Principle = {
  id: 'p-g8-sci-evolution',
  title: 'Natural Selection, Mutations & Evolutionary Evidence',
  standard: 'MS-LS4-1 / MS-LS4-2 / OH.8.LS.3',
  summary: 'Natural selection acts on heritable mutations; homologous anatomical structures and the fossil record document evolutionary change.',
  bank: G8_SCI_EVOLUTION_BANK,
}

export const G8_SCIENCE_UNITS: Unit[] = [
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

  // UNIT 3: Waves & Digital Information Transfer
  {
    id: 'g8-sci-u3',
    title: 'Unit 3: Waves & Digital Information Transfer',
    standards: ['MS-PS4-1', 'MS-PS4-2', 'MS-PS4-3'],
    lessons: [
      {
        id: 'g8-sci-u3-l1',
        unitId: 'g8-sci-u3',
        title: 'Lesson 1: Wave Properties: Amplitude, Wavelength & Frequency',
        kind: 'lesson',
        partOf: 'Wave Mechanics',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-physics/waves-and-information/v/introduction-to-waves',
        videoTitle: 'Khan Academy: Introduction to Waves',
        reading:
          'A wave transfers energy through oscillations. Amplitude reflects wave energy and loudness; frequency measures wave cycles passing per second; wavelength is distance between peaks.',
        principles: [P_G8_SCI_WAVES],
      },
      {
        id: 'g8-sci-u3-l2',
        unitId: 'g8-sci-u3',
        title: 'Lesson 2: Mechanical Sound Waves vs. Electromagnetic Light Waves',
        kind: 'lesson',
        partOf: 'Sound vs Light',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-physics/waves-and-information/v/sound-properties',
        videoTitle: 'Khan Academy: Sound Waves vs Light Waves',
        reading:
          'Sound is a mechanical longitudinal wave requiring physical matter to propagate. Light is an electromagnetic transverse wave that travels freely through vacuums.',
        principles: [P_G8_SCI_WAVES],
      },
      {
        id: 'g8-sci-u3-l3',
        unitId: 'g8-sci-u3',
        title: 'Lesson 3: The Electromagnetic Spectrum & Wave Energy',
        kind: 'lesson',
        partOf: 'EM Spectrum',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/physics/light-and-optics/electromagnetic-waves-and-the-electromagnetic-spectrum/v/electromagnetic-spectrum',
        videoTitle: 'Khan Academy: The Electromagnetic Spectrum',
        reading:
          'The electromagnetic spectrum ranges from low-energy radio waves to visible light and high-energy gamma rays. Higher frequency waves carry higher energy.',
        principles: [P_G8_SCI_WAVES],
      },
      {
        id: 'g8-sci-u3-l4',
        unitId: 'g8-sci-u3',
        title: 'Lesson 4: Digital Binary Signals vs. Analog Wave Transmission',
        kind: 'lesson_review',
        partOf: 'Digital Signals',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-physics/waves-and-information/v/digital-vs-analog',
        videoTitle: 'Khan Academy: Digital Signals and Data Encoding',
        reading:
          'Digital communication converts information into discrete binary pulses (0s and 1s), which resist noise and signal degradation far better than continuous analog waves.',
        principles: [P_G8_SCI_WAVES],
      },
    ],
  },

  // UNIT 4: Earth’s Interior Layers & Seismic Waves
  {
    id: 'g8-sci-u4',
    title: 'Unit 4: Earth’s Interior Layers & Seismic Waves',
    standards: ['OH.8.ESS.1'],
    lessons: [
      {
        id: 'g8-sci-u4-l1',
        unitId: 'g8-sci-u4',
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
        id: 'g8-sci-u4-l2',
        unitId: 'g8-sci-u4',
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
        id: 'g8-sci-u4-l3',
        unitId: 'g8-sci-u4',
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
        id: 'g8-sci-u4-l4',
        unitId: 'g8-sci-u4',
        title: 'Lesson 4: Unit 4 Checkpoint Review: Earth’s Interior',
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

  // UNIT 5: Plate Tectonics & Seismic Activity
  {
    id: 'g8-sci-u5',
    title: 'Unit 5: Plate Tectonics & Seismic Activity',
    standards: ['OH.8.ESS.2', 'OH.8.ESS.3'],
    isOhioExtension: true,
    lessons: [
      {
        id: 'g8-sci-u5-l1',
        unitId: 'g8-sci-u5',
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
        id: 'g8-sci-u5-l2',
        unitId: 'g8-sci-u5',
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
        id: 'g8-sci-u5-l3',
        unitId: 'g8-sci-u5',
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
        id: 'g8-sci-u5-l4',
        unitId: 'g8-sci-u5',
        title: 'Lesson 4: Unit 5 Checkpoint Review: Plate Tectonics',
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

  // UNIT 6: Geologic Time, Fossils & Earth History
  {
    id: 'g8-sci-u6',
    title: 'Unit 6: Geologic Time, Fossils & Earth History',
    standards: ['MS-ESS1-4', 'OH.8.ESS.3'],
    lessons: [
      {
        id: 'g8-sci-u6-l1',
        unitId: 'g8-sci-u6',
        title: 'Lesson 1: The Law of Superposition & Relative Age Dating',
        kind: 'lesson',
        partOf: 'Relative Dating',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-earth-and-space-science/geologic-time/v/relative-dating-principles',
        videoTitle: 'Khan Academy: Relative Dating and Rock Layers',
        reading:
          'Sedimentary strata accumulate in horizontal beds where bottom layers are oldest and top layers youngest, allowing geologists to sequence past events.',
        principles: [P_G8_SCI_GEOLOGIC_TIME],
      },
      {
        id: 'g8-sci-u6-l2',
        unitId: 'g8-sci-u6',
        title: 'Lesson 2: Index Fossils & Correlating Distant Strata',
        kind: 'lesson',
        partOf: 'Index Fossils',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-earth-and-space-science/geologic-time/v/index-fossils',
        videoTitle: 'Khan Academy: Index Fossils and Biostratigraphy',
        reading:
          'Index fossils represent organisms that were geographically widespread but existed for relatively brief periods, enabling precise time correlation across separated continents.',
        principles: [P_G8_SCI_GEOLOGIC_TIME],
      },
      {
        id: 'g8-sci-u6-l3',
        unitId: 'g8-sci-u6',
        title: 'Lesson 3: Radiometric Dating & Absolute Age Calculation',
        kind: 'lesson',
        partOf: 'Radiometric Dating',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-earth-and-space-science/geologic-time/v/radiometric-dating',
        videoTitle: 'Khan Academy: Radioactive Isotopes and Half-Lives',
        reading:
          'Radioactive parent isotopes decay into stable daughter isotopes at constant rates called half-lives. Comparing ratios gives the rock’s exact numeric age in millions of years.',
        principles: [P_G8_SCI_GEOLOGIC_TIME],
      },
      {
        id: 'g8-sci-u6-l4',
        unitId: 'g8-sci-u6',
        title: 'Lesson 4: Unit 6 Review & Geologic History Check',
        kind: 'lesson_review',
        partOf: 'Geologic Time Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-earth-and-space-science/geologic-time/v/geologic-time-review',
        videoTitle: 'Khan Academy: Geologic Time Scale Review',
        reading:
          'Review unconformities, fossil succession, major geologic eras (Paleozoic, Mesozoic, Cenozoic), and catastrophic mass extinction boundaries.',
        principles: [P_G8_SCI_GEOLOGIC_TIME],
      },
    ],
  },

  // UNIT 7: Genetics, Speciation & Heredity
  {
    id: 'g8-sci-u7',
    title: 'Unit 7: Genetics, Heredity & Punnett Squares',
    standards: ['MS-LS3-2', 'OH.8.LS.1'],
    lessons: [
      {
        id: 'g8-sci-u7-l1',
        unitId: 'g8-sci-u7',
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
        id: 'g8-sci-u7-l2',
        unitId: 'g8-sci-u7',
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
        id: 'g8-sci-u7-l3',
        unitId: 'g8-sci-u7',
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
        id: 'g8-sci-u7-l4',
        unitId: 'g8-sci-u7',
        title: 'Lesson 4: Inherited Traits vs. Environmental Influences',
        kind: 'lesson',
        partOf: 'Trait Variation',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/hs-classical-genetics/hs-introduction-to-heredity/v/environmental-effects-on-phenotype',
        videoTitle: 'Khan Academy: Environmental Effects on Traits',
        reading:
          'While DNA encodes baseline traits, environmental factors such as nutrition, climate, and sunlight actively modify physical phenotypes and organism growth.',
        principles: [P_G8_SCI_GENETICS],
      },
      {
        id: 'g8-sci-u7-l5',
        unitId: 'g8-sci-u7',
        title: 'Lesson 5: Unit 7 Checkpoint Review: Genetics & Heredity',
        kind: 'lesson_review',
        partOf: 'Genetics Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/hs-classical-genetics/v/genetics-review',
        videoTitle: 'Khan Academy: Genetics and Punnett Squares Review',
        reading:
          'Synthesize genetic mechanisms: meiosis chromosome distribution, homozygous vs heterozygous distinctions, and calculating monohybrid cross probabilities.',
        principles: [P_G8_SCI_GENETICS],
      },
    ],
  },

  // UNIT 8: Natural Selection & Biological Evolution
  {
    id: 'g8-sci-u8',
    title: 'Unit 8: Natural Selection & Biological Evolution',
    standards: ['MS-LS4-1', 'MS-LS4-2', 'OH.8.LS.3'],
    lessons: [
      {
        id: 'g8-sci-u8-l1',
        unitId: 'g8-sci-u8',
        title: 'Lesson 1: Natural Selection & Camouflage Adaptations',
        kind: 'lesson',
        partOf: 'Natural Selection',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/hs-evolution/hs-evolution-and-natural-selection/v/natural-selection-and-the-owl-butterfly',
        videoTitle: 'Khan Academy: Natural Selection and Adaptation',
        reading:
          'In changing environments, individuals with advantageous heritable traits experience higher survival and reproductive success, shifting population allele frequencies over generations.',
        principles: [P_G8_SCI_EVOLUTION],
      },
      {
        id: 'g8-sci-u8-l2',
        unitId: 'g8-sci-u8',
        title: 'Lesson 2: Genetic Mutations as the Source of Novel Traits',
        kind: 'lesson',
        partOf: 'Mutations',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/hs-molecular-genetics/hs-mutations/v/mutations-and-genetic-variation',
        videoTitle: 'Khan Academy: Genetic Mutations and Variation',
        reading:
          'Random mutations in germline DNA introduce new alleles into populations. Helpful mutations increase fitness, while harmful mutations are selected against.',
        principles: [P_G8_SCI_EVOLUTION],
      },
      {
        id: 'g8-sci-u8-l3',
        unitId: 'g8-sci-u8',
        title: 'Lesson 3: Evidence for Evolution: Anatomy & Fossil Lines',
        kind: 'lesson',
        partOf: 'Evolution Evidence',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/hs-evolution/hs-evidence-of-evolution/v/evidence-for-evolution',
        videoTitle: 'Khan Academy: Evidence for Evolution',
        reading:
          'Homologous bone structures across mammals and transitional fossil sequences provide compelling empirical evidence of descent with modification from common ancestors.',
        principles: [P_G8_SCI_EVOLUTION],
      },
      {
        id: 'g8-sci-u8-l4',
        unitId: 'g8-sci-u8',
        title: 'Lesson 4: Artificial Selection vs. Natural Selection',
        kind: 'lesson_review',
        partOf: 'Artificial Selection',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/hs-evolution/hs-evolution-and-natural-selection/v/artificial-selection',
        videoTitle: 'Khan Academy: Artificial Selection and Selective Breeding',
        reading:
          'Review human-directed selective breeding in crops and domestic animals, comparing intentional artificial selection to environmental natural selection.',
        principles: [P_G8_SCI_EVOLUTION],
      },
    ],
  },

  // UNIT 9: Grade 8 Science Course Challenge
  {
    id: 'g8-sci-u9',
    title: 'Unit 9: Grade 8 Science Course Challenge',
    standards: ['MS-PS', 'MS-ESS', 'MS-LS'],
    lessons: [
      {
        id: 'g8-sci-u9-l1',
        unitId: 'g8-sci-u9',
        title: 'Lesson 1: Physical Science & Force Fields Synthesis',
        kind: 'lesson_review',
        partOf: 'Course Challenge Part 1',
        estimatedMinutes: 15,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-physics/v/physical-science-synthesis',
        videoTitle: 'Khan Academy: Grade 8 Physical Science Synthesis',
        reading:
          'Synthesize Newton’s three laws of motion, net force calculations, non-contact gravitational/magnetic fields, and wave energy properties.',
        principles: [P_G8_SCI_NET_FORCE, P_G8_SCI_FIELDS, P_G8_SCI_WAVES],
      },
      {
        id: 'g8-sci-u9-l2',
        unitId: 'g8-sci-u9',
        title: 'Lesson 2: Earth Systems, Plate Tectonics & Rock History',
        kind: 'lesson_review',
        partOf: 'Course Challenge Part 2',
        estimatedMinutes: 15,
        videoUrl:
          'https://www.khanacademy.org/science/middle-school-earth-and-space-science/v/earth-systems-synthesis',
        videoTitle: 'Khan Academy: Grade 8 Earth Science Synthesis',
        reading:
          'Synthesize Earth’s interior layers, seismic P/S waves, mantle convection, plate boundary tectonics, and stratigraphic relative dating.',
        principles: [P_G8_SCI_EARTH_LAYERS, P_G8_SCI_TECTONICS, P_G8_SCI_GEOLOGIC_TIME],
      },
      {
        id: 'g8-sci-u9-l3',
        unitId: 'g8-sci-u9',
        title: 'Lesson 3: Heredity, Genetics & Natural Selection Capstone',
        kind: 'lesson_review',
        partOf: 'Course Challenge Part 3',
        estimatedMinutes: 15,
        videoUrl:
          'https://www.khanacademy.org/science/high-school-biology/v/genetics-evolution-capstone',
        videoTitle: 'Khan Academy: Grade 8 Genetics & Evolution Capstone',
        reading:
          'Complete capstone review of meiosis, Punnett square inheritance probabilities, DNA mutations, and natural selection driving speciation.',
        principles: [P_G8_SCI_GENETICS, P_G8_SCI_EVOLUTION],
      },
    ],
  },

  // UNIT 10: Explore Science Through Interactive Simulations
  {
    id: 'g8-sci-u10',
    title: 'Unit 10: Explore Science Through Interactive Simulations',
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

  // UNIT 11: Teacher Resources & Standards Alignment
  {
    id: 'g8-sci-u11',
    title: 'Unit 11: Teacher Resources & Standards Alignment',
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

- **Weeks 1–5**: Unit 1 — Forces, Net Force & Newton’s Laws (MS-PS2-1, MS-PS2-2, OH.8.PS.2)
- **Weeks 6–9**: Unit 2 — Gravitational, Electric & Magnetic Force Fields (OH.8.PS.1)
- **Weeks 10–13**: Unit 3 — Waves & Digital Information Transfer (MS-PS4-1, MS-PS4-2, MS-PS4-3)
- **Week 14**: Quarter 1 Physical Science Assessment
- **Weeks 15–18**: Unit 4 — Earth’s Interior Layers & Seismic Waves (OH.8.ESS.1)
- **Weeks 19–23**: Unit 5 — Plate Tectonics & Seismic Activity (OH.8.ESS.2, OH.8.ESS.3)
- **Weeks 24–27**: Unit 6 — Geologic Time, Fossils & Earth History (MS-ESS1-4)
- **Week 28**: Quarter 2 & 3 Earth and Space Science Checkpoint
- **Weeks 29–32**: Unit 7 — Genetics, Heredity & Punnett Squares (MS-LS3-2, OH.8.LS.1)
- **Weeks 33–34**: Unit 8 — Natural Selection & Biological Evolution (MS-LS4-1, OH.8.LS.3)
- **Weeks 35–36**: Unit 9 — Grade 8 Science Course Challenge & Capstone Inquiry Defense`,
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
| Unit 3 | MS-PS4-1..3 | Amplitude, frequency, light vs sound, digital binary encoding |
| Unit 4 | OH.8.ESS.1 | Earth layers, mantle convection currents, seismic body waves |
| Unit 5 | OH.8.ESS.2, 3 | Plate boundaries, seafloor spreading, relative dating, Ohio geology |
| Unit 6 | MS-ESS1-4 | Law of superposition, index fossils, radiometric absolute dating |
| Unit 7 | OH.8.LS.1 | Meiosis genetic variation, Punnett square inheritance |
| Unit 8 | OH.8.LS.3 | Natural selection, camouflage, mutations, homologous anatomy |`,
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
]
