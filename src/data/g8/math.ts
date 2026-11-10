import { Course } from '../../types'

export const G8_MATH_COURSE: Course = {
  id: 'g8-math',
  subject: 'math',
  grade: 8,
  title: 'Grade 8 Mathematics',
  subtitle: 'Pre-Algebra, Linear Equations, Functions, Pythagorean Geometry & Data',
  credits: 1.0,
  color: '#1e40af',
  icon: '📈',
  units: [
    // UNIT 1: Exponents, Roots & Scientific Notation
    {
      id: 'g8-math-u1',
      title: 'Unit 1: Exponents, Roots & Scientific Notation',
      standards: ['8.EE.A.1', '8.EE.A.2', '8.EE.A.3'],
      lessons: [
        {
          id: 'g8-math-u1-l1',
          unitId: 'g8-math-u1',
          title: 'Lesson 1: Exponent Product & Power Rules',
          kind: 'lesson',
          partOf: 'Exponent Rules',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exponent-properties/v/exponent-rules-part-1',
          videoTitle: 'Khan Academy: Exponent Properties (Product & Power Rules)',
          reading:
            'When multiplying powers with matching bases, add the exponents: x^a · x^b = x^(a+b). When raising a power to a power, multiply the exponents: (x^a)^b = x^(a·b).',
          principles: [
            {
              id: 'p-g8-exp-product',
              title: 'Multiplying Powers with the Same Base',
              standard: '8.EE.A.1',
              summary: 'Add exponents when multiplying powers with the same base: x^a · x^b = x^(a+b).',
              generatorId: 'g8.exponent-product',
            },
            {
              id: 'p-g8-exp-power',
              title: 'Power of a Power Rule',
              standard: '8.EE.A.1',
              summary: 'Multiply exponents when raising a power to another power: (x^a)^b = x^(a·b).',
              generatorId: 'g8.exponent-power',
            },
          ],
        },
        {
          id: 'g8-math-u1-l2',
          unitId: 'g8-math-u1',
          title: 'Lesson 2: Scientific Notation for Large & Small Numbers',
          kind: 'lesson',
          partOf: 'Scientific Notation',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation/v/scientific-notation-intro',
          videoTitle: 'Khan Academy: Intro to Scientific Notation',
          reading:
            'Scientific notation expresses numbers as a × 10^n where 1 ≤ a < 10. Move the decimal point so one non-zero digit is on the left; count the moves for power n.',
          principles: [
            {
              id: 'p-g8-sci-not',
              title: 'Writing Numbers in Scientific Notation',
              standard: '8.EE.A.3',
              summary: 'Place decimal after the first non-zero digit and record places shifted as power of 10.',
              generatorId: 'g8.sci-notation',
            },
          ],
        },
        {
          id: 'g8-math-u1-l3',
          unitId: 'g8-math-u1',
          title: 'Lesson 3: Square Roots & Cube Roots of Integers',
          kind: 'lesson',
          partOf: 'Roots & Radicals',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-roots/v/understanding-square-roots',
          videoTitle: 'Khan Academy: Square Roots of Perfect Squares',
          reading:
            'The principal square root √n finds the positive factor that multiplies by itself to equal n. For example, √49 = 7 because 7 × 7 = 49.',
          principles: [
            {
              id: 'p-g8-sqrt',
              title: 'Evaluating Square Roots of Perfect Squares',
              standard: '8.EE.A.2',
              summary: 'Identify the positive factor that squares to equal the radicand.',
              generatorId: 'g8.square-cube-roots',
            },
          ],
        },
        {
          id: 'g8-math-u1-l4',
          unitId: 'g8-math-u1',
          title: 'Lesson 4: Unit 1 Checkpoint Review: Exponents & Roots',
          kind: 'lesson_review',
          partOf: 'Exponents Checkpoint',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/v/exponent-properties-review',
          videoTitle: 'Khan Academy: Exponent and Radical Operations Review',
          reading:
            'Synthesize exponent properties, scientific notation conversions, and root calculations across multi-step numeric expressions.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-exp-product',
              title: 'Multiplying Powers with the Same Base',
              standard: '8.EE.A.1',
              summary: 'Add exponents when multiplying powers with matching bases.',
              generatorId: 'g8.exponent-product',
            },
            {
              id: 'p-g8-sci-not',
              title: 'Writing Numbers in Scientific Notation',
              standard: '8.EE.A.3',
              summary: 'Express numeric values in standard scientific notation format.',
              generatorId: 'g8.sci-notation',
            },
            {
              id: 'p-g8-sqrt',
              title: 'Evaluating Square Roots of Perfect Squares',
              standard: '8.EE.A.2',
              summary: 'Evaluate square roots of perfect square integers.',
              generatorId: 'g8.square-cube-roots',
            },
          ],
        },
      ],
    },

    // UNIT 2: Proportions, Slope & Linear Equations
    {
      id: 'g8-math-u2',
      title: 'Unit 2: Proportions, Slope & Linear Equations',
      standards: ['8.EE.B.5', '8.EE.B.6'],
      lessons: [
        {
          id: 'g8-math-u2-l1',
          unitId: 'g8-math-u2',
          title: 'Lesson 1: Finding Slope from Two Coordinate Points',
          kind: 'lesson',
          partOf: 'Slope & Rates',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-slope/v/slope-of-a-line',
          videoTitle: 'Khan Academy: Finding the Slope of a Line',
          reading:
            'Slope (m) measures vertical change divided by horizontal change: m = (y₂ - y₁) ÷ (x₂ - x₁). A positive slope rises from left to right.',
          principles: [
            {
              id: 'p-g8-slope-pts',
              title: 'Finding Slope from Two Coordinate Points',
              standard: '8.EE.B.6',
              summary: 'Compute m = (y₂ - y₁) ÷ (x₂ - x₁) to calculate constant rate of change.',
              generatorId: 'g8.slope-two-points',
            },
          ],
        },
        {
          id: 'g8-math-u2-l2',
          unitId: 'g8-math-u2',
          title: 'Lesson 2: Slope-Intercept Form y = mx + b',
          kind: 'lesson',
          partOf: 'Slope-Intercept Form',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-slope-intercept-form/v/slope-intercept-form',
          videoTitle: 'Khan Academy: Slope-Intercept Form y = mx + b',
          reading:
            'In y = mx + b, m represents the slope (rate of change) and b represents the y-intercept (the point (0, b) where the line crosses the y-axis).',
          principles: [
            {
              id: 'p-g8-slope-int',
              title: 'Identifying Slope & Y-Intercept in y = mx + b',
              standard: '8.EE.B.6',
              summary: 'Extract slope m and y-intercept b directly from linear equations.',
              generatorId: 'g8.slope-intercept',
            },
          ],
        },
        {
          id: 'g8-math-u2-l3',
          unitId: 'g8-math-u2',
          title: 'Lesson 3: Unit 2 Checkpoint Review: Slope & Lines',
          kind: 'lesson_review',
          partOf: 'Slope Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/v/linear-equations-review',
          videoTitle: 'Khan Academy: Linear Equations and Slope Review',
          reading:
            'Review slope calculations between points, table interpretations, and converting verbal scenarios into slope-intercept form equations.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-slope-pts',
              title: 'Finding Slope from Two Coordinate Points',
              standard: '8.EE.B.6',
              summary: 'Find the slope between two distinct points.',
              generatorId: 'g8.slope-two-points',
            },
            {
              id: 'p-g8-slope-int',
              title: 'Identifying Slope & Y-Intercept in y = mx + b',
              standard: '8.EE.B.6',
              summary: 'Read slope and y-intercept from linear equations.',
              generatorId: 'g8.slope-intercept',
            },
          ],
        },
      ],
    },

    // UNIT 3: Multi-Step Equations & Systems of Linear Equations
    {
      id: 'g8-math-u3',
      title: 'Unit 3: Multi-Step Equations & Linear Systems',
      standards: ['8.EE.C.7', '8.EE.C.8'],
      lessons: [
        {
          id: 'g8-math-u3-l1',
          unitId: 'g8-math-u3',
          title: 'Lesson 1: Multi-Step Equations with Variables on Both Sides',
          kind: 'lesson',
          partOf: 'Multi-Step Equations',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/cc-8th-linear-equations/v/equations-3',
          videoTitle: 'Khan Academy: Equations with Variables on Both Sides',
          reading:
            'To solve ax + b = cx + d, collect variable terms on one side by inverse operations, collect constant terms on the other side, and divide by the coefficient.',
          principles: [
            {
              id: 'p-g8-multi-eq',
              title: 'Solving Equations with Variables on Both Sides',
              standard: '8.EE.C.7',
              summary: 'Isolate variables on one side and constants on the other.',
              generatorId: 'g8.multi-step-eq',
            },
          ],
        },
        {
          id: 'g8-math-u3-l2',
          unitId: 'g8-math-u3',
          title: 'Lesson 2: Systems of Linear Equations by Substitution',
          kind: 'lesson',
          partOf: 'Linear Systems',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-overview/v/solving-linear-systems-by-substitution',
          videoTitle: 'Khan Academy: Systems of Equations by Substitution',
          reading:
            'A system of linear equations consists of two lines. When substituting an expression into the second equation, solve for one variable and back-substitute to find (x, y).',
          principles: [
            {
              id: 'p-g8-systems',
              title: 'Solving Systems of Linear Equations by Substitution',
              standard: '8.EE.C.8',
              summary: 'Find the ordered pair (x, y) that satisfies both linear equations simultaneously.',
              generatorId: 'g8.systems-linear',
            },
          ],
        },
        {
          id: 'g8-math-u3-l3',
          unitId: 'g8-math-u3',
          title: 'Lesson 3: Unit 3 Checkpoint Review: Equations & Systems',
          kind: 'lesson_review',
          partOf: 'Systems Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/v/systems-of-equations-review',
          videoTitle: 'Khan Academy: Systems of Equations Review',
          reading:
            'Practice solving complex multi-step linear equations and verifying intersection points for pairs of linear lines.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-multi-eq',
              title: 'Solving Equations with Variables on Both Sides',
              standard: '8.EE.C.7',
              summary: 'Solve multi-step linear equations.',
              generatorId: 'g8.multi-step-eq',
            },
            {
              id: 'p-g8-systems',
              title: 'Solving Systems of Linear Equations by Substitution',
              standard: '8.EE.C.8',
              summary: 'Find coordinates where two linear equations intersect.',
              generatorId: 'g8.systems-linear',
            },
          ],
        },
      ],
    },

    // UNIT 4: Introduction to Functions & Rate of Change
    {
      id: 'g8-math-u4',
      title: 'Unit 4: Functions & Rate of Change',
      standards: ['8.F.A.1', '8.F.A.2', '8.F.A.3'],
      lessons: [
        {
          id: 'g8-math-u4-l1',
          unitId: 'g8-math-u4',
          title: 'Lesson 1: Defining Functions, Inputs & Outputs',
          kind: 'lesson',
          partOf: 'Function Basics',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-function-intro/v/what-is-a-function',
          videoTitle: 'Khan Academy: What is a Function?',
          reading:
            'A function is a rule that assigns exactly one output y to each input x. If an input x corresponds to more than one output, the relation is not a function.',
          principles: [
            {
              id: 'p-g8-func-rate',
              title: 'Evaluating Linear Function Rules f(x) = mx + b',
              standard: '8.F.A.2',
              summary: 'Substitute input value x into function f(x) to compute output y.',
              generatorId: 'g8.functions-rate',
            },
          ],
        },
        {
          id: 'g8-math-u4-l2',
          unitId: 'g8-math-u4',
          title: 'Lesson 2: Comparing Rates of Change Across Representations',
          kind: 'lesson',
          partOf: 'Rate of Change',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-function-intro/v/comparing-features-of-functions-1',
          videoTitle: 'Khan Academy: Comparing Functions in Graphs and Tables',
          reading:
            'Compare two linear functions expressed algebraically, graphically, or numerically in tables by calculating and comparing their respective slopes (rates of change).',
          principles: [
            {
              id: 'p-g8-func-rate',
              title: 'Evaluating Linear Function Rules f(x) = mx + b',
              standard: '8.F.A.2',
              summary: 'Evaluate and compare linear rates of change.',
              generatorId: 'g8.functions-rate',
            },
          ],
        },
        {
          id: 'g8-math-u4-l3',
          unitId: 'g8-math-u4',
          title: 'Lesson 3: Unit 4 Checkpoint Review: Functions',
          kind: 'lesson_review',
          partOf: 'Functions Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/v/linear-functions-review',
          videoTitle: 'Khan Academy: Functions Mastery Checkpoint',
          reading:
            'Review function mapping, input-output evaluation, linear function identification, and interpreting initial values in real-world contexts.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-func-rate',
              title: 'Evaluating Linear Function Rules f(x) = mx + b',
              standard: '8.F.A.2',
              summary: 'Calculate output values using linear function rules.',
              generatorId: 'g8.functions-rate',
            },
          ],
        },
      ],
    },

    // UNIT 5: Geometry: The Pythagorean Theorem
    {
      id: 'g8-math-u5',
      title: 'Unit 5: Geometry: The Pythagorean Theorem',
      standards: ['8.G.B.6', '8.G.B.7', '8.G.B.8'],
      lessons: [
        {
          id: 'g8-math-u5-l1',
          unitId: 'g8-math-u5',
          title: 'Lesson 1: Finding the Hypotenuse with a² + b² = c²',
          kind: 'lesson',
          partOf: 'Pythagorean Hypotenuse',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/the-pythagorean-theorem',
          videoTitle: 'Khan Academy: Intro to the Pythagorean Theorem',
          reading:
            'In any right triangle, the sum of the squares of the legs equals the square of the hypotenuse: a² + b² = c². Solve for hypotenuse c = √(a² + b²).',
          principles: [
            {
              id: 'p-g8-pyth-hyp',
              title: 'Finding the Hypotenuse with a² + b² = c²',
              standard: '8.G.B.7',
              summary: 'Square both legs, sum them, and take the square root to calculate hypotenuse c.',
              generatorId: 'g8.pythagorean-hyp',
            },
          ],
        },
        {
          id: 'g8-math-u5-l2',
          unitId: 'g8-math-u5',
          title: 'Lesson 2: Finding a Missing Leg with b² = c² - a²',
          kind: 'lesson',
          partOf: 'Pythagorean Leg',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/pythagorean-theorem-find-leg',
          videoTitle: 'Khan Academy: Finding a Missing Leg in Right Triangles',
          reading:
            'When given the hypotenuse c and one leg a, subtract the square of leg a from c² to find the missing leg: b = √(c² - a²).',
          principles: [
            {
              id: 'p-g8-pyth-leg',
              title: 'Finding a Missing Leg with b² = c² - a²',
              standard: '8.G.B.7',
              summary: 'Subtract the known leg squared from hypotenuse squared to find the missing leg.',
              generatorId: 'g8.pythagorean-leg',
            },
          ],
        },
        {
          id: 'g8-math-u5-l3',
          unitId: 'g8-math-u5',
          title: 'Lesson 3: Unit 5 Checkpoint Review: Pythagorean Applications',
          kind: 'lesson_review',
          partOf: 'Pythagorean Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/v/pythagorean-theorem-review',
          videoTitle: 'Khan Academy: Pythagorean Theorem Applications Review',
          reading:
            'Apply the Pythagorean theorem to calculate hypotenuse lengths, missing leg distances, and diagonal segments on coordinate grids.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-pyth-hyp',
              title: 'Finding the Hypotenuse with a² + b² = c²',
              standard: '8.G.B.7',
              summary: 'Calculate right triangle hypotenuse lengths.',
              generatorId: 'g8.pythagorean-hyp',
            },
            {
              id: 'p-g8-pyth-leg',
              title: 'Finding a Missing Leg with b² = c² - a²',
              standard: '8.G.B.7',
              summary: 'Calculate missing right triangle leg lengths.',
              generatorId: 'g8.pythagorean-leg',
            },
          ],
        },
      ],
    },

    // UNIT 6: Transformations & Congruence
    {
      id: 'g8-math-u6',
      title: 'Unit 6: Geometric Transformations & Congruence',
      standards: ['8.G.A.1', '8.G.A.2', '8.G.A.3'],
      lessons: [
        {
          id: 'g8-math-u6-l1',
          unitId: 'g8-math-u6',
          title: 'Lesson 1: Coordinate Plane Translations',
          kind: 'lesson',
          partOf: 'Translations',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-transformations/v/translations-on-the-coordinate-plane',
          videoTitle: 'Khan Academy: Translations on the Coordinate Plane',
          reading:
            'A translation slides a figure without changing size or shape. To translate (x, y) by (dx, dy), compute (x + dx, y + dy).',
          principles: [
            {
              id: 'p-g8-trans',
              title: 'Coordinate Plane Translations',
              standard: '8.G.A.1',
              summary: 'Shift coordinates horizontally and vertically by adding displacement vectors.',
              generatorId: 'g8.transformations',
            },
          ],
        },
        {
          id: 'g8-math-u6-l2',
          unitId: 'g8-math-u6',
          title: 'Lesson 2: Reflections Across Coordinate Axes',
          kind: 'lesson',
          partOf: 'Reflections',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-transformations/v/reflecting-points-exercise',
          videoTitle: 'Khan Academy: Reflections Across Axes',
          reading:
            'Reflecting across the x-axis negates the y-coordinate: (x, -y). Reflecting across the y-axis negates the x-coordinate: (-x, y). The transformed figure remains congruent.',
          principles: [
            {
              id: 'p-g8-trans',
              title: 'Coordinate Plane Translations & Reflections',
              standard: '8.G.A.1',
              summary: 'Apply rigid transformations preserving distance and angle measurements.',
              generatorId: 'g8.transformations',
            },
          ],
        },
        {
          id: 'g8-math-u6-l3',
          unitId: 'g8-math-u6',
          title: 'Lesson 3: Unit 6 Checkpoint Review: Transformations',
          kind: 'lesson_review',
          partOf: 'Transformations Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/v/rigid-transformations-review',
          videoTitle: 'Khan Academy: Transformations & Congruence Review',
          reading:
            'Review coordinates under translations, reflections, rotations, and verify congruency of image figures.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-trans',
              title: 'Coordinate Plane Transformations',
              standard: '8.G.A.1',
              summary: 'Determine image coordinates following rigid translations and reflections.',
              generatorId: 'g8.transformations',
            },
          ],
        },
      ],
    },

    // UNIT 7: Volume of Cylinders, Cones & Spheres (Ohio Extension)
    {
      id: 'g8-math-u7',
      title: 'Unit 7: Volume of Cylinders, Cones & Spheres',
      standards: ['OH.8.G.C.9'],
      isOhioExtension: true,
      lessons: [
        {
          id: 'g8-math-u7-l1',
          unitId: 'g8-math-u7',
          title: 'Lesson 1: Volume of Cylinders (V = πr²h)',
          kind: 'lesson',
          partOf: 'Cylinder Volume',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/v/cylinder-volume-formula',
          videoTitle: 'Khan Academy: Cylinder Volume Formula',
          reading:
            'A cylinder has a circular base of area πr² and height h. Multiply base area by height to compute 3D volume: V = πr²h cubic units.',
          principles: [
            {
              id: 'p-g8-vol-cyl',
              title: 'Volume of Cylinders (V = πr²h)',
              standard: 'OH.8.G.C.9',
              summary: 'Square the radius r, multiply by height h, and express volume in terms of π.',
              generatorId: 'g8.volume-cylinder-cone',
            },
          ],
        },
        {
          id: 'g8-math-u7-l2',
          unitId: 'g8-math-u7',
          title: 'Lesson 2: Volume of Cones (V = 1/3 πr²h)',
          kind: 'lesson',
          partOf: 'Cone Volume',
          isOhioExtension: true,
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/v/volume-cone-example',
          videoTitle: 'Khan Academy: Volume of a Cone',
          reading:
            'A cone with the same base radius and height holds exactly one-third the volume of a cylinder: V = 1/3 πr²h cubic units.',
          principles: [
            {
              id: 'p-g8-vol-cone',
              title: 'Volume of Cones & Cylinders',
              standard: 'OH.8.G.C.9',
              summary: 'Calculate cone and cylinder volume using circular base formulas.',
              generatorId: 'g8.volume-cylinder-cone',
            },
          ],
        },
        {
          id: 'g8-math-u7-l3',
          unitId: 'g8-math-u7',
          title: 'Lesson 3: Unit 7 Checkpoint Review: 3D Solids',
          kind: 'lesson_review',
          partOf: 'Volume Review',
          isOhioExtension: true,
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/v/volume-review',
          videoTitle: 'Khan Academy: Volume of 3D Figures Review',
          reading:
            'Calculate volume across cylinders, cones, and composite spherical geometric solids using radius and height measurements.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-vol-cyl',
              title: 'Volume of Cylinders & Cones',
              standard: 'OH.8.G.C.9',
              summary: 'Compute solid volume using geometric formulas.',
              generatorId: 'g8.volume-cylinder-cone',
            },
          ],
        },
      ],
    },

    // UNIT 8: Bivariate Data, Scatter Plots & Association
    {
      id: 'g8-math-u8',
      title: 'Unit 8: Bivariate Data, Scatter Plots & Association',
      standards: ['8.SP.A.1', '8.SP.A.2'],
      lessons: [
        {
          id: 'g8-math-u8-l1',
          unitId: 'g8-math-u8',
          title: 'Lesson 1: Scatter Plots & Linear Association',
          kind: 'lesson',
          partOf: 'Scatter Plots',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-scatter-plots-topic/v/constructing-scatter-plot',
          videoTitle: 'Khan Academy: Constructing and Interpreting Scatter Plots',
          reading:
            'Scatter plots show paired numerical data. A positive association means both variables increase together; a negative association means one variable decreases as the other increases.',
          principles: [
            {
              id: 'p-g8-slope-pts',
              title: 'Interpreting Rate of Change in Bivariate Data',
              standard: '8.SP.A.1',
              summary: 'Evaluate association and trend line slope in scatter plot data.',
              generatorId: 'g8.slope-two-points',
            },
          ],
        },
        {
          id: 'g8-math-u8-l2',
          unitId: 'g8-math-u8',
          title: 'Lesson 2: Trend Lines & Linear Modeling',
          kind: 'lesson',
          partOf: 'Trend Lines',
          estimatedMinutes: 10,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-scatter-plots-topic/v/fitting-line-to-data',
          videoTitle: 'Khan Academy: Fitting a Line to Data',
          reading:
            'A line of best fit models linear data trends. Use the slope and y-intercept of the trend line to make predictions for unmeasured data values.',
          principles: [
            {
              id: 'p-g8-slope-int',
              title: 'Linear Trend Line Modeling',
              standard: '8.SP.A.2',
              summary: 'Use slope-intercept equations of best fit lines to predict outcomes.',
              generatorId: 'g8.slope-intercept',
            },
          ],
        },
        {
          id: 'g8-math-u8-l3',
          unitId: 'g8-math-u8',
          title: 'Lesson 3: Unit 8 Checkpoint Review: Bivariate Statistics',
          kind: 'lesson_review',
          partOf: 'Statistics Review',
          estimatedMinutes: 12,
          videoUrl:
            'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/v/scatter-plots-review',
          videoTitle: 'Khan Academy: Bivariate Data and Statistics Review',
          reading:
            'Examine scatter plot clusters, identify outliers, estimate lines of best fit, and compute rates of change from trend lines.',
          questionCount: 6,
          principles: [
            {
              id: 'p-g8-slope-pts',
              title: 'Rate of Change in Scatter Plots',
              standard: '8.SP.A.1',
              summary: 'Interpret rate of change from scatter plot lines.',
              generatorId: 'g8.slope-two-points',
            },
            {
              id: 'p-g8-slope-int',
              title: 'Slope-Intercept Trend Models',
              standard: '8.SP.A.2',
              summary: 'Evaluate linear prediction models.',
              generatorId: 'g8.slope-intercept',
            },
          ],
        },
      ],
    },

    // UNIT 9: Explore Mathematics Through Interactive Simulations
    {
      id: 'g8-math-u9',
      title: 'Unit 9: Explore Mathematics Through Interactive Simulations',
      kind: 'explore',
      standards: ['8.EE.Explore', '8.G.Explore'],
      lessons: [],
      exploreItems: [
        {
          id: 'g8-math-exp-phet-functions',
          title: 'PhET Function Builder: Linear Patterns & Tables',
          type: 'simulation',
          description:
            'Construct custom input-output machines, build mystery function rules, and see equations mapped in real time.',
          url: 'https://phet.colorado.edu/en/simulations/function-builder',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'How does altering the multiplier compare to altering the adder inside your function machine?',
        },
        {
          id: 'g8-math-exp-desmos-systems',
          title: 'Desmos Interactive Grapher: Systems of Linear Equations',
          type: 'simulation',
          description:
            'Adjust sliders for slope (m) and intercept (b) to visually observe when two lines intersect, are parallel, or coincide.',
          url: 'https://www.desmos.com/calculator',
          estimatedMinutes: 20,
          requiresParentPin: true,
          reflectionPrompt: 'Under what specific conditions do two lines produce no solution or infinitely many solutions?',
        },
        {
          id: 'g8-math-exp-pythagoras-wheel',
          title: 'Pythagorean Theorem Geometric Puzzle Lab',
          type: 'hands_on',
          description:
            'Cut out squares along right triangle legs a and b, then rearrange the pieces to prove they perfectly cover square c².',
          estimatedMinutes: 25,
          requiresParentPin: false,
          materials: ['Grid paper', 'Scissors', 'Ruler', 'Colored pencils'],
          reflectionPrompt: 'Why does a² + b² = c² hold true for every right triangle regardless of size?',
        },
        {
          id: 'g8-math-exp-cylinder-cone',
          title: '3D Cylinder & Cone Water Volume Experiment',
          type: 'experiment',
          description:
            'Use equal-diameter cylinders and cones to verify experimentally that exactly 3 filled cones fill 1 matching cylinder.',
          estimatedMinutes: 20,
          requiresParentPin: false,
          materials: ['Measuring cup or funnel', 'Water or dry rice', 'Matching cylinder and cone containers'],
          reflectionPrompt: 'How does the 1/3 factor in the cone volume formula show up in your physical pouring trial?',
        },
      ],
    },

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g8-math-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['OH.8.Math', 'CCSS.8.Math'],
      lessons: [],
      resources: [
        {
          id: 'g8-math-res-pacing',
          title: 'Grade 8 Mathematics 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Full-year curriculum sequence coordinating Pre-Algebra, linear systems, functions, Pythagorean geometry, and data.',
          body: `## Grade 8 Mathematics Pacing Guide (36 Weeks)

- **Weeks 1–5**: Unit 1 — Exponents, Roots & Scientific Notation (8.EE.1-3)
- **Weeks 6–10**: Unit 2 — Proportions, Slope & Linear Equations (8.EE.5-6)
- **Week 11**: Quarter 1 Linear Foundations Assessment
- **Weeks 12–16**: Unit 3 — Multi-Step Equations & Linear Systems (8.EE.7-8)
- **Weeks 17–21**: Unit 4 — Functions & Rate of Change (8.F.1-3)
- **Week 22**: Quarter 2 Functions and Systems Checkpoint
- **Weeks 23–27**: Unit 5 — Geometry: The Pythagorean Theorem (8.G.6-8)
- **Weeks 28–31**: Unit 6 — Geometric Transformations & Congruence (8.G.1-3)
- **Weeks 32–34**: Unit 7 — Volume of Cylinders, Cones & Spheres (OH.8.G.C.9)
- **Weeks 35–36**: Unit 8 — Bivariate Data & Capstone Desmos Portfolio Projects`,
        },
        {
          id: 'g8-math-res-standards',
          title: 'Grade 8 Ohio & Common Core Mathematics Crosswalk',
          kind: 'standards_map',
          description:
            'Standards alignment crosswalk connecting Home-School-Lite units to Ohio Grade 8 Mathematics standards.',
          body: `| Unit | Ohio Standard | Mathematical Focus |
|---|---|---|
| Unit 1 | 8.EE.1, 2, 3 | Exponent rules, square/cube roots, scientific notation format |
| Unit 2 | 8.EE.5, 6 | Slope m = rise/run, slope-intercept form y = mx + b |
| Unit 3 | 8.EE.7, 8 | Multi-step equations, substitution systems of equations |
| Unit 4 | 8.F.1, 2, 3 | Function definitions, linear input-output tables, rate comparison |
| Unit 5 | 8.G.6, 7, 8 | Pythagorean theorem a² + b² = c², coordinate hypotenuse distance |
| Unit 6 | 8.G.1, 2, 3 | Rigid translations, reflections across axes, congruent images |
| Unit 7 | OH.8.G.C.9 | Cylinder and cone volume formulas in terms of π |
| Unit 8 | 8.SP.1, 2 | Scatter plot association, lines of best fit, prediction equations |`,
        },
        {
          id: 'g8-math-res-formula-sheet',
          title: 'Grade 8 Reference Sheet: Formulas & Properties',
          kind: 'printable',
          description:
            'Printable reference sheet with exponent laws, slope formulas, Pythagorean theorem, and 3D volume equations.',
          body: `## Grade 8 Mathematics Quick Reference Sheet

### Exponent Properties
- **Product Rule**: x^a · x^b = x^(a+b)
- **Power Rule**: (x^a)^b = x^(a·b)
- **Scientific Notation**: a × 10^n (1 ≤ a < 10)

### Linear Equations & Functions
- **Slope**: m = (y₂ - y₁) / (x₂ - x₁)
- **Slope-Intercept**: y = mx + b (m = slope, b = y-intercept)

### Geometry & Measurement
- **Pythagorean Theorem**: a² + b² = c² (c = √(a² + b²), b = √(c² - a²))
- **Cylinder Volume**: V = πr²h
- **Cone Volume**: V = (1/3)πr²h`,
        },
      ],
    },
  ],
}
