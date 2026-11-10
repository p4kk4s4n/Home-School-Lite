import { QuestionBankItem } from '../../../types'

export const G6_MATH_RATIOS_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-r1',
    type: 'mc',
    prompt: 'What is the simplified ratio of 4 apples to 6 oranges?',
    choices: ['2:3', '3:2', '4:6', '2:5'],
    answer: '2:3',
    explanation: 'Divide both 4 and 6 by their greatest common factor 2 to get 2:3.',
  },
  {
    id: 'g6-math-r2',
    type: 'mc',
    prompt: 'With 12 boys and 16 girls, what is the ratio of boys to total students?',
    choices: ['3:7', '3:4', '4:7', '12:16'],
    answer: '3:7',
    explanation: 'Total students is 12 + 16 = 28. The ratio 12:28 simplifies to 3:7.',
  },
  {
    id: 'g6-math-r3',
    type: 'mc',
    prompt: 'If 3 tickets cost $15, how much do 7 tickets cost at the same rate?',
    choices: ['$35', '$30', '$45', '$21'],
    answer: '$35',
    explanation: 'The unit rate is $15 ÷ 3 = $5 per ticket. 7 tickets cost 7 × $5 = $35.',
  },
  {
    id: 'g6-math-r4',
    type: 'mc',
    prompt: 'Which ratio is equivalent to 5:8?',
    choices: ['15:24', '10:18', '20:30', '25:35'],
    answer: '15:24',
    explanation: 'Multiply both terms of 5:8 by 3 to get 15:24.',
  },
]

export const G6_MATH_RATIONAL_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-rat1',
    type: 'mc',
    prompt: 'What is 3/4 divided by 1/2 in simplest form?',
    choices: ['1 1/2', '3/8', '2/3', '1 1/4'],
    answer: '1 1/2',
    explanation: 'Multiply by the reciprocal: 3/4 × 2/1 = 6/4 = 3/2 = 1 1/2.',
  },
  {
    id: 'g6-math-rat2',
    type: 'mc',
    prompt: 'What is 4.25 + 3.8?',
    choices: ['8.05', '7.05', '8.5', '7.95'],
    answer: '8.05',
    explanation: 'Line up decimal points: 4.25 + 3.80 = 8.05.',
  },
  {
    id: 'g6-math-rat3',
    type: 'mc',
    prompt: 'What is the greatest common factor (GCF) of 24 and 36?',
    choices: ['12', '6', '4', '72'],
    answer: '12',
    explanation: 'The factors of 24 and 36 share 12 as their greatest common factor.',
  },
  {
    id: 'g6-math-rat4',
    type: 'mc',
    prompt: 'What is the least common multiple (LCM) of 6 and 8?',
    choices: ['24', '48', '14', '16'],
    answer: '24',
    explanation: 'Multiples of 6 are 6, 12, 18, 24... Multiples of 8 are 8, 16, 24... The LCM is 24.',
  },
]

export const G6_MATH_RATES_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-rt1',
    type: 'mc',
    prompt: 'A car travels 180 miles in 3 hours. What is its speed in mph?',
    choices: ['60 mph', '50 mph', '55 mph', '65 mph'],
    answer: '60 mph',
    explanation: 'Divide total distance by time: 180 ÷ 3 = 60 miles per hour.',
  },
  {
    id: 'g6-math-rt2',
    type: 'mc',
    prompt: 'What is 25% of 80?',
    choices: ['20', '25', '16', '30'],
    answer: '20',
    explanation: '25% is 1/4. 80 ÷ 4 = 20.',
  },
  {
    id: 'g6-math-rt3',
    type: 'mc',
    prompt: 'A shirt originally $40 is on sale for 20% off. What is the discount amount?',
    choices: ['$8', '$10', '$32', '$20'],
    answer: '$8',
    explanation: '20% of $40 is 0.20 × 40 = $8 discount.',
  },
]

export const G6_MATH_INTEGERS_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-int1',
    type: 'mc',
    prompt: 'What is the absolute value of -14?',
    choices: ['14', '-14', '0', '28'],
    answer: '14',
    explanation: 'Absolute value is the distance from zero on a number line, so |-14| = 14.',
  },
  {
    id: 'g6-math-int2',
    type: 'mc',
    prompt: 'Which number is smaller: -9 or -4?',
    choices: ['-9', '-4', 'They are equal', 'Neither'],
    answer: '-9',
    explanation: '-9 is located farther to the left on a number line than -4, so -9 < -4.',
  },
  {
    id: 'g6-math-int3',
    type: 'mc',
    prompt: 'In which quadrant is the point (-3, 5) located?',
    choices: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'],
    answer: 'Quadrant II',
    explanation: 'Points with negative x and positive y are in Quadrant II.',
  },
]

export const G6_MATH_EXPRESSIONS_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-exp1',
    type: 'mc',
    prompt: 'What is the value of 3^4?',
    choices: ['81', '12', '64', '27'],
    answer: '81',
    explanation: '3^4 = 3 × 3 × 3 × 3 = 81.',
  },
  {
    id: 'g6-math-exp2',
    type: 'mc',
    prompt: 'Evaluate 2x + 5 when x = 4.',
    choices: ['13', '18', '11', '14'],
    answer: '13',
    explanation: 'Substitute 4 for x: 2(4) + 5 = 8 + 5 = 13.',
  },
  {
    id: 'g6-math-exp3',
    type: 'mc',
    prompt: 'Simplify 3(x + 4) using the distributive property.',
    choices: ['3x + 12', '3x + 4', '3x + 7', '7x'],
    answer: '3x + 12',
    explanation: 'Multiply 3 by each term inside: 3 × x + 3 × 4 = 3x + 12.',
  },
  {
    id: 'g6-math-exp4',
    type: 'mc',
    prompt: 'Solve for x: x + 9 = 21.',
    choices: ['12', '30', '11', '19'],
    answer: '12',
    explanation: 'Subtract 9 from both sides: x = 21 - 9 = 12.',
  },
]

export const G6_MATH_GEOMETRY_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-geo1',
    type: 'mc',
    prompt: 'What is the area of a triangle with base 8 cm and height 5 cm?',
    choices: ['20 sq cm', '40 sq cm', '13 sq cm', '26 sq cm'],
    answer: '20 sq cm',
    explanation: 'Area = 1/2 × base × height = 1/2 × 8 × 5 = 20 sq cm.',
  },
  {
    id: 'g6-math-geo2',
    type: 'mc',
    prompt: 'What is the volume of a prism with length 5, width 3, and height 4?',
    choices: ['60 cubic units', '24 cubic units', '47 cubic units', '12 cubic units'],
    answer: '60 cubic units',
    explanation: 'Volume = length × width × height = 5 × 3 × 4 = 60 cubic units.',
  },
]

export const G6_MATH_STATS_BANK: QuestionBankItem[] = [
  {
    id: 'g6-math-st1',
    type: 'mc',
    prompt: 'What is the mean of the data set: 4, 8, 6, 10, 2?',
    choices: ['6', '5', '7', '8'],
    answer: '6',
    explanation: 'Sum is 4 + 8 + 6 + 10 + 2 = 30. Divide by 5 values to get 6.',
  },
  {
    id: 'g6-math-st2',
    type: 'mc',
    prompt: 'What is the median of the ordered data set: 3, 5, 7, 9, 11?',
    choices: ['7', '5', '9', '6'],
    answer: '7',
    explanation: 'The middle value in this sorted 5-number set is 7.',
  },
  {
    id: 'g6-math-st3',
    type: 'mc',
    prompt: 'What is the range of the numbers: 12, 5, 20, 8, 15?',
    choices: ['15', '12', '20', '8'],
    answer: '15',
    explanation: 'Range = maximum - minimum = 20 - 5 = 15.',
  },
]
