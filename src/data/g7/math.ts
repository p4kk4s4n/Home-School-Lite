import { Course } from '../../types'

export const G7_MATH_COURSE: Course = {
  id: 'g7-math',
  subject: 'math',
  grade: 7,
  title: 'Grade 7 Mathematics',
  subtitle: 'Proportional Relationships, Rational Numbers, Equations, Geometry & Probability',
  credits: 1.0,
  color: '#2563eb',
  icon: '∑',
  units: [
    // UNIT 1: Proportional Relationships & Rates
    {
      id: 'g7-math-u1',
      title: 'Unit 1: Proportional Relationships & Unit Rates',
      standards: ['7.RP.A.1', '7.RP.A.2'],
      lessons: [
        {
          id: 'g7-math-u1-l1',
          unitId: 'g7-math-u1',
          title: 'Lesson 1: Constant of Proportionality (k = y/x)',
          kind: 'lesson',
          partOf: 'Proportional Relationships',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion/cc-7th-constant-of-proportionality/v/constant-of-proportionality-from-table',
          videoTitle: 'Khan Academy: Constant of Proportionality',
          reading:
            'A proportional relationship has a constant ratio k = y/x. In a table or graph passing through the origin (0, 0), the equation is written as y = kx.',
          principles: [
            {
              id: 'p-g7-prop-const',
              title: 'Constant of Proportionality',
              standard: '7.RP.A.2.B',
              summary: 'Identify the constant of proportionality in tables, graphs, equations, and verbal descriptions.',
              generatorId: 'g7.proportional-constant',
            },
          ],
        },
        {
          id: 'g7-math-u1-l2',
          unitId: 'g7-math-u1',
          title: 'Lesson 2: Unit Rates with Complex Fractions',
          kind: 'lesson',
          partOf: 'Unit Rates',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion/cc-7th-rates-with-fractions/v/rate-problems-with-fractions',
          videoTitle: 'Khan Academy: Rates with Fractions',
          reading:
            'Compute unit rates associated with ratios of fractions (e.g. 1/2 mile in 1/4 hour = 2 miles per hour) by dividing the numerator fraction by the denominator.',
          principles: [
            {
              id: 'p-g7-unit-rate-frac',
              title: 'Unit Rates with Fractions',
              standard: '7.RP.A.1',
              summary: 'Compute unit rates associated with ratios of fractions.',
              generatorId: 'g7.unit-rate-fractions',
            },
          ],
        },
      ],
    },

    // UNIT 2: Percentages, Discounts & Simple Interest
    {
      id: 'g7-math-u2',
      title: 'Unit 2: Percentages, Markup, Discount & Simple Interest',
      standards: ['7.RP.A.3'],
      lessons: [
        {
          id: 'g7-math-u2-l1',
          unitId: 'g7-math-u2',
          title: 'Lesson 1: Percent of Change, Markup & Discounts',
          kind: 'lesson',
          partOf: 'Percent Applications',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-percent-word-problems/v/growing-by-a-percentage',
          videoTitle: 'Khan Academy: Percent of Change & Markups',
          reading:
            'Percent change = (|new - original| / original) × 100%. Apply percent equations to compute retail sales tax, tips, wholesale markups, and discounts.',
          principles: [
            {
              id: 'p-g7-pct-change',
              title: 'Percent Change and Markups',
              standard: '7.RP.A.3',
              summary: 'Use proportional relationships to solve multistep ratio and percent problems.',
              generatorId: 'g7.percent-change',
            },
          ],
        },
        {
          id: 'g7-math-u2-l2',
          unitId: 'g7-math-u2',
          title: 'Lesson 2: Simple Interest Formula (I = Prt)',
          kind: 'lesson',
          isOhioExtension: true,
          partOf: 'Simple Interest',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-percent-word-problems/v/simple-interest-example',
          videoTitle: 'Khan Academy: Simple Interest Formula',
          reading:
            'Calculate simple interest earned or owed using I = Prt, where P is the starting principal, r is the annual interest rate as a decimal, and t is time in years.',
          principles: [
            {
              id: 'p-g7-simple-int',
              title: 'Simple Interest',
              standard: '7.RP.A.3',
              summary: 'Solve multi-step real-world problems involving simple interest.',
              generatorId: 'g7.simple-interest',
            },
          ],
        },
      ],
    },

    // UNIT 3: Operations with Rational Numbers
    {
      id: 'g7-math-u3',
      title: 'Unit 3: Operations with Rational Numbers',
      standards: ['7.NS.A.1', '7.NS.A.2', '7.NS.A.3'],
      lessons: [
        {
          id: 'g7-math-u3-l1',
          unitId: 'g7-math-u3',
          title: 'Lesson 1: Adding & Subtracting Integers',
          kind: 'lesson',
          partOf: 'Integer Addition & Subtraction',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract/cc-7th-add-sub-negatives/v/adding-negative-numbers',
          videoTitle: 'Khan Academy: Adding and Subtracting Integers',
          reading:
            'Adding a negative number is equivalent to subtraction: a + (-b) = a - b. Subtracting a negative number becomes addition: a - (-b) = a + b.',
          principles: [
            {
              id: 'p-g7-int-addsub',
              title: 'Adding and Subtracting Integers',
              standard: '7.NS.A.1',
              summary: 'Apply and extend previous understandings of addition and subtraction to rational numbers.',
              generatorId: 'g7.int-add-sub',
            },
          ],
        },
        {
          id: 'g7-math-u3-l2',
          unitId: 'g7-math-u3',
          title: 'Lesson 2: Multiplying & Dividing Integers',
          kind: 'lesson',
          partOf: 'Integer Multiplication & Division',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide/cc-7th-mult-div-negatives/v/multiplying-negative-numbers',
          videoTitle: 'Khan Academy: Multiplying and Dividing Integers',
          reading:
            'When signs match, the product or quotient is positive ((+) × (+) = +, (-) × (-) = +). When signs differ, the result is negative ((+) × (-) = -).',
          principles: [
            {
              id: 'p-g7-int-multdiv',
              title: 'Multiplying and Dividing Integers',
              standard: '7.NS.A.2',
              summary: 'Apply understandings of multiplication and division to rational numbers.',
              generatorId: 'g7.int-mult-div',
            },
          ],
        },
      ],
    },

    // UNIT 4: Expressions & Equations
    {
      id: 'g7-math-u4',
      title: 'Unit 4: Expressions & Distributive Property',
      standards: ['7.EE.A.1', '7.EE.A.2'],
      lessons: [
        {
          id: 'g7-math-u4-l1',
          unitId: 'g7-math-u4',
          title: 'Lesson 1: Combining Like Terms in Linear Expressions',
          kind: 'lesson',
          partOf: 'Combining Like Terms',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions/cc-7th-combining-like-terms/v/combining-like-terms',
          videoTitle: 'Khan Academy: Combining Like Terms',
          reading:
            'Like terms contain identical variables raised to the same power. Add or subtract their coefficients to simplify: 5x + 3 - 2x + 4 = 3x + 7.',
          principles: [
            {
              id: 'p-g7-linear-comb',
              title: 'Combining Like Terms',
              standard: '7.EE.A.1',
              summary: 'Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions.',
              generatorId: 'g7.linear-combine',
            },
          ],
        },
        {
          id: 'g7-math-u4-l2',
          unitId: 'g7-math-u4',
          title: 'Lesson 2: Expanding Expressions with Distributive Property',
          kind: 'lesson',
          partOf: 'Distributive Property',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions/cc-7th-distributive-property/v/the-distributive-property-2',
          videoTitle: 'Khan Academy: The Distributive Property',
          reading:
            'Multiply the outside term by every term inside parentheses: a(b + c) = ab + ac. Pay close attention to negative signs: -3(2x - 5) = -6x + 15.',
          principles: [
            {
              id: 'p-g7-distributive',
              title: 'Distributive Property Expansion',
              standard: '7.EE.A.1',
              summary: 'Expand expressions with rational coefficients using the distributive property.',
              generatorId: 'g7.distributive',
            },
          ],
        },
      ],
    },

    // UNIT 5: Two-Step Equations & Inequalities
    {
      id: 'g7-math-u5',
      title: 'Unit 5: Two-Step Equations & Inequalities',
      standards: ['7.EE.B.4'],
      lessons: [
        {
          id: 'g7-math-u5-l1',
          unitId: 'g7-math-u5',
          title: 'Lesson 1: Solving Two-Step Equations (ax + b = c)',
          kind: 'lesson',
          partOf: 'Two-Step Equations',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions/cc-7th-2-step-equations/v/two-step-equations-intro',
          videoTitle: 'Khan Academy: Intro to Two-Step Equations',
          reading:
            'Isolate the variable term first by undoing addition or subtraction with inverse operations. Then undo multiplication or division to solve for x.',
          principles: [
            {
              id: 'p-g7-two-step-eq',
              title: 'Two-Step Equations',
              standard: '7.EE.B.4.A',
              summary: 'Solve word problems leading to equations of the form px + q = r and p(x + q) = r.',
              generatorId: 'g7.two-step-eq',
            },
          ],
        },
        {
          id: 'g7-math-u5-l2',
          unitId: 'g7-math-u5',
          title: 'Lesson 2: Solving Two-Step Inequalities & Flipping Signs',
          kind: 'lesson',
          partOf: 'Inequalities',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions/cc-7th-inequalities/v/two-step-inequalities',
          videoTitle: 'Khan Academy: Two-Step Inequalities',
          reading:
            'Solve inequalities just like equations. When multiplying or dividing both sides by a negative number, flip the direction of the inequality sign.',
          principles: [
            {
              id: 'p-g7-inequalities',
              title: 'Two-Step Inequalities',
              standard: '7.EE.B.4.B',
              summary: 'Solve word problems leading to inequalities and graph the solution set.',
              generatorId: 'g7.inequalities',
            },
          ],
        },
      ],
    },

    // UNIT 6: Scale Drawings, Area & Circumference of Circles
    {
      id: 'g7-math-u6',
      title: 'Unit 6: Scale Drawings & Geometry of Circles',
      standards: ['7.G.A.1', '7.G.B.4'],
      lessons: [
        {
          id: 'g7-math-u6-l1',
          unitId: 'g7-math-u6',
          title: 'Lesson 1: Scale Drawings & Scale Factor',
          kind: 'lesson',
          partOf: 'Scale Drawings',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-scale-drawings/v/scale-drawings-example',
          videoTitle: 'Khan Academy: Scale Drawings and Scale Factor',
          reading:
            'A scale drawing represents an object enlarged or reduced by a scale factor. Multiply drawing dimensions by the scale factor to find actual lengths.',
          principles: [
            {
              id: 'p-g7-scale-draw',
              title: 'Scale Drawings',
              standard: '7.G.A.1',
              summary: 'Solve problems involving scale drawings of geometric figures.',
              generatorId: 'g7.scale-drawings',
            },
          ],
        },
        {
          id: 'g7-math-u6-l2',
          unitId: 'g7-math-u6',
          title: 'Lesson 2: Circle Radius, Circumference & Area',
          kind: 'lesson',
          partOf: 'Circles',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circ-circles/v/radius-diameter-circumference',
          videoTitle: 'Khan Academy: Radius, Diameter, Circumference & Area',
          reading:
            'Diameter is 2 × radius. The circumference formula is C = 2πr (or πd). The area formula is A = πr². Use π ≈ 3.14 to calculate values.',
          principles: [
            {
              id: 'p-g7-circle-circ',
              title: 'Circumference & Area of Circles',
              standard: '7.G.B.4',
              summary: 'Know the formulas for the area and circumference of a circle and use them to solve problems.',
              generatorId: 'g7.circle-circumference',
            },
          ],
        },
      ],
    },

    // UNIT 7: Angle Relationships
    {
      id: 'g7-math-u7',
      title: 'Unit 7: Angle Relationships: Complementary, Supplementary & Vertical',
      standards: ['7.G.B.5'],
      lessons: [
        {
          id: 'g7-math-u7-l1',
          unitId: 'g7-math-u7',
          title: 'Lesson 1: Complementary & Supplementary Angles',
          kind: 'lesson',
          partOf: 'Complementary & Supplementary',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-unknown-angle-algebra/v/complementary-and-supplementary-angles',
          videoTitle: 'Khan Academy: Complementary and Supplementary Angles',
          reading:
            'Complementary angles add to 90 degrees (forming a right angle). Supplementary angles add to 180 degrees (forming a straight line).',
          principles: [
            {
              id: 'p-g7-angles-rel',
              title: 'Angle Relationships',
              standard: '7.G.B.5',
              summary: 'Use facts about supplementary, complementary, vertical, and adjacent angles to solve unknown angles.',
              generatorId: 'g7.angles-relations',
            },
          ],
        },
        {
          id: 'g7-math-u7-l2',
          unitId: 'g7-math-u7',
          title: 'Lesson 2: Vertical Angles & Adjacent Angle Equations',
          kind: 'lesson',
          partOf: 'Vertical Angles',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-unknown-angle-algebra/v/vertical-angles',
          videoTitle: 'Khan Academy: Vertical Angles and Equations',
          reading:
            'Vertical angles are opposite angles formed by intersecting lines and are always equal in measure. Set up multi-step equations to solve for x.',
          principles: [
            {
              id: 'p-g7-angles-vert',
              title: 'Vertical Angles',
              standard: '7.G.B.5',
              summary: 'Write and solve multi-step equations for unknown angle measures in intersecting lines.',
              generatorId: 'g7.angles-relations',
            },
          ],
        },
      ],
    },

    // UNIT 8: Probability & Statistics
    {
      id: 'g7-math-u8',
      title: 'Unit 8: Probability & Random Sampling',
      standards: ['7.SP.A.1', '7.SP.C.5', '7.SP.C.6'],
      lessons: [
        {
          id: 'g7-math-u8-l1',
          unitId: 'g7-math-u8',
          title: 'Lesson 1: Theoretical vs. Experimental Probability',
          kind: 'lesson',
          partOf: 'Probability Concepts',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-basic-prob/v/simple-probability',
          videoTitle: 'Khan Academy: Simple Probability',
          reading:
            'Probability is the likelihood of an event from 0 (impossible) to 1 (certain). Theoretical P(event) = favorable outcomes / total outcomes.',
          principles: [
            {
              id: 'p-g7-prob-simple',
              title: 'Simple Probability',
              standard: '7.SP.C.5',
              summary: 'Understand that the probability of a chance event is a number between 0 and 1.',
              generatorId: 'g7.probability-simple',
            },
          ],
        },
        {
          id: 'g7-math-u8-l2',
          unitId: 'g7-math-u8',
          title: 'Lesson 2: Compound Probability & Sample Spaces',
          kind: 'lesson',
          partOf: 'Compound Probability',
          estimatedMinutes: 10,
          videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-compound-events/v/compound-probability-of-independent-events',
          videoTitle: 'Khan Academy: Compound Events and Tree Diagrams',
          reading:
            'For two independent events A and B, P(A and B) = P(A) × P(B). Use tree diagrams or tables to list the entire sample space.',
          principles: [
            {
              id: 'p-g7-prob-compound',
              title: 'Compound Probability',
              standard: '7.SP.C.8',
              summary: 'Find probabilities of compound events using organized lists, tables, tree diagrams, and simulation.',
              generatorId: 'g7.probability-simple',
            },
          ],
        },
      ],
    },

    // UNIT 9: Explore Math Through Simulations (enrichment)
    {
      id: 'g7-math-u9',
      title: 'Unit 9: Explore Math Through Simulations & Projects',
      kind: 'explore',
      standards: ['7.RP.A.2', '7.G.B.4', '7.SP.C.6'],
      lessons: [],
      exploreItems: [
        {
          id: 'g7-math-exp-phet-balance',
          title: 'PhET Simulation: Balancing Act & Proportions',
          type: 'simulation',
          description:
            'Test balance beam lever rules to investigate direct proportions and equations in dynamic physical environments.',
          url: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
          estimatedMinutes: 20,
          reflectionPrompt: 'What happens to the required mass when you double its distance from the pivot point?',
          requiresParentPin: false,
        },
        {
          id: 'g7-math-exp-desmos-circle',
          title: 'Desmos Geometry: Radius, Circumference & Area Explorer',
          type: 'simulation',
          description:
            'Drag interactive radius sliders on dynamic circles to observe the ratio C/d approaching pi (3.14159...) in real time.',
          url: 'https://www.desmos.com/geometry',
          estimatedMinutes: 20,
          reflectionPrompt: 'Does the ratio of circumference to diameter change when a circle gets 10 times larger?',
          requiresParentPin: false,
        },
        {
          id: 'g7-math-exp-dice-sim',
          title: 'Probability Lab: 1,000 Coin Flips Law of Large Numbers',
          type: 'experiment',
          description:
            'Simulate 10, 100, and 1,000 coin flips using an online RNG or a pair of physical dice. Graph how experimental probability converges to theoretical 50%.',
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
          description:
            'Measure your bedroom walls with a tape measure. Choose an appropriate scale factor (e.g. 1/4 inch = 1 foot) and draft an accurate blueprint on grid paper.',
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

    // UNIT 10: Teacher Resources & Pacing
    {
      id: 'g7-math-u10',
      title: 'Unit 10: Teacher Resources & Pacing',
      kind: 'teacher_resources',
      standards: ['7.RP', '7.NS', '7.EE', '7.G', '7.SP'],
      lessons: [],
      resources: [
        {
          id: 'g7-math-res-pacing',
          title: 'Grade 7 Mathematics 36-Week Pacing Guide',
          kind: 'pacing_guide',
          description:
            'Curriculum roadmap covering proportional relationships, integer operations, equations, circle geometry, and probability.',
          body: `## Grade 7 Math Pacing Guide (36 Weeks)

- **Weeks 1–4**: Unit 1 — Proportional Relationships & Unit Rates (7.RP.1-2)
- **Weeks 5–8**: Unit 2 — Percentages, Markup, Discount & Simple Interest (7.RP.3)
- **Weeks 9–13**: Unit 3 — Operations with Rational Numbers: Integers (7.NS.1-3)
- **Week 14**: Quarter 1 Assessment & Diagnostic Review
- **Weeks 15–18**: Unit 4 — Expressions & Distributive Property (7.EE.1-2)
- **Weeks 19–23**: Unit 5 — Two-Step Equations & Inequalities (7.EE.4)
- **Weeks 24–28**: Unit 6 — Scale Drawings & Geometry of Circles (7.G.1, 7.G.4)
- **Week 29**: Quarter 2 & 3 Algebra and Geometry Review
- **Weeks 30–32**: Unit 7 — Angle Relationships: Vertical & Supplementary (7.G.5)
- **Weeks 33–35**: Unit 8 — Probability & Random Sampling (7.SP.1, 7.SP.5-8)
- **Week 36**: Year-End Capstone Simulations & Blueprint Showcase`,
        },
        {
          id: 'g7-math-res-standards',
          title: 'Grade 7 Common Core & Ohio Standards Crosswalk',
          kind: 'standards_map',
          description:
            'Alignment matrix matching Grade 7 units to Ohio Learning Standards for Mathematics.',
          body: `| Unit | Standards | Target Skill |
|---|---|---|
| Unit 1 | 7.RP.A.1-2 | Constant of proportionality k=y/x, complex fraction unit rates |
| Unit 2 | 7.RP.A.3 | Percent change, markup, discount, simple interest I=Prt |
| Unit 3 | 7.NS.A.1-3 | All four operations with positive and negative rational numbers |
| Unit 4 | 7.EE.A.1-2 | Combining like terms, expanding via distributive property |
| Unit 5 | 7.EE.B.4 | Solving and graphing 2-step equations and inequalities |
| Unit 6 | 7.G.A.1, 7.G.B.4 | Scale drawings, circumference C=2πr, circle area A=πr² |
| Unit 7 | 7.G.B.5 | Supplementary, complementary, vertical angle equations |
| Unit 8 | 7.SP.C.5-8 | Simple and compound probability, sample space models |`,
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
- **Supplementary**: $\\angle A + \\angle B = 180^\\circ$
- **Vertical Angles**: $\\angle 1 = \\angle 2$`,
        },
      ],
    },
  ],
}
