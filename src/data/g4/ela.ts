import { Course, Principle } from '../../types'

// Principles for Grade 4 ELA
const G4_ELA_MAIN_IDEA_PRINCIPLE: Principle = {
  id: 'p-g4-ela-main-idea',
  title: 'Main Idea, Inferences & Text Evidence',
  standard: 'RI.4.1',
  summary: 'Identify the main idea and supporting details, and make inferences using text evidence.',
  bank: [
    {
      id: 'g4-ela-mi-1',
      type: 'mc',
      prompt: 'What two things do you combine to make an inference while reading?',
      choices: ['Text clues and your own background knowledge', 'Only page numbers and cover art', 'Wild guesses without reading', 'Only the last word of the book'],
      answer: 'Text clues and your own background knowledge',
      explanation: 'An inference is a smart conclusion made by combining clues in the text with what you already know.',
    },
    {
      id: 'g4-ela-mi-2',
      type: 'mc',
      passage:
        'As the boat left the dock, Sofia gripped the railing with white knuckles. She stared back at the shore and swallowed hard while her brother cheered.',
      prompt: 'What can you infer about how Sofia feels on the boat?',
      choices: ['She feels nervous about leaving shore.', 'She is fast asleep.', 'She is angry at her brother.', 'She captains the boat every day.'],
      answer: 'She feels nervous about leaving shore.',
      explanation: 'Clues like white knuckles and swallowing hard show that Sofia is nervous, even without saying the word.',
    },
    {
      id: 'g4-ela-mi-3',
      type: 'mc',
      prompt: 'How do supporting details help the main idea in an article?',
      choices: ['They give facts and examples that prove it.', 'They change the topic completely.', 'They only tell jokes.', 'They replace the title.'],
      answer: 'They give facts and examples that prove it.',
      explanation: 'The main idea is the key point, and supporting details are the facts that back it up.',
    },
    {
      id: 'g4-ela-mi-4',
      type: 'mc',
      passage:
        'Honeybees perform a waggle dance inside the dark hive. The angle of the dance points toward nectar flowers, and the dance length tells other bees the flight distance.',
      prompt: 'What is the main idea of this honeybee paragraph?',
      choices: ['Honeybees use waggle dances to share flower locations.', 'Honeybees only fly at night.', 'Flowers grow in straight lines.', 'Hives are completely empty.'],
      answer: 'Honeybees use waggle dances to share flower locations.',
      explanation: 'The paragraph explains how worker bees communicate food direction and distance through dancing.',
    },
    {
      id: 'g4-ela-mi-5',
      type: 'mc',
      prompt: 'What does a reader cite when quoting text evidence in an essay?',
      choices: ['Specific words or facts directly from the text', 'Their favorite movie scenes', 'Random guesses about characters', 'Words made up by the student'],
      answer: 'Specific words or facts directly from the text',
      explanation: 'Text evidence consists of direct quotes, facts, and page references drawn from the reading.',
    },
    {
      id: 'g4-ela-mi-6',
      type: 'mc',
      passage:
        'Liam wiped sweat from his forehead and grabbed a cold bottle of water. He took off his heavy soccer cleats and rested under the maple tree.',
      prompt: 'What can you infer Liam was doing before this moment?',
      choices: ['Playing soccer in the hot sun', 'Ice skating in winter', 'Watching television in bed', 'Eating breakfast indoors'],
      answer: 'Playing soccer in the hot sun',
      explanation: 'Sweat, cleats, and needing cold water are clues that Liam was playing soccer outside.',
    },
  ],
}

const G4_ELA_THEME_PRINCIPLE: Principle = {
  id: 'p-g4-ela-theme',
  title: 'Identifying Theme and Story Life Lessons',
  standard: 'RL.4.2',
  summary: 'Theme is the big life lesson a story teaches, revealed through character actions.',
  bank: [
    {
      id: 'g4-ela-th-1',
      type: 'mc',
      passage:
        'Maya squeaked her violin strings during rehearsal and forgot a measure. Instead of quitting, she asked her teacher for help and practiced slowly every night. At the concert, her song rang clear and sweet.',
      prompt: 'What is the central theme of Maya’s story?',
      choices: ['Steady practice and asking help overcome setbacks.', 'Violins always squeak in concerts.', 'Music teachers never play violin.', 'Only lucky people can play music.'],
      answer: 'Steady practice and asking help overcome setbacks.',
      explanation: 'Theme is the life lesson of a story. Maya’s hard work shows that persistence leads to success.',
    },
    {
      id: 'g4-ela-th-2',
      type: 'mc',
      passage:
        'Leo found a wallet on a park bench with twenty dollars inside. He saw Mrs. Alvarez’s library card in it and walked straight to her porch to return it. She smiled and thanked him.',
      prompt: 'What life lesson does Leo’s choice teach?',
      choices: ['Honesty is better than keeping what is not yours.', 'Library cards cost twenty dollars.', 'Wallets belong on park benches.', 'Never walk through a neighborhood park.'],
      answer: 'Honesty is better than keeping what is not yours.',
      explanation: 'Leo returns the lost wallet instead of keeping the money, showing the theme of honesty.',
    },
    {
      id: 'g4-ela-th-3',
      type: 'mc',
      prompt: 'Which statement is a complete story theme instead of just a topic?',
      choices: ['True friends help each other in hard times.', 'Two boys go camping.', 'Bravery and courage.', 'A dog runs fast.'],
      answer: 'True friends help each other in hard times.',
      explanation: 'A topic is one or two words, while a theme is a full sentence stating a life lesson.',
    },
    {
      id: 'g4-ela-th-4',
      type: 'mc',
      passage:
        'When the class garden wilted in July, Noah wanted to blame Sam. Instead, Elena made a five-minute daily watering schedule for everyone. Two weeks later, bright red tomatoes ripened.',
      prompt: 'Which detail supports the theme that teamwork solves problems?',
      choices: ['Elena made a shared schedule that saved the garden.', 'July weather was very sunny.', 'Ripe tomatoes are bright red.', 'The watering can was made of metal.'],
      answer: 'Elena made a shared schedule that saved the garden.',
      explanation: 'Text evidence is a specific detail from the story that proves the main idea or theme.',
    },
    {
      id: 'g4-ela-th-5',
      type: 'mc',
      passage:
        'Crow held a piece of cheese in his beak. Fox praised Crow’s shiny feathers and begged to hear him sing. When Crow opened his beak to caw, the cheese dropped into Fox’s mouth.',
      prompt: 'What is the theme of this fable about Crow and Fox?',
      choices: ['Do not let fake praise trick your pride.', 'Crows are the best singers.', 'Foxes can fly into tall trees.', 'Cheese grows on oak branches.'],
      answer: 'Do not let fake praise trick your pride.',
      explanation: 'A fable teaches a moral lesson. Crow’s pride made him fall for Fox’s trick.',
    },
    {
      id: 'g4-ela-th-6',
      type: 'mc',
      passage:
        'In Dayton, Ohio, Orville and Wilbur Wright tested gliders that crashed in the sand. Each time, they measured the wings, fixed the frame, and tried again until they flew.',
      prompt: 'What theme do the Wright brothers’ experiments show?',
      choices: ['Learning from mistakes leads to great discoveries.', 'Bicycles are faster than airplanes.', 'Sand dunes are too windy for gliders.', 'First tries always work perfectly.'],
      answer: 'Learning from mistakes leads to great discoveries.',
      explanation: 'The Wright brothers studied each crash and kept improving, showing the theme of perseverance.',
    },
  ],
}

const G4_ELA_STRUCTURE_PRINCIPLE: Principle = {
  id: 'p-g4-ela-structure',
  title: 'Informational Text Structures & Signal Words',
  standard: 'RI.4.5',
  summary: 'Spot chronology, cause/effect, compare/contrast, and problem/solution using signal words.',
  bank: [
    {
      id: 'g4-ela-ts-1',
      type: 'mc',
      passage:
        'Both butterflies and moths have wings with tiny scales. However, butterflies fly during the day, whereas most moths fly at night.',
      prompt: 'What text structure is used in this passage?',
      choices: ['Compare and Contrast', 'Chronological Order', 'Problem and Solution', 'Fairy Tale'],
      answer: 'Compare and Contrast',
      explanation: 'Compare and contrast shows how two things are alike and different using words like "both" and "however."',
    },
    {
      id: 'g4-ela-ts-2',
      type: 'mc',
      passage:
        'Because warm lake water evaporated into cold air, thick snow clouds formed. As a result, heavy lake-effect snow fell on Cleveland.',
      prompt: 'How is this weather passage organized?',
      choices: ['Cause and Effect', 'Compare and Contrast', 'Alphabetical Order', 'Poetry'],
      answer: 'Cause and Effect',
      explanation: 'Cause and effect explains why something happened and what resulted, using signal words like "because" and "as a result."',
    },
    {
      id: 'g4-ela-ts-3',
      type: 'mc',
      passage:
        'To plant a seed, first dig a small hole in damp soil. Next, drop the seed in. Finally, cover it with dirt and water it.',
      prompt: 'What text structure is used in these planting steps?',
      choices: ['Sequence or Chronological Order', 'Compare and Contrast', 'Cause and Effect', 'Dialogue'],
      answer: 'Sequence or Chronological Order',
      explanation: 'Sequence order tells steps from first to last using words like "first," "next," and "finally."',
    },
    {
      id: 'g4-ela-ts-4',
      type: 'mc',
      passage:
        'Sea turtles can mistake floating plastic bags for jellyfish and swallow them. To solve this problem, towns organize weekly beach cleanups.',
      prompt: 'What text structure describes the sea turtle paragraph?',
      choices: ['Problem and Solution', 'Chronological Order', 'Compare and Contrast', 'Tall Tale'],
      answer: 'Problem and Solution',
      explanation: 'Problem and solution states a difficulty first and then explains how people fix it.',
    },
    {
      id: 'g4-ela-ts-5',
      type: 'mc',
      prompt: 'Which signal words show a cause and effect text structure?',
      choices: ['because, therefore, as a result', 'first, next, finally', 'both, alike, however', 'once upon a time'],
      answer: 'because, therefore, as a result',
      explanation: 'Signal words like "because" and "therefore" connect a reason (cause) to its outcome (effect).',
    },
    {
      id: 'g4-ela-ts-6',
      type: 'mc',
      prompt: 'A biography told by dates from 1870 to 1903 uses what structure?',
      choices: ['Chronological Order', 'Compare and Contrast', 'Problem and Solution', 'Rhyme Scheme'],
      answer: 'Chronological Order',
      explanation: 'Chronological order arranges real events in the time order in which they happened.',
    },
  ],
}

const G4_ELA_SUMMARY_PRINCIPLE: Principle = {
  id: 'p-g4-ela-summary',
  title: 'Objective Summarizing vs. Personal Opinions',
  standard: 'RI.4.2',
  summary: 'An objective summary retells main events in order without opinions or emotional biases.',
  bank: [
    {
      id: 'g4-ela-oh-1',
      type: 'mc',
      passage:
        'Johnny Appleseed walked across Ohio planting apple seeds in clearings. He shared saplings with pioneer families so orchards would feed newcomers for years.',
      prompt: 'Which sentence is the best summary of this passage?',
      choices: ['Johnny Appleseed planted apple trees across Ohio to feed pioneers.', 'Apples are the tastiest fruit in the world.', 'Everyone should move to Ohio.', 'Seeds are smaller than leaves.'],
      answer: 'Johnny Appleseed planted apple trees across Ohio to feed pioneers.',
      explanation: 'A summary briefly retells the main facts of a passage without adding personal opinions.',
    },
    {
      id: 'g4-ela-oh-2',
      type: 'mc',
      prompt: 'What should NEVER be included in an objective summary of an article?',
      choices: ['Your personal opinions and feelings', 'The main idea of the text', 'Key facts from the passage', 'The important events in order'],
      answer: 'Your personal opinions and feelings',
      explanation: 'An objective summary sticks strictly to the facts and main points from the text, leaving out opinions.',
    },
    {
      id: 'g4-ela-oh-3',
      type: 'mc',
      prompt: 'How is a story summary different from a story theme?',
      choices: ['A summary retells main events; theme is the life lesson.', 'A summary is one word; theme is ten pages.', 'A theme only lists character names.', 'They mean the exact same thing.'],
      answer: 'A summary retells main events; theme is the life lesson.',
      explanation: 'A summary tells what happened in the text, while a theme explains the deeper message or lesson.',
    },
    {
      id: 'g4-ela-oh-4',
      type: 'mc',
      passage:
        'The Ohio and Erie Canal opened in 1832, linking Lake Erie to the Ohio River. Canal boats pulled by mules carried farmers’ wheat to distant markets.',
      prompt: 'Which choice best summarizes this paragraph?',
      choices: ['The 1832 Ohio canal let boats carry crops to market.', 'Mules are much smarter than horses.', 'Canals are fun places to swim.', 'Wheat grows only in winter.'],
      answer: 'The 1832 Ohio canal let boats carry crops to market.',
      explanation: 'A good summary captures who, what, and why in one short statement using facts from the text.',
    },
    {
      id: 'g4-ela-oh-5',
      type: 'mc',
      prompt: 'Which detail belongs in a summary of a story?',
      choices: ['The main problem and how it was solved', 'Every single adjective on page two', 'Whether you liked the cover art', 'A list of your favorite foods'],
      answer: 'The main problem and how it was solved',
      explanation: 'A story summary includes the main characters, the central problem, and the resolution.',
    },
    {
      id: 'g4-ela-oh-6',
      type: 'mc',
      passage:
        'When floodwaters rose along the Ohio River, neighbors filled sandbags together all night. By morning, the strong wall kept every home on the street dry.',
      prompt: 'What is the theme of this Ohio River story?',
      choices: ['Neighbors working together can protect their community.', 'Sandbags are filled with river water.', 'Floods only happen at night.', 'Houses near rivers are always blue.'],
      answer: 'Neighbors working together can protect their community.',
      explanation: 'The neighbors united to build the sandbag wall, teaching a lesson about community cooperation.',
    },
  ],
}

const G4_ELA_FIG_PRINCIPLE: Principle = {
  id: 'p-g4-ela-fig',
  title: 'Similes, Metaphors, Idioms & Context Clues',
  standard: 'L.4.5',
  summary: 'Similes use like/as, metaphors make direct comparisons, and context clues reveal unknown words.',
  bank: [
    {
      id: 'g4-ela-fg-1',
      type: 'mc',
      prompt: 'Which sentence contains a metaphor?',
      choices: ['The classroom was a buzzing beehive.', 'He ran as fast as a cheetah.', 'The fur felt like soft velvet.', 'She ate lunch at noon.'],
      answer: 'The classroom was a buzzing beehive.',
      explanation: 'A metaphor compares two unlike things directly by saying one thing IS the other, without "like" or "as."',
    },
    {
      id: 'g4-ela-fg-2',
      type: 'mc',
      prompt: 'Which sentence contains a simile?',
      choices: ['The icy sidewalk was as slick as glass.', 'Snow is a white blanket.', 'The library was a quiet cave.', 'We walked home after school.'],
      answer: 'The icy sidewalk was as slick as glass.',
      explanation: 'A simile compares two things using the words "like" or "as."',
    },
    {
      id: 'g4-ela-fg-3',
      type: 'mc',
      prompt: 'What does the idiom "a piece of cake" mean?',
      choices: ['Something very easy to do', 'A slice of birthday dessert', 'Something impossible to finish', 'A hard math test'],
      answer: 'Something very easy to do',
      explanation: 'An idiom is a phrase with a non-literal meaning. "A piece of cake" means an easy task.',
    },
    {
      id: 'g4-ela-fg-4',
      type: 'mc',
      passage:
        'The ancient clay bowl was so fragile that workers wore soft gloves so it would not shatter.',
      prompt: 'Using context clues, what does fragile mean?',
      choices: ['Delicate and easily broken', 'Heavy and made of iron', 'Stretchy like rubber', 'Waterproof and strong'],
      answer: 'Delicate and easily broken',
      explanation: 'Context clues are nearby words that help explain an unfamiliar word. "Shatter" shows fragile means easily broken.',
    },
    {
      id: 'g4-ela-fg-5',
      type: 'mc',
      prompt: 'What does the proverb "Actions speak louder than words" mean?',
      choices: ['What you do matters more than promises.', 'Shouting is better than whispering.', 'Actors must talk very loudly.', 'Books are quieter than movies.'],
      answer: 'What you do matters more than promises.',
      explanation: 'A proverb is a traditional saying that gives advice. Real actions prove more than talk.',
    },
    {
      id: 'g4-ela-fg-6',
      type: 'mc',
      passage:
        'The beaver was industrious, working from sunrise to sunset to fix the log dam.',
      prompt: 'Based on the sentence, what does industrious mean?',
      choices: ['Hard-working and busy', 'Lazy and sleepy', 'Loud and rude', 'Tiny and weak'],
      answer: 'Hard-working and busy',
      explanation: '"Working from sunrise to sunset" is a context clue showing that industrious means hard-working.',
    },
  ],
}

const G4_ELA_GRAMMAR_PRINCIPLE: Principle = {
  id: 'p-g4-ela-grammar',
  title: 'Complete Sentences, Run-Ons & Homophones',
  standard: 'L.4.1',
  summary: 'Sentences require subjects and verbs; avoid run-ons and use correct homophones.',
  bank: [
    {
      id: 'g4-ela-gr-1',
      type: 'mc',
      prompt: 'Which choice is a complete sentence instead of a fragment?',
      choices: ['The falcon dove toward the river.', 'Because the library closed early.', 'Running across the wet grass.', 'Under the old wooden bridge.'],
      answer: 'The falcon dove toward the river.',
      explanation: 'A complete sentence has a subject ("The falcon"), a verb ("dove"), and expresses a full thought.',
    },
    {
      id: 'g4-ela-gr-2',
      type: 'mc',
      prompt: 'Which choice fixes the run-on: "It rained hard we stayed inside"?',
      choices: ['It rained hard, so we stayed inside.', 'It rained hard we, stayed inside.', 'Because it rained hard staying inside.', 'It raining hard we stayed inside.'],
      answer: 'It rained hard, so we stayed inside.',
      explanation: 'A run-on joins two sentences improperly. Fix it with a comma and a conjunction like "so."',
    },
    {
      id: 'g4-ela-gr-3',
      type: 'mc',
      prompt: 'Which sentence uses their, there, and they’re correctly?',
      choices: ['They’re parking their bikes over there.', 'Their parking they’re bikes over there.', 'There parking their bikes over they’re.', 'They’re parking there bikes over their.'],
      answer: 'They’re parking their bikes over there.',
      explanation: 'They’re is "they are", their shows ownership, and there refers to a physical place.',
    },
    {
      id: 'g4-ela-gr-4',
      type: 'mc',
      prompt: 'Which sentence shows correct capitalization of a book title?',
      choices: ['The Secret of the Old Clock', 'the secret of the Old clock', 'The Secret Of The Old Clock', 'The secret Of the old Clock'],
      answer: 'The Secret of the Old Clock',
      explanation: 'Capitalize the first word, last word, and all major words; keep short prepositions and articles lowercase.',
    },
    {
      id: 'g4-ela-gr-5',
      type: 'mc',
      prompt: 'Which word contains a prefix that means "not"?',
      choices: ['Unhappy', 'Preheat', 'Reread', 'Playful'],
      answer: 'Unhappy',
      explanation: 'The prefix "un-" means not or opposite. "Unhappy" means not happy.',
    },
    {
      id: 'g4-ela-gr-6',
      type: 'mc',
      prompt: 'Which word contains a suffix that means "full of"?',
      choices: ['Joyful', 'Hopeless', 'Quickly', 'Darkness'],
      answer: 'Joyful',
      explanation: 'The suffix "-ful" means full of. "Joyful" means full of joy.',
    },
  ],
}

const G4_ELA_WRITING_PRINCIPLE: Principle = {
  id: 'p-g4-ela-writing',
  title: 'Opinion, Informational & Narrative Writing Craft',
  standard: 'W.4.1',
  summary: 'State clear claims, organize with transitional words, and punctuate dialogue properly.',
  bank: [
    {
      id: 'g4-ela-wr-1',
      type: 'mc',
      prompt: 'Which sentence is an opinion statement instead of a verifiable fact?',
      choices: ['Recess is the best part of the school day.', 'School days are approximately six hours long.', 'The playground has two swing sets.', 'Lunch starts at twelve o’clock.'],
      answer: 'Recess is the best part of the school day.',
      explanation: 'An opinion expresses a personal feeling or belief that cannot be proven true for everyone.',
    },
    {
      id: 'g4-ela-wr-2',
      type: 'mc',
      prompt: 'Which linking word best connects an opinion to a supporting reason?',
      choices: ['Because', 'Suddenly', 'Yesterday', 'Whenever'],
      answer: 'Because',
      explanation: 'Words like "because" and "since" connect an opinion claim directly to its logical reason.',
    },
    {
      id: 'g4-ela-wr-3',
      type: 'mc',
      prompt: 'Which sentence punctuates dialogue correctly?',
      choices: ['"We need more flour," said Dad.', '"We need more flour said Dad."', 'We need more flour, "said Dad."', '"We need more flour", said Dad.'],
      answer: '"We need more flour," said Dad.',
      explanation: 'Quotation marks wrap spoken words, and the comma goes inside the closing quotation mark.',
    },
    {
      id: 'g4-ela-wr-4',
      type: 'mc',
      prompt: 'What is the primary goal of an informational essay’s introduction?',
      choices: ['Introduce the topic and hook the reader’s interest', 'List every single source URL in full', 'Include five jokes about animals', 'Write the final summary sentence first'],
      answer: 'Introduce the topic and hook the reader’s interest',
      explanation: 'An introductory paragraph captures the reader’s attention and states the central topic or focus.',
    },
    {
      id: 'g4-ela-wr-5',
      type: 'mc',
      prompt: 'Which transition shows a contrast between two ideas?',
      choices: ['However', 'Furthermore', 'Similarly', 'In addition'],
      answer: 'However',
      explanation: '"However" signals a contrast or difference between the previous idea and the next one.',
    },
    {
      id: 'g4-ela-wr-6',
      type: 'mc',
      prompt: 'What makes narrative writing different from informational writing?',
      choices: ['Narratives tell a story with characters and plot.', 'Narratives only list dictionary definitions.', 'Informational texts never use facts.', 'Narratives cannot use complete sentences.'],
      answer: 'Narratives tell a story with characters and plot.',
      explanation: 'Narrative writing tells a story with a setting, characters, conflict, and resolution.',
    },
  ],
}

export const G4_ELA_COURSE: Course = {
  id: 'g4-ela',
  subject: 'ela',
  grade: 4,
  title: 'Grade 4 Language Arts',
  subtitle: 'Reading Informational & Literary Texts, Theme, Structure, Writing Craft & Grammar',
  credits: 1.0,
  color: '#8b5cf6',
  icon: '✎',
  units: [
    // UNIT 1: Informational text comprehension
    {
      id: 'g4-ela-u1',
      title: 'Unit 1: Informational Text & Main Ideas',
      standards: ['RI.4.1', 'RI.4.2'],
      lessons: [
        {
          id: 'g4-ela-u1-l1',
          unitId: 'g4-ela-u1',
          title: 'Lesson 1: Main Idea & Supporting Facts',
          kind: 'lesson',
          partOf: 'Main Idea',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:main-idea-and-details/v/main-idea-reading',
          videoTitle: 'Khan Academy: Finding the Main Idea',
          reading:
            'The main idea is the key point of an informational text. Authors support this central point with facts, statistics, examples, and quotes.',
          principles: [G4_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g4-ela-u1-l2',
          unitId: 'g4-ela-u1',
          title: 'Lesson 2: Making Inferences with Text Clues',
          kind: 'lesson',
          partOf: 'Inferences',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:making-inferences/v/making-inferences-reading',
          videoTitle: 'Khan Academy: Inferences in Informational Text',
          reading:
            'When an author does not say something directly, use your background knowledge and clues in the text to make a logical inference.',
          principles: [G4_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g4-ela-u1-l3',
          unitId: 'g4-ela-u1',
          title: 'Lesson 3: Quoting Accurately from Informational Text',
          kind: 'lesson',
          partOf: 'Quoting Evidence',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:text-evidence/v/citing-evidence-reading',
          videoTitle: 'Khan Academy: Citing Text Evidence',
          reading:
            'When referring to a text, quote directly or cite specific facts and paragraphs to support your analysis and inferences.',
          principles: [G4_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g4-ela-u1-l4',
          unitId: 'g4-ela-u1',
          title: 'Quiz 1: Main Ideas & Inferences Check',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text',
          videoTitle: 'Informational Text Review',
          reading:
            'Review assessment on identifying central main ideas, citing strong supporting details, and drawing logical inferences.',
          principles: [G4_ELA_MAIN_IDEA_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Text structures
    {
      id: 'g4-ela-u2',
      title: 'Unit 2: Informational Text Structures',
      standards: ['RI.4.5'],
      lessons: [
        {
          id: 'g4-ela-u2-l1',
          unitId: 'g4-ela-u2',
          title: 'Lesson 1: Cause & Effect and Chronological Order',
          kind: 'lesson',
          partOf: 'Cause & Chronology',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:text-structure/v/text-structure-reading',
          videoTitle: 'Khan Academy: Text Structures',
          reading:
            'Chronological order lists events by time. Cause and effect explains why things occur, using signal words like because, so, and consequently.',
          principles: [G4_ELA_STRUCTURE_PRINCIPLE],
        },
        {
          id: 'g4-ela-u2-l2',
          unitId: 'g4-ela-u2',
          title: 'Lesson 2: Compare/Contrast & Problem/Solution',
          kind: 'lesson',
          partOf: 'Compare & Problem/Solution',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:text-structure/v/compare-contrast-reading',
          videoTitle: 'Khan Academy: Compare and Contrast Structures',
          reading:
            'Compare and contrast highlights similarities and differences. Problem and solution introduces a challenge and details how it is solved.',
          principles: [G4_ELA_STRUCTURE_PRINCIPLE],
        },
        {
          id: 'g4-ela-u2-l3',
          unitId: 'g4-ela-u2',
          title: 'Lesson 3: Text Features: Headings, Sidebars & Timelines',
          kind: 'lesson',
          partOf: 'Text Features',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:text-features/v/text-features-reading',
          videoTitle: 'Khan Academy: Informational Text Features',
          reading:
            'Headings, bold words, sidebars, charts, and timelines guide readers to find key information efficiently in non-fiction texts.',
          principles: [G4_ELA_STRUCTURE_PRINCIPLE],
        },
        {
          id: 'g4-ela-u2-l4',
          unitId: 'g4-ela-u2',
          title: 'Quiz 2: Text Structures & Features Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text',
          videoTitle: 'Text Structures Review',
          reading:
            'Review assessment on identifying chronological order, cause and effect, comparison, problem/solution, and text features.',
          principles: [G4_ELA_STRUCTURE_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Reading literature and theme
    {
      id: 'g4-ela-u3',
      title: 'Unit 3: Literature, Characters & Central Themes',
      standards: ['RL.4.2', 'RL.4.3', 'RL.4.6'],
      lessons: [
        {
          id: 'g4-ela-u3-l1',
          unitId: 'g4-ela-u3',
          title: 'Lesson 1: Character Motivations & Plot Clues',
          kind: 'lesson',
          partOf: 'Character Traits',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-literature/x4487f94e:characters/v/characters-reading',
          videoTitle: 'Khan Academy: Character Traits and Motivations',
          reading:
            'Characters drive stories through their thoughts, speech, and actions. Pay attention to how characters react when facing difficult obstacles.',
          principles: [G4_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g4-ela-u3-l2',
          unitId: 'g4-ela-u3',
          title: 'Lesson 2: Discovering Themes & Moral Lessons',
          kind: 'lesson',
          partOf: 'Themes',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-literature/x4487f94e:theme/v/theme-reading',
          videoTitle: 'Khan Academy: Finding the Theme',
          reading:
            'A theme is the universal message or life lesson taught by the narrative, such as kindness, honesty, or perseverance.',
          principles: [G4_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g4-ela-u3-l3',
          unitId: 'g4-ela-u3',
          title: 'Lesson 3: Points of View: First-Person vs Third-Person',
          kind: 'lesson',
          partOf: 'Point of View',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-literature/x4487f94e:point-of-view/v/point-of-view-reading',
          videoTitle: 'Khan Academy: Points of View in Stories',
          reading:
            'Compare and contrast first-person narration (I, me, my) with third-person narration (he, she, they) to evaluate character perspective.',
          principles: [G4_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g4-ela-u3-l4',
          unitId: 'g4-ela-u3',
          title: 'Quiz 3: Literary Elements & Theme Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-literature',
          videoTitle: 'Literature Review',
          reading:
            'Review assessment on character motivations, identifying underlying themes in fables and stories, and narrator point of view.',
          principles: [G4_ELA_THEME_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: Objective summaries vs opinions
    {
      id: 'g4-ela-u4',
      title: 'Unit 4: Objective Summaries & Ohio Literature',
      standards: ['RL.4.2', 'RI.4.2', 'OH.RL.4.2'],
      lessons: [
        {
          id: 'g4-ela-u4-l1',
          unitId: 'g4-ela-u4',
          title: 'Lesson 1: Writing an Objective Summary',
          kind: 'lesson',
          partOf: 'Objective Summarizing',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-literature/x4487f94e:summary/v/summary-reading',
          videoTitle: 'Khan Academy: How to Write a Summary',
          reading:
            'An objective summary retells the main events and key facts in logical order without adding personal opinions or emotional commentary.',
          principles: [G4_ELA_SUMMARY_PRINCIPLE],
        },
        {
          id: 'g4-ela-u4-l2',
          unitId: 'g4-ela-u4',
          title: 'Lesson 2: Regional Legends & Ohio Historical Biographies',
          kind: 'lesson',
          partOf: 'Regional Lore',
          estimatedMinutes: 10,
          videoUrl: 'https://www.ohiohistory.org/learn/education-and-outreach/student-resources',
          videoTitle: 'Ohio History Connection: Ohio Legends and Biographies',
          reading:
            'Ohio folklore and history, such as stories of Johnny Appleseed and the Wright brothers, illustrate enduring themes of innovation, service, and resilience.',
          principles: [G4_ELA_SUMMARY_PRINCIPLE],
        },
        {
          id: 'g4-ela-u4-l3',
          unitId: 'g4-ela-u4',
          title: 'Lesson 3: Primary and Secondary Source Accounts',
          kind: 'lesson',
          partOf: 'Historical Sources',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:reading-informational-text/x4487f94e:primary-and-secondary-sources/v/primary-sources-reading',
          videoTitle: 'Khan Academy: Primary and Secondary Sources',
          reading:
            'Compare a firsthand account (such as a pioneer journal) and a secondhand account (such as a modern history textbook) of the same historical event.',
          principles: [G4_ELA_SUMMARY_PRINCIPLE],
        },
        {
          id: 'g4-ela-u4-l4',
          unitId: 'g4-ela-u4',
          title: 'Quiz 4: Summaries & Regional Literature Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.ohiohistory.org',
          videoTitle: 'Ohio Literature Quiz Review',
          reading:
            'Review assessment on drafting neutral summaries, identifying factual versus opinion statements, and analyzing historical regional narratives.',
          principles: [G4_ELA_SUMMARY_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Figurative language and word nuances
    {
      id: 'g4-ela-u5',
      title: 'Unit 5: Figurative Language & Context Clues',
      standards: ['L.4.5', 'L.4.4'],
      lessons: [
        {
          id: 'g4-ela-u5-l1',
          unitId: 'g4-ela-u5',
          title: 'Lesson 1: Similes, Metaphors & Idioms',
          kind: 'lesson',
          partOf: 'Figurative Language',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:vocabulary/x4487f94e:figurative-language/v/similes-and-metaphors',
          videoTitle: 'Khan Academy: Similes and Metaphors',
          reading:
            'Similes compare using like or as ("as bright as the sun"). Metaphors compare directly ("she is a star"). Idioms have figurative meanings.',
          principles: [G4_ELA_FIG_PRINCIPLE],
        },
        {
          id: 'g4-ela-u5-l2',
          unitId: 'g4-ela-u5',
          title: 'Lesson 2: Unlocking Unfamiliar Words with Context Clues',
          kind: 'lesson',
          partOf: 'Context Clues',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:vocabulary/x4487f94e:context-clues/v/context-clues',
          videoTitle: 'Khan Academy: Using Context Clues',
          reading:
            'Context clues are words and phrases near an unfamiliar vocabulary word that provide synonyms, antonyms, or definitions to help you determine meaning.',
          principles: [G4_ELA_FIG_PRINCIPLE],
        },
        {
          id: 'g4-ela-u5-l3',
          unitId: 'g4-ela-u5',
          title: 'Lesson 3: Common Adages, Proverbs & Personification',
          kind: 'lesson',
          partOf: 'Adages & Personification',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:vocabulary/x4487f94e:figurative-language/v/idioms-proverbs-adages',
          videoTitle: 'Khan Academy: Idioms and Proverbs',
          reading:
            'Proverbs and adages express traditional wisdom (e.g. A stitch in time saves nine). Personification gives human qualities to non-human objects.',
          principles: [G4_ELA_FIG_PRINCIPLE],
        },
        {
          id: 'g4-ela-u5-l4',
          unitId: 'g4-ela-u5',
          title: 'Quiz 5: Figurative Language & Vocabulary Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:vocabulary',
          videoTitle: 'Figurative Language Quiz Review',
          reading:
            'Review assessment on identifying similes, metaphors, idioms, proverbs, and determining vocabulary meaning using sentence context.',
          principles: [G4_ELA_FIG_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Grammar conventions and word study
    {
      id: 'g4-ela-u6',
      title: 'Unit 6: Grammar Conventions, Sentences & Homophones',
      standards: ['L.4.1', 'L.4.2'],
      lessons: [
        {
          id: 'g4-ela-u6-l1',
          unitId: 'g4-ela-u6',
          title: 'Lesson 1: Complete Sentences, Fragments & Run-Ons',
          kind: 'lesson',
          partOf: 'Sentence Structure',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-sentence/types-of-sentences/v/fragments-and-run-ons',
          videoTitle: 'Khan Academy: Fragments and Run-On Sentences',
          reading:
            'A complete sentence requires a subject and a predicate. Avoid fragments by ensuring every complete thought stands alone, and connect run-ons with conjunctions.',
          principles: [G4_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g4-ela-u6-l2',
          unitId: 'g4-ela-u6',
          title: 'Lesson 2: Homophones, Prefixes & Suffixes',
          kind: 'lesson',
          partOf: 'Word Morphology',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/grammar/word-patterns-and-relationships/frequently-confused-words/v/there-their-theyre',
          videoTitle: 'Khan Academy: Confusing Words and Homophones',
          reading:
            'Homophones sound identical but differ in spelling and meaning (there, their, they’re). Prefixes (un-, re-) and suffixes (-ful, -less) transform word meanings.',
          principles: [G4_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g4-ela-u6-l3',
          unitId: 'g4-ela-u6',
          title: 'Lesson 3: Relative Pronouns & Prepositional Phrases',
          kind: 'lesson',
          partOf: 'Pronouns & Prepositions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-pronoun/relative-pronouns/v/relative-pronouns',
          videoTitle: 'Khan Academy: Relative Pronouns',
          reading:
            'Use relative pronouns (who, whose, whom, which, that) and relative adverbs (where, when, why) to connect descriptive clauses smoothly.',
          principles: [G4_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g4-ela-u6-l4',
          unitId: 'g4-ela-u6',
          title: 'Quiz 6: Grammar & Sentence Conventions Review',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/humanities/grammar',
          videoTitle: 'Grammar Quiz Review',
          reading:
            'Review assessment on resolving sentence fragments and run-on sentences, choosing correct homophones, and applying relative pronouns.',
          principles: [G4_ELA_GRAMMAR_PRINCIPLE],
        },
      ],
    },

    // UNIT 7: Writing craft
    {
      id: 'g4-ela-u7',
      title: 'Unit 7: Opinion, Informative & Narrative Writing Craft',
      standards: ['W.4.1', 'W.4.2', 'W.4.3'],
      lessons: [
        {
          id: 'g4-ela-u7-l1',
          unitId: 'g4-ela-u7',
          title: 'Lesson 1: Stating Opinions with Reasons and Facts',
          kind: 'lesson',
          partOf: 'Opinion Writing',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:writing/x4487f94e:opinion-writing/v/opinion-writing',
          videoTitle: 'Khan Academy: Opinion Writing',
          reading:
            'An opinion essay starts with a clear claim statement, followed by distinct paragraphs with logical reasons, factual evidence, and linking transitional words.',
          principles: [G4_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g4-ela-u7-l2',
          unitId: 'g4-ela-u7',
          title: 'Lesson 2: Narrative Dialogue & Sensory Details',
          kind: 'lesson',
          partOf: 'Narrative Writing',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:writing/x4487f94e:narrative-writing/v/dialogue-narrative-writing',
          videoTitle: 'Khan Academy: Writing Dialogue in Narratives',
          reading:
            'Use dialogue to show character voice. Place quotation marks around spoken words with punctuation inside, and use sensory details to bring settings to life.',
          principles: [G4_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g4-ela-u7-l3',
          unitId: 'g4-ela-u7',
          title: 'Lesson 3: Informative Reports & Grouping Ideas',
          kind: 'lesson',
          partOf: 'Informational Writing',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:writing/x4487f94e:informative-writing/v/informative-writing-intro',
          videoTitle: 'Khan Academy: Informative Report Writing',
          reading:
            'Write informative and explanatory texts to examine a topic and convey ideas clearly, grouping related information into paragraphs with headings.',
          principles: [G4_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g4-ela-u7-l4',
          unitId: 'g4-ela-u7',
          title: 'Unit 7 Test: Multi-Genre Writing Craft Mastery',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab/x4487f94e:writing',
          videoTitle: 'Writing Craft Exam Review',
          reading:
            'Comprehensive assessment on opinion thesis statements, informational paragraph transitions, and punctuated narrative dialogue.',
          principles: [G4_ELA_WRITING_PRINCIPLE],
        },
      ],
    },

    // UNIT 8: Course Challenge
    {
      id: 'g4-ela-u8',
      title: 'Unit 8: Grade 4 ELA Course Challenge',
      standards: ['RL.4', 'RI.4', 'W.4', 'L.4'],
      lessons: [
        {
          id: 'g4-ela-u8-l1',
          unitId: 'g4-ela-u8',
          title: 'Reading & Literature Capstone Review',
          kind: 'lesson_review',
          partOf: 'Course Challenge',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab',
          videoTitle: 'Reading Literature Capstone Review',
          reading:
            'Spiral review covering main idea identification, textual inferences, story themes, and informational text structures.',
          principles: [G4_ELA_MAIN_IDEA_PRINCIPLE, G4_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g4-ela-u8-l2',
          unitId: 'g4-ela-u8',
          title: 'Language & Writing Capstone Review',
          kind: 'lesson_review',
          partOf: 'Course Challenge',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab',
          videoTitle: 'Language and Writing Capstone Review',
          reading:
            'Spiral review covering figurative similes and metaphors, context clues, sentence boundaries, and opinion essay craft.',
          principles: [G4_ELA_FIG_PRINCIPLE, G4_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g4-ela-u8-l3',
          unitId: 'g4-ela-u8',
          title: 'Grade 4 ELA Comprehensive Course Challenge',
          kind: 'lesson_review',
          partOf: 'Course Challenge',
          estimatedMinutes: 20,
          videoUrl: 'https://www.khanacademy.org/ela/cc-4th-reading-vocab',
          videoTitle: 'Grade 4 ELA Final Exam',
          reading:
            'Final capstone evaluation across all Grade 4 English Language Arts standards.',
          principles: [G4_ELA_MAIN_IDEA_PRINCIPLE, G4_ELA_GRAMMAR_PRINCIPLE],
        },
      ],
    },

    // UNIT 9: Explore ELA Through Creative Projects (enrichment)
    {
      id: 'g4-ela-u9',
      title: 'Unit 9: Explore ELA Through Creative Projects',
      kind: 'explore',
      standards: ['RL.4.7', 'W.4.4', 'SL.4.5'],
      lessons: [],
      exploreItems: [
        {
          id: 'g4-ela-exp-readers-theater',
          title: 'Creative Project: Family Reader’s Theater Performance',
          type: 'hands_on',
          description:
            'Select a 2-page reader’s theater script or adapt a favorite story into lines for two or three voices. Rehearse character voices and record an audio performance.',
          estimatedMinutes: 30,
          materials: ['Short story or printed script', 'Smartphone or voice recorder', 'Props or hats (optional)'],
          steps: [
            'Assign characters and a narrator to family members or friends.',
            'Underline dialogue and highlight stage directions.',
            'Practice reading aloud with expression, pausing at commas and periods.',
            'Record the final performance and listen back together.',
          ],
          reflectionPrompt: 'How did changing your vocal tone help the listener understand how your character felt?',
          requiresParentPin: false,
        },
        {
          id: 'g4-ela-exp-fractured-tale',
          title: 'Writing Lab: The Fractured Fairy Tale',
          type: 'project',
          description:
            'Rewrite a classic fairy tale (like The Three Little Pigs or Cinderella) from the perspective of the villain or in a modern, unexpected setting.',
          estimatedMinutes: 35,
          materials: ['Paper and pen, or digital word processor'],
          steps: [
            'Pick a familiar classic fairy tale.',
            'Switch the perspective to the villain or an unexpected side character (e.g. the Big Bad Wolf explaining his allergies).',
            'Include at least two lines of properly punctuated dialogue.',
            'Include at least one simile and one metaphor.',
          ],
          reflectionPrompt: 'How does switching the narrator change who the audience roots for in your story?',
          requiresParentPin: false,
        },
        {
          id: 'g4-ela-exp-storyline-online',
          title: 'Storyline Online: Author Craft & Illustration Study',
          type: 'video',
          description:
            'Watch an award-winning children’s book read aloud by celebrated actors on Storyline Online. Analyze how illustrations and music enhance the narrative theme.',
          url: 'https://storylineonline.net/',
          estimatedMinutes: 20,
          reflectionPrompt: 'What theme or lesson did the central character discover by the end of the story?',
          requiresParentPin: true,
        },
      ],
    },

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g4-ela-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['RL.4', 'RI.4', 'W.4', 'L.4'],
      lessons: [],
      resources: [
        {
          id: 'g4-ela-res-pacing',
          title: 'Grade 4 Language Arts 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Curriculum schedule balancing reading comprehension, writing process workshops, vocabulary acquisition, and grammar.',
          body: `## Grade 4 ELA Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Informational Text & Main Ideas (RI.4.1, RI.4.2)
- **Weeks 5–8**: Unit 2 — Informational Text Structures (RI.4.5)
- **Weeks 9–13**: Unit 3 — Literature, Characters & Central Themes (RL.4.2, RL.4.3)
- **Week 14**: Quarter 1 Reading Comprehension Checkpoint
- **Weeks 15–19**: Unit 4 — Objective Summaries & Ohio Literature (RL.4.2, OH.RL.4.2)
- **Weeks 20–24**: Unit 5 — Figurative Language & Context Clues (L.4.4, L.4.5)
- **Weeks 25–29**: Unit 6 — Grammar Conventions, Sentences & Homophones (L.4.1, L.4.2)
- **Week 30**: Quarter 2 & 3 Vocabulary & Language Review
- **Weeks 31–34**: Unit 7 — Opinion, Informational & Narrative Writing Craft (W.4.1-3)
- **Weeks 35–36**: Unit 8 — Reader's Theater & Creative Writing Showcase`,
        },
        {
          id: 'g4-ela-res-rubric',
          title: 'Grade 4 Multi-Genre Writing Rubric',
          kind: 'assessment_rubric',
          description:
            'Four-category scoring rubric for opinion essays, informational reports, and narrative stories.',
          body: `## Grade 4 Writing Evaluation Criteria (4 Points Each)

1. **Focus & Thesis**: States a clear central idea, opinion claim, or story plot.
2. **Organization**: Uses clear transitional words, paragraph breaks, and logical sequence.
3. **Evidence & Elaboration**: Backs up claims with facts, details, dialogue, and figurative language.
4. **Conventions**: Uses correct capitalization, punctuation (especially in dialogue), and spelling.`,
        },
        {
          id: 'g4-ela-res-roots',
          title: 'Grade 4 Greek & Latin Roots Reference Guide',
          kind: 'printable',
          description: 'Printable word morphology reference featuring the 25 most common root words and prefixes.',
          body: `## Common Grade 4 Roots & Affixes

- **tele-** (far): telephone, telescope, television
- **auto-** (self): autobiography, automatic, autograph
- **bio-** (life): biology, biography, biosphere
- **geo-** (earth): geography, geology, geometry
- **vis / vid** (see): visual, video, invisible
- **aud** (hear): audio, auditorium, audience
- **tract** (pull / drag): tractor, attract, subtract
- **port** (carry): transport, portable, export`,
        },
      ],
    },
  ],
}
