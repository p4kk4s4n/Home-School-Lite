import { Course, Principle } from '../../types'

// Principles for Grade 8 ELA
const P_G8_ELA_THEME_DIALOGUE: Principle = {
  id: 'p-g8-ela-theme-dialogue',
  title: 'Theme Development & How Dialogue Propels Action',
  standard: 'RL.8.2 / RL.8.3',
  summary: 'Theme develops through character choices; specific lines of dialogue propel action and reveal character traits.',
  bank: [
    {
      id: 'g8-ela-td-1',
      type: 'mc',
      passage:
        'Maya stared at the broken robotics trophy. "We can blame the loose wire," Leo whispered, "or we can tell Coach we dropped it and help rebuild it tonight." Maya picked up a wrench. "Let’s call Coach."',
      prompt: 'How does Leo’s dialogue affect the plot in this passage?',
      choices: [
        'It forces Maya to choose honesty and take action.',
        'It ends the story without a decision.',
        'It describes the weather outside the gym.',
        'It proves Leo hates building robots.',
      ],
      answer: 'It forces Maya to choose honesty and take action.',
      explanation: 'Dialogue propels action when a character’s words push another character to make a key decision.',
    },
    {
      id: 'g8-ela-td-2',
      type: 'mc',
      passage:
        'At first, Eli hoarded his extra garden seeds so his tomatoes would win first prize alone. After a late frost ruined the neighborhood plots, Eli shared his seedlings with every neighbor.',
      prompt: 'Which statement best expresses the theme of this passage?',
      choices: [
        'Sharing with your community matters more than winning alone.',
        'Tomatoes never grow after a spring frost.',
        'Contests should always be canceled.',
        'Seeds are too expensive to buy.',
      ],
      answer: 'Sharing with your community matters more than winning alone.',
      explanation: 'A theme is the universal life lesson shown by how a character changes over the story.',
    },
    {
      id: 'g8-ela-td-3',
      type: 'mc',
      passage:
        '"The river bridge is washing out!" shouted Warden Hale, slamming the lantern on the desk. "Saddle the fastest horse now!"',
      prompt: 'What does Warden Hale’s dialogue do in this scene?',
      choices: [
        'It creates urgency and launches the rescue mission.',
        'It slows the pace for a quiet nap.',
        'It explains how stone bridges are built.',
        'It shows Hale is calm and unconcerned.',
      ],
      answer: 'It creates urgency and launches the rescue mission.',
      explanation: 'Urgent dialogue propels the plot forward by triggering immediate action from the characters.',
    },
    {
      id: 'g8-ela-td-4',
      type: 'mc',
      prompt: 'What must an objective summary of a story leave out?',
      choices: [
        'Personal opinions and judgments',
        'The main characters',
        'The central conflict',
        'How the conflict is resolved',
      ],
      answer: 'Personal opinions and judgments',
      explanation: 'An objective summary retells only the key plot events and central idea without personal bias.',
    },
    {
      id: 'g8-ela-td-5',
      type: 'mc',
      passage:
        '"I don’t need a map," scoffed Devon, stuffing the compass into his pack. Ten minutes later, the trail vanished into thick fog.',
      prompt: 'What character trait does Devon’s dialogue reveal?',
      choices: ['Overconfidence', 'Extreme caution', 'Shyness', 'Generosity'],
      answer: 'Overconfidence',
      explanation: 'Dismissing a map and compass before hiking into fog reveals Devon’s overconfidence.',
    },
    {
      id: 'g8-ela-td-6',
      type: 'mc',
      prompt: 'How do authors usually develop a theme across a novel?',
      choices: [
        'Through how characters respond to challenges and grow',
        'By listing dictionary definitions in the index',
        'By keeping every character unchanged',
        'By avoiding all conflict',
      ],
      answer: 'Through how characters respond to challenges and grow',
      explanation: 'Readers trace theme by watching what characters learn from their struggles and choices.',
    },
    {
      id: 'g8-ela-td-7',
      type: 'mc',
      passage:
        '"If you sign that paper, the forest gets bulldozed tomorrow," Asha warned. Mayor Lin set her pen down and tore the contract in half.',
      prompt: 'How did Asha’s warning impact the plot?',
      choices: [
        'It provoked Mayor Lin to reject the contract.',
        'It convinced Mayor Lin to sell the forest.',
        'It had no effect on Mayor Lin.',
        'It caused Asha to leave town.',
      ],
      answer: 'It provoked Mayor Lin to reject the contract.',
      explanation: 'Asha’s dialogue directly caused the mayor’s turning-point decision.',
    },
    {
      id: 'g8-ela-td-8',
      type: 'mc',
      prompt: 'Which statement is a full theme rather than just a one-word topic?',
      choices: [
        'True courage means standing up for others despite fear.',
        'Courage',
        'A story about a knight',
        'Medieval castles',
      ],
      answer: 'True courage means standing up for others despite fear.',
      explanation: 'A topic is a single subject word like "courage," whereas a theme is a complete message about life.',
    },
  ],
}

const P_G8_ELA_IRONY_POV: Principle = {
  id: 'p-g8-ela-irony-pov',
  title: 'Dramatic, Situational & Verbal Irony',
  standard: 'RL.8.6',
  summary: 'Dramatic irony occurs when the audience knows a key truth that a character does not know, creating suspense or humor.',
  bank: [
    {
      id: 'g8-ela-ir-1',
      type: 'mc',
      prompt: 'When does dramatic irony happen in a story or play?',
      choices: [
        'The reader knows a secret that a character does not.',
        'Two characters agree on every fact.',
        'The narrator forgets the ending.',
        'A poem uses rhyming lines.',
      ],
      answer: 'The reader knows a secret that a character does not.',
      explanation: 'Dramatic irony is the gap between what the audience knows and what a character believes.',
    },
    {
      id: 'g8-ela-ir-2',
      type: 'mc',
      passage:
        'In Chapter 1, the reader sees the detective hide a microphone inside the flower vase. In Chapter 2, the thief whispers his whole plan right next to the vase.',
      prompt: 'What effect does this dramatic irony create for the reader?',
      choices: [
        'Suspense waiting for the thief to be caught',
        'Confusion about who the detective is',
        'Boredom because nothing is happening',
        'Anger at the flower shop',
      ],
      answer: 'Suspense waiting for the thief to be caught',
      explanation: 'Knowing the vase is bugged while the thief speaks freely builds tension and suspense.',
    },
    {
      id: 'g8-ela-ir-3',
      type: 'mc',
      prompt: 'A fire station burns down while the crew is away. This is:',
      choices: ['Situational irony', 'Dramatic irony', 'A simile', 'Alliteration'],
      answer: 'Situational irony',
      explanation: 'Situational irony happens when the actual outcome is the sharp opposite of what anyone would expect.',
    },
    {
      id: 'g8-ela-ir-4',
      type: 'mc',
      passage:
        'Looking out at the pouring sleet and howling wind, Marcus sighed, "What a perfect day for a beach picnic."',
      prompt: 'Which type of irony is Marcus using?',
      choices: ['Verbal irony', 'Dramatic irony', 'Historical nonfiction', 'Stage directions'],
      answer: 'Verbal irony',
      explanation: 'Verbal irony occurs when a speaker says the opposite of what they actually mean.',
    },
    {
      id: 'g8-ela-ir-5',
      type: 'mc',
      passage:
        'The kids hid behind the sofa with a birthday cake. When Mom walked in, she muttered, "Everyone forgot my birthday this year."',
      prompt: 'Why does this scene use dramatic irony to create humor?',
      choices: [
        'Readers know a surprise party hides behind her.',
        'Mom hates eating birthday cake.',
        'The kids forgot to buy candles.',
        'Nobody is inside the house.',
      ],
      answer: 'Readers know a surprise party hides behind her.',
      explanation: 'The contrast between Mom’s belief and the reader’s knowledge of the hidden cake makes the moment lighthearted.',
    },
    {
      id: 'g8-ela-ir-6',
      type: 'mc',
      prompt: 'How do authors create suspense using point of view?',
      choices: [
        'By giving the reader information a character lacks',
        'By listing the alphabet backward',
        'By removing all verbs from sentences',
        'By telling the ending on page one',
      ],
      answer: 'By giving the reader information a character lacks',
      explanation: 'Shifting between what the audience sees and a character’s limited perspective builds anticipation.',
    },
    {
      id: 'g8-ela-ir-7',
      type: 'mc',
      passage:
        'A champion spelling-bee judge mispells the word "champion" on the award certificate.',
      prompt: 'Which literary device does this situation illustrate?',
      choices: ['Situational irony', 'Personification', 'Hyperbole', 'Onomatopoeia'],
      answer: 'Situational irony',
      explanation: 'An expert in spelling making a simple spelling mistake is the opposite of what is expected.',
    },
    {
      id: 'g8-ela-ir-8',
      type: 'mc',
      prompt: 'In Romeo and Juliet, the audience knows Juliet is asleep, not dead. This is:',
      choices: ['Dramatic irony', 'A biography', 'First-person narration', 'A metaphor'],
      answer: 'Dramatic irony',
      explanation: 'Because the audience knows the truth while Romeo does not, the scene is a classic example of dramatic irony.',
    },
  ],
}

const P_G8_ELA_ARGUMENTS: Principle = {
  id: 'p-g8-ela-arguments',
  title: 'Evaluating Arguments, Sound Reasoning & Conflicting Evidence',
  standard: 'RI.8.8 / RI.8.9',
  summary: 'Strong arguments back claims with relevant, verifiable evidence and address conflicting viewpoints fairly.',
  bank: [
    {
      id: 'g8-ela-arg-1',
      type: 'mc',
      prompt: 'What makes a piece of evidence relevant to an author’s claim?',
      choices: [
        'It directly supports and proves the specific claim.',
        'It uses long, complicated words.',
        'It talks about an unrelated topic.',
        'It is based only on a rumor.',
      ],
      answer: 'It directly supports and proves the specific claim.',
      explanation: 'Relevant evidence is directly connected to the claim and helps prove that the claim is true.',
    },
    {
      id: 'g8-ela-arg-2',
      type: 'mc',
      prompt: 'Which source provides the strongest evidence for a claim about bike-lane safety?',
      choices: [
        'A five-year city traffic study comparing crash rates',
        'One friend’s guess about bicycles',
        'A comic strip about a skateboard',
        'An ad selling sports cars',
      ],
      answer: 'A five-year city traffic study comparing crash rates',
      explanation: 'Verified data from a multi-year study provides sound, sufficient evidence rather than personal opinion.',
    },
    {
      id: 'g8-ela-arg-3',
      type: 'mc',
      passage:
        'Everyone in eighth grade knows that school should start at noon because mornings are boring.',
      prompt: 'Why is the reasoning in this sentence unsound?',
      choices: [
        'It relies on exaggeration and opinion instead of facts.',
        'It cites too many scientific studies.',
        'It uses passive voice.',
        'It agrees with both sides.',
      ],
      answer: 'It relies on exaggeration and opinion instead of facts.',
      explanation: 'Claiming "everyone knows" is a sweeping generalization without factual evidence.',
    },
    {
      id: 'g8-ela-arg-4',
      type: 'mc',
      prompt: 'What is a counterclaim in an argumentative essay?',
      choices: [
        'An opposing viewpoint that the writer addresses and refutes',
        'The title at the top of the page',
        'A list of spelling words',
        'A story with talking animals',
      ],
      answer: 'An opposing viewpoint that the writer addresses and refutes',
      explanation: 'Acknowledging and answering a counterclaim shows the writer has considered conflicting viewpoints.',
    },
    {
      id: 'g8-ela-arg-5',
      type: 'mc',
      passage:
        'Article A argues that solar panels save schools money using 10-year utility bills. Article B claims solar panels are too costly, citing only first-day installation fees.',
      prompt: 'How do these two texts disagree on the same topic?',
      choices: [
        'They emphasize different cost timeframes to reach opposite conclusions.',
        'Both articles oppose solar energy.',
        'Neither article mentions money.',
        'They use the exact same facts.',
      ],
      answer: 'They emphasize different cost timeframes to reach opposite conclusions.',
      explanation: 'Authors can present conflicting interpretations by focusing on long-term savings versus upfront cost.',
    },
    {
      id: 'g8-ela-arg-6',
      type: 'mc',
      prompt: 'When is an author’s evidence considered "sufficient"?',
      choices: [
        'When there is enough strong proof to convince readers',
        'When the author gives only one single anecdote',
        'When all facts are left out',
        'When the font size is large',
      ],
      answer: 'When there is enough strong proof to convince readers',
      explanation: 'Sufficient evidence means providing enough varied, reliable facts to thoroughly back the claim.',
    },
    {
      id: 'g8-ela-arg-7',
      type: 'mc',
      prompt: 'Attacking a speaker’s clothes instead of their facts is an example of:',
      choices: ['Irrelevant reasoning (personal attack)', 'Sound scientific evidence', 'A valid statistic', 'An objective summary'],
      answer: 'Irrelevant reasoning (personal attack)',
      explanation: 'Sound reasoning evaluates the evidence itself, not unrelated personal traits of the speaker.',
    },
    {
      id: 'g8-ela-arg-8',
      type: 'mc',
      prompt: 'Why should readers compare two texts that present conflicting evidence?',
      choices: [
        'To see which claim is backed by stronger, verified facts',
        'To memorize the page numbers',
        'To skip reading the conclusion',
        'To avoid forming an informed view',
      ],
      answer: 'To see which claim is backed by stronger, verified facts',
      explanation: 'Comparing conflicting texts helps readers weigh how each author uses evidence and spot weak reasoning.',
    },
  ],
}

const P_G8_ELA_VERBALS: Principle = {
  id: 'p-g8-ela-verbals',
  title: 'Verbals: Gerunds, Participles & Infinitives',
  standard: 'L.8.1a / OH.L.8.1',
  summary: 'A gerund (-ing) acts as a noun, a participle acts as an adjective, and an infinitive (to + verb) acts as a noun, adjective, or adverb.',
  bank: [
    {
      id: 'g8-ela-vb-1',
      type: 'mc',
      prompt: 'In "Swimming builds endurance," how does the word "Swimming" function?',
      choices: ['Gerund (verb form acting as a noun)', 'Participle (adjective)', 'Infinitive', 'Preposition'],
      answer: 'Gerund (verb form acting as a noun)',
      explanation: 'A gerund ends in -ing and functions as a noun—here, "Swimming" is the subject of the sentence.',
    },
    {
      id: 'g8-ela-vb-2',
      type: 'mc',
      prompt: 'In "The barking dog woke the street," what is "barking"?',
      choices: ['Participle (verb form describing a noun)', 'Gerund (subject noun)', 'Infinitive', 'Conjunction'],
      answer: 'Participle (verb form describing a noun)',
      explanation: 'A participle is a verb form used as an adjective; here "barking" describes the noun "dog."',
    },
    {
      id: 'g8-ela-vb-3',
      type: 'mc',
      prompt: 'Identify the infinitive in: "Elena plans to study astronomy."',
      choices: ['to study', 'Elena plans', 'astronomy', 'plans to'],
      answer: 'to study',
      explanation: 'An infinitive is formed with "to" plus the base form of a verb (to study).',
    },
    {
      id: 'g8-ela-vb-4',
      type: 'mc',
      prompt: 'In "Reading mystery novels is Noah’s favorite hobby," what is "Reading"?',
      choices: ['A gerund acting as a noun', 'A past participle', 'An adverb', 'A conjunction'],
      answer: 'A gerund acting as a noun',
      explanation: '"Reading mystery novels" acts as the noun subject of the verb "is," making "Reading" a gerund.',
    },
    {
      id: 'g8-ela-vb-5',
      type: 'mc',
      prompt: 'In "The shattered window needed repair," what is "shattered"?',
      choices: ['A past participle acting as an adjective', 'A gerund acting as a noun', 'An infinitive', 'A pronoun'],
      answer: 'A past participle acting as an adjective',
      explanation: 'Past participles (often ending in -ed or -en) describe nouns, like "shattered" describing "window."',
    },
    {
      id: 'g8-ela-vb-6',
      type: 'mc',
      prompt: 'Which sentence contains an infinitive phrase?',
      choices: [
        'Liam practiced every afternoon to make the varsity team.',
        'Running down the hill, Liam smiled.',
        'Baking bread fills the kitchen with warmth.',
        'Liam went to the store after school.',
      ],
      answer: 'Liam practiced every afternoon to make the varsity team.',
      explanation: '"To make" is an infinitive ("to" + base verb); "to the store" is a prepositional phrase ("to" + noun).',
    },
    {
      id: 'g8-ela-vb-7',
      type: 'mc',
      prompt: 'How can you tell a gerund apart from a present participle?',
      choices: [
        'Gerunds act as nouns; participles act as adjectives.',
        'A gerund never ends in -ing.',
        'A participle always starts with the word "to."',
        'There is no difference between them.',
      ],
      answer: 'Gerunds act as nouns; participles act as adjectives.',
      explanation: 'Both end in -ing, but gerunds name things (nouns) while participles describe nouns (adjectives).',
    },
    {
      id: 'g8-ela-vb-8',
      type: 'mc',
      prompt: 'In "She enjoys painting landscapes," what role does "painting" play?',
      choices: ['Gerund (direct object noun)', 'Participle (adjective)', 'Main verb', 'Interjection'],
      answer: 'Gerund (direct object noun)',
      explanation: '"Painting" receives the action of "enjoys" as a noun (direct object), so it is a gerund.',
    },
  ],
}

const P_G8_ELA_VOICE_MOOD: Principle = {
  id: 'p-g8-ela-voice-mood',
  title: 'Active vs. Passive Voice & Verb Moods',
  standard: 'L.8.1b / L.8.1c / OH.L.8.1',
  summary: 'In active voice the subject performs the action; verb moods include indicative, imperative, interrogative, conditional, and subjunctive.',
  bank: [
    {
      id: 'g8-ela-vm-1',
      type: 'mc',
      prompt: 'Which sentence is written in the active voice?',
      choices: [
        'The chef prepared a fresh soup.',
        'A fresh soup was prepared by the chef.',
        'The carrot was chopped by hand.',
        'Dinner was served at six.',
      ],
      answer: 'The chef prepared a fresh soup.',
      explanation: 'In active voice, the subject ("The chef") directly performs the action ("prepared").',
    },
    {
      id: 'g8-ela-vm-2',
      type: 'mc',
      prompt: 'Rewrite in active voice: "The winning goal was scored by Maya."',
      choices: [
        'Maya scored the winning goal.',
        'The goal was scored by Maya quickly.',
        'Scoring was done by Maya.',
        'Was the goal scored by Maya?',
      ],
      answer: 'Maya scored the winning goal.',
      explanation: 'Make the doer of the action ("Maya") the subject of the sentence to switch to active voice.',
    },
    {
      id: 'g8-ela-vm-3',
      type: 'mc',
      prompt: 'What verb mood gives a direct command: "Close the lab door."?',
      choices: ['Imperative mood', 'Interrogative mood', 'Subjunctive mood', 'Conditional mood'],
      answer: 'Imperative mood',
      explanation: 'The imperative mood gives a direct command or request, usually with an implied "you" subject.',
    },
    {
      id: 'g8-ela-vm-4',
      type: 'mc',
      prompt: 'Identify the verb mood: "If it rains, the game will move indoors."',
      choices: ['Conditional mood', 'Imperative mood', 'Interrogative mood', 'Passive voice'],
      answer: 'Conditional mood',
      explanation: 'The conditional mood states an outcome that depends on a specific condition ("If... then will...").',
    },
    {
      id: 'g8-ela-vm-5',
      type: 'mc',
      prompt: 'Identify the verb mood: "If I were captain, I would listen first."',
      choices: ['Subjunctive mood', 'Indicative mood', 'Imperative mood', 'Interrogative mood'],
      answer: 'Subjunctive mood',
      explanation: 'The subjunctive mood ("If I were...") expresses a wish, requirement, or situation contrary to fact.',
    },
    {
      id: 'g8-ela-vm-6',
      type: 'mc',
      prompt: 'What verb mood asks a question: "Have you checked the microscope?"',
      choices: ['Interrogative mood', 'Indicative mood', 'Imperative mood', 'Subjunctive mood'],
      answer: 'Interrogative mood',
      explanation: 'The interrogative mood asks a direct question and ends with a question mark.',
    },
    {
      id: 'g8-ela-vm-7',
      type: 'mc',
      prompt: 'Which sentence corrects an inappropriate shift in verb voice?',
      choices: [
        'Lucas drafted the poster, and Ava painted the border.',
        'Lucas drafted it, and the border was painted.',
        'The poster was drafted, and Ava painted it.',
        'Drafting the poster, the border was painted.',
      ],
      answer: 'Lucas drafted the poster, and Ava painted the border.',
      explanation: 'Keep verb voice consistent across clauses—both clauses here use clear active voice.',
    },
    {
      id: 'g8-ela-vm-8',
      type: 'mc',
      prompt: 'What verb mood states a plain fact: "Lake Erie borders northern Ohio."?',
      choices: ['Indicative mood', 'Subjunctive mood', 'Imperative mood', 'Conditional mood'],
      answer: 'Indicative mood',
      explanation: 'The indicative mood is used for ordinary statements of fact or opinion.',
    },
  ],
}

export const G8_ELA_COURSE: Course = {
  id: 'g8-ela',
  subject: 'ela',
  grade: 8,
  title: 'Grade 8 English Language Arts',
  subtitle: 'Literary Analysis, Rhetorical Arguments, Verbals & Stylistic Craft',
  credits: 1.0,
  color: '#9333ea',
  icon: '📚',
  units: [
    // UNIT 1: Reading Literature: Theme, Character Development & Dialogue
    {
      id: 'g8-ela-u1',
      title: 'Unit 1: Reading Literature: Theme, Character Development & Dialogue',
      standards: ['RL.8.1', 'RL.8.2', 'RL.8.3'],
      lessons: [
        {
          id: 'g8-ela-u1-l1',
          unitId: 'g8-ela-u1',
          title: 'Lesson 1: Analyzing Theme Development Over a Novel',
          kind: 'lesson',
          partOf: 'Theme Analysis',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/x2288544e3f3a02a9:reading-literature/v/theme-in-literature',
          videoTitle: 'Khan Academy: Analyzing Theme in Literature',
          reading:
            'A theme is a universal message about human nature or life that an author develops through how characters respond to challenges and moral dilemmas.',
          principles: [P_G8_ELA_THEME_DIALOGUE],
        },
        {
          id: 'g8-ela-u1-l2',
          unitId: 'g8-ela-u1',
          title: 'Lesson 2: How Dialogue Propels Action in Dramatic Scenes',
          kind: 'lesson',
          partOf: 'Dialogue & Action',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/x2288544e3f3a02a9:reading-literature/v/dialogue-and-action',
          videoTitle: 'Khan Academy: How Dialogue Propels Action',
          reading:
            'Spoken dialogue is not mere conversation; skilled authors use dialogue to force character decisions, provoke conflict, reveal internal motives, and drive the plot forward.',
          principles: [P_G8_ELA_THEME_DIALOGUE],
        },
        {
          id: 'g8-ela-u1-l3',
          unitId: 'g8-ela-u1',
          title: 'Lesson 3: Crafting Objective Summaries of Literary Texts',
          kind: 'lesson',
          partOf: 'Objective Summaries',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/x2288544e3f3a02a9:reading-literature/v/objective-summaries',
          videoTitle: 'Khan Academy: Writing Objective Summaries',
          reading:
            'An objective summary condenses the central conflict, major plot milestones, and resolution of a text without injecting personal critique, bias, or peripheral details.',
          principles: [P_G8_ELA_THEME_DIALOGUE],
        },
        {
          id: 'g8-ela-u1-l4',
          unitId: 'g8-ela-u1',
          title: 'Lesson 4: Unit 1 Checkpoint Review: Theme & Dialogue',
          kind: 'lesson_review',
          partOf: 'Literature Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/v/theme-review',
          videoTitle: 'Khan Academy: Literature Analysis Review',
          reading:
            'Review textual evidence citation, distinguishing thematic messages from one-word topics, and evaluating how dialogue choices shape narrative direction.',
          principles: [P_G8_ELA_THEME_DIALOGUE],
        },
      ],
    },

    // UNIT 2: Point of View, Irony & Dramatic Tension
    {
      id: 'g8-ela-u2',
      title: 'Unit 2: Point of View, Irony & Dramatic Tension',
      standards: ['RL.8.6'],
      lessons: [
        {
          id: 'g8-ela-u2-l1',
          unitId: 'g8-ela-u2',
          title: 'Lesson 1: Dramatic Irony: Secret Knowledge & Suspense',
          kind: 'lesson',
          partOf: 'Dramatic Irony',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/x2288544e3f3a02a9:point-of-view/v/irony-types',
          videoTitle: 'Khan Academy: Types of Irony in Literature',
          reading:
            'Dramatic irony arises when readers know critical narrative truths that characters do not know. This information gap creates sharp anticipation, suspense, or dark humor.',
          principles: [P_G8_ELA_IRONY_POV],
        },
        {
          id: 'g8-ela-u2-l2',
          unitId: 'g8-ela-u2',
          title: 'Lesson 2: Situational & Verbal Irony in Fiction',
          kind: 'lesson',
          partOf: 'Situational & Verbal Irony',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/x2288544e3f3a02a9:point-of-view/v/situational-irony',
          videoTitle: 'Khan Academy: Situational and Verbal Irony',
          reading:
            'Situational irony occurs when the outcome reverses reasonable expectations. Verbal irony occurs when a speaker says the opposite of literal meaning, often through sarcasm.',
          principles: [P_G8_ELA_IRONY_POV],
        },
        {
          id: 'g8-ela-u2-l3',
          unitId: 'g8-ela-u2',
          title: 'Lesson 3: Unit 2 Checkpoint Review: Irony & Perspective',
          kind: 'lesson_review',
          partOf: 'Irony Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/v/point-of-view-review',
          videoTitle: 'Khan Academy: Irony and Perspective Review',
          reading:
            'Distinguish among dramatic, situational, and verbal irony, and evaluate how narrative point of view manipulates reader emotion and suspense.',
          principles: [P_G8_ELA_IRONY_POV],
        },
      ],
    },

    // UNIT 3: Informational Texts: Evaluating Arguments & Conflicting Evidence
    {
      id: 'g8-ela-u3',
      title: 'Unit 3: Informational Texts: Evaluating Arguments & Conflicting Evidence',
      standards: ['RI.8.8', 'RI.8.9'],
      lessons: [
        {
          id: 'g8-ela-u3-l1',
          unitId: 'g8-ela-u3',
          title: 'Lesson 1: Tracing an Author’s Claim & Relevant Evidence',
          kind: 'lesson',
          partOf: 'Claims & Evidence',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-informational-text/x2288544e3f3a02a9:reading-informational-text/v/evaluating-arguments',
          videoTitle: 'Khan Academy: Evaluating Arguments and Evidence',
          reading:
            'A sound argument establishes a central claim supported by verifiable, relevant evidence—such as empirical studies, statistics, and expert testimony—rather than anecdotal bias.',
          principles: [P_G8_ELA_ARGUMENTS],
        },
        {
          id: 'g8-ela-u3-l2',
          unitId: 'g8-ela-u3',
          title: 'Lesson 2: Counterclaims & Sound Reasoning',
          kind: 'lesson',
          partOf: 'Counterclaims & Reasoning',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-informational-text/x2288544e3f3a02a9:reading-informational-text/v/counterclaims',
          videoTitle: 'Khan Academy: Identifying Counterclaims and Rebuttals',
          reading:
            'Fair arguments anticipate counterclaims, respectfully acknowledging opposing perspectives before presenting refuting evidence to solidify the author’s stance.',
          principles: [P_G8_ELA_ARGUMENTS],
        },
        {
          id: 'g8-ela-u3-l3',
          unitId: 'g8-ela-u3',
          title: 'Lesson 3: Analyzing Conflicting Interpretations of the Same Facts',
          kind: 'lesson',
          partOf: 'Conflicting Texts',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-informational-text/x2288544e3f3a02a9:reading-informational-text/v/comparing-texts',
          videoTitle: 'Khan Academy: Comparing Conflicting Information Texts',
          reading:
            'Two authors examining the same historical or scientific event may arrive at opposing conclusions by prioritizing different datasets, timelines, or ethical frameworks.',
          principles: [P_G8_ELA_ARGUMENTS],
        },
        {
          id: 'g8-ela-u3-l4',
          unitId: 'g8-ela-u3',
          title: 'Lesson 4: Unit 3 Checkpoint Review: Argument Analysis',
          kind: 'lesson_review',
          partOf: 'Argument Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-informational-text/v/argument-review',
          videoTitle: 'Khan Academy: Informational Arguments Review',
          reading:
            'Evaluate evidence sufficiency, spot logical fallacies (like ad hominem attacks and hasty generalizations), and compare conflicting evidentiary positions.',
          principles: [P_G8_ELA_ARGUMENTS],
        },
      ],
    },

    // UNIT 4: Grammar & Language: Verbals — Gerunds, Participles & Infinitives
    {
      id: 'g8-ela-u4',
      title: 'Unit 4: Grammar: Verbals — Gerunds, Participles & Infinitives',
      standards: ['L.8.1a', 'OH.L.8.1'],
      lessons: [
        {
          id: 'g8-ela-u4-l1',
          unitId: 'g8-ela-u4',
          title: 'Lesson 1: Gerunds Functioning as Nouns',
          kind: 'lesson',
          partOf: 'Gerunds',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/verbals-gerunds-participles-and-infinitives/v/gerunds-the-parts-of-speech-grammar',
          videoTitle: 'Khan Academy: Gerunds as Nouns',
          reading:
            'A gerund is a verb ending in -ing that functions as a noun in a sentence, acting as a subject (Swimming is fun), direct object (I like baking), or object of a preposition.',
          principles: [P_G8_ELA_VERBALS],
        },
        {
          id: 'g8-ela-u4-l2',
          unitId: 'g8-ela-u4',
          title: 'Lesson 2: Participles Functioning as Adjectives',
          kind: 'lesson',
          partOf: 'Participles',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/verbals-gerunds-participles-and-infinitives/v/participles-the-parts-of-speech-grammar',
          videoTitle: 'Khan Academy: Participles as Adjectives',
          reading:
            'A participle is a verb form acting as an adjective to modify a noun. Present participles end in -ing (the howling wind); past participles often end in -ed or -en (the frozen lake).',
          principles: [P_G8_ELA_VERBALS],
        },
        {
          id: 'g8-ela-u4-l3',
          unitId: 'g8-ela-u4',
          title: 'Lesson 3: Infinitives as Nouns, Adjectives & Adverbs',
          kind: 'lesson',
          partOf: 'Infinitives',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/verbals-gerunds-participles-and-infinitives/v/infinitives-the-parts-of-speech-grammar',
          videoTitle: 'Khan Academy: Infinitives',
          reading:
            'An infinitive is "to" followed by a base verb (to read, to build). Unlike prepositional phrases (to the library), infinitives function flexibly as nouns, adjectives, or adverbs.',
          principles: [P_G8_ELA_VERBALS],
        },
        {
          id: 'g8-ela-u4-l4',
          unitId: 'g8-ela-u4',
          title: 'Lesson 4: Unit 4 Checkpoint Review: Verbals Mastery',
          kind: 'lesson_review',
          partOf: 'Verbals Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/v/verbals-review',
          videoTitle: 'Khan Academy: Verbals Mastery Review',
          reading:
            'Distinguish between gerunds, present/past participles, and infinitives, determining their exact grammatical role in complex compound sentences.',
          principles: [P_G8_ELA_VERBALS],
        },
      ],
    },

    // UNIT 5: Grammar & Style: Verb Voice & Mood (Ohio Extension)
    {
      id: 'g8-ela-u5',
      title: 'Unit 5: Grammar & Style: Verb Voice & Mood',
      standards: ['L.8.1b', 'L.8.1c', 'OH.L.8.1'],
      isOhioExtension: true,
      lessons: [
        {
          id: 'g8-ela-u5-l1',
          unitId: 'g8-ela-u5',
          title: 'Lesson 1: Active vs. Passive Voice',
          kind: 'lesson',
          partOf: 'Active & Passive Voice',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/voice-and-aspect/v/active-and-passive-voice',
          videoTitle: 'Khan Academy: Active and Passive Voice',
          reading:
            'In active voice, the subject performs the verb action (The architect designed the bridge). In passive voice, the subject receives the action (The bridge was designed by the architect). Active voice provides greater clarity.',
          principles: [P_G8_ELA_VOICE_MOOD],
        },
        {
          id: 'g8-ela-u5-l2',
          unitId: 'g8-ela-u5',
          title: 'Lesson 2: Verb Moods: Indicative, Imperative & Interrogative',
          kind: 'lesson',
          partOf: 'Verb Moods Basics',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/modal-verbs-and-aspect/v/verb-moods-indicative-imperative-interrogative',
          videoTitle: 'Khan Academy: Indicative, Imperative & Interrogative Moods',
          reading:
            'Indicative mood states a fact or opinion (Summer in Ohio is humid). Imperative mood delivers a direct command (Submit your work now). Interrogative mood asks a question (Did you study?).',
          principles: [P_G8_ELA_VOICE_MOOD],
        },
        {
          id: 'g8-ela-u5-l3',
          unitId: 'g8-ela-u5',
          title: 'Lesson 3: Verb Moods: Conditional & Subjunctive',
          kind: 'lesson',
          partOf: 'Conditional & Subjunctive Moods',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/modal-verbs-and-aspect/v/the-subjunctive-mood',
          videoTitle: 'Khan Academy: Subjunctive and Conditional Moods',
          reading:
            'Conditional mood expresses an outcome that hinges on a condition (If you arrive early, we will prepare the lab). Subjunctive mood expresses a wish or condition contrary to fact (If I were you).',
          principles: [P_G8_ELA_VOICE_MOOD],
        },
        {
          id: 'g8-ela-u5-l4',
          unitId: 'g8-ela-u5',
          title: 'Lesson 4: Unit 5 Checkpoint Review: Voice & Moods',
          kind: 'lesson_review',
          partOf: 'Voice & Mood Review',
          isOhioExtension: true,
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/v/voice-and-mood-review',
          videoTitle: 'Khan Academy: Verb Voice and Mood Review',
          reading:
            'Correct inappropriate shifts in verb voice across clauses and identify indicative, imperative, interrogative, conditional, and subjunctive sentences.',
          principles: [P_G8_ELA_VOICE_MOOD],
        },
      ],
    },

    // UNIT 6: Narrative & Argumentative Writing Studio
    {
      id: 'g8-ela-u6',
      title: 'Unit 6: Narrative & Argumentative Writing Studio',
      standards: ['W.8.1', 'W.8.2', 'W.8.3'],
      lessons: [
        {
          id: 'g8-ela-u6-l1',
          unitId: 'g8-ela-u6',
          title: 'Lesson 1: Crafting Engaging Narrative Hooks & Realistic Dialogue',
          kind: 'lesson',
          partOf: 'Narrative Writing',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-literature/v/writing-narratives',
          videoTitle: 'Khan Academy: Narrative Writing Craft',
          reading:
            'Open stories in the middle of action (in media res), punctuate dialogue accurately with speaker tags, and use vivid sensory details to immerse readers.',
          principles: [P_G8_ELA_THEME_DIALOGUE],
        },
        {
          id: 'g8-ela-u6-l2',
          unitId: 'g8-ela-u6',
          title: 'Lesson 2: Structuring an Evidence-Based Argumentative Essay',
          kind: 'lesson',
          partOf: 'Argumentative Writing',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/x2288544e3f3a02a9:close-reading-informational-text/v/argumentative-writing',
          videoTitle: 'Khan Academy: Argumentative Essay Structure',
          reading:
            'Structure argumentative essays with a clear thesis claim, body paragraphs with topic sentences and cited evidence, a counter-argument rebuttal, and a call to action.',
          principles: [P_G8_ELA_ARGUMENTS],
        },
        {
          id: 'g8-ela-u6-l3',
          unitId: 'g8-ela-u6',
          title: 'Lesson 3: Unit 6 Checkpoint Review: Writing Studio',
          kind: 'lesson_review',
          partOf: 'Writing Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/ela/cc-8th-reading-vocab/v/writing-review',
          videoTitle: 'Khan Academy: Middle School Writing Workshop Review',
          reading:
            'Review transition words, paragraph cohesion, revising passive voice into punchy active verbs, and eliminating informal bias in academic writing.',
          principles: [P_G8_ELA_ARGUMENTS],
        },
      ],
    },

    // UNIT 7: Explore Literary Worlds Through Audio Dramas & Rhetoric Labs
    {
      id: 'g8-ela-u7',
      title: 'Unit 7: Explore Literary Worlds Through Audio Dramas & Rhetoric Labs',
      kind: 'explore',
      standards: ['RL.8.Explore', 'RI.8.Explore'],
      lessons: [],
      exploreItems: [
        {
          id: 'g8-ela-exp-radio-drama',
          title: 'The War of the Worlds 1938 Radio Broadcast Archive',
          type: 'reading',
          description:
            'Listen to excerpts from Orson Welles’ iconic radio drama adaptation of H.G. Wells and explore how dramatic irony created nationwide panic.',
          url: 'https://www.loc.gov/item/webcast-4933/',
          estimatedMinutes: 25,
          requiresParentPin: true,
          reflectionPrompt: 'Why did simulated live news bulletins make the radio drama so terrifyingly believable to listeners in 1938?',
        },
        {
          id: 'g8-ela-exp-rhetoric-speech',
          title: 'Great American Speeches: Rhetorical Device Analyzer',
          type: 'project',
          description:
            'Analyze Frederick Douglass’s 1852 Fourth of July address or Abraham Lincoln’s Gettysburg Address to identify rhetorical questions, repetition, and ethos.',
          url: 'https://www.loc.gov/exhibits/lincoln/',
          estimatedMinutes: 25,
          requiresParentPin: false,
          materials: ['Speech transcript', 'Highlighters (three colors)', 'Notebook'],
          reflectionPrompt: 'Which rhetorical device was most persuasive in your chosen speech, and why did it move the audience?',
        },
        {
          id: 'g8-ela-exp-monologue-lab',
          title: 'Dramatic Irony Monologue & Voice Acting Lab',
          type: 'hands_on',
          description:
            'Write and record a short two-minute monologue where the audience knows a startling secret that your fictional character does not know.',
          estimatedMinutes: 25,
          requiresParentPin: false,
          materials: ['Notebook or word processor', 'Voice recorder or smartphone'],
          reflectionPrompt: 'How did you use pauses, vocal tone, and word choice to build tension around the character’s missing knowledge?',
        },
      ],
    },

    // UNIT 8: Teacher Resources & Pacing
    {
      id: 'g8-ela-u8',
      title: 'Unit 8: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['OH.8.ELA', 'CCSS.8.ELA'],
      lessons: [],
      resources: [
        {
          id: 'g8-ela-res-pacing',
          title: 'Grade 8 ELA 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Full-year curriculum sequence coordinating literary analysis, irony, argumentative informational texts, verbals, and active voice.',
          body: `## Grade 8 English Language Arts Pacing Guide (36 Weeks)

- **Weeks 1–6**: Unit 1 — Reading Literature: Theme, Character Development & Dialogue (RL.8.1-3)
- **Weeks 7–11**: Unit 2 — Point of View, Irony & Dramatic Tension (RL.8.6)
- **Week 12**: Quarter 1 Literature Checkpoint
- **Weeks 13–18**: Unit 3 — Informational Texts: Evaluating Arguments & Conflicting Evidence (RI.8.8-9)
- **Weeks 19–23**: Unit 4 — Grammar: Verbals — Gerunds, Participles & Infinitives (L.8.1a)
- **Week 24**: Quarter 2 & 3 Informational and Grammar Checkpoint
- **Weeks 25–29**: Unit 5 — Grammar & Style: Verb Voice & Mood (L.8.1b-c)
- **Weeks 30–33**: Unit 6 — Narrative & Argumentative Writing Studio (W.8.1-3)
- **Weeks 34–36**: Unit 7 — Capstone Rhetorical Speech Analysis & Audio Drama Presentations`,
        },
        {
          id: 'g8-ela-res-standards',
          title: 'Grade 8 Ohio & Common Core ELA Standards Crosswalk',
          kind: 'standards_map',
          description:
            'Standards alignment crosswalk connecting Home-School-Lite units to Ohio Grade 8 English Language Arts standards.',
          body: `| Unit | Ohio Standard | Literary & Linguistic Focus |
|---|---|---|
| Unit 1 | RL.8.1, 2, 3 | Textual evidence, theme evolution, dialogue propels action |
| Unit 2 | RL.8.6 | Dramatic, situational, verbal irony; point of view suspense |
| Unit 3 | RI.8.8, 9 | Argument claims, sufficient evidence, conflicting source views |
| Unit 4 | L.8.1a | Verbals: gerunds as nouns, participles as adjectives, infinitives |
| Unit 5 | L.8.1b, c | Active vs. passive voice clarity; indicative, imperative, subjunctive moods |
| Unit 6 | W.8.1, 2, 3 | Multi-paragraph argumentative essay, counterclaims, thesis cohesion |`,
        },
        {
          id: 'g8-ela-res-rubric',
          title: 'Middle School Argumentative Essay Scoring Rubric',
          kind: 'assessment_rubric',
          description:
            'Four-category evaluation rubric scoring claim clarity, evidence citation, counterclaim handling, and grammatical conventions.',
          body: `## Middle School Argumentative Essay Rubric

1. **Claim & Organization (25%)**: Clear thesis statement, logical paragraph sequencing, and smooth transition phrases.
2. **Evidence & Reasoning (25%)**: Cites credible facts and statistics; thoroughly explains how evidence proves the claim.
3. **Counterclaim Rebuttal (25%)**: Acknowledges the opposing viewpoint objectively and refutes it with sound logic.
4. **Conventions & Voice (25%)**: Employs active voice, correct verb moods, precise vocabulary, and error-free mechanics.`,
        },
      ],
    },
  ],
}
