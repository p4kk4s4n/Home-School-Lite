import { Unit } from '../../../types'
import { G5_MATH_BANKS } from './banks'

export const G5_MATH_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: DECIMAL PLACE VALUE (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u1',
    title: 'Unit 1: Decimal Place Value',
    standards: ['5.NBT.A.1', '5.NBT.A.3', '5.NBT.A.4'],
    lessons: [
      {
        id: 'g5-math-u1-l1',
        unitId: 'g5-math-u1',
        title: 'Decimal Place Value Patterns & Thousandths',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-decimal-place-value-intro/v/decimal-place-value-2',
        videoTitle: 'Decimal Place Value Intro',
        reading: 'Digits to the right of the decimal point represent tenths, hundredths, and thousandths. Each step right is 1/10 of the previous value.',
        principles: [
          {
            id: 'p-g5-dec-pv-intro',
            title: 'Understanding Thousandths Place Value',
            standard: '5.NBT.A.1',
            summary: 'Recognize that in a multi-digit number, a digit in one place represents 10 times what it represents in the place to its right and 1/10 to its left.',
            bank: G5_MATH_BANKS.placeValueDecimals,
          },
        ],
      },
      {
        id: 'g5-math-u1-l2',
        unitId: 'g5-math-u1',
        title: 'Reading and Writing Decimals in Expanded Form',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-expanded-form-with-decimals/v/expanded-form-with-decimals',
        videoTitle: 'Expanded Form with Decimals',
        reading: 'Expanded form shows the sum of each digit multiplied by its place value. Example: 3.48 = (3 x 1) + (4 x 0.1) + (8 x 0.01).',
        principles: [
          {
            id: 'p-g5-dec-expanded',
            title: 'Expanded and Standard Decimal Notation',
            standard: '5.NBT.A.3.a',
            summary: 'Read and write decimals to thousandths using base-ten numerals, number names, and expanded form.',
            bank: G5_MATH_BANKS.placeValueDecimals,
          },
        ],
      },
      {
        id: 'g5-math-u1-l3',
        unitId: 'g5-math-u1',
        title: 'Comparing Decimals to Thousandths',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-comparing-decimals/v/comparing-decimals-example',
        videoTitle: 'Comparing Decimals',
        reading: 'Compare decimals place by place from left to right. Annex zeros to give decimals the same number of places if needed.',
        principles: [
          {
            id: 'p-g5-dec-compare',
            title: 'Comparing Decimal Magnitudes',
            standard: '5.NBT.A.3.b',
            summary: 'Compare two decimals to thousandths based on meanings of the digits in each place, using symbols > = <.',
            bank: G5_MATH_BANKS.placeValueDecimals,
          },
        ],
      },
      {
        id: 'g5-math-u1-l4',
        unitId: 'g5-math-u1',
        title: 'Rounding Decimals to Nearest Tenth and Hundredth',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-rounding-decimals/v/rounding-decimals-example',
        videoTitle: 'Rounding Decimals',
        reading: 'To round a decimal, look at the digit to the right of the target place. If it is 5 or greater, round up. Otherwise, stay the same.',
        principles: [
          {
            id: 'p-g5-dec-round-skill',
            title: 'Rounding Decimals Fluency',
            standard: '5.NBT.A.4',
            summary: 'Use place value understanding to round decimals to any place.',
            generatorId: 'g5.decimal-round',
          },
        ],
      },
      {
        id: 'g5-math-u1-l5',
        unitId: 'g5-math-u1',
        title: 'Mid-Unit Quiz 1: Decimal Place Value & Rounding',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals',
        videoTitle: 'Unit 1 Quiz Review',
        reading: 'Review session testing decimal naming, expanded form conversion, comparison, and rounding.',
        principles: [
          {
            id: 'p-g5-u1-quiz',
            title: 'Unit 1 Checkpoint',
            standard: '5.NBT.A.3',
            summary: 'Demonstrate proficiency in decimal place values and rounding algorithms.',
            generatorId: 'g5.decimal-round',
          },
        ],
      },
      {
        id: 'g5-math-u1-l6',
        unitId: 'g5-math-u1',
        title: 'Unit 1 Test: Decimal Place Value Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals',
        videoTitle: 'Unit 1 Test Review',
        reading: 'Comprehensive assessment of understanding decimal place value concepts up to thousandths.',
        principles: [
          {
            id: 'p-g5-u1-test',
            title: 'Decimal Place Value Exam',
            standard: '5.NBT.A.1',
            summary: 'Evaluate complete understanding of decimal notation and place value logic.',
            bank: G5_MATH_BANKS.placeValueDecimals,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: ADD DECIMALS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u2',
    title: 'Unit 2: Add Decimals',
    standards: ['5.NBT.B.7'],
    lessons: [
      {
        id: 'g5-math-u2-l1',
        unitId: 'g5-math-u2',
        title: 'Adding Decimals with Base-Ten Blocks & Models',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction/imp-adding-decimals/v/adding-decimals-with-grids',
        videoTitle: 'Adding Decimals with Grids',
        reading: 'Model decimal addition using tenths and hundredths grids. Combining shaded sections shows the sum.',
        principles: [
          {
            id: 'p-g5-dec-add-model',
            title: 'Modeling Decimal Addition',
            standard: '5.NBT.B.7',
            summary: 'Add decimals to hundredths using concrete models or drawings.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u2-l2',
        unitId: 'g5-math-u2',
        title: 'Adding Decimals by Aligning Place Values',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction/imp-adding-decimals/v/adding-decimals-example-1',
        videoTitle: 'Adding Decimals Vertically',
        reading: 'Line up decimal points vertically so identical place values match. Add columns from right to left, regrouping as needed.',
        principles: [
          {
            id: 'p-g5-dec-add-alg',
            title: 'Standard Decimal Addition Algorithm',
            standard: '5.NBT.B.7',
            summary: 'Add decimals to hundredths using standard place-value algorithms.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u2-l3',
        unitId: 'g5-math-u2',
        title: 'Decimal Addition Word Problems & Money',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction/imp-adding-decimals/v/adding-decimals-word-problem',
        videoTitle: 'Decimal Addition Word Problems',
        reading: 'Apply decimal addition to real-world financial costs, distances, and weights by extracting values and computing total sums.',
        principles: [
          {
            id: 'p-g5-dec-add-words',
            title: 'Real-World Decimal Addition Problems',
            standard: '5.NBT.B.7',
            summary: 'Solve word problems involving decimal addition up to hundredths.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u2-l4',
        unitId: 'g5-math-u2',
        title: 'Mid-Unit Quiz: Adding Decimals',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction',
        videoTitle: 'Decimal Addition Review',
        reading: 'Checkpoint testing vertical decimal addition alignment and regrouping accuracy.',
        principles: [
          {
            id: 'p-g5-u2-quiz',
            title: 'Decimal Addition Checkpoint',
            standard: '5.NBT.B.7',
            summary: 'Demonstrate accuracy in decimal addition procedures.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u2-l5',
        unitId: 'g5-math-u2',
        title: 'Unit 2 Test: Decimal Addition Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction',
        videoTitle: 'Unit 2 Test Review',
        reading: 'Comprehensive assessment of adding decimals up to hundredths.',
        principles: [
          {
            id: 'p-g5-u2-test',
            title: 'Decimal Addition Mastery Exam',
            standard: '5.NBT.B.7',
            summary: 'Assess mastery of decimal addition techniques and problem-solving.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: SUBTRACT DECIMALS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u3',
    title: 'Unit 3: Subtract Decimals',
    standards: ['5.NBT.B.7'],
    lessons: [
      {
        id: 'g5-math-u3-l1',
        unitId: 'g5-math-u3',
        title: 'Subtracting Decimals with Models & Number Lines',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction/imp-subtracting-decimals/v/subtracting-decimals-up-to-hundredths',
        videoTitle: 'Subtracting Decimals Models',
        reading: 'Use visual grid models to subtract decimals. Cross out tenths and hundredths to find the difference remaining.',
        principles: [
          {
            id: 'p-g5-dec-sub-model',
            title: 'Visual Decimal Subtraction',
            standard: '5.NBT.B.7',
            summary: 'Subtract decimals to hundredths using models, number lines, and properties.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u3-l2',
        unitId: 'g5-math-u3',
        title: 'Subtracting Decimals with Regrouping Across Zeros',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction/imp-subtracting-decimals/v/subtracting-decimals-with-regrouping',
        videoTitle: 'Subtracting Decimals Regrouping',
        reading: 'When subtracting decimals with unequal lengths, write trailing zeros (e.g. 5.00 - 2.37) and regroup from left to right.',
        principles: [
          {
            id: 'p-g5-dec-sub-alg',
            title: 'Standard Decimal Subtraction Algorithm',
            standard: '5.NBT.B.7',
            summary: 'Subtract multi-digit decimals with regrouping across place values accurately.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u3-l3',
        unitId: 'g5-math-u3',
        title: 'Multi-Step Decimal Subtraction Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction/imp-subtracting-decimals/v/decimal-subtraction-word-problem',
        videoTitle: 'Decimal Subtraction Word Problems',
        reading: 'Solve word problems involving change from a dollar, remaining travel distances, and measurement differences.',
        principles: [
          {
            id: 'p-g5-dec-sub-word',
            title: 'Real-World Decimal Subtraction Problems',
            standard: '5.NBT.B.7',
            summary: 'Apply decimal subtraction to solve contextual multi-step problems.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u3-l4',
        unitId: 'g5-math-u3',
        title: 'Mid-Unit Quiz: Subtracting Decimals',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction',
        videoTitle: 'Decimal Subtraction Review',
        reading: 'Review check evaluating precision in subtracting decimals with regrouping and trailing zeros.',
        principles: [
          {
            id: 'p-g5-u3-quiz',
            title: 'Decimal Subtraction Checkpoint',
            standard: '5.NBT.B.7',
            summary: 'Assess fluency in decimal subtraction procedures.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
      {
        id: 'g5-math-u3-l5',
        unitId: 'g5-math-u3',
        title: 'Unit 3 Test: Decimal Subtraction Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction',
        videoTitle: 'Unit 3 Test Review',
        reading: 'Comprehensive assessment of decimal subtraction concepts and computational speed.',
        principles: [
          {
            id: 'p-g5-u3-test',
            title: 'Decimal Subtraction Mastery Exam',
            standard: '5.NBT.B.7',
            summary: 'Demonstrate complete mastery of decimal subtraction.',
            generatorId: 'g5.decimal-add-sub',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: ADD AND SUBTRACT FRACTIONS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u4',
    title: 'Unit 4: Add and Subtract Fractions',
    standards: ['5.NF.A.1', '5.NF.A.2'],
    lessons: [
      {
        id: 'g5-math-u4-l1',
        unitId: 'g5-math-u4',
        title: 'Finding Common Denominators with Visual Models',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-unlike-denominators/v/adding-fractions-with-unlike-denominators',
        videoTitle: 'Common Denominators Intro',
        reading: 'Fractions cannot be added directly unless they share identical unit slices. Find the least common multiple to generate equivalent fractions.',
        principles: [
          {
            id: 'p-g5-frac-common-denom',
            title: 'Equivalent Fractions and Common Denominators',
            standard: '5.NF.A.1',
            summary: 'Generate equivalent fractions to create like denominators.',
            generatorId: 'g5.fraction-add-unlike',
          },
        ],
      },
      {
        id: 'g5-math-u4-l2',
        unitId: 'g5-math-u4',
        title: 'Adding Unlike Fractions and Mixed Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-unlike-denominators/v/adding-mixed-numbers-with-unlike-denominators',
        videoTitle: 'Adding Unlike Fractions',
        reading: 'Convert fractions to like denominators, add numerators, keep denominators identical, and simplify or convert improper fractions.',
        principles: [
          {
            id: 'p-g5-frac-add-unlike',
            title: 'Adding Unlike Fractions',
            standard: '5.NF.A.1',
            summary: 'Add fractions with unlike denominators by replacing with equivalent fractions.',
            generatorId: 'g5.fraction-add-unlike',
          },
        ],
      },
      {
        id: 'g5-math-u4-l3',
        unitId: 'g5-math-u4',
        title: 'Subtracting Unlike Fractions and Mixed Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-unlike-denominators/v/subtracting-mixed-numbers-with-unlike-denominators',
        videoTitle: 'Subtracting Unlike Fractions',
        reading: 'Find common denominators. When subtracting mixed numbers, regroup one whole into fractional units if the top numerator is smaller.',
        principles: [
          {
            id: 'p-g5-frac-sub-unlike',
            title: 'Subtracting Unlike Fractions',
            standard: '5.NF.A.1',
            summary: 'Subtract fractions with unlike denominators using common denominator algorithms.',
            generatorId: 'g5.fraction-sub-unlike',
          },
        ],
      },
      {
        id: 'g5-math-u4-l4',
        unitId: 'g5-math-u4',
        title: 'Fraction Word Problems & Benchmark Estimation',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-unlike-denominators/v/estimating-fraction-sums-and-differences',
        videoTitle: 'Estimating Fraction Sums',
        reading: 'Estimate fraction sums using benchmarks 0, 1/2, and 1 to assess whether exact answers are reasonable.',
        principles: [
          {
            id: 'p-g5-frac-est-benchmark',
            title: 'Benchmark Estimation & Word Problems',
            standard: '5.NF.A.2',
            summary: 'Solve word problems involving fraction addition and subtraction using benchmark estimation.',
            generatorId: 'g5.fraction-add-unlike',
          },
        ],
      },
      {
        id: 'g5-math-u4-l5',
        unitId: 'g5-math-u4',
        title: 'Mid-Unit Quiz: Adding and Subtracting Fractions',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2',
        videoTitle: 'Fraction Addition & Subtraction Quiz',
        reading: 'Review testing common denominator creation, computation, and simplifying fraction answers.',
        principles: [
          {
            id: 'p-g5-u4-quiz',
            title: 'Fraction Addition & Subtraction Quiz',
            standard: '5.NF.A.1',
            summary: 'Assess skill in adding and subtracting fractions with unlike denominators.',
            generatorId: 'g5.fraction-sub-unlike',
          },
        ],
      },
      {
        id: 'g5-math-u4-l6',
        unitId: 'g5-math-u4',
        title: 'Unit 4 Test: Fraction Operations Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2',
        videoTitle: 'Unit 4 Test Review',
        reading: 'Comprehensive assessment of adding and subtracting unlike fractions and mixed numbers.',
        principles: [
          {
            id: 'p-g5-u4-test',
            title: 'Fraction Addition & Subtraction Exam',
            standard: '5.NF.A.1',
            summary: 'Demonstrate mastery of unlike fraction addition and subtraction.',
            generatorId: 'g5.fraction-add-unlike',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: MULTI-DIGIT MULTIPLICATION AND DIVISION (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u5',
    title: 'Unit 5: Multi-Digit Multiplication and Division',
    standards: ['5.NBT.B.5', '5.NBT.B.6'],
    lessons: [
      {
        id: 'g5-math-u5-l1',
        unitId: 'g5-math-u5',
        title: 'Multi-Digit Multiplication Algorithm (3-digit by 2-digit)',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multi-digit-multiplication/v/multiplying-2-digit-numbers',
        videoTitle: 'Multi-Digit Multiplication',
        reading: 'Multiply by the ones digit first, place a zero holder, multiply by the tens digit, and add partial products.',
        principles: [
          {
            id: 'p-g5-mult-standard',
            title: 'Fluently Multiply Multi-Digit Whole Numbers',
            standard: '5.NBT.B.5',
            summary: 'Fluently multiply multi-digit whole numbers using the standard algorithm.',
            generatorId: 'g5.mult-multi-digit',
          },
        ],
      },
      {
        id: 'g5-math-u5-l2',
        unitId: 'g5-math-u5',
        title: 'Estimating Multi-Digit Products and Magnitude Checks',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multi-digit-multiplication/v/estimating-multiplication-problems',
        videoTitle: 'Estimating Products',
        reading: 'Round numbers to their highest place value to estimate products and catch calculation errors quickly.',
        principles: [
          {
            id: 'p-g5-mult-est',
            title: 'Estimation and Reasonableness in Products',
            standard: '5.NBT.B.5',
            summary: 'Check mathematical reasonableness by estimating multi-digit multiplication products.',
            generatorId: 'g5.mult-multi-digit',
          },
        ],
      },
      {
        id: 'g5-math-u5-l3',
        unitId: 'g5-math-u5',
        title: 'Dividing 3- and 4-Digit Numbers by 2-Digit Divisors',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-dividing-by-2-digits/v/dividing-by-a-two-digit-number',
        videoTitle: 'Dividing by 2-Digits',
        reading: 'Estimate quotient digits, multiply divisor by candidate digit, subtract, check that remainder is smaller than divisor, and bring down.',
        principles: [
          {
            id: 'p-g5-div-2digit-calc',
            title: '2-Digit Divisor Long Division',
            standard: '5.NBT.B.6',
            summary: 'Find whole-number quotients of whole numbers with up to four-digit dividends and two-digit divisors.',
            generatorId: 'g5.div-2digit',
          },
        ],
      },
      {
        id: 'g5-math-u5-l4',
        unitId: 'g5-math-u5',
        title: 'Interpreting Division Remainders in Context',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-dividing-by-2-digits/v/interpreting-remainders',
        videoTitle: 'Interpreting Division Remainders',
        reading: 'In word problems, decide if the remainder means you need one more container/bus, or if the remainder is the leftover fraction.',
        principles: [
          {
            id: 'p-g5-div-rem-context',
            title: 'Division with Remainders in Context',
            standard: '5.NBT.B.6',
            summary: 'Interpret whole-number division remainders accurately in applied problem settings.',
            generatorId: 'g5.div-2digit',
          },
        ],
      },
      {
        id: 'g5-math-u5-l5',
        unitId: 'g5-math-u5',
        title: 'Mid-Unit Quiz: Multiplication & Division',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3',
        videoTitle: 'Multiplication & Division Quiz',
        reading: 'Review evaluating fluency with multi-digit products and 2-digit division quotients.',
        principles: [
          {
            id: 'p-g5-u5-quiz',
            title: 'Multiplication & Division Checkpoint',
            standard: '5.NBT.B.5',
            summary: 'Assess mastery of whole-number multiplication and division algorithms.',
            generatorId: 'g5.mult-multi-digit',
          },
        ],
      },
      {
        id: 'g5-math-u5-l6',
        unitId: 'g5-math-u5',
        title: 'Unit 5 Test: Multi-Digit Computation Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3',
        videoTitle: 'Unit 5 Test Review',
        reading: 'Comprehensive test of multi-digit multiplication and 2-digit division.',
        principles: [
          {
            id: 'p-g5-u5-test',
            title: 'Multiplication & Division Mastery Exam',
            standard: '5.NBT.B.6',
            summary: 'Demonstrate complete proficiency with standard multi-digit algorithms.',
            generatorId: 'g5.div-2digit',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: MULTIPLY FRACTIONS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u6',
    title: 'Unit 6: Multiply Fractions',
    standards: ['5.NF.B.4', '5.NF.B.5'],
    lessons: [
      {
        id: 'g5-math-u6-l1',
        unitId: 'g5-math-u6',
        title: 'Multiplying Fractions with Area Models',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-multiplying-fractions/v/multiplying-fractions-with-visual-models',
        videoTitle: 'Multiplying Fractions with Models',
        reading: 'A unit square partitioned horizontally and vertically shows that (a/b) x (c/d) equals the overlapping shaded region ac/bd.',
        principles: [
          {
            id: 'p-g5-frac-mult-model',
            title: 'Area Models for Fraction Multiplication',
            standard: '5.NF.B.4.a',
            summary: 'Interpret the product (a/b) × q as a parts of a partition of q into b equal parts.',
            generatorId: 'g5.fraction-mult',
          },
        ],
      },
      {
        id: 'g5-math-u6-l2',
        unitId: 'g5-math-u6',
        title: 'Multiplying Fractions and Mixed Numbers Algorithm',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-multiplying-fractions/v/multiplying-fractions',
        videoTitle: 'Multiplying Fractions Algorithm',
        reading: 'Multiply numerators straight across and multiply denominators straight across. Convert mixed numbers to improper fractions first.',
        principles: [
          {
            id: 'p-g5-frac-mult-alg',
            title: 'Fraction Multiplication Algorithm',
            standard: '5.NF.B.4.b',
            summary: 'Multiply numerator by numerator and denominator by denominator.',
            generatorId: 'g5.fraction-mult',
          },
        ],
      },
      {
        id: 'g5-math-u6-l3',
        unitId: 'g5-math-u6',
        title: 'Multiplication as Scaling & Resizing',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-multiplying-fractions/v/fraction-multiplication-as-scaling',
        videoTitle: 'Fraction Multiplication as Scaling',
        reading: 'Multiplying a number by a fraction greater than 1 results in a larger number. Multiplying by a fraction less than 1 produces a smaller number.',
        principles: [
          {
            id: 'p-g5-frac-scaling',
            title: 'Interpreting Multiplication as Scaling',
            standard: '5.NF.B.5',
            summary: 'Compare the size of a product to the size of one factor on the basis of the size of the other factor.',
            bank: G5_MATH_BANKS.fractionOperations,
          },
        ],
      },
      {
        id: 'g5-math-u6-l4',
        unitId: 'g5-math-u6',
        title: 'Real-World Fraction Multiplication Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-multiplying-fractions/v/multiplying-fractions-word-problem',
        videoTitle: 'Fraction Multiplication Word Problems',
        reading: 'Solve word problems involving fractional parts of a whole, recipe measurements, and rectangular area calculation.',
        principles: [
          {
            id: 'p-g5-frac-mult-words',
            title: 'Fraction Multiplication Applied Problems',
            standard: '5.NF.B.6',
            summary: 'Solve real world problems involving multiplication of fractions and mixed numbers.',
            generatorId: 'g5.fraction-mult',
          },
        ],
      },
      {
        id: 'g5-math-u6-l5',
        unitId: 'g5-math-u6',
        title: 'Mid-Unit Quiz: Multiplying Fractions',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2',
        videoTitle: 'Multiplying Fractions Quiz',
        reading: 'Review session on multiplying fractions, simplifying products, and interpreting scaling.',
        principles: [
          {
            id: 'p-g5-u6-quiz',
            title: 'Fraction Multiplication Checkpoint',
            standard: '5.NF.B.4',
            summary: 'Assess accuracy in multiplying fractions and mixed numbers.',
            generatorId: 'g5.fraction-mult',
          },
        ],
      },
      {
        id: 'g5-math-u6-l6',
        unitId: 'g5-math-u6',
        title: 'Unit 6 Test: Fraction Multiplication Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2',
        videoTitle: 'Unit 6 Test Review',
        reading: 'Comprehensive assessment of fraction multiplication and scaling principles.',
        principles: [
          {
            id: 'p-g5-u6-test',
            title: 'Fraction Multiplication Exam',
            standard: '5.NF.B.4',
            summary: 'Demonstrate full understanding of fraction multiplication algorithms.',
            generatorId: 'g5.fraction-mult',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: DIVIDE FRACTIONS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u7',
    title: 'Unit 7: Divide Fractions',
    standards: ['5.NF.B.7'],
    lessons: [
      {
        id: 'g5-math-u7-l1',
        unitId: 'g5-math-u7',
        title: 'Dividing Unit Fractions by Whole Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-dividing-fractions/v/dividing-a-unit-fraction-by-a-whole-number',
        videoTitle: 'Dividing Unit Fraction by Whole Number',
        reading: 'When sharing 1/3 of a pizza among 4 friends, each receives (1/3) / 4 = 1/12 of the whole pizza.',
        principles: [
          {
            id: 'p-g5-frac-div-unit-whole',
            title: 'Unit Fraction Divided by Whole Number',
            standard: '5.NF.B.7.a',
            summary: 'Interpret division of a unit fraction by a non-zero whole number.',
            generatorId: 'g5.fraction-div-unit',
          },
        ],
      },
      {
        id: 'g5-math-u7-l2',
        unitId: 'g5-math-u7',
        title: 'Dividing Whole Numbers by Unit Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-dividing-fractions/v/dividing-a-whole-number-by-a-unit-fraction',
        videoTitle: 'Dividing Whole Number by Unit Fraction',
        reading: 'Dividing 3 wholes by 1/4 asks: how many fourths fit inside 3? 3 x 4 = 12 fourths.',
        principles: [
          {
            id: 'p-g5-frac-div-whole-unit',
            title: 'Whole Number Divided by Unit Fraction',
            standard: '5.NF.B.7.b',
            summary: 'Interpret division of a whole number by a unit fraction.',
            generatorId: 'g5.fraction-div-unit',
          },
        ],
      },
      {
        id: 'g5-math-u7-l3',
        unitId: 'g5-math-u7',
        title: 'Fraction Division Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2/imp-dividing-fractions/v/dividing-fractions-word-problem',
        videoTitle: 'Dividing Fractions Word Problems',
        reading: 'Solve real-world sharing problems. Determine whether the problem asks for the fraction of each share or the number of servings.',
        principles: [
          {
            id: 'p-g5-frac-div-words',
            title: 'Applied Fraction Division Problems',
            standard: '5.NF.B.7.c',
            summary: 'Solve real world problems involving division of unit fractions and whole numbers.',
            generatorId: 'g5.fraction-div-unit',
          },
        ],
      },
      {
        id: 'g5-math-u7-l4',
        unitId: 'g5-math-u7',
        title: 'Mid-Unit Quiz: Fraction Division',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2',
        videoTitle: 'Fraction Division Review',
        reading: 'Review session testing division of unit fractions and whole numbers.',
        principles: [
          {
            id: 'p-g5-u7-quiz',
            title: 'Fraction Division Checkpoint',
            standard: '5.NF.B.7',
            summary: 'Demonstrate proficiency in dividing unit fractions and whole numbers.',
            generatorId: 'g5.fraction-div-unit',
          },
        ],
      },
      {
        id: 'g5-math-u7-l5',
        unitId: 'g5-math-u7',
        title: 'Unit 7 Test: Fraction Division Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2',
        videoTitle: 'Unit 7 Test Review',
        reading: 'Comprehensive assessment of fraction division concepts and word problem analysis.',
        principles: [
          {
            id: 'p-g5-u7-test',
            title: 'Fraction Division Exam',
            standard: '5.NF.B.7',
            summary: 'Demonstrate complete mastery of unit fraction division.',
            generatorId: 'g5.fraction-div-unit',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: MULTIPLY DECIMALS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u8',
    title: 'Unit 8: Multiply Decimals',
    standards: ['5.NBT.B.7'],
    lessons: [
      {
        id: 'g5-math-u8-l1',
        unitId: 'g5-math-u8',
        title: 'Multiplying Decimals with Visual Grids and Arrays',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multiplying-decimals/v/multiplying-decimals-with-grids',
        videoTitle: 'Multiplying Decimals with Grids',
        reading: 'In a 10x10 hundredths grid, shading a 0.3 row by a 0.4 column covers 12 hundredths (0.12).',
        principles: [
          {
            id: 'p-g5-dec-mult-grid',
            title: 'Visual Decimal Multiplication',
            standard: '5.NBT.B.7',
            summary: 'Multiply decimals using concrete models or drawings.',
            generatorId: 'g5.decimal-mult',
          },
        ],
      },
      {
        id: 'g5-math-u8-l2',
        unitId: 'g5-math-u8',
        title: 'Standard Algorithm for Decimal Multiplication',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multiplying-decimals/v/multiplying-decimals',
        videoTitle: 'Decimal Multiplication Algorithm',
        reading: 'Multiply as if whole numbers. Count total decimal places across factors, then place the decimal point that many spots from the right.',
        principles: [
          {
            id: 'p-g5-dec-mult-alg',
            title: 'Standard Decimal Multiplication Algorithm',
            standard: '5.NBT.B.7',
            summary: 'Multiply decimals to hundredths using place-value multiplication algorithms.',
            generatorId: 'g5.decimal-mult',
          },
        ],
      },
      {
        id: 'g5-math-u8-l3',
        unitId: 'g5-math-u8',
        title: 'Decimal Multiplication Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multiplying-decimals/v/multiplying-decimals-word-problem',
        videoTitle: 'Decimal Multiplication Word Problems',
        reading: 'Calculate costs per pound, fuel economy totals, and dimensions with decimal measurements accurately.',
        principles: [
          {
            id: 'p-g5-dec-mult-words',
            title: 'Applied Decimal Multiplication Problems',
            standard: '5.NBT.B.7',
            summary: 'Solve word problems involving decimal multiplication.',
            generatorId: 'g5.decimal-mult',
          },
        ],
      },
      {
        id: 'g5-math-u8-l4',
        unitId: 'g5-math-u8',
        title: 'Mid-Unit Quiz: Multiplying Decimals',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3',
        videoTitle: 'Decimal Multiplication Quiz',
        reading: 'Review session on decimal multiplication and decimal point placement.',
        principles: [
          {
            id: 'p-g5-u8-quiz',
            title: 'Decimal Multiplication Checkpoint',
            standard: '5.NBT.B.7',
            summary: 'Assess decimal multiplication precision.',
            generatorId: 'g5.decimal-mult',
          },
        ],
      },
      {
        id: 'g5-math-u8-l5',
        unitId: 'g5-math-u8',
        title: 'Unit 8 Test: Decimal Multiplication Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3',
        videoTitle: 'Unit 8 Test Review',
        reading: 'Comprehensive assessment of multiplying decimals up to hundredths.',
        principles: [
          {
            id: 'p-g5-u8-test',
            title: 'Decimal Multiplication Exam',
            standard: '5.NBT.B.7',
            summary: 'Demonstrate complete mastery of decimal multiplication.',
            generatorId: 'g5.decimal-mult',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: DIVIDE DECIMALS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u9',
    title: 'Unit 9: Divide Decimals',
    standards: ['5.NBT.B.7'],
    lessons: [
      {
        id: 'g5-math-u9-l1',
        unitId: 'g5-math-u9',
        title: 'Dividing Decimals by Whole Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-dividing-decimals/v/dividing-decimals-by-a-whole-number',
        videoTitle: 'Dividing Decimals by Whole Numbers',
        reading: 'Bring the decimal point straight up into the quotient above the dividend. Divide as with whole numbers.',
        principles: [
          {
            id: 'p-g5-dec-div-whole',
            title: 'Dividing Decimals by Whole Numbers',
            standard: '5.NBT.B.7',
            summary: 'Divide decimals to hundredths by single- and multi-digit whole numbers.',
            bank: G5_MATH_BANKS.decimalOperations,
          },
        ],
      },
      {
        id: 'g5-math-u9-l2',
        unitId: 'g5-math-u9',
        title: 'Dividing Decimals by Decimals',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-dividing-decimals/v/dividing-decimals-completely-example',
        videoTitle: 'Dividing Decimals by Decimals',
        reading: 'Shift the decimal point in the divisor right until it is a whole number. Shift the dividend decimal point the same number of places.',
        principles: [
          {
            id: 'p-g5-dec-div-dec',
            title: 'Dividing Decimals by Decimals Algorithm',
            standard: '5.NBT.B.7',
            summary: 'Divide decimals by decimals by shifting place values equivalent to powers of ten.',
            bank: G5_MATH_BANKS.decimalOperations,
          },
        ],
      },
      {
        id: 'g5-math-u9-l3',
        unitId: 'g5-math-u9',
        title: 'Decimal Division Applied Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-dividing-decimals/v/dividing-decimals-word-problem',
        videoTitle: 'Decimal Division Word Problems',
        reading: 'Find unit rates, cost per item, and average split costs involving decimals.',
        principles: [
          {
            id: 'p-g5-dec-div-words',
            title: 'Applied Decimal Division Problems',
            standard: '5.NBT.B.7',
            summary: 'Solve contextual word problems using decimal division.',
            bank: G5_MATH_BANKS.decimalOperations,
          },
        ],
      },
      {
        id: 'g5-math-u9-l4',
        unitId: 'g5-math-u9',
        title: 'Mid-Unit Quiz: Dividing Decimals',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3',
        videoTitle: 'Decimal Division Review',
        reading: 'Review session on decimal division strategies and quotient decimal placement.',
        principles: [
          {
            id: 'p-g5-u9-quiz',
            title: 'Decimal Division Checkpoint',
            standard: '5.NBT.B.7',
            summary: 'Assess decimal division calculation accuracy.',
            bank: G5_MATH_BANKS.decimalOperations,
          },
        ],
      },
      {
        id: 'g5-math-u9-l5',
        unitId: 'g5-math-u9',
        title: 'Unit 9 Test: Decimal Division Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3',
        videoTitle: 'Unit 9 Test Review',
        reading: 'Comprehensive assessment of decimal division operations and word problem solving.',
        principles: [
          {
            id: 'p-g5-u9-test',
            title: 'Decimal Division Exam',
            standard: '5.NBT.B.7',
            summary: 'Demonstrate complete mastery of decimal division.',
            bank: G5_MATH_BANKS.decimalOperations,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 10: POWERS OF TEN (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u10',
    title: 'Unit 10: Powers of Ten',
    standards: ['5.NBT.A.2'],
    lessons: [
      {
        id: 'g5-math-u10-l1',
        unitId: 'g5-math-u10',
        title: 'Powers of 10 and Exponents Meaning',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-powers-of-10/v/multiplying-by-powers-of-10',
        videoTitle: 'Powers of 10 and Exponents',
        reading: 'An exponent on 10 indicates the number of times 10 is multiplied by itself and matches the number of zeros in the standard numeral.',
        principles: [
          {
            id: 'p-g5-pow10-meaning',
            title: 'Exponents and Powers of Ten',
            standard: '5.NBT.A.2',
            summary: 'Explain patterns in the number of zeros of the product when multiplying a number by powers of 10.',
            generatorId: 'g5.powers-of-ten',
          },
        ],
      },
      {
        id: 'g5-math-u10-l2',
        unitId: 'g5-math-u10',
        title: 'Multiplying Decimals by Powers of Ten',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-powers-of-10/v/multiplying-decimals-by-powers-of-10',
        videoTitle: 'Multiplying by Powers of Ten',
        reading: 'Multiplying by 10ⁿ shifts the decimal point n places to the right because each digit becomes 10ⁿ times larger.',
        principles: [
          {
            id: 'p-g5-pow10-mult',
            title: 'Multiplying Decimals by 10ⁿ',
            standard: '5.NBT.A.2',
            summary: 'Shift decimal places to the right when multiplying by powers of 10.',
            generatorId: 'g5.powers-of-ten',
          },
        ],
      },
      {
        id: 'g5-math-u10-l3',
        unitId: 'g5-math-u10',
        title: 'Dividing Decimals by Powers of Ten',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-powers-of-10/v/dividing-decimals-by-powers-of-10',
        videoTitle: 'Dividing by Powers of Ten',
        reading: 'Dividing by 10ⁿ shifts the decimal point n places to the left, making each digit smaller by powers of 10.',
        principles: [
          {
            id: 'p-g5-pow10-div',
            title: 'Dividing Decimals by 10ⁿ',
            standard: '5.NBT.A.2',
            summary: 'Shift decimal places to the left when dividing by powers of 10.',
            generatorId: 'g5.powers-of-ten',
          },
        ],
      },
      {
        id: 'g5-math-u10-l4',
        unitId: 'g5-math-u10',
        title: 'Mid-Unit Quiz: Powers of Ten',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten',
        videoTitle: 'Powers of Ten Review',
        reading: 'Review session on exponent notation and decimal shift directions.',
        principles: [
          {
            id: 'p-g5-u10-quiz',
            title: 'Powers of Ten Checkpoint',
            standard: '5.NBT.A.2',
            summary: 'Assess mastery of power-of-ten exponent shifts.',
            generatorId: 'g5.powers-of-ten',
          },
        ],
      },
      {
        id: 'g5-math-u10-l5',
        unitId: 'g5-math-u10',
        title: 'Unit 10 Test: Powers of Ten Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten',
        videoTitle: 'Unit 10 Test Review',
        reading: 'Comprehensive assessment of multiplying and dividing whole numbers and decimals by powers of 10.',
        principles: [
          {
            id: 'p-g5-u10-test',
            title: 'Powers of Ten Mastery Exam',
            standard: '5.NBT.A.2',
            summary: 'Demonstrate complete mastery of power-of-ten patterns and operations.',
            generatorId: 'g5.powers-of-ten',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 11: VOLUME OF RECTANGULAR PRISMS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u11',
    title: 'Unit 11: Volume of Rectangular Prisms',
    standards: ['5.MD.C.3', '5.MD.C.4', '5.MD.C.5'],
    lessons: [
      {
        id: 'g5-math-u11-l1',
        unitId: 'g5-math-u11',
        title: 'Understanding Volume by Packing Unit Cubes',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-volume/v/measuring-volume-with-unit-cubes',
        videoTitle: 'Unit Cubes and Volume',
        reading: 'Volume is the amount of three-dimensional space inside a solid figure, measured by packing it with 1-unit cubes without gaps or overlaps.',
        principles: [
          {
            id: 'p-g5-vol-cubes',
            title: 'Packing Unit Cubes for Volume',
            standard: '5.MD.C.3',
            summary: 'Recognize volume as an attribute of solid figures and understand concepts of volume measurement.',
            bank: G5_MATH_BANKS.volumePrism,
          },
        ],
      },
      {
        id: 'g5-math-u11-l2',
        unitId: 'g5-math-u11',
        title: 'Volume Formulas V = l x w x h and V = B x h',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-volume/v/volume-of-a-rectangular-prism-or-box-examples',
        videoTitle: 'Volume Formula V = lwh',
        reading: 'Calculate rectangular prism volume by multiplying length × width × height, or base area B × height.',
        principles: [
          {
            id: 'p-g5-vol-formula',
            title: 'Calculating Volume with Standard Formulas',
            standard: '5.MD.C.5.a',
            summary: 'Find the volume of a right rectangular prism with whole-number side lengths using V = l × w × h.',
            generatorId: 'g5.volume-prism',
          },
        ],
      },
      {
        id: 'g5-math-u11-l3',
        unitId: 'g5-math-u11',
        title: 'Volume of Additive Composite Solids',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-volume/v/volume-of-composite-figures',
        videoTitle: 'Volume of Composite Figures',
        reading: 'To find the volume of an L-shaped solid, split it into two non-overlapping rectangular prisms, calculate each volume, and add them.',
        principles: [
          {
            id: 'p-g5-vol-composite',
            title: 'Additive Volume of Composite Solids',
            standard: '5.MD.C.5.c',
            summary: 'Recognize volume as additive and find volumes of solid figures composed of two non-overlapping prisms.',
            generatorId: 'g5.volume-prism',
          },
        ],
      },
      {
        id: 'g5-math-u11-l4',
        unitId: 'g5-math-u11',
        title: 'Mid-Unit Quiz: Volume',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3',
        videoTitle: 'Volume Review',
        reading: 'Review session on calculating prism volumes, finding missing dimensions, and composite figures.',
        principles: [
          {
            id: 'p-g5-u11-quiz',
            title: 'Volume Checkpoint',
            standard: '5.MD.C.5',
            summary: 'Assess mastery of rectangular prism volume calculations.',
            generatorId: 'g5.volume-prism',
          },
        ],
      },
      {
        id: 'g5-math-u11-l5',
        unitId: 'g5-math-u11',
        title: 'Unit 11 Test: Volume Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3',
        videoTitle: 'Unit 11 Test Review',
        reading: 'Comprehensive assessment of rectangular prism volume and 3D geometric measurement.',
        principles: [
          {
            id: 'p-g5-u11-test',
            title: 'Volume Mastery Exam',
            standard: '5.MD.C.5',
            summary: 'Demonstrate complete mastery of 3D volume concepts and formulas.',
            generatorId: 'g5.volume-prism',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 12: COORDINATE PLANE (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u12',
    title: 'Unit 12: Coordinate Plane',
    standards: ['5.G.A.1', '5.G.A.2'],
    lessons: [
      {
        id: 'g5-math-u12-l1',
        unitId: 'g5-math-u12',
        title: 'Coordinate Grid Axes, Origin, and Ordered Pairs',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-coordinate-plane/v/coordinate-plane-quadrant-1',
        videoTitle: 'Coordinate Plane Intro',
        reading: 'The coordinate plane is formed by two intersecting perpendicular number lines: horizontal x-axis and vertical y-axis meeting at (0, 0).',
        principles: [
          {
            id: 'p-g5-coord-intro',
            title: 'Coordinate Axes and Ordered Pairs',
            standard: '5.G.A.1',
            summary: 'Use a pair of perpendicular number lines to define a coordinate system.',
            generatorId: 'g5.coord-plane',
          },
        ],
      },
      {
        id: 'g5-math-u12-l2',
        unitId: 'g5-math-u12',
        title: 'Plotting Points in Quadrant 1',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-coordinate-plane/v/plotting-points-on-a-coordinate-plane',
        videoTitle: 'Plotting Points on a Grid',
        reading: 'For any ordered pair (x, y), start at origin (0, 0), move x units right along the x-axis, then move y units straight up.',
        principles: [
          {
            id: 'p-g5-coord-plot',
            title: 'Plotting Points in Quadrant 1',
            standard: '5.G.A.1',
            summary: 'Plot and label points in the first quadrant of the coordinate plane accurately.',
            generatorId: 'g5.coord-plane',
          },
        ],
      },
      {
        id: 'g5-math-u12-l3',
        unitId: 'g5-math-u12',
        title: 'Graphing Real-World Data and Interpreting Trends',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-coordinate-plane/v/coordinate-plane-word-problems-in-quadrant-1',
        videoTitle: 'Coordinate Plane Word Problems',
        reading: 'Graph distance over time, growth trends, and prices. The slope of connected points reveals the rate of change.',
        principles: [
          {
            id: 'p-g5-coord-words',
            title: 'Applied Coordinate Graphing',
            standard: '5.G.A.2',
            summary: 'Represent real world and mathematical problems by graphing points in the first quadrant.',
            generatorId: 'g5.coord-plane',
          },
        ],
      },
      {
        id: 'g5-math-u12-l4',
        unitId: 'g5-math-u12',
        title: 'Mid-Unit Quiz: Coordinate Plane',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3',
        videoTitle: 'Coordinate Plane Review',
        reading: 'Review session on reading ordered pairs and navigating coordinate grids.',
        principles: [
          {
            id: 'p-g5-u12-quiz',
            title: 'Coordinate Plane Checkpoint',
            standard: '5.G.A.1',
            summary: 'Assess mastery of ordered pairs and coordinate navigation.',
            generatorId: 'g5.coord-plane',
          },
        ],
      },
      {
        id: 'g5-math-u12-l5',
        unitId: 'g5-math-u12',
        title: 'Unit 12 Test: Coordinate Plane Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3',
        videoTitle: 'Unit 12 Test Review',
        reading: 'Comprehensive assessment of plotting and interpreting coordinates in Quadrant 1.',
        principles: [
          {
            id: 'p-g5-u12-test',
            title: 'Coordinate Plane Mastery Exam',
            standard: '5.G.A.2',
            summary: 'Demonstrate complete proficiency with coordinate graphing.',
            generatorId: 'g5.coord-plane',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 13: ALGEBRAIC THINKING & EXPRESSIONS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u13',
    title: 'Unit 13: Algebraic Thinking & Expressions',
    standards: ['5.OA.A.1', '5.OA.A.2', '5.OA.B.3'],
    lessons: [
      {
        id: 'g5-math-u13-l1',
        unitId: 'g5-math-u13',
        title: 'Order of Operations with Parentheses, Brackets, and Braces',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-order-of-operations/v/introduction-to-order-of-operations',
        videoTitle: 'Order of Operations Intro',
        reading: 'Follow PEMDAS: evaluate inside grouping symbols first, then multiply and divide from left to right, then add and subtract from left to right.',
        principles: [
          {
            id: 'p-g5-alg-pemdas',
            title: 'Order of Operations Fluency',
            standard: '5.OA.A.1',
            summary: 'Use parentheses, brackets, or braces in numerical expressions, and evaluate expressions with these symbols.',
            generatorId: 'g5.order-of-ops',
          },
        ],
      },
      {
        id: 'g5-math-u13-l2',
        unitId: 'g5-math-u13',
        title: 'Writing Numerical Expressions from Verbal Phrases',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-writing-expressions/v/writing-expressions-with-variables-examples',
        videoTitle: 'Writing Numerical Expressions',
        reading: 'Translate verbal phrases into mathematical expressions without evaluating them. "Add 8 and 7, then multiply by 2" becomes (8 + 7) x 2.',
        principles: [
          {
            id: 'p-g5-alg-write-expr',
            title: 'Translating Verbal Expressions',
            standard: '5.OA.A.2',
            summary: 'Write simple expressions that record calculations with numbers, and interpret numerical expressions without evaluating them.',
            bank: G5_MATH_BANKS.algebraicThinking,
          },
        ],
      },
      {
        id: 'g5-math-u13-l3',
        unitId: 'g5-math-u13',
        title: 'Generating Number Patterns & Comparing Sequences',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-number-patterns/v/math-patterns-example-2',
        videoTitle: 'Number Patterns and Sequences',
        reading: 'Generate two numerical patterns using two given rules (e.g. Add 3, Add 6). Form ordered pairs from corresponding terms and graph them.',
        principles: [
          {
            id: 'p-g5-alg-patterns',
            title: 'Comparing Numerical Pattern Sequences',
            standard: '5.OA.B.3',
            summary: 'Generate two numerical patterns using two given rules, and identify apparent relationships between corresponding terms.',
            bank: G5_MATH_BANKS.algebraicThinking,
          },
        ],
      },
      {
        id: 'g5-math-u13-l4',
        unitId: 'g5-math-u13',
        title: 'Mid-Unit Quiz: Algebraic Thinking',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking',
        videoTitle: 'Algebraic Thinking Review',
        reading: 'Review session on evaluating complex expressions with grouping symbols and writing algebraic statements.',
        principles: [
          {
            id: 'p-g5-u13-quiz',
            title: 'Order of Operations Checkpoint',
            standard: '5.OA.A.1',
            summary: 'Assess mastery of PEMDAS and grouping symbol rules.',
            generatorId: 'g5.order-of-ops',
          },
        ],
      },
      {
        id: 'g5-math-u13-l5',
        unitId: 'g5-math-u13',
        title: 'Unit 13 Test: Algebraic Thinking Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking',
        videoTitle: 'Unit 13 Test Review',
        reading: 'Comprehensive assessment of order of operations, numerical expressions, and sequence comparison.',
        principles: [
          {
            id: 'p-g5-u13-test',
            title: 'Algebraic Thinking Mastery Exam',
            standard: '5.OA.A.1',
            summary: 'Demonstrate complete proficiency with order of operations and pattern analysis.',
            generatorId: 'g5.order-of-ops',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 14: CONVERTING UNITS OF MEASURE (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u14',
    title: 'Unit 14: Converting Units of Measure',
    standards: ['5.MD.A.1'],
    lessons: [
      {
        id: 'g5-math-u14-l1',
        unitId: 'g5-math-u14',
        title: 'Converting Customary Units of Length, Weight, and Capacity',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-unit-measurement-conversion/v/converting-us-customary-units',
        videoTitle: 'Customary Measurement Conversions',
        reading: 'To convert larger units to smaller units, multiply (e.g. 3 ft x 12 = 36 in). To convert smaller to larger, divide (e.g. 48 oz / 16 = 3 lb).',
        principles: [
          {
            id: 'p-g5-meas-customary',
            title: 'Customary Unit Conversions',
            standard: '5.MD.A.1',
            summary: 'Convert among different-sized standard measurement units within a given measurement system.',
            generatorId: 'g5.unit-convert',
          },
        ],
      },
      {
        id: 'g5-math-u14-l2',
        unitId: 'g5-math-u14',
        title: 'Converting Metric Units of Length, Mass, and Volume',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-unit-measurement-conversion/v/converting-metric-units',
        videoTitle: 'Metric Unit Conversions',
        reading: 'The metric system is base 10: kilo (1,000), base unit (1), centi (1/100), milli (1/1,000). Shift decimals to convert units.',
        principles: [
          {
            id: 'p-g5-meas-metric',
            title: 'Metric Unit Conversions',
            standard: '5.MD.A.1',
            summary: 'Convert among metric units by multiplying or dividing by powers of ten.',
            generatorId: 'g5.unit-convert',
          },
        ],
      },
      {
        id: 'g5-math-u14-l3',
        unitId: 'g5-math-u14',
        title: 'Multi-Step Measurement Conversion Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-unit-measurement-conversion/v/unit-conversion-word-problem',
        videoTitle: 'Measurement Conversion Word Problems',
        reading: 'Convert measurements to a common unit before comparing, adding, or finding remaining amounts in word problems.',
        principles: [
          {
            id: 'p-g5-meas-words',
            title: 'Multi-Step Conversion Word Problems',
            standard: '5.MD.A.1',
            summary: 'Use conversions in solving multi-step, real world problems.',
            generatorId: 'g5.unit-convert',
          },
        ],
      },
      {
        id: 'g5-math-u14-l4',
        unitId: 'g5-math-u14',
        title: 'Mid-Unit Quiz: Unit Conversions',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3',
        videoTitle: 'Unit Conversion Review',
        reading: 'Review session on converting customary and metric measurements.',
        principles: [
          {
            id: 'p-g5-u14-quiz',
            title: 'Unit Conversion Checkpoint',
            standard: '5.MD.A.1',
            summary: 'Assess accuracy in customary and metric conversions.',
            generatorId: 'g5.unit-convert',
          },
        ],
      },
      {
        id: 'g5-math-u14-l5',
        unitId: 'g5-math-u14',
        title: 'Unit 14 Test: Unit Conversions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3',
        videoTitle: 'Unit 14 Test Review',
        reading: 'Comprehensive assessment of measurement conversion systems.',
        principles: [
          {
            id: 'p-g5-u14-test',
            title: 'Unit Conversion Mastery Exam',
            standard: '5.MD.A.1',
            summary: 'Demonstrate complete proficiency with measurement unit conversions.',
            generatorId: 'g5.unit-convert',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 15: LINE PLOTS & FRACTIONS (4 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u15',
    title: 'Unit 15: Line Plots & Fractions',
    standards: ['5.MD.B.2'],
    lessons: [
      {
        id: 'g5-math-u15-l1',
        unitId: 'g5-math-u15',
        title: 'Making Line Plots with Fractional Measurements',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-fraction-line-plots/v/making-a-line-plot-with-fractions',
        videoTitle: 'Fraction Line Plots Intro',
        reading: 'Create a line plot by marking number line intervals in fractions of a unit (1/2, 1/4, 1/8) and placing an X for each data point.',
        principles: [
          {
            id: 'p-g5-plot-create',
            title: 'Constructing Fractional Line Plots',
            standard: '5.MD.B.2',
            summary: 'Make a line plot to display a data set of measurements in fractions of a unit.',
            bank: G5_MATH_BANKS.linePlotsData,
          },
        ],
      },
      {
        id: 'g5-math-u15-l2',
        unitId: 'g5-math-u15',
        title: 'Solving Problems by Adding and Subtracting Line Plot Data',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-fraction-line-plots/v/interpreting-a-line-plot-with-fractions',
        videoTitle: 'Interpreting Fraction Line Plots',
        reading: 'Use fraction addition and subtraction to find total combined weight, difference between extremes, and fair share averages.',
        principles: [
          {
            id: 'p-g5-plot-solve',
            title: 'Fraction Operations on Line Plot Data',
            standard: '5.MD.B.2',
            summary: 'Use operations on fractions for this grade to solve problems involving information presented in line plots.',
            bank: G5_MATH_BANKS.linePlotsData,
          },
        ],
      },
      {
        id: 'g5-math-u15-l3',
        unitId: 'g5-math-u15',
        title: 'Redistribution and Fair Share Analysis',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-fraction-line-plots/v/fair-share-on-line-plots',
        videoTitle: 'Fair Share on Line Plots',
        reading: 'To find fair share, sum all fractional quantities on the line plot and divide the total by the number of data observations.',
        principles: [
          {
            id: 'p-g5-plot-fair-share',
            title: 'Fair Share and Data Redistribution',
            standard: '5.MD.B.2',
            summary: 'Find the equal redistribution of data across a line plot.',
            bank: G5_MATH_BANKS.linePlotsData,
          },
        ],
      },
      {
        id: 'g5-math-u15-l4',
        unitId: 'g5-math-u15',
        title: 'Unit 15 Test: Line Plots Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3',
        videoTitle: 'Unit 15 Test Review',
        reading: 'Assessment testing line plot creation, fractional calculations, and fair share analysis.',
        principles: [
          {
            id: 'p-g5-u15-test',
            title: 'Line Plots Mastery Exam',
            standard: '5.MD.B.2',
            summary: 'Demonstrate proficiency with line plot interpretation and fractional operations.',
            bank: G5_MATH_BANKS.linePlotsData,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 16: PROPERTIES OF SHAPES (4 Skills / Lessons)
  // =========================================================================
  {
    id: 'g5-math-u16',
    title: 'Unit 16: Properties of Shapes',
    standards: ['5.G.B.3', '5.G.B.4'],
    lessons: [
      {
        id: 'g5-math-u16-l1',
        unitId: 'g5-math-u16',
        title: 'Classifying Two-Dimensional Figures in a Hierarchy',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-properties-of-shapes/v/classifying-shapes-by-properties',
        videoTitle: 'Classifying Shapes Hierarchy',
        reading: 'Shapes can be grouped in a hierarchy: all squares are rectangles, all rectangles are parallelograms, and all parallelograms are quadrilaterals.',
        principles: [
          {
            id: 'p-g5-geo-hierarchy',
            title: 'Geometric Hierarchy of 2D Figures',
            standard: '5.G.B.3',
            summary: 'Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories of that category.',
            bank: G5_MATH_BANKS.geometryShapes,
          },
        ],
      },
      {
        id: 'g5-math-u16-l2',
        unitId: 'g5-math-u16',
        title: 'Classifying Triangles and Quadrilaterals by Properties',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-properties-of-shapes/v/classifying-triangles-example',
        videoTitle: 'Classifying Triangles',
        reading: 'Classify triangles by angles (acute, right, obtuse) and by sides (equilateral, isosceles, scalene). Classify quadrilaterals by parallel pairs and side lengths.',
        principles: [
          {
            id: 'p-g5-geo-classify',
            title: 'Classifying Triangles and Quadrilaterals',
            standard: '5.G.B.4',
            summary: 'Classify two-dimensional figures in a hierarchy based on properties.',
            bank: G5_MATH_BANKS.geometryShapes,
          },
        ],
      },
      {
        id: 'g5-math-u16-l3',
        unitId: 'g5-math-u16',
        title: 'Euler Diagrams and Venn Diagrams for Shapes',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-properties-of-shapes/v/quadrilateral-properties',
        videoTitle: 'Quadrilateral Properties & Diagrams',
        reading: 'Use Venn diagrams to show overlapping shape properties, such as figures with right angles and equal side lengths.',
        principles: [
          {
            id: 'p-g5-geo-venn',
            title: 'Visual Hierarchy & Venn Diagrams',
            standard: '5.G.B.3',
            summary: 'Represent relationships between geometric categories using hierarchy diagrams.',
            bank: G5_MATH_BANKS.geometryShapes,
          },
        ],
      },
      {
        id: 'g5-math-u16-l4',
        unitId: 'g5-math-u16',
        title: 'Unit 16 Test: Properties of Shapes Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3',
        videoTitle: 'Unit 16 Test Review',
        reading: 'Assessment testing knowledge of polygon categories, angle rules, and geometric property hierarchies.',
        principles: [
          {
            id: 'p-g5-u16-test',
            title: 'Properties of Shapes Mastery Exam',
            standard: '5.G.B.4',
            summary: 'Demonstrate complete understanding of 2D shape classification.',
            bank: G5_MATH_BANKS.geometryShapes,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 17: COURSE CHALLENGE
  // =========================================================================
  {
    id: 'g5-math-u17',
    title: 'Unit 17: Grade 5 Math Course Challenge',
    standards: ['5.OA', '5.NBT', '5.NF', '5.MD', '5.G'],
    lessons: [
      {
        id: 'g5-math-u17-l1',
        unitId: 'g5-math-u17',
        title: 'Course Challenge Part 1: Decimals, Powers of 10 & Multi-Digit Computation',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math',
        videoTitle: 'Course Challenge Comprehensive Review Part 1',
        reading: 'Comprehensive review covering decimal place values, powers of ten, multi-digit multiplication, and decimal operations.',
        principles: [
          {
            id: 'p-g5-cc-part1',
            title: 'Course Challenge: Numbers & Decimals',
            standard: '5.NBT',
            summary: 'Comprehensive evaluation of Grade 5 base-ten and decimal standards.',
            generatorId: 'g5.decimal-mult',
          },
        ],
      },
      {
        id: 'g5-math-u17-l2',
        unitId: 'g5-math-u17',
        title: 'Course Challenge Part 2: Fraction Operations & Word Problems',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math',
        videoTitle: 'Course Challenge Comprehensive Review Part 2',
        reading: 'Comprehensive review testing addition, subtraction, multiplication, and unit division of fractions.',
        principles: [
          {
            id: 'p-g5-cc-part2',
            title: 'Course Challenge: Fraction Operations',
            standard: '5.NF',
            summary: 'Comprehensive evaluation of Grade 5 fraction standards.',
            generatorId: 'g5.fraction-add-unlike',
          },
        ],
      },
      {
        id: 'g5-math-u17-l3',
        unitId: 'g5-math-u17',
        title: 'Course Challenge Part 3: Volume, Coordinates & Algebraic Thinking',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math',
        videoTitle: 'Course Challenge Comprehensive Review Part 3',
        reading: 'Final capstone assessment covering rectangular prism volume, coordinate graphing, order of operations, and shape hierarchy.',
        principles: [
          {
            id: 'p-g5-cc-part3',
            title: 'Course Challenge: Geometry & Algebraic Thinking',
            standard: '5.MD',
            summary: 'Comprehensive evaluation of Grade 5 measurement, geometry, and algebraic standards.',
            generatorId: 'g5.volume-prism',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 18: EXPLORE MATH THROUGH SIMULATIONS & PROJECTS (Non-graded enrichment)
  // =========================================================================
  {
    id: 'g5-math-u18',
    title: 'Unit 18: Explore Math Through Simulations & Projects',
    kind: 'explore',
    standards: ['5.NF.A.1', '5.MD.C.5', '5.G.A.1'],
    lessons: [],
    exploreItems: [
      {
        id: 'g5-math-exp-phet-frac-match',
        title: 'PhET Simulation: Fraction Matcher Lab',
        type: 'simulation',
        description: 'Match shapes and numbers across multi-level challenges to master mixed numbers, unlike denominators, and fraction scaling.',
        url: 'https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'Which level of fraction matching required the most mental regrouping?',
        requiresParentPin: false,
      },
      {
        id: 'g5-math-exp-phet-balance',
        title: 'PhET Simulation: Balancing Act & Proportions',
        type: 'simulation',
        description: 'Place masses along a balance plank to explore balancing forces, fulcrum distances, and algebraic proportional thinking.',
        url: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'How does moving a 5 kg mass twice as far from the center affect balance?',
        requiresParentPin: false,
      },
      {
        id: 'g5-math-exp-desmos-grid',
        title: 'Desmos Interactive: Coordinate Battleship Game',
        type: 'game',
        description: 'Plot target coordinates in quadrant 1 to track hidden coordinates and build mastery over (x, y) grid navigation.',
        url: 'https://www.desmos.com/calculator',
        estimatedMinutes: 15,
        reflectionPrompt: 'Why does reversing x and y coordinates land you on completely different grid points?',
        requiresParentPin: false,
      },
      {
        id: 'g5-math-exp-cereal-volume',
        title: 'Kitchen Volume Project: Cereal Box Volume & Surface Area',
        type: 'project',
        description: 'Measure three empty kitchen food boxes (cereal, pasta, snack) in centimeters. Calculate their volumes and compare which holds the most volume.',
        estimatedMinutes: 30,
        materials: ['Ruler with centimeters', '3 empty cardboard food boxes', 'Pencil and paper'],
        steps: [
          'Measure length, width, and height of each box to the nearest centimeter.',
          'Multiply length × width × height to calculate cubic centimeters of volume.',
          'Rank the boxes from greatest volume to least volume.',
          'Check the printed net weight on the front of each box to see if the largest box held the heaviest food.',
        ],
        reflectionPrompt: 'Did the tallest box always have the greatest total volume? Why or why not?',
        requiresParentPin: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 19: TEACHER RESOURCES (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g5-math-u19',
    title: 'Unit 19: Teacher Resources & Pacing',
    kind: 'teacher_resources',
    standards: ['5.OA', '5.NBT', '5.NF', '5.MD', '5.G'],
    lessons: [],
    resources: [
      {
        id: 'g5-math-res-pacing',
        title: 'Grade 5 Mathematics 36-Week Pacing Guide',
        kind: 'pacing_guide',
        description: 'Year-long instructional roadmap covering decimals, fractions, volume, coordinates, and algebraic order of operations.',
        body: `## Grade 5 Math Pacing Guide (36 Weeks)

- **Weeks 1–3**: Unit 1 — Decimal Place Value (5.NBT.1-4)
- **Weeks 4–6**: Unit 2 & 3 — Adding & Subtracting Decimals (5.NBT.7)
- **Weeks 7–10**: Unit 4 — Adding & Subtracting Unlike Fractions (5.NF.1-2)
- **Weeks 11–13**: Unit 5 — Multi-Digit Multiplication & Division (5.NBT.5-6)
- **Weeks 14–16**: Unit 6 & 7 — Multiplying & Dividing Fractions (5.NF.4-7)
- **Weeks 17–18**: Mid-Year Cumulative Review
- **Weeks 19–21**: Unit 8 & 9 — Multiplying & Dividing Decimals (5.NBT.7)
- **Weeks 22–24**: Unit 10 — Powers of Ten (5.NBT.2)
- **Weeks 25–27**: Unit 11 — Volume of Rectangular Prisms (5.MD.3-5)
- **Weeks 28–29**: Unit 12 — Coordinate Plane (5.G.1-2)
- **Weeks 30–31**: Unit 13 — Algebraic Thinking & Expressions (5.OA.1-3)
- **Weeks 32–33**: Unit 14 — Converting Units of Measure (5.MD.1)
- **Weeks 34–35**: Unit 15 & 16 — Line Plots & Properties of Shapes (5.MD.2, 5.G.3-4)
- **Week 36**: Year-End Capstone Simulations & Course Challenge`,
      },
      {
        id: 'g5-math-res-standards',
        title: 'Grade 5 Common Core & Ohio Standards Crosswalk',
        kind: 'standards_map',
        description: 'Comprehensive alignment of Grade 5 units to Ohio State Learning Standards for Mathematics.',
        body: `| Unit | Standards | Target Skill |
|---|---|---|
| Unit 1 | 5.NBT.A.1-4 | Exponents of 10, decimal place value shifts, rounding |
| Unit 2-3 | 5.NBT.B.7 | Decimal addition and subtraction with vertical alignment |
| Unit 4 | 5.NF.A.1-2 | Unlike fraction addition/subtraction via common denominators |
| Unit 5 | 5.NBT.B.5-6 | Multi-digit multiplication, 2-digit long division |
| Unit 6-7 | 5.NF.B.4-7 | Fraction multiplication algorithms, unit fraction division |
| Unit 8-9 | 5.NBT.B.7 | Decimal multiplication and division |
| Unit 10 | 5.NBT.A.2 | Powers of 10 exponent patterns and shifts |
| Unit 11 | 5.MD.C.3-5 | Packing unit cubes, V = l×w×h, additive solid volume |
| Unit 12 | 5.G.A.1-2 | Coordinate plane quadrant 1, ordered pairs, trend lines |
| Unit 13 | 5.OA.A.1-3 | PEMDAS order of operations with parentheses and brackets |
| Unit 14 | 5.MD.A.1 | Customary and metric multi-step unit conversions |
| Unit 15 | 5.MD.B.2 | Line plots with fractional data and fair share |
| Unit 16 | 5.G.B.3-4 | Polygon classification and 2D shape hierarchy |`,
      },
      {
        id: 'g5-math-res-formulas',
        title: 'Grade 5 Mathematics Formula Reference Card',
        kind: 'printable',
        description: 'Printable student reference sheet for 5th grade formulas and conversions.',
        body: `## Grade 5 Formula Reference

### Volume
- **Rectangular Prism**: $V = l \\times w \\times h$ or $V = B \\times h$ ($B = l \\times w$)

### Fractions
- **Addition/Subtraction**: Convert to common denominator: $\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}$
- **Multiplication**: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$
- **Division**: $\\frac{1}{b} \\div c = \\frac{1}{b \\times c}$ and $a \\div \\frac{1}{d} = a \\times d$

### Coordinate Plane
- Origin: $(0, 0)$
- Point: $(x, y) \\rightarrow$ Move $x$ units right, then $y$ units up.`,
      },
    ],
  },
]
