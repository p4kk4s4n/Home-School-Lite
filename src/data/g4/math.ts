import { Course, Principle } from '../../types'

// Bank for Plane Figures & Lines (Unit 11)
const G4_MATH_LINES_PRINCIPLE: Principle = {
  id: 'p-g4-math-lines',
  title: 'Points, Lines, Rays & Angles',
  standard: '4.G.A.1',
  summary: 'Identify points, lines, line segments, rays, and perpendicular or parallel lines.',
  bank: [
    {
      id: 'g4-m-l1-q1',
      type: 'mc',
      prompt: 'Which line type never intersects and stays the same distance apart?',
      choices: ['Parallel lines', 'Perpendicular lines', 'Intersecting lines', 'Curved rays'],
      answer: 'Parallel lines',
      explanation: 'Parallel lines run side by side in the same direction and never intersect.',
    },
    {
      id: 'g4-m-l1-q2',
      type: 'mc',
      prompt: 'Two lines cross to form four 90° right angles. What are they called?',
      choices: ['Perpendicular lines', 'Parallel lines', 'Skew lines', 'Tangent lines'],
      answer: 'Perpendicular lines',
      explanation: 'Perpendicular lines intersect at right angles (exactly 90 degrees).',
    },
    {
      id: 'g4-m-l1-q3',
      type: 'mc',
      prompt: 'What geometry figure has one endpoint and extends endlessly in one direction?',
      choices: ['Ray', 'Line segment', 'Line', 'Point'],
      answer: 'Ray',
      explanation: 'A ray begins at a fixed endpoint and continues endlessly in one direction.',
    },
    {
      id: 'g4-m-l1-q4',
      type: 'mc',
      prompt: 'What geometry figure has two fixed endpoints?',
      choices: ['Line segment', 'Ray', 'Line', 'Angle'],
      answer: 'Line segment',
      explanation: 'A line segment is a straight path connecting two distinct endpoints.',
    },
    {
      id: 'g4-m-l1-q5',
      type: 'mc',
      prompt: 'An angle measures 45°. How is this angle classified?',
      choices: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'],
      answer: 'Acute angle',
      explanation: 'An acute angle measures less than 90 degrees.',
    },
    {
      id: 'g4-m-l1-q6',
      type: 'mc',
      prompt: 'An angle measures 120°. How is this angle classified?',
      choices: ['Obtuse angle', 'Acute angle', 'Right angle', 'Straight angle'],
      answer: 'Obtuse angle',
      explanation: 'An obtuse angle measures greater than 90 degrees and less than 180 degrees.',
    },
  ],
}

const G4_MATH_SYMMETRY_PRINCIPLE: Principle = {
  id: 'p-g4-math-symmetry',
  title: 'Classifying Shapes & Line Symmetry',
  standard: '4.G.A.2',
  summary: 'Classify two-dimensional figures based on parallel or perpendicular sides and symmetry.',
  bank: [
    {
      id: 'g4-m-sym-q1',
      type: 'mc',
      prompt: 'How many lines of symmetry does a square have?',
      choices: ['4 lines', '2 lines', '1 line', '8 lines'],
      answer: '4 lines',
      explanation: 'A square has 4 lines of symmetry: 2 through the sides and 2 through the diagonals.',
    },
    {
      id: 'g4-m-sym-q2',
      type: 'mc',
      prompt: 'Which triangle has three sides of equal length?',
      choices: ['Equilateral triangle', 'Isosceles triangle', 'Scalene triangle', 'Right triangle'],
      answer: 'Equilateral triangle',
      explanation: 'An equilateral triangle has three equal side lengths and three equal 60° angles.',
    },
    {
      id: 'g4-m-sym-q3',
      type: 'mc',
      prompt: 'Which quadrilateral has exactly one pair of parallel sides?',
      choices: ['Trapezoid', 'Rectangle', 'Rhombus', 'Parallelogram'],
      answer: 'Trapezoid',
      explanation: 'A trapezoid is defined as a quadrilateral with exactly one pair of parallel opposite sides.',
    },
    {
      id: 'g4-m-sym-q4',
      type: 'mc',
      prompt: 'How many lines of symmetry does an equilateral triangle have?',
      choices: ['3 lines', '1 line', '2 lines', '0 lines'],
      answer: '3 lines',
      explanation: 'An equilateral triangle has 3 lines of symmetry passing from each vertex through the opposite side.',
    },
    {
      id: 'g4-m-sym-q5',
      type: 'mc',
      prompt: 'Which triangle has no sides of equal length?',
      choices: ['Scalene triangle', 'Isosceles triangle', 'Equilateral triangle', 'Regular triangle'],
      answer: 'Scalene triangle',
      explanation: 'A scalene triangle has three sides with different lengths.',
    },
    {
      id: 'g4-m-sym-q6',
      type: 'mc',
      prompt: 'What happens when a figure folds along its line of symmetry?',
      choices: ['Both halves match exactly.', 'One half is bigger.', 'The sides turn 90 degrees.', 'The shape becomes round.'],
      answer: 'Both halves match exactly.',
      explanation: 'A line of symmetry divides a shape into two identical mirror-image halves.',
    },
  ],
}

export const G4_MATH_COURSE: Course = {
  id: 'g4-math',
  subject: 'math',
  grade: 4,
  title: 'Grade 4 Mathematics',
  subtitle: 'Place Value, Multi-Digit Operations, Fractions, Decimals, Geometry & Angles',
  credits: 1.0,
  color: '#2563eb',
  icon: '∑',
  units: [
    // UNIT 1: Place value
    {
      id: 'g4-math-u1',
      title: 'Unit 1: Place Value & Rounding',
      standards: ['4.NBT.A.1', '4.NBT.A.2', '4.NBT.A.3'],
      lessons: [
        {
          id: 'g4-math-u1-l1',
          unitId: 'g4-math-u1',
          title: 'Lesson 1: Place Value Relationships & Forms',
          kind: 'lesson',
          partOf: 'Place Value',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-intro-to-place-value/v/place-value-relationships',
          videoTitle: 'Khan Academy: Intro to Place Value',
          reading:
            'In our base-ten number system, each place value is 10 times the value of the place to its right. We write numbers in standard form (4,520), word form, and expanded form (4,000 + 500 + 20).',
          principles: [
            {
              id: 'p-g4-round-place',
              title: 'Place Value & Rounding',
              standard: '4.NBT.A.1',
              summary: 'Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right.',
              generatorId: 'g4.place-value-round',
            },
          ],
        },
        {
          id: 'g4-math-u1-l2',
          unitId: 'g4-math-u1',
          title: 'Lesson 2: Rounding to Nearest Hundred & Thousand',
          kind: 'lesson',
          partOf: 'Rounding',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-rounding-whole-numbers/v/rounding-whole-numbers-1',
          videoTitle: 'Khan Academy: Rounding Whole Numbers',
          reading:
            'To round to the nearest hundred or thousand, find the rounding place and look at the digit directly to the right. If that digit is 5 or more, round up. If 4 or less, round down.',
          principles: [
            {
              id: 'p-g4-round-thousand',
              title: 'Rounding to Thousands',
              standard: '4.NBT.A.3',
              summary: 'Use place value understanding to round multi-digit whole numbers to any place.',
              generatorId: 'g4.round-thousand',
            },
          ],
        },
      ],
    },

    // UNIT 2: Addition, subtraction & estimation
    {
      id: 'g4-math-u2',
      title: 'Unit 2: Addition, Subtraction & Estimation',
      standards: ['4.NBT.B.4'],
      lessons: [
        {
          id: 'g4-math-u2-l1',
          unitId: 'g4-math-u2',
          title: 'Lesson 1: Multi-Digit Addition with Regrouping',
          kind: 'lesson',
          partOf: 'Multi-Digit Addition',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction-2/imp-multi-digit-addition/v/carrying-when-adding-three-digit-numbers',
          videoTitle: 'Khan Academy: Multi-Digit Addition',
          reading:
            'When adding multi-digit numbers, align digits by place value starting from the ones. When the sum in any place value reaches 10 or more, regroup 10 smaller units into 1 larger unit in the next column.',
          principles: [
            {
              id: 'p-g4-add',
              title: 'Multi-Digit Addition',
              standard: '4.NBT.B.4',
              summary: 'Fluently add multi-digit whole numbers using the standard algorithm.',
              generatorId: 'g4.multi-digit-add',
            },
          ],
        },
        {
          id: 'g4-math-u2-l2',
          unitId: 'g4-math-u2',
          title: 'Lesson 2: Multi-Digit Subtraction with Regrouping',
          kind: 'lesson',
          partOf: 'Multi-Digit Subtraction',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction-2/imp-multi-digit-subtraction/v/regrouping-borrowing-twice-example',
          videoTitle: 'Khan Academy: Multi-Digit Subtraction',
          reading:
            'When subtracting, if the top digit is smaller than the bottom digit, borrow 1 unit from the next column to the left, which becomes 10 units in the current column.',
          principles: [
            {
              id: 'p-g4-sub',
              title: 'Multi-Digit Subtraction',
              standard: '4.NBT.B.4',
              summary: 'Fluently subtract multi-digit whole numbers using the standard algorithm.',
              generatorId: 'g4.multi-digit-sub',
            },
          ],
        },
      ],
    },

    // UNIT 3: Multiply by 1-digit numbers
    {
      id: 'g4-math-u3',
      title: 'Unit 3: Multiply by 1-Digit Numbers',
      standards: ['4.NBT.B.5', '4.OA.A.1'],
      lessons: [
        {
          id: 'g4-math-u3-l1',
          unitId: 'g4-math-u3',
          title: 'Lesson 1: Multiply by Multiples of 10, 100 & 1,000',
          kind: 'lesson',
          partOf: 'Multiplication by Multiples of 10',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-2/imp-multiply-by-multiples-of-10-100-and-1000/v/multiplying-by-multiples-of-10',
          videoTitle: 'Khan Academy: Multiplying by Multiples of 10',
          reading:
            'To multiply a single digit by a multiple of 10 or 100, multiply the basic facts first, then add the trailing zeros. For example, 4 × 300 = 1,200 because 4 × 3 = 12 with two zeros.',
          principles: [
            {
              id: 'p-g4-mult10',
              title: 'Multiply Multiples of 10 and 100',
              standard: '4.NBT.B.5',
              summary: 'Multiply whole numbers by multiples of 10, 100, and 1,000 using place value strategies.',
              generatorId: 'g4.mult-1digit',
            },
          ],
        },
        {
          id: 'g4-math-u3-l2',
          unitId: 'g4-math-u3',
          title: 'Lesson 2: Multi-Digit by 1-Digit Partial Products',
          kind: 'lesson',
          partOf: 'Partial Products',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-2/imp-multiplying-2-3-and-4-digit-numbers-by-1-digit-numbers/v/multiplying-2-digit-numbers',
          videoTitle: 'Khan Academy: Multiplying with Area Models',
          reading:
            'Break multi-digit numbers into expanded form to find partial products. For example, to multiply 3 × 48, compute (3 × 40) + (3 × 8) = 120 + 24 = 144.',
          principles: [
            {
              id: 'p-g4-mult-1dig',
              title: 'Multi-Digit by 1-Digit Multiplication',
              standard: '4.NBT.B.5',
              summary: 'Multiply a whole number of up to four digits by a one-digit whole number.',
              generatorId: 'g4.mult-1digit',
            },
          ],
        },
      ],
    },

    // UNIT 4: Multiply by 2-digit numbers
    {
      id: 'g4-math-u4',
      title: 'Unit 4: Multiply by 2-Digit Numbers',
      standards: ['4.NBT.B.5'],
      lessons: [
        {
          id: 'g4-math-u4-l1',
          unitId: 'g4-math-u4',
          title: 'Lesson 1: 2-Digit by 2-Digit Area Models',
          kind: 'lesson',
          partOf: 'Area Models',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-2/imp-multiplying-2-digit-numbers-by-2-digit-numbers/v/multiplying-2-digit-numbers-with-area-model',
          videoTitle: 'Khan Academy: Area Models for 2-Digit Multiplication',
          reading:
            'An area model splits both 2-digit factors into tens and ones. Multiply each box to find four partial products, then add the four partial products together.',
          principles: [
            {
              id: 'p-g4-mult2digit',
              title: '2-Digit Multiplication',
              standard: '4.NBT.B.5',
              summary: 'Multiply two two-digit numbers using strategies based on place value and area models.',
              generatorId: 'g4.mult-2digit',
            },
          ],
        },
        {
          id: 'g4-math-u4-l2',
          unitId: 'g4-math-u4',
          title: 'Lesson 2: Standard Algorithm for 2-Digit Multiplication',
          kind: 'lesson',
          partOf: 'Standard Algorithm',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-2/imp-multiplying-2-digit-numbers-by-2-digit-numbers/v/multiplying-2-digit-numbers',
          videoTitle: 'Khan Academy: 2-Digit Multiplication Algorithm',
          reading:
            'Multiply by the ones digit first, write the partial product, place a zero in the ones place, multiply by the tens digit, and add the two lines.',
          principles: [
            {
              id: 'p-g4-mult2-algo',
              title: 'Algorithm for 2-Digit Multiplication',
              standard: '4.NBT.B.5',
              summary: 'Apply the standard algorithm to find products of 2-digit whole numbers.',
              generatorId: 'g4.mult-2digit',
            },
          ],
        },
      ],
    },

    // UNIT 5: Division with remainders
    {
      id: 'g4-math-u5',
      title: 'Unit 5: Division & Remainders',
      standards: ['4.NBT.B.6', '4.OA.A.3'],
      lessons: [
        {
          id: 'g4-math-u5-l1',
          unitId: 'g4-math-u5',
          title: 'Lesson 1: Multi-Digit Division Without Remainders',
          kind: 'lesson',
          partOf: 'Even Division',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-division-2/imp-remainders/v/introduction-to-remainders',
          videoTitle: 'Khan Academy: Intro to Division and Quotients',
          reading:
            'Division shares an amount into equal groups. For example, 72 divided by 6 equals 12 because 6 × 12 = 72 with zero leftover.',
          principles: [
            {
              id: 'p-g4-divexact',
              title: 'Division Without Remainders',
              standard: '4.NBT.B.6',
              summary: 'Find whole-number quotients with up to four-digit dividends and one-digit divisors.',
              generatorId: 'g4.div-exact',
            },
          ],
        },
        {
          id: 'g4-math-u5-l2',
          unitId: 'g4-math-u5',
          title: 'Lesson 2: Interpreting Division Remainders',
          kind: 'lesson',
          partOf: 'Remainders',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-division-2/imp-remainders/v/long-division-with-remainder-example',
          videoTitle: 'Khan Academy: Long Division with Remainders',
          reading:
            'When a dividend cannot be split equally into integer groups, the leftover amount is called the remainder (R). The remainder must always be smaller than the divisor.',
          principles: [
            {
              id: 'p-g4-divrem',
              title: 'Division with Remainders',
              standard: '4.NBT.B.6',
              summary: 'Compute whole-number quotients and remainders using place value relationships.',
              generatorId: 'g4.div-remainders',
            },
          ],
        },
      ],
    },

    // UNIT 6: Factors, multiples and patterns
    {
      id: 'g4-math-u6',
      title: 'Unit 6: Factors, Multiples & Patterns',
      standards: ['4.OA.B.4', '4.OA.C.5'],
      lessons: [
        {
          id: 'g4-math-u6-l1',
          unitId: 'g4-math-u6',
          title: 'Lesson 1: Prime vs. Composite Numbers & Factors',
          kind: 'lesson',
          partOf: 'Factors and Primes',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-prime-and-composite-numbers/v/prime-numbers',
          videoTitle: 'Khan Academy: Prime and Composite Numbers',
          reading:
            'A prime number has exactly two distinct factors: 1 and itself (2, 3, 5, 7, 11...). A composite number has more than two factors (4, 6, 8, 9, 10...). The number 1 is neither prime nor composite.',
          principles: [
            {
              id: 'p-g4-primes',
              title: 'Prime and Composite Numbers',
              standard: '4.OA.B.4',
              summary: 'Determine whether a given whole number in the range 1–100 is prime or composite.',
              generatorId: 'g4.factors-primes',
            },
          ],
        },
        {
          id: 'g4-math-u6-l2',
          unitId: 'g4-math-u6',
          title: 'Lesson 2: Multiples & Number Rule Patterns',
          kind: 'lesson',
          partOf: 'Multiples & Patterns',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-math-patterns/v/math-patterns-example',
          videoTitle: 'Khan Academy: Math Patterns',
          reading:
            'A multiple of a number is the product of that number and any whole integer. Number patterns follow a clear arithmetic rule, such as "add 4" or "multiply by 2".',
          principles: [
            {
              id: 'p-g4-factors-rule',
              title: 'Multiples & Factor Pairs',
              standard: '4.OA.B.4',
              summary: 'Find all factor pairs for a whole number in the range 1–100 and identify multiples.',
              generatorId: 'g4.factors-primes',
            },
          ],
        },
      ],
    },

    // UNIT 7: Equivalent fractions and comparing fractions
    {
      id: 'g4-math-u7',
      title: 'Unit 7: Equivalent Fractions & Comparing Fractions',
      standards: ['4.NF.A.1', '4.NF.A.2'],
      lessons: [
        {
          id: 'g4-math-u7-l1',
          unitId: 'g4-math-u7',
          title: 'Lesson 1: Visual Models for Equivalent Fractions',
          kind: 'lesson',
          partOf: 'Visual Equivalence',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-equivalent-fractions/v/visualizing-equivalent-fractions',
          videoTitle: 'Khan Academy: Visualizing Equivalent Fractions',
          reading:
            'Equivalent fractions represent the same amount of a whole. Multiplying or dividing both the numerator and denominator by the same non-zero number produces an equivalent fraction.',
          principles: [
            {
              id: 'p-g4-equiv-vis',
              title: 'Equivalent Fractions',
              standard: '4.NF.A.1',
              summary: 'Explain why a fraction a/b is equivalent to a fraction (n×a)/(n×b) using visual fraction models.',
              generatorId: 'g4.equiv-fractions',
            },
          ],
        },
        {
          id: 'g4-math-u7-l2',
          unitId: 'g4-math-u7',
          title: 'Lesson 2: Comparing Fractions with Unlike Denominators',
          kind: 'lesson',
          partOf: 'Comparing Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-comparing-fractions-2/v/comparing-fractions-with-different-denominators',
          videoTitle: 'Khan Academy: Comparing Fractions with Common Denominators',
          reading:
            'To compare two fractions with different denominators, rewrite them with a common denominator or compare both fractions to benchmark fractions such as 1/2.',
          principles: [
            {
              id: 'p-g4-equiv-comp',
              title: 'Comparing Fractions',
              standard: '4.NF.A.2',
              summary: 'Compare two fractions with different numerators and different denominators.',
              generatorId: 'g4.equiv-fractions',
            },
          ],
        },
      ],
    },

    // UNIT 8: Add and subtract fractions
    {
      id: 'g4-math-u8',
      title: 'Unit 8: Add & Subtract Fractions with Like Denominators',
      standards: ['4.NF.B.3'],
      lessons: [
        {
          id: 'g4-math-u8-l1',
          unitId: 'g4-math-u8',
          title: 'Lesson 1: Adding Fractions with Like Denominators',
          kind: 'lesson',
          partOf: 'Adding Like Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-like-denominators/v/adding-fractions-with-like-denominators',
          videoTitle: 'Khan Academy: Adding Fractions with Like Denominators',
          reading:
            'When denominators are the same, add the numerators and keep the denominator identical: 2/7 + 3/7 = 5/7.',
          principles: [
            {
              id: 'p-g4-frac-add',
              title: 'Adding Like Fractions',
              standard: '4.NF.B.3.A',
              summary: 'Understand addition of fractions as joining parts referring to the same whole.',
              generatorId: 'g4.fraction-add-like',
            },
          ],
        },
        {
          id: 'g4-math-u8-l2',
          unitId: 'g4-math-u8',
          title: 'Lesson 2: Subtracting Fractions & Mixed Numbers',
          kind: 'lesson',
          partOf: 'Subtracting Like Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-with-like-denominators/v/subtracting-fractions-with-like-denominators',
          videoTitle: 'Khan Academy: Subtracting Like Fractions',
          reading:
            'When subtracting fractions with the same denominator, subtract the numerators and keep the denominator: 5/8 - 2/8 = 3/8.',
          principles: [
            {
              id: 'p-g4-frac-sub',
              title: 'Subtracting Like Fractions',
              standard: '4.NF.B.3.A',
              summary: 'Understand subtraction of fractions as separating parts referring to the same whole.',
              generatorId: 'g4.fraction-sub-like',
            },
          ],
        },
      ],
    },

    // UNIT 9: Multiply fractions by whole numbers
    {
      id: 'g4-math-u9',
      title: 'Unit 9: Multiply Fractions by Whole Numbers',
      standards: ['4.NF.B.4'],
      lessons: [
        {
          id: 'g4-math-u9-l1',
          unitId: 'g4-math-u9',
          title: 'Lesson 1: Fractions as Multiples of Unit Fractions',
          kind: 'lesson',
          partOf: 'Unit Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-multiplying-fractions/v/multiplying-fractions-and-whole-numbers',
          videoTitle: 'Khan Academy: Multiplying Fractions by Whole Numbers',
          reading:
            'Every fraction a/b is a multiple of the unit fraction 1/b. For example, 3/5 is 3 × (1/5). Repeated addition of unit fractions matches whole number multiplication.',
          principles: [
            {
              id: 'p-g4-frac-unit',
              title: 'Fractions as Multiples',
              standard: '4.NF.B.4.A',
              summary: 'Understand a fraction a/b as a multiple of 1/b.',
              generatorId: 'g4.fraction-mult-whole',
            },
          ],
        },
        {
          id: 'g4-math-u9-l2',
          unitId: 'g4-math-u9',
          title: 'Lesson 2: Multiplying Whole Numbers by Fractions',
          kind: 'lesson',
          partOf: 'Whole Times Fraction',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-multiplying-fractions/v/concept-fraction-whole-number-product',
          videoTitle: 'Khan Academy: Concept of Whole Number Times Fraction',
          reading:
            'To multiply a whole number by a fraction, multiply the whole number by the numerator and divide by the denominator: 4 × (2/3) = (4 × 2)/3 = 8/3.',
          principles: [
            {
              id: 'p-g4-frac-mult-w',
              title: 'Multiplying Fractions by Whole Numbers',
              standard: '4.NF.B.4.B',
              summary: 'Multiply a fraction by a whole number using visual models and equations.',
              generatorId: 'g4.fraction-mult-whole',
            },
          ],
        },
      ],
    },

    // UNIT 10: Understand decimals
    {
      id: 'g4-math-u10',
      title: 'Unit 10: Understand Decimals & Decimal Notation',
      standards: ['4.NF.C.5', '4.NF.C.6', '4.NF.C.7'],
      lessons: [
        {
          id: 'g4-math-u10-l1',
          unitId: 'g4-math-u10',
          title: 'Lesson 1: Tenths & Hundredths as Fractions and Decimals',
          kind: 'lesson',
          partOf: 'Tenths and Hundredths',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals/imp-decimals-in-words/v/writing-decimals-in-words-tenth-hundredth',
          videoTitle: 'Khan Academy: Writing Decimals in Words',
          reading:
            'The first place to the right of the decimal point is tenths (0.1 = 1/10). The second place is hundredths (0.01 = 1/100). For example, 0.45 equals 45/100.',
          principles: [
            {
              id: 'p-g4-dec-intro',
              title: 'Decimals as Tenths and Hundredths',
              standard: '4.NF.C.6',
              summary: 'Use decimal notation for fractions with denominators 10 or 100.',
              generatorId: 'g4.decimals-tenths-hundredths',
            },
          ],
        },
        {
          id: 'g4-math-u10-l2',
          unitId: 'g4-math-u10',
          title: 'Lesson 2: Comparing Decimals to Hundredths',
          kind: 'lesson',
          partOf: 'Comparing Decimals',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals/imp-comparing-decimals/v/comparing-decimals-with-models',
          videoTitle: 'Khan Academy: Comparing Decimals with Models',
          reading:
            'To compare two decimals, compare tenths first. If tenths are equal, compare hundredths. Remember that 0.4 is equal to 0.40, which is larger than 0.35.',
          principles: [
            {
              id: 'p-g4-dec-comp',
              title: 'Comparing Decimals',
              standard: '4.NF.C.7',
              summary: 'Compare two decimals to hundredths by reasoning about their size.',
              generatorId: 'g4.decimals-tenths-hundredths',
            },
          ],
        },
      ],
    },

    // UNIT 11: Plane figures and lines
    {
      id: 'g4-math-u11',
      title: 'Unit 11: Plane Figures, Lines & Symmetry',
      standards: ['4.G.A.1', '4.G.A.2', '4.G.A.3'],
      lessons: [
        {
          id: 'g4-math-u11-l1',
          unitId: 'g4-math-u11',
          title: 'Lesson 1: Points, Lines, Rays & Angles',
          kind: 'lesson',
          partOf: 'Lines and Rays',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-lines-line-segments-and-rays/v/lines-line-segments-and-rays',
          videoTitle: 'Khan Academy: Lines, Line Segments, and Rays',
          reading:
            'A line extends forever in both directions. A ray has one endpoint. Parallel lines never meet, and perpendicular lines form 90° right angles.',
          principles: [G4_MATH_LINES_PRINCIPLE],
        },
        {
          id: 'g4-math-u11-l2',
          unitId: 'g4-math-u11',
          title: 'Lesson 2: Classifying Shapes & Line Symmetry',
          kind: 'lesson',
          partOf: 'Shape Symmetry',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-symmetry/v/axis-of-symmetry',
          videoTitle: 'Khan Academy: Line of Symmetry',
          reading:
            'Triangles are classified by side lengths (equilateral, isosceles, scalene). A line of symmetry folds a shape into two matching mirror-image halves.',
          principles: [G4_MATH_SYMMETRY_PRINCIPLE],
        },
      ],
    },

    // UNIT 12: Measuring angles
    {
      id: 'g4-math-u12',
      title: 'Unit 12: Measuring Angles & Protractors',
      standards: ['4.MD.C.5', '4.MD.C.6', '4.MD.C.7'],
      lessons: [
        {
          id: 'g4-math-u12-l1',
          unitId: 'g4-math-u12',
          title: 'Lesson 1: Understanding Angles as Turns',
          kind: 'lesson',
          partOf: 'Angle Concepts',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-angles-and-degrees/v/angle-basics',
          videoTitle: 'Khan Academy: Angle Basics and Degrees',
          reading:
            'An angle turns around a center circle of 360 degrees. A right angle is 90 degrees (1/4 of a circle), and a straight line is 180 degrees (1/2 of a circle).',
          principles: [
            {
              id: 'p-g4-angle-turn',
              title: 'Angles as Turns of a Circle',
              standard: '4.MD.C.5',
              summary: 'Recognize angles as geometric shapes formed wherever two rays share a common endpoint.',
              generatorId: 'g4.angles-measure',
            },
          ],
        },
        {
          id: 'g4-math-u12-l2',
          unitId: 'g4-math-u12',
          title: 'Lesson 2: Additive Angles & Unknown Measures',
          kind: 'lesson',
          partOf: 'Additive Angles',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-decomposing-angles/v/decomposing-angles',
          videoTitle: 'Khan Academy: Decomposing Angles',
          reading:
            'When two adjacent angles share a common vertex and ray, their measures add up to the total angle measure. Subtract known parts to find missing degrees.',
          principles: [
            {
              id: 'p-g4-angle-add',
              title: 'Additive Angles',
              standard: '4.MD.C.7',
              summary: 'Recognize angle measure as additive and solve addition and subtraction problems to find unknown angles.',
              generatorId: 'g4.angles-measure',
            },
          ],
        },
      ],
    },

    // UNIT 13: Measurement, area and perimeter
    {
      id: 'g4-math-u13',
      title: 'Unit 13: Measurement, Area & Perimeter',
      standards: ['4.MD.A.1', '4.MD.A.2', '4.MD.A.3'],
      lessons: [
        {
          id: 'g4-math-u13-l1',
          unitId: 'g4-math-u13',
          title: 'Lesson 1: Converting Customary & Metric Units',
          kind: 'lesson',
          partOf: 'Unit Conversions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-converting-units-of-measure/v/converting-us-customary-units-of-length',
          videoTitle: 'Khan Academy: Converting Units of Length and Time',
          reading:
            'To convert from a larger measurement unit to a smaller unit, multiply: 1 foot = 12 inches; 1 kilogram = 1,000 grams; 1 hour = 60 minutes.',
          principles: [
            {
              id: 'p-g4-meas-units',
              title: 'Unit Conversions',
              standard: '4.MD.A.1',
              summary: 'Know relative sizes of measurement units within one system of units and express measurements in a smaller unit.',
              generatorId: 'g4.measurement-units',
            },
          ],
        },
        {
          id: 'g4-math-u13-l2',
          unitId: 'g4-math-u13',
          title: 'Lesson 2: Perimeter and Area of Rectangles',
          kind: 'lesson',
          partOf: 'Area and Perimeter',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-area-and-perimeter/v/area-and-perimeter-of-rectangles',
          videoTitle: 'Khan Academy: Area and Perimeter of Rectangles',
          reading:
            'The perimeter of a rectangle is the distance around the outside: P = 2(length + width). The area is the square units inside: A = length × width.',
          principles: [
            {
              id: 'p-g4-area-perim-gen',
              title: 'Area and Perimeter of Rectangles',
              standard: '4.MD.A.3',
              summary: 'Apply area and perimeter formulas for rectangles in real-world and mathematical problems.',
              generatorId: 'g4.geometry-area-perim',
            },
          ],
        },
      ],
    },

    // UNIT 14: Explore Math Through Simulations (enrichment, zero grade impact)
    {
      id: 'g4-math-u14',
      title: 'Unit 14: Explore Math Through Simulations & Projects',
      kind: 'explore',
      standards: ['4.NF.A.1', '4.NBT.B.5', '4.G.A.1'],
      lessons: [],
      exploreItems: [
        {
          id: 'g4-math-exp-phet-frac',
          title: 'PhET Simulation: Build a Fraction Lab',
          type: 'simulation',
          description:
            'Use interactive visual fraction strips and pie slices to build equivalent fractions and compare quantities hands-on.',
          url: 'https://phet.colorado.edu/sims/html/build-a-fraction/latest/build-a-fraction_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'Which fraction visual made it easiest for you to see when two fractions are equal?',
          requiresParentPin: false,
        },
        {
          id: 'g4-math-exp-phet-area',
          title: 'PhET Simulation: Area Model Multiplication',
          type: 'simulation',
          description:
            'Adjust length and width sliders on a colorful grid to see how partial products combine into total multiplication areas.',
          url: 'https://phet.colorado.edu/sims/html/area-model-multiplication/latest/area-model-multiplication_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'How does splitting 24 into 20 and 4 help you multiply faster in your head?',
          requiresParentPin: false,
        },
        {
          id: 'g4-math-exp-geoboard',
          title: 'Math Learning Center: Digital Geoboard',
          type: 'game',
          description:
            'Stretch virtual rubber bands across pegs to construct quadrilaterals, right triangles, and lines of symmetry.',
          url: 'https://apps.mathlearningcenter.org/geoboard/',
          estimatedMinutes: 15,
          materials: ['Tablet or computer with web browser'],
          reflectionPrompt: 'Can you create an octagon with four lines of symmetry on your geoboard?',
          requiresParentPin: false,
        },
        {
          id: 'g4-math-exp-kitchen-bake',
          title: 'Kitchen Math Project: Scaling a Cookie Recipe',
          type: 'project',
          description:
            'Take a real family cookie recipe (e.g. 1/2 cup sugar, 3/4 cup flour) and calculate how much of each ingredient you need to double or triple it.',
          estimatedMinutes: 30,
          materials: ['A favorite recipe card', 'Pencil and paper', 'Measuring cups and spoons (optional)'],
          steps: [
            'Pick a recipe that includes at least three fractional ingredient quantities.',
            'Multiply each fraction by 2 to compute a double batch.',
            'Multiply each fraction by 3 to compute a triple batch.',
            'Write down the new grocery shopping list.',
          ],
          reflectionPrompt: 'What was the trickiest fraction to triple in your recipe?',
          requiresParentPin: false,
        },
      ],
    },

    // UNIT 15: Teacher Resources & Pacing
    {
      id: 'g4-math-u15',
      title: 'Unit 15: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['4.OA', '4.NBT', '4.NF', '4.MD', '4.G'],
      lessons: [],
      resources: [
        {
          id: 'g4-math-res-pacing',
          title: 'Grade 4 Mathematics 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Recommended week-by-week schedule covering all 13 core units, review blocks, and quarterly assessments.',
          body: `## Grade 4 Math Pacing Guide (36 Weeks)

- **Weeks 1–3**: Unit 1 — Place Value & Rounding (4.NBT.1-3)
- **Weeks 4–6**: Unit 2 — Multi-Digit Addition & Subtraction (4.NBT.4)
- **Weeks 7–9**: Unit 3 — Multiply by 1-Digit Numbers (4.NBT.5)
- **Weeks 10–12**: Unit 4 — Multiply by 2-Digit Numbers (4.NBT.5)
- **Week 13**: Quarter 1 Review & Diagnostic Check
- **Weeks 14–16**: Unit 5 — Division with Remainders (4.NBT.6)
- **Weeks 17–19**: Unit 6 — Factors, Multiples & Patterns (4.OA.4-5)
- **Weeks 20–22**: Unit 7 — Equivalent Fractions & Comparing (4.NF.1-2)
- **Weeks 23–25**: Unit 8 — Add & Subtract Fractions (4.NF.3)
- **Week 26**: Quarter 2 & 3 Fraction Review
- **Weeks 27–28**: Unit 9 — Multiply Fractions by Whole Numbers (4.NF.4)
- **Weeks 29–31**: Unit 10 — Understand Decimals (4.NF.5-7)
- **Weeks 32–33**: Unit 11 — Plane Figures & Symmetry (4.G.1-3)
- **Weeks 34–35**: Unit 12 & 13 — Measuring Angles, Area & Perimeter (4.MD.1-7)
- **Week 36**: End-of-Year Cumulative Capstone & Simulations`,
        },
        {
          id: 'g4-math-res-standards',
          title: 'Grade 4 Common Core & Ohio Standards Crosswalk',
          kind: 'standards_map',
          description:
            'Detailed alignment between Home-School-Lite Grade 4 units and Ohio State Learning Standards.',
          body: `| Unit | CCSS / Ohio Standard | Key Competency |
|---|---|---|
| Unit 1 | 4.NBT.A.1-3 | Place value patterns, word/expanded forms, rounding to 1,000 |
| Unit 2 | 4.NBT.B.4 | Standard addition and subtraction algorithms with regrouping |
| Unit 3 | 4.NBT.B.5 | 1-digit multiplication with area models and partial products |
| Unit 4 | 4.NBT.B.5 | 2-digit multiplication algorithms |
| Unit 5 | 4.NBT.B.6 | Multi-digit division with quotients and remainders |
| Unit 6 | 4.OA.B.4 | Prime vs composite, factors, multiples |
| Unit 7 | 4.NF.A.1-2 | Visual fraction equivalence, comparing fractions |
| Unit 8 | 4.NF.B.3 | Adding and subtracting like fractions and mixed numbers |
| Unit 9 | 4.NF.B.4 | Whole number multiplied by fraction |
| Unit 10 | 4.NF.C.5-7 | Tenths, hundredths, decimal comparison |
| Unit 11 | 4.G.A.1-3 | Lines, angles, symmetry lines, 2D shape taxonomy |
| Unit 12 | 4.MD.C.5-7 | Measuring angles with protractors, additive angle problems |
| Unit 13 | 4.MD.A.1-3 | Customary/metric unit conversions, area and perimeter |`,
        },
        {
          id: 'g4-math-res-formulas',
          title: 'Grade 4 Reference Sheet: Formulas & Conversions',
          kind: 'printable',
          description: 'Printable reference cheat-sheet for students covering formulas and units.',
          body: `## Grade 4 Formula Reference

### Area & Perimeter
- **Perimeter of Rectangle**: P = 2 × (L + W) or P = 2L + 2W
- **Area of Rectangle**: A = L × W

### Measurement Conversions
- **Length**: 1 foot = 12 inches | 1 yard = 3 feet = 36 inches | 1 mile = 5,280 feet
- **Metric Length**: 1 meter = 100 cm | 1 kilometer = 1,000 meters
- **Weight**: 1 pound = 16 ounces | 1 ton = 2,000 pounds
- **Metric Mass**: 1 kilogram = 1,000 grams
- **Time**: 1 hour = 60 minutes | 1 minute = 60 seconds | 1 day = 24 hours

### Angles
- Right Angle = 90°
- Straight Angle = 180°
- Full Turn = 360°`,
        },
      ],
    },
  ],
}
