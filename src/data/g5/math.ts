import { Course } from '../../types'

export const G5_MATH_COURSE: Course = {
  id: 'g5-math',
  subject: 'math',
  grade: 5,
  title: 'Grade 5 Mathematics',
  subtitle: 'Powers of 10, Decimals, Fractions, Volume, Coordinate Plane & Algebraic Thinking',
  credits: 1.0,
  color: '#2563eb',
  icon: '📐',
  units: [
    // UNIT 1: Powers of 10 & Decimal Place Value
    {
      id: 'g5-math-u1',
      title: 'Unit 1: Powers of 10 & Decimal Place Value',
      standards: ['5.NBT.A.1', '5.NBT.A.2', '5.NBT.A.3', '5.NBT.A.4'],
      lessons: [
        {
          id: 'g5-math-u1-l1',
          unitId: 'g5-math-u1',
          title: 'Lesson 1: Multiplying by Powers of 10',
          kind: 'lesson',
          partOf: 'Powers of 10',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-powers-of-10/v/multiplying-by-powers-of-10',
          videoTitle: 'Khan Academy: Multiplying by Powers of 10',
          reading:
            'An exponent on 10 shows how many times 10 is used as a factor. For example, 10² = 100 and 10³ = 1,000. Multiplying shifts digits left by the power of ten.',
          principles: [
            {
              id: 'p-g5-pow10',
              title: 'Multiplying by Powers of 10',
              standard: '5.NBT.A.2',
              summary: 'Use exponents to represent powers of 10 and shift place values accurately.',
              generatorId: 'g5.powers-of-ten',
            },
          ],
        },
        {
          id: 'g5-math-u1-l2',
          unitId: 'g5-math-u1',
          title: 'Lesson 2: Rounding Decimals to Tenths and Hundredths',
          kind: 'lesson',
          partOf: 'Rounding Decimals',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-rounding-decimals/v/rounding-decimals-example',
          videoTitle: 'Khan Academy: Rounding Decimals',
          reading:
            'To round a decimal to the nearest tenth or hundredth, look at the digit to its right. If 5 or more, round up; if 4 or less, round down.',
          principles: [
            {
              id: 'p-g5-dec-round',
              title: 'Rounding Decimals',
              standard: '5.NBT.A.4',
              summary: 'Use place value understanding to round decimals to any place.',
              generatorId: 'g5.decimal-round',
            },
          ],
        },
      ],
    },

    // UNIT 2: Add and subtract decimals
    {
      id: 'g5-math-u2',
      title: 'Unit 2: Adding & Subtracting Decimals',
      standards: ['5.NBT.B.7'],
      lessons: [
        {
          id: 'g5-math-u2-l1',
          unitId: 'g5-math-u2',
          title: 'Lesson 1: Adding Decimals with Vertical Alignment',
          kind: 'lesson',
          partOf: 'Adding Decimals',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-add-and-subtract-decimals/imp-adding-decimals/v/adding-decimals-example-1',
          videoTitle: 'Khan Academy: Adding Decimals',
          reading:
            'When adding decimals, align the decimal points vertically so identical place values add together. Place the decimal point in the sum directly below.',
          principles: [
            {
              id: 'p-g5-dec-add',
              title: 'Adding Decimals',
              standard: '5.NBT.B.7',
              summary: 'Add decimals to hundredths using concrete models or strategies based on place value.',
              generatorId: 'g5.decimal-add-sub',
            },
          ],
        },
        {
          id: 'g5-math-u2-l2',
          unitId: 'g5-math-u2',
          title: 'Lesson 2: Subtracting Decimals & Regrouping',
          kind: 'lesson',
          partOf: 'Subtracting Decimals',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-add-and-subtract-decimals/imp-subtracting-decimals/v/subtracting-decimals-up-to-hundredths',
          videoTitle: 'Khan Academy: Subtracting Decimals',
          reading:
            'Line up decimal points and annex trailing zeros if needed. Regroup across place values just like whole number subtraction.',
          principles: [
            {
              id: 'p-g5-dec-sub',
              title: 'Subtracting Decimals',
              standard: '5.NBT.B.7',
              summary: 'Subtract decimals to hundredths using strategies based on place value.',
              generatorId: 'g5.decimal-add-sub',
            },
          ],
        },
      ],
    },

    // UNIT 3: Multi-Digit Multiplication & 2-Digit Division
    {
      id: 'g5-math-u3',
      title: 'Unit 3: Multi-Digit Multiplication & 2-Digit Division',
      standards: ['5.NBT.B.5', '5.NBT.B.6'],
      lessons: [
        {
          id: 'g5-math-u3-l1',
          unitId: 'g5-math-u3',
          title: 'Lesson 1: Multi-Digit Whole Number Multiplication',
          kind: 'lesson',
          partOf: 'Multiplication',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division/imp-multi-digit-multiplication/v/multiplying-multi-digit-numbers',
          videoTitle: 'Khan Academy: Multi-Digit Multiplication',
          reading:
            'Use the standard algorithm to multiply multi-digit numbers. Multiply by each place value, record partial products with zero placeholders, and sum them.',
          principles: [
            {
              id: 'p-g5-mult-multi',
              title: 'Multi-Digit Multiplication Algorithm',
              standard: '5.NBT.B.5',
              summary: 'Fluently multiply multi-digit whole numbers using the standard algorithm.',
              generatorId: 'g5.mult-multi-digit',
            },
          ],
        },
        {
          id: 'g5-math-u3-l2',
          unitId: 'g5-math-u3',
          title: 'Lesson 2: Dividing by 2-Digit Divisors',
          kind: 'lesson',
          partOf: 'Long Division',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division/imp-multi-digit-division-2/v/dividing-by-2-digits-6250-div-25',
          videoTitle: 'Khan Academy: Dividing by 2-Digit Numbers',
          reading:
            'Estimate how many times the 2-digit divisor fits into leading dividend digits. Multiply, subtract, bring down the next digit, and note any remainder.',
          principles: [
            {
              id: 'p-g5-div-2dig',
              title: 'Division with 2-Digit Divisors',
              standard: '5.NBT.B.6',
              summary: 'Find whole-number quotients of whole numbers with up to four-digit dividends and two-digit divisors.',
              generatorId: 'g5.div-2digit',
            },
          ],
        },
      ],
    },

    // UNIT 4: Add & Subtract Fractions with Unlike Denominators
    {
      id: 'g5-math-u4',
      title: 'Unit 4: Adding & Subtracting Unlike Fractions',
      standards: ['5.NF.A.1', '5.NF.A.2'],
      lessons: [
        {
          id: 'g5-math-u4-l1',
          unitId: 'g5-math-u4',
          title: 'Lesson 1: Finding Common Denominators & Adding',
          kind: 'lesson',
          partOf: 'Adding Unlike Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-adding-and-subtracting-fractions-with-unlike-denominators/v/adding-fractions-with-unlike-denominators',
          videoTitle: 'Khan Academy: Adding Fractions with Unlike Denominators',
          reading:
            'Fractions with different denominators cannot be added directly. Find a common multiple for the denominators, rewrite each fraction, and add the numerators.',
          principles: [
            {
              id: 'p-g5-frac-add-u',
              title: 'Adding Unlike Fractions',
              standard: '5.NF.A.1',
              summary: 'Add fractions with unlike denominators by replacing them with equivalent fractions.',
              generatorId: 'g5.fraction-add-unlike',
            },
          ],
        },
        {
          id: 'g5-math-u4-l2',
          unitId: 'g5-math-u4',
          title: 'Lesson 2: Subtracting Unlike Fractions & Mixed Numbers',
          kind: 'lesson',
          partOf: 'Subtracting Unlike Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-adding-and-subtracting-fractions-with-unlike-denominators/v/subtracting-fractions-with-unlike-denominators',
          videoTitle: 'Khan Academy: Subtracting Fractions with Unlike Denominators',
          reading:
            'Convert unlike fractions to a common denominator before subtracting. If subtracting mixed numbers, regroup 1 whole into fractional units if needed.',
          principles: [
            {
              id: 'p-g5-frac-sub-u',
              title: 'Subtracting Unlike Fractions',
              standard: '5.NF.A.1',
              summary: 'Subtract fractions with unlike denominators by creating common denominators.',
              generatorId: 'g5.fraction-sub-unlike',
            },
          ],
        },
      ],
    },

    // UNIT 5: Multiply Fractions
    {
      id: 'g5-math-u5',
      title: 'Unit 5: Multiplying Fractions & Area Models',
      standards: ['5.NF.B.4', '5.NF.B.5'],
      lessons: [
        {
          id: 'g5-math-u5-l1',
          unitId: 'g5-math-u5',
          title: 'Lesson 1: Multiplying Fractions by Fractions',
          kind: 'lesson',
          partOf: 'Multiplying Fractions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-multiplying-fractions/v/multiplying-fractions',
          videoTitle: 'Khan Academy: Multiplying Fractions',
          reading:
            'To multiply fractions, multiply the numerators together and multiply the denominators together: (a/b) × (c/d) = (a×c)/(b×d). Simplify the final fraction if possible.',
          principles: [
            {
              id: 'p-g5-frac-mult-gen',
              title: 'Multiplying Fractions',
              standard: '5.NF.B.4',
              summary: 'Apply and extend previous understandings of multiplication to multiply a fraction by a fraction.',
              generatorId: 'g5.fraction-mult',
            },
          ],
        },
        {
          id: 'g5-math-u5-l2',
          unitId: 'g5-math-u5',
          title: 'Lesson 2: Fraction Scaling & Word Problems',
          kind: 'lesson',
          partOf: 'Fraction Scaling',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-fraction-multiplication-as-scaling/v/fraction-multiplication-as-scaling',
          videoTitle: 'Khan Academy: Fraction Multiplication as Scaling',
          reading:
            'Multiplying a number by a fraction less than 1 results in a smaller product. Multiplying by a fraction greater than 1 results in a larger product.',
          principles: [
            {
              id: 'p-g5-frac-scale',
              title: 'Fraction Multiplication as Scaling',
              standard: '5.NF.B.5',
              summary: 'Interpret multiplication as scaling (resizing) by comparing product size to factors.',
              generatorId: 'g5.fraction-mult',
            },
          ],
        },
      ],
    },

    // UNIT 6: Divide Fractions
    {
      id: 'g5-math-u6',
      title: 'Unit 6: Dividing Unit Fractions & Whole Numbers',
      standards: ['5.NF.B.7'],
      lessons: [
        {
          id: 'g5-math-u6-l1',
          unitId: 'g5-math-u6',
          title: 'Lesson 1: Dividing Unit Fractions by Whole Numbers',
          kind: 'lesson',
          partOf: 'Unit Fractions Divided by Whole',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-dividing-fractions/v/dividing-a-unit-fraction-by-a-whole-number',
          videoTitle: 'Khan Academy: Dividing Unit Fractions by Whole Numbers',
          reading:
            'Dividing a unit fraction (like 1/3) by a whole number (like 4) shares the piece into smaller parts: (1/3) ÷ 4 = 1/12.',
          principles: [
            {
              id: 'p-g5-frac-div-unit',
              title: 'Dividing Unit Fractions',
              standard: '5.NF.B.7.A',
              summary: 'Interpret division of a unit fraction by a non-zero whole number.',
              generatorId: 'g5.fraction-div-unit',
            },
          ],
        },
        {
          id: 'g5-math-u6-l2',
          unitId: 'g5-math-u6',
          title: 'Lesson 2: Dividing Whole Numbers by Unit Fractions',
          kind: 'lesson',
          partOf: 'Whole Divided by Unit Fraction',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-dividing-fractions/v/dividing-whole-numbers-by-unit-fractions',
          videoTitle: 'Khan Academy: Dividing Whole Numbers by Unit Fractions',
          reading:
            'Dividing a whole number (like 3) by a unit fraction (like 1/4) asks how many fourths are in 3 wholes: 3 ÷ (1/4) = 3 × 4 = 12.',
          principles: [
            {
              id: 'p-g5-frac-div-whole',
              title: 'Dividing Whole Numbers by Unit Fractions',
              standard: '5.NF.B.7.B',
              summary: 'Interpret division of a whole number by a unit fraction.',
              generatorId: 'g5.fraction-div-unit',
            },
          ],
        },
      ],
    },

    // UNIT 7: Multiply Decimals
    {
      id: 'g5-math-u7',
      title: 'Unit 7: Multiplying Decimals',
      standards: ['5.NBT.B.7'],
      lessons: [
        {
          id: 'g5-math-u7-l1',
          unitId: 'g5-math-u7',
          title: 'Lesson 1: Multiplying Decimals by Whole Numbers',
          kind: 'lesson',
          partOf: 'Decimal Multiplication',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multiplying-decimals-2/v/multiplying-decimals-basic',
          videoTitle: 'Khan Academy: Multiplying Decimals',
          reading:
            'Multiply as with whole numbers. Count the total decimal places in both factors, and place the decimal point that many places from the right in the product.',
          principles: [
            {
              id: 'p-g5-dec-mult',
              title: 'Multiplying Decimals',
              standard: '5.NBT.B.7',
              summary: 'Multiply decimals to hundredths using place value understandings.',
              generatorId: 'g5.decimal-mult',
            },
          ],
        },
        {
          id: 'g5-math-u7-l2',
          unitId: 'g5-math-u7',
          title: 'Lesson 2: Multiplying Decimals by Decimals',
          kind: 'lesson',
          partOf: 'Decimal by Decimal',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiplication-and-division-3/imp-multiplying-decimals-2/v/multiplying-decimals-example',
          videoTitle: 'Khan Academy: Multiplying Decimal by Decimal',
          reading:
            'For 0.4 × 0.3, multiply 4 × 3 = 12. Since each factor has 1 decimal place, the product has 2 decimal places: 0.12.',
          principles: [
            {
              id: 'p-g5-dec-mult-dec',
              title: 'Decimal Multiplication Algorithm',
              standard: '5.NBT.B.7',
              summary: 'Apply the standard multiplication algorithm to decimal factors.',
              generatorId: 'g5.decimal-mult',
            },
          ],
        },
      ],
    },

    // UNIT 8: Volume of Rectangular Prisms
    {
      id: 'g5-math-u8',
      title: 'Unit 8: Volume of Rectangular Prisms',
      standards: ['5.MD.C.3', '5.MD.C.4', '5.MD.C.5'],
      lessons: [
        {
          id: 'g5-math-u8-l1',
          unitId: 'g5-math-u8',
          title: 'Lesson 1: Unit Cubes & Volume Formula V = l × w × h',
          kind: 'lesson',
          partOf: 'Volume Concepts',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-volume/v/measuring-volume-with-unit-cubes',
          videoTitle: 'Khan Academy: Measuring Volume with Unit Cubes',
          reading:
            'Volume measures the space inside a 3D solid in cubic units. For a rectangular prism, Volume = length × width × height (or base area × height).',
          principles: [
            {
              id: 'p-g5-vol-prism',
              title: 'Volume of Rectangular Prisms',
              standard: '5.MD.C.5',
              summary: 'Relate volume to the operations of multiplication and addition.',
              generatorId: 'g5.volume-prism',
            },
          ],
        },
        {
          id: 'g5-math-u8-l2',
          unitId: 'g5-math-u8',
          title: 'Lesson 2: Composite Solid Volume Problems',
          kind: 'lesson',
          partOf: 'Composite Solids',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-volume/v/volume-of-composite-figures',
          videoTitle: 'Khan Academy: Volume of Composite Figures',
          reading:
            'To find the volume of an irregular L-shaped block, split it into two non-overlapping rectangular prisms, compute the volume of each, and add them together.',
          principles: [
            {
              id: 'p-g5-vol-comp',
              title: 'Volume of Additive Solids',
              standard: '5.MD.C.5.C',
              summary: 'Recognize volume as additive by finding volumes of solid figures composed of two non-overlapping rectangular prisms.',
              generatorId: 'g5.volume-prism',
            },
          ],
        },
      ],
    },

    // UNIT 9: The Coordinate Plane
    {
      id: 'g5-math-u9',
      title: 'Unit 9: The Coordinate Plane & Ordered Pairs',
      standards: ['5.G.A.1', '5.G.A.2'],
      lessons: [
        {
          id: 'g5-math-u9-l1',
          unitId: 'g5-math-u9',
          title: 'Lesson 1: Axes, Origin & Plotting Points (x, y)',
          kind: 'lesson',
          partOf: 'Coordinate Basics',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-coordinate-plane/v/coordinate-plane-first-quadrant',
          videoTitle: 'Khan Academy: Coordinate Plane First Quadrant',
          reading:
            'The coordinate plane is formed by two perpendicular number lines: the horizontal x-axis and vertical y-axis meeting at origin (0, 0). Ordered pairs (x, y) move right x and up y.',
          principles: [
            {
              id: 'p-g5-coord-plane',
              title: 'Graphing on the Coordinate Plane',
              standard: '5.G.A.1',
              summary: 'Use a pair of perpendicular number lines to define a coordinate system.',
              generatorId: 'g5.coord-plane',
            },
          ],
        },
        {
          id: 'g5-math-u9-l2',
          unitId: 'g5-math-u9',
          title: 'Lesson 2: Real-World Graphing & Number Patterns',
          kind: 'lesson',
          partOf: 'Coordinate Patterns',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-coordinate-plane/v/points-on-a-coordinate-plane',
          videoTitle: 'Khan Academy: Points on a Coordinate Plane',
          reading:
            'Generate numerical patterns using given rules, form ordered pairs from corresponding terms, and graph the points to observe linear trends.',
          principles: [
            {
              id: 'p-g5-coord-word',
              title: 'Real-World Coordinate Graphing',
              standard: '5.G.A.2',
              summary: 'Represent real world and mathematical problems by graphing points in the first quadrant.',
              generatorId: 'g5.coord-plane',
            },
          ],
        },
      ],
    },

    // UNIT 10: Algebraic Thinking & Order of Operations
    {
      id: 'g5-math-u10',
      title: 'Unit 10: Algebraic Thinking & Order of Operations',
      standards: ['5.OA.A.1', '5.OA.A.2'],
      lessons: [
        {
          id: 'g5-math-u10-l1',
          unitId: 'g5-math-u10',
          title: 'Lesson 1: Evaluating Expressions with Parentheses',
          kind: 'lesson',
          partOf: 'Order of Operations',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-order-of-operations/v/introduction-to-order-of-operations',
          videoTitle: 'Khan Academy: Intro to Order of Operations',
          reading:
            'Follow PEMDAS: Evaluate expressions inside parentheses first, then multiply or divide from left to right, and finally add or subtract from left to right.',
          principles: [
            {
              id: 'p-g5-order-ops',
              title: 'Order of Operations',
              standard: '5.OA.A.1',
              summary: 'Use parentheses, brackets, or braces in numerical expressions, and evaluate expressions.',
              generatorId: 'g5.order-of-ops',
            },
          ],
        },
        {
          id: 'g5-math-u10-l2',
          unitId: 'g5-math-u10',
          title: 'Lesson 2: Writing & Interpreting Numerical Expressions',
          kind: 'lesson',
          partOf: 'Numerical Expressions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-writing-expressions/v/writing-expressions-with-variables',
          videoTitle: 'Khan Academy: Writing Numerical Expressions',
          reading:
            'Translate verbal descriptions into numbers and operational symbols without calculating them: "add 8 and 7, then multiply by 2" is written 2 × (8 + 7).',
          principles: [
            {
              id: 'p-g5-write-exp',
              title: 'Writing Expressions',
              standard: '5.OA.A.2',
              summary: 'Write simple expressions that record calculations with numbers, and interpret numerical expressions without evaluating them.',
              generatorId: 'g5.order-of-ops',
            },
          ],
        },
      ],
    },

    // UNIT 11: Converting Measurement Units
    {
      id: 'g5-math-u11',
      title: 'Unit 11: Converting Measurement Units',
      standards: ['5.MD.A.1'],
      lessons: [
        {
          id: 'g5-math-u11-l1',
          unitId: 'g5-math-u11',
          title: 'Lesson 1: Customary & Metric Unit Conversions',
          kind: 'lesson',
          partOf: 'Unit Conversions',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-converting-measurement-units/v/converting-units-of-measure',
          videoTitle: 'Khan Academy: Converting Measurement Units',
          reading:
            'Convert like measurement units within a given system: 1 meter = 100 centimeters; 1 foot = 12 inches; 1 pound = 16 ounces. Multiply to convert to smaller units.',
          principles: [
            {
              id: 'p-g5-unit-conv',
              title: 'Measurement Conversions',
              standard: '5.MD.A.1',
              summary: 'Convert among different-sized standard measurement units within a given measurement system.',
              generatorId: 'g5.unit-convert',
            },
          ],
        },
        {
          id: 'g5-math-u11-l2',
          unitId: 'g5-math-u11',
          title: 'Lesson 2: Multi-Step Measurement Word Problems',
          kind: 'lesson',
          partOf: 'Measurement Problems',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-measurement-and-data-3/imp-converting-measurement-units/v/metric-word-problem-example',
          videoTitle: 'Khan Academy: Multi-Step Measurement Problems',
          reading:
            'When solving multi-step word problems involving liquid volumes, lengths, or weights, convert all numbers to the same unit before computing answers.',
          principles: [
            {
              id: 'p-g5-unit-word',
              title: 'Multi-Step Unit Problems',
              standard: '5.MD.A.1',
              summary: 'Use conversions in solving multi-step, real world problems.',
              generatorId: 'g5.unit-convert',
            },
          ],
        },
      ],
    },

    // UNIT 12: Explore Math Through Simulations (enrichment)
    {
      id: 'g5-math-u12',
      title: 'Unit 12: Explore Math Through Simulations & Projects',
      kind: 'explore',
      standards: ['5.NF.A.1', '5.MD.C.5', '5.G.A.1'],
      lessons: [],
      exploreItems: [
        {
          id: 'g5-math-exp-phet-frac-match',
          title: 'PhET Simulation: Fraction Matcher Lab',
          type: 'simulation',
          description:
            'Match shapes and numbers across multi-level challenges to master mixed numbers, unlike denominators, and fraction scaling.',
          url: 'https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'Which level of fraction matching required the most mental regrouping?',
          requiresParentPin: false,
        },
        {
          id: 'g5-math-exp-phet-balance',
          title: 'PhET Simulation: Balancing Act & Proportions',
          type: 'simulation',
          description:
            'Place masses along a balance plank to explore balancing forces, fulcrum distances, and algebraic proportional thinking.',
          url: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'How does moving a 5 kg mass twice as far from the center affect balance?',
          requiresParentPin: false,
        },
        {
          id: 'g5-math-exp-desmos-grid',
          title: 'Desmos Interactive: Coordinate Battleship Game',
          type: 'game',
          description:
            'Plot target coordinates in quadrant 1 to track hidden coordinates and build mastery over (x, y) grid navigation.',
          url: 'https://www.desmos.com/calculator',
          estimatedMinutes: 15,
          reflectionPrompt: 'Why does reversing x and y coordinates land you on completely different grid points?',
          requiresParentPin: false,
        },
        {
          id: 'g5-math-exp-cereal-volume',
          title: 'Kitchen Volume Project: Cereal Box Volume & Surface Area',
          type: 'project',
          description:
            'Measure three empty kitchen food boxes (cereal, pasta, snack) in centimeters. Calculate their volumes and compare which holds the most volume.',
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

    // UNIT 13: Teacher Resources & Pacing
    {
      id: 'g5-math-u13',
      title: 'Unit 13: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['5.OA', '5.NBT', '5.NF', '5.MD', '5.G'],
      lessons: [],
      resources: [
        {
          id: 'g5-math-res-pacing',
          title: 'Grade 5 Mathematics 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Year-long instructional roadmap covering decimals, fractions, volume, coordinates, and algebraic order of operations.',
          body: `## Grade 5 Math Pacing Guide (36 Weeks)

- **Weeks 1–3**: Unit 1 — Powers of 10 & Decimal Place Value (5.NBT.1-4)
- **Weeks 4–6**: Unit 2 — Adding & Subtracting Decimals (5.NBT.7)
- **Weeks 7–10**: Unit 3 — Multi-Digit Multiplication & 2-Digit Division (5.NBT.5-6)
- **Weeks 11–14**: Unit 4 — Adding & Subtracting Unlike Fractions (5.NF.1-2)
- **Week 15**: Quarter 1 Assessment & Diagnostic Review
- **Weeks 16–19**: Unit 5 — Multiplying Fractions & Scaling (5.NF.4-5)
- **Weeks 20–22**: Unit 6 — Dividing Unit Fractions & Whole Numbers (5.NF.7)
- **Weeks 23–25**: Unit 7 — Multiplying Decimals (5.NBT.7)
- **Week 26**: Quarter 2 & 3 Fraction and Decimal Cumulative Review
- **Weeks 27–29**: Unit 8 — Volume of Rectangular Prisms (5.MD.3-5)
- **Weeks 30–31**: Unit 9 — The Coordinate Plane & Graphing (5.G.1-2)
- **Weeks 32–33**: Unit 10 — Algebraic Thinking & Order of Operations (5.OA.1-2)
- **Weeks 34–35**: Unit 11 — Converting Measurement Units (5.MD.1)
- **Week 36**: Year-End Capstone Simulations & Math Portfolio Showcase`,
        },
        {
          id: 'g5-math-res-standards',
          title: 'Grade 5 Common Core & Ohio Standards Crosswalk',
          kind: 'standards_map',
          description:
            'Comprehensive alignment of Grade 5 units to Ohio State Learning Standards for Mathematics.',
          body: `| Unit | Standards | Target Skill |
|---|---|---|
| Unit 1 | 5.NBT.A.1-4 | Exponents of 10, decimal place value shifts, rounding |
| Unit 2 | 5.NBT.B.7 | Decimal addition and subtraction with vertical alignment |
| Unit 3 | 5.NBT.B.5-6 | Multi-digit multiplication, 2-digit long division |
| Unit 4 | 5.NF.A.1-2 | Unlike fraction addition/subtraction via common denominators |
| Unit 5 | 5.NF.B.4-5 | Fraction multiplication algorithms, scaling interpretation |
| Unit 6 | 5.NF.B.7 | Division of unit fractions and whole numbers |
| Unit 7 | 5.NBT.B.7 | Decimal multiplication up to hundredths |
| Unit 8 | 5.MD.C.3-5 | Packing unit cubes, V = l×w×h, additive solid volume |
| Unit 9 | 5.G.A.1-2 | Coordinate plane quadrant 1, ordered pairs, trend lines |
| Unit 10 | 5.OA.A.1-2 | PEMDAS order of operations with parentheses and brackets |
| Unit 11 | 5.MD.A.1 | Customary and metric multi-step unit conversions |`,
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
  ],
}
