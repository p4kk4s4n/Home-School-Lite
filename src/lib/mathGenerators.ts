import { GeneratedQuestion } from '../types'
import { gcd, randInt, shuffle } from './random'

export type MathGeneratorFn = (
  rng: () => number,
  principleId: string,
  principleTitle: string
) => GeneratedQuestion

function buildChoices(
  correct: string,
  distractors: (string | number)[],
  rng: () => number
): string[] {
  const set = new Set<string>([String(correct)])
  for (const d of distractors) {
    const s = String(d)
    if (s !== String(correct) && set.size < 4) {
      set.add(s)
    }
  }
  let bump = 1
  while (set.size < 4) {
    const num = Number(correct)
    const fallback = !Number.isNaN(num) ? String(num + bump * 2) : `${correct} (${bump})`
    set.add(fallback)
    bump++
  }
  return shuffle(Array.from(set), rng)
}

export const MATH_GENERATORS: Record<string, MathGeneratorFn> = {
  // ================= GRADE 4 MATH GENERATORS =================
  'g4.place-value-round': (rng, principleId, principleTitle) => {
    const thousands = randInt(rng, 12, 98)
    const hundreds = randInt(rng, 1, 9)
    const tens = randInt(rng, 1, 9)
    const ones = randInt(rng, 1, 9)
    const n = thousands * 1000 + hundreds * 100 + tens * 10 + ones
    const roundTo = rng() < 0.5 ? 100 : 1000
    const label = roundTo === 100 ? 'nearest hundred' : 'nearest thousand'
    const rounded = Math.round(n / roundTo) * roundTo
    const down = Math.floor(n / roundTo) * roundTo
    const up = Math.ceil(n / roundTo) * roundTo
    const wrongPlace =
      roundTo === 100 ? Math.round(n / 1000) * 1000 : Math.round(n / 100) * 100
    const ans = rounded.toLocaleString('en-US')
    const choices = buildChoices(
      ans,
      [
        down.toLocaleString('en-US'),
        up.toLocaleString('en-US'),
        wrongPlace.toLocaleString('en-US'),
        (rounded + roundTo).toLocaleString('en-US'),
      ],
      rng
    )
    return {
      id: `${principleId}-${n}-${roundTo}`,
      fingerprint: `${principleId}:${n}:${roundTo}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Round ${n.toLocaleString('en-US')} to the ${label}.`,
      choices,
      answer: ans,
      explanation: `To round ${n.toLocaleString('en-US')} to the ${label}, look at the digit one place to the right (${
        roundTo === 100 ? tens : hundreds
      }). Because it is ${
        (roundTo === 100 ? tens : hundreds) >= 5 ? '5 or greater, round up' : 'less than 5, round down'
      } to ${ans}.`,
    }
  },

  'g4.multi-digit-add-sub': (rng, principleId, principleTitle) => {
    const isAdd = rng() < 0.5
    const a = randInt(rng, 2450, 8950)
    const b = randInt(rng, 1125, a - 300)
    const correct = isAdd ? a + b : a - b
    const op = isAdd ? '+' : '-'
    const ans = correct.toLocaleString('en-US')
    const choices = buildChoices(
      ans,
      [
        (correct + 100).toLocaleString('en-US'),
        (correct - 100).toLocaleString('en-US'),
        (correct + 10).toLocaleString('en-US'),
        (correct - 10).toLocaleString('en-US'),
      ],
      rng
    )
    return {
      id: `${principleId}-${a}${op}${b}`,
      fingerprint: `${principleId}:${a}${op}${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Compute: ${a.toLocaleString('en-US')} ${op} ${b.toLocaleString('en-US')}`,
      choices,
      answer: ans,
      explanation: `Line up the place values from ones to thousands and ${
        isAdd ? 'add with regrouping' : 'subtract with borrowing'
      }: ${a.toLocaleString('en-US')} ${op} ${b.toLocaleString('en-US')} = ${ans}.`,
    }
  },

  'g4.mult-2digit': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 13, 48)
    const b = randInt(rng, 12, 29)
    const correct = a * b
    const tensA = Math.floor(a / 10) * 10
    const onesA = a % 10
    const choices = buildChoices(
      String(correct),
      [
        correct + a,
        correct - b,
        tensA * b + onesA, // common partial-product error
        correct + 10,
      ],
      rng
    )
    return {
      id: `${principleId}-${a}x${b}`,
      fingerprint: `${principleId}:${Math.min(a, b)}x${Math.max(a, b)}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply ${a} × ${b} using partial products or the standard algorithm.`,
      choices,
      answer: String(correct),
      explanation: `Break ${a} into ${tensA} + ${onesA}. Multiply (${tensA} × ${b}) = ${
        tensA * b
      } and (${onesA} × ${b}) = ${onesA * b}. Add the partial products: ${tensA * b} + ${
        onesA * b
      } = ${correct}.`,
    }
  },

  'g4.div-remainders': (rng, principleId, principleTitle) => {
    const divisor = randInt(rng, 4, 9)
    const quotient = randInt(rng, 12, 34)
    const remainder = randInt(rng, 1, divisor - 1)
    const dividend = divisor * quotient + remainder
    const ans = `${quotient} R${remainder}`
    const choices = buildChoices(
      ans,
      [
        `${quotient} R${remainder === 1 ? 2 : remainder - 1}`,
        `${quotient + 1} R${remainder}`,
        `${quotient - 1} R${divisor - remainder}`,
        `${quotient} R0`,
      ],
      rng
    )
    return {
      id: `${principleId}-${dividend}-div-${divisor}`,
      fingerprint: `${principleId}:${dividend}/${divisor}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Divide ${dividend} ÷ ${divisor}. Express your answer as a quotient and remainder.`,
      choices,
      answer: ans,
      explanation: `${divisor} × ${quotient} = ${divisor * quotient}, and ${dividend} - ${
        divisor * quotient
      } = ${remainder}. So ${dividend} ÷ ${divisor} = ${ans}.`,
    }
  },

  'g4.equiv-fractions': (rng, principleId, principleTitle) => {
    const denoms = [3, 4, 5, 6, 8]
    const den = denoms[randInt(rng, 0, denoms.length - 1)]
    const num = randInt(rng, 1, den - 1)
    const mult = randInt(rng, 2, 6)
    const newDen = den * mult
    const newNum = num * mult
    const choices = buildChoices(
      String(newNum),
      [newNum + 1, num + mult, newNum - 1, den * mult],
      rng
    )
    return {
      id: `${principleId}-${num}-${den}-x${mult}`,
      fingerprint: `${principleId}:${num}/${den}*${mult}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the missing numerator to make an equivalent fraction: ${num}/${den} = ?/${newDen}`,
      choices,
      answer: String(newNum),
      explanation: `The denominator ${den} was multiplied by ${mult} to get ${newDen}. Multiply the numerator ${num} by ${mult} as well: ${num} × ${mult} = ${newNum}.`,
    }
  },

  'g4.fraction-add-like': (rng, principleId, principleTitle) => {
    const den = randInt(rng, 5, 12)
    const a = randInt(rng, 1, den - 2)
    const b = randInt(rng, 1, den - a)
    const sumNum = a + b
    const ans = `${sumNum}/${den}`
    const choices = buildChoices(
      ans,
      [
        `${sumNum}/${den * 2}`, // classic error: adding denominators
        `${Math.abs(a - b)}/${den}`,
        `${sumNum + 1}/${den}`,
        `${a * b}/${den}`,
      ],
      rng
    )
    return {
      id: `${principleId}-${a}-${b}-d${den}`,
      fingerprint: `${principleId}:${a}+${b}/${den}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Add the fractions with like denominators: ${a}/${den} + ${b}/${den}`,
      choices,
      answer: ans,
      explanation: `When denominators are the same (${den}), add the numerators (${a} + ${b} = ${sumNum}) and keep the denominator ${den}: ${ans}.`,
    }
  },

  'g4.decimals-tenths-hundredths': (rng, principleId, principleTitle) => {
    const hundredths = randInt(rng, 11, 99)
    const whole = randInt(rng, 0, 5)
    const decStr = `${whole}.${hundredths < 10 ? '0' + hundredths : hundredths}`
    const ans = whole > 0 ? `${whole} and ${hundredths}/100` : `${hundredths}/100`
    const choices = buildChoices(
      ans,
      [
        whole > 0 ? `${whole} and ${hundredths}/10` : `${hundredths}/10`,
        whole > 0 ? `${whole} and ${hundredths}/1000` : `${hundredths}/1000`,
        `${whole * 10 + hundredths}/10`,
        `${hundredths + 10}/100`,
      ],
      rng
    )
    return {
      id: `${principleId}-${whole}-${hundredths}`,
      fingerprint: `${principleId}:${decStr}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Which fraction or mixed number is equivalent to the decimal ${decStr}?`,
      choices,
      answer: ans,
      explanation: `Two digits after the decimal point represent hundredths, so ${decStr} equals ${ans}.`,
    }
  },

  'g4.geometry-area-perim': (rng, principleId, principleTitle) => {
    const w = randInt(rng, 5, 18)
    const h = randInt(rng, 4, 15)
    const askArea = rng() < 0.5
    const area = w * h
    const perim = 2 * (w + h)
    const ans = askArea ? `${area} sq units` : `${perim} units`
    const choices = buildChoices(
      ans,
      askArea
        ? [`${perim} sq units`, `${w + h} sq units`, `${area + w} sq units`, `${area - h} sq units`]
        : [`${area} units`, `${w + h} units`, `${perim + 2} units`, `${2 * w + h} units`],
      rng
    )
    return {
      id: `${principleId}-${w}x${h}-${askArea ? 'A' : 'P'}`,
      fingerprint: `${principleId}:${w}x${h}:${askArea ? 'A' : 'P'}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `A rectangle has a length of ${w} units and a width of ${h} units. What is its ${
        askArea ? 'area' : 'perimeter'
      }?`,
      choices,
      answer: ans,
      explanation: askArea
        ? `Area of a rectangle = length × width = ${w} × ${h} = ${area} sq units.`
        : `Perimeter of a rectangle = 2 × (length + width) = 2 × (${w} + ${h}) = ${perim} units.`,
    }
  },

  // ================= GRADE 6 MATH GENERATORS =================
  'g6.ratios-unit-rate': (rng, principleId, principleTitle) => {
    const unitRate = randInt(rng, 4, 18)
    const qty = randInt(rng, 3, 9)
    const total = unitRate * qty
    const items = ['notebooks', 'gallons of fuel', 'tickets', 'pounds of apples', 'hours of tutoring']
    const item = items[randInt(rng, 0, items.length - 1)]
    const ans = `$${unitRate}`
    const choices = buildChoices(
      ans,
      [`$${unitRate + 2}`, `$${ Math.max(1, unitRate - 1) }`, `$${total - qty}`, `$${qty}`],
      rng
    )
    return {
      id: `${principleId}-${total}-${qty}`,
      fingerprint: `${principleId}:${total}/${qty}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `If ${qty} ${item} cost $${total} in total, what is the unit cost per item?`,
      choices,
      answer: ans,
      explanation: `Divide the total cost by the number of units: $${total} ÷ ${qty} = $${unitRate} per unit.`,
    }
  },

  'g6.percent-of-number': (rng, principleId, principleTitle) => {
    const percents = [10, 15, 20, 25, 30, 40, 50, 75]
    const pct = percents[randInt(rng, 0, percents.length - 1)]
    const base = randInt(rng, 2, 12) * 20
    const correct = (pct * base) / 100
    const choices = buildChoices(
      String(correct),
      [correct + 10, base - correct, Math.round(base / (pct / 10)), correct + 5],
      rng
    )
    return {
      id: `${principleId}-${pct}pct-${base}`,
      fingerprint: `${principleId}:${pct}%of${base}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `What is ${pct}% of ${base}?`,
      choices,
      answer: String(correct),
      explanation: `Convert ${pct}% to the decimal ${pct / 100} and multiply by ${base}: ${
        pct / 100
      } × ${base} = ${correct}.`,
    }
  },

  'g6.fraction-division': (rng, principleId, principleTitle) => {
    const b = randInt(rng, 2, 6)
    const a = randInt(rng, 1, b - 1)
    const d = randInt(rng, 2, 7)
    const c = randInt(rng, 1, d - 1)
    const rawNum = a * d
    const rawDen = b * c
    const g = gcd(rawNum, rawDen)
    const num = rawNum / g
    const den = rawDen / g
    const ans = den === 1 ? `${num}` : `${num}/${den}`
    const wrongDirect = `${a * c}/${b * d}`
    const choices = buildChoices(
      ans,
      [wrongDirect, `${den}/${num}`, `${num + 1}/${den}`, `${rawNum}/${rawDen + 1}`],
      rng
    )
    return {
      id: `${principleId}-${a}-${b}-div-${c}-${d}`,
      fingerprint: `${principleId}:${a}/${b}div${c}/${d}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Divide and simplify to lowest terms: (${a}/${b}) ÷ (${c}/${d})`,
      choices,
      answer: ans,
      explanation: `Multiply by the reciprocal of the second fraction: (${a}/${b}) × (${d}/${c}) = ${rawNum}/${rawDen}, which simplifies to ${ans}.`,
    }
  },

  'g6.integers-rational': (rng, principleId, principleTitle) => {
    const a = -randInt(rng, 4, 25)
    const b = randInt(rng, 5, 30)
    const isAdd = rng() < 0.5
    const correct = isAdd ? a + b : a - b
    const op = isAdd ? '+' : '-'
    const choices = buildChoices(
      String(correct),
      [-correct, a - b, Math.abs(a) + Math.abs(b), correct + 2],
      rng
    )
    return {
      id: `${principleId}-${a}${op}${b}`,
      fingerprint: `${principleId}:${a}${op}${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Evaluate the integer expression: (${a}) ${op} ${b}`,
      choices,
      answer: String(correct),
      explanation: isAdd
        ? `Start at ${a} on the number line and move ${b} units to the right: ${a} + ${b} = ${correct}.`
        : `Subtracting ${b} from ${a} moves ${b} units further left on the number line: ${a} - ${b} = ${correct}.`,
    }
  },

  'g6.expressions-evaluate': (rng, principleId, principleTitle) => {
    const coeff = randInt(rng, 2, 7)
    const x = randInt(rng, 3, 9)
    const constant = randInt(rng, 4, 19)
    const correct = coeff * x * x - constant
    const choices = buildChoices(
      String(correct),
      [
        Math.pow(coeff * x, 2) - constant, // order-of-operations error
        coeff * 2 * x - constant, // 2x instead of x^2 error
        correct + constant * 2,
        correct + coeff,
      ],
      rng
    )
    return {
      id: `${principleId}-${coeff}x2-${constant}-at-${x}`,
      fingerprint: `${principleId}:${coeff}x^2-${constant}@${x}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Evaluate the algebraic expression ${coeff}x² - ${constant} when x = ${x}.`,
      choices,
      answer: String(correct),
      explanation: `Follow order of operations (exponents before multiplication): x² = ${x}² = ${
        x * x
      }. Then ${coeff} × ${x * x} = ${coeff * x * x}, and ${coeff * x * x} - ${constant} = ${correct}.`,
    }
  },

  'g6.one-step-equations': (rng, principleId, principleTitle) => {
    const m = randInt(rng, 3, 12)
    const x = randInt(rng, 4, 16)
    const b = randInt(rng, 5, 25)
    const rhs = m * x + b
    const choices = buildChoices(
      `x = ${x}`,
      [`x = ${x + 2}`, `x = ${Math.round((rhs + b) / m)}`, `x = ${rhs - b}`, `x = ${x - 1}`],
      rng
    )
    return {
      id: `${principleId}-${m}x+${b}=${rhs}`,
      fingerprint: `${principleId}:${m}x+${b}=${rhs}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Solve for x: ${m}x + ${b} = ${rhs}`,
      choices,
      answer: `x = ${x}`,
      explanation: `Subtract ${b} from both sides: ${m}x = ${rhs - b}. Then divide both sides by ${m}: x = ${
        rhs - b
      } ÷ ${m} = ${x}.`,
    }
  },

  'g6.geometry-triangle-prism': (rng, principleId, principleTitle) => {
    const askTriangle = rng() < 0.5
    if (askTriangle) {
      const base = randInt(rng, 6, 20)
      const height = randInt(rng, 4, 16)
      const area = (base * height) / 2
      const ans = `${area} sq cm`
      const choices = buildChoices(
        ans,
        [
          `${base * height} sq cm`, // forgot 1/2
          `${base + height} sq cm`,
          `${area + base} sq cm`,
          `${2 * (base + height)} sq cm`,
        ],
        rng
      )
      return {
        id: `${principleId}-tri-${base}x${height}`,
        fingerprint: `${principleId}:tri:${base}x${height}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: `Find the area of a triangle with base ${base} cm and height ${height} cm.`,
        choices,
        answer: ans,
        explanation: `Area of a triangle = ½ × base × height = ½ × ${base} × ${height} = ${area} sq cm.`,
      }
    } else {
      const l = randInt(rng, 3, 10)
      const w = randInt(rng, 3, 8)
      const h = randInt(rng, 4, 9)
      const vol = l * w * h
      const ans = `${vol} cubic cm`
      const choices = buildChoices(
        ans,
        [
          `${l + w + h} cubic cm`,
          `${2 * (l * w + w * h + l * h)} cubic cm`,
          `${l * w + h} cubic cm`,
          `${vol + l * w} cubic cm`,
        ],
        rng
      )
      return {
        id: `${principleId}-prism-${l}x${w}x${h}`,
        fingerprint: `${principleId}:prism:${l}x${w}x${h}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: `A rectangular prism is ${l} cm long, ${w} cm wide, and ${h} cm high. What is its volume?`,
        choices,
        answer: ans,
        explanation: `Volume of a rectangular prism = length × width × height = ${l} × ${w} × ${h} = ${vol} cubic cm.`,
      }
    }
  },

  'g6.stats-mean-median': (rng, principleId, principleTitle) => {
    const center = randInt(rng, 10, 35)
    const d1 = randInt(rng, 2, 6)
    const d2 = randInt(rng, 7, 12)
    // Symmetric 5-number set so mean and median are clean integers
    const nums = shuffle([center - d2, center - d1, center, center + d1, center + d2 + 5], rng)
    const askMean = rng() < 0.5
    const sum = nums.reduce((a, b) => a + b, 0)
    const mean = sum / 5
    const sorted = [...nums].sort((a, b) => a - b)
    const median = sorted[2]
    const range = sorted[4] - sorted[0]
    const correct = askMean ? mean : median
    const choices = buildChoices(
      String(correct),
      [askMean ? median : mean, range, correct + 3, correct - 2],
      rng
    )
    return {
      id: `${principleId}-${sorted.join('_')}-${askMean ? 'mean' : 'med'}`,
      fingerprint: `${principleId}:${sorted.join(',')}:${askMean ? 'mean' : 'med'}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the ${askMean ? 'mean (average)' : 'median'} of the data set: ${nums.join(', ')}`,
      choices,
      answer: String(correct),
      explanation: askMean
        ? `Add all 5 values (${sum}) and divide by 5: ${sum} ÷ 5 = ${mean}.`
        : `Order the numbers from least to greatest (${sorted.join(', ')}). The middle value is ${median}.`,
    }
  },
}
