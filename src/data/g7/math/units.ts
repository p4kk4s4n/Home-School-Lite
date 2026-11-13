import { Unit } from '../../../types'
import { G7_MATH_BANKS } from './banks'

export const G7_MATH_UNITS: Unit[] = [
  // =========================================================================
  // UNIT 1: PROPORTIONAL RELATIONSHIPS (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u1',
    title: 'Unit 1: Proportional Relationships & Unit Rates',
    standards: ['7.RP.A.1', '7.RP.A.2'],
    lessons: [
      {
        id: 'g7-math-u1-l1',
        unitId: 'g7-math-u1',
        title: 'Computing Unit Rates with Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion',
        videoTitle: 'Unit Rates with Fractions',
        reading: 'Compute unit rates associated with ratios of fractions, including quantities measured in like or different units. Example: 1/2 mile in 1/4 hour = 2 mph.',
        principles: [
          {
            id: 'p-g7-rate-frac',
            title: 'Unit Rates with Fractional Quantities',
            standard: '7.RP.A.1',
            summary: 'Calculate unit rates involving complex fractions in applied contexts.',
            generatorId: 'g7.unit-rate-fractions',
          },
        ],
      },
      {
        id: 'g7-math-u1-l2',
        unitId: 'g7-math-u1',
        title: 'Identifying Proportional Relationships in Tables & Graphs',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion',
        videoTitle: 'Proportional Relationships in Tables',
        reading: 'Test for equivalent ratios in a table by checking whether y/x is constant. On a graph, verify the points lie on a straight line passing through (0, 0).',
        principles: [
          {
            id: 'p-g7-prop-table-graph',
            title: 'Proportional Identification',
            standard: '7.RP.A.2.a',
            summary: 'Decide whether two quantities are in a proportional relationship by testing equivalent ratios.',
            bank: G7_MATH_BANKS.proportions,
          },
        ],
      },
      {
        id: 'g7-math-u1-l3',
        unitId: 'g7-math-u1',
        title: 'Constant of Proportionality (Unit Rate) k = y/x',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion',
        videoTitle: 'Constant of Proportionality',
        reading: 'The constant ratio k = y/x is called the constant of proportionality. It represents the unit rate in any proportional relationship.',
        principles: [
          {
            id: 'p-g7-prop-constant',
            title: 'Constant of Proportionality',
            standard: '7.RP.A.2.b',
            summary: 'Identify the constant of proportionality in tables, graphs, equations, and diagrams.',
            generatorId: 'g7.proportional-constant',
          },
        ],
      },
      {
        id: 'g7-math-u1-l4',
        unitId: 'g7-math-u1',
        title: 'Writing Proportional Equations y = kx',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion/cc-7th-equations-of-proportional-relationships/v/constructing-an-equation-for-a-proportional-relationship',
        videoTitle: 'Writing Proportional Equations',
        reading: 'Represent proportional relationships with equations in the form y = kx, where k is the unit rate.',
        principles: [
          {
            id: 'p-g7-prop-eqn',
            title: 'Proportional Equations',
            standard: '7.RP.A.2.c',
            summary: 'Represent proportional relationships by equations of the form y = kx.',
            generatorId: 'g7.proportional-constant',
          },
        ],
      },
      {
        id: 'g7-math-u1-l5',
        unitId: 'g7-math-u1',
        title: 'Mid-Unit Quiz: Proportional Relationships',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion',
        videoTitle: 'Proportional Relationships Quiz',
        reading: 'Review session assessing constant of proportionality, fractional rates, and equation formulation.',
        principles: [
          {
            id: 'p-g7-u1-quiz',
            title: 'Proportions Checkpoint',
            standard: '7.RP.A.2',
            summary: 'Demonstrate proficiency with proportional equations and unit rates.',
            generatorId: 'g7.proportional-constant',
          },
        ],
      },
      {
        id: 'g7-math-u1-l6',
        unitId: 'g7-math-u1',
        title: 'Unit 1 Test: Proportions Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion',
        videoTitle: 'Unit 1 Test Review',
        reading: 'Comprehensive assessment of constant of proportionality, graphing, and rate calculations.',
        principles: [
          {
            id: 'p-g7-u1-test',
            title: 'Proportions Mastery Exam',
            standard: '7.RP.A.2',
            summary: 'Demonstrate complete mastery of proportional relationship concepts.',
            generatorId: 'g7.unit-rate-fractions',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 2: RATES AND PERCENTAGES (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u2',
    title: 'Unit 2: Rates and Percentages',
    standards: ['7.RP.A.3'],
    lessons: [
      {
        id: 'g7-math-u2-l1',
        unitId: 'g7-math-u2',
        title: 'Percent Change: Increase and Decrease',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Percent%20Change%207th%20grade%20math',
        videoTitle: 'Percent Change',
        reading: 'Calculate percent change using (amount of change / original amount) x 100%. Distinguish between increases and decreases.',
        principles: [
          {
            id: 'p-g7-pct-change',
            title: 'Calculating Percent Change',
            standard: '7.RP.A.3',
            summary: 'Use proportional relationships to solve multistep percent change problems.',
            generatorId: 'g7.percent-change',
          },
        ],
      },
      {
        id: 'g7-math-u2-l2',
        unitId: 'g7-math-u2',
        title: 'Tax, Tip, and Gratuity Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Tax%20and%20Tip%20Calculations%207th%20grade%20math',
        videoTitle: 'Tax and Tip Calculations',
        reading: 'Sales tax and restaurant tips add to the base bill. Multiply the bill by the decimal percentage or multiply by (1 + rate) for total cost.',
        principles: [
          {
            id: 'p-g7-pct-tax-tip',
            title: 'Sales Tax and Tip Computations',
            standard: '7.RP.A.3',
            summary: 'Compute tax, tip, and gratuities using proportional percentages.',
            generatorId: 'g7.percent-change',
          },
        ],
      },
      {
        id: 'g7-math-u2-l3',
        unitId: 'g7-math-u2',
        title: 'Markups, Discounts, and Markdown Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Markups%20and%20Discounts%207th%20grade%20math',
        videoTitle: 'Markups and Discounts',
        reading: 'A discount subtracts from the original price (Sale Price = Original x (1 - discount rate)). A markup adds wholesale profit margin.',
        principles: [
          {
            id: 'p-g7-pct-markup',
            title: 'Markups and Retail Discounts',
            standard: '7.RP.A.3',
            summary: 'Solve multi-step retail problems involving markups and discounts.',
            generatorId: 'g7.percent-change',
          },
        ],
      },
      {
        id: 'g7-math-u2-l4',
        unitId: 'g7-math-u2',
        title: 'Simple Interest: I = Prt Formula',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/search?page_search_query=Simple%20Interest%20Formula%207th%20grade%20math',
        videoTitle: 'Simple Interest Formula',
        reading: 'Calculate simple interest with I = Prt, where P is principal, r is the annual interest rate as a decimal, and t is time in years.',
        principles: [
          {
            id: 'p-g7-pct-interest',
            title: 'Simple Interest Calculations',
            standard: '7.RP.A.3',
            summary: 'Calculate simple interest and total account balances over time.',
            generatorId: 'g7.simple-interest',
          },
        ],
      },
      {
        id: 'g7-math-u2-l5',
        unitId: 'g7-math-u2',
        title: 'Mid-Unit Quiz: Percent Applications',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math',
        videoTitle: 'Percent Applications Review',
        reading: 'Review session on multi-step percent change, discounts, taxes, and simple interest.',
        principles: [
          {
            id: 'p-g7-u2-quiz',
            title: 'Percent Applications Checkpoint',
            standard: '7.RP.A.3',
            summary: 'Assess accuracy in percent problem solving.',
            generatorId: 'g7.percent-change',
          },
        ],
      },
      {
        id: 'g7-math-u2-l6',
        unitId: 'g7-math-u2',
        title: 'Unit 2 Test: Rates & Percentages Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math',
        videoTitle: 'Unit 2 Test Review',
        reading: 'Comprehensive assessment of percent increases, retail markdowns, and simple interest algorithms.',
        principles: [
          {
            id: 'p-g7-u2-test',
            title: 'Rates & Percentages Exam',
            standard: '7.RP.A.3',
            summary: 'Demonstrate complete mastery of 7th grade percent standards.',
            generatorId: 'g7.simple-interest',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 3: INTEGERS: ADDITION & SUBTRACTION (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u3',
    title: 'Unit 3: Integers: Addition & Subtraction',
    standards: ['7.NS.A.1'],
    lessons: [
      {
        id: 'g7-math-u3-l1',
        unitId: 'g7-math-u3',
        title: 'Opposites, Absolute Value, and Zero Pairs',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
        videoTitle: 'Opposites and Adding Negatives',
        reading: 'Every number p has an opposite -p such that p + (-p) = 0. Absolute value |x| represents distance from zero on the number line.',
        principles: [
          {
            id: 'p-g7-int-zero-pairs',
            title: 'Additive Inverses and Zero Pairs',
            standard: '7.NS.A.1.a',
            summary: 'Describe situations in which opposite quantities combine to make 0.',
            bank: G7_MATH_BANKS.integers,
          },
        ],
      },
      {
        id: 'g7-math-u3-l2',
        unitId: 'g7-math-u3',
        title: 'Adding Integers with Same and Different Signs',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
        videoTitle: 'Adding Integers Rules',
        reading: 'Same signs: add absolute values and keep the common sign. Different signs: subtract the smaller absolute value from the larger, and keep the sign of the larger.',
        principles: [
          {
            id: 'p-g7-int-add-rules',
            title: 'Adding Signed Integers',
            standard: '7.NS.A.1.b',
            summary: 'Understand p + q as the number located a distance |q| from p.',
            generatorId: 'g7.int-add-sub',
          },
        ],
      },
      {
        id: 'g7-math-u3-l3',
        unitId: 'g7-math-u3',
        title: 'Subtracting Integers as Adding the Opposite',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
        videoTitle: 'Subtracting Negative Numbers',
        reading: 'Subtracting a signed number is equivalent to adding its opposite: p - q = p + (-q). Example: 5 - (-3) = 5 + 3 = 8.',
        principles: [
          {
            id: 'p-g7-int-sub-opposite',
            title: 'Integer Subtraction as Additive Inverse',
            standard: '7.NS.A.1.c',
            summary: 'Understand subtraction of rational numbers as adding the additive inverse: p - q = p + (-q).',
            generatorId: 'g7.int-add-sub',
          },
        ],
      },
      {
        id: 'g7-math-u3-l4',
        unitId: 'g7-math-u3',
        title: 'Distance Between Numbers on a Number Line',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
        videoTitle: 'Distance on a Number Line',
        reading: 'The distance between two rational numbers p and q on a number line is given by the absolute difference |p - q|.',
        principles: [
          {
            id: 'p-g7-int-distance',
            title: 'Absolute Difference Distance',
            standard: '7.NS.A.1.c',
            summary: 'Show that the distance between two rational numbers on the number line is the absolute value of their difference.',
            generatorId: 'g7.int-add-sub',
          },
        ],
      },
      {
        id: 'g7-math-u3-l5',
        unitId: 'g7-math-u3',
        title: 'Mid-Unit Quiz: Adding and Subtracting Integers',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
        videoTitle: 'Integer Addition & Subtraction Quiz',
        reading: 'Review session on adding and subtracting positive and negative numbers.',
        principles: [
          {
            id: 'p-g7-u3-quiz',
            title: 'Integer Addition & Subtraction Checkpoint',
            standard: '7.NS.A.1',
            summary: 'Demonstrate fluency in adding and subtracting signed numbers.',
            generatorId: 'g7.int-add-sub',
          },
        ],
      },
      {
        id: 'g7-math-u3-l6',
        unitId: 'g7-math-u3',
        title: 'Unit 3 Test: Integer Operations Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
        videoTitle: 'Unit 3 Test Review',
        reading: 'Comprehensive assessment of signed integer addition, subtraction, distance, and word problem modeling.',
        principles: [
          {
            id: 'p-g7-u3-test',
            title: 'Integer Operations Exam',
            standard: '7.NS.A.1',
            summary: 'Demonstrate complete mastery of signed number addition and subtraction.',
            generatorId: 'g7.int-add-sub',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 4: RATIONAL NUMBERS: MULTIPLICATION & DIVISION (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u4',
    title: 'Unit 4: Rational Numbers: Multiplication & Division',
    standards: ['7.NS.A.2', '7.NS.A.3'],
    lessons: [
      {
        id: 'g7-math-u4-l1',
        unitId: 'g7-math-u4',
        title: 'Rules for Multiplying Signed Rational Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide/cc-7th-mult-div-negatives/e/multiplying_and_dividing_negative_numbers',
        videoTitle: 'Multiplying Negative Numbers',
        reading: 'Positive x Positive = Positive. Negative x Negative = Positive. Positive x Negative = Negative. Odd number of negative factors yields a negative product.',
        principles: [
          {
            id: 'p-g7-mult-neg-rules',
            title: 'Signed Multiplication Sign Rules',
            standard: '7.NS.A.2.a',
            summary: 'Understand that multiplication is extended from fractions to rational numbers by requiring operations continue to satisfy properties of operations.',
            generatorId: 'g7.int-mult-div',
          },
        ],
      },
      {
        id: 'g7-math-u4-l2',
        unitId: 'g7-math-u4',
        title: 'Dividing Signed Integers and Fractions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide/cc-7th-mult-div-negatives/e/multiplying_and_dividing_negative_numbers',
        videoTitle: 'Dividing Negative Numbers',
        reading: 'Dividing signed numbers follows identical sign rules as multiplication: (-p)/q = p/(-q) = -(p/q). Division by zero is undefined.',
        principles: [
          {
            id: 'p-g7-div-neg-rules',
            title: 'Signed Division Sign Rules',
            standard: '7.NS.A.2.b',
            summary: 'Understand that integers can be divided, provided that the divisor is not zero.',
            generatorId: 'g7.int-mult-div',
          },
        ],
      },
      {
        id: 'g7-math-u4-l3',
        unitId: 'g7-math-u4',
        title: 'Converting Fractions to Terminating & Repeating Decimals',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-fracs-to-decimals/e/converting_fractions_to_decimals',
        videoTitle: 'Fractions to Decimals Long Division',
        reading: 'Use long division to convert a fraction p/q to decimal form. If the remainder terminates in zeros, it is terminating. Otherwise, digits repeat indefinitely.',
        principles: [
          {
            id: 'p-g7-frac-decimal-conv',
            title: 'Decimal Form of Rational Numbers',
            standard: '7.NS.A.2.d',
            summary: 'Convert a rational number to a decimal using long division; know that the decimal form terminates in 0s or eventually repeats.',
            bank: G7_MATH_BANKS.rationalNumbers,
          },
        ],
      },
      {
        id: 'g7-math-u4-l4',
        unitId: 'g7-math-u4',
        title: 'Complex Multi-Step Rational Number Word Problems',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide',
        videoTitle: 'Rational Word Problems & PEMDAS',
        reading: 'Apply all four operations with positive and negative fractions, decimals, and mixed numbers to solve contextual financial and scientific problems.',
        principles: [
          {
            id: 'p-g7-rat-word-pemdas',
            title: 'Applied Rational Problem Solving',
            standard: '7.NS.A.3',
            summary: 'Solve real-world and mathematical problems involving the four operations with rational numbers.',
            generatorId: 'g7.int-mult-div',
          },
        ],
      },
      {
        id: 'g7-math-u4-l5',
        unitId: 'g7-math-u4',
        title: 'Mid-Unit Quiz: Multiplying and Dividing Rational Numbers',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide',
        videoTitle: 'Rational Multiplication & Division Quiz',
        reading: 'Review session testing signed rational multiplication, division, and decimal conversion.',
        principles: [
          {
            id: 'p-g7-u4-quiz',
            title: 'Rational Multiplication Checkpoint',
            standard: '7.NS.A.2',
            summary: 'Assess mastery of signed rational operations.',
            generatorId: 'g7.int-mult-div',
          },
        ],
      },
      {
        id: 'g7-math-u4-l6',
        unitId: 'g7-math-u4',
        title: 'Unit 4 Test: Rational Number Operations Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide',
        videoTitle: 'Unit 4 Test Review',
        reading: 'Comprehensive assessment of signed fractions, signed decimals, order of operations, and long division conversions.',
        principles: [
          {
            id: 'p-g7-u4-test',
            title: 'Rational Number Operations Exam',
            standard: '7.NS.A.3',
            summary: 'Demonstrate complete mastery of rational number arithmetic.',
            generatorId: 'g7.int-mult-div',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 5: EXPRESSIONS, EQUATIONS & INEQUALITIES (6 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u5',
    title: 'Unit 5: Expressions, Equations & Inequalities',
    standards: ['7.EE.A.1', '7.EE.A.2', '7.EE.B.4'],
    lessons: [
      {
        id: 'g7-math-u5-l1',
        unitId: 'g7-math-u5',
        title: 'Combining Like Terms with Rational Coefficients',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
        videoTitle: 'Combining Like Terms',
        reading: 'Combine terms with identical variable parts by adding or subtracting their coefficients: (3/4)x + (1/2)x = (5/4)x.',
        principles: [
          {
            id: 'p-g7-combine-terms',
            title: 'Linear Expression Simplification',
            standard: '7.EE.A.1',
            summary: 'Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions.',
            generatorId: 'g7.linear-combine',
          },
        ],
      },
      {
        id: 'g7-math-u5-l2',
        unitId: 'g7-math-u5',
        title: 'Distributive Property & Factoring Algebraic Expressions',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
        videoTitle: 'Expanding and Factoring Expressions',
        reading: 'Expand expressions using a(b + c) = ab + ac. Factor expressions by extracting the greatest common factor: 6x + 18 = 6(x + 3).',
        principles: [
          {
            id: 'p-g7-distributive-prop',
            title: 'Distributive Property and Factoring',
            standard: '7.EE.A.1',
            summary: 'Expand and factor linear expressions with rational coefficients.',
            generatorId: 'g7.distributive',
          },
        ],
      },
      {
        id: 'g7-math-u5-l3',
        unitId: 'g7-math-u5',
        title: 'Solving Two-Step Equations px + q = r and p(x + q) = r',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
        videoTitle: 'Solving Two-Step Equations',
        reading: 'Isolate the variable term first by adding or subtracting inverse constants, then multiply or divide by the variable coefficient.',
        principles: [
          {
            id: 'p-g7-solve-2step-eq',
            title: 'Two-Step Equation Fluency',
            standard: '7.EE.B.4.a',
            summary: 'Solve word problems leading to equations of the form px + q = r and p(x + q) = r.',
            generatorId: 'g7.two-step-eq',
          },
        ],
      },
      {
        id: 'g7-math-u5-l4',
        unitId: 'g7-math-u5',
        title: 'Solving & Graphing Inequalities px + q > r on a Number Line',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
        videoTitle: 'Solving Two-Step Inequalities',
        reading: 'Solve inequalities using inverse operations. Remember to reverse the inequality symbol whenever multiplying or dividing by a negative number. Graph on a number line.',
        principles: [
          {
            id: 'p-g7-solve-ineq',
            title: 'Two-Step Inequalities and Graphing',
            standard: '7.EE.B.4.b',
            summary: 'Solve word problems leading to inequalities of the form px + q > r or px + q < r and graph the solution set.',
            generatorId: 'g7.inequalities',
          },
        ],
      },
      {
        id: 'g7-math-u5-l5',
        unitId: 'g7-math-u5',
        title: 'Mid-Unit Quiz: Equations & Inequalities',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
        videoTitle: 'Equations & Inequalities Quiz',
        reading: 'Review session on expanding expressions, solving two-step equations, and graphing inequalities.',
        principles: [
          {
            id: 'p-g7-u5-quiz',
            title: 'Equations & Inequalities Checkpoint',
            standard: '7.EE.B.4',
            summary: 'Assess mastery of equation and inequality solution methods.',
            generatorId: 'g7.two-step-eq',
          },
        ],
      },
      {
        id: 'g7-math-u5-l6',
        unitId: 'g7-math-u5',
        title: 'Unit 5 Test: Expressions & Equations Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
        videoTitle: 'Unit 5 Test Review',
        reading: 'Comprehensive assessment of algebraic expression simplification, two-step equations, and linear inequalities.',
        principles: [
          {
            id: 'p-g7-u5-test',
            title: 'Expressions & Equations Exam',
            standard: '7.EE.B.4',
            summary: 'Demonstrate complete mastery of 7th grade algebraic equations and inequalities.',
            generatorId: 'g7.inequalities',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 6: GEOMETRY & SCALE DRAWINGS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u6',
    title: 'Unit 6: Geometry & Scale Drawings',
    standards: ['7.G.A.1', '7.G.A.2', '7.G.A.3'],
    lessons: [
      {
        id: 'g7-math-u6-l1',
        unitId: 'g7-math-u6',
        title: 'Solving Scale Drawing Problems with Scale Factors',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/x6b17ba59:scale-drawings/cc-7th-scale-drawings/v/scale-factors-and-area',
        videoTitle: 'Scale Drawings and Proportions',
        reading: 'Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing at a different scale.',
        principles: [
          {
            id: 'p-g7-scale-drawings',
            title: 'Scale Drawing Computations',
            standard: '7.G.A.1',
            summary: 'Solve problems involving scale drawings of geometric figures.',
            generatorId: 'g7.scale-drawings',
          },
        ],
      },
      {
        id: 'g7-math-u6-l2',
        unitId: 'g7-math-u6',
        title: 'Constructing Triangles & Triangle Inequality Theorem',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Triangle Inequality and Construction',
        reading: 'Draw geometric shapes with given conditions. By the triangle inequality theorem, the sum of any two side lengths must be greater than the third side length.',
        principles: [
          {
            id: 'p-g7-triangle-ineq',
            title: 'Constructing Triangles from Given Conditions',
            standard: '7.G.A.2',
            summary: 'Draw geometric shapes with given conditions to determine whether they form unique, multiple, or no triangles.',
            bank: G7_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g7-math-u6-l3',
        unitId: 'g7-math-u6',
        title: 'Cross Sections of Three-Dimensional Figures',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Cross Sections of 3D Figures',
        reading: 'Describe the two-dimensional figures that result from slicing three-dimensional figures, such as slicing right rectangular prisms, cones, and cylinders horizontally or vertically.',
        principles: [
          {
            id: 'p-g7-cross-sections',
            title: '2D Slicing of 3D Solids',
            standard: '7.G.A.3',
            summary: 'Describe 2D figures resulting from slicing 3D figures.',
            bank: G7_MATH_BANKS.geometry,
          },
        ],
      },
      {
        id: 'g7-math-u6-l4',
        unitId: 'g7-math-u6',
        title: 'Mid-Unit Quiz: Scale Drawings & Cross Sections',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Scale Drawings & Cross Sections Quiz',
        reading: 'Review session on scale factors, triangle inequality rules, and 2D cross section identification.',
        principles: [
          {
            id: 'p-g7-u6-quiz',
            title: 'Scale & Cross Section Checkpoint',
            standard: '7.G.A.1',
            summary: 'Assess mastery of scale drawing calculations and 3D cross sections.',
            generatorId: 'g7.scale-drawings',
          },
        ],
      },
      {
        id: 'g7-math-u6-l5',
        unitId: 'g7-math-u6',
        title: 'Unit 6 Test: Geometry & Scale Drawings Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Unit 6 Test Review',
        reading: 'Comprehensive assessment of scale drawings, triangle construction rules, and 3D cross section geometry.',
        principles: [
          {
            id: 'p-g7-u6-test',
            title: 'Geometry & Scale Drawings Exam',
            standard: '7.G.A.1',
            summary: 'Demonstrate complete mastery of scale drawing and geometric modeling standards.',
            generatorId: 'g7.scale-drawings',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 7: CIRCLES: AREA & CIRCUMFERENCE (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u7',
    title: 'Unit 7: Circles: Area & Circumference',
    standards: ['7.G.B.4'],
    lessons: [
      {
        id: 'g7-math-u7-l1',
        unitId: 'g7-math-u7',
        title: 'Radius, Diameter, and the Constant Pi (π)',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Radius, Diameter, and Pi',
        reading: 'Diameter d = 2r. Pi is the constant ratio of circumference to diameter (π = C/d ≈ 3.14159...).',
        principles: [
          {
            id: 'p-g7-circle-pi-intro',
            title: 'Concept of Pi and Circle Dimensions',
            standard: '7.G.B.4',
            summary: 'Know the formulas for the area and circumference of a circle and use them to solve problems.',
            generatorId: 'g7.circle-circumference',
          },
        ],
      },
      {
        id: 'g7-math-u7-l2',
        unitId: 'g7-math-u7',
        title: 'Calculating Circumference C = 2πr = πd',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circumference/v/parts-of-a-circle',
        videoTitle: 'Circumference Formula',
        reading: 'Calculate the perimeter (circumference) of a circle using C = 2πr or C = πd. In word problems, calculate wheel rotations and circular track distances.',
        principles: [
          {
            id: 'p-g7-circle-circumf-calc',
            title: 'Circumference Calculations',
            standard: '7.G.B.4',
            summary: 'Calculate circumference of circles with given radius or diameter.',
            generatorId: 'g7.circle-circumference',
          },
        ],
      },
      {
        id: 'g7-math-u7-l3',
        unitId: 'g7-math-u7',
        title: 'Calculating Circle Area A = πr²',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circumference/a/area-of-circles-review',
        videoTitle: 'Area of a Circle Formula',
        reading: 'Calculate the two-dimensional area of a circle with A = πr². If given diameter, divide by 2 to find radius before squaring.',
        principles: [
          {
            id: 'p-g7-circle-area-calc',
            title: 'Circle Area Computations',
            standard: '7.G.B.4',
            summary: 'Calculate area of circles and composite regions with circular components.',
            generatorId: 'g7.circle-area',
          },
        ],
      },
      {
        id: 'g7-math-u7-l4',
        unitId: 'g7-math-u7',
        title: 'Mid-Unit Quiz: Circles',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Circles Review',
        reading: 'Review session on calculating circumference, circle area, and solving real-world circular word problems.',
        principles: [
          {
            id: 'p-g7-u7-quiz',
            title: 'Circles Checkpoint',
            standard: '7.G.B.4',
            summary: 'Assess accuracy in circumference and area calculations.',
            generatorId: 'g7.circle-area',
          },
        ],
      },
      {
        id: 'g7-math-u7-l5',
        unitId: 'g7-math-u7',
        title: 'Unit 7 Test: Circles Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Unit 7 Test Review',
        reading: 'Comprehensive assessment of radius, diameter, circumference, and area of circles.',
        principles: [
          {
            id: 'p-g7-u7-test',
            title: 'Circles Mastery Exam',
            standard: '7.G.B.4',
            summary: 'Demonstrate complete mastery of circle geometry standards.',
            generatorId: 'g7.circle-circumference',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 8: ANGLE RELATIONSHIPS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u8',
    title: 'Unit 8: Angle Relationships',
    standards: ['7.G.B.5'],
    lessons: [
      {
        id: 'g7-math-u8-l1',
        unitId: 'g7-math-u8',
        title: 'Complementary and Supplementary Angles',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Complementary & Supplementary Angles',
        reading: 'Complementary angles add to 90 degrees. Supplementary angles add to 180 degrees. Write and solve equations to find unknown angle measures.',
        principles: [
          {
            id: 'p-g7-comp-supp-angles',
            title: 'Complementary and Supplementary Angles',
            standard: '7.G.B.5',
            summary: 'Use facts about supplementary and complementary angles in a multi-step problem to write and solve simple equations for an unknown angle in a figure.',
            generatorId: 'g7.angles-relations',
          },
        ],
      },
      {
        id: 'g7-math-u8-l2',
        unitId: 'g7-math-u8',
        title: 'Vertical and Adjacent Angles in Intersecting Lines',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Vertical Angles Across Intersecting Lines',
        reading: 'Vertical angles sit opposite each other across intersecting lines and are always equal in measure. Adjacent angles on a straight line form supplementary linear pairs.',
        principles: [
          {
            id: 'p-g7-vertical-angles',
            title: 'Vertical and Adjacent Angle Equations',
            standard: '7.G.B.5',
            summary: 'Use facts about vertical and adjacent angles to solve for unknown angle values.',
            generatorId: 'g7.angles-relations',
          },
        ],
      },
      {
        id: 'g7-math-u8-l3',
        unitId: 'g7-math-u8',
        title: 'Multi-Step Algebraic Angle Equations',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Solving Algebraic Angle Equations',
        reading: 'Set up expressions like (2x + 15) + (3x - 10) = 180 and solve for variable x and angle measures.',
        principles: [
          {
            id: 'p-g7-algebraic-angles',
            title: 'Multi-Step Angle Equations',
            standard: '7.G.B.5',
            summary: 'Write and solve multi-step algebraic equations based on geometric angle relationships.',
            generatorId: 'g7.angles-relations',
          },
        ],
      },
      {
        id: 'g7-math-u8-l4',
        unitId: 'g7-math-u8',
        title: 'Mid-Unit Quiz: Angle Relationships',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Angle Relationships Quiz',
        reading: 'Review session on complementary, supplementary, and vertical angle problem solving.',
        principles: [
          {
            id: 'p-g7-u8-quiz',
            title: 'Angle Relationships Checkpoint',
            standard: '7.G.B.5',
            summary: 'Assess mastery of angle relationships and equation solving.',
            generatorId: 'g7.angles-relations',
          },
        ],
      },
      {
        id: 'g7-math-u8-l5',
        unitId: 'g7-math-u8',
        title: 'Unit 8 Test: Angle Relationships Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
        videoTitle: 'Unit 8 Test Review',
        reading: 'Comprehensive assessment of geometric angle relationships and algebraic angle proofs.',
        principles: [
          {
            id: 'p-g7-u8-test',
            title: 'Angle Relationships Exam',
            standard: '7.G.B.5',
            summary: 'Demonstrate complete mastery of 7th grade angle geometry standards.',
            generatorId: 'g7.angles-relations',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 9: STATISTICS & SAMPLING (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u9',
    title: 'Unit 9: Statistics & Sampling',
    standards: ['7.SP.A.1', '7.SP.A.2', '7.SP.B.3', '7.SP.B.4'],
    lessons: [
      {
        id: 'g7-math-u9-l1',
        unitId: 'g7-math-u9',
        title: 'Random Sampling and Representative Samples',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Random Sampling and Populations',
        reading: 'Understand that statistics can be used to gain information about a population by examining a sample. Random sampling tends to produce representative samples and valid inferences.',
        principles: [
          {
            id: 'p-g7-stat-sampling',
            title: 'Random Sampling and Inferences',
            standard: '7.SP.A.1',
            summary: 'Understand random sampling principles to generate representative data about a population.',
            bank: G7_MATH_BANKS.statistics,
          },
        ],
      },
      {
        id: 'g7-math-u9-l2',
        unitId: 'g7-math-u9',
        title: 'Making Inferences about Populations from Sample Data',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Inferences from Samples',
        reading: 'Use data from a random sample to draw inferences about a population with an unknown characteristic of interest. Multiply sample proportions by total population.',
        principles: [
          {
            id: 'p-g7-stat-pop-infer',
            title: 'Population Estimates from Proportions',
            standard: '7.SP.A.2',
            summary: 'Use sample proportions to estimate quantities in larger populations.',
            bank: G7_MATH_BANKS.statistics,
          },
        ],
      },
      {
        id: 'g7-math-u9-l3',
        unitId: 'g7-math-u9',
        title: 'Comparing Two Populations with Measures of Center and Variability',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Comparing Distributions and Centers',
        reading: 'Informally assess the degree of visual overlap of two numerical data distributions with similar variabilities, measuring difference between centers as a multiple of a measure of variability.',
        principles: [
          {
            id: 'p-g7-stat-compare-dist',
            title: 'Comparing Distributions and Variability',
            standard: '7.SP.B.3',
            summary: 'Use measures of center (mean, median) and variability (IQR, MAD) from random samples to draw informal comparative inferences.',
            bank: G7_MATH_BANKS.statistics,
          },
        ],
      },
      {
        id: 'g7-math-u9-l4',
        unitId: 'g7-math-u9',
        title: 'Mid-Unit Quiz: Statistics & Sampling',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Statistics Review',
        reading: 'Review session on random sampling, population predictions, and comparing data distributions.',
        principles: [
          {
            id: 'p-g7-u9-quiz',
            title: 'Statistics Checkpoint',
            standard: '7.SP.A.2',
            summary: 'Assess mastery of sampling methods and data inferences.',
            bank: G7_MATH_BANKS.statistics,
          },
        ],
      },
      {
        id: 'g7-math-u9-l5',
        unitId: 'g7-math-u9',
        title: 'Unit 9 Test: Statistics & Sampling Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Unit 9 Test Review',
        reading: 'Comprehensive assessment of representative sampling, population inferences, and comparative data analysis.',
        principles: [
          {
            id: 'p-g7-u9-test',
            title: 'Statistics & Sampling Exam',
            standard: '7.SP.A.1',
            summary: 'Demonstrate complete mastery of 7th grade statistics standards.',
            bank: G7_MATH_BANKS.statistics,
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 10: PROBABILITY & COMPOUND EVENTS (5 Skills / Lessons)
  // =========================================================================
  {
    id: 'g7-math-u10',
    title: 'Unit 10: Probability & Compound Events',
    standards: ['7.SP.C.5', '7.SP.C.6', '7.SP.C.7', '7.SP.C.8'],
    lessons: [
      {
        id: 'g7-math-u10-l1',
        unitId: 'g7-math-u10',
        title: 'Likelihood of Events: 0 to 1 Scale',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-compound-events/v/probability-from-compound-sample-space',
        videoTitle: 'Probability on 0 to 1 Scale',
        reading: 'Understand that probability is a number between 0 and 1 that expresses the likelihood of the event occurring. 0 is impossible, 1/2 is equally likely as unlikely, and 1 is certain.',
        principles: [
          {
            id: 'p-g7-prob-likelihood',
            title: 'Probability Likelihood Scale',
            standard: '7.SP.C.5',
            summary: 'Interpret the probability of a chance event as a number between 0 and 1.',
            generatorId: 'g7.probability-simple',
          },
        ],
      },
      {
        id: 'g7-math-u10-l2',
        unitId: 'g7-math-u10',
        title: 'Theoretical vs. Experimental Probability & Law of Large Numbers',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-theoretical-and-experimental-probability/v/comparing-theoretical-to-experimental-probabilites',
        videoTitle: 'Theoretical vs Experimental Probability',
        reading: 'Approximate the probability of a chance event by collecting data on the chance process that produces it and observing its long-run relative frequency.',
        principles: [
          {
            id: 'p-g7-prob-experimental',
            title: 'Theoretical and Experimental Probability',
            standard: '7.SP.C.6',
            summary: 'Approximate the probability of a chance event by observing its long-run relative frequency.',
            generatorId: 'g7.probability-simple',
          },
        ],
      },
      {
        id: 'g7-math-u10-l3',
        unitId: 'g7-math-u10',
        title: 'Compound Events, Tree Diagrams & Sample Spaces',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-compound-events/v/probability-from-compound-sample-space',
        videoTitle: 'Compound Events and Sample Spaces',
        reading: 'Find probabilities of compound events using organized lists, tables, tree diagrams, and simulation. Understand that the probability of a compound event is the fraction of outcomes in the sample space.',
        principles: [
          {
            id: 'p-g7-prob-compound',
            title: 'Compound Probability and Tree Diagrams',
            standard: '7.SP.C.8',
            summary: 'Find probabilities of compound events using organized lists, tables, tree diagrams, and simulation.',
            generatorId: 'g7.probability-simple',
          },
        ],
      },
      {
        id: 'g7-math-u10-l4',
        unitId: 'g7-math-u10',
        title: 'Mid-Unit Quiz: Probability',
        kind: 'lesson_review',
        estimatedMinutes: 10,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Probability Review',
        reading: 'Review session on simple and compound event probability calculations.',
        principles: [
          {
            id: 'p-g7-u10-quiz',
            title: 'Probability Checkpoint',
            standard: '7.SP.C.7',
            summary: 'Assess simple and compound event probability calculation accuracy.',
            generatorId: 'g7.probability-simple',
          },
        ],
      },
      {
        id: 'g7-math-u10-l5',
        unitId: 'g7-math-u10',
        title: 'Unit 10 Test: Probability Mastery',
        kind: 'lesson_review',
        estimatedMinutes: 15,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
        videoTitle: 'Unit 10 Test Review',
        reading: 'Comprehensive assessment of probability models, compound events, and sample space analysis.',
        principles: [
          {
            id: 'p-g7-u10-test',
            title: 'Probability Mastery Exam',
            standard: '7.SP.C.8',
            summary: 'Demonstrate complete mastery of 7th grade probability standards.',
            generatorId: 'g7.probability-simple',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 11: COURSE CHALLENGE
  // =========================================================================
  {
    id: 'g7-math-u11',
    title: 'Unit 11: Grade 7 Math Course Challenge',
    standards: ['7.RP', '7.NS', '7.EE', '7.G', '7.SP'],
    lessons: [
      {
        id: 'g7-math-u11-l1',
        unitId: 'g7-math-u11',
        title: 'Course Challenge Part 1: Proportions, Percentages & Integers',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math',
        videoTitle: 'Course Challenge Part 1',
        reading: 'Comprehensive review covering constant of proportionality, multi-step percent change, and signed integer arithmetic.',
        principles: [
          {
            id: 'p-g7-cc-part1',
            title: 'Proportions and Integers Capstone',
            standard: '7.RP',
            summary: 'Comprehensive evaluation of Grade 7 ratios, percentages, and signed number standards.',
            generatorId: 'g7.percent-change',
          },
        ],
      },
      {
        id: 'g7-math-u11-l2',
        unitId: 'g7-math-u11',
        title: 'Course Challenge Part 2: Linear Expressions & Two-Step Equations',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math',
        videoTitle: 'Course Challenge Part 2',
        reading: 'Comprehensive review testing distributive property, combining like terms, two-step equations, and inequalities.',
        principles: [
          {
            id: 'p-g7-cc-part2',
            title: 'Algebraic Expressions & Equations Capstone',
            standard: '7.EE',
            summary: 'Comprehensive evaluation of Grade 7 algebraic standards.',
            generatorId: 'g7.two-step-eq',
          },
        ],
      },
      {
        id: 'g7-math-u11-l3',
        unitId: 'g7-math-u11',
        title: 'Course Challenge Part 3: Geometry, Circles & Probability',
        kind: 'lesson_review',
        estimatedMinutes: 20,
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math',
        videoTitle: 'Course Challenge Part 3',
        reading: 'Final comprehensive assessment covering circle area/circumference, angle relationships, sampling, and compound probability.',
        principles: [
          {
            id: 'p-g7-cc-part3',
            title: 'Geometry & Probability Capstone',
            standard: '7.G',
            summary: 'Comprehensive evaluation of Grade 7 geometry and probability standards.',
            generatorId: 'g7.circle-area',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // UNIT 12: EXPLORE MATH THROUGH SIMULATIONS & PROJECTS (Non-graded enrichment)
  // =========================================================================
  {
    id: 'g7-math-u12',
    title: 'Unit 12: Explore Math Through Simulations & Projects',
    kind: 'explore',
    standards: ['7.RP.A.2', '7.G.B.4', '7.SP.C.6'],
    lessons: [],
    exploreItems: [
      {
        id: 'g7-math-exp-phet-balance',
        title: 'PhET Simulation: Balancing Act & Proportions',
        type: 'simulation',
        description: 'Test balance beam lever rules to investigate direct proportions and equations in dynamic physical environments.',
        url: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
        estimatedMinutes: 20,
        reflectionPrompt: 'What happens to the required mass when you double its distance from the pivot point?',
        requiresParentPin: false,
      },
      {
        id: 'g7-math-exp-desmos-circle',
        title: 'Desmos Geometry: Radius, Circumference & Area Explorer',
        type: 'simulation',
        description: 'Drag interactive radius sliders on dynamic circles to observe the ratio C/d approaching pi (3.14159...) in real time.',
        url: 'https://www.desmos.com/geometry',
        estimatedMinutes: 20,
        reflectionPrompt: 'Does the ratio of circumference to diameter change when a circle gets 10 times larger?',
        requiresParentPin: false,
      },
      {
        id: 'g7-math-exp-dice-sim',
        title: 'Probability Lab: 1,000 Coin Flips Law of Large Numbers',
        type: 'experiment',
        description: 'Simulate 10, 100, and 1,000 coin flips using an online RNG or a pair of physical dice. Graph how experimental probability converges to theoretical 50%.',
        estimatedMinutes: 25,
        materials: ['A standard coin or 6-sided die', 'Graph paper or spreadsheet'],
        steps: [
          'Flip a coin 20 times and calculate the fraction of heads.',
          'Flip the coin another 80 times (100 total) and calculate the cumulative percent.',
          'Record whether experimental results get closer to 50% as total flips increase.',
        ],
        reflectionPrompt: 'Why does a larger sample size give results closer to the true theoretical probability?',
        requiresParentPin: false,
      },
      {
        id: 'g7-math-exp-floorplan-scale',
        title: 'Architectural Project: Scale Drawing of Your Bedroom',
        type: 'project',
        description: 'Measure your bedroom walls with a tape measure. Choose an appropriate scale factor (e.g. 1/4 inch = 1 foot) and draft an accurate blueprint on grid paper.',
        estimatedMinutes: 35,
        materials: ['Tape measure', 'Grid paper or graph notebook', 'Ruler and pencil'],
        steps: [
          'Measure length and width of bedroom in feet and inches.',
          'Calculate blueprint dimensions using scale factor (1 cm = 1 ft or 1/4 in = 1 ft).',
          'Draw the room outline and place door, window, bed, and desk in correct scaled locations.',
        ],
        reflectionPrompt: 'What scale factor made your bedroom fit most neatly onto a single sheet of paper?',
        requiresParentPin: false,
      },
    ],
  },

  // =========================================================================
  // UNIT 13: TEACHER RESOURCES (Parent / Instructor Portal)
  // =========================================================================
  {
    id: 'g7-math-u13',
    title: 'Unit 13: Teacher Resources & Pacing',
    kind: 'teacher_resources',
    standards: ['7.RP', '7.NS', '7.EE', '7.G', '7.SP'],
    lessons: [],
    resources: [
      {
        id: 'g7-math-res-pacing',
        title: 'Grade 7 Mathematics 36-Week Pacing Guide',
        kind: 'pacing_guide',
        description: 'Curriculum roadmap covering proportional relationships, integer operations, equations, circle geometry, and probability.',
        body: `## Grade 7 Math Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Proportional Relationships & Unit Rates (7.RP.1-2)
- **Weeks 5–8**: Unit 2 — Percentages, Markup, Discount & Simple Interest (7.RP.3)
- **Weeks 9–13**: Unit 3 & 4 — Rational Numbers: Integers, Multiplication & Division (7.NS.1-3)
- **Week 14**: Quarter 1 Assessment & Diagnostic Review
- **Weeks 15–18**: Unit 5 — Expressions, Two-Step Equations & Inequalities (7.EE.1-4)
- **Weeks 19–23**: Unit 6 — Scale Drawings & Geometry of Figures (7.G.1-3)
- **Weeks 24–27**: Unit 7 & 8 — Circles & Angle Relationships (7.G.4-5)
- **Week 28**: Quarter 2 & 3 Algebra and Geometry Review
- **Weeks 29–32**: Unit 9 — Statistics & Sampling (7.SP.1-4)
- **Weeks 33–35**: Unit 10 — Probability & Compound Events (7.SP.5-8)
- **Week 36**: Year-End Capstone Simulations & Course Challenge`,
      },
      {
        id: 'g7-math-res-standards',
        title: 'Grade 7 Common Core & Ohio Standards Crosswalk',
        kind: 'standards_map',
        description: 'Alignment matrix matching Grade 7 units to Ohio Learning Standards for Mathematics.',
        body: `| Unit | Standards | Target Skill |
|---|---|---|
| Unit 1 | 7.RP.A.1-2 | Constant of proportionality k=y/x, complex fraction unit rates |
| Unit 2 | 7.RP.A.3 | Percent change, markup, discount, simple interest I=Prt |
| Unit 3-4 | 7.NS.A.1-3 | All four operations with positive and negative rational numbers |
| Unit 5 | 7.EE.A-B | Combining like terms, distributive property, 2-step equations & inequalities |
| Unit 6 | 7.G.A.1-3 | Scale drawings, triangle inequality, 2D cross sections of 3D solids |
| Unit 7 | 7.G.B.4 | Circumference C=2πr, circle area A=πr² |
| Unit 8 | 7.G.B.5 | Supplementary, complementary, vertical angle equations |
| Unit 9 | 7.SP.A-B | Random sampling, population inferences, comparing distributions |
| Unit 10 | 7.SP.C.5-8 | Simple and compound probability, sample space models |`,
      },
      {
        id: 'g7-math-res-formulas',
        title: 'Grade 7 Formula Reference Sheet',
        kind: 'printable',
        description: 'Printable reference cheat sheet with key formulas for 7th grade math.',
        body: `## Grade 7 Formula Cheat Sheet

### Proportions & Finance
- **Constant of Proportionality**: $k = \\frac{y}{x} \\rightarrow y = kx$
- **Simple Interest**: $I = Prt$ ($P$ = principal, $r$ = annual decimal rate, $t$ = years)
- **Percent Change**: $\\frac{|\\text{New} - \\text{Old}|}{\\text{Old}} \\times 100\\%$

### Circles
- **Diameter**: $d = 2r$
- **Circumference**: $C = 2\\pi r = \\pi d$
- **Area**: $A = \\pi r^2$ (use $\\pi \\approx 3.14$)

### Angles
- **Complementary**: $\\angle A + \\angle B = 90^\\circ$
- **Supplementary**: $\\angle A + \\angle B = 180^\\circ$`,
      },
    ],
  },
]
