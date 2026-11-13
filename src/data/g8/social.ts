import { Course, Principle } from '../../types'

// Principles for Grade 8 Social Studies
const P_G8_SOC_REVOLUTION: Principle = {
  id: 'p-g8-soc-revolution',
  title: 'The American Revolution & Declaration of Independence',
  standard: 'OH.8.SS.5 / OH.8.SS.6',
  summary: 'Colonists protested British taxation without representation and declared independence in 1776 based on natural rights.',
  bank: [
    {
      id: 'g8-soc-rev-1',
      type: 'mc',
      prompt: 'Why did American colonists protest the Stamp Act and Tea Act?',
      choices: [
        'Parliament taxed them without colonial representation.',
        'They wanted higher taxes on paper.',
        'They opposed all trade with Europe.',
        'They wanted a French king.',
      ],
      answer: 'Parliament taxed them without colonial representation.',
      explanation: 'Colonists argued that Britain’s Parliament could not tax them fairly without elected colonial representatives.',
    },
    {
      id: 'g8-soc-rev-2',
      type: 'mc',
      prompt: 'Who was the primary author of the Declaration of Independence in 1776?',
      choices: ['Thomas Jefferson', 'Abraham Lincoln', 'Alexander Hamilton', 'King George III'],
      answer: 'Thomas Jefferson',
      explanation: 'Thomas Jefferson drafted the Declaration of Independence, adopted by the Continental Congress on July 4, 1776.',
    },
    {
      id: 'g8-soc-rev-3',
      type: 'mc',
      prompt: 'Which three unalienable rights are named in the Declaration of Independence?',
      choices: [
        'Life, Liberty, and the pursuit of Happiness',
        'Voting, Taxation, and Monarchy',
        'Land, Gold, and Trade',
        'Speech, Press, and Assembly',
      ],
      answer: 'Life, Liberty, and the pursuit of Happiness',
      explanation: 'The Declaration states that all people have natural rights including life, liberty, and the pursuit of happiness.',
    },
    {
      id: 'g8-soc-rev-4',
      type: 'mc',
      prompt: 'According to the Declaration, where do governments get their rightful power?',
      choices: [
        'From the consent of the governed (the people)',
        'From royal birthright alone',
        'From military conquest',
        'From foreign treaties',
      ],
      answer: 'From the consent of the governed (the people)',
      explanation: 'Popular sovereignty means government authority comes from the agreement and vote of the people.',
    },
    {
      id: 'g8-soc-rev-5',
      type: 'mc',
      prompt: 'Which 1777 battle convinced France to ally with the United States?',
      choices: ['Battle of Saratoga', 'Battle of Gettysburg', 'Fort Sumter', 'Alamo'],
      answer: 'Battle of Saratoga',
      explanation: 'The American victory at Saratoga proved the Continental Army could win, bringing France into the war.',
    },
    {
      id: 'g8-soc-rev-6',
      type: 'mc',
      prompt: 'Which 1781 victory effectively ended major fighting in the Revolutionary War?',
      choices: ['Battle of Yorktown', 'Lexington and Concord', 'Bunker Hill', 'Antietam'],
      answer: 'Battle of Yorktown',
      explanation: 'Washington’s army and the French fleet trapped British General Cornwallis at Yorktown, Virginia, in 1781.',
    },
    {
      id: 'g8-soc-rev-7',
      type: 'mc',
      prompt: 'What did Thomas Paine’s 1776 pamphlet Common Sense urge colonists to do?',
      choices: [
        'Declare complete independence from Britain',
        'Apologize to King George III',
        'Pay triple taxes on tea',
        'Return to Europe',
      ],
      answer: 'Declare complete independence from Britain',
      explanation: 'Common Sense used plain language to persuade thousands of colonists to support independence.',
    },
    {
      id: 'g8-soc-rev-8',
      type: 'mc',
      prompt: 'What did the Treaty of Paris (1783) accomplish?',
      choices: [
        'Britain recognized the United States as an independent nation.',
        'It wrote the Bill of Rights.',
        'It started the War of 1812.',
        'It abolished all state governments.',
      ],
      answer: 'Britain recognized the United States as an independent nation.',
      explanation: 'The 1783 Treaty of Paris officially ended the Revolutionary War and recognized U.S. independence.',
    },
  ],
}

const P_G8_SOC_CONSTITUTION_OHIO: Principle = {
  id: 'p-g8-soc-constitution-ohio',
  title: 'U.S. Constitution, Bill of Rights & the Northwest Ordinance',
  standard: 'OH.8.SS.7 / OH.8.SS.8 / OH.8.SS.9',
  summary: 'The Constitution replaced the weak Articles of Confederation; the Bill of Rights protects liberties, and the Northwest Ordinance shaped Ohio.',
  bank: [
    {
      id: 'g8-soc-con-1',
      type: 'mc',
      prompt: 'Why did the Articles of Confederation fail as America’s first government?',
      choices: [
        'Congress was too weak to tax or enforce laws.',
        'It gave the president absolute royal power.',
        'It banned all state governments.',
        'It created too many federal courts.',
      ],
      answer: 'Congress was too weak to tax or enforce laws.',
      explanation: 'Under the Articles, Congress lacked power to levy taxes or regulate trade, leading to the 1787 Constitutional Convention.',
    },
    {
      id: 'g8-soc-con-2',
      type: 'mc',
      prompt: 'How does the U.S. Constitution prevent any one branch from becoming a tyranny?',
      choices: [
        'Separation of powers with checks and balances',
        'Giving Congress control over courts and the presidency',
        'Eliminating elections',
        'Letting states ignore federal treaties',
      ],
      answer: 'Separation of powers with checks and balances',
      explanation: 'Dividing power among legislative, executive, and judicial branches lets each branch check the others.',
    },
    {
      id: 'g8-soc-con-3',
      type: 'mc',
      prompt: 'What are the first ten amendments to the U.S. Constitution called?',
      choices: [
        'The Bill of Rights',
        'The Articles of Confederation',
        'The Federalist Papers',
        'The Emancipation Proclamation',
      ],
      answer: 'The Bill of Rights',
      explanation: 'Ratified in 1791, the Bill of Rights guarantees individual freedoms such as speech, religion, and fair trials.',
    },
    {
      id: 'g8-soc-con-4',
      type: 'mc',
      prompt: 'Which five freedoms are protected by the First Amendment?',
      choices: [
        'Religion, speech, press, assembly, and petition',
        'Jury trial, bail, taxes, roads, and coinage',
        'Voting, presidency, treaties, tariffs, and banking',
        'Property, travel, farming, hunting, and fishing',
      ],
      answer: 'Religion, speech, press, assembly, and petition',
      explanation: 'The First Amendment protects freedom of religion, speech, the press, peaceful assembly, and petitioning government.',
    },
    {
      id: 'g8-soc-con-5',
      type: 'mc',
      prompt: 'How did the Northwest Ordinance of 1787 directly affect Ohio?',
      choices: [
        'It set Ohio’s statehood path and banned slavery.',
        'It sold Ohio back to Great Britain.',
        'It made slavery mandatory in the Northwest Territory.',
        'It banned public schools in Ohio.',
      ],
      answer: 'It set Ohio’s statehood path and banned slavery.',
      explanation: 'The Northwest Ordinance created rules for admitting new states like Ohio (1803), encouraged education, and banned slavery in the territory.',
    },
    {
      id: 'g8-soc-con-6',
      type: 'mc',
      prompt: 'What is federalism under the U.S. Constitution?',
      choices: [
        'Sharing power between the national and state governments',
        'Rule by a single king or queen',
        'Abolishing all state legislatures',
        'Giving all power to foreign allies',
      ],
      answer: 'Sharing power between the national and state governments',
      explanation: 'Federalism divides governing authority between the federal government in Washington and the individual states.',
    },
    {
      id: 'g8-soc-con-7',
      type: 'mc',
      prompt: 'What did the Great Compromise at the 1787 Convention create?',
      choices: [
        'A two-house Congress: the Senate and House of Representatives',
        'A single-house parliament',
        'Twelve presidents serving at once',
        'No legislative branch',
      ],
      answer: 'A two-house Congress: the Senate and House of Representatives',
      explanation: 'The Great Compromise balanced equal state representation in the Senate with population-based representation in the House.',
    },
    {
      id: 'g8-soc-con-8',
      type: 'mc',
      prompt: 'Why did Anti-Federalists initially oppose ratifying the Constitution?',
      choices: [
        'It lacked a Bill of Rights to protect citizens’ liberties.',
        'It made the central government too weak.',
        'It kept King George III in charge.',
        'It outlawed farming.',
      ],
      answer: 'It lacked a Bill of Rights to protect citizens’ liberties.',
      explanation: 'Anti-Federalists insisted on adding a Bill of Rights so the federal government could not infringe on personal freedoms.',
    },
  ],
}

const P_G8_SOC_WESTWARD_EXPANSION: Principle = {
  id: 'p-g8-soc-westward',
  title: 'Westward Expansion, Manifest Destiny & Native Nations',
  standard: 'OH.8.SS.10',
  summary: 'Territorial acquisitions, the Louisiana Purchase, and transportation canals accelerated westward migration and Indigenous displacement.',
  bank: [
    {
      id: 'g8-soc-wst-1',
      type: 'mc',
      prompt: 'What idea claimed the United States had a mission to expand westward?',
      choices: [
        'Manifest Destiny',
        'Royal Proclamation',
        'The Great Compromise',
        'Popular sovereignty',
      ],
      answer: 'Manifest Destiny',
      explanation: 'Manifest Destiny was the 19th-century belief that the United States was destined to expand across North America to the Pacific.',
    },
    {
      id: 'g8-soc-wst-2',
      type: 'mc',
      prompt: 'Which 1803 land deal doubled the geographical size of the United States?',
      choices: [
        'The Louisiana Purchase',
        'The Treaty of Paris',
        'The Northwest Ordinance',
        'The Adams-Onís Treaty',
      ],
      answer: 'The Louisiana Purchase',
      explanation: 'Thomas Jefferson purchased the Louisiana Territory from France in 1803, doubling the nation’s land area.',
    },
    {
      id: 'g8-soc-wst-3',
      type: 'mc',
      prompt: 'Who led the expedition to map the Louisiana Territory to the Pacific?',
      choices: [
        'Meriwether Lewis and William Clark',
        'George Washington and Alexander Hamilton',
        'Abraham Lincoln and Ulysses S. Grant',
        'Hernán Cortés and Francisco Pizarro',
      ],
      answer: 'Meriwether Lewis and William Clark',
      explanation: 'The Lewis and Clark expedition explored the Missouri and Columbia rivers, reaching the Pacific Ocean with Sacagawea’s guidance.',
    },
    {
      id: 'g8-soc-wst-4',
      type: 'mc',
      prompt: 'What tragedy forced Cherokee and other nations to march west to Oklahoma?',
      choices: [
        'The Trail of Tears',
        'The Boston Tea Party',
        'The Underground Railroad',
        'The Gold Rush',
      ],
      answer: 'The Trail of Tears',
      explanation: 'Under the 1830 Indian Removal Act, federal troops forced thousands of Cherokee people on a deadly winter march west.',
    },
    {
      id: 'g8-soc-wst-5',
      type: 'mc',
      prompt: 'What was discovered in California in 1848, sparking a massive migration?',
      choices: ['Gold', 'Silver', 'Coal', 'Oil'],
      answer: 'Gold',
      explanation: 'The discovery of gold at Sutter’s Mill triggered the 1849 California Gold Rush, drawing over 300,000 migrants.',
    },
    {
      id: 'g8-soc-wst-6',
      type: 'mc',
      prompt: 'How did the Erie Canal transform trade between the Midwest and East?',
      choices: [
        'Connected the Great Lakes to the Atlantic Ocean',
        'Cut off all grain shipping',
        'Replaced all railroad networks',
        'Diverted water away from New York',
      ],
      answer: 'Connected the Great Lakes to the Atlantic Ocean',
      explanation: 'Completed in 1825, the Erie Canal lowered shipping costs between Midwest farms and New York City seaports.',
    },
    {
      id: 'g8-soc-wst-7',
      type: 'mc',
      prompt: 'Which transportation invention connected the East Coast to California by 1869?',
      choices: [
        'The Transcontinental Railroad',
        'The steam paddleboat',
        'The National Road',
        'The telegraph line',
      ],
      answer: 'The Transcontinental Railroad',
      explanation: 'Meeting at Promontory Summit in 1869, the Transcontinental Railroad reduced cross-country travel from months to days.',
    },
    {
      id: 'g8-soc-wst-8',
      type: 'mc',
      prompt: 'What was the Oregon Trail used for in the 1840s?',
      choices: [
        'A wagon route for emigrants moving westward',
        'A military supply line during the Revolution',
        'A slave-trading route to Georgia',
        'A shipping canal across the Rockies',
      ],
      answer: 'A wagon route for emigrants moving westward',
      explanation: 'Pioneers traveled the 2,000-mile Oregon Trail in covered wagons seeking farmland in the Willamette Valley.',
    },
  ],
}

const P_G8_SOC_SECTIONALISM: Principle = {
  id: 'p-g8-soc-sectionalism',
  title: 'Sectionalism, Compromises & the Road to Civil War',
  standard: 'OH.8.SS.11',
  summary: 'Economic differences, the Fugitive Slave Act, the Dred Scott ruling, and abolitionist resistance deepened regional divisions.',
  bank: [
    {
      id: 'g8-soc-sec-1',
      type: 'mc',
      prompt: 'How did Northern and Southern economies differ before the Civil War?',
      choices: [
        'Industrial manufacturing in North; plantation agriculture in South',
        'Gold mining in North; cattle ranching in South',
        'Fishing in South; fur trapping in North',
        'Identical factory economies in both regions',
      ],
      answer: 'Industrial manufacturing in North; plantation agriculture in South',
      explanation: 'The North developed factory industries and free wage labor, while the South depended on enslaved labor for cotton and tobacco.',
    },
    {
      id: 'g8-soc-sec-2',
      type: 'mc',
      prompt: 'What did the Missouri Compromise of 1820 establish?',
      choices: [
        'Banned slavery north of the 36°30′ parallel',
        'Abolished slavery nationwide',
        'Made California a slave state',
        'Ended all western migration',
      ],
      answer: 'Banned slavery north of the 36°30′ parallel',
      explanation: 'It admitted Missouri as a slave state, Maine as a free state, and banned slavery in northern Louisiana lands.',
    },
    {
      id: 'g8-soc-sec-3',
      type: 'mc',
      prompt: 'What did the Fugitive Slave Act of 1850 require Northern citizens to do?',
      choices: [
        'Help capture and return accused runaway enslaved people',
        'Grant freedom to all arriving runaways',
        'Pay runaway wages to southern masters',
        'Build schools for freed persons',
      ],
      answer: 'Help capture and return accused runaway enslaved people',
      explanation: 'The law penalized Northerners who helped freedom seekers and forced marshals to return captured people without jury trials.',
    },
    {
      id: 'g8-soc-sec-4',
      type: 'mc',
      prompt: 'What controversial 1857 Supreme Court ruling declared Black Americans could not be citizens?',
      choices: [
        'The Dred Scott v. Sandford decision',
        'Marbury v. Madison',
        'Brown v. Board of Education',
        'McCulloch v. Maryland',
      ],
      answer: 'The Dred Scott v. Sandford decision',
      explanation: 'Chief Justice Taney ruled that Black Americans were not citizens and that Congress could not prohibit slavery in territories.',
    },
    {
      id: 'g8-soc-sec-5',
      type: 'mc',
      prompt: 'What happened during "Bleeding Kansas" after the Kansas-Nebraska Act?',
      choices: [
        'Violent clashes between pro-slavery and anti-slavery settlers',
        'A severe agricultural drought',
        'A peaceful statewide referendum',
        'A war with Great Britain',
      ],
      answer: 'Violent clashes between pro-slavery and anti-slavery settlers',
      explanation: 'Popular sovereignty led armed factions to pour into Kansas, triggering years of guerrilla fighting.',
    },
    {
      id: 'g8-soc-sec-6',
      type: 'mc',
      prompt: 'Who led a raid on the federal arsenal at Harpers Ferry in 1859?',
      choices: ['John Brown', 'Jefferson Davis', 'Robert E. Lee', 'Andrew Jackson'],
      answer: 'John Brown',
      explanation: 'Abolitionist John Brown sought weapons to ignite an armed uprising against slavery before being captured and executed.',
    },
    {
      id: 'g8-soc-sec-7',
      type: 'mc',
      prompt: 'Why did Southern states begin seceding after the 1860 presidential election?',
      choices: [
        'Abraham Lincoln was elected without Southern electoral votes',
        'The tariff was eliminated',
        'Congress banned all agriculture',
        'Washington D.C. was relocated',
      ],
      answer: 'Abraham Lincoln was elected without Southern electoral votes',
      explanation: 'Lincoln’s Republican victory on a platform opposing slavery’s western expansion prompted South Carolina and ten other states to secede.',
    },
    {
      id: 'g8-soc-sec-8',
      type: 'mc',
      prompt: 'What did the principle of popular sovereignty propose for western territories?',
      choices: [
        'Settlers in each territory would vote on slavery',
        'Congress would decide all state laws',
        'The Supreme Court would govern territories',
        'The military would rule each state',
      ],
      answer: 'Settlers in each territory would vote on slavery',
      explanation: 'Popular sovereignty allowed territorial voters rather than federal lawmakers to decide whether to permit slavery.',
    },
  ],
}

const P_G8_SOC_CIVIL_WAR: Principle = {
  id: 'p-g8-soc-civil-war',
  title: 'Westward Expansion, Abolition, Civil War & Reconstruction',
  standard: 'OH.8.SS.11 / OH.8.SS.12 / OH.8.SS.13',
  summary: 'Disputes over the expansion of slavery led to the Civil War (1861–1865); the 13th, 14th, and 15th Amendments reshaped the nation.',
  bank: [
    {
      id: 'g8-soc-cw-1',
      type: 'mc',
      prompt: 'What central issue divided the North and South before the Civil War?',
      choices: [
        'Slavery and its expansion into western territories',
        'Whether to speak English or French',
        'Building ships versus airplanes',
        'Returning to British rule',
      ],
      answer: 'Slavery and its expansion into western territories',
      explanation: 'Moral, economic, and political conflicts over slavery—especially in new western lands—drove sectional division.',
    },
    {
      id: 'g8-soc-cw-2',
      type: 'mc',
      prompt: 'What role did Ohio play in the Underground Railroad?',
      choices: [
        'Safe-house routes helping freedom seekers reach Canada',
        'A steam locomotive factory in Texas',
        'A Confederate military base',
        'A gold-mining tunnel in California',
      ],
      answer: 'Safe-house routes helping freedom seekers reach Canada',
      explanation: 'Bounded by the Ohio River and Lake Erie, Ohio had many abolitionist conductors and routes on the Underground Railroad.',
    },
    {
      id: 'g8-soc-cw-3',
      type: 'mc',
      prompt: 'What did Abraham Lincoln’s 1863 Emancipation Proclamation declare?',
      choices: [
        'Enslaved people in rebelling Confederate states were free.',
        'The Civil War was canceled.',
        'Women gained the right to vote in 1863.',
        'Slavery was expanded into Ohio.',
      ],
      answer: 'Enslaved people in rebelling Confederate states were free.',
      explanation: 'The Emancipation Proclamation declared freedom for enslaved people in Confederate territory and made ending slavery a war goal.',
    },
    {
      id: 'g8-soc-cw-4',
      type: 'mc',
      prompt: 'Which 1863 battle in Pennsylvania was a major turning point for the Union?',
      choices: ['Battle of Gettysburg', 'Battle of Saratoga', 'Battle of Yorktown', 'Lexington'],
      answer: 'Battle of Gettysburg',
      explanation: 'The Union victory at Gettysburg halted General Lee’s northern invasion and was followed by Lincoln’s Gettysburg Address.',
    },
    {
      id: 'g8-soc-cw-5',
      type: 'mc',
      prompt: 'What did the 13th Amendment to the Constitution accomplish in 1865?',
      choices: [
        'It abolished slavery throughout the entire United States.',
        'It lowered the voting age to 18.',
        'It created the income tax.',
        'It purchased the Louisiana Territory.',
      ],
      answer: 'It abolished slavery throughout the entire United States.',
      explanation: 'Ratified in 1865, the 13th Amendment permanently outlawed slavery across the nation.',
    },
    {
      id: 'g8-soc-cw-6',
      type: 'mc',
      prompt: 'What did the 14th Amendment guarantee during Reconstruction?',
      choices: [
        'Birthright citizenship and equal protection under the law',
        'Only landowners could vote',
        'States could ignore the Bill of Rights',
        'Presidential term limits',
      ],
      answer: 'Birthright citizenship and equal protection under the law',
      explanation: 'The 14th Amendment defined national citizenship for all persons born in the U.S. and required equal protection of the laws.',
    },
    {
      id: 'g8-soc-cw-7',
      type: 'mc',
      prompt: 'What right did the 15th Amendment protect?',
      choices: [
        'Voting rights could not be denied based on race.',
        'Freedom to print newspapers',
        'Quartering of soldiers',
        'State tariffs on cotton',
      ],
      answer: 'Voting rights could not be denied based on race.',
      explanation: 'The 15th Amendment prohibited states from denying a citizen the right to vote on account of race, color, or previous servitude.',
    },
    {
      id: 'g8-soc-cw-8',
      type: 'mc',
      prompt: 'Who was Frederick Douglass?',
      choices: [
        'A formerly enslaved abolitionist writer and speaker for equality',
        'The president of the Confederacy',
        'The British commander at Yorktown',
        'The governor of Virginia',
      ],
      answer: 'A formerly enslaved abolitionist writer and speaker for equality',
      explanation: 'Frederick Douglass escaped slavery, published the North Star newspaper, and advised President Lincoln on civil rights.',
    },
  ],
}

export const G8_SOCIAL_COURSE: Course = {
  id: 'g8-social',
  subject: 'social',
  grade: 8,
  title: 'Grade 8 U.S. Studies',
  subtitle: 'American History from Colonization to Reconstruction & Ohio Heritage',
  credits: 1.0,
  color: '#b45309',
  icon: '🦅',
  units: [
    // UNIT 1: The American Revolution & Declaration of Independence
    {
      id: 'g8-soc-u1',
      title: 'Unit 1: The American Revolution & Declaration of Independence',
      standards: ['OH.8.SS.5', 'OH.8.SS.6'],
      lessons: [
        {
          id: 'g8-soc-u1-l1',
          unitId: 'g8-soc-u1',
          title: 'Lesson 1: Colonial Resistance & "Taxation Without Representation"',
          kind: 'lesson',
          partOf: 'Road to Revolution',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
          videoTitle: 'Khan Academy: The Stamp Act & Road to Revolution',
          reading:
            'Following the French and Indian War, Britain taxed colonies through the Stamp and Townshend acts. Colonists boycotted imports, asserting that taxation without parliament representation was tyranny.',
          principles: [P_G8_SOC_REVOLUTION],
        },
        {
          id: 'g8-soc-u1-l2',
          unitId: 'g8-soc-u1',
          title: 'Lesson 2: The Declaration of Independence & Natural Rights',
          kind: 'lesson',
          partOf: 'Declaration of 1776',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-american-revolution/a/the-american-revolution',
          videoTitle: 'Khan Academy: The Declaration of Independence',
          reading:
            'Adopted July 4, 1776, Thomas Jefferson’s text articulated Enlightenment ideals: that all people hold unalienable rights to life, liberty, and happiness, and governments derive just power from the consent of the governed.',
          principles: [P_G8_SOC_REVOLUTION],
        },
        {
          id: 'g8-soc-u1-l3',
          unitId: 'g8-soc-u1',
          title: 'Lesson 3: Turning Points: Saratoga, Yorktown & Treaty of Paris',
          kind: 'lesson',
          partOf: 'Revolutionary War Battles',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
          videoTitle: 'Khan Academy: Major Battles of the Revolutionary War',
          reading:
            'American victory at Saratoga (1777) secured a French alliance. Washington trapped Cornwallis at Yorktown (1781), leading to the 1783 Treaty of Paris recognizing American sovereignty.',
          principles: [P_G8_SOC_REVOLUTION],
        },
        {
          id: 'g8-soc-u1-l4',
          unitId: 'g8-soc-u1',
          title: 'Lesson 4: Unit 1 Checkpoint Review: The Revolution',
          kind: 'lesson_review',
          partOf: 'Revolution Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
          videoTitle: 'Khan Academy: American Revolution Review',
          reading:
            'Review colonial grievances, Thomas Paine’s Common Sense, foundational principles of popular sovereignty, and military alliances winning independence.',
          principles: [P_G8_SOC_REVOLUTION],
        },
      ],
    },

    // UNIT 2: Constitutional Convention, Bill of Rights & Northwest Ordinance (Ohio Extension)
    {
      id: 'g8-soc-u2',
      title: 'Unit 2: U.S. Constitution, Bill of Rights & Northwest Ordinance',
      standards: ['OH.8.SS.7', 'OH.8.SS.8', 'OH.8.SS.9'],
      isOhioExtension: true,
      lessons: [
        {
          id: 'g8-soc-u2-l1',
          unitId: 'g8-soc-u2',
          title: 'Lesson 1: Flaws in the Articles of Confederation & the 1787 Convention',
          kind: 'lesson',
          partOf: 'Constitutional Convention',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution/creating-a-nation/v/the-constitutional-convention',
          videoTitle: 'Khan Academy: The Constitutional Convention of 1787',
          reading:
            'Economic unrest and Shays’ Rebellion revealed the central weakness of the Articles of Confederation. Delegates convened in Philadelphia to engineer a federal republic with checks and balances.',
          principles: [P_G8_SOC_CONSTITUTION_OHIO],
        },
        {
          id: 'g8-soc-u2-l2',
          unitId: 'g8-soc-u2',
          title: 'Lesson 2: Separation of Powers, Federalism & the Bill of Rights',
          kind: 'lesson',
          partOf: 'Bill of Rights',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
          videoTitle: 'Khan Academy: The Bill of Rights',
          reading:
            'The Constitution divides governance across legislative, executive, and judicial branches. To protect against tyranny, the 1791 Bill of Rights guaranteed free speech, religion, and trial protections.',
          principles: [P_G8_SOC_CONSTITUTION_OHIO],
        },
        {
          id: 'g8-soc-u2-l3',
          unitId: 'g8-soc-u2',
          title: 'Lesson 3: The Northwest Ordinance of 1787 & Ohio Statehood',
          kind: 'lesson',
          partOf: 'Northwest Ordinance & Ohio',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
          videoTitle: 'Khan Academy: The Northwest Ordinance of 1787',
          reading:
            'The Northwest Ordinance governed the territory north of the Ohio River, creating orderly statehood mechanisms, mandating public education, and historically outlawing slavery, leading to Ohio’s 1803 statehood.',
          principles: [P_G8_SOC_CONSTITUTION_OHIO],
        },
        {
          id: 'g8-soc-u2-l4',
          unitId: 'g8-soc-u2',
          title: 'Lesson 4: Unit 2 Checkpoint Review: Constitution & Ohio Foundations',
          kind: 'lesson_review',
          partOf: 'Constitution Review',
          isOhioExtension: true,
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution/x71a94f19:unit-overview/a/unit-3-overview',
          videoTitle: 'Khan Academy: Constitution and Northwest Ordinance Review',
          reading:
            'Review the Great Compromise, bicameral congress, federalism checks and balances, the First Amendment, and Ohio’s constitutional foundations.',
          principles: [P_G8_SOC_CONSTITUTION_OHIO],
        },
      ],
    },

    // UNIT 3: Westward Expansion, Manifest Destiny & Native Nations
    {
      id: 'g8-soc-u3',
      title: 'Unit 3: Westward Expansion, Manifest Destiny & Native Nations',
      standards: ['OH.8.SS.10'],
      lessons: [
        {
          id: 'g8-soc-u3-l1',
          unitId: 'g8-soc-u3',
          title: 'Lesson 1: The Louisiana Purchase & Lewis and Clark',
          kind: 'lesson',
          partOf: 'Louisiana Territory',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/the-early-republic/politics-society-early-19th-c/a/the-louisiana-purchase',
          videoTitle: 'Khan Academy: The Louisiana Purchase and Lewis & Clark',
          reading:
            'Purchased from Napoleon in 1803 for $15 million, the Louisiana territory doubled the nation. Meriwether Lewis, William Clark, and Sacagawea documented western geography, waterways, and Indigenous nations.',
          principles: [P_G8_SOC_WESTWARD_EXPANSION],
        },
        {
          id: 'g8-soc-u3-l2',
          unitId: 'g8-soc-u3',
          title: 'Lesson 2: Manifest Destiny, Indian Removal & the Trail of Tears',
          kind: 'lesson',
          partOf: 'Indian Removal',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/search?page_search_query=The%20Indian%20Removal%20Act%20and%20the%20Trail%20of%20Tears%208th%20grade%20history',
          videoTitle: 'Khan Academy: The Indian Removal Act and the Trail of Tears',
          reading:
            'Belief in Manifest Destiny rationalized aggressive territorial expansion. President Jackson signed the 1830 Indian Removal Act, forcibly marching over 16,000 Cherokee along the deadly Trail of Tears.',
          principles: [P_G8_SOC_WESTWARD_EXPANSION],
        },
        {
          id: 'g8-soc-u3-l3',
          unitId: 'g8-soc-u3',
          title: 'Lesson 3: Trails West, the Gold Rush & Transcontinental Rails',
          kind: 'lesson',
          partOf: 'Trails & California Gold',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/search?page_search_query=The%20California%20Gold%20Rush%20and%20Western%20Trails%208th%20grade%20history',
          videoTitle: 'Khan Academy: The California Gold Rush and Western Trails',
          reading:
            'Pioneers traversed the Oregon and Mormon trails in wagon trains. The 1849 Gold Rush accelerated California settlement, culminating in the 1869 completion of the Transcontinental Railroad.',
          principles: [P_G8_SOC_WESTWARD_EXPANSION],
        },
        {
          id: 'g8-soc-u3-l4',
          unitId: 'g8-soc-u3',
          title: 'Lesson 4: Unit 3 Checkpoint Review: Westward Expansion',
          kind: 'lesson_review',
          partOf: 'Expansion Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/the-early-republic/x71a94f19:unit-overview-unit-4/a/unit-4-overview',
          videoTitle: 'Khan Academy: Westward Expansion Review',
          reading:
            'Synthesize expansion drivers: the Erie Canal, agrarian land hunger, gold discoveries, and the severe cultural impact on sovereign Native American nations.',
          principles: [P_G8_SOC_WESTWARD_EXPANSION],
        },
      ],
    },

    // UNIT 4: Sectionalism, Slavery & the Road to Civil War
    {
      id: 'g8-soc-u4',
      title: 'Unit 4: Sectionalism, Slavery & the Road to Civil War',
      standards: ['OH.8.SS.11'],
      lessons: [
        {
          id: 'g8-soc-u4-l1',
          unitId: 'g8-soc-u4',
          title: 'Lesson 1: Regional Economic Differences: Factory vs. Plantation',
          kind: 'lesson',
          partOf: 'Sectionalism',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era/sectional-tension-1850s/v/sectional-conflict-regional-differences',
          videoTitle: 'Khan Academy: Sectional Conflict and Regional Economies',
          reading:
            'The industrial North developed urban manufacturing networks and paid wage labor, while the agrarian South relied on chattel slavery to fuel the global cotton export economy.',
          principles: [P_G8_SOC_SECTIONALISM],
        },
        {
          id: 'g8-soc-u4-l2',
          unitId: 'g8-soc-u4',
          title: 'Lesson 2: Compromises over Slavery: 1820, 1850 & Bleeding Kansas',
          kind: 'lesson',
          partOf: 'Slavery Compromises',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/ap-us-history/period-5/apush-compromise-of-1850-lesson/a/compromise-of-1850',
          videoTitle: 'Khan Academy: Compromise of 1850 and Fugitive Slave Act',
          reading:
            'Congressional compromises attempted to balance slave and free states. The 1850 Fugitive Slave Act and 1854 Kansas-Nebraska Act ignited violent skirmishes across western territories.',
          principles: [P_G8_SOC_SECTIONALISM],
        },
        {
          id: 'g8-soc-u4-l3',
          unitId: 'g8-soc-u4',
          title: 'Lesson 3: The Dred Scott Decision & the 1860 Election',
          kind: 'lesson',
          partOf: 'Dred Scott & Secession',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era/sectional-tension-1850s/v/dred-scott-v-sandford',
          videoTitle: 'Khan Academy: Dred Scott Decision & the Election of 1860',
          reading:
            'In 1857, the Supreme Court ruled that Black Americans could not be citizens. Abraham Lincoln’s 1860 election triggered South Carolina’s secession, fracturing the Union.',
          principles: [P_G8_SOC_SECTIONALISM],
        },
        {
          id: 'g8-soc-u4-l4',
          unitId: 'g8-soc-u4',
          title: 'Lesson 4: Unit 4 Checkpoint Review: Sectional Crisis',
          kind: 'lesson_review',
          partOf: 'Sectionalism Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era',
          videoTitle: 'Khan Academy: Road to the Civil War Review',
          reading:
            'Review moral debates over abolition, popular sovereignty failures, John Brown’s raid, and the constitutional crisis leading to Confederate bombardment of Fort Sumter.',
          principles: [P_G8_SOC_SECTIONALISM],
        },
      ],
    },

    // UNIT 5: The American Civil War & Reconstruction
    {
      id: 'g8-soc-u5',
      title: 'Unit 5: The American Civil War & Reconstruction',
      standards: ['OH.8.SS.12', 'OH.8.SS.13'],
      lessons: [
        {
          id: 'g8-soc-u5-l1',
          unitId: 'g8-soc-u5',
          title: 'Lesson 1: The Underground Railroad & Ohio Conductor Networks',
          kind: 'lesson',
          partOf: 'Underground Railroad in Ohio',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era',
          videoTitle: 'Khan Academy: The Underground Railroad',
          reading:
            'Ohio served as a primary corridor for the Underground Railroad. Conductor networks along the Ohio River, Cincinnati, and Oberlin assisted thousands of freedom seekers journeying north to Canada.',
          principles: [P_G8_SOC_CIVIL_WAR],
        },
        {
          id: 'g8-soc-u5-l2',
          unitId: 'g8-soc-u5',
          title: 'Lesson 2: The Emancipation Proclamation & Gettysburg Address',
          kind: 'lesson',
          partOf: 'Emancipation & Gettysburg',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/ap-us-history/period-5/apush-government-policies-during-the-civil-war-lesson/v/emancipation-proclamation',
          videoTitle: 'Khan Academy: The Emancipation Proclamation and Turning Points',
          reading:
            'Lincoln’s 1863 Proclamation redefined the Civil War as a struggle for human liberation, enabling African American soldiers to enlist. The Union victory at Gettysburg turned the tide against the Confederacy.',
          principles: [P_G8_SOC_CIVIL_WAR],
        },
        {
          id: 'g8-soc-u5-l3',
          unitId: 'g8-soc-u5',
          title: 'Lesson 3: Reconstruction & the 13th, 14th & 15th Amendments',
          kind: 'lesson',
          partOf: 'Reconstruction Amendments',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/humanities/constitution-101/x7a03a96a83aa80ff:slavery-the-emancipation-and-the-civil-war-and-reconstruction/x7a03a96a83aa80ff:reconstruction-an-overview/v/what-powers-did-the-reconstruction-amendments-grant-to-the-national-government',
          videoTitle: 'Khan Academy: The 13th, 14th, and 15th Amendments',
          reading:
            'Reconstruction reshaped the Constitution: the 13th Amendment banned slavery, the 14th guaranteed equal protection and birthright citizenship, and the 15th protected voting rights regardless of race.',
          principles: [P_G8_SOC_CIVIL_WAR],
        },
        {
          id: 'g8-soc-u5-l4',
          unitId: 'g8-soc-u5',
          title: 'Lesson 4: Unit 5 Checkpoint Review: Civil War & Reconstruction',
          kind: 'lesson_review',
          partOf: 'Civil War Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era/x71a94f19:unit-overview-unit-5/a/unit-5-overview',
          videoTitle: 'Khan Academy: Civil War and Reconstruction Review',
          reading:
            'Synthesize Union victory, the abolition of slavery, wartime leadership, Frederick Douglass’s advocacy, and ongoing struggles for civil rights in the post-war South.',
          principles: [P_G8_SOC_CIVIL_WAR],
        },
      ],
    },

    // UNIT 6: Grade 8 U.S. Studies Course Challenge
    {
      id: 'g8-soc-u6',
      title: 'Unit 6: Grade 8 U.S. Studies Course Challenge',
      standards: ['OH.8.SS.5', 'OH.8.SS.7', 'OH.8.SS.10', 'OH.8.SS.11', 'OH.8.SS.12'],
      lessons: [
        {
          id: 'g8-soc-u6-l1',
          unitId: 'g8-soc-u6',
          title: 'Lesson 1: Early Republic & Revolutionary Foundations Synthesis',
          kind: 'lesson_review',
          partOf: 'Course Challenge Part 1',
          estimatedMinutes: 15,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
          videoTitle: 'Khan Academy: American Revolution & Constitution Synthesis',
          reading:
            'Synthesize colonial resistance, Enlightenment natural rights in the Declaration of Independence, federalism checks and balances, and Northwest Ordinance liberties.',
          principles: [P_G8_SOC_REVOLUTION, P_G8_SOC_CONSTITUTION_OHIO],
        },
        {
          id: 'g8-soc-u6-l2',
          unitId: 'g8-soc-u6',
          title: 'Lesson 2: Westward Migration & Sectional Division Synthesis',
          kind: 'lesson_review',
          partOf: 'Course Challenge Part 2',
          estimatedMinutes: 15,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era',
          videoTitle: 'Khan Academy: Westward Expansion & Sectionalism Synthesis',
          reading:
            'Trace territorial growth from the Louisiana Purchase to California, analyzing how disputes over slavery’s expansion fractured political parties and fueled regional crises.',
          principles: [P_G8_SOC_WESTWARD_EXPANSION, P_G8_SOC_SECTIONALISM],
        },
        {
          id: 'g8-soc-u6-l3',
          unitId: 'g8-soc-u6',
          title: 'Lesson 3: Civil War, Reconstruction & Ohio Heritage Capstone',
          kind: 'lesson_review',
          partOf: 'Course Challenge Part 3',
          estimatedMinutes: 15,
          videoUrl:
            'https://www.khanacademy.org/humanities/us-history/civil-war-era',
          videoTitle: 'Khan Academy: Civil War and Reconstruction Capstone',
          reading:
            'Evaluate wartime strategies, Ohio’s Underground Railroad network, the Emancipation Proclamation, and the transformative constitutional impact of the 13th, 14th, and 15th Amendments.',
          principles: [P_G8_SOC_CIVIL_WAR],
        },
      ],
    },

    // UNIT 7: Explore Historical Archives Through Interactive 3D Artifacts
    {
      id: 'g8-soc-u7',
      title: 'Unit 7: Explore Historical Archives Through Interactive 3D Artifacts',
      kind: 'explore',
      standards: ['OH.8.SS.Explore'],
      lessons: [],
      exploreItems: [
        {
          id: 'g8-soc-exp-archives-vault',
          title: 'National Archives: Founding Documents Interactive 3D Vault',
          type: 'virtual_tour',
          description:
            'Examine high-resolution multispectral scans of the original Declaration of Independence and U.S. Constitution parchment.',
          url: 'https://museum.archives.gov/founding-documents',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'What surprising revisions or marginal notes did delegates make before signing the final Constitution draft?',
        },
        {
          id: 'g8-soc-exp-civil-war-battlemaps',
          title: 'American Battlefield Trust: Interactive Civil War Battle Maps',
          type: 'simulation',
          description:
            'Explore animated 3D topographic battle maps of Gettysburg, Antietam, and Vicksburg detailing regiment movements.',
          url: 'https://www.battlefields.org/learn/maps',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'How did high ground and ridgelines at Gettysburg influence defensive military strategy for the Union army?',
        },
        {
          id: 'g8-soc-exp-underground-railroad',
          title: 'Ohio Underground Railroad Trail: Safe House Mapping Project',
          type: 'project',
          description:
            'Map the secret water and land routes across Ohio from the Ohio River to Lake Erie used by freedom seekers.',
          estimatedMinutes: 25,
          requiresParentPin: false,
          materials: ['Ohio state map or printable outline', 'Colored markers', 'Notebook'],
          reflectionPrompt: 'Why was Lake Erie the ultimate destination for conductors guiding freedom seekers to safety in Canada?',
        },
        {
          id: 'g8-soc-exp-slave-narratives',
          title: 'Library of Congress: Slave Narratives & Emancipation Proclamation',
          type: 'reading',
          description:
            'Read first-person oral history transcripts from formerly enslaved people recorded in the Federal Writers’ Project archives.',
          url: 'https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/',
          estimatedMinutes: 25,
          requiresParentPin: true,
          reflectionPrompt: 'How do first-person oral histories deepen our understanding beyond what standard textbooks convey?',
        },
      ],
    },

    // UNIT 8: Teacher Resources & Standards Alignment
    {
      id: 'g8-soc-u8',
      title: 'Unit 8: Teacher Resources & Standards Alignment',
      kind: 'teacher_resources',
      standards: ['OH.8.SS', 'C3.Framework'],
      lessons: [],
      resources: [
        {
          id: 'g8-soc-res-pacing',
          title: 'Grade 8 Social Studies 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Full-year curriculum sequence coordinating the Revolution, Constitutional foundations, Westward Expansion, and Civil War.',
          body: `## Grade 8 Social Studies Pacing Guide (36 Weeks)

- **Weeks 1–6**: Unit 1 — The American Revolution & Declaration of Independence (OH.8.SS.5-6)
- **Weeks 7–12**: Unit 2 — U.S. Constitution, Bill of Rights & Northwest Ordinance (OH.8.SS.7-9)
- **Week 13**: Quarter 1 Revolutionary & Constitutional Checkpoint
- **Weeks 14–20**: Unit 3 — Westward Expansion, Manifest Destiny & Native Nations (OH.8.SS.10)
- **Weeks 21–26**: Unit 4 — Sectionalism, Slavery & the Road to Civil War (OH.8.SS.11)
- **Week 27**: Quarter 2 & 3 Expansion and Sectional Crisis Checkpoint
- **Weeks 28–33**: Unit 5 — The American Civil War & Reconstruction (OH.8.SS.12-13)
- **Weeks 34–36**: Unit 6 — Grade 8 U.S. Studies Course Challenge & Historical Archive Inquiry`,
        },
        {
          id: 'g8-soc-res-standards',
          title: 'Ohio Learning Standards for Social Studies: Grade 8 Crosswalk',
          kind: 'standards_map',
          description:
            'Standards alignment crosswalk connecting Home-School-Lite units to Ohio Grade 8 U.S. Studies expectations.',
          body: `| Unit | Ohio Standard | Historical & Civic Focus |
|---|---|---|
| Unit 1 | OH.8.SS.5, 6 | Revolutionary causes, Declaration of 1776, unalienable rights |
| Unit 2 | OH.8.SS.7, 8, 9 | Constitutional Convention, federalism, Bill of Rights, Northwest Ordinance |
| Unit 3 | OH.8.SS.10 | Louisiana Purchase, Manifest Destiny, Indian Removal Act, Gold Rush |
| Unit 4 | OH.8.SS.11 | Sectionalism, Missouri Compromise, Fugitive Slave Act, Dred Scott |
| Unit 5 | OH.8.SS.12, 13 | Civil War turning points, Underground Railroad in Ohio, 13th-15th Amendments |`,
        },
        {
          id: 'g8-soc-res-dbq-rubric',
          title: 'Document-Based Question (DBQ) Historical Essay Rubric',
          kind: 'assessment_rubric',
          description:
            'Four-tier rubric evaluating student historical thesis creation, primary document analysis, sourcing bias, and synthesis.',
          body: `## Middle School Historical Writing Rubric

1. **Thesis / Claim (25%)**: Formulates a historically defensible thesis explaining cause-and-effect relationships.
2. **Document Analysis (25%)**: Accurately incorporates and cites evidence from multiple primary and secondary sources.
3. **Sourcing & Point of View (25%)**: Analyzes author bias, historical context, and intended audience of sources.
4. **Historical Synthesis (25%)**: Connects historical developments across time periods to modern democratic and civic issues.`,
        },
      ],
    },
  ],
}
