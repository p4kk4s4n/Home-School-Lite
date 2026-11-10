import { Course } from '../../types'

export const G6_MATH_COURSE: Course = {
  id: 'g6-math',
  subject: 'math',
  grade: 6,
  title: 'Grade 6 Mathematics',
  subtitle: 'Ratios, Rational Arithmetic, Algebraic Expressions, Geometry & Statistics',
  credits: 1.0,
  color: '#3b82f6',
  icon: '📐',
  units: [
    // -------------------------------------------------------------------------
    // UNIT 1: RATIOS
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u1',
      title: 'Unit 1: Ratios',
      standards: ['6.RP.A.1', '6.RP.A.3a'],
      lessons: [
        {
          id: 'g6-math-u1-l1',
          unitId: 'g6-math-u1',
          title: 'Intro to Ratios & Notation',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/ratios-intro',
          videoTitle: 'Introduction to Ratios',
          reading: 'A ratio compares two quantities by division. You can write a ratio in three forms: with the word "to" (3 to 4), with a colon (3:4), or as a fraction (3/4). Always keep the order of items matching the question.',
          principles: [
            {
              id: 'p-g6-ratio-intro',
              title: 'Writing and Simplifying Ratios',
              standard: '6.RP.A.1',
              summary: 'Compare two quantities using a:b notation and simplify by dividing by the greatest common factor.',
              generatorId: 'g6.ratios-simplify',
            },
          ],
        },
        {
          id: 'g6-math-u1-l2',
          unitId: 'g6-math-u1',
          title: 'Part-to-Part and Part-to-Whole Ratios',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/part-to-whole-ratios',
          videoTitle: 'Part to Whole Ratios',
          reading: 'A part-to-part ratio compares one piece of a group to another (like 4 dogs to 3 cats). A part-to-whole ratio compares one piece to the entire group (like 4 dogs to 7 total pets). To find the whole, sum all parts.',
          principles: [
            {
              id: 'p-g6-ratio-part-whole',
              title: 'Part-to-Whole Relationships',
              standard: '6.RP.A.1',
              summary: 'Calculate total items and express the ratio of a specific category to the total.',
              generatorId: 'g6.ratios-part-whole',
            },
          ],
        },
        {
          id: 'g6-math-u1-l3',
          unitId: 'g6-math-u1',
          title: 'Ratio Tables & Equivalent Ratios',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-equivalent-ratios/v/ratio-tables',
          videoTitle: 'Solving Ratio Problems with Tables',
          reading: 'Equivalent ratios name the same relationship. You can generate equivalent ratios by multiplying or dividing both terms by the same nonzero number. Ratio tables organize pairs of equivalent values clearly.',
          principles: [
            {
              id: 'p-g6-ratio-tables',
              title: 'Scaling in Ratio Tables',
              standard: '6.RP.A.3a',
              summary: 'Find missing values in ratio tables by scaling up or down with multiplication and division.',
              generatorId: 'g6.ratios-tables',
            },
          ],
        },
        {
          id: 'g6-math-u1-l4',
          unitId: 'g6-math-u1',
          title: 'Mid-Unit Quiz 1: Ratios & Tables',
          kind: 'lesson_review',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic',
          videoTitle: 'Review: Ratios and Proportions',
          reading: 'Review check covering ratio notation, part-to-part and part-to-whole relationships, and equivalent values in ratio tables. Ensure you check order and simplify terms.',
          principles: [
            {
              id: 'p-g6-ratio-intro-rev',
              title: 'Ratio Simplification Review',
              standard: '6.RP.A.1',
              summary: 'Review ratio simplification and comparison.',
              generatorId: 'g6.ratios-simplify',
            },
            {
              id: 'p-g6-ratio-tables-rev',
              title: 'Ratio Table Scaling Review',
              standard: '6.RP.A.3a',
              summary: 'Review finding missing table values with unit rates and scaling.',
              generatorId: 'g6.ratios-tables',
            },
          ],
        },
        {
          id: 'g6-math-u1-l5',
          unitId: 'g6-math-u1',
          title: 'Unit 1 Test: Ratios',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic',
          videoTitle: 'Unit Test Practice: Ratios',
          reading: 'Unit Exam testing all ratio concepts: simplifying ratios, distinguishing part-to-part vs. part-to-whole, and scaling values across tables.',
          principles: [
            {
              id: 'p-g6-ratio-exam-sim',
              title: 'Ratio Simplification',
              standard: '6.RP.A.1',
              summary: 'Simplify ratios into lowest terms.',
              generatorId: 'g6.ratios-simplify',
            },
            {
              id: 'p-g6-ratio-exam-pw',
              title: 'Part-to-Whole Ratio Calculation',
              standard: '6.RP.A.1',
              summary: 'Compute ratios to total sums.',
              generatorId: 'g6.ratios-part-whole',
            },
            {
              id: 'p-g6-ratio-exam-tbl',
              title: 'Equivalent Ratio Problems',
              standard: '6.RP.A.3a',
              summary: 'Solve multi-step ratio problems using scaling.',
              generatorId: 'g6.ratios-tables',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 2: ARITHMETIC WITH RATIONAL NUMBERS
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u2',
      title: 'Unit 2: Arithmetic with Rational Numbers',
      standards: ['6.NS.A.1', '6.NS.B.2', '6.NS.B.3', '6.NS.B.4'],
      lessons: [
        {
          id: 'g6-math-u2-l1',
          unitId: 'g6-math-u2',
          title: 'Dividing Fractions by Fractions',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-dividing-fractions/v/dividing-fractions-example',
          videoTitle: 'Dividing Fractions by Fractions',
          reading: 'To divide by a fraction, multiply by its reciprocal (flip the second fraction). For example: (a/b) ÷ (c/d) = (a/b) × (d/c). Then multiply straight across and simplify.',
          principles: [
            {
              id: 'p-g6-frac-div',
              title: 'Fraction Division and Reciprocals',
              standard: '6.NS.A.1',
              summary: 'Compute quotients of fractions using reciprocals.',
              generatorId: 'g6.fraction-division',
            },
          ],
        },
        {
          id: 'g6-math-u2-l2',
          unitId: 'g6-math-u2',
          title: 'Multi-Digit Decimal Multiplication',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-multiplying-decimals/v/multiplying-decimals',
          videoTitle: 'Multiplying Decimals',
          reading: 'Multiply multi-digit decimals as if they were whole numbers. Then count the total number of decimal digits in both factors combined, and place the decimal point that many places from the right in your answer.',
          principles: [
            {
              id: 'p-g6-dec-mult',
              title: 'Decimal Multiplication Algorithm',
              standard: '6.NS.B.3',
              summary: 'Fluently multiply multi-digit decimals using standard algorithms.',
              generatorId: 'g6.decimal-multiplication',
            },
          ],
        },
        {
          id: 'g6-math-u2-l3',
          unitId: 'g6-math-u2',
          title: 'Greatest Common Factor & Least Common Multiple',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-gcf-lcm/v/greatest-common-factor',
          videoTitle: 'GCF and LCM',
          reading: 'The Greatest Common Factor (GCF) is the largest integer that divides both numbers evenly. The Least Common Multiple (LCM) is the smallest positive number that is a multiple of both numbers.',
          principles: [
            {
              id: 'p-g6-gcf-lcm',
              title: 'GCF and LCM Calculations',
              standard: '6.NS.B.4',
              summary: 'Find the greatest common factor and least common multiple of two whole numbers.',
              generatorId: 'g6.factors-gcf-lcm',
            },
          ],
        },
        {
          id: 'g6-math-u2-l4',
          unitId: 'g6-math-u2',
          title: 'Unit 2 Test: Rational Arithmetic',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations',
          videoTitle: 'Rational Arithmetic Test Review',
          reading: 'Unit test covering fraction division via reciprocals, multi-digit decimal multiplication, and finding GCF/LCM.',
          principles: [
            {
              id: 'p-g6-frac-div-t',
              title: 'Fraction Division',
              standard: '6.NS.A.1',
              summary: 'Divide fractions with reciprocal multiplication.',
              generatorId: 'g6.fraction-division',
            },
            {
              id: 'p-g6-dec-mult-t',
              title: 'Decimal Multiplication',
              standard: '6.NS.B.3',
              summary: 'Multiply decimals accurately.',
              generatorId: 'g6.decimal-multiplication',
            },
            {
              id: 'p-g6-gcf-lcm-t',
              title: 'GCF and LCM Applications',
              standard: '6.NS.B.4',
              summary: 'Solve GCF and LCM questions.',
              generatorId: 'g6.factors-gcf-lcm',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 3: RATES AND PERCENTAGES
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u3',
      title: 'Unit 3: Rates and Percentages',
      standards: ['6.RP.A.2', '6.RP.A.3b', '6.RP.A.3c'],
      lessons: [
        {
          id: 'g6-math-u3-l1',
          unitId: 'g6-math-u3',
          title: 'Unit Rates and Unit Pricing',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-rates/v/finding-unit-rates',
          videoTitle: 'Unit Rates Overview',
          reading: 'A unit rate compares a quantity to ONE unit of another quantity (such as miles per hour or dollars per pound). Divide the first quantity by the second quantity to find the rate per single unit.',
          principles: [
            {
              id: 'p-g6-unit-rate',
              title: 'Computing Unit Rates',
              standard: '6.RP.A.2',
              summary: 'Calculate unit rates from proportional relationships.',
              generatorId: 'g6.ratios-unit-rate',
            },
          ],
        },
        {
          id: 'g6-math-u3-l2',
          unitId: 'g6-math-u3',
          title: 'Percents as Rates per 100',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-percentages/v/describing-the-meaning-of-percent',
          videoTitle: 'Meaning of Percent',
          reading: 'Percent means "per hundred" or parts per 100. For example, 35% means 35 out of 100, which can be written as 35/100 or 0.35. To find a percent of a number, convert the percent to a decimal and multiply.',
          principles: [
            {
              id: 'p-g6-percent-calc',
              title: 'Finding Percent of a Number',
              standard: '6.RP.A.3c',
              summary: 'Calculate a percentage of a quantity as a rate per 100.',
              generatorId: 'g6.percent-of-number',
            },
          ],
        },
        {
          id: 'g6-math-u3-l3',
          unitId: 'g6-math-u3',
          title: 'Unit 3 Test: Rates and Percentages',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic',
          videoTitle: 'Rates and Percentages Test Review',
          reading: 'Unit Exam testing unit rate calculations, best buy comparisons, and calculating percentages of quantities.',
          principles: [
            {
              id: 'p-g6-rate-exam',
              title: 'Unit Rates and Pricing',
              standard: '6.RP.A.2',
              summary: 'Solve unit rate problems.',
              generatorId: 'g6.ratios-unit-rate',
            },
            {
              id: 'p-g6-pct-exam',
              title: 'Percentage of a Quantity',
              standard: '6.RP.A.3c',
              summary: 'Calculate percentage values.',
              generatorId: 'g6.percent-of-number',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 4: EXPONENTS AND ORDER OF OPERATIONS
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u4',
      title: 'Unit 4: Exponents and Order of Operations',
      standards: ['6.EE.A.1'],
      lessons: [
        {
          id: 'g6-math-u4-l1',
          unitId: 'g6-math-u4',
          title: 'Understanding Exponents & Powers',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-exponents/v/introduction-to-exponents',
          videoTitle: 'Introduction to Exponents',
          reading: 'An exponent shows how many times a base number is multiplied by itself. For example, 4³ = 4 × 4 × 4 = 64. Remember that any nonzero number to the 1st power is itself, and to the 0 power is 1.',
          principles: [
            {
              id: 'p-g6-exp-intro',
              title: 'Evaluating Numerical Exponents',
              standard: '6.EE.A.1',
              summary: 'Write and evaluate numerical expressions involving whole-number exponents.',
              generatorId: 'g6.expressions-exponents',
            },
          ],
        },
        {
          id: 'g6-math-u4-l2',
          unitId: 'g6-math-u4',
          title: 'Order of Operations with Powers (PEMDAS)',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-order-of-operations/v/order-of-operations',
          videoTitle: 'Order of Operations with Exponents',
          reading: 'Follow the standard order of operations: Parentheses first, then Exponents, then Multiplication and Division from left to right, and finally Addition and Subtraction from left to right.',
          principles: [
            {
              id: 'p-g6-order-ops',
              title: 'Order of Operations with Exponents',
              standard: '6.EE.A.1',
              summary: 'Evaluate expressions using PEMDAS order including powers.',
              generatorId: 'g6.expressions-evaluate',
            },
          ],
        },
        {
          id: 'g6-math-u4-l3',
          unitId: 'g6-math-u4',
          title: 'Unit 4 Test: Exponents and PEMDAS',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations',
          videoTitle: 'Exponents and Order of Operations Test Review',
          reading: 'Unit exam testing powers, base-exponent notation, and multi-step order of operations evaluations.',
          principles: [
            {
              id: 'p-g6-exp-exam',
              title: 'Exponent Evaluation',
              standard: '6.EE.A.1',
              summary: 'Compute powers accurately.',
              generatorId: 'g6.expressions-exponents',
            },
            {
              id: 'p-g6-pemdas-exam',
              title: 'Order of Operations',
              standard: '6.EE.A.1',
              summary: 'Apply PEMDAS to multi-operation expressions.',
              generatorId: 'g6.expressions-evaluate',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 5: NEGATIVE NUMBERS & ABSOLUTE VALUE
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u5',
      title: 'Unit 5: Negative Numbers',
      standards: ['6.NS.C.5', '6.NS.C.6', '6.NS.C.7'],
      lessons: [
        {
          id: 'g6-math-u5-l1',
          unitId: 'g6-math-u5',
          title: 'Negative Numbers & Number Lines',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-neg-dec-frac-number-line/v/negative-numbers-introduction',
          videoTitle: 'Negative Numbers on the Number Line',
          reading: 'Negative numbers lie to the left of zero on a horizontal number line. They describe quantities less than zero, such as temperatures below freezing or depths below sea level. Further left means smaller.',
          principles: [
            {
              id: 'p-g6-neg-compare',
              title: 'Comparing and Ordering Integers',
              standard: '6.NS.C.7',
              summary: 'Order and compare positive and negative rational numbers on a number line.',
              generatorId: 'g6.integers-rational',
            },
          ],
        },
        {
          id: 'g6-math-u5-l2',
          unitId: 'g6-math-u5',
          title: 'Absolute Value of Rational Numbers',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-abs-value/v/absolute-value-of-integers',
          videoTitle: 'Absolute Value',
          reading: 'The absolute value of a number is its distance from zero on the number line. Distance is always non-negative. For example, | -7 | = 7 and | 7 | = 7. Compare absolute values to compare magnitude.',
          principles: [
            {
              id: 'p-g6-abs-value',
              title: 'Absolute Value and Distance from Zero',
              standard: '6.NS.C.7c',
              summary: 'Interpret absolute value as magnitude and distance from zero.',
              generatorId: 'g6.integers-abs-compare',
            },
          ],
        },
        {
          id: 'g6-math-u5-l3',
          unitId: 'g6-math-u5',
          title: 'Unit 5 Test: Negative Numbers & Absolute Value',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic',
          videoTitle: 'Negative Numbers Test Practice',
          reading: 'Unit exam testing integers, real-world negative quantities, and absolute values.',
          principles: [
            {
              id: 'p-g6-neg-comp-t',
              title: 'Integer Comparison',
              standard: '6.NS.C.7',
              summary: 'Compare negative and positive values.',
              generatorId: 'g6.integers-rational',
            },
            {
              id: 'p-g6-abs-val-t',
              title: 'Absolute Value Calculations',
              standard: '6.NS.C.7c',
              summary: 'Compute and compare absolute values.',
              generatorId: 'g6.integers-abs-compare',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 6: VARIABLES & EXPRESSIONS
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u6',
      title: 'Unit 6: Variables & Expressions',
      standards: ['6.EE.A.2', '6.EE.A.3', '6.EE.A.4'],
      lessons: [
        {
          id: 'g6-math-u6-l1',
          unitId: 'g6-math-u6',
          title: 'Writing and Evaluating Expressions',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-evaluating-expressions/v/evaluating-expressions-in-one-variable',
          videoTitle: 'Evaluating Algebraic Expressions',
          reading: 'A variable is a letter that represents an unknown number. To evaluate an expression with variables, substitute the given value for each variable and calculate following the order of operations.',
          principles: [
            {
              id: 'p-g6-eval-expr',
              title: 'Variable Substitution and Evaluation',
              standard: '6.EE.A.2c',
              summary: 'Evaluate expressions at specific values of their variables.',
              generatorId: 'g6.expressions-evaluate',
            },
          ],
        },
        {
          id: 'g6-math-u6-l2',
          unitId: 'g6-math-u6',
          title: 'Equivalent Expressions & Distributive Property',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-equivalent-expressions/v/combining-like-terms',
          videoTitle: 'Distributive Property and Equivalent Expressions',
          reading: 'Apply the distributive property to generate equivalent expressions: a(b + c) = ab + ac. You can also combine like terms that share the exact same variable part.',
          principles: [
            {
              id: 'p-g6-distrib-prop',
              title: 'Distributive Property and Equivalent Expressions',
              standard: '6.EE.A.3',
              summary: 'Apply the properties of operations to generate equivalent expressions.',
              generatorId: 'g6.expressions-distributive',
            },
          ],
        },
        {
          id: 'g6-math-u6-l3',
          unitId: 'g6-math-u6',
          title: 'Unit 6 Test: Variables & Expressions',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables',
          videoTitle: 'Expressions Test Practice',
          reading: 'Unit exam testing algebraic evaluation, translating word descriptions, and applying the distributive property.',
          principles: [
            {
              id: 'p-g6-expr-eval-t',
              title: 'Expression Evaluation',
              standard: '6.EE.A.2c',
              summary: 'Evaluate expressions for given values.',
              generatorId: 'g6.expressions-evaluate',
            },
            {
              id: 'p-g6-distrib-t',
              title: 'Distributive Expansion',
              standard: '6.EE.A.3',
              summary: 'Expand expressions with distributive property.',
              generatorId: 'g6.expressions-distributive',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 7: EQUATIONS & INEQUALITIES
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u7',
      title: 'Unit 7: Equations & Inequalities',
      standards: ['6.EE.B.5', '6.EE.B.7', '6.EE.B.8'],
      lessons: [
        {
          id: 'g6-math-u7-l1',
          unitId: 'g6-math-u7',
          title: 'Solving One-Step Equations',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-add-sub-equations/v/adding-and-subtracting-equations',
          videoTitle: 'Solving One-Step Equations',
          reading: 'An equation states that two expressions are equal. Use inverse operations to isolate the variable on one side. Undo addition with subtraction, and undo multiplication with division.',
          principles: [
            {
              id: 'p-g6-one-step-eq',
              title: 'Solving One-Step Equations',
              standard: '6.EE.B.7',
              summary: 'Solve real-world problems by writing and solving equations of the form x + p = q and px = q.',
              generatorId: 'g6.one-step-equations',
            },
          ],
        },
        {
          id: 'g6-math-u7-l2',
          unitId: 'g6-math-u7',
          title: 'Writing and Solving Inequalities',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-inequalities/v/testing-solutions-to-inequalities',
          videoTitle: 'Inequalities on a Number Line',
          reading: 'An inequality compares two values using <, >, ≤, or ≥. Inequalities have infinitely many solutions that can be graphed as a shaded ray on a number line with open or closed circles.',
          principles: [
            {
              id: 'p-g6-inequalities',
              title: 'One-Step Inequalities and Solution Sets',
              standard: '6.EE.B.8',
              summary: 'Write and solve inequalities representing conditions or constraints.',
              generatorId: 'g6.equations-inequalities',
            },
          ],
        },
        {
          id: 'g6-math-u7-l3',
          unitId: 'g6-math-u7',
          title: 'Unit 7 Test: Equations & Inequalities',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities',
          videoTitle: 'Equations and Inequalities Test Review',
          reading: 'Unit exam testing one-step equations with all four operations, inverse operations, and inequality solutions.',
          principles: [
            {
              id: 'p-g6-eq-exam',
              title: 'One-Step Equation Solutions',
              standard: '6.EE.B.7',
              summary: 'Solve algebraic equations.',
              generatorId: 'g6.one-step-equations',
            },
            {
              id: 'p-g6-ineq-exam',
              title: 'Inequality Constraints',
              standard: '6.EE.B.8',
              summary: 'Solve and graph inequalities.',
              generatorId: 'g6.equations-inequalities',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 8: PLANE FIGURES
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u8',
      title: 'Unit 8: Plane Figures',
      standards: ['6.G.A.1'],
      lessons: [
        {
          id: 'g6-math-u8-l1',
          unitId: 'g6-math-u8',
          title: 'Area of Triangles',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area/v/triangle-area-examples',
          videoTitle: 'Area of a Triangle',
          reading: 'A triangle is half of a parallelogram with the same base and height. The formula for the area of a triangle is Area = (1/2) × base × height. The height must always be perpendicular to the base.',
          principles: [
            {
              id: 'p-g6-tri-area',
              title: 'Triangle Area Formula',
              standard: '6.G.A.1',
              summary: 'Find the area of right triangles, other triangles, and special quadrilaterals.',
              generatorId: 'g6.geometry-triangle',
            },
          ],
        },
        {
          id: 'g6-math-u8-l2',
          unitId: 'g6-math-u8',
          title: 'Area of Parallelograms and Composite Shapes',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area/v/area-of-a-parallelogram',
          videoTitle: 'Area of Parallelograms',
          reading: 'The area of a parallelogram is Area = base × perpendicular height. For composite figures made of multiple polygons, decompose the shape into triangles and rectangles, calculate each area, and add them.',
          principles: [
            {
              id: 'p-g6-pll-area',
              title: 'Parallelogram and Composite Area',
              standard: '6.G.A.1',
              summary: 'Calculate area of parallelograms and composite figures.',
              generatorId: 'g6.geometry-parallelogram',
            },
          ],
        },
        {
          id: 'g6-math-u8-l3',
          unitId: 'g6-math-u8',
          title: 'Unit 8 Test: Plane Figures',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic',
          videoTitle: 'Plane Figures Test Practice',
          reading: 'Unit exam testing area calculations for triangles, parallelograms, and decomposed polygons.',
          principles: [
            {
              id: 'p-g6-tri-exam',
              title: 'Triangle Area',
              standard: '6.G.A.1',
              summary: 'Calculate triangle area accurately.',
              generatorId: 'g6.geometry-triangle',
            },
            {
              id: 'p-g6-pll-exam',
              title: 'Parallelogram Area',
              standard: '6.G.A.1',
              summary: 'Calculate parallelogram area accurately.',
              generatorId: 'g6.geometry-parallelogram',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 9: COORDINATE PLANE
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u9',
      title: 'Unit 9: Coordinate Plane',
      standards: ['6.NS.C.6b', '6.NS.C.6c', '6.NS.C.8'],
      lessons: [
        {
          id: 'g6-math-u9-l1',
          unitId: 'g6-math-u9',
          title: 'Four Quadrants of the Coordinate Plane',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-coordinate-plane/v/points-on-the-coordinate-plane',
          videoTitle: 'Coordinate Plane Quadrants',
          reading: 'The coordinate plane has four quadrants numbered I, II, III, and IV counterclockwise from top right. Quadrant I is (+, +), Quadrant II is (-, +), Quadrant III is (-, -), and Quadrant IV is (+, -).',
          principles: [
            {
              id: 'p-g6-quad-ident',
              title: 'Quadrant Identification and Point Plotting',
              standard: '6.NS.C.6c',
              summary: 'Find and position pairs of integers and rational numbers on a coordinate plane.',
              generatorId: 'g6.coords-quadrants',
            },
          ],
        },
        {
          id: 'g6-math-u9-l2',
          unitId: 'g6-math-u9',
          title: 'Unit 9 Test: Coordinate Plane',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-coordinate-plane',
          videoTitle: 'Coordinate Plane Test Practice',
          reading: 'Unit exam testing point plotting, reflections across axes, and quadrant signs.',
          principles: [
            {
              id: 'p-g6-quad-exam',
              title: 'Coordinate Plane Quadrants and Reflections',
              standard: '6.NS.C.6c',
              summary: 'Locate points in all four quadrants.',
              generatorId: 'g6.coords-quadrants',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 10: 3D FIGURES & SURFACE AREA
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u10',
      title: 'Unit 10: 3D Figures',
      standards: ['6.G.A.2', '6.G.A.4'],
      lessons: [
        {
          id: 'g6-math-u10-l1',
          unitId: 'g6-math-u10',
          title: 'Volume of Rectangular Prisms',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-volume-surface-area/v/volume-of-a-rectangular-prism-with-fractional-dimensions',
          videoTitle: 'Volume with Fractional Edges',
          reading: 'Volume measures the 3D space inside a solid in cubic units. For a rectangular prism, Volume = length × width × height (or base area × height). This works with whole numbers and fractional edges.',
          principles: [
            {
              id: 'p-g6-prism-vol',
              title: 'Rectangular Prism Volume',
              standard: '6.G.A.2',
              summary: 'Find the volume of a right rectangular prism with fractional edge lengths.',
              generatorId: 'g6.geometry-prism',
            },
          ],
        },
        {
          id: 'g6-math-u10-l2',
          unitId: 'g6-math-u10',
          title: 'Surface Area Using Nets',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-volume-surface-area/v/surface-area-of-a-box-using-nets',
          videoTitle: 'Surface Area of Prisms',
          reading: 'A net is an unfolded, flat 2D pattern of a 3D solid. The surface area is the total area of all the faces combined. For a box, find the area of the 6 rectangular faces and sum them up.',
          principles: [
            {
              id: 'p-g6-surf-area',
              title: 'Surface Area of 3D Polyhedra',
              standard: '6.G.A.4',
              summary: 'Represent 3D figures using nets and calculate total surface area.',
              generatorId: 'g6.geometry-surface-area',
            },
          ],
        },
        {
          id: 'g6-math-u10-l3',
          unitId: 'g6-math-u10',
          title: 'Unit 10 Test: 3D Figures',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic',
          videoTitle: '3D Geometry Test Review',
          reading: 'Unit exam testing 3D prism volume and total surface area calculations.',
          principles: [
            {
              id: 'p-g6-vol-exam',
              title: 'Volume Calculation',
              standard: '6.G.A.2',
              summary: 'Compute rectangular prism volume.',
              generatorId: 'g6.geometry-prism',
            },
            {
              id: 'p-g6-sa-exam',
              title: 'Surface Area Calculation',
              standard: '6.G.A.4',
              summary: 'Compute total surface area using formulas and nets.',
              generatorId: 'g6.geometry-surface-area',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 11: DATA AND STATISTICS
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u11',
      title: 'Unit 11: Data and Statistics',
      standards: ['6.SP.A.1', '6.SP.A.2', '6.SP.A.3', '6.SP.B.4', '6.SP.B.5'],
      lessons: [
        {
          id: 'g6-math-u11-l1',
          unitId: 'g6-math-u11',
          title: 'Measures of Center: Mean and Median',
          estimatedMinutes: 12,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/mean-and-median/v/mean-median-and-mode',
          videoTitle: 'Mean, Median and Mode',
          reading: 'The mean is the arithmetic average (sum of all values divided by count). The median is the middle number when data is ordered from least to greatest. If there is an even count, average the two middle numbers.',
          principles: [
            {
              id: 'p-g6-stat-center',
              title: 'Mean and Median Calculations',
              standard: '6.SP.A.3',
              summary: 'Calculate and interpret measures of center for numerical datasets.',
              generatorId: 'g6.stats-mean-median',
            },
          ],
        },
        {
          id: 'g6-math-u11-l2',
          unitId: 'g6-math-u11',
          title: 'Measures of Variation: Range and Spread',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6th-box-whisker-plots/v/range-and-interquartile-range',
          videoTitle: 'Range and Interquartile Range',
          reading: 'Range measures how spread out data is (maximum minus minimum). It tells you whether numbers are clustered together or widely dispersed.',
          principles: [
            {
              id: 'p-g6-stat-range',
              title: 'Range and Variability',
              standard: '6.SP.A.3',
              summary: 'Calculate range and describe distribution spread.',
              generatorId: 'g6.stats-range-iqr',
            },
          ],
        },
        {
          id: 'g6-math-u11-l3',
          unitId: 'g6-math-u11',
          title: 'Unit 11 Test: Data and Statistics',
          kind: 'unit_test',
          estimatedMinutes: 15,
          videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics',
          videoTitle: 'Statistics Test Review',
          reading: 'Unit exam testing statistical questions, mean, median, and range calculations.',
          principles: [
            {
              id: 'p-g6-stat-center-t',
              title: 'Mean and Median',
              standard: '6.SP.A.3',
              summary: 'Compute measures of center.',
              generatorId: 'g6.stats-mean-median',
            },
            {
              id: 'p-g6-stat-range-t',
              title: 'Range and Spread',
              standard: '6.SP.A.3',
              summary: 'Compute range from datasets.',
              generatorId: 'g6.stats-range-iqr',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 12: EXPLORE MATH THROUGH SIMULATIONS & PROJECTS (UNGRADED)
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u12-explore',
      title: 'Unit 12: Explore Math Through Simulations & Projects',
      standards: ['Mathematical Practices MP1-MP8'],
      kind: 'explore',
      lessons: [],
      exploreItems: [
        {
          id: 'exp-m6-phet-ratio',
          title: 'PhET Interactive Ratio & Proportion Matcher',
          type: 'simulation',
          description: 'Experiment with visual balance beams and double number lines to see how ratios scale in real time.',
          url: 'https://phet.colorado.edu/en/simulations/unit-rates',
          estimatedMinutes: 15,
          requiresParentPin: false,
          steps: [
            'Open the simulation and select "Shopping Mode".',
            'Adjust unit rates for apples and carrots to see the cost per pound change on the double number line.',
            'Switch to the "Rate Race" game and see how fast you can find the best buy!',
          ],
          reflectionPrompt: 'How did changing the unit rate change the steepness of the rate graph?',
        },
        {
          id: 'exp-m6-desmos-balance',
          title: 'Desmos Balance Scales: Solving Equations Visually',
          type: 'simulation',
          description: 'Balance blocks and weights on a virtual teeter-totter to visualize inverse operations in one-step equations.',
          url: 'https://teacher.desmos.com/activitybuilder/custom/56e729a43a05423806ef89df',
          estimatedMinutes: 15,
          requiresParentPin: false,
          steps: [
            'Set up an equation with unknown blocks (x) on one pan and numbered weights on the other.',
            'Remove equal weights from both sides to isolate the x block and find its value.',
          ],
        },
        {
          id: 'exp-m6-baking-scale',
          title: 'Kitchen Chemistry & Recipe Scaling Challenge',
          type: 'project',
          description: 'Take a real chocolate chip cookie recipe made for 4 people and use ratio tables to scale the ingredients for 10 people.',
          estimatedMinutes: 25,
          materials: [
            'Printed recipe or cookbook',
            'Pencil & scratch paper',
            'Measuring cups (optional for baking!)',
          ],
          steps: [
            'Pick a family recipe with at least 5 ingredients (flour, sugar, butter, etc.).',
            'Calculate the scale factor: 10 ÷ 4 = 2.5.',
            'Multiply each ingredient amount by 2.5 using fraction and decimal multiplication.',
            'Have a parent verify your scaled measurements before baking!',
          ],
          reflectionPrompt: 'Which ingredient was trickiest to convert (e.g. 1/3 cup or 3/4 tsp)? How did you solve it?',
        },
        {
          id: 'exp-m6-grocery-budget',
          title: 'Real-World Family Grocery Budget & Percent Discount Project',
          type: 'project',
          description: 'Compare weekly grocery circulars, calculate percent savings, and plan a healthy family dinner under a $30 budget.',
          estimatedMinutes: 30,
          materials: ['Grocery flyers or online shopping page', 'Calculator', 'Paper & pencil'],
          steps: [
            'Select 4 dinner items on sale with percentage discounts (e.g., 20% off chicken, 15% off broccoli).',
            'Compute the dollar discount and final sale price for each item.',
            'Add local sales tax (if applicable) and confirm total cost stays under $30.',
          ],
          reflectionPrompt: 'How much money did your family save in total by shopping the sale percentages?',
        },
        {
          id: 'exp-m6-video-history-zero',
          title: 'Video Deep-Dive: The Fascinating History of Zero & Negative Numbers',
          type: 'video',
          description: 'Explore how ancient Indian mathematicians like Brahmagupta invented zero and negative numbers to balance financial debt.',
          url: 'https://www.youtube.com/results?search_query=history+of+zero+and+negative+numbers+ted-ed',
          estimatedMinutes: 8,
          requiresParentPin: true,
          reflectionPrompt: 'Why did ancient civilizations resist using negative numbers for so many centuries?',
        },
      ],
    },

    // -------------------------------------------------------------------------
    // UNIT 13: TEACHER RESOURCES (PARENT / TEACHER ONLY)
    // -------------------------------------------------------------------------
    {
      id: 'g6-math-u13-teacher',
      title: 'Unit 13: Teacher Resources',
      standards: ['Teacher Reference'],
      kind: 'teacher_resources',
      lessons: [],
      resources: [
        {
          id: 'tr-m6-pacing',
          title: 'Grade 6 Math 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description: 'Recommended weekly lesson distribution to complete Grade 6 Math across a standard 9-month school year.',
          body: `### Grade 6 Math 36-Week Pacing Guide
- **Weeks 1–4**: Unit 1 (Ratios & Proportions) — 5 lessons + review
- **Weeks 5–8**: Unit 2 (Arithmetic with Rational Numbers) — 4 lessons
- **Weeks 9–11**: Unit 3 (Rates & Percentages) — 3 lessons
- **Weeks 12–14**: Unit 4 (Exponents & Order of Operations) — 3 lessons
- **Weeks 15–17**: Unit 5 (Negative Numbers & Absolute Value) — 3 lessons
- **Weeks 18–21**: Unit 6 (Variables & Expressions) — 3 lessons
- **Weeks 22–25**: Unit 7 (Equations & Inequalities) — 3 lessons
- **Weeks 26–28**: Unit 8 (Plane Figures & Area) — 3 lessons
- **Weeks 29–31**: Unit 9 (Coordinate Plane) — 2 lessons
- **Weeks 32–33**: Unit 10 (3D Figures & Surface Area) — 3 lessons
- **Weeks 34–36**: Unit 11 (Data & Statistics) — 3 lessons + End of Year Projects`,
        },
        {
          id: 'tr-m6-standards',
          title: 'Common Core & Ohio Math Standards Crosswalk',
          kind: 'standards_map',
          description: 'Complete mapping of all Grade 6 lessons to Ohio Learning Standards and national benchmarks.',
          body: `### Standards Crosswalk
- **6.RP.A.1**: Ratios and part-to-whole (Lessons 1.1, 1.2)
- **6.RP.A.2**: Unit rates and pricing (Lesson 3.1)
- **6.RP.A.3**: Ratio tables and percent calculations (Lessons 1.3, 3.2)
- **6.NS.A.1**: Division of fractions with reciprocals (Lesson 2.1)
- **6.NS.B.3**: Multi-digit decimal operations (Lesson 2.2)
- **6.NS.B.4**: GCF and LCM (Lesson 2.3)
- **6.NS.C.5-7**: Negative numbers and absolute value (Lessons 5.1, 5.2)
- **6.EE.A.1-4**: Exponents, PEMDAS, variable evaluation (Lessons 4.1, 4.2, 6.1, 6.2)
- **6.EE.B.5-8**: One-step equations and inequalities (Lessons 7.1, 7.2)
- **6.G.A.1-4**: Triangles, parallelograms, volume, nets (Lessons 8.1, 8.2, 10.1, 10.2)
- **6.SP.A-B**: Measures of center and spread (Lessons 11.1, 11.2)`,
        },
        {
          id: 'tr-m6-printable',
          title: 'Printable Graph Paper & Formula Cheat Sheet',
          kind: 'printable',
          description: 'Reference sheet of geometric area and volume formulas, coordinate grids, and conversion tables.',
          body: `### Grade 6 Math Essential Formula Reference
- **Triangle Area**: A = ½ × b × h
- **Parallelogram Area**: A = b × h
- **Rectangle Area**: A = l × w
- **Rectangular Prism Volume**: V = l × w × h
- **Prism Surface Area**: SA = 2(lw + lh + wh)
- **Unit Rate**: Quantity A ÷ Quantity B
- **Percent**: (Part ÷ Whole) × 100`,
        },
      ],
    },
  ],
}
