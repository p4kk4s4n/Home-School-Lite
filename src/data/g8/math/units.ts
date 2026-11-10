import { Unit, Principle } from '../../../types'
import {
  G8_MATH_IRRATIONAL_BANK,
  G8_MATH_SOLUTIONS_BANK,
  G8_MATH_TRANSFORMATIONS_BANK,
  G8_MATH_ANGLES_BANK,
  G8_MATH_SPHERES_BANK,
  G8_MATH_TABLES_BANK,
} from './banks'

// Principles
const P_G8_EXP_PRODUCT: Principle = {
  id: 'p-g8-exp-product',
  title: 'Multiplying Powers with the Same Base',
  standard: '8.EE.A.1',
  summary: 'Add exponents when multiplying powers with matching bases: x^a · x^b = x^(a+b).',
  generatorId: 'g8.exponent-product',
}

const P_G8_EXP_POWER: Principle = {
  id: 'p-g8-exp-power',
  title: 'Power of a Power Rule',
  standard: '8.EE.A.1',
  summary: 'Multiply exponents when raising a power to another power: (x^a)^b = x^(a·b).',
  generatorId: 'g8.exponent-power',
}

const P_G8_SCI_NOT: Principle = {
  id: 'p-g8-sci-not',
  title: 'Writing Numbers in Scientific Notation',
  standard: '8.EE.A.3',
  summary: 'Place decimal after the first non-zero digit and record places shifted as power of 10.',
  generatorId: 'g8.sci-notation',
}

const P_G8_SQRT: Principle = {
  id: 'p-g8-sqrt',
  title: 'Evaluating Square Roots of Perfect Squares',
  standard: '8.EE.A.2',
  summary: 'Identify the positive factor that squares to equal the radicand.',
  generatorId: 'g8.square-cube-roots',
}

const P_G8_IRRATIONAL: Principle = {
  id: 'p-g8-irrational',
  title: 'Irrational Numbers & Rational Approximations',
  standard: '8.NS.A.1 / 8.NS.A.2',
  summary: 'Irrational numbers have non-terminating, non-repeating decimal expansions and cannot be written as fractions.',
  bank: G8_MATH_IRRATIONAL_BANK,
}

const P_G8_MULTI_EQ: Principle = {
  id: 'p-g8-multi-eq',
  title: 'Solving Multi-Step Equations with Variables on Both Sides',
  standard: '8.EE.C.7',
  summary: 'Collect variable terms on one side and constants on the other using inverse operations.',
  generatorId: 'g8.multi-step-eq',
}

const P_G8_SOLUTIONS: Principle = {
  id: 'p-g8-solutions',
  title: 'Number of Solutions to Linear Equations',
  standard: '8.EE.C.7.a',
  summary: 'Linear equations have one solution, no solution (contradiction), or infinitely many solutions (identity).',
  bank: G8_MATH_SOLUTIONS_BANK,
}

const P_G8_SLOPE_PTS: Principle = {
  id: 'p-g8-slope-pts',
  title: 'Finding Slope from Two Coordinate Points',
  standard: '8.EE.B.6',
  summary: 'Compute m = (y₂ - y₁) ÷ (x₂ - x₁) to calculate constant rate of change.',
  generatorId: 'g8.slope-two-points',
}

const P_G8_SLOPE_INT: Principle = {
  id: 'p-g8-slope-int',
  title: 'Identifying Slope & Y-Intercept in y = mx + b',
  standard: '8.EE.B.6',
  summary: 'Extract slope m and y-intercept b directly from linear equations in slope-intercept form.',
  generatorId: 'g8.slope-intercept',
}

const P_G8_SYSTEMS: Principle = {
  id: 'p-g8-systems',
  title: 'Solving Systems of Linear Equations by Substitution',
  standard: '8.EE.C.8',
  summary: 'Find the ordered pair (x, y) that satisfies both linear equations simultaneously.',
  generatorId: 'g8.systems-linear',
}

const P_G8_FUNC_RATE: Principle = {
  id: 'p-g8-func-rate',
  title: 'Evaluating Linear Function Rules f(x) = mx + b',
  standard: '8.F.A.2',
  summary: 'Substitute input value x into function f(x) to compute unique output y.',
  generatorId: 'g8.functions-rate',
}

const P_G8_TRANS: Principle = {
  id: 'p-g8-trans',
  title: 'Coordinate Plane Translations & Reflections',
  standard: '8.G.A.1 / 8.G.A.3',
  summary: 'Shift coordinates horizontally and vertically or negate coordinates across axes.',
  generatorId: 'g8.transformations',
}

const P_G8_ROT_DIL: Principle = {
  id: 'p-g8-rot-dil',
  title: 'Rotations, Dilations & Congruency Transformations',
  standard: '8.G.A.2 / 8.G.A.3 / 8.G.A.4',
  summary: 'Rotations turn figures around origin; dilations multiply dimensions by scale factors creating similar figures.',
  bank: G8_MATH_TRANSFORMATIONS_BANK,
}

const P_G8_ANGLES: Principle = {
  id: 'p-g8-angles',
  title: 'Transversals, Parallel Lines & Triangle Angles',
  standard: '8.G.A.5',
  summary: 'Parallel lines cut by transversals create equal alternate interior angles; triangle interior angles sum to 180°.',
  bank: G8_MATH_ANGLES_BANK,
}

const P_G8_PYTH_HYP: Principle = {
  id: 'p-g8-pyth-hyp',
  title: 'Finding the Hypotenuse with a² + b² = c²',
  standard: '8.G.B.7',
  summary: 'Square both legs, sum them, and take the square root to calculate hypotenuse c.',
  generatorId: 'g8.pythagorean-hyp',
}

const P_G8_PYTH_LEG: Principle = {
  id: 'p-g8-pyth-leg',
  title: 'Finding a Missing Leg with b² = c² - a²',
  standard: '8.G.B.7',
  summary: 'Subtract the known leg squared from hypotenuse squared to find the missing leg.',
  generatorId: 'g8.pythagorean-leg',
}

const P_G8_VOL_CYL_CONE: Principle = {
  id: 'p-g8-vol-cyl-cone',
  title: 'Volume of Cylinders & Cones',
  standard: 'OH.8.G.C.9',
  summary: 'Calculate cylinder volume V = πr²h and cone volume V = 1/3 πr²h.',
  generatorId: 'g8.volume-cylinder-cone',
}

const P_G8_SPHERES: Principle = {
  id: 'p-g8-spheres',
  title: 'Volume of Spheres & Composite 3D Solids',
  standard: 'OH.8.G.C.9',
  summary: 'Compute sphere volume with V = (4/3)πr³ and analyze composite geometric solids.',
  bank: G8_MATH_SPHERES_BANK,
}

const P_G8_TABLES: Principle = {
  id: 'p-g8-tables',
  title: 'Two-Way Frequency Tables & Bivariate Data Associations',
  standard: '8.SP.A.4',
  summary: 'Summarize categorical bivariate data in two-way tables and calculate relative frequencies.',
  bank: G8_MATH_TABLES_BANK,
}

export const G8_MATH_UNITS: Unit[] = [
  // UNIT 1: Exponents, Roots & Scientific Notation
  {
    id: 'g8-math-u1',
    title: 'Unit 1: Exponents, Roots & Scientific Notation',
    standards: ['8.EE.A.1', '8.EE.A.2', '8.EE.A.3'],
    lessons: [
      {
        id: 'g8-math-u1-l1',
        unitId: 'g8-math-u1',
        title: 'Lesson 1: Exponent Product & Quotient Rules',
        kind: 'lesson',
        partOf: 'Exponent Rules',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exponent-properties/v/exponent-rules-part-1',
        videoTitle: 'Khan Academy: Exponent Properties (Product & Power Rules)',
        reading:
          'When multiplying powers with matching bases, add the exponents: x^a · x^b = x^(a+b). When raising a power to a power, multiply exponents: (x^a)^b = x^(a·b).',
        principles: [P_G8_EXP_PRODUCT],
      },
      {
        id: 'g8-math-u1-l2',
        unitId: 'g8-math-u1',
        title: 'Lesson 2: Power of a Power & Negative Exponents',
        kind: 'lesson',
        partOf: 'Power Rules',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exponent-properties/v/negative-exponents',
        videoTitle: 'Khan Academy: Negative Exponents and Power Rules',
        reading:
          'A base raised to a negative exponent equals its reciprocal with a positive power: x^(-n) = 1 / x^n. Any non-zero base to power zero equals 1.',
        principles: [P_G8_EXP_POWER],
      },
      {
        id: 'g8-math-u1-l3',
        unitId: 'g8-math-u1',
        title: 'Lesson 3: Scientific Notation for Large & Small Numbers',
        kind: 'lesson',
        partOf: 'Scientific Notation',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation/v/scientific-notation-intro',
        videoTitle: 'Khan Academy: Intro to Scientific Notation',
        reading:
          'Scientific notation expresses numbers as a × 10^n where 1 ≤ a < 10. Move decimal point so one non-zero digit is left; count shifts for power n.',
        principles: [P_G8_SCI_NOT],
      },
      {
        id: 'g8-math-u1-l4',
        unitId: 'g8-math-u1',
        title: 'Lesson 4: Square Roots & Cube Roots of Integers',
        kind: 'lesson_review',
        partOf: 'Roots Review',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-roots/v/understanding-square-roots',
        videoTitle: 'Khan Academy: Square Roots of Perfect Squares',
        reading:
          'The principal square root √n finds the positive factor that multiplies by itself to equal n. For example, √49 = 7 because 7 × 7 = 49.',
        principles: [P_G8_SQRT],
      },
    ],
  },

  // UNIT 2: Irrational Numbers & Real Number System
  {
    id: 'g8-math-u2',
    title: 'Unit 2: Irrational Numbers & The Real Number System',
    standards: ['8.NS.A.1', '8.NS.A.2'],
    lessons: [
      {
        id: 'g8-math-u2-l1',
        unitId: 'g8-math-u2',
        title: 'Lesson 1: Rational vs. Irrational Numbers',
        kind: 'lesson',
        partOf: 'Number Classification',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-irrational-numbers/v/introduction-to-rational-and-irrational-numbers',
        videoTitle: 'Khan Academy: Rational and Irrational Numbers',
        reading:
          'Rational numbers can be written as fractions of integers with terminating or repeating decimals. Irrationals have non-terminating, non-repeating decimals.',
        principles: [P_G8_IRRATIONAL],
      },
      {
        id: 'g8-math-u2-l2',
        unitId: 'g8-math-u2',
        title: 'Lesson 2: Approximating Square Roots on Number Lines',
        kind: 'lesson',
        partOf: 'Root Approximations',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-approximating-irrational-numbers/v/approximating-square-roots',
        videoTitle: 'Khan Academy: Approximating Square Roots',
        reading:
          'Locate irrational square roots by bounding them between consecutive perfect squares. For instance, √20 lies between √16 (4) and √25 (5).',
        principles: [P_G8_IRRATIONAL],
      },
      {
        id: 'g8-math-u2-l3',
        unitId: 'g8-math-u2',
        title: 'Lesson 3: Converting Repeating Decimals to Fractions',
        kind: 'lesson',
        partOf: 'Decimal Conversion',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-repeating-decimals/v/converting-repeating-decimals-to-fractions-1',
        videoTitle: 'Khan Academy: Converting Repeating Decimals to Fractions',
        reading:
          'Set x equal to repeating decimal, multiply by 10^k where k is repeating period length, subtract original x, and solve for fractional ratio.',
        principles: [P_G8_IRRATIONAL],
      },
      {
        id: 'g8-math-u2-l4',
        unitId: 'g8-math-u2',
        title: 'Lesson 4: Unit 2 Review & Real Number System Check',
        kind: 'lesson_review',
        partOf: 'Real Numbers Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/v/real-number-system-review',
        videoTitle: 'Khan Academy: Real Number System Review',
        reading:
          'Review distinguishing whole, integer, rational, and irrational classifications, ordering roots on number lines, and decimal conversion strategies.',
        principles: [P_G8_IRRATIONAL],
      },
    ],
  },

  // UNIT 3: Solving Multi-Step Linear Equations
  {
    id: 'g8-math-u3',
    title: 'Unit 3: Solving Multi-Step Linear Equations',
    standards: ['8.EE.C.7'],
    lessons: [
      {
        id: 'g8-math-u3-l1',
        unitId: 'g8-math-u3',
        title: 'Lesson 1: Multi-Step Equations with Distributive Property',
        kind: 'lesson',
        partOf: 'Distributive Equations',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/cc-8th-linear-equations/v/equations-3',
        videoTitle: 'Khan Academy: Multi-Step Linear Equations',
        reading:
          'Clear parentheses with distributive property, combine like terms on each side, and isolate variable using inverse addition/subtraction and multiplication/division.',
        principles: [P_G8_MULTI_EQ],
      },
      {
        id: 'g8-math-u3-l2',
        unitId: 'g8-math-u3',
        title: 'Lesson 2: Equations with Variables on Both Sides',
        kind: 'lesson',
        partOf: 'Variables on Both Sides',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/cc-8th-linear-equations/v/equations-with-variables-on-both-sides',
        videoTitle: 'Khan Academy: Variables on Both Sides',
        reading:
          'To solve ax + b = cx + d, subtract variable cx from both sides, subtract constant b, and divide by the remaining coefficient to find x.',
        principles: [P_G8_MULTI_EQ],
      },
      {
        id: 'g8-math-u3-l3',
        unitId: 'g8-math-u3',
        title: 'Lesson 3: Number of Solutions: One, None, or Infinite',
        kind: 'lesson',
        partOf: 'Equation Solutions',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/cc-8th-number-of-solutions-to-linear-equations/v/number-of-solutions-to-linear-equations',
        videoTitle: 'Khan Academy: Number of Solutions to Linear Equations',
        reading:
          'An equation with x = c has 1 solution. A contradiction (0 = 5) has no solution. An identity (7 = 7) has infinitely many solutions.',
        principles: [P_G8_SOLUTIONS],
      },
      {
        id: 'g8-math-u3-l4',
        unitId: 'g8-math-u3',
        title: 'Lesson 4: Unit 3 Review & Multi-Step Equation Check',
        kind: 'lesson_review',
        partOf: 'Equations Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/v/solving-equations-review',
        videoTitle: 'Khan Academy: Solving Linear Equations Review',
        reading:
          'Synthesize multi-step equation procedures, clearing fractions, collecting terms, and classifying solution counts.',
        principles: [P_G8_MULTI_EQ, P_G8_SOLUTIONS],
      },
    ],
  },

  // UNIT 4: Slope, Rates & Linear Equations
  {
    id: 'g8-math-u4',
    title: 'Unit 4: Slope, Rates of Change & Linear Equations',
    standards: ['8.EE.B.5', '8.EE.B.6'],
    lessons: [
      {
        id: 'g8-math-u4-l1',
        unitId: 'g8-math-u4',
        title: 'Lesson 1: Finding Slope from Two Coordinate Points',
        kind: 'lesson',
        partOf: 'Slope Formula',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-slope/v/slope-of-a-line',
        videoTitle: 'Khan Academy: Finding the Slope of a Line',
        reading:
          'Slope (m) measures vertical change divided by horizontal change: m = (y₂ - y₁) ÷ (x₂ - x₁). A positive slope rises from left to right.',
        principles: [P_G8_SLOPE_PTS],
      },
      {
        id: 'g8-math-u4-l2',
        unitId: 'g8-math-u4',
        title: 'Lesson 2: Slope-Intercept Form y = mx + b',
        kind: 'lesson',
        partOf: 'Slope-Intercept Form',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-slope-intercept-form/v/slope-intercept-form',
        videoTitle: 'Khan Academy: Slope-Intercept Form y = mx + b',
        reading:
          'In y = mx + b, m represents the slope (rate of change) and b represents the y-intercept (the point (0, b) where the line crosses the y-axis).',
        principles: [P_G8_SLOPE_INT],
      },
      {
        id: 'g8-math-u4-l3',
        unitId: 'g8-math-u4',
        title: 'Lesson 3: Graphing Linear Lines & Proportional Relationships',
        kind: 'lesson',
        partOf: 'Graphing Lines',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-graphing-slope-intercept/v/graphing-a-line-in-slope-intercept-form',
        videoTitle: 'Khan Academy: Graphing Lines in Slope-Intercept Form',
        reading:
          'Plot the y-intercept (0, b) first. Use the slope m = rise/run to plot a second point, and draw a straight line through both coordinates.',
        principles: [P_G8_SLOPE_INT],
      },
      {
        id: 'g8-math-u4-l4',
        unitId: 'g8-math-u4',
        title: 'Lesson 4: Unit 4 Review & Linear Equation Check',
        kind: 'lesson_review',
        partOf: 'Slope Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/v/linear-equations-review',
        videoTitle: 'Khan Academy: Linear Equations and Slope Review',
        reading:
          'Review slope calculations between points, table interpretations, and converting verbal scenarios into slope-intercept form equations.',
        principles: [P_G8_SLOPE_PTS, P_G8_SLOPE_INT],
      },
    ],
  },

  // UNIT 5: Systems of Linear Equations
  {
    id: 'g8-math-u5',
    title: 'Unit 5: Systems of Linear Equations',
    standards: ['8.EE.C.8'],
    lessons: [
      {
        id: 'g8-math-u5-l1',
        unitId: 'g8-math-u5',
        title: 'Lesson 1: Intro to Systems & Graphical Intersection',
        kind: 'lesson',
        partOf: 'Graphing Systems',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-overview/v/solving-linear-systems-by-graphing',
        videoTitle: 'Khan Academy: Systems of Equations by Graphing',
        reading:
          'A system of linear equations consists of two lines. The solution is the single intersection coordinate point (x, y) satisfying both equations.',
        principles: [P_G8_SYSTEMS],
      },
      {
        id: 'g8-math-u5-l2',
        unitId: 'g8-math-u5',
        title: 'Lesson 2: Solving Linear Systems by Substitution',
        kind: 'lesson',
        partOf: 'Substitution',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-overview/v/solving-linear-systems-by-substitution',
        videoTitle: 'Khan Academy: Solving Systems by Substitution',
        reading:
          'When one equation expresses y in terms of x, substitute that expression into the second equation to solve for x, then back-substitute to find y.',
        principles: [P_G8_SYSTEMS],
      },
      {
        id: 'g8-math-u5-l3',
        unitId: 'g8-math-u5',
        title: 'Lesson 3: Classifying System Solutions & Parallel Lines',
        kind: 'lesson',
        partOf: 'System Solutions',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-solutions/v/number-of-solutions-to-a-system-of-equations-algebraically',
        videoTitle: 'Khan Academy: Number of Solutions to Linear Systems',
        reading:
          'Intersecting lines have 1 solution. Parallel lines with matching slopes have 0 solutions. Identical coincident lines have infinite solutions.',
        principles: [P_G8_SOLUTIONS],
      },
      {
        id: 'g8-math-u5-l4',
        unitId: 'g8-math-u5',
        title: 'Lesson 4: Unit 5 Review & Linear Systems Check',
        kind: 'lesson_review',
        partOf: 'Systems Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/v/systems-of-equations-review',
        videoTitle: 'Khan Academy: Systems of Equations Review',
        reading:
          'Practice finding simultaneous solution coordinates, setting up systems from real-world contexts, and verifying solutions algebraically.',
        principles: [P_G8_SYSTEMS],
      },
    ],
  },

  // UNIT 6: Functions & Linear Models
  {
    id: 'g8-math-u6',
    title: 'Unit 6: Functions & Linear Models',
    standards: ['8.F.A.1', '8.F.A.2', '8.F.A.3'],
    lessons: [
      {
        id: 'g8-math-u6-l1',
        unitId: 'g8-math-u6',
        title: 'Lesson 1: Defining Functions, Inputs & Outputs',
        kind: 'lesson',
        partOf: 'Function Basics',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-function-intro/v/what-is-a-function',
        videoTitle: 'Khan Academy: What is a Function?',
        reading:
          'A function is a rule that assigns exactly one output y to each input x. If an input x corresponds to more than one output, the relation is not a function.',
        principles: [P_G8_FUNC_RATE],
      },
      {
        id: 'g8-math-u6-l2',
        unitId: 'g8-math-u6',
        title: 'Lesson 2: Comparing Rates of Change Across Representations',
        kind: 'lesson',
        partOf: 'Rate of Change',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-function-intro/v/comparing-features-of-functions-1',
        videoTitle: 'Khan Academy: Comparing Functions in Graphs and Tables',
        reading:
          'Compare two linear functions expressed algebraically, graphically, or numerically in tables by calculating and comparing their respective slopes.',
        principles: [P_G8_FUNC_RATE],
      },
      {
        id: 'g8-math-u6-l3',
        unitId: 'g8-math-u6',
        title: 'Lesson 3: Distinguishing Linear vs. Non-Linear Functions',
        kind: 'lesson',
        partOf: 'Linearity',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-linear-functions/v/linear-and-nonlinear-functions-example-3',
        videoTitle: 'Khan Academy: Linear vs Non-Linear Functions',
        reading:
          'Linear functions produce straight lines with constant rates of change (Δy/Δx). Non-linear functions have variable rates of change that curve.',
        principles: [P_G8_FUNC_RATE],
      },
      {
        id: 'g8-math-u6-l4',
        unitId: 'g8-math-u6',
        title: 'Lesson 4: Unit 6 Review & Functions Check',
        kind: 'lesson_review',
        partOf: 'Functions Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/v/linear-functions-review',
        videoTitle: 'Khan Academy: Functions Mastery Checkpoint',
        reading:
          'Review function mapping, input-output evaluation, linear function identification, and interpreting initial values in real-world contexts.',
        principles: [P_G8_FUNC_RATE],
      },
    ],
  },

  // UNIT 7: Transformations & Congruence
  {
    id: 'g8-math-u7',
    title: 'Unit 7: Geometric Transformations & Congruence',
    standards: ['8.G.A.1', '8.G.A.2', '8.G.A.3'],
    lessons: [
      {
        id: 'g8-math-u7-l1',
        unitId: 'g8-math-u7',
        title: 'Lesson 1: Coordinate Plane Translations',
        kind: 'lesson',
        partOf: 'Translations',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-transformations/v/translations-on-the-coordinate-plane',
        videoTitle: 'Khan Academy: Translations on the Coordinate Plane',
        reading:
          'A translation slides a figure without changing size or shape. To translate (x, y) by (dx, dy), compute (x + dx, y + dy).',
        principles: [P_G8_TRANS],
      },
      {
        id: 'g8-math-u7-l2',
        unitId: 'g8-math-u7',
        title: 'Lesson 2: Reflections Across Coordinate Axes',
        kind: 'lesson',
        partOf: 'Reflections',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-transformations/v/reflecting-points-exercise',
        videoTitle: 'Khan Academy: Reflections Across Axes',
        reading:
          'Reflecting across x-axis negates y: (x, -y). Reflecting across y-axis negates x: (-x, y). The transformed figure remains strictly congruent.',
        principles: [P_G8_TRANS],
      },
      {
        id: 'g8-math-u7-l3',
        unitId: 'g8-math-u7',
        title: 'Lesson 3: Rotations About the Origin',
        kind: 'lesson',
        partOf: 'Rotations',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-transformations/v/rotating-shapes-about-the-origin',
        videoTitle: 'Khan Academy: Rotations About the Origin',
        reading:
          'A 180° rotation maps (x, y) to (-x, -y). A 90° clockwise rotation maps (x, y) to (y, -x). Rigid rotations preserve segment lengths and angle measures.',
        principles: [P_G8_ROT_DIL],
      },
      {
        id: 'g8-math-u7-l4',
        unitId: 'g8-math-u7',
        title: 'Lesson 4: Unit 7 Review & Rigid Transformations Check',
        kind: 'lesson_review',
        partOf: 'Transformations Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/v/rigid-transformations-review',
        videoTitle: 'Khan Academy: Transformations & Congruence Review',
        reading:
          'Review coordinates under translations, reflections, rotations, and verify congruency of image figures through sequences of rigid motions.',
        principles: [P_G8_TRANS, P_G8_ROT_DIL],
      },
    ],
  },

  // UNIT 8: Dilations, Similarity & Angle Relations
  {
    id: 'g8-math-u8',
    title: 'Unit 8: Dilations, Similarity & Angle Relations',
    standards: ['8.G.A.3', '8.G.A.4', '8.G.A.5'],
    lessons: [
      {
        id: 'g8-math-u8-l1',
        unitId: 'g8-math-u8',
        title: 'Lesson 1: Dilations with Scale Factors',
        kind: 'lesson',
        partOf: 'Dilations',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-dilations/v/dilations-intro',
        videoTitle: 'Khan Academy: Dilations and Scale Factors',
        reading:
          'A dilation centered at origin multiplies coordinates by scale factor k: (kx, ky). If k > 1 it expands; if 0 < k < 1 it reduces in size.',
        principles: [P_G8_ROT_DIL],
      },
      {
        id: 'g8-math-u8-l2',
        unitId: 'g8-math-u8',
        title: 'Lesson 2: Similar Figures & Proportional Reasoning',
        kind: 'lesson',
        partOf: 'Similarity',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-similarity/v/similar-shapes',
        videoTitle: 'Khan Academy: Similar Shapes and Scale Ratios',
        reading:
          'Similar figures have equal corresponding angle measurements and strictly proportional corresponding side lengths.',
        principles: [P_G8_ROT_DIL],
      },
      {
        id: 'g8-math-u8-l3',
        unitId: 'g8-math-u8',
        title: 'Lesson 3: Parallel Lines, Transversals & Angle Pairs',
        kind: 'lesson',
        partOf: 'Transversals',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-angles-between-lines/v/angles-formed-by-parallel-lines-and-transversals',
        videoTitle: 'Khan Academy: Angles Formed by Transversals',
        reading:
          'Transversals intersecting parallel lines form congruent alternate interior, alternate exterior, and corresponding angle pairs, with supplementary consecutive angles.',
        principles: [P_G8_ANGLES],
      },
      {
        id: 'g8-math-u8-l4',
        unitId: 'g8-math-u8',
        title: 'Lesson 4: Triangle Angle Sums & Exterior Angle Theorem',
        kind: 'lesson_review',
        partOf: 'Triangle Angles',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-triangle-angles/v/triangle-angle-sum',
        videoTitle: 'Khan Academy: Triangle Angle Sum and Exterior Angles',
        reading:
          'Interior angles in any triangle sum to 180°. An exterior angle equals the sum of the two opposite remote interior angles.',
        principles: [P_G8_ANGLES],
      },
    ],
  },

  // UNIT 9: The Pythagorean Theorem
  {
    id: 'g8-math-u9',
    title: 'Unit 9: The Pythagorean Theorem & Applications',
    standards: ['8.G.B.6', '8.G.B.7', '8.G.B.8'],
    lessons: [
      {
        id: 'g8-math-u9-l1',
        unitId: 'g8-math-u9',
        title: 'Lesson 1: Finding Hypotenuse with a² + b² = c²',
        kind: 'lesson',
        partOf: 'Pythagorean Hypotenuse',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/the-pythagorean-theorem',
        videoTitle: 'Khan Academy: Intro to the Pythagorean Theorem',
        reading:
          'In any right triangle, the sum of the squares of the legs equals the square of the hypotenuse: a² + b² = c². Solve for hypotenuse c = √(a² + b²).',
        principles: [P_G8_PYTH_HYP],
      },
      {
        id: 'g8-math-u9-l2',
        unitId: 'g8-math-u9',
        title: 'Lesson 2: Finding a Missing Leg with b² = c² - a²',
        kind: 'lesson',
        partOf: 'Pythagorean Leg',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/pythagorean-theorem-find-leg',
        videoTitle: 'Khan Academy: Finding a Missing Leg in Right Triangles',
        reading:
          'When given the hypotenuse c and one leg a, subtract the square of leg a from c² to find the missing leg: b = √(c² - a²).',
        principles: [P_G8_PYTH_LEG],
      },
      {
        id: 'g8-math-u9-l3',
        unitId: 'g8-math-u9',
        title: 'Lesson 3: Distance on Coordinate Grids using Pythagorean Theorem',
        kind: 'lesson',
        partOf: 'Coordinate Distance',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/distance-formula',
        videoTitle: 'Khan Academy: Coordinate Distance and Pythagoras',
        reading:
          'Find segment distance between (x₁, y₁) and (x₂, y₂) by treating horizontal and vertical differences as legs: d = √((x₂ - x₁)² + (y₂ - y₁)²).',
        principles: [P_G8_PYTH_HYP],
      },
      {
        id: 'g8-math-u9-l4',
        unitId: 'g8-math-u9',
        title: 'Lesson 4: Unit 9 Review & Pythagorean Check',
        kind: 'lesson_review',
        partOf: 'Pythagorean Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/v/pythagorean-theorem-review',
        videoTitle: 'Khan Academy: Pythagorean Theorem Applications Review',
        reading:
          'Apply the Pythagorean theorem to calculate hypotenuse lengths, missing leg distances, coordinate diagonals, and 3D diagonal lengths.',
        principles: [P_G8_PYTH_HYP, P_G8_PYTH_LEG],
      },
    ],
  },

  // UNIT 10: 3D Geometry: Volume of Cylinders, Cones & Spheres
  {
    id: 'g8-math-u10',
    title: 'Unit 10: Volume of Cylinders, Cones & Spheres',
    standards: ['OH.8.G.C.9'],
    isOhioExtension: true,
    lessons: [
      {
        id: 'g8-math-u10-l1',
        unitId: 'g8-math-u10',
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
        principles: [P_G8_VOL_CYL_CONE],
      },
      {
        id: 'g8-math-u10-l2',
        unitId: 'g8-math-u10',
        title: 'Lesson 2: Volume of Cones (V = 1/3 πr²h)',
        kind: 'lesson',
        partOf: 'Cone Volume',
        isOhioExtension: true,
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/v/volume-cone-example',
        videoTitle: 'Khan Academy: Volume of a Cone',
        reading:
          'A cone with matching base radius and height holds exactly one-third the volume of a cylinder: V = 1/3 πr²h cubic units.',
        principles: [P_G8_VOL_CYL_CONE],
      },
      {
        id: 'g8-math-u10-l3',
        unitId: 'g8-math-u10',
        title: 'Lesson 3: Volume of Spheres (V = 4/3 πr³)',
        kind: 'lesson',
        partOf: 'Sphere Volume',
        isOhioExtension: true,
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/v/volume-of-a-sphere',
        videoTitle: 'Khan Academy: Volume of a Sphere',
        reading:
          'The 3D volume of a sphere depends only on its radius r: V = (4/3)πr³ cubic units. Compute volume in terms of π or round using 3.14.',
        principles: [P_G8_SPHERES],
      },
      {
        id: 'g8-math-u10-l4',
        unitId: 'g8-math-u10',
        title: 'Lesson 4: Unit 10 Review & 3D Solids Volume Check',
        kind: 'lesson_review',
        partOf: 'Volume Review',
        isOhioExtension: true,
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/v/volume-review',
        videoTitle: 'Khan Academy: Volume of 3D Figures Review',
        reading:
          'Calculate volume across cylinders, cones, and spheres, and solve real-world composite solids problems using radius and height measurements.',
        principles: [P_G8_VOL_CYL_CONE, P_G8_SPHERES],
      },
    ],
  },

  // UNIT 11: Bivariate Data, Scatter Plots & Two-Way Tables
  {
    id: 'g8-math-u11',
    title: 'Unit 11: Bivariate Data, Scatter Plots & Two-Way Tables',
    standards: ['8.SP.A.1', '8.SP.A.2', '8.SP.A.3', '8.SP.A.4'],
    lessons: [
      {
        id: 'g8-math-u11-l1',
        unitId: 'g8-math-u11',
        title: 'Lesson 1: Scatter Plots & Linear Associations',
        kind: 'lesson',
        partOf: 'Scatter Plots',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-scatter-plots-topic/v/constructing-scatter-plot',
        videoTitle: 'Khan Academy: Constructing and Interpreting Scatter Plots',
        reading:
          'Scatter plots display paired quantitative data. Associations may be positive, negative, or non-linear, with clustering or outlier data points.',
        principles: [P_G8_SLOPE_PTS],
      },
      {
        id: 'g8-math-u11-l2',
        unitId: 'g8-math-u11',
        title: 'Lesson 2: Trend Lines & Linear Modeling',
        kind: 'lesson',
        partOf: 'Trend Lines',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-scatter-plots-topic/v/fitting-line-to-data',
        videoTitle: 'Khan Academy: Fitting a Line to Data',
        reading:
          'A line of best fit models linear data trends. Use the slope and y-intercept of the trend line to make predictions for unmeasured data values.',
        principles: [P_G8_SLOPE_INT],
      },
      {
        id: 'g8-math-u11-l3',
        unitId: 'g8-math-u11',
        title: 'Lesson 3: Two-Way Frequency & Relative Frequency Tables',
        kind: 'lesson',
        partOf: 'Two-Way Tables',
        estimatedMinutes: 10,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-two-way-tables/v/two-way-frequency-tables',
        videoTitle: 'Khan Academy: Two-Way Tables and Relative Frequencies',
        reading:
          'Two-way tables summarize categorical data from the same subjects. Calculate row and column relative frequencies to evaluate evidence of association.',
        principles: [P_G8_TABLES],
      },
      {
        id: 'g8-math-u11-l4',
        unitId: 'g8-math-u11',
        title: 'Lesson 4: Unit 11 Review & Statistics Check',
        kind: 'lesson_review',
        partOf: 'Statistics Review',
        estimatedMinutes: 12,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/v/scatter-plots-review',
        videoTitle: 'Khan Academy: Bivariate Data and Statistics Review',
        reading:
          'Examine scatter plot clusters, identify outliers, estimate lines of best fit, and interpret relative frequencies from two-way tables.',
        principles: [P_G8_SLOPE_PTS, P_G8_SLOPE_INT, P_G8_TABLES],
      },
    ],
  },

  // UNIT 12: Grade 8 Math Course Challenge
  {
    id: 'g8-math-u12',
    title: 'Unit 12: Grade 8 Math Course Challenge',
    standards: ['8.EE', '8.F', '8.G', '8.SP'],
    lessons: [
      {
        id: 'g8-math-u12-l1',
        unitId: 'g8-math-u12',
        title: 'Lesson 1: Pre-Algebra & Equations Synthesis',
        kind: 'lesson_review',
        partOf: 'Course Challenge Part 1',
        estimatedMinutes: 15,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-course-challenge/v/pre-algebra-synthesis',
        videoTitle: 'Khan Academy: Grade 8 Pre-Algebra Synthesis',
        reading:
          'Synthesize exponent properties, scientific notation, roots, irrational numbers, multi-step equations, and systems of linear equations.',
        principles: [P_G8_EXP_PRODUCT, P_G8_MULTI_EQ, P_G8_SYSTEMS],
      },
      {
        id: 'g8-math-u12-l2',
        unitId: 'g8-math-u12',
        title: 'Lesson 2: Functions & Geometry Synthesis',
        kind: 'lesson_review',
        partOf: 'Course Challenge Part 2',
        estimatedMinutes: 15,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-course-challenge/v/functions-geometry-synthesis',
        videoTitle: 'Khan Academy: Grade 8 Functions & Geometry Synthesis',
        reading:
          'Synthesize linear function rules, coordinate transformations, similarity dilations, and the Pythagorean theorem.',
        principles: [P_G8_FUNC_RATE, P_G8_TRANS, P_G8_PYTH_HYP],
      },
      {
        id: 'g8-math-u12-l3',
        unitId: 'g8-math-u12',
        title: 'Lesson 3: 3D Volume & Bivariate Data Capstone',
        kind: 'lesson_review',
        partOf: 'Course Challenge Part 3',
        estimatedMinutes: 15,
        videoUrl:
          'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-course-challenge/v/volume-data-capstone',
        videoTitle: 'Khan Academy: Grade 8 Volume & Data Capstone',
        reading:
          'Complete capstone review of 3D cylinder, cone, and sphere volume formulas alongside scatter plot trend lines and two-way frequency tables.',
        principles: [P_G8_VOL_CYL_CONE, P_G8_SPHERES, P_G8_TABLES],
      },
    ],
  },

  // UNIT 13: Explore Mathematics Through Interactive Simulations
  {
    id: 'g8-math-u13',
    title: 'Unit 13: Explore Mathematics Through Interactive Simulations',
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

  // UNIT 14: Teacher Resources & Pacing
  {
    id: 'g8-math-u14',
    title: 'Unit 14: Teacher Resources & Pacing',
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

- **Weeks 1–4**: Unit 1 — Exponents, Roots & Scientific Notation (8.EE.1-3)
- **Weeks 5–7**: Unit 2 — Irrational Numbers & The Real Number System (8.NS.1-2)
- **Weeks 8–11**: Unit 3 — Solving Multi-Step Linear Equations (8.EE.7)
- **Week 12**: Quarter 1 Pre-Algebra Assessment
- **Weeks 13–16**: Unit 4 — Slope, Rates & Linear Equations (8.EE.5-6)
- **Weeks 17–20**: Unit 5 — Systems of Linear Equations (8.EE.8)
- **Weeks 21–24**: Unit 6 — Functions & Linear Models (8.F.1-3)
- **Week 25**: Quarter 2 & 3 Linear Functions & Systems Checkpoint
- **Weeks 26–28**: Unit 7 — Geometric Transformations & Congruence (8.G.1-3)
- **Weeks 29–31**: Unit 8 — Dilations, Similarity & Angle Relations (8.G.4-5)
- **Weeks 32–33**: Unit 9 — The Pythagorean Theorem & Applications (8.G.6-8)
- **Weeks 34–35**: Unit 10 — Volume of Cylinders, Cones & Spheres (OH.8.G.C.9)
- **Weeks 35–36**: Unit 11 — Bivariate Data & Scatter Plots (8.SP.1-4) & Unit 12 Course Challenge`,
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
| Unit 2 | 8.NS.1, 2 | Irrational numbers, rational decimal approximations, number line |
| Unit 3 | 8.EE.7 | Multi-step equations, variables on both sides, solution counts |
| Unit 4 | 8.EE.5, 6 | Slope m = rise/run, slope-intercept form y = mx + b |
| Unit 5 | 8.EE.8 | Linear systems, substitution method, graphical intersection |
| Unit 6 | 8.F.1, 2, 3 | Function definitions, linear input-output tables, rate comparison |
| Unit 7 | 8.G.1, 2, 3 | Rigid translations, reflections, rotations, congruent images |
| Unit 8 | 8.G.4, 5 | Dilations, similarity scale factor, transversals, triangle angle sum |
| Unit 9 | 8.G.6, 7, 8 | Pythagorean theorem a² + b² = c², coordinate distance |
| Unit 10 | OH.8.G.C.9 | Cylinder, cone, and sphere volume formulas in terms of π |
| Unit 11 | 8.SP.1, 2, 4 | Scatter plot association, lines of best fit, two-way frequency tables |`,
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
- **Negative Exponents**: x^(-n) = 1 / x^n
- **Scientific Notation**: a × 10^n (1 ≤ a < 10)

### Linear Equations & Functions
- **Slope**: m = (y₂ - y₁) / (x₂ - x₁)
- **Slope-Intercept**: y = mx + b (m = slope, b = y-intercept)
- **Function Rule**: f(x) = mx + b

### Geometry & Measurement
- **Pythagorean Theorem**: a² + b² = c² (c = √(a² + b²), b = √(c² - a²))
- **Distance Formula**: d = √((x₂ - x₁)² + (y₂ - y₁)²)
- **Cylinder Volume**: V = πr²h
- **Cone Volume**: V = (1/3)πr²h
- **Sphere Volume**: V = (4/3)πr³`,
      },
    ],
  },
]
