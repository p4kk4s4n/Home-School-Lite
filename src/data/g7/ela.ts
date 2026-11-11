import { Course, Principle } from '../../types'

// Principles for Grade 7 ELA
const G7_ELA_THEME_PRINCIPLE: Principle = {
  id: 'p-g7-ela-theme',
  title: 'Theme & How Setting Shapes Plot and Characters',
  standard: 'RL.7.2 / RL.7.3',
  summary: 'The setting creates challenges that shape character choices and reveal the theme.',
  bank: [
    {
      id: 'g7-ela-thm-1',
      passage:
        'A sudden blizzard trapped Maya at the mountain cabin. With the firewood nearly gone, she shared her heaviest blanket with her younger brother and rationed the warm soup.',
      prompt: 'How does the blizzard setting affect Maya?',
      type: 'mc',
      choices: ['It forces her to act unselfishly', 'It makes her forget her brother', 'It lets her walk to town', 'It ends the winter early'],
      answer: 'It forces her to act unselfishly',
      explanation: 'Setting is the time and place of a story, which often creates conflict that tests characters.',
    },
    {
      id: 'g7-ela-thm-2',
      passage:
        'Eli practiced his speech every evening despite his stutter. On contest day, his voice trembled at first, yet he finished clearly and smiled with pride.',
      prompt: 'What is the main theme of this passage?',
      type: 'mc',
      choices: ['Persistence helps overcome hard challenges', 'Winning trophies is all that matters', 'Public speaking is always easy', 'Friends should write your speeches'],
      answer: 'Persistence helps overcome hard challenges',
      explanation: 'Theme is the deeper life lesson or message about human nature revealed through the story.',
    },
    {
      id: 'g7-ela-thm-3',
      passage:
        'In the parched desert town, every family guarded their water barrels. When Lena’s neighbor lost his well, Lena carried two full jugs to his porch.',
      prompt: 'Why is the dry desert setting important to the plot?',
      type: 'mc',
      choices: ['Scarcity makes Lena’s gift meaningful', 'Water is cheap and easy to find', 'Everyone wants to go swimming', 'Rain falls every afternoon'],
      answer: 'Scarcity makes Lena’s gift meaningful',
      explanation: 'Plot is the sequence of events; a harsh setting raises the stakes of a character’s choice.',
    },
    {
      id: 'g7-ela-thm-4',
      prompt: 'What is the difference between a topic and a theme?',
      type: 'mc',
      choices: ['Theme is a full message about life', 'Theme is just one single word', 'Topic is the main character’s name', 'Topic tells where the story ends'],
      answer: 'Theme is a full message about life',
      explanation: 'A topic is a subject like "friendship," while a theme is a complete statement like "true friends stay loyal."',
    },
    {
      id: 'g7-ela-thm-5',
      passage:
        'Toby boasted that he needed no map on the forest trail. Two hours later, facing three identical forks in the dim woods, he wished he had listened.',
      prompt: 'Which lesson does Toby’s experience teach?',
      type: 'mc',
      choices: ['Overconfidence can lead to avoidable mistakes', 'Maps are useless in the woods', 'Forest trails never have forks', 'Walking fast solves every problem'],
      answer: 'Overconfidence can lead to avoidable mistakes',
      explanation: 'Characters often learn a lesson when their flaws clash with the story’s conflict.',
    },
    {
      id: 'g7-ela-thm-6',
      prompt: 'What must an objective summary of a story leave out?',
      type: 'mc',
      choices: ['Personal opinions and feelings', 'The main character’s name', 'The central conflict', 'How the story ends'],
      answer: 'Personal opinions and feelings',
      explanation: 'An objective summary states only the key events and facts of a text without personal judgment.',
    },
  ],
}

const G7_ELA_POV_PRINCIPLE: Principle = {
  id: 'p-g7-ela-pov',
  title: 'Contrasting Points of View & Historical Fiction',
  standard: 'RL.7.6 / OH.RL.7.9',
  summary: 'Authors contrast character perspectives and blend historical facts with creative fiction.',
  bank: [
    {
      id: 'g7-ela-pov-1',
      passage:
        'Mia stared at the roller coaster with wide eyes, thrilled by the roaring drop. Beside her, Sam gripped the rail and wished he had stayed on the bench.',
      prompt: 'How does the author contrast Mia and Sam?',
      type: 'mc',
      choices: ['Mia feels excited while Sam feels afraid', 'Both characters hate amusement parks', 'Sam wants to ride twice', 'Mia is scared of heights'],
      answer: 'Mia feels excited while Sam feels afraid',
      explanation: 'Point of view is how a character or narrator sees and feels about events in a story.',
    },
    {
      id: 'g7-ela-pov-2',
      prompt: 'How does a historical novel differ from a history textbook?',
      type: 'mc',
      choices: ['It adds invented characters and dialogue', 'It never mentions real dates', 'It only uses photographs', 'It avoids any real places'],
      answer: 'It adds invented characters and dialogue',
      explanation: 'Historical fiction combines real historical settings with imaginative characters and emotions.',
    },
    {
      id: 'g7-ela-pov-3',
      passage:
        'History record: The 1913 Ohio flood damaged thousands of homes in Dayton. Novel excerpt: Young Clara watched muddy river water swirl past her attic window.',
      prompt: 'Why did the novelist include Clara’s attic view?',
      type: 'mc',
      choices: ['To show the human emotion of the flood', 'To prove floods never happened', 'To list city tax numbers', 'To replace weather maps'],
      answer: 'To show the human emotion of the flood',
      explanation: 'Fiction writers use personal perspectives to help readers feel what living through history was like.',
    },
    {
      id: 'g7-ela-pov-4',
      prompt: 'Which pronoun shows a story is told in first-person point of view?',
      type: 'mc',
      choices: ['I', 'They', 'She', 'You'],
      answer: 'I',
      explanation: 'First-person point of view uses pronouns like "I" and "we" because a character tells the story.',
    },
    {
      id: 'g7-ela-pov-5',
      prompt: 'What can a third-person omniscient narrator do?',
      type: 'mc',
      choices: ['Know the thoughts of multiple characters', 'Only speak as one minor character', 'Never describe any feelings', 'Write only in rhyme'],
      answer: 'Know the thoughts of multiple characters',
      explanation: 'An omniscient narrator is all-knowing and can reveal the inner thoughts of any character.',
    },
    {
      id: 'g7-ela-pov-6',
      passage:
        'Coach Dan saw the rain as a chance to test team grit. However, the groundskeeper worried the muddy cleats would ruin the fresh grass.',
      prompt: 'Why do Coach Dan and the groundskeeper disagree?',
      type: 'mc',
      choices: ['Their jobs give them different priorities', 'Neither person notices the rain', 'Both want to cancel the game', 'They are on rival teams'],
      answer: 'Their jobs give them different priorities',
      explanation: 'Authors develop contrasting points of view by showing how characters’ roles shape their opinions.',
    },
  ],
}

const G7_ELA_ARGUMENT_PRINCIPLE: Principle = {
  id: 'p-g7-ela-arg',
  title: 'Central Ideas & Evaluating Arguments and Evidence',
  standard: 'RI.7.2 / RI.7.8',
  summary: 'Strong arguments support a clear claim with relevant evidence and sound reasoning.',
  bank: [
    {
      id: 'g7-ela-arg-1',
      passage:
        'Community gardens turn empty city lots into fresh food sources. Studies show neighborhoods with gardens eat more vegetables and report stronger neighbor connections.',
      prompt: 'What is the central claim of this passage?',
      type: 'mc',
      choices: ['Community gardens benefit health and neighborhoods', 'City lots should become parking garages', 'Vegetables only grow on large farms', 'Gardening takes too much water'],
      answer: 'Community gardens benefit health and neighborhoods',
      explanation: 'A central claim is the main argument an author wants readers to accept.',
    },
    {
      id: 'g7-ela-arg-2',
      prompt: 'Which piece of evidence best supports adding bicycle lanes on Main Street?',
      type: 'mc',
      choices: ['Accidents fell 40% on streets with bike lanes', 'Bicycles were invented over two centuries ago', 'Red is the most popular bicycle color', 'Some people prefer walking on sidewalks'],
      answer: 'Accidents fell 40% on streets with bike lanes',
      explanation: 'Relevant evidence provides direct, factual proof that supports the author’s specific claim.',
    },
    {
      id: 'g7-ela-arg-3',
      prompt: 'What makes an argument weak or unsupported?',
      type: 'mc',
      choices: ['Relying on personal insults instead of facts', 'Citing verified university research studies', 'Using clear statistical data', 'Explaining the counter-argument fairly'],
      answer: 'Relying on personal insults instead of facts',
      explanation: 'Sound reasoning uses logical facts; emotional attacks and insults weaken an argument.',
    },
    {
      id: 'g7-ela-arg-4',
      prompt: 'What is a counter-claim in an argumentative essay?',
      type: 'mc',
      choices: ['An opposing viewpoint that the author addresses', 'The author’s favorite opening sentence', 'A summary of the bibliography', 'A list of vocabulary definitions'],
      answer: 'An opposing viewpoint that the author addresses',
      explanation: 'Acknowledging and responding to counter-claims shows the author has considered multiple perspectives.',
    },
    {
      id: 'g7-ela-arg-5',
      passage:
        'Solar panels produce zero greenhouse gases during operation. Even in cloudy regions like northern Ohio, modern solar cells generate substantial clean electrical energy.',
      prompt: 'How does the second sentence strengthen the author’s argument?',
      type: 'mc',
      choices: ['It anticipates and answers a common objection', 'It proves clouds never form in Ohio', 'It argues for coal power instead', 'It changes the topic completely'],
      answer: 'It anticipates and answers a common objection',
      explanation: 'Effective arguments anticipate objections (like cloudiness) and provide facts to overcome them.',
    },
    {
      id: 'g7-ela-arg-6',
      prompt: 'What should an author do to assess whether a web source is credible?',
      type: 'mc',
      choices: ['Check author expertise, date, and verified citations', 'Pick whichever website has the brightest colors', 'Use the first link without reading who wrote it', 'Rely solely on anonymous internet forums'],
      answer: 'Check author expertise, date, and verified citations',
      explanation: 'Credible sources are written by qualified experts, provide transparent citations, and stay up to date.',
    },
  ],
}

const G7_ELA_GRAMMAR_PRINCIPLE: Principle = {
  id: 'p-g7-ela-grammar',
  title: 'Phrases, Clauses, Misplaced Modifiers & Root Etymology',
  standard: 'L.7.1 / L.7.4',
  summary: 'Phrases and clauses combine into complex sentences; modifiers must stay close to their nouns.',
  bank: [
    {
      id: 'g7-ela-gr-1',
      prompt: 'Which choice correctly fixes: "Walking to school, the backpack felt heavy"?',
      type: 'mc',
      choices: ['Walking to school, I felt my heavy backpack', 'The backpack walked to school feeling heavy', 'Walking, the backpack felt very heavy', 'To school walking, heavy felt the backpack'],
      answer: 'Walking to school, I felt my heavy backpack',
      explanation: 'A dangling modifier must logically describe the subject that immediately follows the comma.',
    },
    {
      id: 'g7-ela-gr-2',
      prompt: 'What is an independent clause in a sentence?',
      type: 'mc',
      choices: ['A clause with subject and verb that stands alone', 'A clause that cannot stand alone as a sentence', 'A group of adjectives with no verbs', 'A single punctuation mark'],
      answer: 'A clause with subject and verb that stands alone',
      explanation: 'An independent clause contains a subject and verb and expresses a complete, standalone thought.',
    },
    {
      id: 'g7-ela-gr-3',
      prompt: 'What does the Latin root "dict" mean in predict, dictionary, and contradict?',
      type: 'mc',
      choices: ['Speak or say', 'Run or walk', 'Break or tear', 'Look or see'],
      answer: 'Speak or say',
      explanation: 'The Latin root "dict" means to speak or tell (predict = say before).',
    },
    {
      id: 'g7-ela-gr-4',
      prompt: 'Which sentence is a complex sentence with one independent and one dependent clause?',
      type: 'mc',
      choices: ['Although the rain poured, the game continued.', 'The rain poured and the wind blew hard.', 'The rain poured all afternoon.', 'The game was exciting and fun.'],
      answer: 'Although the rain poured, the game continued.',
      explanation: 'A complex sentence combines one independent clause with at least one subordinating dependent clause.',
    },
    {
      id: 'g7-ela-gr-5',
      prompt: 'What does the Greek root "chron" mean in chronological and synchronize?',
      type: 'mc',
      choices: ['Time', 'Color', 'Sound', 'Space'],
      answer: 'Time',
      explanation: 'The Greek root "chron" means time (chronological = arranged in order of time).',
    },
    {
      id: 'g7-ela-gr-6',
      prompt: 'Which sentence correctly avoids a misplaced modifier?',
      type: 'mc',
      choices: ['Wearing a bright yellow raincoat, Sam walked the dog.', 'Sam walked the dog wearing a bright yellow raincoat.', 'The dog walked Sam wearing a yellow raincoat.', 'Wearing a yellow raincoat, the dog leash broke.'],
      answer: 'Wearing a bright yellow raincoat, Sam walked the dog.',
      explanation: 'Modifiers must be placed right next to the person or thing they describe to avoid absurd misreadings.',
    },
  ],
}

const G7_ELA_WRITING_PRINCIPLE: Principle = {
  id: 'p-g7-ela-writing',
  title: 'Argumentative Claims, Evidence & Writing Craft',
  standard: 'W.7.1 / W.7.2',
  summary: 'Effective argumentative essays state clear thesis claims, cite evidence, and address counterclaims.',
  bank: [
    {
      id: 'g7-ela-wri-1',
      prompt: 'What makes a strong thesis statement for an essay?',
      type: 'mc',
      choices: ['It states a clear, defensible argument', 'It asks an open-ended vague question', 'It lists every fact in the library', 'It repeats the title five times'],
      answer: 'It states a clear, defensible argument',
      explanation: 'A thesis statement must take a clear position that can be supported with facts and logical reasoning.',
    },
    {
      id: 'g7-ela-wri-2',
      prompt: 'How should a writer introduce a direct quotation in text?',
      type: 'mc',
      choices: ['Use an introductory signal phrase and comma', 'Drop the quotation with no explanation', 'Paste the quote inside parentheses only', 'Replace the author’s name with numbers'],
      answer: 'Use an introductory signal phrase and comma',
      explanation: 'Signal phrases attribute quotations to their authors and smoothly integrate evidence into the paragraph.',
    },
    {
      id: 'g7-ela-wri-3',
      prompt: 'What is the purpose of a transitional word like "furthermore"?',
      type: 'mc',
      choices: ['To add additional supporting evidence or ideas', 'To contradict the previous sentence', 'To end the entire essay immediately', 'To introduce an opposing counterclaim'],
      answer: 'To add additional supporting evidence or ideas',
      explanation: 'Transitional words like furthermore and additionally connect related supporting evidence together.',
    },
    {
      id: 'g7-ela-wri-4',
      prompt: 'How should a writer handle an opposing counterclaim in an essay?',
      type: 'mc',
      choices: ['Acknowledge it fairly and refute it with evidence', 'Pretend that no other opinions exist', 'Insult the people who hold that view', 'Delete the original thesis statement'],
      answer: 'Acknowledge it fairly and refute it with evidence',
      explanation: 'Addressing counterclaims demonstrates balance and strengthens the author’s overall position.',
    },
    {
      id: 'g7-ela-wri-5',
      prompt: 'What belongs in the concluding paragraph of an argumentative essay?',
      type: 'mc',
      choices: ['A restated thesis and synthesis of arguments', 'Brand new claims that were never mentioned', 'A list of dictionary vocabulary definitions', 'Personal gossip about the classroom'],
      answer: 'A restated thesis and synthesis of arguments',
      explanation: 'Conclusions synthesize the essay’s primary arguments and reinforce why the claim matters.',
    },
    {
      id: 'g7-ela-wri-6',
      prompt: 'Why must authors cite sources when quoting external research?',
      type: 'mc',
      choices: ['To give credit and avoid plagiarism', 'To make the essay twice as long', 'To hide where the facts came from', 'To confuse the reader with footnotes'],
      answer: 'To give credit and avoid plagiarism',
      explanation: 'Citations attribute credit to original authors and allow readers to verify source accuracy.',
    },
  ],
}

export const G7_ELA_COURSE: Course = {
  id: 'g7-ela',
  subject: 'ela',
  grade: 7,
  title: '7th grade reading, grammar, and vocab',
  subtitle: 'Literary Analysis, Contrasting Perspectives, Argument Evaluation, Clauses & Rhetoric',
  credits: 1.0,
  color: '#8b5cf6',
  icon: '📖',
  externalCourseLinks: [
    {
      label: 'Khan: 7th grade reading, grammar, and vocab',
      url: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab',
    },
    {
      label: 'Khan: Grammar',
      url: 'https://www.khanacademy.org/humanities/grammar',
    },
  ],
  units: [
    // UNIT 1: Reading Literature: Theme & Setting
    {
      id: 'g7-ela-u1',
      title: 'Unit 1: Literature: Theme & Setting Dynamics',
      standards: ['RL.7.2', 'RL.7.3'],
      lessons: [
        {
          id: 'g7-ela-u1-l1',
          unitId: 'g7-ela-u1',
          title: 'Lesson 1: How Setting Shapes Plot and Characters',
          kind: 'lesson',
          partOf: 'Setting & Plot',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Khan Academy: Setting and Plot Dynamics',
          reading:
            'Setting is the historical era, geographic environment, and social world of a narrative. Setting forces characters to confront conflicts that reveal authorial theme.',
          principles: [G7_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g7-ela-u1-l2',
          unitId: 'g7-ela-u1',
          title: 'Lesson 2: Tracing Theme Development & Objective Summaries',
          kind: 'lesson',
          partOf: 'Theme Development',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Khan Academy: Tracing Themes in Literature',
          reading:
            'A theme is a universal observation about human nature or life. Track how characters grow from beginning to climax, and summarize the plot without subjective commentary.',
          principles: [G7_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g7-ela-u1-l3',
          unitId: 'g7-ela-u1',
          title: 'Lesson 3: Character Conflict & Moral Dilemmas',
          kind: 'lesson',
          partOf: 'Character Conflict',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Khan Academy: Conflict and Character Choices',
          reading:
            'Internal and external conflicts force characters into moral decisions. Analyze how choices under pressure reveal core virtues, flaws, and the underlying theme.',
          principles: [G7_ELA_THEME_PRINCIPLE],
        },
        {
          id: 'g7-ela-u1-l4',
          unitId: 'g7-ela-u1',
          title: 'Lesson 4: Unit 1 Review & Literary Analysis Check',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-key-ideas-and-details',
          videoTitle: 'Khan Academy: Reading Literature Review',
          reading:
            'Review key standards: identifying universal themes, distinguishing theme from topic, analyzing setting impacts on plot, and writing concise objective summaries.',
          principles: [G7_ELA_THEME_PRINCIPLE],
        },
      ],
    },

    // UNIT 2: Ohio Extension: Contrasting Perspectives & Historical Fiction
    {
      id: 'g7-ela-u2',
      title: 'Unit 2: Contrasting Perspectives & Historical Accounts',
      isOhioExtension: true,
      standards: ['RL.7.6', 'OH.RL.7.9'],
      lessons: [
        {
          id: 'g7-ela-u2-l1',
          unitId: 'g7-ela-u2',
          title: 'Lesson 1: Contrasting Character Points of View',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Point of View',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Khan Academy: Analyzing Contrasting Points of View',
          reading:
            'Authors develop contrasting points of view by juxtaposing how different characters interpret the same event based on their individual background and motivations.',
          principles: [G7_ELA_POV_PRINCIPLE],
        },
        {
          id: 'g7-ela-u2-l2',
          unitId: 'g7-ela-u2',
          title: 'Lesson 2: Historical Fiction vs. Primary Factual Records',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Historical Fiction',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Khan Academy: Comparing Fiction and Historical Accounts',
          reading:
            'Compare a fictional portrayal of a time, place, or character to historical accounts of the same period to understand how authors adapt history for emotional resonance.',
          principles: [G7_ELA_POV_PRINCIPLE],
        },
        {
          id: 'g7-ela-u2-l3',
          unitId: 'g7-ela-u2',
          title: 'Lesson 3: Narrative Perspective & Cultural Context',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Narrative Perspective',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Khan Academy: First Person and Omniscient Narrators',
          reading:
            'Examine how first-person intimacy or third-person omniscient objectivity alters how readers experience historical events and evaluate narrator reliability.',
          principles: [G7_ELA_POV_PRINCIPLE],
        },
        {
          id: 'g7-ela-u2-l4',
          unitId: 'g7-ela-u2',
          title: 'Lesson 4: Unit 2 Review & Perspective Check',
          kind: 'lesson_review',
          isOhioExtension: true,
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-craft-and-structure',
          videoTitle: 'Khan Academy: Perspective and Historical Fiction Review',
          reading:
            'Synthesize how historical novelists craft realistic dialogue and emotional subtext while remaining anchored to documented historical turning points.',
          principles: [G7_ELA_POV_PRINCIPLE],
        },
      ],
    },

    // UNIT 3: Informational Texts: Central Ideas & Claims
    {
      id: 'g7-ela-u3',
      title: 'Unit 3: Informational Texts: Central Ideas & Arguments',
      standards: ['RI.7.2', 'RI.7.5'],
      lessons: [
        {
          id: 'g7-ela-u3-l1',
          unitId: 'g7-ela-u3',
          title: 'Lesson 1: Determining Two or More Central Ideas',
          kind: 'lesson',
          partOf: 'Central Ideas',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Central Ideas in Complex Nonfiction',
          reading:
            'Complex nonfiction builds multiple central ideas across sections. Analyze how paragraphs, subheadings, and transitional phrases connect supporting evidence to overarching claims.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u3-l2',
          unitId: 'g7-ela-u3',
          title: 'Lesson 2: Analyzing Text Structure & Author’s Purpose',
          kind: 'lesson',
          partOf: 'Author Purpose',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Text Structure and Rhetorical Purpose',
          reading:
            'Examine whether an author organizes information chronologically, comparatively, or argumentatively to advance a specific point of view or persuade the audience.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u3-l3',
          unitId: 'g7-ela-u3',
          title: 'Lesson 3: Supporting Details & Objective Nonfiction Summaries',
          kind: 'lesson',
          partOf: 'Nonfiction Summaries',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Objective Summaries of Nonfiction',
          reading:
            'Distinguish major supporting facts from incidental trivia. Write an objective nonfiction summary that conveys central claims without editorial personal reaction.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u3-l4',
          unitId: 'g7-ela-u3',
          title: 'Lesson 4: Unit 3 Review & Informational Analysis Check',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Informational Text Review',
          reading:
            'Review key informational text standards: locating dual central ideas, analyzing structural frameworks, and producing concise objective summaries.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
      ],
    },

    // UNIT 4: Evaluating Arguments, Reasoning & Fallacies
    {
      id: 'g7-ela-u4',
      title: 'Unit 4: Evaluating Arguments & Credibility of Sources',
      standards: ['RI.7.8'],
      lessons: [
        {
          id: 'g7-ela-u4-l1',
          unitId: 'g7-ela-u4',
          title: 'Lesson 1: Tracing Claims, Evidence & Counter-Claims',
          kind: 'lesson',
          partOf: 'Argument Analysis',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Tracing Claims and Counter-Claims',
          reading:
            'Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and whether the evidence is sufficient to support the claim.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u4-l2',
          unitId: 'g7-ela-u4',
          title: 'Lesson 2: Assessing Source Credibility & Fact Checking',
          kind: 'lesson',
          partOf: 'Source Evaluation',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Assessing Source Credibility',
          reading:
            'Examine author qualifications, publication intent, date of research, and independent corroboration to separate reliable academic evidence from biased hearsay.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u4-l3',
          unitId: 'g7-ela-u4',
          title: 'Lesson 3: Logical Fallacies & Soundness of Reasoning',
          kind: 'lesson',
          partOf: 'Logical Fallacies',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Identifying Logical Fallacies',
          reading:
            'Identify faulty reasoning such as ad hominem attacks, hasty generalizations, and false dilemmas that weaken an author’s persuasive credibility.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u4-l4',
          unitId: 'g7-ela-u4',
          title: 'Lesson 4: Unit 4 Review & Argument Evaluation Check',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/reading-integration-of-knowledge-and-ideas',
          videoTitle: 'Khan Academy: Evaluating Arguments Review',
          reading:
            'Review criteria for sound arguments: relevant empirical data, anticipation of opposing views, logical reasoning free of fallacies, and verified expert citations.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
      ],
    },

    // UNIT 5: Grammar: Phrases, Clauses & Modifiers
    {
      id: 'g7-ela-u5',
      title: 'Unit 5: Grammar: Clauses, Phrases & Misplaced Modifiers',
      standards: ['L.7.1'],
      lessons: [
        {
          id: 'g7-ela-u5-l1',
          unitId: 'g7-ela-u5',
          title: 'Lesson 1: Independent vs. Dependent Clauses',
          kind: 'lesson',
          partOf: 'Clauses & Complex Sentences',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/grammar-sentences-clauses-and-phrases',
          videoTitle: 'Khan Academy: Dependent and Independent Clauses',
          reading:
            'An independent clause expresses a complete thought. A dependent clause begins with a subordinating conjunction (because, although, if) and must attach to an independent clause.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g7-ela-u5-l2',
          unitId: 'g7-ela-u5',
          title: 'Lesson 2: Misplaced and Dangling Modifiers',
          kind: 'lesson',
          partOf: 'Modifiers',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/grammar-sentences-clauses-and-phrases',
          videoTitle: 'Khan Academy: Avoiding Misplaced and Dangling Modifiers',
          reading:
            'Place modifying phrases directly adjacent to the target noun they describe to prevent unintentional, humorous, or confusing syntax ambiguities.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g7-ela-u5-l3',
          unitId: 'g7-ela-u5',
          title: 'Lesson 3: Subordinating Conjunctions & Complex Sentences',
          kind: 'lesson',
          partOf: 'Complex Sentences',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/grammar-sentences-clauses-and-phrases',
          videoTitle: 'Khan Academy: Building Complex Sentences',
          reading:
            'Master subordinating conjunctions (since, while, whereas, unless) to weave independent and dependent clauses into varied, expressive complex sentences.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g7-ela-u5-l4',
          unitId: 'g7-ela-u5',
          title: 'Lesson 4: Unit 5 Review & Sentence Structure Check',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/grammar/syntax-sentences-and-clauses/v/syntax-review',
          videoTitle: 'Khan Academy: Syntax and Sentence Structure Review',
          reading:
            'Review sentence mechanics: distinguishing clauses from phrases, repairing dangling participles, and using punctuation to separate introductory dependent clauses.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
      ],
    },

    // UNIT 6: Word Study: Etymology, Roots & Nuances
    {
      id: 'g7-ela-u6',
      title: 'Unit 6: Vocabulary: Greek/Latin Etymology & Nuance',
      standards: ['L.7.4', 'L.7.5'],
      lessons: [
        {
          id: 'g7-ela-u6-l1',
          unitId: 'g7-ela-u6',
          title: 'Lesson 1: Greek & Latin Root Word Etymology',
          kind: 'lesson',
          partOf: 'Root Words',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/grammar-word-study',
          videoTitle: 'Khan Academy: Greek and Latin Roots (dict, chron, spect)',
          reading:
            'Use common Greek and Latin affixes and roots (dict = speak; chron = time; auto = self; tele = far) as clues to decipher multi-syllable domain-specific vocabulary.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g7-ela-u6-l2',
          unitId: 'g7-ela-u6',
          title: 'Lesson 2: Connotation, Denotation & Word Nuances',
          kind: 'lesson',
          partOf: 'Connotations',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/grammar-word-study',
          videoTitle: 'Khan Academy: Connotation and Denotation',
          reading:
            'Denotation is the exact dictionary definition; connotation is the emotional feeling or social association attached to a word (e.g. thrifty vs. cheap).',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g7-ela-u6-l3',
          unitId: 'g7-ela-u6',
          title: 'Lesson 3: Figurative Language: Metaphor, Analogy & Irony',
          kind: 'lesson',
          partOf: 'Figurative Language',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/vocabulary',
          videoTitle: 'Khan Academy: Interpreting Figures of Speech',
          reading:
            'Analyze how extended metaphors, vivid analogies, and dramatic irony enrich literary narrative texture and underscore an author’s nuanced messaging.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
        {
          id: 'g7-ela-u6-l4',
          unitId: 'g7-ela-u6',
          title: 'Lesson 4: Unit 6 Review & Vocabulary Nuance Check',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab/vocabulary',
          videoTitle: 'Khan Academy: Vocabulary and Roots Review',
          reading:
            'Review classical root families, deciphering unfamiliar terminology from context clues, and selecting words with precise positive or negative connotations.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE],
        },
      ],
    },

    // UNIT 7: Writing Workshop: Argumentative Claims & Evidence
    {
      id: 'g7-ela-u7',
      title: 'Unit 7: Writing Workshop: Argumentative Claims & Evidence',
      standards: ['W.7.1', 'W.7.2'],
      lessons: [
        {
          id: 'g7-ela-u7-l1',
          unitId: 'g7-ela-u7',
          title: 'Lesson 1: Developing a Precise Thesis Claim',
          kind: 'lesson',
          partOf: 'Thesis Development',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Khan Academy: Developing a Precise Thesis',
          reading:
            'A compelling argumentative thesis takes a clear, defensible position on an issue and previews the major logical grounds supporting the claim.',
          principles: [G7_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g7-ela-u7-l2',
          unitId: 'g7-ela-u7',
          title: 'Lesson 2: Integrating Textual Evidence & Quotations',
          kind: 'lesson',
          partOf: 'Evidence Integration',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Khan Academy: Integrating Quotes and Evidence',
          reading:
            'Smoothly embed direct quotations and data using signal phrases, formal attribution, and parenthetical citations to maintain narrative flow and academic integrity.',
          principles: [G7_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g7-ela-u7-l3',
          unitId: 'g7-ela-u7',
          title: 'Lesson 3: Acknowledging and Refuting Counterclaims',
          kind: 'lesson',
          partOf: 'Counterclaim & Rebuttal',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Khan Academy: Addressing Opposing Counterclaims',
          reading:
            'Strengthen your thesis by fairly presenting the strongest alternative perspective, followed by a factual rebuttal that exposes flaws in the opposing premise.',
          principles: [G7_ELA_WRITING_PRINCIPLE],
        },
        {
          id: 'g7-ela-u7-l4',
          unitId: 'g7-ela-u7',
          title: 'Lesson 4: Unit 7 Review & Argumentative Writing Synthesis',
          kind: 'lesson_review',
          partOf: 'Unit Review',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/humanities/writing-composition',
          videoTitle: 'Khan Academy: Argumentative Writing Synthesis Review',
          reading:
            'Review essay organization: introduction with thesis, body paragraphs with evidence and commentary, balanced counterclaim rebuttal, and impactful conclusion.',
          principles: [G7_ELA_WRITING_PRINCIPLE],
        },
      ],
    },

    // UNIT 8: Grade 7 ELA Course Challenge
    {
      id: 'g7-ela-u8',
      title: 'Unit 8: Grade 7 ELA Course Challenge',
      standards: ['RL.7', 'RI.7', 'W.7', 'L.7'],
      lessons: [
        {
          id: 'g7-ela-u8-l1',
          unitId: 'g7-ela-u8',
          title: 'Lesson 1: Reading Literature & Figurative Language Synthesis',
          kind: 'lesson_review',
          partOf: 'Course Challenge Part 1',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab',
          videoTitle: 'Khan Academy: Grade 7 Literature Synthesis',
          reading:
            'Synthesize literary themes, setting influences, narrator perspective, and figurative language across complex passages.',
          principles: [G7_ELA_THEME_PRINCIPLE, G7_ELA_POV_PRINCIPLE],
        },
        {
          id: 'g7-ela-u8-l2',
          unitId: 'g7-ela-u8',
          title: 'Lesson 2: Informational Text & Source Evaluation Synthesis',
          kind: 'lesson_review',
          partOf: 'Course Challenge Part 2',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab',
          videoTitle: 'Khan Academy: Grade 7 Nonfiction Synthesis',
          reading:
            'Demonstrate mastery in determining dual central ideas, analyzing rhetorical text structure, and evaluating source credibility.',
          principles: [G7_ELA_ARGUMENT_PRINCIPLE],
        },
        {
          id: 'g7-ela-u8-l3',
          unitId: 'g7-ela-u8',
          title: 'Lesson 3: Language Conventions & Argumentative Writing Capstone',
          kind: 'lesson_review',
          partOf: 'Course Challenge Part 3',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/ela/7th-grade-reading-and-vocab',
          videoTitle: 'Khan Academy: Grade 7 Language and Writing Capstone',
          reading:
            'Apply advanced knowledge of independent and dependent clauses, misplaced modifier correction, classical root etymology, and argumentative thesis development.',
          principles: [G7_ELA_GRAMMAR_PRINCIPLE, G7_ELA_WRITING_PRINCIPLE],
        },
      ],
    },

    // UNIT 9: Explore ELA Through Creative Projects (enrichment)
    {
      id: 'g7-ela-u9',
      title: 'Unit 9: Explore ELA Through Creative Projects',
      kind: 'explore',
      standards: ['W.7.1', 'SL.7.4', 'RL.7.7'],
      lessons: [],
      exploreItems: [
        {
          id: 'g7-ela-exp-debate-pod',
          title: 'Audio Lab: The 3-Minute Argumentative Podcast',
          type: 'project',
          description:
            'Research a debatable school or community topic (e.g. cell phones in classrooms, year-round schooling). Record a 3-minute podcast featuring a claim, 2 pieces of verified evidence, a counter-claim, and rebuttal.',
          estimatedMinutes: 35,
          materials: ['Microphone / smartphone voice recorder', 'Written script or outline'],
          steps: [
            'Pick a debatable community or educational issue.',
            'State your clear thesis claim in the first 30 seconds.',
            'Cite two verified statistics or expert quotes.',
            'Present the strongest opposing argument and refute it politely with facts.',
          ],
          reflectionPrompt: 'Why is fairly acknowledging the opposing viewpoint essential for building credibility?',
          requiresParentPin: false,
        },
        {
          id: 'g7-ela-exp-monologue',
          title: 'Dramatic Arts Lab: Historical Figure First-Person Monologue',
          type: 'hands_on',
          description:
            'Write and perform a 90-second dramatic monologue in the voice of a historical figure (e.g. Galileo Galilei defending his telescope, Joan of Arc, or an Ohio pioneer canal builder).',
          estimatedMinutes: 30,
          materials: ['Paper and pen', 'Audio or video recorder'],
          steps: [
            'Research a turning point in your historical figure’s life.',
            'Write a dramatic speech focusing on their internal emotions and dilemma.',
            'Use historical terms and first-person point of view.',
            'Rehearse pacing and vocal inflection before recording.',
          ],
          reflectionPrompt: 'How did speaking as the historical figure change how you understand their difficult choices?',
          requiresParentPin: false,
        },
        {
          id: 'g7-ela-exp-storyline-advanced',
          title: 'Storyline Online: Analyzing Symbolism and Theme',
          type: 'video',
          description:
            'Listen to a complex narrative read aloud on Storyline Online. Analyze how figurative imagery, character dialogue, and musical scoring reinforce the central theme.',
          url: 'https://storylineonline.net/',
          estimatedMinutes: 20,
          reflectionPrompt: 'What recurring symbol did the author use throughout the story to highlight character growth?',
          requiresParentPin: true,
        },
      ],
    },

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g7-ela-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['RL.7', 'RI.7', 'W.7', 'L.7'],
      lessons: [],
      resources: [
        {
          id: 'g7-ela-res-pacing',
          title: 'Grade 7 Language Arts 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Instructional scope and sequence coordinating literary analysis, argument writing, source evaluation, and syntax mastery.',
          body: `## Grade 7 ELA Pacing Guide (36 Weeks)

- **Weeks 1–5**: Unit 1 — Literature: Theme & Setting Dynamics (RL.7.2, RL.7.3)
- **Weeks 6–10**: Unit 2 — Contrasting Perspectives & Historical Accounts (RL.7.6, OH.RL.7.9)
- **Weeks 11–14**: Unit 3 — Informational Texts: Central Ideas & Arguments (RI.7.2, RI.7.5)
- **Week 15**: Quarter 1 Reading Comprehension Checkpoint
- **Weeks 16–21**: Unit 4 — Evaluating Arguments & Credibility of Sources (RI.7.8)
- **Weeks 22–26**: Unit 5 — Grammar: Clauses, Phrases & Misplaced Modifiers (L.7.1)
- **Week 27**: Quarter 2 & 3 Language and Conventions Assessment
- **Weeks 28–31**: Unit 6 — Vocabulary: Greek/Latin Etymology & Nuance (L.7.4, L.7.5)
- **Weeks 32–34**: Unit 7 — Writing Workshop: Argumentative Claims & Evidence (W.7.1, W.7.2)
- **Weeks 35–36**: Unit 8 — Grade 7 ELA Course Challenge & Capstone Debates`,
        },
        {
          id: 'g7-ela-res-rubric',
          title: 'Grade 7 Argumentative Essay Evaluation Rubric',
          kind: 'assessment_rubric',
          description:
            'Standard four-category rubric assessing claims, evidence, counter-claims, organization, and conventions.',
          body: `## Argumentative Writing Rubric (4-Point Scale)

1. **Claim & Thesis**: States a precise, arguable claim that clearly guides the entire essay.
2. **Evidence & Sourcing**: Cites relevant, credible factual evidence with proper attribution.
3. **Counter-Claim & Rebuttal**: Fairly acknowledges opposing views and refutes them with sound logic.
4. **Syntax & Conventions**: Demonstrates mastery of complex clauses, avoiding misplaced modifiers and fragments.`,
        },
        {
          id: 'g7-ela-res-roots',
          title: 'Grade 7 Classical Etymology & Roots Reference Sheet',
          kind: 'printable',
          description: 'Printable reference sheet of 25 Greek and Latin roots essential for 7th grade literacy.',
          body: `## Grade 7 Classical Roots Matrix

- **dict / voc** (speak): contradict, dictionary, vocal, advocate
- **chron / temp** (time): chronological, synchronize, temporary
- **scrib / script** (write): transcribe, manuscript, inscribe
- **cred** (believe): credible, incredible, incredulous
- **tract** (pull): extract, retract, intractable
- **ced / cess** (go / yield): proceed, recede, recession
- **mit / miss** (send): transmit, dismiss, emission`,
        },
      ],
    },
  ],
}
