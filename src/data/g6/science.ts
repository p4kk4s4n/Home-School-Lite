import { Course, QuestionBankItem } from '../../types'

const SCI_CELLS_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-c1',
    type: 'mc',
    prompt: 'Which organelle makes usable energy (ATP) for the cell?',
    choices: ['Mitochondria', 'Ribosome', 'Cell wall', 'Vacuole'],
    answer: 'Mitochondria',
    explanation: 'Mitochondria are the powerhouses of the cell. They break down sugar to release usable energy.',
  },
  {
    id: 'g6-sci-c2',
    type: 'mc',
    prompt: 'Which two structures are found in plant cells only?',
    choices: [
      'Chloroplasts and cell wall',
      'Nucleus and mitochondria',
      'Cell membrane and cytoplasm',
      'Ribosomes and vacuoles',
    ],
    answer: 'Chloroplasts and cell wall',
    explanation: 'Plant cells have chloroplasts to capture sunlight and a stiff cell wall for support.',
  },
  {
    id: 'g6-sci-c3',
    type: 'mc',
    prompt: 'What is the main job of the cell membrane?',
    choices: [
      'Control what enters and leaves the cell',
      'Make food from sunlight',
      'Store all genetic DNA',
      'Give plant stems stiff bark',
    ],
    answer: 'Control what enters and leaves the cell',
    explanation: 'The cell membrane is a selective barrier that lets water and nutrients in while keeping waste out.',
  },
  {
    id: 'g6-sci-c4',
    type: 'mc',
    prompt: 'Where is DNA stored inside a plant or animal cell?',
    choices: ['Inside the nucleus', 'Outside the cell wall', 'Inside the vacuole', 'On the outer membrane'],
    answer: 'Inside the nucleus',
    explanation: 'The nucleus is the control center of a eukaryotic cell and holds the DNA.',
  },
  {
    id: 'g6-sci-c5',
    type: 'mc',
    prompt: 'What does modern Cell Theory state about all living things?',
    choices: [
      'All living things are made of cells',
      'Only animals are made of cells',
      'New cells form from nonliving dust',
      'Every cell is visible without a microscope',
    ],
    answer: 'All living things are made of cells',
    explanation: 'Cell theory states that all living things are made of cells, and cells come from existing cells.',
  },
  {
    id: 'g6-sci-c6',
    type: 'mc',
    prompt: 'Which organelle captures sunlight to make sugar in plants?',
    choices: ['Chloroplast', 'Mitochondria', 'Nucleus', 'Lysosome'],
    answer: 'Chloroplast',
    explanation: 'Chloroplasts contain green chlorophyll and carry out photosynthesis to make sugar from sunlight.',
  },
  {
    id: 'g6-sci-c7',
    type: 'mc',
    prompt: 'Why do plant cells have a large central vacuole?',
    choices: [
      'To store water and keep stems upright',
      'To pump blood through leaves',
      'To digest insects',
      'To help roots walk',
    ],
    answer: 'To store water and keep stems upright',
    explanation: 'A full central vacuole pushes against the cell wall so the plant stands tall instead of wilting.',
  },
  {
    id: 'g6-sci-c8',
    type: 'mc',
    prompt: 'What is the jelly-like fluid that fills a cell?',
    choices: ['Cytoplasm', 'Chlorophyll', 'Cellulose', 'Cartilage'],
    answer: 'Cytoplasm',
    explanation: 'Cytoplasm is the jelly-like fluid inside the cell membrane that holds the organelles in place.',
  },
]

const SCI_REPRO_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-rp1',
    type: 'mc',
    prompt: 'What is the main purpose of bright flower petals on plants?',
    choices: ['Attract animal pollinators', 'Absorb deep ground water', 'Keep seeds frozen in winter', 'Make bark harder'],
    answer: 'Attract animal pollinators',
    explanation: 'Bright colors and sweet nectar attract bees, birds, and butterflies to spread pollen between flowers.',
  },
  {
    id: 'g6-sci-rp2',
    type: 'mc',
    prompt: 'Which animal behavior directly increases the survival of offspring?',
    choices: ['Building nests and guarding eggs', 'Sleeping during winter', 'Shedding fur in summer', 'Changing feather colors'],
    answer: 'Building nests and guarding eggs',
    explanation: 'Guarding nests shields defenseless young from predators and harsh weather.',
  },
  {
    id: 'g6-sci-rp3',
    type: 'mc',
    prompt: 'How does seed dispersal by wind benefit parent plants?',
    choices: ['Reduces competition for light and water', 'Makes flowers bloom twice as fast', 'Stops caterpillars from eating leaves', 'Turns stems into wood'],
    answer: 'Reduces competition for light and water',
    explanation: 'Dispersing seeds away from the parent plant ensures seedlings do not compete for the same sunlight, soil, and water.',
  },
  {
    id: 'g6-sci-rp4',
    type: 'mc',
    prompt: 'Which is an environmental factor that affects plant growth?',
    choices: ['Amount of sunlight and water', 'Inherited flower color', 'Type of leaf shape gene', 'Number of inherited chromosomes'],
    answer: 'Amount of sunlight and water',
    explanation: 'Sunlight and moisture come from the outside environment, while genes are inherited internal instructions.',
  },
  {
    id: 'g6-sci-rp5',
    type: 'mc',
    prompt: 'What is pollination in flowering plants?',
    choices: ['Transfer of pollen to the female pistil', 'Loss of leaves in autumn', 'Germination of a seedling in mud', 'Opening of bark pores'],
    answer: 'Transfer of pollen to the female pistil',
    explanation: 'Pollination occurs when pollen moves from an anther to a stigma, enabling fertilization and seed production.',
  },
  {
    id: 'g6-sci-rp6',
    type: 'mc',
    prompt: 'Why do male peacocks display large, colorful tail feathers?',
    choices: ['To attract female peahens for mating', 'To frighten earthworms', 'To stay warm in snowstorms', 'To camouflage in dirt'],
    answer: 'To attract female peahens for mating',
    explanation: 'Peacock plumage is a courtship behavior that signals health and genetic fitness to potential mates.',
  },
  {
    id: 'g6-sci-rp7',
    type: 'mc',
    prompt: 'How do fruit structures help flowering plants reproduce?',
    choices: ['Animals eat fruit and disperse seeds in droppings', 'Fruits poison all insects', 'Fruits turn into extra roots', 'Fruits keep trees green in winter'],
    answer: 'Animals eat fruit and disperse seeds in droppings',
    explanation: 'Animals digest the fleshy fruit and pass undamaged seeds far away, spreading the plant population.',
  },
  {
    id: 'g6-sci-rp8',
    type: 'mc',
    prompt: 'Which growth factor is inherited from an organism’s parents?',
    choices: ['Genetic blueprint for maximum height', 'Amount of rainfall this spring', 'Number of rocks in the soil', 'Average air temperature'],
    answer: 'Genetic blueprint for maximum height',
    explanation: 'Genetic instructions for maximum potential size are inherited from parents through DNA.',
  },
]

const SCI_ENERGY_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-en1',
    type: 'mc',
    prompt: 'What are the two main inputs required for photosynthesis?',
    choices: ['Water and carbon dioxide', 'Oxygen and glucose', 'Nitrogen and methane', 'Salt and protein'],
    answer: 'Water and carbon dioxide',
    explanation: 'Plants use sunlight energy to combine water from roots and carbon dioxide from air into glucose.',
  },
  {
    id: 'g6-sci-en2',
    type: 'mc',
    prompt: 'What gas is released into the atmosphere during photosynthesis?',
    choices: ['Oxygen', 'Carbon dioxide', 'Methane', 'Helium'],
    answer: 'Oxygen',
    explanation: 'Photosynthesis splits water molecules and releases oxygen gas as a byproduct.',
  },
  {
    id: 'g6-sci-en3',
    type: 'mc',
    prompt: 'What happens during cellular respiration in cells?',
    choices: ['Glucose is broken down to release ATP energy', 'Sunlight is absorbed to make starch', 'Water is frozen for storage', 'Carbon dioxide is turned into wood'],
    answer: 'Glucose is broken down to release ATP energy',
    explanation: 'Respiration combines food molecules with oxygen inside mitochondria to release energy for cellular work.',
  },
  {
    id: 'g6-sci-en4',
    type: 'mc',
    prompt: 'Which organisms carry out cellular respiration?',
    choices: ['Both plants and animals', 'Animals only', 'Plants only', 'Viruses only'],
    answer: 'Both plants and animals',
    explanation: 'Plants produce sugar via photosynthesis, but both plants and animals must break down that sugar to survive.',
  },
  {
    id: 'g6-sci-en5',
    type: 'mc',
    prompt: 'Where does the energy stored in food originally come from?',
    choices: ['Sunlight captured by producers', 'Deep underground magma', 'Ocean tidal waves', 'Lightning strikes'],
    answer: 'Sunlight captured by producers',
    explanation: 'Nearly all living food energy begins as sunlight captured by green autotrophs.',
  },
  {
    id: 'g6-sci-en6',
    type: 'mc',
    prompt: 'What simple sugar is produced by green plant leaves?',
    choices: ['Glucose', 'Cellulose', 'Enzyme', 'Starch'],
    answer: 'Glucose',
    explanation: 'Photosynthesis produces glucose (C6H12O6), a simple carbohydrate that powers plant metabolism.',
  },
  {
    id: 'g6-sci-en7',
    type: 'mc',
    prompt: 'Which gas do animal lungs take in for cellular respiration?',
    choices: ['Oxygen', 'Carbon monoxide', 'Argon', 'Hydrogen'],
    answer: 'Oxygen',
    explanation: 'Aerobic cellular respiration requires oxygen to burn glucose in mitochondria.',
  },
  {
    id: 'g6-sci-en8',
    type: 'mc',
    prompt: 'How are photosynthesis and cellular respiration related?',
    choices: ['The products of one are the reactants of the other', 'They only happen in ocean water', 'They both destroy all energy', 'They only happen in dead organisms'],
    answer: 'The products of one are the reactants of the other',
    explanation: 'Photosynthesis produces oxygen and glucose, which respiration uses to make carbon dioxide and water in an endless cycle.',
  },
]

const SCI_ECO_INTERACTION_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-ec1',
    type: 'mc',
    prompt: 'Which is an abiotic factor in a forest ecosystem?',
    choices: ['Rainfall amount', 'White-tailed deer', 'Oak trees', 'Soil bacteria'],
    answer: 'Rainfall amount',
    explanation: 'Abiotic factors are nonliving environmental components like water, sunlight, temperature, and rocks.',
  },
  {
    id: 'g6-sci-ec2',
    type: 'mc',
    prompt: 'What symbiotic relationship benefits both participating organisms?',
    choices: ['Mutualism', 'Parasitism', 'Commensalism', 'Predation'],
    answer: 'Mutualism',
    explanation: 'Mutualism is a partnership where both species gain an advantage, like bees pollinating flowers while eating nectar.',
  },
  {
    id: 'g6-sci-ec3',
    type: 'mc',
    prompt: 'What is a tick feeding on a dog an example of?',
    choices: ['Parasitism', 'Mutualism', 'Commensalism', 'Decomposition'],
    answer: 'Parasitism',
    explanation: 'In parasitism, the parasite benefits while harming the host organism.',
  },
  {
    id: 'g6-sci-ec4',
    type: 'mc',
    prompt: 'What happens when two species compete for the exact same food source?',
    choices: ['The population of one or both species may decline', 'Both populations double immediately', 'Predators disappear', 'Plants stop growing'],
    answer: 'The population of one or both species may decline',
    explanation: 'Competition for limited resources limits population sizes and can force one species to adapt or move.',
  },
  {
    id: 'g6-sci-ec5',
    type: 'mc',
    prompt: 'In a food web, what role is played by green algae?',
    choices: ['Primary producer', 'Primary consumer', 'Tertiary consumer', 'Apex predator'],
    answer: 'Primary producer',
    explanation: 'Algae make their own food through photosynthesis, serving as the foundational base of aquatic food webs.',
  },
  {
    id: 'g6-sci-ec6',
    type: 'mc',
    prompt: 'What do arrows in a food chain represent?',
    choices: ['Flow of energy from prey to predator', 'Direction organisms walk', 'Wind patterns in the forest', 'Water flow downhill'],
    answer: 'Flow of energy from prey to predator',
    explanation: 'Arrows always point from the organism being eaten to the organism that consumes it, showing energy flow.',
  },
  {
    id: 'g6-sci-ec7',
    type: 'mc',
    prompt: 'What kind of symbiosis helps one species while leaving the other unaffected?',
    choices: ['Commensalism', 'Parasitism', 'Mutualism', 'Competition'],
    answer: 'Commensalism',
    explanation: 'Commensalism benefits one partner (like barnacles on a whale) without harming or helping the host.',
  },
  {
    id: 'g6-sci-ec8',
    type: 'mc',
    prompt: 'What are organisms that eat only plants called?',
    choices: ['Herbivores', 'Carnivores', 'Decomposers', 'Omnivores'],
    answer: 'Herbivores',
    explanation: 'Herbivores are primary consumers that feed exclusively on plant tissue.',
  },
]

const SCI_ECO_ENERGY_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-pyr1',
    type: 'mc',
    prompt: 'About what percent of energy transfers from one trophic level up to the next?',
    choices: ['10%', '50%', '90%', '100%'],
    answer: '10%',
    explanation: 'According to the 10% rule, about 90% of energy is lost as heat and metabolic work, leaving roughly 10% for the next level.',
  },
  {
    id: 'g6-sci-pyr2',
    type: 'mc',
    prompt: 'Which organisms recycle dead matter back into rich soil nutrients?',
    choices: ['Decomposers like fungi and bacteria', 'Apex carnivores like wolves', 'Primary consumers like rabbits', 'Flying birds'],
    answer: 'Decomposers like fungi and bacteria',
    explanation: 'Decomposers break down dead organic matter, returning nitrogen and phosphorus to the soil.',
  },
  {
    id: 'g6-sci-pyr3',
    type: 'mc',
    prompt: 'Why are there always fewer apex predators than herbivores in an ecosystem?',
    choices: ['Energy decreases at each higher trophic level', 'Predators sleep more hours', 'Herbivores are always larger in size', 'Plants poison carnivores'],
    answer: 'Energy decreases at each higher trophic level',
    explanation: 'Because 90% of energy is lost at each step, there is only enough energy to support a small number of top predators.',
  },
  {
    id: 'g6-sci-pyr4',
    type: 'mc',
    prompt: 'How does carbon enter the living food web from the atmosphere?',
    choices: ['Plants absorb carbon dioxide during photosynthesis', 'Animals drink rainwater', 'Lightning turns nitrogen to carbon', 'Soil rocks dissolve in wind'],
    answer: 'Plants absorb carbon dioxide during photosynthesis',
    explanation: 'Producers absorb gaseous carbon dioxide and convert it into carbon-rich organic molecules.',
  },
  {
    id: 'g6-sci-pyr5',
    type: 'mc',
    prompt: 'What trophic level contains the greatest amount of total energy?',
    choices: ['Producers at the base', 'Primary consumers', 'Secondary consumers', 'Top apex predators'],
    answer: 'Producers at the base',
    explanation: 'Producers harness the primary energy directly from the sun, forming the largest energy base.',
  },
  {
    id: 'g6-sci-pyr6',
    type: 'mc',
    prompt: 'How do animals obtain the nitrogen needed to build body proteins?',
    choices: ['By eating plants or other animals', 'By breathing in air', 'By drinking pure water', 'By sunbathing'],
    answer: 'By eating plants or other animals',
    explanation: 'Animals cannot absorb nitrogen from air. They must ingest nitrogen-containing amino acids from food.',
  },
  {
    id: 'g6-sci-pyr7',
    type: 'mc',
    prompt: 'What form of energy is lost into the environment at each trophic step?',
    choices: ['Thermal energy (heat)', 'Nuclear energy', 'Light flashes', 'Magnetic energy'],
    answer: 'Thermal energy (heat)',
    explanation: 'Organisms generate body heat through daily activity, and that thermal energy radiates out into the environment.',
  },
  {
    id: 'g6-sci-pyr8',
    type: 'mc',
    prompt: 'What would happen if all decomposers vanished from a forest?',
    choices: ['Dead material would pile up and soil would lose nutrients', 'Trees would grow ten times faster', 'Carnivores would turn green', 'Ponds would dry up'],
    answer: 'Dead material would pile up and soil would lose nutrients',
    explanation: 'Without decomposers, essential mineral nutrients remain trapped in dead organic matter and cannot be reused.',
  },
]

const SCI_GENETICS_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-gen1',
    type: 'mc',
    prompt: 'What double-helix molecule stores an organism’s genetic code?',
    choices: ['DNA', 'ATP', 'Glucose', 'Hemoglobin'],
    answer: 'DNA',
    explanation: 'DNA (deoxyribonucleic acid) carries the hereditary instructions used in growth, functioning, and reproduction.',
  },
  {
    id: 'g6-sci-gen2',
    type: 'mc',
    prompt: 'What is a major advantage of sexual reproduction over asexual reproduction?',
    choices: ['Produces greater genetic variation', 'Happens much faster', 'Requires only one parent', 'Never produces any mutations'],
    answer: 'Produces greater genetic variation',
    explanation: 'Sexual reproduction combines chromosomes from two parents, creating diverse trait combinations that help species adapt.',
  },
  {
    id: 'g6-sci-gen3',
    type: 'mc',
    prompt: 'In genetics, what happens when a dominant allele is paired with a recessive allele?',
    choices: ['The dominant trait is expressed', 'The recessive trait hides the dominant', 'Both alleles disappear', 'A brand new third species forms'],
    answer: 'The dominant trait is expressed',
    explanation: 'A dominant allele masks the presence of a recessive allele in the organism’s physical appearance.',
  },
  {
    id: 'g6-sci-gen4',
    type: 'mc',
    prompt: 'What is a permanent change in an organism’s DNA sequence called?',
    choices: ['Mutation', 'Pollination', 'Mitosis', 'Respiration'],
    answer: 'Mutation',
    explanation: 'A mutation is a change in the nucleotide sequence of DNA that may lead to new trait variations.',
  },
  {
    id: 'g6-sci-gen5',
    type: 'mc',
    prompt: 'If parent pea plants are heterozygous (Bb), what tool predicts offspring traits?',
    choices: ['Punnett square', 'Thermometer', 'Balance beam', 'Microscope'],
    answer: 'Punnett square',
    explanation: 'A Punnett square is a grid used to calculate the mathematical probabilities of offspring genotypes and phenotypes.',
  },
  {
    id: 'g6-sci-gen6',
    type: 'mc',
    prompt: 'How many chromosomes does a child inherit from each human parent?',
    choices: ['23 from mother and 23 from father (46 total)', '46 from mother and 0 from father', '10 from each parent', '100 total'],
    answer: '23 from mother and 23 from father (46 total)',
    explanation: 'Human egg and sperm cells each carry 23 chromosomes, uniting to form 46 chromosomes in offspring.',
  },
  {
    id: 'g6-sci-gen7',
    type: 'mc',
    prompt: 'Which is an example of an organism that reproduces asexually by budding or division?',
    choices: ['Baker’s yeast and bacteria', 'Bald eagles', 'White-tailed deer', 'Sunflowers'],
    answer: 'Baker’s yeast and bacteria',
    explanation: 'Bacteria reproduce by binary fission and yeast buds into genetically identical daughter clones.',
  },
  {
    id: 'g6-sci-gen8',
    type: 'mc',
    prompt: 'Are all genetic mutations harmful?',
    choices: ['No, some mutations are beneficial or neutral', 'Yes, all mutations cause immediate death', 'Yes, no mutation has ever helped', 'Mutations only happen in nonliving rocks'],
    answer: 'No, some mutations are beneficial or neutral',
    explanation: 'Many mutations have no noticeable effect, while beneficial mutations can provide survival advantages in changing habitats.',
  },
]

const SCI_EVOLUTION_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-evo1',
    type: 'mc',
    prompt: 'What key evidence for past life is found preserved in sedimentary rock layers?',
    choices: ['Fossils', 'Magma veins', 'Plastic bottles', 'Salt crystals'],
    answer: 'Fossils',
    explanation: 'Fossils preserve the mineralized bones, shells, and footprints of ancient organisms across millions of years.',
  },
  {
    id: 'g6-sci-evo2',
    type: 'mc',
    prompt: 'What are anatomical structures that share a common bone pattern called?',
    choices: ['Homologous structures', 'Analogous tissues', 'Vestigial claws', 'Exoskeletons'],
    answer: 'Homologous structures',
    explanation: 'Homologous structures, like human arms, whale flippers, and bat wings, share an ancestral skeletal blueprint.',
  },
  {
    id: 'g6-sci-evo3',
    type: 'mc',
    prompt: 'According to the law of superposition, where are the oldest undisturbed rock fossils found?',
    choices: ['In the deepest rock layers at the bottom', 'On the top surface layer', 'Inside active volcanoes', 'Suspended in clouds'],
    answer: 'In the deepest rock layers at the bottom',
    explanation: 'Sedimentary layers form from the bottom up, so older fossils lie below younger layers.',
  },
  {
    id: 'g6-sci-evo4',
    type: 'mc',
    prompt: 'What are human tailbones and whale hip bones examples of?',
    choices: ['Vestigial structures with reduced original function', 'Artificial selections', 'Carnivore claws', 'Plant stems'],
    answer: 'Vestigial structures with reduced original function',
    explanation: 'Vestigial structures are anatomical remnants inherited from ancestors that no longer serve their original primary role.',
  },
  {
    id: 'g6-sci-evo5',
    type: 'mc',
    prompt: 'How does comparative embryology provide evidence for common ancestry?',
    choices: ['Vertebrate embryos share similar early stages and gill slits', 'All embryos hatch in one day', 'Embryos have no bones', 'Embryos never develop hearts'],
    answer: 'Vertebrate embryos share similar early stages and gill slits',
    explanation: 'Early embryos of fish, birds, and mammals show remarkable similarities reflecting common developmental genes.',
  },
  {
    id: 'g6-sci-evo6',
    type: 'mc',
    prompt: 'What does comparing DNA sequences between species reveal?',
    choices: ['Closely related species share more matching DNA', 'All species have 100% identical DNA', 'DNA never changes over time', 'Animals share no DNA with plants'],
    answer: 'Closely related species share more matching DNA',
    explanation: 'Molecular biology shows that closely related organisms share higher percentages of identical genetic code.',
  },
  {
    id: 'g6-sci-evo7',
    type: 'mc',
    prompt: 'What is an adaptation that helps an organism survive in a cold arctic climate?',
    choices: ['Thick blubber insulation and dense fur', 'Large thin ears that dump body heat', 'Sweat glands across skin', 'Bright pink feathers'],
    answer: 'Thick blubber insulation and dense fur',
    explanation: 'Thick blubber and fur are anatomical adaptations that retain body heat in freezing temperatures.',
  },
  {
    id: 'g6-sci-evo8',
    type: 'mc',
    prompt: 'Why do island populations often evolve unique traits over time?',
    choices: ['Geographic isolation separates them from mainland gene pools', 'Islands have no gravity', 'Water removes all DNA', 'Island plants cannot flower'],
    answer: 'Geographic isolation separates them from mainland gene pools',
    explanation: 'Physical separation prevents interbreeding, allowing island groups to adapt to unique local conditions.',
  },
]

const SCI_SELECTION_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-sel1',
    type: 'mc',
    prompt: 'What is natural selection often summarized as?',
    choices: ['Survival of individuals best adapted to their environment', 'Picking puppies with softest fur', 'Planting only red flowers', 'Keeping animals inside zoos'],
    answer: 'Survival of individuals best adapted to their environment',
    explanation: 'Organisms with traits well-suited to their environment are more likely to survive, reproduce, and pass those genes on.',
  },
  {
    id: 'g6-sci-sel2',
    type: 'mc',
    prompt: 'How does artificial selection differ from natural selection?',
    choices: ['Humans choose which traits are bred in artificial selection', 'Natural selection happens in labs only', 'Artificial selection takes millions of years', 'Nature chooses dog breeds'],
    answer: 'Humans choose which traits are bred in artificial selection',
    explanation: 'In artificial selection, humans deliberately breed plants and animals for desired characteristics like sweeter corn or gentle dogs.',
  },
  {
    id: 'g6-sci-sel3',
    type: 'mc',
    prompt: 'Why did dark peppered moths become more common near industrial cities with soot?',
    choices: ['Dark soot camouflaged them from hungry birds', 'Soot made them fly faster', 'Moths ate soot for food', 'Birds preferred white moths as pets'],
    answer: 'Dark soot camouflaged them from hungry birds',
    explanation: 'Dark coloration blended with soot-covered trees, giving dark moths higher survival rates against predators.',
  },
  {
    id: 'g6-sci-sel4',
    type: 'mc',
    prompt: 'What raw material is required for natural selection to act upon?',
    choices: ['Genetic variation within a population', 'A completely uniform population', 'Zero mutations', 'Frozen rock layers'],
    answer: 'Genetic variation within a population',
    explanation: 'Without genetic diversity in traits, there are no differences for environmental pressures to favor.',
  },
  {
    id: 'g6-sci-sel5',
    type: 'mc',
    prompt: 'Which is a common example of modern artificial selection?',
    choices: ['Dairy cows bred to produce high volumes of milk', 'Deep sea anglerfish bioluminescence', 'Cactus spines in the desert', 'Polar bear white fur'],
    answer: 'Dairy cows bred to produce high volumes of milk',
    explanation: 'Farmers selectively bred cows over centuries to maximize milk production.',
  },
  {
    id: 'g6-sci-sel6',
    type: 'mc',
    prompt: 'What happens to bacteria populations when antibiotics are used improperly?',
    choices: ['Antibiotic-resistant bacteria survive and reproduce', 'All bacteria disappear forever', 'Bacteria turn into viruses', 'Bacteria learn to fly'],
    answer: 'Antibiotic-resistant bacteria survive and reproduce',
    explanation: 'Bacteria with mutations conferring drug resistance survive the treatment and pass their resistance to future generations.',
  },
  {
    id: 'g6-sci-sel7',
    type: 'mc',
    prompt: 'What factor causes natural selection to occur in a habitat?',
    choices: ['Environmental pressures like predators and food shortages', 'Human farmers selecting seeds', 'Art supplies in schools', 'Uniform warm temperatures'],
    answer: 'Environmental pressures like predators and food shortages',
    explanation: 'Limited food, disease, and predators create struggle for existence where advantageous traits thrive.',
  },
  {
    id: 'g6-sci-sel8',
    type: 'mc',
    prompt: 'What happened to wild mustard over centuries of selective breeding by humans?',
    choices: ['It was bred into broccoli, cauliflower, cabbage, and kale', 'It went completely extinct', 'It turned into wheat grain', 'It grew into oak trees'],
    answer: 'It was bred into broccoli, cauliflower, cabbage, and kale',
    explanation: 'Human farmers selected wild mustard for different plant parts, creating a wide variety of domestic vegetables.',
  },
]

const SCI_OHIO_BANK: QuestionBankItem[] = [
  {
    id: 'g6-sci-oh1',
    type: 'mc',
    prompt: 'Which major freshwater Great Lake forms the northern border of Ohio?',
    choices: ['Lake Erie', 'Lake Superior', 'Lake Michigan', 'Lake Ontario'],
    answer: 'Lake Erie',
    explanation: 'Lake Erie borders northern Ohio and is a vital aquatic ecosystem, fishery, and shipping corridor.',
  },
  {
    id: 'g6-sci-oh2',
    type: 'mc',
    prompt: 'What ancient geological force carved Ohio’s rolling northern plains and left fertile soils?',
    choices: ['Continental glaciers (ice sheets)', 'Volcanic lava flows', 'Deep ocean trenches', 'Desert sandstorms'],
    answer: 'Continental glaciers (ice sheets)',
    explanation: 'Massive Pleistocene glaciers flattened northern and western Ohio, leaving behind rich glacial till soils.',
  },
  {
    id: 'g6-sci-oh3',
    type: 'mc',
    prompt: 'Why are invasive zebra mussels harmful to Ohio waterways and Lake Erie?',
    choices: [
      'They filter out native plankton and clog water intake pipes',
      'They eat native fish directly',
      'They make river water boil',
      'They poison tree roots on the shoreline',
    ],
    answer: 'They filter out native plankton and clog water intake pipes',
    explanation: 'Invasive zebra mussels multiply rapidly, stripping plankton from food webs and damaging public water infrastructure.',
  },
  {
    id: 'g6-sci-oh4',
    type: 'mc',
    prompt: 'What invasive beetle has devastated millions of native ash trees across Ohio forests?',
    choices: ['Emerald ash borer', 'Japanese ladybug', 'Honeybee', 'Monarch butterfly'],
    answer: 'Emerald ash borer',
    explanation: 'The emerald ash borer is an invasive metallic green wood-boring beetle from Asia that kills North American ash trees.',
  },
  {
    id: 'g6-sci-oh5',
    type: 'mc',
    prompt: 'What common sedimentary rock in Ohio formed from ancient marine coral reefs and shells?',
    choices: ['Limestone', 'Obsidian', 'Basalt', 'Pumice'],
    answer: 'Limestone',
    explanation: 'Millions of years ago, shallow tropical seas covered Ohio, depositing calcium carbonate that hardened into limestone.',
  },
  {
    id: 'g6-sci-oh6',
    type: 'mc',
    prompt: 'Why are coastal wetlands along Lake Erie essential for migratory bird species?',
    choices: ['They provide critical resting and feeding habitats', 'Wetlands freeze all winter long', 'Birds eat plastic in marshes', 'Wetlands have no predators'],
    answer: 'They provide critical resting and feeding habitats',
    explanation: 'Lake Erie coastal wetlands are vital stopover sites along the Mississippi and Atlantic migratory flyways.',
  },
  {
    id: 'g6-sci-oh7',
    type: 'mc',
    prompt: 'What environmental issue can cause toxic algal blooms in western Lake Erie during summer?',
    choices: ['Agricultural fertilizer and nutrient runoff', 'Colder lake water temperatures', 'Too many native fish', 'Glacier melting'],
    answer: 'Agricultural fertilizer and nutrient runoff',
    explanation: 'Excess phosphorus and nitrogen runoff into rivers stimulates runaway blue-green cyanobacteria blooms in warm shallow waters.',
  },
  {
    id: 'g6-sci-oh8',
    type: 'mc',
    prompt: 'Which Ohio state symbol is a deciduous tree recognized by palmate leaves and nut seeds?',
    choices: ['Ohio Buckeye tree', 'Sugar Maple', 'Douglas Fir', 'Weeping Willow'],
    answer: 'Ohio Buckeye tree',
    explanation: 'The Ohio Buckeye (Aesculus glabra) is the official state tree of Ohio.',
  },
]

export const G6_SCIENCE_COURSE: Course = {
  id: 'g6-science',
  subject: 'science',
  grade: 6,
  title: 'Grade 6 Science (Life Science & Ecosystems)',
  subtitle: 'Cells, Organisms, Ecosystem Dynamics, Genetics, Evolution & Earth Systems',
  credits: 1.0,
  color: '#10b981',
  icon: '🔬',
  units: [
    // UNIT 1: CELLS AND ORGANISMS
    {
      id: 'g6-sci-u1',
      title: 'Unit 1: Cells and Organisms',
      standards: ['MS-LS1-1', 'MS-LS1-2'],
      lessons: [
        {
          id: 'g6-sci-u1-l1',
          unitId: 'g6-sci-u1',
          title: 'Cell Theory and Microscopic Life',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:cells-and-organisms/x24c4e73582d09141:introduction-to-cells/v/introduction-to-the-cell',
          videoTitle: 'Introduction to Cells',
          reading: 'All living things are made of one or more cells. Cells are the fundamental structural and functional units of life. All cells originate from preexisting cells through cell division.',
          principles: [
            {
              id: 'p-g6-sci-cell-theory',
              title: 'Cell Theory Fundamentals',
              standard: 'MS-LS1-1',
              summary: 'Conduct an investigation to provide evidence that living things are made of cells.',
              bank: SCI_CELLS_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u1-l2',
          unitId: 'g6-sci-u1',
          title: 'Organelles and Plant vs. Animal Cells',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:cells-and-organisms/x24c4e73582d09141:plant-vs-animal-cells/v/plant-cells-vs-animal-cells',
          videoTitle: 'Plant Cells vs Animal Cells',
          reading: 'Organelles are specialized internal cell compartments. The nucleus stores DNA, mitochondria produce ATP energy, the membrane controls entry, chloroplasts capture sunlight, and cell walls provide rigid structure in plants.',
          principles: [
            {
              id: 'p-g6-sci-organelles',
              title: 'Cell Structures and Organelles',
              standard: 'MS-LS1-2',
              summary: 'Develop and use a model to describe the function of a cell as a whole and ways parts of cells contribute to the function.',
              bank: SCI_CELLS_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u1-l3',
          unitId: 'g6-sci-u1',
          title: 'Unit 1 Test: Cells and Organisms',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:cells-and-organisms',
          videoTitle: 'Cells Unit Test Review',
          reading: 'Unit Exam covering cell theory, organelle functions, and differences between plant and animal cells.',
          principles: [
            {
              id: 'p-g6-sci-cells-exam',
              title: 'Cell Biology Mastery',
              standard: 'MS-LS1-1',
              summary: 'Comprehensive check of cell structures, organelles, and cell theory.',
              bank: SCI_CELLS_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 2: ORGANISM GROWTH AND REPRODUCTION
    {
      id: 'g6-sci-u2',
      title: 'Unit 2: Organism Growth and Reproduction',
      standards: ['MS-LS1-4', 'MS-LS1-5'],
      lessons: [
        {
          id: 'g6-sci-u2-l1',
          unitId: 'g6-sci-u2',
          title: 'Plant and Animal Reproductive Adaptations',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:organism-growth-and-reproduction/x24c4e73582d09141:plant-reproduction/v/plant-reproduction',
          videoTitle: 'Plant Reproduction and Pollination',
          reading: 'Plants rely on bright petals, nectar, and wind to move pollen, while animals perform courtship displays and protect nests to ensure their offspring survive to adulthood.',
          principles: [
            {
              id: 'p-g6-sci-repro-adapt',
              title: 'Reproductive Behaviors and Plant Structures',
              standard: 'MS-LS1-4',
              summary: 'Use argument based on empirical evidence and scientific reasoning to support an explanation for how characteristic animal behaviors and specialized plant structures affect the probability of successful reproduction.',
              bank: SCI_REPRO_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u2-l2',
          unitId: 'g6-sci-u2',
          title: 'Unit 2 Test: Growth and Reproduction',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:organism-growth-and-reproduction',
          videoTitle: 'Growth and Reproduction Test Practice',
          reading: 'Unit exam testing plant pollination, seed dispersal, animal parental care, and environmental vs. genetic growth factors.',
          principles: [
            {
              id: 'p-g6-sci-repro-exam',
              title: 'Growth and Reproductive Adaptations',
              standard: 'MS-LS1-4',
              summary: 'Test of reproductive behaviors and structural adaptations.',
              bank: SCI_REPRO_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 3: MATTER AND ENERGY IN ORGANISMS
    {
      id: 'g6-sci-u3',
      title: 'Unit 3: Matter and Energy in Organisms',
      standards: ['MS-LS1-6', 'MS-LS1-7'],
      lessons: [
        {
          id: 'g6-sci-u3-l1',
          unitId: 'g6-sci-u3',
          title: 'Photosynthesis and Cellular Respiration',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:matter-and-energy-in-organisms/x24c4e73582d09141:photosynthesis/v/photosynthesis',
          videoTitle: 'Photosynthesis & Respiration',
          reading: 'Photosynthesis uses solar energy to transform carbon dioxide and water into oxygen and glucose. Cellular respiration uses oxygen to break down glucose into ATP energy, returning carbon dioxide and water to the environment.',
          principles: [
            {
              id: 'p-g6-sci-photo-resp',
              title: 'Chemical Reactions in Photosynthesis and Respiration',
              standard: 'MS-LS1-6',
              summary: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy.',
              bank: SCI_ENERGY_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u3-l2',
          unitId: 'g6-sci-u3',
          title: 'Unit 3 Test: Matter and Energy in Organisms',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:matter-and-energy-in-organisms',
          videoTitle: 'Matter and Energy Test Practice',
          reading: 'Unit exam testing photosynthesis equations, cellular respiration inputs and outputs, and biological energy transformations.',
          principles: [
            {
              id: 'p-g6-sci-energy-exam',
              title: 'Metabolic Energy Cycles',
              standard: 'MS-LS1-6',
              summary: 'Comprehensive check of photosynthesis and cellular respiration.',
              bank: SCI_ENERGY_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 4: INTERACTIONS IN ECOSYSTEMS
    {
      id: 'g6-sci-u4',
      title: 'Unit 4: Interactions in Ecosystems',
      standards: ['MS-LS2-1', 'MS-LS2-2'],
      lessons: [
        {
          id: 'g6-sci-u4-l1',
          unitId: 'g6-sci-u4',
          title: 'Symbiosis, Competition & Food Webs',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:interactions-in-ecosystems/x24c4e73582d09141:ecological-relationships/v/ecological-interactions',
          videoTitle: 'Ecological Interactions',
          reading: 'Organisms interact in diverse ecological relationships: mutualism benefits both, commensalism benefits one without harm, and parasitism harms the host. Limited resources trigger competitive interactions.',
          principles: [
            {
              id: 'p-g6-sci-symbiosis',
              title: 'Patterns of Interaction Among Organisms',
              standard: 'MS-LS2-2',
              summary: 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems.',
              bank: SCI_ECO_INTERACTION_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u4-l2',
          unitId: 'g6-sci-u4',
          title: 'Unit 4 Test: Interactions in Ecosystems',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:interactions-in-ecosystems',
          videoTitle: 'Ecosystem Interactions Test Practice',
          reading: 'Unit exam testing abiotic vs. biotic factors, symbiotic partnerships, predator-prey dynamics, and food web connections.',
          principles: [
            {
              id: 'p-g6-sci-eco-inter-exam',
              title: 'Ecosystem Interactions Mastery',
              standard: 'MS-LS2-2',
              summary: 'Check of symbiotic relationships, competition, and food webs.',
              bank: SCI_ECO_INTERACTION_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 5: MATTER AND ENERGY IN ECOSYSTEMS
    {
      id: 'g6-sci-u5',
      title: 'Unit 5: Matter and Energy in Ecosystems',
      standards: ['MS-LS2-3'],
      lessons: [
        {
          id: 'g6-sci-u5-l1',
          unitId: 'g6-sci-u5',
          title: 'Trophic Levels & Biogeochemical Cycles',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:matter-and-energy-in-ecosystems/x24c4e73582d09141:energy-flow-in-ecosystems/v/flow-of-energy-and-matter-through-ecosystems',
          videoTitle: 'Energy Flow in Ecosystems',
          reading: 'Energy flows one-way through an ecosystem from the sun to producers and consumers, with ~90% lost as heat at each trophic level. Nutrients like carbon and nitrogen cycle continuously through biotic and abiotic pools.',
          principles: [
            {
              id: 'p-g6-sci-trophic',
              title: 'Trophic Pyramids and Nutrient Cycling',
              standard: 'MS-LS2-3',
              summary: 'Develop a model to describe the cycling of matter and flow of energy among living and nonliving parts of an ecosystem.',
              bank: SCI_ECO_ENERGY_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u5-l2',
          unitId: 'g6-sci-u5',
          title: 'Unit 5 Test: Matter and Energy in Ecosystems',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:matter-and-energy-in-ecosystems',
          videoTitle: 'Matter and Energy in Ecosystems Review',
          reading: 'Unit exam testing the 10% rule, energy pyramids, decomposers, and carbon cycling.',
          principles: [
            {
              id: 'p-g6-sci-eco-energy-exam',
              title: 'Ecosystem Energy Flow',
              standard: 'MS-LS2-3',
              summary: 'Testing energy pyramids and nutrient cycling.',
              bank: SCI_ECO_ENERGY_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 6: ECOSYSTEMS AND BIODIVERSITY
    {
      id: 'g6-sci-u6',
      title: 'Unit 6: Ecosystems and Biodiversity',
      standards: ['MS-LS2-4', 'MS-LS2-5'],
      lessons: [
        {
          id: 'g6-sci-u6-l1',
          unitId: 'g6-sci-u6',
          title: 'Biodiversity, Ecosystem Services & Conservation',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:ecosystems-and-biodiversity/x24c4e73582d09141:biodiversity/v/what-is-biodiversity',
          videoTitle: 'What is Biodiversity?',
          reading: 'Biodiversity measures the variety of species in an ecosystem. High biodiversity boosts ecosystem stability and provides critical ecosystem services including water purification, pollination, and soil creation.',
          principles: [
            {
              id: 'p-g6-sci-biodiv',
              title: 'Biodiversity and Ecosystem Health',
              standard: 'MS-LS2-5',
              summary: 'Evaluate competing design solutions for maintaining biodiversity and ecosystem services.',
              bank: SCI_ECO_INTERACTION_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u6-l2',
          unitId: 'g6-sci-u6',
          title: 'Unit 6 Test: Ecosystems and Biodiversity',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:ecosystems-and-biodiversity',
          videoTitle: 'Biodiversity Test Practice',
          reading: 'Unit exam testing species diversity, ecosystem services, and ecological disruption resilience.',
          principles: [
            {
              id: 'p-g6-sci-biodiv-exam',
              title: 'Biodiversity Concepts',
              standard: 'MS-LS2-5',
              summary: 'Check of biodiversity resilience and conservation solutions.',
              bank: SCI_ECO_INTERACTION_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 7: INHERITANCE AND VARIATION
    {
      id: 'g6-sci-u7',
      title: 'Unit 7: Inheritance and Variation',
      standards: ['MS-LS3-1', 'MS-LS3-2'],
      lessons: [
        {
          id: 'g6-sci-u7-l1',
          unitId: 'g6-sci-u7',
          title: 'Genes, Chromosomes & Punnett Squares',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:inheritance-and-variation/x24c4e73582d09141:dna-and-genes/v/dna-chromosomes-genes',
          videoTitle: 'DNA, Chromosomes, and Genes',
          reading: 'Genes are segments of DNA chromosomes that code for traits. Offspring inherit two alleles per gene. Dominant alleles mask recessive alleles. Punnett squares predict probability of genotypes and phenotypes.',
          principles: [
            {
              id: 'p-g6-sci-genetics',
              title: 'Genetic Transmission and Punnett Squares',
              standard: 'MS-LS3-2',
              summary: 'Develop and use a model to describe why asexual reproduction results in offspring with identical genetic information and sexual reproduction results in offspring with genetic variation.',
              bank: SCI_GENETICS_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u7-l2',
          unitId: 'g6-sci-u7',
          title: 'Unit 7 Test: Inheritance and Variation',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:inheritance-and-variation',
          videoTitle: 'Genetics Test Practice',
          reading: 'Unit exam testing DNA, chromosomes, dominant vs. recessive alleles, Punnett square ratios, and mutations.',
          principles: [
            {
              id: 'p-g6-sci-gen-exam',
              title: 'Genetics and Heredity',
              standard: 'MS-LS3-2',
              summary: 'Check of DNA, inheritance, Punnett squares, and genetic variation.',
              bank: SCI_GENETICS_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 8: EVOLUTION
    {
      id: 'g6-sci-u8',
      title: 'Unit 8: Evolution',
      standards: ['MS-LS4-1', 'MS-LS4-2', 'MS-LS4-3'],
      lessons: [
        {
          id: 'g6-sci-u8-l1',
          unitId: 'g6-sci-u8',
          title: 'Fossil Evidence and Anatomical Homologies',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:evolution/x24c4e73582d09141:the-fossil-record/v/the-fossil-record',
          videoTitle: 'The Fossil Record',
          reading: 'Fossils in sedimentary rock layers document chronological evolutionary changes in life over deep geologic time. Homologous skeletal structures in vertebrates reveal shared common ancestry.',
          principles: [
            {
              id: 'p-g6-sci-evo-evidence',
              title: 'Fossils and Comparative Anatomy',
              standard: 'MS-LS4-1',
              summary: 'Analyze and interpret data for patterns in the fossil record that document the existence, diversity, extinction, and change of life forms.',
              bank: SCI_EVOLUTION_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u8-l2',
          unitId: 'g6-sci-u8',
          title: 'Unit 8 Test: Evolution',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:evolution',
          videoTitle: 'Evolution Unit Test Review',
          reading: 'Unit exam testing fossil evidence, geologic rock layers, homologous structures, and comparative embryology.',
          principles: [
            {
              id: 'p-g6-sci-evo-exam',
              title: 'Evolutionary Evidence',
              standard: 'MS-LS4-1',
              summary: 'Check of fossil records and anatomical homologies.',
              bank: SCI_EVOLUTION_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 9: NATURAL AND ARTIFICIAL SELECTION
    {
      id: 'g6-sci-u9',
      title: 'Unit 9: Natural and Artificial Selection',
      standards: ['MS-LS4-4', 'MS-LS4-5'],
      lessons: [
        {
          id: 'g6-sci-u9-l1',
          unitId: 'g6-sci-u9',
          title: 'Mechanisms of Natural & Artificial Selection',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:natural-and-artificial-selection/x24c4e73582d09141:natural-selection/v/natural-selection',
          videoTitle: 'Natural Selection',
          reading: 'Natural selection occurs when environmental pressures favor individuals with advantageous inherited traits. In artificial selection, humans intentionally breed organisms for desired agricultural or domestic traits.',
          principles: [
            {
              id: 'p-g6-sci-selection',
              title: 'Selection Principles and Selective Breeding',
              standard: 'MS-LS4-4',
              summary: 'Construct an explanation based on evidence that describes how genetic variations of traits in a population increase some individuals’ probability of surviving and reproducing.',
              bank: SCI_SELECTION_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u9-l2',
          unitId: 'g6-sci-u9',
          title: 'Unit 9 Test: Natural and Artificial Selection',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/science/ms-biology/x24c4e73582d09141:natural-and-artificial-selection',
          videoTitle: 'Selection Test Practice',
          reading: 'Unit exam testing differential survival, adaptation mechanisms, and selective breeding in agriculture and domestic animals.',
          principles: [
            {
              id: 'p-g6-sci-sel-exam',
              title: 'Selection Mechanisms',
              standard: 'MS-LS4-4',
              summary: 'Check of natural and artificial selection concepts.',
              bank: SCI_SELECTION_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 10: OHIO REGIONAL SCIENCE EXTENSIONS
    {
      id: 'g6-sci-u10-ohio',
      title: 'Unit 10: Ohio Regional Science Extensions',
      standards: ['OH.6.ESS.1', 'OH.6.LS.1'],
      isOhioExtension: true,
      lessons: [
        {
          id: 'g6-sci-u10-l1',
          unitId: 'g6-sci-u10-ohio',
          title: 'Lake Erie Watershed & Invasive Species in Ohio',
          isOhioExtension: true,
          estimatedMinutes: 12,
          videoUrl: 'https://www.youtube.com/results?search_query=lake+erie+ecosystem+and+watershed+ohio',
          videoTitle: 'Ohio Water Systems & Invasive Species',
          reading: 'Lake Erie is Ohio’s largest freshwater resource. Invasive species like zebra mussels and emerald ash borers disrupt native Ohio food webs and require active conservation management.',
          principles: [
            {
              id: 'p-g6-sci-ohio-watershed',
              title: 'Ohio Watersheds and Invasive Species',
              standard: 'OH.6.LS.1',
              summary: 'Analyze disruptions to Ohio aquatic and forest ecosystems caused by invasive species.',
              bank: SCI_OHIO_BANK,
            },
          ],
        },
        {
          id: 'g6-sci-u10-l2',
          unitId: 'g6-sci-u10-ohio',
          title: 'Unit 10 Test: Ohio Regional Science',
          kind: 'unit_test',
          isOhioExtension: true,
          estimatedMinutes: 15,
          videoUrl: 'https://www.youtube.com/results?search_query=ohio+geology+glaciers+and+limestone',
          videoTitle: 'Ohio Science Review',
          reading: 'Unit exam testing Lake Erie hydrology, glacial till soils, limestone formations, and invasive species management in Ohio.',
          principles: [
            {
              id: 'p-g6-sci-ohio-exam',
              title: 'Ohio Ecosystems and Geology',
              standard: 'OH.6.ESS.1',
              summary: 'Check of Ohio regional science standards.',
              bank: SCI_OHIO_BANK,
            },
          ],
        },
      ],
    },

    // UNIT 11: EXPLORE BIOLOGY THROUGH SIMULATIONS (UNGRADED)
    {
      id: 'g6-sci-u11-explore',
      title: 'Unit 11: Explore Biology Through Simulations, Virtual Labs & Experiments',
      standards: ['NGSS Science & Engineering Practices'],
      kind: 'explore',
      lessons: [],
      exploreItems: [
        {
          id: 'exp-s6-phet-nat-sel',
          title: 'PhET Interactive Natural Selection Simulation',
          type: 'simulation',
          description: 'Control bunny fur color, food scarcity, and wolf predators to discover how populations evolve over generations.',
          url: 'https://phet.colorado.edu/en/simulations/natural-selection',
          estimatedMinutes: 20,
          requiresParentPin: false,
          steps: [
            'Launch the simulation and add a fur color mutation (brown fur).',
            'Change the environment from green grass to snowy winter.',
            'Introduce wolves and track which fur color survives best over 5 generations.',
          ],
          reflectionPrompt: 'Why did the brown fur trait provide an advantage in summer grass but a disadvantage in snow?',
        },
        {
          id: 'exp-s6-phet-gene-exp',
          title: 'PhET Gene Expression & Protein Machine',
          type: 'simulation',
          description: 'Zoom inside a virtual cell nucleus to transcribe DNA into messenger RNA and translate RNA into functioning proteins.',
          url: 'https://phet.colorado.edu/en/simulations/gene-expression-essentials',
          estimatedMinutes: 15,
          requiresParentPin: false,
        },
        {
          id: 'exp-s6-strawberry-dna',
          title: 'Kitchen Lab: Extracting Real Strawberry DNA',
          type: 'experiment',
          description: 'Extract visible strands of real plant DNA using household salt, dish soap, and rubbing alcohol.',
          estimatedMinutes: 30,
          materials: [
            '3 fresh or frozen strawberries',
            'Ziploc sandwich bag',
            '2 tsp dish soap & 1/2 tsp salt',
            '1/2 cup warm water',
            'Coffee filter & small glass',
            'Chilled rubbing alcohol (isopropyl 70%+)',
          ],
          steps: [
            'Place strawberries in Ziploc bag with water, soap, and salt. Mash thoroughly for 2 minutes to break cell walls.',
            'Filter the strawberry puree through a coffee filter into a clear glass.',
            'Slowly pour cold rubbing alcohol down the side of the glass so it forms a clear layer on top.',
            'Watch the cloudy white strings of DNA precipitate out into the alcohol layer! Lift with a toothpick.',
          ],
          reflectionPrompt: 'What did the dish soap do to the fatty cell membranes during mashing?',
        },
        {
          id: 'exp-s6-owl-pellet',
          title: 'Virtual Lab: Owl Pellet Dissection & Food Web Rebuild',
          type: 'simulation',
          description: 'Dissect a virtual barn owl pellet, reconstruct rodent bone skeletons, and identify primary prey.',
          url: 'https://www.naturewatch.ca/virtual-owl-pellet-dissection/',
          estimatedMinutes: 20,
          requiresParentPin: false,
          reflectionPrompt: 'What does the owl pellet contents tell us about the owl’s trophic position in its habitat?',
        },
        {
          id: 'exp-s6-backyard-bioblitz',
          title: 'Backyard BioBlitz Citizen Science Exploration',
          type: 'project',
          description: 'Step outside for 20 minutes with a notebook (or the free Seek/iNaturalist app) to document 10 different living plant and insect species.',
          estimatedMinutes: 25,
          materials: ['Outdoor magnifying glass or smartphone camera', 'Field journal & pencil'],
          steps: [
            'Find 5 different plant species (look at leaf veins, bark texture, and flower shape).',
            'Find 5 different invertebrate species (ants, worms, spiders, beetles under logs).',
            'Record notes on how each organism interacts with its abiotic surroundings.',
          ],
          reflectionPrompt: 'Which micro-habitat had the greatest species richness: under a log, in open grass, or on a tree trunk?',
        },
      ],
    },

    // UNIT 12: TEACHER RESOURCES (PARENT / TEACHER ONLY)
    {
      id: 'g6-sci-u12-teacher',
      title: 'Unit 12: Teacher Resources',
      standards: ['Teacher Reference'],
      kind: 'teacher_resources',
      lessons: [],
      resources: [
        {
          id: 'tr-s6-pacing',
          title: 'Grade 6 Life Science 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description: 'Weekly schedule for middle school biology, life science, and Ohio state ecosystem requirements.',
          body: `### Grade 6 Science 36-Week Curriculum Map
- **Weeks 1–4**: Unit 1 (Cells and Organisms)
- **Weeks 5–8**: Unit 2 (Growth and Reproduction)
- **Weeks 9–12**: Unit 3 (Matter & Energy in Organisms)
- **Weeks 13–16**: Unit 4 (Interactions in Ecosystems)
- **Weeks 17–20**: Unit 5 (Matter & Energy in Ecosystems)
- **Weeks 21–24**: Unit 6 (Biodiversity & Ecosystem Health)
- **Weeks 25–28**: Unit 7 (Inheritance and Variation)
- **Weeks 29–31**: Unit 8 (Fossils & Evidence of Evolution)
- **Weeks 32–34**: Unit 9 (Natural & Artificial Selection)
- **Weeks 35–36**: Unit 10 (Ohio Watersheds & Geology) + Citizen Science Projects`,
        },
        {
          id: 'tr-s6-standards',
          title: 'NGSS & Ohio Grade 6 Science Standards Matrix',
          kind: 'standards_map',
          description: 'Crosswalk mapping middle school science standards to each lesson and investigation.',
          body: `### Standards Crosswalk
- **MS-LS1-1, 1-2**: Cells, cell theory, organelles (Unit 1)
- **MS-LS1-4, 1-5**: Plant & animal reproductive structures (Unit 2)
- **MS-LS1-6, 1-7**: Photosynthesis and cellular respiration (Unit 3)
- **MS-LS2-1, 2-2**: Symbiosis, competition, and food webs (Unit 4)
- **MS-LS2-3**: Energy pyramids and biogeochemical cycles (Unit 5)
- **MS-LS2-4, 2-5**: Biodiversity and ecosystem services (Unit 6)
- **MS-LS3-1, 3-2**: DNA, chromosomes, Punnett squares, and mutations (Unit 7)
- **MS-LS4-1, 4-2, 4-3**: Fossils and homologous anatomy (Unit 8)
- **MS-LS4-4, 4-5**: Natural selection and selective breeding (Unit 9)
- **OH.6.ESS.1 & OH.6.LS.1**: Lake Erie watersheds and Ohio glacial geology (Unit 10)`,
        },
        {
          id: 'tr-s6-safety',
          title: 'Homeschool Laboratory Safety Guide & Observation Log',
          kind: 'printable',
          description: 'Printable safety rules for kitchen experiments, microscopes, and outdoor field sampling.',
          body: `### Laboratory Safety Principles
- Always wear safety goggles or glasses during liquid chemical or alcohol extractions.
- Wash hands thoroughly after handling soil, plants, or pond water samples.
- Never taste or consume materials used during scientific investigations.
- Store rubbing alcohol away from heat sources and open flames.`,
        },
      ],
    },
  ],
}
