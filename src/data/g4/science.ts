import { Course, Principle } from '../../types'

// Principles for Grade 4 Science
const G4_SCI_ENERGY_PRINCIPLE: Principle = {
  id: 'p-g4-sci-energy',
  title: 'Kinetic vs. Potential Energy & Collisions',
  standard: '4-PS3-1',
  summary: 'Faster objects carry more kinetic energy; energy changes form during motion and collisions.',
  bank: [
    {
      id: 'g4-sci-en-1',
      type: 'mc',
      prompt: 'How does faster speed change a rolling ball’s kinetic energy?',
      choices: ['It has more kinetic energy.', 'It has less kinetic energy.', 'Its kinetic energy stays zero.', 'Its mass disappears.'],
      answer: 'It has more kinetic energy.',
      explanation: 'Kinetic energy is the energy of motion. Faster objects carry more kinetic energy.',
    },
    {
      id: 'g4-sci-en-2',
      type: 'mc',
      prompt: 'What energy is stored in a car stopped on a high hill?',
      choices: ['Gravitational potential energy', 'Sound energy', 'Kinetic energy', 'Light energy'],
      answer: 'Gravitational potential energy',
      explanation: 'Potential energy is stored energy. Height above the ground stores gravitational potential energy.',
    },
    {
      id: 'g4-sci-en-3',
      type: 'mc',
      prompt: 'What happens to energy when two rolling marbles collide and click?',
      choices: ['Energy transfers and makes sound and heat.', 'All energy disappears forever.', 'New energy is created from nothing.', 'The marbles double in weight.'],
      answer: 'Energy transfers and makes sound and heat.',
      explanation: 'Energy cannot be destroyed. During a collision, motion energy transfers or turns into sound and heat.',
    },
    {
      id: 'g4-sci-en-4',
      type: 'mc',
      prompt: 'A kitchen toaster changes electrical energy mainly into what form?',
      choices: ['Thermal heat and light energy', 'Gravitational potential energy', 'Nuclear energy', 'Wind energy'],
      answer: 'Thermal heat and light energy',
      explanation: 'Thermal energy is heat energy. A toaster turns electricity into heat and glowing light.',
    },
    {
      id: 'g4-sci-en-5',
      type: 'mc',
      prompt: 'Four identical balls roll. Which ball has the most kinetic energy?',
      choices: ['The ball moving 20 meters per second', 'The ball moving 5 meters per second', 'The ball sitting still', 'The ball moving 10 meters per second'],
      answer: 'The ball moving 20 meters per second',
      explanation: 'When objects have the same mass, the fastest one has the most kinetic energy.',
    },
    {
      id: 'g4-sci-en-6',
      type: 'mc',
      prompt: 'What type of energy is stored in a stretched rubber band?',
      choices: ['Elastic potential energy', 'Sound energy', 'Thermal energy', 'Light energy'],
      answer: 'Elastic potential energy',
      explanation: 'Elastic potential energy is stored when an object is stretched or compressed.',
    },
  ],
}

const G4_SCI_CIRCUITS_PRINCIPLE: Principle = {
  id: 'p-g4-sci-circuits',
  title: 'Electric Circuits, Conductors & Insulators',
  standard: '4-PS3-2',
  summary: 'Electric current flows in closed loops; metals conduct electricity while rubber and plastic insulate.',
  bank: [
    {
      id: 'g4-sci-cir-1',
      type: 'mc',
      prompt: 'What kind of path must electric current have to light a bulb?',
      choices: ['A closed, complete circuit', 'An open, broken loop', 'A tangled, cut wire', 'A path without a battery'],
      answer: 'A closed, complete circuit',
      explanation: 'Electric current can only flow when there is an unbroken, closed loop from power back to source.',
    },
    {
      id: 'g4-sci-cir-2',
      type: 'mc',
      prompt: 'Which material is a good electrical conductor?',
      choices: ['Copper wire', 'Plastic straw', 'Rubber band', 'Dry wooden stick'],
      answer: 'Copper wire',
      explanation: 'Conductors allow electric charges to flow easily. Most metals like copper are good conductors.',
    },
    {
      id: 'g4-sci-cir-3',
      type: 'mc',
      prompt: 'Why are electrical cords wrapped in plastic or rubber coating?',
      choices: ['Rubber is an electrical insulator for safety.', 'Rubber conducts electricity faster.', 'Rubber makes electricity colder.', 'Rubber turns electricity into light.'],
      answer: 'Rubber is an electrical insulator for safety.',
      explanation: 'Insulators resist electrical flow, protecting people from electrical shocks.',
    },
    {
      id: 'g4-sci-cir-4',
      type: 'mc',
      prompt: 'What happens when a light switch is turned off?',
      choices: ['The circuit opens, stopping current flow.', 'The circuit closes tightly.', 'The wires double in thickness.', 'The battery gets hotter instantly.'],
      answer: 'The circuit opens, stopping current flow.',
      explanation: 'Turning off a switch opens the circuit, breaking the electrical path and turning off the light.',
    },
    {
      id: 'g4-sci-cir-5',
      type: 'mc',
      prompt: 'Which device supplies electrical energy to a handheld flashlight?',
      choices: ['A chemical battery', 'A light bulb', 'A plastic lens', 'A copper switch'],
      answer: 'A chemical battery',
      explanation: 'A battery stores chemical energy and converts it into electrical energy to power devices.',
    },
    {
      id: 'g4-sci-cir-6',
      type: 'mc',
      prompt: 'Which object acts as an insulator?',
      choices: ['Glass rod', 'Iron nail', 'Aluminum foil', 'Silver spoon'],
      answer: 'Glass rod',
      explanation: 'Glass, plastic, rubber, and dry wood are common electrical insulators that do not conduct current easily.',
    },
  ],
}

const G4_SCI_WAVES_PRINCIPLE: Principle = {
  id: 'p-g4-sci-waves',
  title: 'Wave Properties: Amplitude, Wavelength & Sound',
  standard: '4-PS4-1',
  summary: 'Waves transfer energy; amplitude measures height/volume and wavelength measures crest distance.',
  bank: [
    {
      id: 'g4-sci-wv-1',
      type: 'mc',
      prompt: 'What do ocean waves carry across the water toward shore?',
      choices: ['Energy while water bobs in place', 'The same water drops across oceans', 'Only heavy rocks', 'Gravity and air'],
      answer: 'Energy while water bobs in place',
      explanation: 'A wave is a pattern of motion that carries energy, while water mostly moves up and down.',
    },
    {
      id: 'g4-sci-wv-2',
      type: 'mc',
      prompt: 'What is the distance from one wave crest to the next crest?',
      choices: ['Wavelength', 'Amplitude', 'Trough', 'Pitch'],
      answer: 'Wavelength',
      explanation: 'Wavelength is the distance between two matching points on consecutive waves, such as crest to crest.',
    },
    {
      id: 'g4-sci-wv-3',
      type: 'mc',
      prompt: 'How does a larger amplitude change a sound wave?',
      choices: ['The sound is louder.', 'The sound is quieter.', 'The sound stops moving.', 'The sound turns into light.'],
      answer: 'The sound is louder.',
      explanation: 'Amplitude is wave height from the resting line. Greater amplitude carries more energy and makes louder sound.',
    },
    {
      id: 'g4-sci-wv-4',
      type: 'mc',
      prompt: 'What is the lowest point of a wave called?',
      choices: ['Trough', 'Crest', 'Amplitude', 'Midpoint'],
      answer: 'Trough',
      explanation: 'The crest is the highest peak of a wave, and the trough is the lowest valley.',
    },
    {
      id: 'g4-sci-wv-5',
      type: 'mc',
      prompt: 'How do our eyes see a book that makes no light?',
      choices: ['Light reflects off the book into eyes.', 'Eyes shoot light beams out.', 'The book absorbs all light.', 'Sound bounces off the pages.'],
      answer: 'Light reflects off the book into eyes.',
      explanation: 'Reflection happens when light bounces off an object and enters our eyes so we can see it.',
    },
    {
      id: 'g4-sci-wv-6',
      type: 'mc',
      prompt: 'Wave A is taller than Wave B. Which wave carries more energy?',
      choices: ['Wave A because its amplitude is larger', 'Wave B because it is shorter', 'Both carry zero energy', 'Both have the same amplitude'],
      answer: 'Wave A because its amplitude is larger',
      explanation: 'Taller waves have greater amplitude and transfer more energy than shorter waves.',
    },
  ],
}

const G4_SCI_EARTH_PRINCIPLE: Principle = {
  id: 'p-g4-sci-earth',
  title: 'Weathering, Erosion & Deposition',
  standard: '4-ESS2-1',
  summary: 'Weathering breaks rocks down, erosion moves sediment, and deposition drops it in new locations.',
  bank: [
    {
      id: 'g4-sci-er-1',
      type: 'mc',
      prompt: 'How is weathering different from erosion?',
      choices: ['Weathering breaks rock; erosion moves it.', 'Erosion breaks rock; weathering moves it.', 'Weathering only happens in summer.', 'They mean the exact same thing.'],
      answer: 'Weathering breaks rock; erosion moves it.',
      explanation: 'Weathering breaks rocks into smaller pieces in place. Erosion carries those pieces to new places.',
    },
    {
      id: 'g4-sci-er-2',
      type: 'mc',
      prompt: 'Water freezes inside a rock crack and splits it. What process is this?',
      choices: ['Ice wedging weathering', 'Volcanic eruption', 'Sand dune deposition', 'Photosynthesis'],
      answer: 'Ice wedging weathering',
      explanation: 'Ice wedging is physical weathering where freezing water expands and cracks rock apart.',
    },
    {
      id: 'g4-sci-er-3',
      type: 'mc',
      prompt: 'How do grass and tree roots help steep hillsides during heavy rain?',
      choices: ['Roots hold soil and stop erosion.', 'Leaves make soil slide faster.', 'Trees stop rain from falling.', 'Roots turn dirt into lava.'],
      answer: 'Roots hold soil and stop erosion.',
      explanation: 'Plant roots anchor soil in place so rainwater cannot easily wash it away.',
    },
    {
      id: 'g4-sci-er-4',
      type: 'mc',
      prompt: 'What forms when a slowing river drops mud and sand at the ocean?',
      choices: ['A river delta from deposition', 'A mountain glacier', 'An earthquake fault', 'A deep volcano'],
      answer: 'A river delta from deposition',
      explanation: 'Deposition is the dropping of sediment when wind or water slows down, building landforms like deltas.',
    },
    {
      id: 'g4-sci-er-5',
      type: 'mc',
      prompt: 'How do growing tree roots crack a concrete sidewalk over time?',
      choices: ['Thickening roots push the concrete apart.', 'Roots melt concrete with heat.', 'Roots glue cracks together.', 'Roots never touch concrete.'],
      answer: 'Thickening roots push the concrete apart.',
      explanation: 'Biological weathering happens when living things like growing tree roots wedge rock or pavement apart.',
    },
    {
      id: 'g4-sci-er-6',
      type: 'mc',
      prompt: 'What natural force carved the Grand Canyon over millions of years?',
      choices: ['Erosion by the flowing Colorado River', 'A single meteor crash', 'Ocean waves last week', 'Campfires on the rim'],
      answer: 'Erosion by the flowing Colorado River',
      explanation: 'Moving river water weathers and erodes rock layers over millions of years to carve deep canyons.',
    },
  ],
}

const G4_SCI_FOSSILS_PRINCIPLE: Principle = {
  id: 'p-g4-sci-fossils',
  title: 'Rock Layers, Fossils & Earth History',
  standard: '4-ESS1-1',
  summary: 'Rock layers and fossils show how landscapes and life changed over geologic time.',
  bank: [
    {
      id: 'g4-sci-fos-1',
      type: 'mc',
      prompt: 'Where is the oldest rock layer in an undisturbed canyon wall?',
      choices: ['At the very bottom layer', 'At the very top layer', 'In the middle layer', 'Every layer is the same age'],
      answer: 'At the very bottom layer',
      explanation: 'Sedimentary layers form from bottom to top, so the lowest layer was laid down first.',
    },
    {
      id: 'g4-sci-fos-2',
      type: 'mc',
      prompt: 'What do seashell fossils on a high mountain prove about its past?',
      choices: ['An ancient ocean once covered the land.', 'Clams can climb dry mountains.', 'Wind blew heavy shells uphill yesterday.', 'Mountains never change over time.'],
      answer: 'An ancient ocean once covered the land.',
      explanation: 'Fossils are preserved remains of ancient life. Marine fossils on mountains show the rock formed underwater.',
    },
    {
      id: 'g4-sci-fos-3',
      type: 'mc',
      prompt: 'What kind of rock usually contains fossils?',
      choices: ['Sedimentary rock', 'Liquid magma', 'Pure iron metal', 'Diamond crystal'],
      answer: 'Sedimentary rock',
      explanation: 'Sedimentary rocks form from settled sand and mud that gently bury and preserve organic remains.',
    },
    {
      id: 'g4-sci-fos-4',
      type: 'mc',
      prompt: 'What can fossil dinosaur footprints teach paleontologists?',
      choices: ['How the dinosaur moved and walked', 'The color of the dinosaur’s eyes', 'What song the dinosaur sang', 'The exact day it was born'],
      answer: 'How the dinosaur moved and walked',
      explanation: 'Trace fossils like footprints reveal how an animal moved, its speed, and whether it travelled in groups.',
    },
    {
      id: 'g4-sci-fos-5',
      type: 'mc',
      prompt: 'What happens when mud hardens around a buried leaf that rots away?',
      choices: ['It forms a mold fossil imprint.', 'It creates an active volcano.', 'It grows into an oak tree.', 'The mud turns into liquid oil.'],
      answer: 'It forms a mold fossil imprint.',
      explanation: 'A mold fossil forms when an organism leaves a hollow impression in hardening rock or sediment.',
    },
    {
      id: 'g4-sci-fos-6',
      type: 'mc',
      prompt: 'Why are recent fossils found near the surface and older ones deeper?',
      choices: ['Newer sediment layers settle on top.', 'Older fossils float up slowly.', 'Wind buries rocks from below.', 'Rain turns rocks upside down.'],
      answer: 'Newer sediment layers settle on top.',
      explanation: 'The law of superposition states that younger rock layers are deposited on top of older layers.',
    },
  ],
}

const G4_SCI_PLANT_STRUCTURES_PRINCIPLE: Principle = {
  id: 'p-g4-sci-plant-struct',
  title: 'Internal & External Plant Structures',
  standard: '4-LS1-1',
  summary: 'Roots, xylem, stems, stomata, and flowers support plant survival, growth, and reproduction.',
  bank: [
    {
      id: 'g4-sci-pl-1',
      type: 'mc',
      prompt: 'What do xylem tubes inside a plant stem do?',
      choices: ['Carry water upward from roots to leaves', 'Catch insects for food', 'Make flower petals glow', 'Block sunlight from leaves'],
      answer: 'Carry water upward from roots to leaves',
      explanation: 'Xylem is internal plant tissue that transports water and minerals up from the roots.',
    },
    {
      id: 'g4-sci-pl-2',
      type: 'mc',
      prompt: 'Which plant part uses sunlight to make food during photosynthesis?',
      choices: ['Green leaves', 'Underground root tips', 'Dry outer bark', 'Hard seed coats'],
      answer: 'Green leaves',
      explanation: 'Photosynthesis happens in green leaves, which use sunlight, water, and carbon dioxide to make sugar.',
    },
    {
      id: 'g4-sci-pl-3',
      type: 'mc',
      prompt: 'What are the tiny pores on leaves that let gases in and out?',
      choices: ['Stomata', 'Petals', 'Roots', 'Thorns'],
      answer: 'Stomata',
      explanation: 'Stomata are microscopic openings on leaves that take in carbon dioxide and release oxygen.',
    },
    {
      id: 'g4-sci-pl-4',
      type: 'mc',
      prompt: 'Why do desert cacti have waxy stems and sharp spines?',
      choices: ['To store water and stop animals eating them', 'To help the cactus swim', 'To lose water very quickly', 'To attract hungry deer'],
      answer: 'To store water and stop animals eating them',
      explanation: 'Adaptations are structures that help survival. Waxy stems hold water and spines protect the cactus.',
    },
    {
      id: 'g4-sci-pl-5',
      type: 'mc',
      prompt: 'What is the main function of brightly colored flower petals?',
      choices: ['Attract insect and bird pollinators', 'Absorb groundwater from deep soil', 'Store starch during winter', 'Provide shade for roots'],
      answer: 'Attract insect and bird pollinators',
      explanation: 'Colorful petals and sweet nectar attract pollinators like bees, which help plants reproduce.',
    },
    {
      id: 'g4-sci-pl-6',
      type: 'mc',
      prompt: 'How do root hairs help a plant absorb more water?',
      choices: ['They increase root surface area.', 'They poison competing weeds.', 'They shade the ground from sunlight.', 'They produce fragrant perfume.'],
      answer: 'They increase root surface area.',
      explanation: 'Root hairs expand the total surface area of roots, allowing them to absorb more water and minerals.',
    },
  ],
}

const G4_SCI_ANIMAL_SENSES_PRINCIPLE: Principle = {
  id: 'p-g4-sci-animal-senses',
  title: 'Animal Sensory Structures & Information Processing',
  standard: '4-LS1-2',
  summary: 'Sensory receptors receive environmental signals and send nerve messages to the brain.',
  bank: [
    {
      id: 'g4-sci-as-1',
      type: 'mc',
      prompt: 'What structure lets fish breathe oxygen dissolved in water?',
      choices: ['Gills', 'Lungs', 'Feathers', 'Tree bark'],
      answer: 'Gills',
      explanation: 'Gills are feathery organs that absorb dissolved oxygen as water flows over them.',
    },
    {
      id: 'g4-sci-as-2',
      type: 'mc',
      prompt: 'How do hollow, lightweight bones help birds survive?',
      choices: ['They make the bird light enough to fly.', 'They help the bird sink underwater.', 'They store heavy rocks.', 'They stop the bird from breathing.'],
      answer: 'They make the bird light enough to fly.',
      explanation: 'Hollow bones are strong but light, reducing body weight so flying takes less energy.',
    },
    {
      id: 'g4-sci-as-3',
      type: 'mc',
      prompt: 'What organ processes sensory signals and tells animals how to react?',
      choices: ['The brain', 'The stomach', 'The claws', 'The outer fur'],
      answer: 'The brain',
      explanation: 'Sensory receptors send nerve signals to the brain, which processes information and controls responses.',
    },
    {
      id: 'g4-sci-as-4',
      type: 'mc',
      prompt: 'How do large, movable ears help a nocturnal rabbit survive?',
      choices: ['Hear quiet predator footsteps in the dark', 'Absorb sunlight for photosynthesis', 'Store extra food for winter', 'Fly away from snakes'],
      answer: 'Hear quiet predator footsteps in the dark',
      explanation: 'Large outer ears cup sound waves, helping prey animals detect predators even in darkness.',
    },
    {
      id: 'g4-sci-as-5',
      type: 'mc',
      prompt: 'What is the hard outer shell that protects a beetle or crab?',
      choices: ['An exoskeleton', 'An internal spine', 'A fur coat', 'A soft scale'],
      answer: 'An exoskeleton',
      explanation: 'An exoskeleton is an external skeleton that provides structural support and armor for arthropods.',
    },
    {
      id: 'g4-sci-as-6',
      type: 'mc',
      prompt: 'What happens when a child accidentally touches a hot stove?',
      choices: ['Nerves send signals to pull away fast.', 'The brain tells fingers to stay hot.', 'The eyes close and muscles relax.', 'The skin turns into bone.'],
      answer: 'Nerves send signals to pull away fast.',
      explanation: 'Pain receptors detect excessive heat and trigger an automatic reflex to pull the hand away to prevent injury.',
    },
  ],
}

const G4_SCI_OHIO_GEOLOGY_PRINCIPLE: Principle = {
  id: 'p-g4-sci-ohio-geo',
  title: 'Ohio Fossils, Glacial Landforms & Waterways',
  standard: 'OH.4.ESS.1',
  summary: 'Ice Age glaciers flattened northern/western Ohio, formed Lake Erie, and exposed ancient marine fossils.',
  bank: [
    {
      id: 'g4-sci-oh-1',
      type: 'mc',
      prompt: 'How did Ice Age glaciers change western and northern Ohio’s land?',
      choices: ['They flattened hills and left rich soil.', 'They built active volcanoes.', 'They turned Ohio into a desert.', 'They created tropical coral reefs.'],
      answer: 'They flattened hills and left rich soil.',
      explanation: 'Glaciers are giant ice sheets that scraped across Ohio, flattening hills and depositing fertile glacial till.',
    },
    {
      id: 'g4-sci-oh-2',
      type: 'mc',
      prompt: 'What is Ohio’s official state invertebrate fossil from ancient seas?',
      choices: ['Isotelus, a marine trilobite', 'Tyrannosaurus rex', 'Woolly mammoth tooth', 'Giant redwood leaf'],
      answer: 'Isotelus, a marine trilobite',
      explanation: 'Isotelus is an extinct ocean arthropod called a trilobite, proving warm seas once covered Ohio.',
    },
    {
      id: 'g4-sci-oh-3',
      type: 'mc',
      prompt: 'Why does southeastern Ohio have steep hills instead of flat plains?',
      choices: ['Glaciers stopped before reaching southeastern Ohio.', 'Volcanoes erupted there last year.', 'Ocean tides carved the hills yesterday.', 'Sand dunes covered the forests.'],
      answer: 'Glaciers stopped before reaching southeastern Ohio.',
      explanation: 'The unglaciated Allegheny Plateau in southeastern Ohio was not flattened by Ice Age glaciers.',
    },
    {
      id: 'g4-sci-oh-4',
      type: 'mc',
      prompt: 'How was the basin of Lake Erie formed?',
      choices: ['Glaciers scooped out soft bedrock.', 'A meteor hit Cleveland.', 'Beavers built a giant dam.', 'Lava dammed the Ohio River.'],
      answer: 'Glaciers scooped out soft bedrock.',
      explanation: 'Advancing glaciers carved deep basins into soft rock, which filled with meltwater to form the Great Lakes.',
    },
    {
      id: 'g4-sci-oh-5',
      type: 'mc',
      prompt: 'Where can you see deep grooves scraped into limestone by glaciers in Ohio?',
      choices: ['Kelleys Island in Lake Erie', 'The bottom of the Atlantic Ocean', 'The Sahara Desert', 'Inside a glass greenhouse'],
      answer: 'Kelleys Island in Lake Erie',
      explanation: 'Glacial grooves are deep scratches cut into bedrock by rocks frozen in moving glacier ice.',
    },
    {
      id: 'g4-sci-oh-6',
      type: 'mc',
      prompt: 'What do coral fossils in Ohio limestone tell scientists?',
      choices: ['Ohio was once covered by a warm sea.', 'Ohio was always frozen solid.', 'Coral grows on dry oak trees.', 'Limestone forms from melted plastic.'],
      answer: 'Ohio was once covered by a warm sea.',
      explanation: 'Corals live in shallow, warm ocean water, so their fossils show Ohio’s ancient environment.',
    },
  ],
}

export const G4_SCIENCE_COURSE: Course = {
  id: 'g4-science',
  subject: 'science',
  grade: 4,
  title: 'Grade 4 Science',
  subtitle: 'Energy, Waves, Earth History, Plant & Animal Structures, and Ohio Geology',
  credits: 1.0,
  color: '#059669',
  icon: '⚡',
  units: [
    // UNIT 1: Energy & speed
    {
      id: 'g4-sci-u1',
      title: 'Unit 1: Energy, Speed & Collisions',
      standards: ['4-PS3-1', '4-PS3-3'],
      lessons: [
        {
          id: 'g4-sci-u1-l1',
          unitId: 'g4-sci-u1',
          title: 'Lesson 1: Kinetic vs. Potential Energy',
          kind: 'lesson',
          partOf: 'Kinetic & Potential Energy',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:energy/x811560f84ea0445d:speed-and-energy/v/energy-and-motion',
          videoTitle: 'Khan Academy: Speed and Energy',
          reading:
            'Kinetic energy is the energy of moving objects. The faster an object moves, the more kinetic energy it possesses. Potential energy is stored energy waiting to be released, such as an object held high up.',
          principles: [G4_SCI_ENERGY_PRINCIPLE],
        },
        {
          id: 'g4-sci-u1-l2',
          unitId: 'g4-sci-u1',
          title: 'Lesson 2: Collisions and Energy Transfer',
          kind: 'lesson',
          partOf: 'Collisions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:energy/x811560f84ea0445d:energy-transfer-and-collisions/v/energy-transfer-in-collisions',
          videoTitle: 'Khan Academy: Energy Transfer in Collisions',
          reading:
            'When two objects bump into each other during a collision, energy transfers from one object to the other. Some kinetic energy changes into sound and thermal heat energy.',
          principles: [G4_SCI_ENERGY_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Energy transfer & circuits
    {
      id: 'g4-sci-u2',
      title: 'Unit 2: Electricity, Circuits & Conductors',
      standards: ['4-PS3-2', '4-PS3-4'],
      lessons: [
        {
          id: 'g4-sci-u2-l1',
          unitId: 'g4-sci-u2',
          title: 'Lesson 1: Closed vs. Open Electric Circuits',
          kind: 'lesson',
          partOf: 'Circuits',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:energy/x811560f84ea0445d:energy-transfer/v/circuits-and-electricity',
          videoTitle: 'Khan Academy: Electric Circuits',
          reading:
            'Electricity needs an unbroken loop called a closed circuit to flow. If there is a break or open switch anywhere in the path, electric current stops flowing immediately.',
          principles: [G4_SCI_CIRCUITS_PRINCIPLE],
        },
        {
          id: 'g4-sci-u2-l2',
          unitId: 'g4-sci-u2',
          title: 'Lesson 2: Conductors and Insulators',
          kind: 'lesson',
          partOf: 'Conductors & Insulators',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:energy/x811560f84ea0445d:energy-transfer/v/conductors-and-insulators',
          videoTitle: 'Khan Academy: Conductors and Insulators',
          reading:
            'Conductors (like copper, aluminum, and steel) let electricity pass easily. Insulators (like rubber, plastic, and glass) resist electricity and protect us from harm.',
          principles: [G4_SCI_CIRCUITS_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Waves and information transfer
    {
      id: 'g4-sci-u3',
      title: 'Unit 3: Waves, Amplitude & Information Transfer',
      standards: ['4-PS4-1', '4-PS4-2', '4-PS4-3'],
      lessons: [
        {
          id: 'g4-sci-u3-l1',
          unitId: 'g4-sci-u3',
          title: 'Lesson 1: Wave Wavelength and Amplitude',
          kind: 'lesson',
          partOf: 'Wave Properties',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:waves/x811560f84ea0445d:wave-properties/v/properties-of-waves',
          videoTitle: 'Khan Academy: Properties of Waves',
          reading:
            'Waves travel in repeating patterns. Amplitude is the height of the wave crest above resting water, while wavelength is the horizontal distance between two consecutive peaks.',
          principles: [G4_SCI_WAVES_PRINCIPLE],
        },
        {
          id: 'g4-sci-u3-l2',
          unitId: 'g4-sci-u3',
          title: 'Lesson 2: Sound Energy & Light Reflection',
          kind: 'lesson',
          partOf: 'Light and Sound',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:waves/x811560f84ea0445d:light-and-vision/v/light-reflection-and-vision',
          videoTitle: 'Khan Academy: Light and Vision',
          reading:
            'Sound is vibration moving through matter. We see non-glowing objects because light from a source reflects off surfaces directly into our eyes.',
          principles: [G4_SCI_WAVES_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: Weathering and erosion
    {
      id: 'g4-sci-u4',
      title: 'Unit 4: Weathering, Erosion & Deposition',
      standards: ['4-ESS2-1', '4-ESS2-2'],
      lessons: [
        {
          id: 'g4-sci-u4-l1',
          unitId: 'g4-sci-u4',
          title: 'Lesson 1: Physical & Chemical Weathering',
          kind: 'lesson',
          partOf: 'Weathering',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:earths-systems/x811560f84ea0445d:weathering-and-erosion/v/weathering-and-erosion',
          videoTitle: 'Khan Academy: Weathering vs Erosion',
          reading:
            'Weathering is the breakdown of rock at Earth’s surface by ice wedging, rushing water, windblown sand, or plant roots prying cracks apart.',
          principles: [G4_SCI_EARTH_PRINCIPLE],
        },
        {
          id: 'g4-sci-u4-l2',
          unitId: 'g4-sci-u4',
          title: 'Lesson 2: Erosion, River Deposition & Soil',
          kind: 'lesson',
          partOf: 'Erosion and Deposition',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:earths-systems/x811560f84ea0445d:weathering-and-erosion/v/deposition-and-landforms',
          videoTitle: 'Khan Academy: Deposition and Landforms',
          reading:
            'Erosion transports weathered rock sediments away via water, wind, or glaciers. When moving water slows down, deposition drops the sediments to build sandbars and deltas.',
          principles: [G4_SCI_EARTH_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Rock layers and fossils
    {
      id: 'g4-sci-u5',
      title: 'Unit 5: Sedimentary Rock Layers & Fossils',
      standards: ['4-ESS1-1'],
      lessons: [
        {
          id: 'g4-sci-u5-l1',
          unitId: 'g4-sci-u5',
          title: 'Lesson 1: Sedimentary Rock Layers & Superposition',
          kind: 'lesson',
          partOf: 'Rock Layers',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:earths-systems/x811560f84ea0445d:rock-layers-and-fossils/v/sedimentary-rock-layers',
          videoTitle: 'Khan Academy: Sedimentary Rock Layers',
          reading:
            'Sedimentary rocks form in horizontal layers over millions of years. In undisturbed strata, the oldest rock layer is on the bottom and younger layers lie on top.',
          principles: [G4_SCI_FOSSILS_PRINCIPLE],
        },
        {
          id: 'g4-sci-u5-l2',
          unitId: 'g4-sci-u5',
          title: 'Lesson 2: Fossils as Clues to Ancient Environments',
          kind: 'lesson',
          partOf: 'Fossil Clues',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:earths-systems/x811560f84ea0445d:rock-layers-and-fossils/v/fossils-and-past-environments',
          videoTitle: 'Khan Academy: Fossils and Ancient Environments',
          reading:
            'Fossils provide evidence of past organisms and climates. Finding marine shell fossils high in mountain rocks reveals that the land was once submerged under ancient ocean water.',
          principles: [G4_SCI_FOSSILS_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Plant internal and external structures
    {
      id: 'g4-sci-u6',
      title: 'Unit 6: Plant Internal & External Structures',
      standards: ['4-LS1-1'],
      lessons: [
        {
          id: 'g4-sci-u6-l1',
          unitId: 'g4-sci-u6',
          title: 'Lesson 1: Roots, Stems & Xylem Transport',
          kind: 'lesson',
          partOf: 'Roots & Stems',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:structure-and-function/x811560f84ea0445d:plant-structures/v/plant-structures-roots-and-stems',
          videoTitle: 'Khan Academy: Plant Structures',
          reading:
            'Roots anchor plants in soil and absorb groundwater through fine root hairs. Internal vascular xylem tubes carry water and minerals upwards to stems and leaves.',
          principles: [G4_SCI_PLANT_STRUCTURES_PRINCIPLE],
        },
        {
          id: 'g4-sci-u6-l2',
          unitId: 'g4-sci-u6',
          title: 'Lesson 2: Leaves, Stomata & Photosynthesis',
          kind: 'lesson',
          partOf: 'Leaves & Stomata',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:structure-and-function/x811560f84ea0445d:plant-structures/v/leaves-and-photosynthesis',
          videoTitle: 'Khan Academy: Leaves and Photosynthesis',
          reading:
            'Green leaves contain chlorophyll to capture sunlight for photosynthesis. Microscopic stomata pores open and close to exchange carbon dioxide and oxygen gases.',
          principles: [G4_SCI_PLANT_STRUCTURES_PRINCIPLE],
        },
      ],
    },

    // UNIT 7: Animal sensory structures & brain
    {
      id: 'g4-sci-u7',
      title: 'Unit 7: Animal Senses & Information Processing',
      standards: ['4-LS1-1', '4-LS1-2'],
      lessons: [
        {
          id: 'g4-sci-u7-l1',
          unitId: 'g4-sci-u7',
          title: 'Lesson 1: Animal Sense Receptors & Organs',
          kind: 'lesson',
          partOf: 'Sensory Organs',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:structure-and-function/x811560f84ea0445d:animal-structures-and-senses/v/animal-senses',
          videoTitle: 'Khan Academy: Animal Senses and Survival',
          reading:
            'Animals have specialized sense organs (eyes, ears, antennae, skin receptors) that detect light, sound, odors, and touch in their environment to locate food and avoid predators.',
          principles: [G4_SCI_ANIMAL_SENSES_PRINCIPLE],
        },
        {
          id: 'g4-sci-u7-l2',
          unitId: 'g4-sci-u7',
          title: 'Lesson 2: Nerve Signals and Brain Responses',
          kind: 'lesson',
          partOf: 'Information Processing',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/science/grade-4-science/x811560f84ea0445d:structure-and-function/x811560f84ea0445d:animal-structures-and-senses/v/how-the-brain-processes-sensory-information',
          videoTitle: 'Khan Academy: Brain and Sensory Information',
          reading:
            'Nerves carry electrical signals from sensory receptors to the brain. The brain interprets signals, recalls past memories, and commands muscles to respond rapidly.',
          principles: [G4_SCI_ANIMAL_SENSES_PRINCIPLE],
        },
      ],
    },

    // UNIT 8: Ohio geology and glacial landforms
    {
      id: 'g4-sci-u8',
      title: 'Unit 8: Ohio Geology, Fossils & Landforms',
      isOhioExtension: true,
      standards: ['OH.4.ESS.1'],
      lessons: [
        {
          id: 'g4-sci-u8-l1',
          unitId: 'g4-sci-u8',
          title: 'Lesson 1: Ohio Ancient Seas & Trilobite Fossils',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Ohio Ancient Seas',
          estimatedMinutes: 10,
          videoUrl: 'https://ohiodnr.gov/discover-and-learn/rock-minerals-fossils/fossils-in-ohio/isotelus-state-fossil',
          videoTitle: 'Ohio DNR: Isotelus Trilobite and Ohio Ancient Seas',
          reading:
            'Hundreds of millions of years ago, warm shallow inland seas covered Ohio. Marine animals like the Isotelus trilobite and horn corals were preserved in Ohio limestone bedrock.',
          principles: [G4_SCI_OHIO_GEOLOGY_PRINCIPLE],
        },
        {
          id: 'g4-sci-u8-l2',
          unitId: 'g4-sci-u8',
          title: 'Lesson 2: Glaciers, Lake Erie & Till Plains',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Ohio Glaciation',
          estimatedMinutes: 10,
          videoUrl: 'https://ohiodnr.gov/discover-and-learn/rock-minerals-fossils/glacial-geology',
          videoTitle: 'Ohio DNR: Ice Age Glaciers in Ohio',
          reading:
            'Mile-thick Ice Age glaciers leveled western and northern Ohio, carving the Lake Erie basin and leaving rich glacial till soil, while southeastern Ohio remained unglaciated with steep hills.',
          principles: [G4_SCI_OHIO_GEOLOGY_PRINCIPLE],
        },
      ],
    },

    // UNIT 9: Explore Science Through Simulations (enrichment)
    {
      id: 'g4-sci-u9',
      title: 'Unit 9: Explore Science Through Simulations & Labs',
      kind: 'explore',
      standards: ['4-PS3-2', '4-PS4-1', '4-ESS2-1'],
      lessons: [],
      exploreItems: [
        {
          id: 'g4-sci-exp-phet-circuit',
          title: 'PhET Simulation: Circuit Construction Kit DC',
          type: 'simulation',
          description:
            'Build real circuits with virtual batteries, light bulbs, switches, copper wires, and test materials like coins and erasers to see what conducts electricity.',
          url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html',
          estimatedMinutes: 25,
          reflectionPrompt: 'Which tested household object conducted electricity best in your circuit?',
          requiresParentPin: false,
        },
        {
          id: 'g4-sci-exp-phet-wave',
          title: 'PhET Simulation: Wave on a String',
          type: 'simulation',
          description:
            'Wiggle a virtual string to create waves. Adjust amplitude and frequency sliders to observe how crests and wavelengths respond in slow motion.',
          url: 'https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'What happened to the wave height when you increased the amplitude slider?',
          requiresParentPin: false,
        },
        {
          id: 'g4-sci-exp-kitchen-stream',
          title: 'Kitchen Science Lab: Baking Pan Stream Table',
          type: 'hands_on',
          description:
            'Build a mini river stream table using sand, soil, and a baking pan to observe real weathering, erosion, and delta deposition.',
          estimatedMinutes: 30,
          materials: ['Aluminum baking pan or tray', 'Sand or garden soil', 'Cup with small hole or watering cup', 'Books to tilt the pan'],
          steps: [
            'Pile moist sand at one end of the baking pan and prop that end up with two books.',
            'Slowly pour water at the high end to create a flowing stream.',
            'Watch where the water carves channels (erosion) and where sand piles up at the bottom (deposition).',
            'Try placing small pebbles in the stream to see how barriers reduce erosion.',
          ],
          reflectionPrompt: 'Where did the sand land when the water slowed down at the bottom of the pan?',
          requiresParentPin: false,
        },
        {
          id: 'g4-sci-exp-fossil-mold',
          title: 'Hands-On Investigation: Clay Fossil Cast & Mold',
          type: 'hands_on',
          description:
            'Use salt dough or modeling clay and seashells or leaves to create realistic mold and cast fossils just like paleontologists find.',
          estimatedMinutes: 25,
          materials: ['Modeling clay or homemade salt dough', 'Small seashell or textured leaf', 'Flour to prevent sticking'],
          steps: [
            'Flatten a smooth disk of clay or dough on a flat surface.',
            'Firmly press the outer surface of a seashell or leaf into the clay, then carefully peel it away.',
            'Observe the mold imprint of fine ribs and veins.',
            'Let the clay dry to preserve your fossil specimen.',
          ],
          reflectionPrompt: 'How does your clay mold compare to real fossils preserved in sedimentary limestone?',
          requiresParentPin: false,
        },
      ],
    },

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g4-sci-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['4-PS', '4-LS', '4-ESS'],
      lessons: [],
      resources: [
        {
          id: 'g4-sci-res-pacing',
          title: 'Grade 4 Science 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Week-by-week instructional roadmap aligning hands-on investigations, PhET simulations, and NGSS/Ohio standards.',
          body: `## Grade 4 Science Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Energy, Speed & Collisions (4-PS3-1, 4-PS3-3)
- **Weeks 5–8**: Unit 2 — Electricity, Circuits & Conductors (4-PS3-2, 4-PS3-4)
- **Weeks 9–12**: Unit 3 — Waves, Amplitude & Information Transfer (4-PS4-1 to 3)
- **Week 13**: Quarter 1 Physical Science Assessment & Lab Review
- **Weeks 14–18**: Unit 4 — Weathering, Erosion & Deposition (4-ESS2-1, 4-ESS2-2)
- **Weeks 19–22**: Unit 5 — Sedimentary Rock Layers & Fossils (4-ESS1-1)
- **Weeks 23–26**: Unit 6 — Plant Internal & External Structures (4-LS1-1)
- **Week 27**: Quarter 2 & 3 Life & Earth Science Review
- **Weeks 28–31**: Unit 7 — Animal Senses & Information Processing (4-LS1-2)
- **Weeks 32–34**: Unit 8 — Ohio Geology, Glacial Till & Ancient Seas (OH.4.ESS.1)
- **Weeks 35–36**: Unit 9 — Capstone Simulations & Kitchen Science Fair`,
        },
        {
          id: 'g4-sci-res-safety',
          title: 'Home Laboratory Safety & Material Checklist',
          kind: 'printable',
          description:
            'Essential kitchen science safety protocols and pantry material checklists for parents and educators.',
          body: `## Home Science Safety Guidelines

1. **Adult Supervision**: Always have an adult supervise experiments involving water pouring, glass, or batteries.
2. **Eye Protection**: Wear safety goggles or glasses during stream table and chemical reaction experiments.
3. **No Ingestion**: Never eat or taste any materials used in science investigations, even kitchen supplies.
4. **Clean Work Area**: Work on a washable tray or outdoor picnic table when testing soil, sand, and water.
5. **Battery Caution**: Never connect both battery terminals directly with bare wire without a bulb or resistor in between.`,
        },
        {
          id: 'g4-sci-res-rubric',
          title: 'Scientific Inquiry & Engineering Design Rubric',
          kind: 'assessment_rubric',
          description:
            'Scoring rubric for evaluating student lab journals, hypothesis testing, and simulation reflection questions.',
          body: `## Scientific Inquiry Rubric (4-Point Scale)

- **4 - Advanced**: Makes clear testable prediction; records precise measurements with units; explains observations using scientific concepts.
- **3 - Proficient**: Makes testable prediction; records neat observations; correctly answers all reflection prompts with supporting details.
- **2 - Developing**: Attempts prediction; records partial data; answers reflection questions with minimal explanation.
- **1 - Beginning**: Requires guided assistance to conduct steps and record basic observations.`,
        },
      ],
    },
  ],
}
