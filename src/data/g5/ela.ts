import { Course, Principle } from '../../types'

// Principles for Grade 5 ELA
const G5_ELA_THEME_EVIDENCE_PRINCIPLE: Principle = {
  id: 'p-g5-ela-theme',
  title: 'Theme, Character Traits & Quoting Evidence',
  standard: 'RL.5.1',
  summary: 'Quote accurately from text when explaining inferences and determining central themes.',
  bank: [
    {
      id: 'g5-ela-thm-1',
      type: 'mc',
      passage:
        'Maya practiced her violin for twenty minutes every evening, even when the notes sounded squeaky. By the spring concert, she played her solo smoothly.',
      prompt: 'What is the theme of this passage?',
      choices: ['Steady practice leads to improvement', 'Violins are too hard to play', 'Concerts only happen in spring', 'Talent needs no effort'],
      answer: 'Steady practice leads to improvement',
      explanation: 'Theme is the life lesson of a story; Maya’s daily effort helped her succeed.',
    },
    {
      id: 'g5-ela-thm-2',
      type: 'mc',
      passage:
        'Leo noticed the new student sitting alone at lunch. Leo walked over, smiled, and asked, "Want to join our table?"',
      prompt: 'Which trait best describes Leo based on the text?',
      choices: ['Welcoming', 'Selfish', 'Forgetful', 'Timid'],
      answer: 'Welcoming',
      explanation: 'Text evidence shows Leo kindly invited a lonely student to sit with him.',
    },
    {
      id: 'g5-ela-thm-3',
      type: 'mc',
      passage:
        'The heavy rain flooded the trail. Eli checked his map and led his sister along the high ridge so their boots stayed dry.',
      prompt: 'Which detail proves Eli is a careful problem solver?',
      choices: ['He checked his map and took high ground', 'It rained heavily on the trail', 'He wore boots outside', 'He has a sister'],
      answer: 'He checked his map and took high ground',
      explanation: 'Strong text evidence directly supports the claim with specific actions from the passage.',
    },
    {
      id: 'g5-ela-thm-4',
      type: 'mc',
      prompt: 'What is an inference when reading a story?',
      choices: ['A conclusion based on text clues and experience', 'The title printed on the cover', 'A list of chapter numbers', 'A random guess without clues'],
      answer: 'A conclusion based on text clues and experience',
      explanation: 'An inference combines details in the text with what you already know to figure out unstated ideas.',
    },
    {
      id: 'g5-ela-thm-5',
      type: 'mc',
      passage:
        'When the team lost the final game, Captain Sam shook every player’s hand and said, "We played hard and learned a lot today."',
      prompt: 'What theme does Sam’s response show?',
      choices: ['Good sportsmanship matters win or lose', 'Winning is the only thing that counts', 'Never play team sports', 'Blame others for losing'],
      answer: 'Good sportsmanship matters win or lose',
      explanation: 'Sam’s encouraging words after a loss show the lesson of good sportsmanship.',
    },
    {
      id: 'g5-ela-thm-6',
      type: 'mc',
      passage:
        'Mira stared at her empty bird feeder. Tiny footprints in the snow led straight to a plump squirrel under the pine tree.',
      prompt: 'What can the reader infer happened to the birdseed?',
      choices: ['The squirrel ate the birdseed', 'The wind blew the feeder away', 'Mira forgot to buy a feeder', 'Snow melted the seeds'],
      answer: 'The squirrel ate the birdseed',
      explanation: 'The empty feeder and footprints leading to a plump squirrel are clues that support this inference.',
    },
  ],
}

const G5_ELA_MAIN_IDEA_PRINCIPLE: Principle = {
  id: 'p-g5-ela-main-idea',
  title: 'Two or More Main Ideas & Text Structures',
  standard: 'RI.5.2',
  summary: 'Determine two or more main ideas of a text, summarize key points, and identify structure.',
  bank: [
    {
      id: 'g5-ela-inf-1',
      type: 'mc',
      passage:
        'Honeybees pollinate apple, almond, and berry crops. They also make honey and beeswax. Because of their work, farms grow far more food.',
      prompt: 'What is the main idea of this passage?',
      choices: ['Honeybees are helpful insects that support food crops', 'Almonds grow on trees', 'Beeswax is yellow', 'Farms only grow apples'],
      answer: 'Honeybees are helpful insects that support food crops',
      explanation: 'The main idea summarizes the key point that bees benefit agriculture through pollination and honey.',
    },
    {
      id: 'g5-ela-inf-2',
      type: 'mc',
      passage:
        'Both alligators and crocodiles are large reptiles with scaly skin. However, alligators live in freshwater while crocodiles prefer saltwater swamps.',
      prompt: 'What text structure is used in this passage?',
      choices: ['Compare and contrast', 'Chronological order', 'Problem and solution', 'Cause and effect'],
      answer: 'Compare and contrast',
      explanation: 'The passage highlights similarities ("both") and differences ("however") between alligators and crocodiles.',
    },
    {
      id: 'g5-ela-inf-3',
      type: 'mc',
      passage:
        'Heavy rains soaked the hillside for three days. As a result, wet mud slid down into the valley, blocking the mountain road.',
      prompt: 'What text structure is used in this passage?',
      choices: ['Cause and effect', 'Compare and contrast', 'Alphabetical order', 'Dialogue'],
      answer: 'Cause and effect',
      explanation: 'The passage explains a cause (heavy rain) and its result (a mudslide blocking the road).',
    },
    {
      id: 'g5-ela-inf-4',
      type: 'mc',
      prompt: 'What belongs in an objective summary of an informational text?',
      choices: ['Main facts without personal opinions', 'Your favorite jokes', 'Whether you liked the book cover', 'Guesses about what happens next'],
      answer: 'Main facts without personal opinions',
      explanation: 'An objective summary includes only key ideas and facts from the author, without opinions.',
    },
    {
      id: 'g5-ela-inf-5',
      type: 'mc',
      prompt: 'Which signal words point to a chronological text structure?',
      choices: ['First, next, then, finally', 'Both, unlike, similarly', 'Because, therefore, as a result', 'Problem, solve, fix'],
      answer: 'First, next, then, finally',
      explanation: 'Words showing order of time signal chronological text structure.',
    },
    {
      id: 'g5-ela-inf-6',
      type: 'mc',
      passage:
        'Plastic trash pollutes our oceans and harms marine turtles. To solve this crisis, communities organize monthly beach cleanups and ban single-use straws.',
      prompt: 'What text structure organizes this ocean paragraph?',
      choices: ['Problem and solution', 'Compare and contrast', 'Chronological order', 'Fairy tale'],
      answer: 'Problem and solution',
      explanation: 'The author states a problem (plastic ocean trash) and presents practical solutions.',
    },
  ],
}

const G5_ELA_FIGURATIVE_PRINCIPLE: Principle = {
  id: 'p-g5-ela-fig',
  title: 'Metaphors, Similes, Idioms & Adages',
  standard: 'L.5.5',
  summary: 'Interpret figurative language including similes, metaphors, hyperbole, and traditional adages.',
  bank: [
    {
      id: 'g5-ela-fig-1',
      type: 'mc',
      prompt: 'Which sentence contains a metaphor?',
      choices: ['The classroom was a busy beehive today.', 'He ran as fast as a cheetah.', 'Her hands felt like ice.', 'The puppy barked at noon.'],
      answer: 'The classroom was a busy beehive today.',
      explanation: 'A metaphor compares two unlike things directly without using "like" or "as."',
    },
    {
      id: 'g5-ela-fig-2',
      type: 'mc',
      prompt: 'Which sentence contains a simile?',
      choices: ['The lake was as smooth as glass.', 'The computer is a brain in a box.', 'Time is a thief.', 'She opened the front door.'],
      answer: 'The lake was as smooth as glass.',
      explanation: 'A simile compares two things using "like" or "as."',
    },
    {
      id: 'g5-ela-fig-3',
      type: 'mc',
      prompt: 'What does the idiom "on cloud nine" mean?',
      choices: ['Extremely happy and excited', 'Flying in an airplane', 'Lost in bad weather', 'Very confused'],
      answer: 'Extremely happy and excited',
      explanation: 'The idiom "on cloud nine" means feeling great happiness or joy.',
    },
    {
      id: 'g5-ela-fig-4',
      type: 'mc',
      prompt: 'Which sentence uses personification?',
      choices: ['The autumn wind whispered through the trees.', 'The red leaves fell from branches.', 'The acorns were round and hard.', 'Squirrels buried acorns in dirt.'],
      answer: 'The autumn wind whispered through the trees.',
      explanation: 'Personification gives human traits (like whispering) to non-human things (like wind).',
    },
    {
      id: 'g5-ela-fig-5',
      type: 'mc',
      prompt: 'What does the adage "Don’t judge a book by its cover" mean?',
      choices: ['Do not judge someone only by appearance', 'All book covers should be plain', 'Never buy a book with a picture', 'Always read every page in order'],
      answer: 'Do not judge someone only by appearance',
      explanation: 'This traditional adage advises that outward appearance does not reveal true character.',
    },
    {
      id: 'g5-ela-fig-6',
      type: 'mc',
      prompt: 'Which sentence is an example of hyperbole?',
      choices: ['My backpack weighs a million pounds.', 'My backpack has two zippers.', 'The backpack is dark navy blue.', 'I carried my books to class.'],
      answer: 'My backpack weighs a million pounds.',
      explanation: 'Hyperbole is deliberate, extreme exaggeration used for dramatic effect.',
    },
  ],
}

const G5_ELA_ROOTS_PRINCIPLE: Principle = {
  id: 'p-g5-ela-roots',
  title: 'Greek & Latin Roots, Prefixes & Suffixes',
  standard: 'OH.5.L.4',
  summary: 'Determine unknown word meanings using Greek/Latin roots (bio, geo, tele, photo, port, spect).',
  bank: [
    {
      id: 'g5-ela-rt-1',
      type: 'mc',
      prompt: 'What does the Latin root "port" mean in transport and portable?',
      choices: ['Carry', 'See', 'Speak', 'Break'],
      answer: 'Carry',
      explanation: 'The root "port" means to carry (portable means easy to carry).',
    },
    {
      id: 'g5-ela-rt-2',
      type: 'mc',
      prompt: 'What does the Greek root "photo" mean in photosynthesis and photograph?',
      choices: ['Light', 'Sound', 'Earth', 'Life'],
      answer: 'Light',
      explanation: 'The Greek root "photo" means light (photography is recording with light).',
    },
    {
      id: 'g5-ela-rt-3',
      type: 'mc',
      prompt: 'What does the Greek root "bio" mean in biology and biosphere?',
      choices: ['Life', 'Water', 'Rock', 'Time'],
      answer: 'Life',
      explanation: 'The Greek root "bio" means life or living things (biology is the study of life).',
    },
    {
      id: 'g5-ela-rt-4',
      type: 'mc',
      prompt: 'What does the Latin root "spect" mean in spectator and inspect?',
      choices: ['Look or see', 'Hear or listen', 'Write or draw', 'Run or walk'],
      answer: 'Look or see',
      explanation: 'The root "spect" means to look or watch (a spectator watches an event).',
    },
    {
      id: 'g5-ela-rt-5',
      type: 'mc',
      prompt: 'What does the prefix "un-" mean in unhappy and unlock?',
      choices: ['Not or opposite of', 'Before or early', 'Again or repeat', 'After or later'],
      answer: 'Not or opposite of',
      explanation: 'The prefix "un-" negates the base word (unhappy = not happy).',
    },
    {
      id: 'g5-ela-rt-6',
      type: 'mc',
      prompt: 'What does the suffix "-less" mean in fearless and homeless?',
      choices: ['Without', 'Full of', 'Able to', 'In a certain way'],
      answer: 'Without',
      explanation: 'The suffix "-less" means without or lacking (fearless = without fear).',
    },
  ],
}

const G5_ELA_GRAMMAR_PRINCIPLE: Principle = {
  id: 'p-g5-ela-grammar',
  title: 'Perfect Verb Tenses, Conjunctions & Prepositions',
  standard: 'L.5.1',
  summary: 'Use verb tenses (past, present, future perfect), correlative conjunctions, and prepositions correctly.',
  bank: [
    {
      id: 'g5-ela-gr-1',
      type: 'mc',
      prompt: 'Which sentence is written in the past perfect verb tense?',
      choices: ['She had finished lunch before the bell rang.', 'She is eating her lunch now.', 'She will eat lunch tomorrow.', 'She eats lunch every day.'],
      answer: 'She had finished lunch before the bell rang.',
      explanation: 'Past perfect uses "had" plus a past participle to show an action completed before another past event.',
    },
    {
      id: 'g5-ela-gr-2',
      type: 'mc',
      prompt: 'Which pair of correlative conjunctions correctly completes: "__ Maya __ Sam won"?',
      choices: ['Either ... or', 'Both ... but', 'Neither ... so', 'Whether ... and'],
      answer: 'Either ... or',
      explanation: '"Either ... or" is a correlative conjunction pair used to link two options.',
    },
    {
      id: 'g5-ela-gr-3',
      type: 'mc',
      prompt: 'Which sentence uses a prepositional phrase showing location?',
      choices: ['The squirrel hid under the wooden porch.', 'The squirrel ran very quickly.', 'The squirrel chattered loudly.', 'The squirrel was furry.'],
      answer: 'The squirrel hid under the wooden porch.',
      explanation: '"Under the wooden porch" is a prepositional phrase answering where the squirrel hid.',
    },
    {
      id: 'g5-ela-gr-4',
      type: 'mc',
      prompt: 'Which sentence is written in the future perfect tense?',
      choices: ['By noon, we will have completed the project.', 'We are completing the project today.', 'We completed the project yesterday.', 'We complete projects together.'],
      answer: 'By noon, we will have completed the project.',
      explanation: 'Future perfect uses "will have" plus past participle to show an action that will finish before a future time.',
    },
    {
      id: 'g5-ela-gr-5',
      type: 'mc',
      prompt: 'Which choice is a sentence fragment instead of a complete sentence?',
      choices: ['Because the school bus arrived ten minutes early.', 'The school bus arrived ten minutes early.', 'Students lined up on the sidewalk.', 'The driver opened the doors.'],
      answer: 'Because the school bus arrived ten minutes early.',
      explanation: 'Starting with "Because" creates a dependent clause that cannot stand alone as a sentence.',
    },
    {
      id: 'g5-ela-gr-6',
      type: 'mc',
      prompt: 'Which sentence uses the correlative conjunction pair "neither ... nor" correctly?',
      choices: ['Neither rain nor snow stopped the mail carrier.', 'Neither rain and snow stopped the carrier.', 'Neither rain or snow stopped the carrier.', 'Either rain nor snow stopped the carrier.'],
      answer: 'Neither rain nor snow stopped the mail carrier.',
      explanation: '"Neither" always pairs with "nor" to link two negative alternatives.',
    },
  ],
}

const G5_ELA_WRITING_PRINCIPLE: Principle = {
  id: 'p-g5-ela-writing',
  title: 'Opinion, Informative & Narrative Writing Craft',
  standard: 'W.5.1',
  summary: 'State clear thesis claims, develop logically grouped paragraphs, and incorporate transitional phrases.',
  bank: [
    {
      id: 'g5-ela-wr-1',
      type: 'mc',
      prompt: 'What is the purpose of a thesis statement in an opinion essay?',
      choices: ['Clearly state the author’s main claim or stance', 'List every dictionary definition used', 'Write the concluding sentence first', 'Provide four unrelated jokes'],
      answer: 'Clearly state the author’s main claim or stance',
      explanation: 'A thesis statement presents the writer’s central argument or opinion clearly in the introduction.',
    },
    {
      id: 'g5-ela-wr-2',
      type: 'mc',
      prompt: 'Which transition word best signals an additional supporting point?',
      choices: ['Furthermore', 'However', 'Instead', 'Nonetheless'],
      answer: 'Furthermore',
      explanation: '"Furthermore" and "moreover" signal that the author is adding another supporting argument.',
    },
    {
      id: 'g5-ela-wr-3',
      type: 'mc',
      prompt: 'What should each body paragraph in an informative essay focus on?',
      choices: ['A single subtopic supported by facts', 'Five unrelated stories', 'The final conclusion statement', 'Only personal feelings'],
      answer: 'A single subtopic supported by facts',
      explanation: 'Strong informational essays group related information into distinct paragraphs with evidence.',
    },
    {
      id: 'g5-ela-wr-4',
      type: 'mc',
      prompt: 'Which sentence correctly quotes a line from an author?',
      choices: ['The author writes, "Solar panels capture clean energy."', 'The author writes "Solar panels capture clean energy".', 'The author writes, Solar panels capture clean energy.', '"The author writes" Solar panels capture clean energy.'],
      answer: 'The author writes, "Solar panels capture clean energy."',
      explanation: 'Direct quotes are introduced with a comma and enclosed in quotation marks with ending punctuation inside.',
    },
    {
      id: 'g5-ela-wr-5',
      type: 'mc',
      prompt: 'What narrative element shows how a character changes through the story?',
      choices: ['Character development', 'The book copyright date', 'The printer font size', 'The table of contents'],
      answer: 'Character development',
      explanation: 'Character development reveals how characters grow or learn life lessons through experiences.',
    },
    {
      id: 'g5-ela-wr-6',
      type: 'mc',
      prompt: 'Which transition word best signals a cause and effect relationship?',
      choices: ['Consequently', 'Similarly', 'Meanwhile', 'Beforehand'],
      answer: 'Consequently',
      explanation: '"Consequently" means "as a result of," signaling a clear causal connection between events.',
    },
  ],
}

export const G5_ELA_COURSE: Course = {
  id: 'g5-ela',
  subject: 'ela',
  grade: 5,
  title: '5th grade reading, grammar, and vocab',
  subtitle: 'Literary & Informational Text Analysis, Figurative Language, Roots, Grammar & Writing',
  credits: 1.0,
  color: '#8b5cf6',
  icon: '📚',
  externalCourseLinks: [
    {
      label: 'Khan: 5th grade reading, grammar, and vocab',
      url: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab',
    },
    {
      label: 'Khan: Grammar',
      url: 'https://www.khanacademy.org/humanities/grammar',
    },
  ],
  units: [
    // UNIT 1: Inferences and Quoting Evidence (4 Lessons)
    {
      id: 'g5-ela-u1',
      title: 'Unit 1: Quoting Evidence & Making Inferences',
      standards: ['RL.5.1', 'RI.5.1'],
      lessons: [
        {
          id: 'g5-ela-u1-l1',
          unitId: 'g5-ela-u1',
          title: 'Quoting Accurately from the Text',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Citing Evidence in Reading',
          reading: 'When writing about a text, quote directly from the author using quotation marks, or paraphrase the key facts accurately to prove your analysis.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u1-l2',
          unitId: 'g5-ela-u1',
          title: 'Making Deep Inferences from Clues',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Inferences and Evidence',
          reading: 'Authors do not explain every thought directly. Combine specific character actions and descriptions with your own life experiences to make smart inferences.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u1-l3',
          unitId: 'g5-ela-u1',
          title: 'Drawing Conclusions from Informational Texts',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Drawing Conclusions in Nonfiction',
          reading: 'In informational articles, examine statistics, headings, and expert quotes to support inferences about historical events and scientific discoveries.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u1-l4',
          unitId: 'g5-ela-u1',
          title: 'Unit 1 Review: Evidence & Inferences Checkpoint',
          kind: 'lesson_review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Unit 1 Review',
          reading: 'Assessment testing accuracy in direct quotation, inferencing, and textual proof.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Main Ideas & Text Structures (4 Lessons)
    {
      id: 'g5-ela-u2',
      title: 'Unit 2: Two or More Main Ideas & Text Structures',
      standards: ['RI.5.2', 'RI.5.5'],
      lessons: [
        {
          id: 'g5-ela-u2-l1',
          unitId: 'g5-ela-u2',
          title: 'Determining Two or More Main Ideas',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Multiple Main Ideas in Informational Texts',
          reading: 'Complex informational texts often contain two or more major main ideas. Explain how the author supports each main point with key details and examples.',
          principles: [G5_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g5-ela-u2-l2',
          unitId: 'g5-ela-u2',
          title: 'Comparing Text Structures & Summarizing',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Informational Text Structures',
          reading: 'Identify whether text is organized by chronology, comparison, cause/effect, or problem/solution. Write objective summaries without adding personal opinion.',
          principles: [G5_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g5-ela-u2-l3',
          unitId: 'g5-ela-u2',
          title: 'Cause-Effect and Problem-Solution Organization',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Cause, Effect, and Solutions',
          reading: 'Look for signal words: because, therefore, as a result, consequently, and one solution is to identify organizational patterns.',
          principles: [G5_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g5-ela-u2-l4',
          unitId: 'g5-ela-u2',
          title: 'Unit 2 Review: Main Ideas & Summarizing Checkpoint',
          kind: 'lesson_review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Unit 2 Review',
          reading: 'Assessment testing identification of dual main ideas, organizational patterns, and objective summary writing.',
          principles: [G5_ELA_MAIN_IDEA_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Reading Literature, Characters & Themes (4 Lessons)
    {
      id: 'g5-ela-u3',
      title: 'Unit 3: Literature, Characters & Theme Analysis',
      standards: ['RL.5.2', 'RL.5.3'],
      lessons: [
        {
          id: 'g5-ela-u3-l1',
          unitId: 'g5-ela-u3',
          title: 'Comparing Characters & Settings in Stories',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Comparing Characters and Settings',
          reading: 'Compare and contrast two or more characters, settings, or events in a story, drawing on specific details in the text (such as dialogue and descriptions).',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u3-l2',
          unitId: 'g5-ela-u3',
          title: 'Determining Theme from Character Growth',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Determining Theme in Stories',
          reading: 'Determine a theme of a story, drama, or poem from details in the text, including how characters in a story or drama respond to challenges.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u3-l3',
          unitId: 'g5-ela-u3',
          title: 'Story Climaxes and Conflict Resolution',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Plot Turning Points and Climax',
          reading: 'Track how internal and external conflicts build toward the climax and reveal the deeper life message of the author.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u3-l4',
          unitId: 'g5-ela-u3',
          title: 'Unit 3 Review: Literary Theme & Character Checkpoint',
          kind: 'lesson_review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Unit 3 Review',
          reading: 'Assessment testing character comparison, conflict resolution, and theme determination.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: Figurative Language, Idioms & Adages (4 Lessons)
    {
      id: 'g5-ela-u4',
      title: 'Unit 4: Figurative Language, Idioms & Adages',
      standards: ['L.5.5'],
      lessons: [
        {
          id: 'g5-ela-u4-l1',
          unitId: 'g5-ela-u4',
          title: 'Similes, Metaphors & Personification',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/vocabulary',
          videoTitle: 'Similes, Metaphors and Personification',
          reading: 'Interpret figurative language in context: similes compare using like or as, metaphors compare directly, and personification gives human traits to objects.',
          principles: [G5_ELA_FIGURATIVE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u4-l2',
          unitId: 'g5-ela-u4',
          title: 'Idioms, Proverbs & Traditional Adages',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/vocabulary',
          videoTitle: 'Idioms, Proverbs, and Adages',
          reading: 'Recognize and explain the meaning of common idioms (piece of cake), proverbs, and traditional adages that communicate cultural wisdom.',
          principles: [G5_ELA_FIGURATIVE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u4-l3',
          unitId: 'g5-ela-u4',
          title: 'Point of View and Author’s Tone',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Point of View and Perspective',
          reading: 'Describe how a narrator’s or speaker’s point of view influences how events are described and shapes the mood and tone.',
          principles: [G5_ELA_FIGURATIVE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u4-l4',
          unitId: 'g5-ela-u4',
          title: 'Unit 4 Review: Figurative Language Checkpoint',
          kind: 'lesson_review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/vocabulary',
          videoTitle: 'Unit 4 Review',
          reading: 'Assessment testing recognition of metaphors, similes, personification, idioms, and point of view.',
          principles: [G5_ELA_FIGURATIVE_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Greek & Latin Roots, Prefixes & Suffixes (4 Lessons - Ohio Standard)
    {
      id: 'g5-ela-u5',
      title: 'Unit 5: Greek & Latin Roots, Prefixes & Suffixes',
      isOhioExtension: true,
      standards: ['OH.5.L.4'],
      lessons: [
        {
          id: 'g5-ela-u5-l1',
          unitId: 'g5-ela-u5',
          title: 'Common Roots: Bio, Geo, Port & Photo',
          kind: 'lesson',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-word-study',
          videoTitle: 'Greek and Latin Roots in Vocabulary',
          reading: 'Use common, grade-appropriate Greek and Latin roots and affixes as clues to the meaning of a word (e.g. bio = life; geo = earth; port = carry).',
          principles: [G5_ELA_ROOTS_PRINCIPLE],
        },
        {
          id: 'g5-ela-u5-l2',
          unitId: 'g5-ela-u5',
          title: 'Prefixes, Suffixes & Word Decomposition',
          kind: 'lesson',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-word-study',
          videoTitle: 'Using Prefixes and Suffixes',
          reading: 'Deconstruct complex academic vocabulary by separating prefixes (un-, re-, pre-) and suffixes (-less, -ful, -tion) from the root base.',
          principles: [G5_ELA_ROOTS_PRINCIPLE],
        },
        {
          id: 'g5-ela-u5-l3',
          unitId: 'g5-ela-u5',
          title: 'Roots in Science and Social Studies Words',
          kind: 'lesson',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-word-study',
          videoTitle: 'Cross-Disciplinary Word Roots',
          reading: 'Apply root analysis to academic vocabulary like democracy (demos + kratos), biosphere, geography, and transport.',
          principles: [G5_ELA_ROOTS_PRINCIPLE],
        },
        {
          id: 'g5-ela-u5-l4',
          unitId: 'g5-ela-u5',
          title: 'Unit 5 Review: Greek & Latin Roots Checkpoint',
          kind: 'lesson_review',
          isOhioExtension: true,
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-word-study',
          videoTitle: 'Unit 5 Review',
          reading: 'Assessment testing morpheme decomposition, prefix/suffix meanings, and Greek/Latin root word families.',
          principles: [G5_ELA_ROOTS_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Perfect Verb Tenses & Conjunctions (4 Lessons)
    {
      id: 'g5-ela-u6',
      title: 'Unit 6: Perfect Verb Tenses & Correlative Conjunctions',
      standards: ['L.5.1'],
      lessons: [
        {
          id: 'g5-ela-u6-l1',
          unitId: 'g5-ela-u6',
          title: 'Present, Past & Future Perfect Verb Tenses',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-verbs',
          videoTitle: 'Perfect Verb Tenses',
          reading: 'Form and use the perfect verb tenses (I have walked, I had walked, I will have walked) to indicate completed actions relative to other time periods.',
          principles: [G5_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g5-ela-u6-l2',
          unitId: 'g5-ela-u6',
          title: 'Correlative Conjunctions & Prepositions',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-prepositions-and-interjections',
          videoTitle: 'Correlative Conjunctions and Prepositions',
          reading: 'Use correlative conjunctions in matching pairs (either/or, neither/nor, both/and) and expand sentences with vivid prepositional phrases.',
          principles: [G5_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g5-ela-u6-l3',
          unitId: 'g5-ela-u6',
          title: 'Punctuation: Commas in Series, Direct Address, and Tag Questions',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/grammar-punctuation-and-capitalization',
          videoTitle: 'Commas in Complex Sentences',
          reading: 'Use punctuation to separate items in a series, set off introductory elements, and indicate direct address.',
          principles: [G5_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g5-ela-u6-l4',
          unitId: 'g5-ela-u6',
          title: 'Unit 6 Review: Grammar Conventions Checkpoint',
          kind: 'lesson_review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/humanities/grammar',
          videoTitle: 'Unit 6 Review',
          reading: 'Assessment testing mastery of perfect verb tenses, correlative conjunctions, and comma mechanics.',
          principles: [G5_ELA_GRAMMAR_PRINCIPLE],
        },
      ],
    },

    // UNIT 7: Writing Craft: Opinion, Informative & Narrative (4 Lessons)
    {
      id: 'g5-ela-u7',
      title: 'Unit 7: Opinion, Informative & Narrative Writing Craft',
      standards: ['W.5.1', 'W.5.2', 'W.5.3'],
      lessons: [
        {
          id: 'g5-ela-u7-l1',
          unitId: 'g5-ela-u7',
          title: 'Thesis Statements & Informative Essays',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Writing Informative Essays',
          reading: 'Draft strong introductory paragraphs with a clear thesis claim, group related evidence into paragraphs, and use transitional words (furthermore, consequently).',
          principles: [G5_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g5-ela-u7-l2',
          unitId: 'g5-ela-u7',
          title: 'Narrative Dialogue & Character Pacing',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Dialogue and Pacing in Stories',
          reading: 'Use dialogue to show character personalities and accelerate plot pacing. Punctuate quotations accurately with commas and quotation marks.',
          principles: [G5_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g5-ela-u7-l3',
          unitId: 'g5-ela-u7',
          title: 'Persuasive Opinion Essays & Evidence Elaboration',
          kind: 'lesson',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Opinion Essay Construction',
          reading: 'State an opinion clearly, support reasons with verified facts, elaborate on evidence, and provide a strong concluding statement.',
          principles: [G5_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g5-ela-u7-l4',
          unitId: 'g5-ela-u7',
          title: 'Unit 7 Review: Writing Craft & Organization Checkpoint',
          kind: 'lesson_review',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Unit 7 Review',
          reading: 'Assessment testing thesis formulation, transitional phrasing, dialogue punctuation, and essay structure.',
          principles: [G5_ELA_WRITING_PRINCIPLE],
        },
      ],
    },

    // UNIT 8: Grade 5 ELA Course Challenge (3 Lessons)
    {
      id: 'g5-ela-u8',
      title: 'Unit 8: Grade 5 ELA Course Challenge',
      standards: ['RL.5', 'RI.5', 'W.5', 'L.5'],
      lessons: [
        {
          id: 'g5-ela-u8-l1',
          unitId: 'g5-ela-u8',
          title: 'Course Challenge Part 1: Literature, Theme & Quoting Evidence',
          kind: 'lesson_review',
          estimatedMinutes: 20,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab',
          videoTitle: 'ELA Course Challenge Part 1',
          reading: 'Comprehensive review testing text quoting accuracy, deep inferencing, theme identification, and character analysis.',
          principles: [G5_ELA_THEME_EVIDENCE_PRINCIPLE],
        },
        {
          id: 'g5-ela-u8-l2',
          unitId: 'g5-ela-u8',
          title: 'Course Challenge Part 2: Informational Text Structures & Main Ideas',
          kind: 'lesson_review',
          estimatedMinutes: 20,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab',
          videoTitle: 'ELA Course Challenge Part 2',
          reading: 'Comprehensive review analyzing complex informational text structures, multiple main ideas, and summarizing.',
          principles: [G5_ELA_MAIN_IDEA_PRINCIPLE],
        },
        {
          id: 'g5-ela-u8-l3',
          unitId: 'g5-ela-u8',
          title: 'Course Challenge Part 3: Language Conventions & Root Morphology',
          kind: 'lesson_review',
          estimatedMinutes: 20,
          videoUrl: 'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab',
          videoTitle: 'ELA Course Challenge Part 3',
          reading: 'Final comprehensive assessment covering Greek/Latin roots, perfect verb tenses, conjunctions, and essay craft.',
          principles: [G5_ELA_ROOTS_PRINCIPLE],
        },
      ],
    },

    // UNIT 9: Explore ELA Through Creative Projects (enrichment)
    {
      id: 'g5-ela-u9',
      title: 'Unit 9: Explore ELA Through Creative Projects',
      kind: 'explore',
      standards: ['W.5.4', 'SL.5.4', 'RL.5.7'],
      lessons: [],
      exploreItems: [
        {
          id: 'g5-ela-exp-historic-diary',
          title: 'Historical Fiction Writing Lab: The Pioneer Diary',
          type: 'project',
          description:
            'Step into the shoes of a 5th grader traveling west in a wagon train or working in a 19th century canal town. Write three detailed diary entries.',
          estimatedMinutes: 30,
          materials: ['Paper and pen, or word processing software'],
          steps: [
            'Choose a historic setting (e.g. Ohio canal boat journey, Great Plains homestead, early space race launch).',
            'Write 3 chronological journal entries using first-person point of view.',
            'Include at least two lines of authentic dialogue with another character.',
            'Incorporate at least one metaphor and one idiom.',
          ],
          reflectionPrompt: 'How did writing in first person help you understand what life was like for people in that historic era?',
          requiresParentPin: false,
        },
        {
          id: 'g5-ela-exp-speech-podcast',
          title: 'Oral Communication Lab: The 2-Minute Persuasive Speech',
          type: 'hands_on',
          description:
            'Write and record a short 2-minute persuasive speech on a topic you care about (e.g. protecting local wetlands, getting more library time, or adopting shelter pets).',
          estimatedMinutes: 25,
          materials: ['Notecards or outline sheet', 'Voice recorder or smartphone'],
          steps: [
            'Pick a clear stance on a community or environmental topic.',
            'Draft an opening hook, 2 strong reasons backed by facts, and a call to action.',
            'Practice delivering your speech clearly at a steady pace.',
            'Record the speech and evaluate your vocal tone and pauses.',
          ],
          reflectionPrompt: 'Which argument in your speech do you think was most convincing to the listener?',
          requiresParentPin: false,
        },
        {
          id: 'g5-ela-exp-storyline-author',
          title: 'Storyline Online: Master Storytellers and Character Voices',
          type: 'video',
          description:
            'Listen to an acclaimed children’s book read by professional actors on Storyline Online. Analyze how character voice, music, and pacing shape the story’s theme.',
          url: 'https://storylineonline.net/',
          estimatedMinutes: 20,
          reflectionPrompt: 'How did the reader’s expression change when the main character faced their greatest obstacle?',
          requiresParentPin: true,
        },
      ],
    },

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g5-ela-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['RL.5', 'RI.5', 'W.5', 'L.5'],
      lessons: [],
      resources: [
        {
          id: 'g5-ela-res-pacing',
          title: 'Grade 5 Language Arts 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Comprehensive pacing schedule integrating literary analysis, informational text comprehension, writing workshops, and root study.',
          body: `## Grade 5 ELA Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Quoting Evidence & Making Inferences (RL.5.1, RI.5.1)
- **Weeks 5–8**: Unit 2 — Two or More Main Ideas & Text Structures (RI.5.2, RI.5.5)
- **Weeks 9–13**: Unit 3 — Literature, Characters & Theme Analysis (RL.5.2, RL.5.3)
- **Week 14**: Quarter 1 Reading Comprehension Checkpoint
- **Weeks 15–18**: Unit 4 — Figurative Language, Idioms & Adages (L.5.5)
- **Weeks 19–23**: Unit 5 — Greek & Latin Roots, Prefixes & Suffixes (OH.5.L.4)
- **Weeks 24–28**: Unit 6 — Perfect Verb Tenses & Conjunctions (L.5.1)
- **Week 29**: Quarter 2 & 3 Vocabulary & Language Conventions Review
- **Weeks 30–34**: Unit 7 — Opinion, Informative & Narrative Writing Craft (W.5.1-3)
- **Weeks 35–36**: Unit 8 — Capstone Podcast Presentations & Course Challenge`,
        },
        {
          id: 'g5-ela-res-rubric',
          title: 'Grade 5 Multi-Paragraph Writing Evaluation Rubric',
          kind: 'assessment_rubric',
          description:
            'Four-category scoring rubric for evaluating opinion essays, research reports, and narrative fiction.',
          body: `## Grade 5 Essay Evaluation Rubric (4-Point Scale)

1. **Thesis & Purpose**: Clearly states an opinion claim or informative focus in the introductory paragraph.
2. **Organization & Transitions**: Logically sequences body paragraphs using varied transitions (moreover, consequently, however).
3. **Evidence & Quoting**: Cites direct textual evidence with proper quotation marks and elaborates with analysis.
4. **Conventions**: Demonstrates command of perfect verb tenses, correlative conjunctions, and correct capitalization/punctuation.`,
        },
        {
          id: 'g5-ela-res-roots',
          title: 'Grade 5 Greek & Latin Root Word Matrix',
          kind: 'printable',
          description: 'Printable reference chart of the 30 essential Greek and Latin roots for 5th grade.',
          body: `## Essential Grade 5 Greek & Latin Roots

- **bio** (life): biography, biology, biome
- **geo** (earth): geography, geology, geometry
- **photo** (light): photosynthesis, photograph, photon
- **tele** (distance): telescope, television, teleport
- **port** (carry): transport, portable, import, export
- **spect** (watch): spectator, inspect, spectacle
- **struct** (build): construct, structure, instruct
- **phon** (sound): phonics, microphone, symphony`,
        },
      ],
    },
  ],
}
