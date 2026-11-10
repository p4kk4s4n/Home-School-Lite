import { Unit } from '../../../types'
import { G4_MATH_BANKS } from './banks'

export const G4_MATH_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: PLACE VALUE & ROUNDING (8 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u1',
    title: 'Unit 1: Place Value & Rounding',
    standards: ['4.NBT.A.1', '4.NBT.A.2', '4.NBT.A.3'],
    lessons: [
      {
        id: 'g4-math-u1-l1',
        unitId: 'g4-math-u1',
        title: 'Intro to Place Value Relationships',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-place-value/v/place-value-relationships',
        videoTitle: 'Place Value Relationships',
        reading: 'In a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right. For example, 700 is ten times 70.',
        principles: [
          {
            id: 'p-g4-pv-10x',
            title: '10 Times as Much Relationship',
            standard: '4.NBT.A.1',
            summary: 'Recognize that in a multi-digit number, a digit in one place represents ten times the place value to its right.',
            bank: G4_MATH_BANKS.placeValueForms,
          },
        ],
      },
      {
        id: 'g4-math-u1-l2',
        unitId: 'g4-math-u1',
        title: 'Numbers in Written and Expanded Form',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-place-value/v/writing-numbers-in-expanded-form',
        videoTitle: 'Writing Numbers in Expanded Form',
        reading: 'Expanded form writes a number showing the value of each digit added together. For example, 53,402 is written as 50,000 + 3,000 + 400 + 2.',
        principles: [
          {
            id: 'p-g4-pv-expanded',
            title: 'Expanded and Word Form',
            standard: '4.NBT.A.2',
            summary: 'Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form.',
            bank: G4_MATH_BANKS.placeValueForms,
          },
        ],
      },
      {
        id: 'g4-math-u1-l3',
        unitId: 'g4-math-u1',
        title: 'Comparing Multi-Digit Whole Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-place-value/v/comparing-multi-digit-numbers',
        videoTitle: 'Comparing Multi-Digit Numbers',
        reading: 'Compare two multi-digit numbers based on meanings of the digits in each place, using symbols >, =, and < to record the results of comparisons.',
        principles: [
          {
            id: 'p-g4-pv-compare',
            title: 'Multi-Digit Comparisons',
            standard: '4.NBT.A.2',
            summary: 'Compare multi-digit numbers by comparing digits from highest to lowest place value.',
            bank: G4_MATH_BANKS.placeValueForms,
          },
        ],
      },
      {
        id: 'g4-math-u1-l4',
        unitId: 'g4-math-u1',
        title: 'Rounding to the Nearest Hundred',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding/v/rounding-to-nearest-hundred',
        videoTitle: 'Rounding to Nearest Hundred',
        reading: 'To round to the nearest hundred, examine the tens digit. If it is 5 or greater, round up. If it is 4 or less, round down.',
        principles: [
          {
            id: 'p-g4-round-hundred',
            title: 'Rounding to Hundreds',
            standard: '4.NBT.A.3',
            summary: 'Round multi-digit numbers to the nearest hundred using the tens digit rule.',
            generatorId: 'g4.round-hundred',
          },
        ],
      },
      {
        id: 'g4-math-u1-l5',
        unitId: 'g4-math-u1',
        title: 'Rounding to the Nearest Thousand',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding/v/rounding-to-nearest-thousand',
        videoTitle: 'Rounding to Nearest Thousand',
        reading: 'To round to the nearest thousand, look at the hundreds digit. If it is 5, 6, 7, 8, or 9, round up to the next thousand.',
        principles: [
          {
            id: 'p-g4-round-thousand',
            title: 'Rounding to Thousands',
            standard: '4.NBT.A.3',
            summary: 'Round whole numbers up to 100,000 to the nearest thousand.',
            generatorId: 'g4.round-thousand',
          },
        ],
      },
      {
        id: 'g4-math-u1-l6',
        unitId: 'g4-math-u1',
        title: 'Rounding Whole Numbers to Any Place',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding/v/rounding-whole-numbers',
        videoTitle: 'Rounding to Any Place Value',
        reading: 'Use place value understanding to round multi-digit whole numbers to any place: tens, hundreds, thousands, or ten thousands.',
        principles: [
          {
            id: 'p-g4-round-any',
            title: 'General Rounding Fluency',
            standard: '4.NBT.A.3',
            summary: 'Apply systematic rounding rules across any specified place value.',
            generatorId: 'g4.place-value-round',
          },
        ],
      },
      {
        id: 'g4-math-u1-l7',
        unitId: 'g4-math-u1',
        title: 'Quiz 1: Place Value & Rounding Check',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2',
        videoTitle: 'Place Value & Rounding Review',
        reading: 'Review check on 10x place relationships, standard and expanded notation, number comparisons, and rounding rules.',
        principles: [
          {
            id: 'p-g4-pv-quiz-1',
            title: 'Place Value Review',
            standard: '4.NBT.A.2',
            summary: 'Synthesize place value and expanded forms.',
            bank: G4_MATH_BANKS.placeValueForms,
          },
          {
            id: 'p-g4-pv-quiz-2',
            title: 'Rounding Practice Review',
            standard: '4.NBT.A.3',
            summary: 'Practice rounding to thousands and hundreds.',
            generatorId: 'g4.round-thousand',
          },
        ],
      },
      {
        id: 'g4-math-u1-l8',
        unitId: 'g4-math-u1',
        title: 'Unit 1 Test: Place Value & Rounding Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2',
        videoTitle: 'Unit 1 Test Review',
        reading: 'Comprehensive assessment of place value concepts, comparisons, and multi-digit rounding.',
        principles: [
          {
            id: 'p-g4-u1-test-pv',
            title: 'Unit 1 Place Value Test',
            standard: '4.NBT.A.2',
            summary: 'Demonstrate mastery of expanded forms and comparisons.',
            bank: G4_MATH_BANKS.placeValueForms,
          },
          {
            id: 'p-g4-u1-test-rnd',
            title: 'Unit 1 Rounding Test',
            standard: '4.NBT.A.3',
            summary: 'Demonstrate mastery of multi-digit rounding.',
            generatorId: 'g4.place-value-round',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: ADDITION, SUBTRACTION & ESTIMATION (8 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u2',
    title: 'Unit 2: Addition, Subtraction & Estimation',
    standards: ['4.NBT.B.4', '4.OA.A.3'],
    lessons: [
      {
        id: 'g4-math-u2-l1',
        unitId: 'g4-math-u2',
        title: 'Multi-Digit Addition Without Regrouping',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-multi-digit-addition/v/addition-without-regrouping',
        videoTitle: 'Multi-Digit Addition Without Regrouping',
        reading: 'Align numbers vertically by place value and add each column starting from the ones column on the right.',
        principles: [
          {
            id: 'p-g4-add-basic',
            title: 'Column Addition Basics',
            standard: '4.NBT.B.4',
            summary: 'Add multi-digit numbers by aligning corresponding place values.',
            generatorId: 'g4.multi-digit-add',
          },
        ],
      },
      {
        id: 'g4-math-u2-l2',
        unitId: 'g4-math-u2',
        title: 'Multi-Digit Addition With Regrouping',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-multi-digit-addition/v/carrying-when-adding-three-digit-numbers',
        videoTitle: 'Multi-Digit Addition with Regrouping',
        reading: 'When a column sums to 10 or more, write the ones digit in that column and carry the tens to the next column to the left.',
        principles: [
          {
            id: 'p-g4-add-regroup',
            title: 'Addition Regrouping Fluency',
            standard: '4.NBT.B.4',
            summary: 'Fluently add multi-digit whole numbers using the standard algorithm with regrouping.',
            generatorId: 'g4.multi-digit-add',
          },
        ],
      },
      {
        id: 'g4-math-u2-l3',
        unitId: 'g4-math-u2',
        title: 'Multi-Digit Subtraction Without Regrouping',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-multi-digit-subtraction/v/subtraction-without-regrouping',
        videoTitle: 'Multi-Digit Subtraction Without Regrouping',
        reading: 'Subtract column by column starting from the ones place when the top digit is greater than or equal to the bottom digit.',
        principles: [
          {
            id: 'p-g4-sub-basic',
            title: 'Column Subtraction Basics',
            standard: '4.NBT.B.4',
            summary: 'Subtract multi-digit numbers by subtracting corresponding place values.',
            generatorId: 'g4.multi-digit-sub',
          },
        ],
      },
      {
        id: 'g4-math-u2-l4',
        unitId: 'g4-math-u2',
        title: 'Multi-Digit Subtraction With Regrouping',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-multi-digit-subtraction/v/borrowing-twice-in-three-digit-subtraction',
        videoTitle: 'Multi-Digit Subtraction with Regrouping',
        reading: 'When the top digit is smaller than the bottom digit, borrow 1 ten from the column to the left to add 10 to the current digit.',
        principles: [
          {
            id: 'p-g4-sub-regroup',
            title: 'Standard Subtraction Algorithm',
            standard: '4.NBT.B.4',
            summary: 'Fluently subtract multi-digit numbers using borrowing and regrouping.',
            generatorId: 'g4.multi-digit-sub',
          },
        ],
      },
      {
        id: 'g4-math-u2-l5',
        unitId: 'g4-math-u2',
        title: 'Subtraction Across Zeros',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-multi-digit-subtraction/v/subtracting-across-zeros',
        videoTitle: 'Subtracting Across Zeros',
        reading: 'When borrowing from zero, borrow first from the next non-zero digit to the left, turning intermediate zeros into 9s.',
        principles: [
          {
            id: 'p-g4-sub-zeros',
            title: 'Borrowing Across Zeros',
            standard: '4.NBT.B.4',
            summary: 'Execute regrouping steps accurately across consecutive zeros.',
            generatorId: 'g4.multi-digit-sub',
          },
        ],
      },
      {
        id: 'g4-math-u2-l6',
        unitId: 'g4-math-u2',
        title: 'Estimation in Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-estimating-addition-and-subtraction/v/estimating-multi-digit-addition-and-subtraction',
        videoTitle: 'Estimating Multi-Digit Operations',
        reading: 'Estimate sums and differences by rounding numbers to the highest place value before calculating to check if an answer is reasonable.',
        principles: [
          {
            id: 'p-g4-est-add-sub',
            title: 'Estimating Sums and Differences',
            standard: '4.OA.A.3',
            summary: 'Estimate sums and differences using mental rounding strategies.',
            generatorId: 'g4.round-thousand',
          },
        ],
      },
      {
        id: 'g4-math-u2-l7',
        unitId: 'g4-math-u2',
        title: 'Multi-Step Word Problems With Addition & Subtraction',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction/imp-addition-and-subtraction-word-problems/v/multi-step-word-problems-with-addition-and-subtraction',
        videoTitle: 'Multi-Step Addition & Subtraction Problems',
        reading: 'Solve multi-step word problems posed with whole numbers using the four operations, assessing reasonableness with mental computation.',
        principles: [
          {
            id: 'p-g4-word-add-sub',
            title: 'Multi-Step Addition & Subtraction',
            standard: '4.OA.A.3',
            summary: 'Solve word problems involving multi-digit addition and subtraction.',
            generatorId: 'g4.multi-digit-add-sub',
          },
        ],
      },
      {
        id: 'g4-math-u2-l8',
        unitId: 'g4-math-u2',
        title: 'Unit 2 Test: Addition, Subtraction & Estimation Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction',
        videoTitle: 'Unit 2 Test Review',
        reading: 'Comprehensive assessment of multi-digit addition, subtraction with regrouping, and estimation strategies.',
        principles: [
          {
            id: 'p-g4-u2-test-add',
            title: 'Addition & Subtraction Exam Review',
            standard: '4.NBT.B.4',
            summary: 'Demonstrate fluency in multi-digit addition and subtraction operations.',
            generatorId: 'g4.multi-digit-add-sub',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: MULTIPLY BY 1-DIGIT NUMBERS (7 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u3',
    title: 'Unit 3: Multiply by 1-Digit Numbers',
    standards: ['4.OA.A.1', '4.OA.A.2', '4.NBT.B.5'],
    lessons: [
      {
        id: 'g4-math-u3-l1',
        unitId: 'g4-math-u3',
        title: 'Multiplication as a Comparison',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplicative-comparison/v/multiplication-as-comparison',
        videoTitle: 'Multiplication as Comparison',
        reading: 'Interpret a multiplication equation as a comparison (e.g. 35 = 5 x 7 means 35 is 5 times as many as 7 and 7 times as many as 5).',
        principles: [
          {
            id: 'p-g4-mult-comp',
            title: 'Multiplicative Comparison Meaning',
            standard: '4.OA.A.1',
            summary: 'Interpret verbal statements of multiplicative comparisons as multiplication equations.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
      {
        id: 'g4-math-u3-l2',
        unitId: 'g4-math-u3',
        title: 'Multiply Multiples of 10, 100, and 1,000',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplying-by-multiples-of-10/v/multiplying-by-multiples-of-10',
        videoTitle: 'Multiplying by Multiples of 10',
        reading: 'Multiply the basic fact and annex the corresponding number of zeros. For example, 4 x 300 = 4 x 3 hundreds = 1,200.',
        principles: [
          {
            id: 'p-g4-mult-10s',
            title: 'Multiplying by Tens and Hundreds',
            standard: '4.NBT.B.5',
            summary: 'Multiply 1-digit numbers by multiples of 10, 100, and 1,000 using place value patterns.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
      {
        id: 'g4-math-u3-l3',
        unitId: 'g4-math-u3',
        title: 'Area Models for 1-Digit Multiplication',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplication-with-area-models/v/area-model-for-multiplication',
        videoTitle: 'Area Models for Multiplication',
        reading: 'Break a multi-digit number into expanded form (e.g. 40 + 8) and multiply each part by the 1-digit width, then add the partial areas.',
        principles: [
          {
            id: 'p-g4-mult-area1',
            title: '1-Digit Area Models',
            standard: '4.NBT.B.5',
            summary: 'Illustrate and explain multiplication calculations by using equations, rectangular arrays, and area models.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
      {
        id: 'g4-math-u3-l4',
        unitId: 'g4-math-u3',
        title: 'Partial Products for 1-Digit by 3-Digit Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multi-digit-multiplication/v/multiplying-3-digit-by-1-digit',
        videoTitle: 'Multiplying 3-Digit by 1-Digit',
        reading: 'Multiply each place value: hundreds, tens, and ones separately by the 1-digit multiplier, then add the partial products together.',
        principles: [
          {
            id: 'p-g4-mult-partial1',
            title: 'Partial Products Algorithm',
            standard: '4.NBT.B.5',
            summary: 'Multiply whole numbers of up to four digits by a one-digit whole number using partial products.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
      {
        id: 'g4-math-u3-l5',
        unitId: 'g4-math-u3',
        title: 'Standard Algorithm for 1-Digit Multiplication',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multi-digit-multiplication/v/multiplying-2-digit-by-1-digit-with-regrouping',
        videoTitle: 'Standard Multiplication Algorithm',
        reading: 'Multiply starting at the ones place and carry regrouped tens into the next place value column.',
        principles: [
          {
            id: 'p-g4-mult-std1',
            title: 'Standard 1-Digit Algorithm',
            standard: '4.NBT.B.5',
            summary: 'Multiply whole numbers using the standard regrouping method fluently.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
      {
        id: 'g4-math-u3-l6',
        unitId: 'g4-math-u3',
        title: 'Multi-Step Comparison Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplicative-comparison-word-problems/v/multiplicative-comparison-word-problems',
        videoTitle: 'Comparison Word Problems',
        reading: 'Multiply or divide to solve word problems involving multiplicative comparison by distinguishing comparison from additive comparison.',
        principles: [
          {
            id: 'p-g4-mult-word1',
            title: 'Solving Comparison Word Problems',
            standard: '4.OA.A.2',
            summary: 'Multiply or divide to solve real-world comparison word problems.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
      {
        id: 'g4-math-u3-l7',
        unitId: 'g4-math-u3',
        title: 'Unit 3 Test: Multiply by 1-Digit Numbers',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2',
        videoTitle: 'Unit 3 Test Review',
        reading: 'Assessment covering area models, partial products, standard multiplication algorithm, and multiplicative comparisons.',
        principles: [
          {
            id: 'p-g4-u3-test',
            title: '1-Digit Multiplication Mastery Test',
            standard: '4.NBT.B.5',
            summary: 'Demonstrate comprehensive understanding of 1-digit multiplication techniques.',
            generatorId: 'g4.mult-1digit',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: MULTIPLY BY 2-DIGIT NUMBERS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u4',
    title: 'Unit 4: Multiply by 2-Digit Numbers',
    standards: ['4.NBT.B.5', '4.OA.A.3'],
    lessons: [
      {
        id: 'g4-math-u4-l1',
        unitId: 'g4-math-u4',
        title: 'Multiply 2-Digit Multiples of 10',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplying-by-2-digit-numbers/v/multiplying-2-digit-multiples-of-10',
        videoTitle: 'Multiply Multiples of 10',
        reading: 'When multiplying two numbers ending in zero (e.g. 40 x 50), compute 4 x 5 = 20, then append two zeros for 2,000.',
        principles: [
          {
            id: 'p-g4-mult-10s2',
            title: '2-Digit Multiples of 10',
            standard: '4.NBT.B.5',
            summary: 'Multiply 2-digit multiples of 10 using base-ten place value understanding.',
            generatorId: 'g4.mult-2digit',
          },
        ],
      },
      {
        id: 'g4-math-u4-l2',
        unitId: 'g4-math-u4',
        title: '2-Digit by 2-Digit Area Models',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplying-by-2-digit-numbers/v/area-model-for-multiplication-2-digit-by-2-digit',
        videoTitle: '2-Digit Area Models',
        reading: 'Partition a rectangle into 4 boxes: (tens + ones) x (tens + ones). Calculate the 4 sub-areas and sum them.',
        principles: [
          {
            id: 'p-g4-mult-area2',
            title: '4-Box Area Model',
            standard: '4.NBT.B.5',
            summary: 'Multiply two 2-digit numbers using 4-quadrant area models.',
            generatorId: 'g4.mult-2digit',
          },
        ],
      },
      {
        id: 'g4-math-u4-l3',
        unitId: 'g4-math-u4',
        title: 'Partial Products for 2-Digit Multiplication',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplying-by-2-digit-numbers/v/partial-products-multiplication-2-digit-by-2-digit',
        videoTitle: 'Partial Products 2-Digit',
        reading: 'Compute the 4 partial products vertically: ones x ones, ones x tens, tens x ones, tens x tens, then sum them.',
        principles: [
          {
            id: 'p-g4-mult-partial2',
            title: '2-Digit Partial Products',
            standard: '4.NBT.B.5',
            summary: 'Multiply two 2-digit numbers by computing 4 partial products.',
            generatorId: 'g4.mult-2digit',
          },
        ],
      },
      {
        id: 'g4-math-u4-l4',
        unitId: 'g4-math-u4',
        title: 'Standard Algorithm for 2-Digit Multiplication',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplying-by-2-digit-numbers/v/multiplying-2-digit-numbers',
        videoTitle: 'Standard 2-Digit Algorithm',
        reading: 'Multiply by the ones digit first, then place a 0 in the ones spot before multiplying by the tens digit, and sum the two rows.',
        principles: [
          {
            id: 'p-g4-mult-std2',
            title: 'Standard 2-Digit Algorithm',
            standard: '4.NBT.B.5',
            summary: 'Fluently multiply two 2-digit numbers using the standard algorithm.',
            generatorId: 'g4.mult-2digit',
          },
        ],
      },
      {
        id: 'g4-math-u4-l5',
        unitId: 'g4-math-u4',
        title: 'Multi-Step 2-Digit Multiplication Word Problems',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-multiplying-by-2-digit-numbers/v/multi-step-word-problems-with-multiplication',
        videoTitle: '2-Digit Multiplication Word Problems',
        reading: 'Solve complex multi-step word problems involving real-world production rates, ticket sales, and distance.',
        principles: [
          {
            id: 'p-g4-mult-word2',
            title: 'Real-World 2-Digit Multiplication',
            standard: '4.OA.A.3',
            summary: 'Apply 2-digit multiplication to solve multi-step application problems.',
            generatorId: 'g4.mult-2digit',
          },
        ],
      },
      {
        id: 'g4-math-u4-l6',
        unitId: 'g4-math-u4',
        title: 'Unit 4 Test: Multiply by 2-Digit Numbers Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2',
        videoTitle: 'Unit 4 Test Review',
        reading: 'Comprehensive test covering 2-digit multiplication models, algorithms, and application problems.',
        principles: [
          {
            id: 'p-g4-u4-test',
            title: '2-Digit Multiplication Exam Review',
            standard: '4.NBT.B.5',
            summary: 'Demonstrate fluency in multiplying two 2-digit numbers.',
            generatorId: 'g4.mult-2digit',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: DIVISION & REMAINDERS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u5',
    title: 'Unit 5: Division & Remainders',
    standards: ['4.NBT.B.6', '4.OA.A.3'],
    lessons: [
      {
        id: 'g4-math-u5-l1',
        unitId: 'g4-math-u5',
        title: 'Visual Models for Division & Remainders',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-division-with-remainders/v/division-with-remainders-intro',
        videoTitle: 'Intro to Division with Remainders',
        reading: 'When sharing items equally, any items left over that cannot form another equal group make up the remainder (R).',
        principles: [
          {
            id: 'p-g4-div-rem-intro',
            title: 'Understanding Remainders',
            standard: '4.NBT.B.6',
            summary: 'Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors.',
            generatorId: 'g4.div-remainders',
          },
        ],
      },
      {
        id: 'g4-math-u5-l2',
        unitId: 'g4-math-u5',
        title: 'Dividing Multiples of 10, 100, and 1,000',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-dividing-by-1-digit-numbers/v/dividing-by-multiples-of-10',
        videoTitle: 'Dividing Multiples of 10',
        reading: 'Use fact families and place value: 2,400 ÷ 6 = 24 hundreds ÷ 6 = 4 hundreds = 400.',
        principles: [
          {
            id: 'p-g4-div-10s',
            title: 'Dividing Multiples of 10 and 100',
            standard: '4.NBT.B.6',
            summary: 'Divide multiples of 10, 100, and 1,000 by 1-digit divisors using mental math.',
            generatorId: 'g4.div-exact',
          },
        ],
      },
      {
        id: 'g4-math-u5-l3',
        unitId: 'g4-math-u5',
        title: '2-Digit by 1-Digit Division with Remainders',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-dividing-by-1-digit-numbers/v/dividing-2-digits-by-1-digit-with-remainder',
        videoTitle: 'Dividing 2-Digits with Remainder',
        reading: 'Divide, multiply, subtract, and compare to find the quotient and remainder accurately.',
        principles: [
          {
            id: 'p-g4-div-rem-calc',
            title: 'Calculating Division with Remainders',
            standard: '4.NBT.B.6',
            summary: 'Calculate division quotients with remainders using standard steps.',
            generatorId: 'g4.div-remainders',
          },
        ],
      },
      {
        id: 'g4-math-u5-l4',
        unitId: 'g4-math-u5',
        title: '3-Digit and 4-Digit Division by 1-Digit Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-dividing-by-1-digit-numbers/v/dividing-3-digit-by-1-digit',
        videoTitle: 'Dividing 3-Digits by 1-Digit',
        reading: 'Bring down digits step by step from the hundreds to the tens to the ones place, recording each quotient digit.',
        principles: [
          {
            id: 'p-g4-div-exact',
            title: 'Multi-Digit Division Without Remainder',
            standard: '4.NBT.B.6',
            summary: 'Divide 3-digit and 4-digit numbers with zero remainders fluently.',
            generatorId: 'g4.div-exact',
          },
        ],
      },
      {
        id: 'g4-math-u5-l5',
        unitId: 'g4-math-u5',
        title: 'Interpreting Remainders in Real-World Contexts',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/imp-interpreting-remainders/v/interpreting-remainders',
        videoTitle: 'Interpreting Remainders',
        reading: 'Depending on the question, a remainder can be dropped, rounded up (e.g. buses needed), or stated as the leftover amount.',
        principles: [
          {
            id: 'p-g4-div-rem-interpret',
            title: 'Interpreting Real-World Remainders',
            standard: '4.OA.A.3',
            summary: 'Decide whether to round up, drop, or use the remainder in word problems.',
            generatorId: 'g4.div-remainders',
          },
        ],
      },
      {
        id: 'g4-math-u5-l6',
        unitId: 'g4-math-u5',
        title: 'Unit 5 Test: Division & Remainders Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2',
        videoTitle: 'Unit 5 Test Review',
        reading: 'Assessment testing multi-digit division fluency, calculating remainders, and interpreting remainders in word problems.',
        principles: [
          {
            id: 'p-g4-u5-test',
            title: 'Division & Remainders Test',
            standard: '4.NBT.B.6',
            summary: 'Demonstrate mastery of whole-number division algorithms and remainders.',
            generatorId: 'g4.div-remainders',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: FACTORS, MULTIPLES & PATTERNS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u6',
    title: 'Unit 6: Factors, Multiples & Patterns',
    standards: ['4.OA.B.4', '4.OA.C.5'],
    lessons: [
      {
        id: 'g4-math-u6-l1',
        unitId: 'g4-math-u6',
        title: 'Finding Factor Pairs of Whole Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-factors-and-multiples/v/finding-factors-of-a-number',
        videoTitle: 'Finding Factors of a Number',
        reading: 'A factor pair is two whole numbers that multiply together to yield a product. Example factor pairs of 20: 1x20, 2x10, and 4x5.',
        principles: [
          {
            id: 'p-g4-factor-pairs',
            title: 'Factor Pairs of Whole Numbers',
            standard: '4.OA.B.4',
            summary: 'Find all factor pairs for a whole number in the range 1–100.',
            bank: G4_MATH_BANKS.factorsPrimes,
          },
        ],
      },
      {
        id: 'g4-math-u6-l2',
        unitId: 'g4-math-u6',
        title: 'Prime and Composite Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-prime-and-composite-numbers/v/prime-numbers',
        videoTitle: 'Prime and Composite Numbers',
        reading: 'A prime number has exactly two factors: 1 and itself (e.g. 2, 3, 5, 7, 11). A composite number has more than two factors.',
        principles: [
          {
            id: 'p-g4-factors-primes',
            title: 'Classifying Prime vs Composite',
            standard: '4.OA.B.4',
            summary: 'Determine whether a given whole number in the range 1–100 is prime or composite.',
            generatorId: 'g4.factors-primes',
          },
        ],
      },
      {
        id: 'g4-math-u6-l3',
        unitId: 'g4-math-u6',
        title: 'Identifying Multiples of Whole Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-factors-and-multiples/v/identifying-multiples',
        videoTitle: 'Identifying Multiples',
        reading: 'A multiple of a number is the product of that number and any whole number. Multiples of 6 include 6, 12, 18, 24, 30, and 36.',
        principles: [
          {
            id: 'p-g4-multiples',
            title: 'Multiples Recognition',
            standard: '4.OA.B.4',
            summary: 'Determine whether a given whole number in the range 1–100 is a multiple of a given 1-digit number.',
            bank: G4_MATH_BANKS.factorsPrimes,
          },
        ],
      },
      {
        id: 'g4-math-u6-l4',
        unitId: 'g4-math-u6',
        title: 'Generating Number Patterns with Rules',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-patterns/v/math-patterns-example-2',
        videoTitle: 'Generating Number Patterns',
        reading: 'Generate a number pattern that follows a given rule (such as "Add 4" or "Multiply by 2"). Identify features not explicit in the rule itself.',
        principles: [
          {
            id: 'p-g4-patterns-num',
            title: 'Number Rule Patterns',
            standard: '4.OA.C.5',
            summary: 'Generate and analyze number patterns following explicit algebraic rules.',
            bank: G4_MATH_BANKS.factorsPrimes,
          },
        ],
      },
      {
        id: 'g4-math-u6-l5',
        unitId: 'g4-math-u6',
        title: 'Shape and Geometric Patterns',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-patterns/v/shape-patterns',
        videoTitle: 'Shape Patterns',
        reading: 'Analyze repeating and growing geometric shape sequences and predict future terms using repeating cycles.',
        principles: [
          {
            id: 'p-g4-patterns-shape',
            title: 'Geometric Shape Patterns',
            standard: '4.OA.C.5',
            summary: 'Predict future terms in visual and geometric repeating sequences.',
            bank: G4_MATH_BANKS.factorsPrimes,
          },
        ],
      },
      {
        id: 'g4-math-u6-l6',
        unitId: 'g4-math-u6',
        title: 'Unit 6 Test: Factors, Multiples & Patterns Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns',
        videoTitle: 'Unit 6 Test Review',
        reading: 'Comprehensive assessment on finding factor pairs, identifying primes and composites, and analyzing mathematical patterns.',
        principles: [
          {
            id: 'p-g4-u6-test',
            title: 'Factors & Patterns Test',
            standard: '4.OA.B.4',
            summary: 'Demonstrate mastery of primes, composites, and pattern rules.',
            generatorId: 'g4.factors-primes',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: EQUIVALENT FRACTIONS & COMPARING FRACTIONS (8 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u7',
    title: 'Unit 7: Equivalent Fractions & Comparing Fractions',
    standards: ['4.NF.A.1', '4.NF.A.2'],
    lessons: [
      {
        id: 'g4-math-u7-l1',
        unitId: 'g4-math-u7',
        title: 'Visual Models for Equivalent Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-equivalent-fractions/v/visual-equivalent-fractions',
        videoTitle: 'Visual Equivalent Fractions',
        reading: 'Two fractions are equivalent if they represent the same amount of a whole. Cutting fraction pieces in half doubles both numerator and denominator.',
        principles: [
          {
            id: 'p-g4-frac-vis',
            title: 'Visual Fraction Equivalence',
            standard: '4.NF.A.1',
            summary: 'Explain why a fraction a/b is equivalent to a fraction (nxa)/(nxb) using visual fraction models.',
            generatorId: 'g4.equiv-fractions',
          },
        ],
      },
      {
        id: 'g4-math-u7-l2',
        unitId: 'g4-math-u7',
        title: 'Multiplying to Generate Equivalent Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-equivalent-fractions/v/equivalent-fractions',
        videoTitle: 'Generating Equivalent Fractions',
        reading: 'Multiply both numerator and denominator by the same nonzero number to generate equivalent fractions without changing value.',
        principles: [
          {
            id: 'p-g4-equiv-fractions',
            title: 'Generating Equivalent Fractions',
            standard: '4.NF.A.1',
            summary: 'Generate equivalent fractions using multiplication of numerator and denominator.',
            generatorId: 'g4.equiv-fractions',
          },
        ],
      },
      {
        id: 'g4-math-u7-l3',
        unitId: 'g4-math-u7',
        title: 'Simplifying Fractions with Common Factors',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-equivalent-fractions/v/simplifying-fractions',
        videoTitle: 'Simplifying Fractions',
        reading: 'Divide both numerator and denominator by their greatest common factor to reduce the fraction to simplest form.',
        principles: [
          {
            id: 'p-g4-frac-simp',
            title: 'Simplifying Fractions',
            standard: '4.NF.A.1',
            summary: 'Simplify fractions to lowest terms by dividing by common factors.',
            bank: G4_MATH_BANKS.fractionsDecimals,
          },
        ],
      },
      {
        id: 'g4-math-u7-l4',
        unitId: 'g4-math-u7',
        title: 'Common Denominators for Comparison',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-comparing-fractions/v/comparing-fractions-with-different-denominators',
        videoTitle: 'Common Denominators for Comparison',
        reading: 'To compare fractions with different denominators, rewrite them with a common denominator (e.g. compare 2/3 and 3/4 as 8/12 and 9/12).',
        principles: [
          {
            id: 'p-g4-frac-comm-den',
            title: 'Common Denominator Strategy',
            standard: '4.NF.A.2',
            summary: 'Create common denominators to compare fractions with unlike denominators.',
            generatorId: 'g4.equiv-fractions',
          },
        ],
      },
      {
        id: 'g4-math-u7-l5',
        unitId: 'g4-math-u7',
        title: 'Comparing Fractions with Like Numerators or Denominators',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-comparing-fractions/v/comparing-fractions-like-numerators',
        videoTitle: 'Comparing with Like Numerators',
        reading: 'With identical denominators, the larger numerator is bigger. With identical numerators, smaller denominators mean larger pieces.',
        principles: [
          {
            id: 'p-g4-frac-like-num-den',
            title: 'Comparing Like Parts',
            standard: '4.NF.A.2',
            summary: 'Compare fractions with either common numerators or common denominators.',
            bank: G4_MATH_BANKS.fractionsDecimals,
          },
        ],
      },
      {
        id: 'g4-math-u7-l6',
        unitId: 'g4-math-u7',
        title: 'Comparing Fractions Using Benchmark Fractions (1/2)',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-comparing-fractions/v/comparing-fractions-to-benchmarks',
        videoTitle: 'Benchmark Fractions (1/2)',
        reading: 'Compare fractions against 1/2. For example, 3/8 is less than 1/2, while 5/8 is greater than 1/2, so 5/8 > 3/8.',
        principles: [
          {
            id: 'p-g4-frac-benchmark',
            title: 'Benchmark Comparison to 1/2',
            standard: '4.NF.A.2',
            summary: 'Compare fractions using benchmark numbers like 0, 1/2, and 1.',
            bank: G4_MATH_BANKS.fractionsDecimals,
          },
        ],
      },
      {
        id: 'g4-math-u7-l7',
        unitId: 'g4-math-u7',
        title: 'Quiz 2: Equivalent Fractions & Comparisons',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2',
        videoTitle: 'Fraction Equivalence Quiz Review',
        reading: 'Review quiz on visual fraction equivalence, scaling numerators and denominators, and comparison strategies.',
        principles: [
          {
            id: 'p-g4-frac-quiz-eq',
            title: 'Equivalence Quiz Review',
            standard: '4.NF.A.1',
            summary: 'Verify equivalent fraction calculations.',
            generatorId: 'g4.equiv-fractions',
          },
        ],
      },
      {
        id: 'g4-math-u7-l8',
        unitId: 'g4-math-u7',
        title: 'Unit 7 Test: Equivalent & Comparing Fractions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2',
        videoTitle: 'Unit 7 Test Review',
        reading: 'Comprehensive assessment of equivalent fractions, common denominators, and fraction inequalities.',
        principles: [
          {
            id: 'p-g4-u7-test',
            title: 'Fraction Equivalence & Comparison Test',
            standard: '4.NF.A.2',
            summary: 'Demonstrate mastery of fraction equivalence and comparisons.',
            generatorId: 'g4.equiv-fractions',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: ADD & SUBTRACT FRACTIONS WITH LIKE DENOMINATORS (7 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u8',
    title: 'Unit 8: Add & Subtract Fractions with Like Denominators',
    standards: ['4.NF.B.3a', '4.NF.B.3b', '4.NF.B.3c', '4.NF.B.3d'],
    lessons: [
      {
        id: 'g4-math-u8-l1',
        unitId: 'g4-math-u8',
        title: 'Adding Fractions with Like Denominators',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-like-denominators/v/adding-fractions-with-like-denominators',
        videoTitle: 'Adding Fractions with Like Denominators',
        reading: 'Understand addition of fractions as joining parts referring to the same whole: a/d + b/d = (a+b)/d.',
        principles: [
          {
            id: 'p-g4-fraction-add-like',
            title: 'Adding Fractions with Like Denominators',
            standard: '4.NF.B.3a',
            summary: 'Add fractions with common denominators by adding numerators.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
      {
        id: 'g4-math-u8-l2',
        unitId: 'g4-math-u8',
        title: 'Subtracting Fractions with Like Denominators',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-like-denominators/v/subtracting-fractions-with-like-denominators',
        videoTitle: 'Subtracting Fractions with Like Denominators',
        reading: 'Understand subtraction of fractions as separating parts referring to the same whole: a/d - b/d = (a-b)/d.',
        principles: [
          {
            id: 'p-g4-fraction-sub-like',
            title: 'Subtracting Fractions with Like Denominators',
            standard: '4.NF.B.3a',
            summary: 'Subtract fractions with common denominators by subtracting numerators.',
            generatorId: 'g4.fraction-sub-like',
          },
        ],
      },
      {
        id: 'g4-math-u8-l3',
        unitId: 'g4-math-u8',
        title: 'Decomposing Fractions into Sum of Unit Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-decomposing-fractions/v/decomposing-fractions',
        videoTitle: 'Decomposing Fractions',
        reading: 'Decompose a fraction into a sum of fractions with the same denominator in more than one way (e.g. 3/8 = 1/8 + 1/8 + 1/8 or 2/8 + 1/8).',
        principles: [
          {
            id: 'p-g4-frac-decomp',
            title: 'Decomposing Fractions',
            standard: '4.NF.B.3b',
            summary: 'Decompose fractions into sums of fractions with matching denominators.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
      {
        id: 'g4-math-u8-l4',
        unitId: 'g4-math-u8',
        title: 'Adding Mixed Numbers with Like Denominators',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-mixed-numbers/v/adding-mixed-numbers-with-like-denominators',
        videoTitle: 'Adding Mixed Numbers',
        reading: 'Add whole number parts and fraction parts separately, converting improper fractional sums into whole numbers if needed.',
        principles: [
          {
            id: 'p-g4-mixed-add',
            title: 'Mixed Number Addition',
            standard: '4.NF.B.3c',
            summary: 'Add mixed numbers with like denominators by combining whole numbers and fractional parts.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
      {
        id: 'g4-math-u8-l5',
        unitId: 'g4-math-u8',
        title: 'Subtracting Mixed Numbers with Regrouping',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-mixed-numbers/v/subtracting-mixed-numbers-with-regrouping',
        videoTitle: 'Subtracting Mixed Numbers with Regrouping',
        reading: 'When subtracting fractions and the top fraction is smaller, borrow 1 from the whole number and convert it into d/d before subtracting.',
        principles: [
          {
            id: 'p-g4-mixed-sub',
            title: 'Mixed Number Subtraction with Regrouping',
            standard: '4.NF.B.3c',
            summary: 'Subtract mixed numbers by regrouping 1 whole into fractional units.',
            generatorId: 'g4.fraction-sub-like',
          },
        ],
      },
      {
        id: 'g4-math-u8-l6',
        unitId: 'g4-math-u8',
        title: 'Fraction Addition & Subtraction Word Problems',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-word-problems/v/adding-and-subtracting-fractions-word-problems',
        videoTitle: 'Fraction Word Problems',
        reading: 'Solve word problems involving addition and subtraction of fractions referring to the same whole and having like denominators.',
        principles: [
          {
            id: 'p-g4-frac-word-add-sub',
            title: 'Fraction Word Problem Applications',
            standard: '4.NF.B.3d',
            summary: 'Solve contextual word problems using fraction addition and subtraction.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
      {
        id: 'g4-math-u8-l7',
        unitId: 'g4-math-u8',
        title: 'Unit 8 Test: Add & Subtract Fractions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2',
        videoTitle: 'Unit 8 Test Review',
        reading: 'Assessment testing addition and subtraction of fractions and mixed numbers with like denominators.',
        principles: [
          {
            id: 'p-g4-u8-test',
            title: 'Like-Denominator Operations Test',
            standard: '4.NF.B.3a',
            summary: 'Demonstrate fluency in adding and subtracting fractions with like denominators.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: MULTIPLY FRACTIONS BY WHOLE NUMBERS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u9',
    title: 'Unit 9: Multiply Fractions by Whole Numbers',
    standards: ['4.NF.B.4a', '4.NF.B.4b', '4.NF.B.4c'],
    lessons: [
      {
        id: 'g4-math-u9-l1',
        unitId: 'g4-math-u9',
        title: 'Fractions as Multiples of Unit Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-multiplying-fractions-and-whole-numbers/v/fractions-as-multiples-of-unit-fractions',
        videoTitle: 'Fractions as Multiples of Unit Fractions',
        reading: 'Understand a fraction a/b as a multiple of 1/b. For example, 5/4 is the product 5 x (1/4).',
        principles: [
          {
            id: 'p-g4-frac-unit-mult',
            title: 'Unit Fraction Multiples',
            standard: '4.NF.B.4a',
            summary: 'Express non-unit fractions as whole-number multiples of unit fractions.',
            generatorId: 'g4.fraction-mult-whole',
          },
        ],
      },
      {
        id: 'g4-math-u9-l2',
        unitId: 'g4-math-u9',
        title: 'Multiply Whole Numbers by Unit Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-multiplying-fractions-and-whole-numbers/v/multiplying-fractions-and-whole-numbers',
        videoTitle: 'Multiplying Whole Numbers and Unit Fractions',
        reading: 'Multiplying n x (1/b) yields n/b. For example, 4 x (1/5) = 4/5.',
        principles: [
          {
            id: 'p-g4-fraction-mult-whole',
            title: 'Multiplying Whole Numbers by Fractions',
            standard: '4.NF.B.4b',
            summary: 'Multiply whole numbers by fractions using repeated addition or visual models.',
            generatorId: 'g4.fraction-mult-whole',
          },
        ],
      },
      {
        id: 'g4-math-u9-l3',
        unitId: 'g4-math-u9',
        title: 'Multiply Whole Numbers by Non-Unit Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-multiplying-fractions-and-whole-numbers/v/multiplying-whole-numbers-and-fractions',
        videoTitle: 'Multiplying Non-Unit Fractions',
        reading: 'Multiply the whole number by the numerator and keep the denominator: 3 x (2/5) = (3 x 2)/5 = 6/5 = 1 1/5.',
        principles: [
          {
            id: 'p-g4-mult-nonunit',
            title: 'Non-Unit Fraction Products',
            standard: '4.NF.B.4b',
            summary: 'Multiply whole numbers by non-unit fractions: n x (a/b) = (n x a)/b.',
            generatorId: 'g4.fraction-mult-whole',
          },
        ],
      },
      {
        id: 'g4-math-u9-l4',
        unitId: 'g4-math-u9',
        title: 'Fraction Multiplication Word Problems',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-multiplying-fractions-and-whole-numbers-word-problems/v/multiplying-fractions-and-whole-numbers-word-problems',
        videoTitle: 'Fraction Multiplication Word Problems',
        reading: 'Solve real-world problems involving scaling recipes, measuring lumber, and running laps using fraction multiplication.',
        principles: [
          {
            id: 'p-g4-frac-mult-word',
            title: 'Contextual Fraction Multiplication',
            standard: '4.NF.B.4c',
            summary: 'Solve word problems involving multiplication of a fraction by a whole number.',
            generatorId: 'g4.fraction-mult-whole',
          },
        ],
      },
      {
        id: 'g4-math-u9-l5',
        unitId: 'g4-math-u9',
        title: 'Unit 9 Test: Multiply Fractions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2',
        videoTitle: 'Unit 9 Test Review',
        reading: 'Assessment evaluating understanding of unit fraction multiples, fraction multiplication algorithms, and application problems.',
        principles: [
          {
            id: 'p-g4-u9-test',
            title: 'Fraction Multiplication Test',
            standard: '4.NF.B.4b',
            summary: 'Demonstrate mastery of multiplying fractions by whole numbers.',
            generatorId: 'g4.fraction-mult-whole',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 10: UNDERSTAND DECIMALS & DECIMAL NOTATION (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u10',
    title: 'Unit 10: Understand Decimals & Decimal Notation',
    standards: ['4.NF.C.5', '4.NF.C.6', '4.NF.C.7'],
    lessons: [
      {
        id: 'g4-math-u10-l1',
        unitId: 'g4-math-u10',
        title: 'Tenths as Decimals and Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals-2/imp-decimals-in-words/v/decimals-in-words',
        videoTitle: 'Tenths as Fractions and Decimals',
        reading: 'The first digit to the right of the decimal point represents tenths. 3/10 is written as 0.3.',
        principles: [
          {
            id: 'p-g4-dec-tenths',
            title: 'Tenths Place Notation',
            standard: '4.NF.C.6',
            summary: 'Use decimal notation for fractions with denominator 10.',
            generatorId: 'g4.decimals-tenths-hundredths',
          },
        ],
      },
      {
        id: 'g4-math-u10-l2',
        unitId: 'g4-math-u10',
        title: 'Hundredths as Decimals and Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals-2/imp-decimals-in-words/v/hundredths-as-decimals',
        videoTitle: 'Hundredths as Fractions and Decimals',
        reading: 'The second digit to the right of the decimal point represents hundredths. 47/100 is written as 0.47.',
        principles: [
          {
            id: 'p-g4-decimals-tenths-hundredths',
            title: 'Understanding Decimals to Hundredths',
            standard: '4.NF.C.6',
            summary: 'Connect decimal place values to fractional tenths and hundredths.',
            generatorId: 'g4.decimals-tenths-hundredths',
          },
        ],
      },
      {
        id: 'g4-math-u10-l3',
        unitId: 'g4-math-u10',
        title: 'Converting Tenths to Hundredths',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals-2/imp-converting-fractions-to-decimals/v/converting-fractions-to-decimals',
        videoTitle: 'Converting Tenths to Hundredths',
        reading: 'Express a fraction with denominator 10 as an equivalent fraction with denominator 100: 3/10 = 30/100, and 0.3 = 0.30.',
        principles: [
          {
            id: 'p-g4-dec-equiv',
            title: 'Tenths to Hundredths Equivalence',
            standard: '4.NF.C.5',
            summary: 'Express fractions with denominator 10 as equivalent fractions with denominator 100.',
            bank: G4_MATH_BANKS.fractionsDecimals,
          },
        ],
      },
      {
        id: 'g4-math-u10-l4',
        unitId: 'g4-math-u10',
        title: 'Adding Fractions with Denominators 10 and 100',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals-2/imp-adding-fractions-with-denominators-10-and-100/v/adding-fractions-with-denominators-10-and-100',
        videoTitle: 'Adding Tenths and Hundredths',
        reading: 'Convert tenths to hundredths before adding: 3/10 + 4/100 = 30/100 + 4/100 = 34/100.',
        principles: [
          {
            id: 'p-g4-dec-add',
            title: 'Adding Tenths and Hundredths Fractions',
            standard: '4.NF.C.5',
            summary: 'Add two fractions with respective denominators 10 and 100.',
            bank: G4_MATH_BANKS.fractionsDecimals,
          },
        ],
      },
      {
        id: 'g4-math-u10-l5',
        unitId: 'g4-math-u10',
        title: 'Comparing Decimals to Hundredths',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals-2/imp-comparing-decimals/v/comparing-decimals-with-tenths-and-hundredths',
        videoTitle: 'Comparing Decimals',
        reading: 'Compare two decimals to hundredths by reasoning about their size and comparing digits in the tenths then hundredths place.',
        principles: [
          {
            id: 'p-g4-dec-comp',
            title: 'Comparing Decimals',
            standard: '4.NF.C.7',
            summary: 'Compare two decimals up to hundredths using symbols >, =, and <.',
            bank: G4_MATH_BANKS.fractionsDecimals,
          },
        ],
      },
      {
        id: 'g4-math-u10-l6',
        unitId: 'g4-math-u10',
        title: 'Unit 10 Test: Decimals & Decimal Notation Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals-2',
        videoTitle: 'Unit 10 Test Review',
        reading: 'Comprehensive assessment testing decimal and fraction notation, equivalent tenths and hundredths, and decimal comparisons.',
        principles: [
          {
            id: 'p-g4-u10-test',
            title: 'Decimals Test Review',
            standard: '4.NF.C.6',
            summary: 'Demonstrate mastery of decimals to hundredths and conversions.',
            generatorId: 'g4.decimals-tenths-hundredths',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 11: PLANE FIGURES, LINES & SYMMETRY (8 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u11',
    title: 'Unit 11: Plane Figures, Lines & Symmetry',
    standards: ['4.G.A.1', '4.G.A.2', '4.G.A.3'],
    lessons: [
      {
        id: 'g4-math-u11-l1',
        unitId: 'g4-math-u11',
        title: 'Points, Lines, Line Segments, and Rays',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-lines-and-angles/v/points-lines-segments-rays',
        videoTitle: 'Points, Lines, Line Segments, and Rays',
        reading: 'A point is an exact location. A line extends infinitely in both directions. A line segment has two endpoints. A ray has one endpoint and extends infinitely.',
        principles: [
          {
            id: 'p-g4-geo-points-lines',
            title: 'Fundamental Geometric Figures',
            standard: '4.G.A.1',
            summary: 'Draw and identify points, lines, line segments, rays, and angles.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l2',
        unitId: 'g4-math-u11',
        title: 'Parallel and Perpendicular Lines',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-lines-and-angles/v/parallel-and-perpendicular-lines',
        videoTitle: 'Parallel and Perpendicular Lines',
        reading: 'Parallel lines never intersect and remain equidistant. Perpendicular lines intersect at right (90 degree) angles.',
        principles: [
          {
            id: 'p-g4-geo-parallel-perp',
            title: 'Parallel and Perpendicular Lines',
            standard: '4.G.A.1',
            summary: 'Identify parallel and perpendicular lines in two-dimensional geometric figures.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l3',
        unitId: 'g4-math-u11',
        title: 'Classifying Triangles by Angles (Acute, Right, Obtuse)',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-classifying-shapes/v/classifying-triangles-by-angles',
        videoTitle: 'Classifying Triangles by Angles',
        reading: 'An acute triangle has 3 acute angles (< 90°). A right triangle has 1 right angle (= 90°). An obtuse triangle has 1 obtuse angle (> 90°).',
        principles: [
          {
            id: 'p-g4-geo-tri-angles',
            title: 'Triangle Classification by Angles',
            standard: '4.G.A.2',
            summary: 'Classify two-dimensional triangles based on the presence of acute, right, or obtuse angles.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l4',
        unitId: 'g4-math-u11',
        title: 'Classifying Triangles by Sides (Equilateral, Isosceles, Scalene)',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-classifying-shapes/v/classifying-triangles-by-sides',
        videoTitle: 'Classifying Triangles by Sides',
        reading: 'Equilateral triangles have 3 equal side lengths. Isosceles triangles have 2 equal side lengths. Scalene triangles have no equal side lengths.',
        principles: [
          {
            id: 'p-g4-geo-tri-sides',
            title: 'Triangle Classification by Sides',
            standard: '4.G.A.2',
            summary: 'Classify triangles as equilateral, isosceles, or scalene based on side lengths.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l5',
        unitId: 'g4-math-u11',
        title: 'Classifying Quadrilaterals (Parallelograms, Rectangles, Rhombuses, Trapezoids)',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-classifying-shapes/v/classifying-quadrilaterals',
        videoTitle: 'Classifying Quadrilaterals',
        reading: 'A parallelogram has 2 pairs of parallel sides. A rectangle has 4 right angles. A rhombus has 4 equal sides. A square is both a rectangle and a rhombus.',
        principles: [
          {
            id: 'p-g4-geo-quads',
            title: 'Quadrilateral Hierarchy & Classification',
            standard: '4.G.A.2',
            summary: 'Classify 4-sided figures based on parallel and perpendicular sides.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l6',
        unitId: 'g4-math-u11',
        title: 'Line Symmetry in 2D Figures',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-symmetry/v/line-of-symmetry-intro',
        videoTitle: 'Line Symmetry',
        reading: 'A line of symmetry divides a figure into two identical mirror-image halves that match when folded along the line.',
        principles: [
          {
            id: 'p-g4-geo-symmetry',
            title: 'Line Symmetry Identification',
            standard: '4.G.A.3',
            summary: 'Recognize a line of symmetry for a two-dimensional figure and identify line-symmetric figures.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l7',
        unitId: 'g4-math-u11',
        title: 'Quiz 3: Lines, Shapes & Symmetry',
        kind: 'lesson_review',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2',
        videoTitle: 'Geometry Quiz Review',
        reading: 'Review quiz testing line properties, triangle categories, quadrilateral classifications, and lines of symmetry.',
        principles: [
          {
            id: 'p-g4-geo-quiz',
            title: 'Geometry Review Quiz',
            standard: '4.G.A.2',
            summary: 'Synthesize plane figures, lines, and symmetry concepts.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u11-l8',
        unitId: 'g4-math-u11',
        title: 'Unit 11 Test: Plane Figures & Symmetry Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2',
        videoTitle: 'Unit 11 Test Review',
        reading: 'Comprehensive assessment of geometric definitions, parallel/perpendicular lines, polygon classifications, and symmetry lines.',
        principles: [
          {
            id: 'p-g4-u11-test',
            title: 'Plane Figures Test Review',
            standard: '4.G.A.1',
            summary: 'Demonstrate mastery of 2D figures, angles, and symmetry.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 12: MEASURING ANGLES & PROTRACTORS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u12',
    title: 'Unit 12: Measuring Angles & Protractors',
    standards: ['4.MD.C.5a', '4.MD.C.5b', '4.MD.C.6', '4.MD.C.7'],
    lessons: [
      {
        id: 'g4-math-u12-l1',
        unitId: 'g4-math-u12',
        title: 'Understanding Angles as Rotations',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-angles/v/angle-basics',
        videoTitle: 'Angle Concepts and Rotations',
        reading: 'An angle is formed when two rays share a common endpoint called the vertex. An angle that turns through 1/360 of a circle measures 1 degree.',
        principles: [
          {
            id: 'p-g4-ang-rot',
            title: 'Angles as Geometric Turns',
            standard: '4.MD.C.5a',
            summary: 'Recognize angles as geometric shapes that are formed wherever two rays share a common endpoint.',
            bank: G4_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g4-math-u12-l2',
        unitId: 'g4-math-u12',
        title: 'Measuring Angles with a Protractor',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/v/measuring-angles-in-degrees',
        videoTitle: 'Measuring Angles with Protractors',
        reading: 'Align the protractor center on the vertex and baseline along one ray. Read the degree mark where the second ray intersects the arc.',
        principles: [
          {
            id: 'p-g4-ang-protractor',
            title: 'Protractor Angle Measurement',
            standard: '4.MD.C.6',
            summary: 'Measure angles in whole-number degrees using a protractor.',
            generatorId: 'g4.angles-measure',
          },
        ],
      },
      {
        id: 'g4-math-u12-l3',
        unitId: 'g4-math-u12',
        title: 'Constructing and Drawing Angles',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/v/drawing-angles',
        videoTitle: 'Drawing Angles with Protractors',
        reading: 'To draw an angle, sketch a baseline ray, place the protractor center at the endpoint, mark the degree angle, and connect.',
        principles: [
          {
            id: 'p-g4-ang-draw',
            title: 'Constructing Angles of Specified Measure',
            standard: '4.MD.C.6',
            summary: 'Sketch and construct angles of specified measure using protractors.',
            generatorId: 'g4.angles-measure',
          },
        ],
      },
      {
        id: 'g4-math-u12-l4',
        unitId: 'g4-math-u12',
        title: 'Additive Angles and Angle Decomposition',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/v/decomposing-angles',
        videoTitle: 'Decomposing Angles',
        reading: 'When an angle is decomposed into non-overlapping parts, the angle measure of the whole is the sum of the angle measures of the parts.',
        principles: [
          {
            id: 'p-g4-angles-measure',
            title: 'Additive Angle Measures',
            standard: '4.MD.C.7',
            summary: 'Solve addition and subtraction problems to find unknown angles on a diagram.',
            generatorId: 'g4.angles-measure',
          },
        ],
      },
      {
        id: 'g4-math-u12-l5',
        unitId: 'g4-math-u12',
        title: 'Finding Unknown Angle Measures',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/v/unknown-angle-problems',
        videoTitle: 'Finding Unknown Angles',
        reading: 'Use complementary angles (sum to 90 degrees) and supplementary straight line angles (sum to 180 degrees) to solve for missing angles.',
        principles: [
          {
            id: 'p-g4-ang-unknown',
            title: 'Unknown Angle Equations',
            standard: '4.MD.C.7',
            summary: 'Find unknown angles in real-world mathematical problems using equations.',
            generatorId: 'g4.angles-measure',
          },
        ],
      },
      {
        id: 'g4-math-u12-l6',
        unitId: 'g4-math-u12',
        title: 'Unit 12 Test: Measuring Angles Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2',
        videoTitle: 'Unit 12 Test Review',
        reading: 'Comprehensive assessment on angle rotations, measuring with protractors, complementary/supplementary angles, and unknown angle calculations.',
        principles: [
          {
            id: 'p-g4-u12-test',
            title: 'Measuring Angles Test',
            standard: '4.MD.C.7',
            summary: 'Demonstrate mastery of measuring and decomposing angles.',
            generatorId: 'g4.angles-measure',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 13: AREA & PERIMETER (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u13',
    title: 'Unit 13: Area & Perimeter',
    standards: ['4.MD.A.3'],
    lessons: [
      {
        id: 'g4-math-u13-l1',
        unitId: 'g4-math-u13',
        title: 'Perimeter of Rectangles and Squares',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-area-and-perimeter/v/perimeter-of-a-rectangle',
        videoTitle: 'Perimeter of Rectangles',
        reading: 'Perimeter is the total distance around the outside edge of a 2D figure. For a rectangle: P = 2l + 2w, or 2(l + w).',
        principles: [
          {
            id: 'p-g4-geometry-perim',
            title: 'Perimeter Formula for Rectangles',
            standard: '4.MD.A.3',
            summary: 'Apply the perimeter formula for rectangles in real-world and mathematical problems.',
            generatorId: 'g4.geometry-perim',
          },
        ],
      },
      {
        id: 'g4-math-u13-l2',
        unitId: 'g4-math-u13',
        title: 'Area of Rectangles and Squares',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-area-and-perimeter/v/area-of-a-rectangle',
        videoTitle: 'Area of Rectangles',
        reading: 'Area is the number of square units needed to cover the interior surface of a flat shape. For a rectangle: Area = length x width.',
        principles: [
          {
            id: 'p-g4-geometry-area',
            title: 'Area Formula for Rectangles',
            standard: '4.MD.A.3',
            summary: 'Apply the area formula for rectangles: A = length x width.',
            generatorId: 'g4.geometry-area',
          },
        ],
      },
      {
        id: 'g4-math-u13-l3',
        unitId: 'g4-math-u13',
        title: 'Finding Missing Side Lengths Given Area or Perimeter',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-area-and-perimeter/v/find-a-missing-side-length-when-given-area',
        videoTitle: 'Finding Missing Side Lengths',
        reading: 'If given area A and width w, find length by dividing: l = A ÷ w. If given perimeter P and length l, width = (P - 2l) ÷ 2.',
        principles: [
          {
            id: 'p-g4-area-perim-missing',
            title: 'Missing Dimension Calculations',
            standard: '4.MD.A.3',
            summary: 'Find unknown side lengths given area or perimeter.',
            generatorId: 'g4.geometry-area-perim',
          },
        ],
      },
      {
        id: 'g4-math-u13-l4',
        unitId: 'g4-math-u13',
        title: 'Area and Perimeter of Complex Rectilinear Figures',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-area-and-perimeter/v/area-of-shapes-on-grids',
        videoTitle: 'Complex Rectilinear Shapes',
        reading: 'Decompose L-shaped or stepped rectilinear shapes into smaller rectangles, compute each sub-area, and sum them together.',
        principles: [
          {
            id: 'p-g4-geometry-area-perim',
            title: 'Area & Perimeter Review and Applications',
            standard: '4.MD.A.3',
            summary: 'Decompose rectilinear composite figures to solve area and perimeter problems.',
            generatorId: 'g4.geometry-area-perim',
          },
        ],
      },
      {
        id: 'g4-math-u13-l5',
        unitId: 'g4-math-u13',
        title: 'Real-World Area and Perimeter Word Problems',
        estimatedMinutes: 12,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-area-and-perimeter/v/area-and-perimeter-word-problems',
        videoTitle: 'Area and Perimeter Word Problems',
        reading: 'Apply area and perimeter formulas to solve practical problems involving bedroom tiling, garden fencing, and classroom rugs.',
        principles: [
          {
            id: 'p-g4-area-perim-word',
            title: 'Applied Area & Perimeter Problems',
            standard: '4.MD.A.3',
            summary: 'Solve multi-step real-world area and perimeter challenges.',
            generatorId: 'g4.geometry-area-perim',
          },
        ],
      },
      {
        id: 'g4-math-u13-l6',
        unitId: 'g4-math-u13',
        title: 'Unit 13 Test: Area & Perimeter Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2',
        videoTitle: 'Unit 13 Test Review',
        reading: 'Assessment testing calculation of rectangle perimeters, areas, missing side dimensions, and rectilinear composite shapes.',
        principles: [
          {
            id: 'p-g4-u13-test',
            title: 'Area and Perimeter Exam',
            standard: '4.MD.A.3',
            summary: 'Demonstrate mastery of area and perimeter formulas and problem solving.',
            generatorId: 'g4.geometry-area-perim',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 14: UNITS OF MEASUREMENT & CONVERSIONS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g4-math-u14',
    title: 'Unit 14: Units of Measurement & Conversions',
    standards: ['4.MD.A.1', '4.MD.A.2', '4.MD.B.4'],
    lessons: [
      {
        id: 'g4-math-u14-l1',
        unitId: 'g4-math-u14',
        title: 'Customary Units of Length, Weight, and Capacity',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-unit-conversion/v/converting-us-customary-units-of-length',
        videoTitle: 'Customary Measurement Units',
        reading: 'Know relative sizes of measurement units: 1 foot = 12 inches, 1 yard = 3 feet, 1 pound = 16 ounces, 1 gallon = 4 quarts.',
        principles: [
          {
            id: 'p-g4-measurement-units',
            title: 'Unit Conversions Fluency',
            standard: '4.MD.A.1',
            summary: 'Convert larger customary and metric units to smaller units using conversion tables.',
            generatorId: 'g4.measurement-units',
          },
        ],
      },
      {
        id: 'g4-math-u14-l2',
        unitId: 'g4-math-u14',
        title: 'Metric Units of Length, Mass, and Volume',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-unit-conversion/v/converting-metric-units-of-length',
        videoTitle: 'Metric Units and Conversions',
        reading: 'Metric units scale by powers of 10: 1 meter = 100 centimeters = 1,000 millimeters; 1 kilometer = 1,000 meters; 1 kilogram = 1,000 grams; 1 liter = 1,000 milliliters.',
        principles: [
          {
            id: 'p-g4-meas-metric',
            title: 'Metric System Scale & Conversions',
            standard: '4.MD.A.1',
            summary: 'Express measurements in a larger unit in terms of a smaller unit within a single metric system.',
            bank: G4_MATH_BANKS.measurement,
          },
        ],
      },
      {
        id: 'g4-math-u14-l3',
        unitId: 'g4-math-u14',
        title: 'Measurement Conversion Tables',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-unit-conversion/v/measurement-conversion-tables',
        videoTitle: 'Measurement Conversion Tables',
        reading: 'Record measurement equivalents in a two-column table. Example: 1 ft = 12 in, 2 ft = 24 in, 3 ft = 36 in.',
        principles: [
          {
            id: 'p-g4-meas-tables',
            title: 'Two-Column Conversion Tables',
            standard: '4.MD.A.1',
            summary: 'Generate and complete measurement conversion tables.',
            generatorId: 'g4.measurement-units',
          },
        ],
      },
      {
        id: 'g4-math-u14-l4',
        unitId: 'g4-math-u14',
        title: 'Elapsed Time on Number Lines',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-time/v/elapsed-time-on-a-number-line',
        videoTitle: 'Elapsed Time on Number Lines',
        reading: 'Calculate elapsed time intervals by making jumps on an open number line: jump hours first, then jump ten-minute chunks, then individual minutes.',
        principles: [
          {
            id: 'p-g4-meas-elapsed',
            title: 'Elapsed Time Calculations',
            standard: '4.MD.A.2',
            summary: 'Solve word problems involving intervals of time using open number line models.',
            bank: G4_MATH_BANKS.measurement,
          },
        ],
      },
      {
        id: 'g4-math-u14-l5',
        unitId: 'g4-math-u14',
        title: 'Line Plots with Fractional Data',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-line-plots/v/line-plots-with-fractions',
        videoTitle: 'Line Plots with Fractions',
        reading: 'Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8). Solve problems involving addition and subtraction of fractions using line plots.',
        principles: [
          {
            id: 'p-g4-meas-line-plots',
            title: 'Fractional Line Plot Analysis',
            standard: '4.MD.B.4',
            summary: 'Construct and interpret line plots displaying fractional measurements.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
      {
        id: 'g4-math-u14-l6',
        unitId: 'g4-math-u14',
        title: 'Unit 14 Test: Units of Measurement Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2',
        videoTitle: 'Unit 14 Test Review',
        reading: 'Comprehensive assessment on customary and metric conversions, elapsed time calculations, and fractional line plots.',
        principles: [
          {
            id: 'p-g4-u14-test',
            title: 'Measurement & Conversions Test',
            standard: '4.MD.A.1',
            summary: 'Demonstrate mastery of measurement units, conversions, and elapsed time.',
            generatorId: 'g4.measurement-units',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 15: COURSE CHALLENGE (Comprehensive Review Capstone)
  // =========================================================================
  {
    id: 'g4-math-u15',
    title: 'Unit 15: Course Challenge Capstone',
    standards: ['4.NBT.A', '4.NBT.B', '4.OA', '4.NF', '4.G', '4.MD'],
    lessons: [
      {
        id: 'g4-math-u15-l1',
        unitId: 'g4-math-u15',
        title: 'Semester 1 Cumulative Review',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math',
        videoTitle: 'Semester 1 Math Review',
        reading: 'Spiral review covering place value, multi-digit operations, 1-digit and 2-digit multiplication, and long division with remainders.',
        principles: [
          {
            id: 'p-g4-sem1-rev-ops',
            title: 'Operations Review',
            standard: '4.NBT.B.5',
            summary: 'Spiral review of multi-digit addition, subtraction, and multiplication.',
            generatorId: 'g4.mult-2digit',
          },
          {
            id: 'p-g4-sem1-rev-div',
            title: 'Division Review',
            standard: '4.NBT.B.6',
            summary: 'Spiral review of division with remainders.',
            generatorId: 'g4.div-remainders',
          },
        ],
      },
      {
        id: 'g4-math-u15-l2',
        unitId: 'g4-math-u15',
        title: 'Semester 2 Cumulative Review',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math',
        videoTitle: 'Semester 2 Math Review',
        reading: 'Spiral review covering equivalent fractions, fraction addition and subtraction, decimals, protractor angles, area, and measurement.',
        principles: [
          {
            id: 'p-g4-sem2-rev-frac',
            title: 'Fractions & Decimals Review',
            standard: '4.NF.A.1',
            summary: 'Spiral review of fractions, decimals, and operations.',
            generatorId: 'g4.equiv-fractions',
          },
          {
            id: 'p-g4-sem2-rev-geo',
            title: 'Geometry & Measurement Review',
            standard: '4.MD.A.3',
            summary: 'Spiral review of angles, area, and conversions.',
            generatorId: 'g4.geometry-area-perim',
          },
        ],
      },
      {
        id: 'g4-math-u15-l3',
        unitId: 'g4-math-u15',
        title: 'Grade 4 Comprehensive Course Challenge',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math',
        videoTitle: 'Grade 4 Course Challenge',
        reading: 'Final capstone assessment synthesizing all major standards in Grade 4 mathematics.',
        principles: [
          {
            id: 'p-g4-capstone-ops',
            title: 'Course Challenge Operations',
            standard: '4.OA.A.3',
            summary: 'Capstone mastery check across all operations.',
            generatorId: 'g4.multi-digit-add-sub',
          },
          {
            id: 'p-g4-capstone-frac',
            title: 'Course Challenge Fractions',
            standard: '4.NF.B.3c',
            summary: 'Capstone mastery check of fractions and decimals.',
            generatorId: 'g4.fraction-add-like',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 16: EXPLORE MATH THROUGH SIMULATIONS & PROJECTS (Enrichment, Unlocked)
  // =========================================================================
  {
    id: 'g4-math-u16',
    title: 'Unit 16: Explore Math Through Simulations & Projects',
    kind: 'explore',
    standards: ['4.NF.A.1', '4.NBT.B.5', '4.G.A.2', '4.MD.A.1'],
    exploreItems: [
      {
        id: 'g4-math-exp-phet-frac',
        title: 'PhET Simulation: Build a Fraction Lab',
        type: 'simulation',
        estimatedMinutes: 20,
        url: 'https://phet.colorado.edu/en/simulations/build-a-fraction',
        description: 'Drag and match fraction pieces into whole shapes and number lines to discover equivalence visually.',
        steps: [
          'Open the Build a Fraction lab and select Level 1.',
          'Build equivalent fractions for 1/2, 2/4, and 3/6 using circular pies.',
          'Switch to number line mode to verify their identical positions between 0 and 1.',
        ],
        reflectionPrompt: 'Why do fraction pies look the same even when the number of slices increases?',
      },
      {
        id: 'g4-math-exp-phet-area',
        title: 'PhET Simulation: Area Model Multiplication',
        type: 'simulation',
        estimatedMinutes: 20,
        url: 'https://phet.colorado.edu/en/simulations/area-model-multiplication',
        description: 'Explore multi-digit partial products interactively with partitioned grid models.',
        steps: [
          'Set dimensions to a 2-digit by 1-digit rectangle (e.g. 24 x 6).',
          'Notice how 24 breaks into 20 + 4.',
          'Observe the 2 sub-areas: 20 x 6 = 120 and 4 x 6 = 24.',
        ],
        reflectionPrompt: 'How does breaking a big multiplication problem into smaller boxes make it easier to solve mentally?',
      },
      {
        id: 'g4-math-exp-geoboard',
        title: 'Math Learning Center: Digital Geoboard',
        type: 'simulation',
        estimatedMinutes: 15,
        url: 'https://apps.mathlearningcenter.org/geoboard/',
        description: 'Stretch virtual rubber bands across pegboards to construct polygons, measure perimeter, and count unit squares for area.',
        steps: [
          'Stretch rubber bands to create a right triangle, an obtuse triangle, and an acute triangle.',
          'Construct a square with area 16 and calculate its perimeter.',
          'Construct an irregular L-shape and count its area in square units.',
        ],
        reflectionPrompt: 'Can you build two different rectangles on the geoboard that have the same perimeter of 12 units but different areas?',
      },
      {
        id: 'g4-math-exp-kitchen-bake',
        title: 'Kitchen Math Project: Scaling a Cookie Recipe',
        type: 'experiment',
        estimatedMinutes: 30,
        description: 'Use real measuring cups and fractions to scale a favorite family baking recipe up to feed a larger group.',
        materials: ['Favorite cookie or pancake recipe', 'Measuring cups (1/4, 1/3, 1/2, 1 cup)', 'Bowl and spoon'],
        steps: [
          'Choose a recipe that makes 12 cookies.',
          'Calculate what each ingredient amount becomes if you double the batch to make 24 cookies.',
          'Calculate what each ingredient amount becomes if you make half a batch (6 cookies).',
          'With adult supervision, measure out the ingredients and bake.',
        ],
        reflectionPrompt: 'Which ingredient was most interesting to double or halve (e.g. 3/4 tsp baking soda or 1 1/2 cups flour)?',
      },
    ],
    lessons: [],
  },

  // =========================================================================
  // UNIT 17: TEACHER RESOURCES & PACING (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g4-math-u17',
    title: 'Unit 17: Teacher Resources & Pacing',
    kind: 'teacher_resources',
    standards: ['CCSS.MATH.4.NBT', 'CCSS.MATH.4.OA', 'CCSS.MATH.4.NF', 'CCSS.MATH.4.G', 'CCSS.MATH.4.MD'],
    resources: [
      {
        id: 'g4-math-res-pacing',
        title: 'Grade 4 Mathematics 36-Week Pacing Guide',
        kind: 'pacing_guide',
        description: 'Recommended weekly lesson distribution to complete Grade 4 Math across a standard 9-month school year.',
        body: `### Grade 4 Math 36-Week Pacing Guide
- **Weeks 1–3**: Unit 1 (Place Value & Rounding) — 8 skills
- **Weeks 4–6**: Unit 2 (Addition, Subtraction & Estimation) — 8 skills
- **Weeks 7–9**: Unit 3 (Multiply by 1-Digit Numbers) — 7 skills
- **Weeks 10–12**: Unit 4 (Multiply by 2-Digit Numbers) — 6 skills
- **Weeks 13–15**: Unit 5 (Division & Remainders) — 6 skills
- **Weeks 16–18**: Unit 6 (Factors, Multiples & Patterns) — 6 skills & Mid-Year Capstone
- **Weeks 19–21**: Unit 7 (Equivalent Fractions & Comparing Fractions) — 8 skills
- **Weeks 22–24**: Unit 8 (Add & Subtract Fractions with Like Denominators) — 7 skills
- **Weeks 25–26**: Unit 9 (Multiply Fractions by Whole Numbers) — 5 skills
- **Weeks 27–29**: Unit 10 (Understand Decimals & Decimal Notation) — 6 skills
- **Weeks 30–31**: Unit 11 (Plane Figures, Lines & Symmetry) — 8 skills
- **Weeks 32–33**: Unit 12 (Measuring Angles & Protractors) — 6 skills
- **Weeks 34**: Unit 13 (Area & Perimeter) — 6 skills
- **Weeks 35**: Unit 14 (Units of Measurement & Conversions) — 6 skills
- **Week 36**: Unit 15 (Course Challenge Capstone & Annual Math Portfolio).`,
      },
      {
        id: 'g4-math-res-standards',
        title: 'Grade 4 Common Core & Ohio Standards Crosswalk',
        kind: 'standards_map',
        description: 'Complete mapping of all Grade 4 lessons to Ohio Learning Standards and national CCSS benchmarks.',
        body: `### Standards Crosswalk
- **4.NBT.A.1-3**: Place value relationships, expanded form, comparing, and rounding (Unit 1)
- **4.NBT.B.4**: Multi-digit addition and subtraction with regrouping (Unit 2)
- **4.NBT.B.5**: 1-digit and 2-digit multiplication algorithms and area models (Units 3, 4)
- **4.NBT.B.6**: Whole-number division with remainders (Unit 5)
- **4.OA.A.1-3**: Multiplicative comparisons and multi-step word problems (Units 2, 3, 4, 5)
- **4.OA.B.4**: Factors, prime, composite, and multiples (Unit 6)
- **4.OA.C.5**: Number and shape pattern generation (Unit 6)
- **4.NF.A.1-2**: Fraction equivalence and comparisons with benchmarks (Unit 7)
- **4.NF.B.3**: Addition and subtraction of fractions and mixed numbers (Unit 8)
- **4.NF.B.4**: Multiplication of fractions by whole numbers (Unit 9)
- **4.NF.C.5-7**: Decimals as tenths and hundredths, conversions, comparisons (Unit 10)
- **4.G.A.1-3**: Points, lines, parallel/perpendicular, triangle classification, symmetry (Unit 11)
- **4.MD.C.5-7**: Measuring angles, protractors, additive angle decomposition (Unit 12)
- **4.MD.A.3**: Area and perimeter formulas for rectangles and rectilinear figures (Unit 13)
- **4.MD.A.1-2, B.4**: Measurement conversions, elapsed time, fractional line plots (Unit 14)`,
      },
      {
        id: 'g4-math-res-formulas',
        title: 'Grade 4 Reference Sheet: Formulas & Conversions',
        kind: 'printable',
        description: 'Printable reference cheat sheet with geometric formulas, measurement conversions, and fraction models.',
        body: `### Grade 4 Essential Math Reference
- **Perimeter of a Rectangle**: P = 2l + 2w
- **Area of a Rectangle**: A = l × w
- **Customary Length**: 1 ft = 12 in, 1 yd = 3 ft = 36 in, 1 mi = 5,280 ft
- **Customary Weight**: 1 lb = 16 oz, 1 ton = 2,000 lb
- **Customary Capacity**: 1 cup = 8 fl oz, 1 pt = 2 cups, 1 qt = 2 pt, 1 gal = 4 qt
- **Metric Length**: 1 km = 1,000 m, 1 m = 100 cm = 1,000 mm
- **Metric Mass**: 1 kg = 1,000 g
- **Metric Volume**: 1 L = 1,000 mL
- **Time**: 1 hr = 60 min, 1 min = 60 sec, 1 day = 24 hr`,
      },
    ],
    lessons: [],
  },
]
