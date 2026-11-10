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
  // =========================================================================
  // GRADE 4 MATH GENERATORS (Plain-Language Micro-Lesson Standard)
  // =========================================================================
  'g4.round-hundred': (rng, principleId, principleTitle) => {
    const thousands = randInt(rng, 1, 9)
    const hundreds = randInt(rng, 1, 8)
    const tens = randInt(rng, 1, 9)
    const ones = randInt(rng, 1, 9)
    const n = thousands * 1000 + hundreds * 100 + tens * 10 + ones
    const rounded = Math.round(n / 100) * 100
    const down = Math.floor(n / 100) * 100
    const up = Math.ceil(n / 100) * 100
    const wrongThousand = Math.round(n / 1000) * 1000
    const ans = rounded.toLocaleString('en-US')
    const choices = buildChoices(
      ans,
      [
        down.toLocaleString('en-US'),
        up.toLocaleString('en-US'),
        wrongThousand.toLocaleString('en-US'),
        (rounded + 100).toLocaleString('en-US'),
      ],
      rng
    )
    return {
      id: `${principleId}-${n}-100`,
      fingerprint: `${principleId}:${n}:100`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Round ${n.toLocaleString('en-US')} to the nearest hundred.`,
      choices,
      answer: ans,
      explanation: `Check the tens digit (${tens}). Since it is ${
        tens >= 5 ? '5 or more, round up' : 'less than 5, round down'
      } to ${ans}.`,
    }
  },

  'g4.round-thousand': (rng, principleId, principleTitle) => {
    const thousands = randInt(rng, 12, 98)
    const hundreds = randInt(rng, 1, 9)
    const tens = randInt(rng, 1, 9)
    const ones = randInt(rng, 1, 9)
    const n = thousands * 1000 + hundreds * 100 + tens * 10 + ones
    const rounded = Math.round(n / 1000) * 1000
    const down = Math.floor(n / 1000) * 1000
    const up = Math.ceil(n / 1000) * 1000
    const wrongHundred = Math.round(n / 100) * 100
    const ans = rounded.toLocaleString('en-US')
    const choices = buildChoices(
      ans,
      [
        down.toLocaleString('en-US'),
        up.toLocaleString('en-US'),
        wrongHundred.toLocaleString('en-US'),
        (rounded + 1000).toLocaleString('en-US'),
      ],
      rng
    )
    return {
      id: `${principleId}-${n}-1000`,
      fingerprint: `${principleId}:${n}:1000`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Round ${n.toLocaleString('en-US')} to the nearest thousand.`,
      choices,
      answer: ans,
      explanation: `Check the hundreds digit (${hundreds}). Since it is ${
        hundreds >= 5 ? '5 or more, round up' : 'less than 5, round down'
      } to ${ans}.`,
    }
  },

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
      explanation: `Look one place to the right (${
        roundTo === 100 ? tens : hundreds
      }). Round to ${ans}.`,
    }
  },

  'g4.multi-digit-add': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 1450, 6850)
    const b = randInt(rng, 1125, 2980)
    const correct = a + b
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
      id: `${principleId}-${a}+${b}`,
      fingerprint: `${principleId}:${a}+${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Add: ${a.toLocaleString('en-US')} + ${b.toLocaleString('en-US')} = ?`,
      choices,
      answer: ans,
      explanation: `Line up place values and regroup tens and hundreds: ${a.toLocaleString(
        'en-US'
      )} + ${b.toLocaleString('en-US')} = ${ans}.`,
    }
  },

  'g4.multi-digit-sub': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 3450, 8950)
    const b = randInt(rng, 1125, a - 400)
    const correct = a - b
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
      id: `${principleId}-${a}-${b}`,
      fingerprint: `${principleId}:${a}-${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Subtract: ${a.toLocaleString('en-US')} - ${b.toLocaleString('en-US')} = ?`,
      choices,
      answer: ans,
      explanation: `Line up place values and regroup where needed: ${a.toLocaleString(
        'en-US'
      )} - ${b.toLocaleString('en-US')} = ${ans}.`,
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
      prompt: `What is ${a.toLocaleString('en-US')} ${op} ${b.toLocaleString('en-US')}?`,
      choices,
      answer: ans,
      explanation: `Align digits by place value: ${a.toLocaleString(
        'en-US'
      )} ${op} ${b.toLocaleString('en-US')} = ${ans}.`,
    }
  },

  'g4.mult-1digit': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 24, 96)
    const b = randInt(rng, 3, 9)
    const correct = a * b
    const tens = Math.floor(a / 10) * 10
    const ones = a % 10
    const choices = buildChoices(
      String(correct),
      [correct + b, correct - b, tens * b + ones, correct + 10],
      rng
    )
    return {
      id: `${principleId}-${a}x${b}`,
      fingerprint: `${principleId}:${a}x${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply: ${a} × ${b} = ?`,
      choices,
      answer: String(correct),
      explanation: `Split ${a} into ${tens} + ${ones}. Multiply (${tens} × ${b}) + (${ones} × ${b}) = ${correct}.`,
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
      [correct + a, correct - b, tensA * b + onesA, correct + 10],
      rng
    )
    return {
      id: `${principleId}-${a}x${b}`,
      fingerprint: `${principleId}:${Math.min(a, b)}x${Math.max(a, b)}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `What is ${a} × ${b}?`,
      choices,
      answer: String(correct),
      explanation: `Multiply (${tensA} × ${b} = ${tensA * b}) and (${onesA} × ${b} = ${
        onesA * b
      }). Add them: ${correct}.`,
    }
  },

  'g4.div-exact': (rng, principleId, principleTitle) => {
    const divisor = randInt(rng, 3, 9)
    const quotient = randInt(rng, 12, 32)
    const dividend = divisor * quotient
    const choices = buildChoices(
      String(quotient),
      [quotient + 1, quotient - 1, quotient + 2, quotient - 2],
      rng
    )
    return {
      id: `${principleId}-${dividend}-div-${divisor}`,
      fingerprint: `${principleId}:${dividend}/${divisor}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Divide: ${dividend} ÷ ${divisor} = ?`,
      choices,
      answer: String(quotient),
      explanation: `Because ${divisor} × ${quotient} = ${dividend}, ${dividend} ÷ ${divisor} = ${quotient}.`,
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
      prompt: `Find the quotient and remainder: ${dividend} ÷ ${divisor}`,
      choices,
      answer: ans,
      explanation: `${divisor} × ${quotient} = ${
        divisor * quotient
      } with ${remainder} left over. Answer: ${ans}.`,
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
      prompt: `Find the missing numerator: ${num}/${den} = ?/${newDen}`,
      choices,
      answer: String(newNum),
      explanation: `Multiply top and bottom by ${mult}: ${num} × ${mult} = ${newNum}.`,
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
      [`${sumNum}/${den * 2}`, `${Math.abs(a - b)}/${den}`, `${sumNum + 1}/${den}`, `${a * b}/${den}`],
      rng
    )
    return {
      id: `${principleId}-${a}-${b}-d${den}`,
      fingerprint: `${principleId}:${a}+${b}/${den}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Add the fractions: ${a}/${den} + ${b}/${den} = ?`,
      choices,
      answer: ans,
      explanation: `Keep denominator ${den} and add numerators: ${a} + ${b} = ${sumNum}, giving ${ans}.`,
    }
  },

  'g4.fraction-sub-like': (rng, principleId, principleTitle) => {
    const den = randInt(rng, 5, 12)
    const a = randInt(rng, 3, den - 1)
    const b = randInt(rng, 1, a - 1)
    const diffNum = a - b
    const ans = `${diffNum}/${den}`
    const choices = buildChoices(
      ans,
      [`${a + b}/${den}`, `${diffNum}/0`, `${diffNum + 1}/${den}`, `${diffNum}/${den * 2}`],
      rng
    )
    return {
      id: `${principleId}-${a}-sub-${b}-d${den}`,
      fingerprint: `${principleId}:${a}-${b}/${den}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Subtract the fractions: ${a}/${den} - ${b}/${den} = ?`,
      choices,
      answer: ans,
      explanation: `Keep denominator ${den} and subtract numerators: ${a} - ${b} = ${diffNum}, giving ${ans}.`,
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
      prompt: `Which fraction matches the decimal ${decStr}?`,
      choices,
      answer: ans,
      explanation: `Two decimal places mean hundredths, so ${decStr} equals ${ans}.`,
    }
  },

  'g4.geometry-area': (rng, principleId, principleTitle) => {
    const w = randInt(rng, 5, 16)
    const h = randInt(rng, 4, 14)
    const area = w * h
    const perim = 2 * (w + h)
    const ans = `${area} sq units`
    const choices = buildChoices(
      ans,
      [`${perim} sq units`, `${w + h} sq units`, `${area + w} sq units`, `${area - h} sq units`],
      rng
    )
    return {
      id: `${principleId}-area-${w}x${h}`,
      fingerprint: `${principleId}:area:${w}x${h}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the area of a ${w} by ${h} rectangle.`,
      choices,
      answer: ans,
      explanation: `Area = length × width = ${w} × ${h} = ${area} sq units.`,
    }
  },

  'g4.geometry-perim': (rng, principleId, principleTitle) => {
    const w = randInt(rng, 5, 18)
    const h = randInt(rng, 4, 15)
    const area = w * h
    const perim = 2 * (w + h)
    const ans = `${perim} units`
    const choices = buildChoices(
      ans,
      [`${area} units`, `${w + h} units`, `${perim + 2} units`, `${2 * w + h} units`],
      rng
    )
    return {
      id: `${principleId}-perim-${w}x${h}`,
      fingerprint: `${principleId}:perim:${w}x${h}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the perimeter of a ${w} by ${h} rectangle.`,
      choices,
      answer: ans,
      explanation: `Perimeter = 2 × (${w} + ${h}) = ${perim} units.`,
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
      prompt: `Find the ${askArea ? 'area' : 'perimeter'} of a ${w} by ${h} rectangle.`,
      choices,
      answer: ans,
      explanation: askArea
        ? `Area = ${w} × ${h} = ${area} sq units.`
        : `Perimeter = 2 × (${w} + ${h}) = ${perim} units.`,
    }
  },

  'g4.angles-measure': (rng, principleId, principleTitle) => {
    const isRight = rng() < 0.5
    const total = isRight ? 90 : 180
    const part = isRight ? randInt(rng, 18, 74) : randInt(rng, 35, 145)
    const missing = total - part
    const ans = `${missing}°`
    const choices = buildChoices(
      ans,
      [`${missing + 10}°`, `${missing - 10}°`, `${180 - part}°`, `${90 - (part % 90)}°`],
      rng
    )
    return {
      id: `${principleId}-${total}-${part}`,
      fingerprint: `${principleId}:${total}-${part}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Two angles make ${total}°. One is ${part}°. Find the other.`,
      choices,
      answer: ans,
      explanation: `Subtract ${part}° from ${total}°: ${total}° - ${part}° = ${missing}°.`,
    }
  },

  'g4.factors-primes': (rng, principleId, principleTitle) => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
    const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28]
    const askPrime = rng() < 0.5
    if (askPrime) {
      const p = primes[randInt(rng, 0, primes.length - 1)]
      const wrong = shuffle(composites, rng).slice(0, 3)
      const choices = shuffle([String(p), ...wrong.map(String)], rng)
      return {
        id: `${principleId}-prime-${p}`,
        fingerprint: `${principleId}:prime:${p}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: 'Which number is prime?',
        choices,
        answer: String(p),
        explanation: `${p} is prime because its only factors are 1 and ${p}.`,
      }
    } else {
      const c = composites[randInt(rng, 0, composites.length - 1)]
      const wrong = shuffle(primes, rng).slice(0, 3)
      const choices = shuffle([String(c), ...wrong.map(String)], rng)
      return {
        id: `${principleId}-comp-${c}`,
        fingerprint: `${principleId}:comp:${c}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: 'Which number is composite?',
        choices,
        answer: String(c),
        explanation: `${c} is composite because it has more than two factors.`,
      }
    }
  },

  'g4.fraction-mult-whole': (rng, principleId, principleTitle) => {
    const whole = randInt(rng, 2, 6)
    const num = randInt(rng, 1, 3)
    const den = randInt(rng, 4, 8)
    const prodNum = whole * num
    const ans = `${prodNum}/${den}`
    const wrong1 = `${prodNum}/${den * whole}`
    const wrong2 = `${whole + num}/${den}`
    const wrong3 = `${num}/${den}`
    const choices = buildChoices(ans, [wrong1, wrong2, wrong3], rng)
    return {
      id: `${principleId}-${whole}x${num}_${den}`,
      fingerprint: `${principleId}:${whole}:${num}/${den}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply ${whole} × (${num}/${den}). What is the product?`,
      choices,
      answer: ans,
      explanation: `Multiply the whole number by the numerator: ${whole} × ${num} = ${prodNum}, keeping denominator ${den}.`,
    }
  },

  'g4.measurement-units': (rng, principleId, principleTitle) => {
    const kind = randInt(rng, 1, 3)
    if (kind === 1) {
      const feet = randInt(rng, 2, 7)
      const inches = feet * 12
      const ans = `${inches} inches`
      const choices = buildChoices(ans, [`${feet * 10} inches`, `${inches + 6} inches`, `${feet * 14} inches`], rng)
      return {
        id: `${principleId}-ft-in-${feet}`,
        fingerprint: `${principleId}:ft-in:${feet}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: `How many inches are in ${feet} feet?`,
        choices,
        answer: ans,
        explanation: `There are 12 inches in 1 foot. ${feet} × 12 = ${inches} inches.`,
      }
    } else if (kind === 2) {
      const kg = randInt(rng, 2, 8)
      const g = kg * 1000
      const ans = `${g.toLocaleString('en-US')} g`
      const choices = buildChoices(ans, [`${(kg * 100).toLocaleString('en-US')} g`, `${(g + 500).toLocaleString('en-US')} g`, `${(kg * 10).toLocaleString('en-US')} g`], rng)
      return {
        id: `${principleId}-kg-g-${kg}`,
        fingerprint: `${principleId}:kg-g:${kg}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: `How many grams are in ${kg} kilograms?`,
        choices,
        answer: ans,
        explanation: `1 kilogram equals 1,000 grams. ${kg} × 1,000 = ${g.toLocaleString('en-US')} grams.`,
      }
    } else {
      const hours = randInt(rng, 2, 6)
      const mins = hours * 60
      const ans = `${mins} minutes`
      const choices = buildChoices(ans, [`${hours * 100} minutes`, `${mins + 30} minutes`, `${hours * 50} minutes`], rng)
      return {
        id: `${principleId}-hr-min-${hours}`,
        fingerprint: `${principleId}:hr-min:${hours}`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: `How many minutes are in ${hours} hours?`,
        choices,
        answer: ans,
        explanation: `1 hour equals 60 minutes. ${hours} × 60 = ${mins} minutes.`,
      }
    }
  },

  // =========================================================================
  // GRADE 5 MATH GENERATORS (Plain-Language Micro-Lesson Standard)
  // =========================================================================
  'g5.powers-of-ten': (rng, principleId, principleTitle) => {
    const base = randInt(rng, 3, 45)
    const exp = randInt(rng, 2, 4)
    const factor = Math.pow(10, exp)
    const correct = base * factor
    const ans = correct.toLocaleString('en-US')
    const choices = buildChoices(
      ans,
      [
        (base * Math.pow(10, exp - 1)).toLocaleString('en-US'),
        (base * Math.pow(10, exp + 1)).toLocaleString('en-US'),
        (base + factor).toLocaleString('en-US'),
        (base * exp * 10).toLocaleString('en-US'),
      ],
      rng
    )
    return {
      id: `${principleId}-${base}-10e${exp}`,
      fingerprint: `${principleId}:${base}*10^${exp}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply: ${base} × 10^${exp} = ?`,
      choices,
      answer: ans,
      explanation: `10^${exp} has ${exp} zeros (${factor.toLocaleString(
        'en-US'
      )}). So ${base} × 10^${exp} = ${ans}.`,
    }
  },

  'g5.decimal-round': (rng, principleId, principleTitle) => {
    const whole = randInt(rng, 2, 29)
    const tenths = randInt(rng, 1, 8)
    const hundredths = randInt(rng, 1, 9)
    const n = Number(`${whole}.${tenths}${hundredths}`)
    const rounded = (Math.round(n * 10) / 10).toFixed(1)
    const down = `${whole}.${tenths}`
    const up = `${whole}.${tenths + 1}`
    const choices = buildChoices(
      rounded,
      [down, up, `${whole}.0`, `${whole}.${hundredths}`],
      rng
    )
    return {
      id: `${principleId}-${n}`,
      fingerprint: `${principleId}:${n}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Round ${n.toFixed(2)} to the nearest tenth.`,
      choices,
      answer: rounded,
      explanation: `Look at the hundredths digit (${hundredths}). Round ${n.toFixed(
        2
      )} to ${rounded}.`,
    }
  },

  'g5.decimal-add-sub': (rng, principleId, principleTitle) => {
    const isAdd = rng() < 0.5
    const a = randInt(rng, 35, 195) / 10
    const b = randInt(rng, 12, 32) / 10
    const correct = isAdd ? (a + b).toFixed(1) : (a - b).toFixed(1)
    const op = isAdd ? '+' : '-'
    const choices = buildChoices(
      correct,
      [
        (Number(correct) + 1).toFixed(1),
        (Number(correct) - 0.2).toFixed(1),
        (Number(correct) + 0.1).toFixed(1),
        (a + b + 0.5).toFixed(1),
      ],
      rng
    )
    return {
      id: `${principleId}-${a.toFixed(1)}${op}${b.toFixed(1)}`,
      fingerprint: `${principleId}:${a.toFixed(1)}${op}${b.toFixed(1)}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Calculate: ${a.toFixed(1)} ${op} ${b.toFixed(1)} = ?`,
      choices,
      answer: correct,
      explanation: `Line up the decimal points: ${a.toFixed(1)} ${op} ${b.toFixed(
        1
      )} = ${correct}.`,
    }
  },

  'g5.decimal-mult': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 9)
    const bTenths = randInt(rng, 2, 18)
    const b = bTenths / 10
    const prod = ((a * bTenths) / 10).toFixed(1)
    const choices = buildChoices(
      prod,
      [
        String(a * bTenths),
        ((a * bTenths) / 100).toFixed(2),
        (Number(prod) + 1).toFixed(1),
        (Number(prod) - 0.5).toFixed(1),
      ],
      rng
    )
    return {
      id: `${principleId}-${a}x${b.toFixed(1)}`,
      fingerprint: `${principleId}:${a}x${b.toFixed(1)}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply: ${a} × ${b.toFixed(1)} = ?`,
      choices,
      answer: prod,
      explanation: `Multiply ${a} × ${bTenths} = ${
        a * bTenths
      }, then place 1 decimal digit: ${prod}.`,
    }
  },

  'g5.mult-multi-digit': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 102, 245)
    const b = randInt(rng, 12, 25)
    const correct = a * b
    const ans = correct.toLocaleString('en-US')
    const choices = buildChoices(
      ans,
      [
        (correct + a).toLocaleString('en-US'),
        (correct - b).toLocaleString('en-US'),
        (correct + 100).toLocaleString('en-US'),
        (correct - 10).toLocaleString('en-US'),
      ],
      rng
    )
    return {
      id: `${principleId}-${a}x${b}`,
      fingerprint: `${principleId}:${a}x${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply: ${a} × ${b} = ?`,
      choices,
      answer: ans,
      explanation: `Multiply ${a} by the ones and tens of ${b}, then add: ${ans}.`,
    }
  },

  'g5.div-2digit': (rng, principleId, principleTitle) => {
    const divisor = randInt(rng, 11, 24)
    const quotient = randInt(rng, 11, 28)
    const dividend = divisor * quotient
    const choices = buildChoices(
      String(quotient),
      [quotient + 1, quotient - 1, quotient + 2, quotient - 2],
      rng
    )
    return {
      id: `${principleId}-${dividend}-div-${divisor}`,
      fingerprint: `${principleId}:${dividend}/${divisor}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Divide: ${dividend} ÷ ${divisor} = ?`,
      choices,
      answer: String(quotient),
      explanation: `Since ${divisor} × ${quotient} = ${dividend}, the quotient is ${quotient}.`,
    }
  },

  'g5.fraction-add-unlike': (rng, principleId, principleTitle) => {
    const pairs: [number, number][] = [
      [2, 4],
      [3, 6],
      [2, 6],
      [4, 8],
      [5, 10],
    ]
    const [d1, d2] = pairs[randInt(rng, 0, pairs.length - 1)]
    const mult = d2 / d1
    const n1 = 1
    const n2 = randInt(rng, 1, d2 - mult - 1)
    const sumNum = n1 * mult + n2
    const g = gcd(sumNum, d2)
    const ans = `${sumNum / g}/${d2 / g}`
    const choices = buildChoices(
      ans,
      [`${n1 + n2}/${d1 + d2}`, `${sumNum + 1}/${d2}`, `${n1 + n2}/${d2}`, `${sumNum}/${d1}`],
      rng
    )
    return {
      id: `${principleId}-${n1}_${d1}+${n2}_${d2}`,
      fingerprint: `${principleId}:${n1}/${d1}+${n2}/${d2}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Add and simplify: ${n1}/${d1} + ${n2}/${d2} = ?`,
      choices,
      answer: ans,
      explanation: `Rewrite ${n1}/${d1} as ${
        n1 * mult
      }/${d2}. Add ${n1 * mult}/${d2} + ${n2}/${d2} = ${ans}.`,
    }
  },

  'g5.fraction-sub-unlike': (rng, principleId, principleTitle) => {
    const pairs: [number, number][] = [
      [2, 4],
      [3, 6],
      [4, 8],
      [5, 10],
    ]
    const [d1, d2] = pairs[randInt(rng, 0, pairs.length - 1)]
    const mult = d2 / d1
    const n1 = 1
    const n2 = randInt(rng, 1, mult - 1)
    const diffNum = n1 * mult - n2
    const g = gcd(diffNum, d2)
    const ans = `${diffNum / g}/${d2 / g}`
    const choices = buildChoices(
      ans,
      [`${diffNum + 1}/${d2}`, `1/${d2 - d1}`, `${n1 * mult + n2}/${d2}`, `${diffNum}/${d1}`],
      rng
    )
    return {
      id: `${principleId}-${n1}_${d1}-${n2}_${d2}`,
      fingerprint: `${principleId}:${n1}/${d1}-${n2}/${d2}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Subtract and simplify: ${n1}/${d1} - ${n2}/${d2} = ?`,
      choices,
      answer: ans,
      explanation: `Rewrite ${n1}/${d1} as ${
        n1 * mult
      }/${d2}. Subtract ${n2}/${d2} to get ${ans}.`,
    }
  },

  'g5.fraction-mult': (rng, principleId, principleTitle) => {
    const d1 = randInt(rng, 2, 6)
    const n1 = randInt(rng, 1, d1 - 1)
    const d2 = randInt(rng, 2, 6)
    const n2 = randInt(rng, 1, d2 - 1)
    const rawN = n1 * n2
    const rawD = d1 * d2
    const g = gcd(rawN, rawD)
    const ans = `${rawN / g}/${rawD / g}`
    const choices = buildChoices(
      ans,
      [`${n1 + n2}/${d1 + d2}`, `${rawN + 1}/${rawD}`, `${n1 * d2}/${d1 * n2}`, `${rawN}/${rawD + 1}`],
      rng
    )
    return {
      id: `${principleId}-${n1}_${d1}x${n2}_${d2}`,
      fingerprint: `${principleId}:${n1}/${d1}*${n2}/${d2}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply and simplify: (${n1}/${d1}) × (${n2}/${d2}) = ?`,
      choices,
      answer: ans,
      explanation: `Multiply numerators (${n1} × ${n2} = ${rawN}) and denominators (${d1} × ${d2} = ${rawD}), then simplify to ${ans}.`,
    }
  },

  'g5.fraction-div-unit': (rng, principleId, principleTitle) => {
    const whole = randInt(rng, 2, 9)
    const den = randInt(rng, 2, 7)
    const correct = whole * den
    const choices = buildChoices(
      String(correct),
      [`1/${correct}`, `${whole + den}`, `${Math.max(1, whole - 1) * den}`, `${whole}/${den}`],
      rng
    )
    return {
      id: `${principleId}-${whole}-div-1_${den}`,
      fingerprint: `${principleId}:${whole}/(1/${den})`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Divide: ${whole} ÷ (1/${den}) = ?`,
      choices,
      answer: String(correct),
      explanation: `There are ${den} one-${den}ths in each whole: ${whole} × ${den} = ${correct}.`,
    }
  },

  'g5.volume-prism': (rng, principleId, principleTitle) => {
    const l = randInt(rng, 3, 10)
    const w = randInt(rng, 2, 8)
    const h = randInt(rng, 3, 9)
    const vol = l * w * h
    const ans = `${vol} cubic units`
    const choices = buildChoices(
      ans,
      [
        `${l + w + h} cubic units`,
        `${l * w + h} cubic units`,
        `${2 * (l + w + h)} cubic units`,
        `${vol + l} cubic units`,
      ],
      rng
    )
    return {
      id: `${principleId}-${l}x${w}x${h}`,
      fingerprint: `${principleId}:${l}x${w}x${h}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the volume of a ${l} by ${w} by ${h} prism.`,
      choices,
      answer: ans,
      explanation: `Volume = length × width × height = ${l} × ${w} × ${h} = ${vol} cubic units.`,
    }
  },

  'g5.unit-convert': (rng, principleId, principleTitle) => {
    const meters = randInt(rng, 2, 19)
    const cm = meters * 100
    const ans = `${cm} cm`
    const choices = buildChoices(
      ans,
      [`${meters * 10} cm`, `${meters * 1000} cm`, `${meters + 100} cm`, `${cm + 50} cm`],
      rng
    )
    return {
      id: `${principleId}-${meters}m`,
      fingerprint: `${principleId}:${meters}m`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Convert ${meters} meters to centimeters. (1 m = 100 cm)`,
      choices,
      answer: ans,
      explanation: `Multiply meters by 100: ${meters} × 100 = ${cm} cm.`,
    }
  },

  'g5.coord-plane': (rng, principleId, principleTitle) => {
    const x = randInt(rng, 1, 9)
    const y = randInt(rng, 1, 9)
    if (x === y) return MATH_GENERATORS['g5.coord-plane'](rng, principleId, principleTitle)
    const askX = rng() < 0.5
    const ans = String(askX ? x : y)
    const choices = buildChoices(
      ans,
      [askX ? y : x, x + y, Math.abs(x - y), x * y],
      rng
    )
    return {
      id: `${principleId}-${x}-${y}-${askX ? 'x' : 'y'}`,
      fingerprint: `${principleId}:(${x},${y}):${askX ? 'x' : 'y'}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `In the ordered pair (${x}, ${y}), what is the ${
        askX ? 'x-coordinate' : 'y-coordinate'
      }?`,
      choices,
      answer: ans,
      explanation: `In (x, y), the first number is x (${x}) and the second is y (${y}).`,
    }
  },

  'g5.order-of-ops': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 8)
    const b = randInt(rng, 2, 7)
    const c = randInt(rng, 2, 6)
    const correct = (a + b) * c
    const wrongNoParen = a + b * c
    const choices = buildChoices(
      String(correct),
      [wrongNoParen, a * b + c, a + b + c, correct + c],
      rng
    )
    return {
      id: `${principleId}-(${a}+${b})x${c}`,
      fingerprint: `${principleId}:(${a}+${b})*${c}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Evaluate the expression: (${a} + ${b}) × ${c}`,
      choices,
      answer: String(correct),
      explanation: `Solve parentheses first: ${a} + ${b} = ${a + b}. Then multiply by ${c} to get ${correct}.`,
    }
  },

  // =========================================================================
  // GRADE 6 MATH GENERATORS (Plain-Language Micro-Lesson Standard)
  // =========================================================================
  'g6.ratios-simplify': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 7)
    const b = randInt(rng, 2, 7)
    if (gcd(a, b) !== 1) return MATH_GENERATORS['g6.ratios-simplify'](rng, principleId, principleTitle)
    const k = randInt(rng, 2, 5)
    const rawA = a * k
    const rawB = b * k
    const ans = `${a}:${b}`
    const choices = buildChoices(
      ans,
      [`${b}:${a}`, `${a + 1}:${b}`, `${rawA}:${b}`, `${a}:${rawB}`],
      rng
    )
    return {
      id: `${principleId}-${rawA}-${rawB}`,
      fingerprint: `${principleId}:${rawA}:${rawB}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Simplify the ratio ${rawA}:${rawB} to lowest terms.`,
      choices,
      answer: ans,
      explanation: `Divide both numbers by ${k}: ${rawA} ÷ ${k} = ${a} and ${rawB} ÷ ${k} = ${b}, giving ${ans}.`,
    }
  },

  'g6.ratios-unit-rate': (rng, principleId, principleTitle) => {
    const unitRate = randInt(rng, 4, 18)
    const qty = randInt(rng, 3, 9)
    const total = unitRate * qty
    const items = ['notebooks', 'tickets', 'pounds of apples', 'boxes']
    const item = items[randInt(rng, 0, items.length - 1)]
    const ans = `$${unitRate}`
    const choices = buildChoices(
      ans,
      [`$${unitRate + 2}`, `$${Math.max(1, unitRate - 1)}`, `$${total - qty}`, `$${qty}`],
      rng
    )
    return {
      id: `${principleId}-${total}-${qty}`,
      fingerprint: `${principleId}:${total}/${qty}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `${qty} ${item} cost $${total}. What is the price for 1?`,
      choices,
      answer: ans,
      explanation: `Divide total cost by quantity: $${total} ÷ ${qty} = $${unitRate} per item.`,
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
      explanation: `Multiply ${pct / 100} × ${base} = ${correct}.`,
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
      prompt: `Divide and simplify: (${a}/${b}) ÷ (${c}/${d}) = ?`,
      choices,
      answer: ans,
      explanation: `Multiply by the reciprocal: (${a}/${b}) × (${d}/${c}) = ${rawNum}/${rawDen} = ${ans}.`,
    }
  },

  'g6.integers-abs-compare': (rng, principleId, principleTitle) => {
    const n = randInt(rng, 4, 35)
    const ans = String(n)
    const choices = buildChoices(
      ans,
      [`-${n}`, '0', `${n * 2}`, `${n - 1}`],
      rng
    )
    return {
      id: `${principleId}-abs-${n}`,
      fingerprint: `${principleId}:|-${n}|`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `What is the absolute value |-${n}|?`,
      choices,
      answer: ans,
      explanation: `Absolute value is the distance from 0, which is always positive: |-${n}| = ${n}.`,
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
      prompt: `Calculate: (${a}) ${op} ${b} = ?`,
      choices,
      answer: String(correct),
      explanation: isAdd
        ? `Start at ${a} and move ${b} right: ${a} + ${b} = ${correct}.`
        : `Start at ${a} and move ${b} left: ${a} - ${b} = ${correct}.`,
    }
  },

  'g6.expressions-exponents': (rng, principleId, principleTitle) => {
    const base = randInt(rng, 2, 9)
    const exp = randInt(rng, 2, 3)
    const correct = Math.pow(base, exp)
    const choices = buildChoices(
      String(correct),
      [base * exp, base + exp, correct + base, Math.pow(exp, base)],
      rng
    )
    return {
      id: `${principleId}-${base}^${exp}`,
      fingerprint: `${principleId}:${base}^${exp}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Evaluate the power: ${base}^${exp} = ?`,
      choices,
      answer: String(correct),
      explanation: `Multiply ${base} by itself ${exp} times to get ${correct}.`,
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
        Math.pow(coeff * x, 2) - constant,
        coeff * 2 * x - constant,
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
      prompt: `Find ${coeff}x² - ${constant} when x = ${x}.`,
      choices,
      answer: String(correct),
      explanation: `Square x first (${x}² = ${x * x}), multiply by ${coeff} (${
        coeff * x * x
      }), then subtract ${constant}: ${correct}.`,
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
      explanation: `Subtract ${b} (${m}x = ${
        rhs - b
      }), then divide by ${m}: x = ${x}.`,
    }
  },

  'g6.geometry-triangle': (rng, principleId, principleTitle) => {
    const base = randInt(rng, 6, 20)
    const height = randInt(rng, 4, 16)
    const area = (base * height) / 2
    const ans = `${area} sq cm`
    const choices = buildChoices(
      ans,
      [
        `${base * height} sq cm`,
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
      prompt: `Find the area of a triangle: base ${base} cm, height ${height} cm.`,
      choices,
      answer: ans,
      explanation: `Area = ½ × base × height = ½ × ${base} × ${height} = ${area} sq cm.`,
    }
  },

  'g6.geometry-prism': (rng, principleId, principleTitle) => {
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
      prompt: `Find the volume of a ${l} cm by ${w} cm by ${h} cm prism.`,
      choices,
      answer: ans,
      explanation: `Volume = ${l} × ${w} × ${h} = ${vol} cubic cm.`,
    }
  },

  'g6.geometry-triangle-prism': (rng, principleId, principleTitle) => {
    const askTriangle = rng() < 0.5
    if (askTriangle) {
      return MATH_GENERATORS['g6.geometry-triangle'](rng, principleId, principleTitle)
    }
    return MATH_GENERATORS['g6.geometry-prism'](rng, principleId, principleTitle)
  },

  'g6.stats-mean': (rng, principleId, principleTitle) => {
    const center = randInt(rng, 10, 35)
    const d1 = randInt(rng, 2, 6)
    const d2 = randInt(rng, 7, 12)
    const nums = shuffle([center - d2, center - d1, center, center + d1, center + d2 + 5], rng)
    const sum = nums.reduce((a, b) => a + b, 0)
    const mean = sum / 5
    const sorted = [...nums].sort((a, b) => a - b)
    const median = sorted[2]
    const range = sorted[4] - sorted[0]
    const choices = buildChoices(
      String(mean),
      [median, range, mean + 3, mean - 2],
      rng
    )
    return {
      id: `${principleId}-${sorted.join('_')}-mean`,
      fingerprint: `${principleId}:${sorted.join(',')}:mean`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the mean (average) of: ${nums.join(', ')}`,
      choices,
      answer: String(mean),
      explanation: `Add the 5 numbers (${sum}) and divide by 5: ${sum} ÷ 5 = ${mean}.`,
    }
  },

  'g6.stats-median': (rng, principleId, principleTitle) => {
    const center = randInt(rng, 10, 35)
    const d1 = randInt(rng, 2, 6)
    const d2 = randInt(rng, 7, 12)
    const nums = shuffle([center - d2, center - d1, center, center + d1, center + d2 + 5], rng)
    const sum = nums.reduce((a, b) => a + b, 0)
    const mean = sum / 5
    const sorted = [...nums].sort((a, b) => a - b)
    const median = sorted[2]
    const range = sorted[4] - sorted[0]
    const choices = buildChoices(
      String(median),
      [mean, range, median + 3, median - 2],
      rng
    )
    return {
      id: `${principleId}-${sorted.join('_')}-med`,
      fingerprint: `${principleId}:${sorted.join(',')}:med`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the median (middle value) of: ${nums.join(', ')}`,
      choices,
      answer: String(median),
      explanation: `Order from least to greatest (${sorted.join(
        ', '
      )}). The middle number is ${median}.`,
    }
  },

  'g6.stats-mean-median': (rng, principleId, principleTitle) => {
    const askMean = rng() < 0.5
    if (askMean) {
      return MATH_GENERATORS['g6.stats-mean'](rng, principleId, principleTitle)
    }
    return MATH_GENERATORS['g6.stats-median'](rng, principleId, principleTitle)
  },

  'g6.ratios-part-whole': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 7)
    const b = randInt(rng, 3, 8)
    const total = a + b
    const ans = `${a}:${total}`
    const choices = buildChoices(ans, [`${b}:${total}`, `${a}:${b}`, `${total}:${a}`, `${b}:${a}`], rng)
    return {
      id: `${principleId}-${a}-${b}-pw`,
      fingerprint: `${principleId}:${a}:${b}:pw`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `There are ${a} blue and ${b} red marbles. Find the ratio: blue to total.`,
      choices,
      answer: ans,
      explanation: `Add blue and red for total marbles: ${a} + ${b} = ${total}. The ratio of blue to total is ${a}:${total}.`,
    }
  },

  'g6.ratios-tables': (rng, principleId, principleTitle) => {
    const unitRate = randInt(rng, 3, 12)
    const countA = randInt(rng, 2, 5)
    const countB = randInt(rng, 6, 9)
    const valB = unitRate * countB
    const ans = `$${valB}`
    const choices = buildChoices(ans, [`$${unitRate * (countB - 1)}`, `$${unitRate * (countB + 1)}`, `$${valB + 10}`, `$${valB - 5}`], rng)
    return {
      id: `${principleId}-${unitRate}-${countB}-tbl`,
      fingerprint: `${principleId}:${unitRate}:${countB}:tbl`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `If ${countA} notebooks cost $${unitRate * countA}, how much will ${countB} notebooks cost at the same rate?`,
      choices,
      answer: ans,
      explanation: `Find the cost per notebook: $${unitRate * countA} ÷ ${countA} = $${unitRate} per notebook. Multiply by ${countB}: ${countB} × $${unitRate} = ${ans}.`,
    }
  },

  'g6.decimal-multiplication': (rng, principleId, principleTitle) => {
    const aInt = randInt(rng, 12, 45)
    const bInt = randInt(rng, 3, 9)
    const a = aInt / 10
    const b = bInt / 10
    const prod = Number((a * b).toFixed(2))
    const ans = prod.toFixed(2)
    const choices = buildChoices(ans, [
      (prod * 10).toFixed(2),
      (prod / 10).toFixed(3),
      (prod + 0.5).toFixed(2),
      (prod - 0.2).toFixed(2),
    ], rng)
    return {
      id: `${principleId}-${aInt}-${bInt}-dec`,
      fingerprint: `${principleId}:${aInt}:${bInt}:dec`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Calculate: ${a.toFixed(1)} × ${b.toFixed(1)}`,
      choices,
      answer: ans,
      explanation: `Multiply ${aInt} × ${bInt} = ${aInt * bInt}. Count 2 decimal places total: ${ans}.`,
    }
  },

  'g6.factors-gcf-lcm': (rng, principleId, principleTitle) => {
    const askGcf = rng() < 0.5
    const factor = randInt(rng, 2, 6)
    const m1 = randInt(rng, 2, 5)
    const m2 = randInt(rng, m1 + 1, 7)
    const n1 = factor * m1
    const n2 = factor * m2
    const gcfVal = factor * gcd(m1, m2)
    const lcmVal = (n1 * n2) / gcfVal

    if (askGcf) {
      const ans = String(gcfVal)
      const choices = buildChoices(ans, [gcfVal * 2, gcfVal + 1, Math.max(1, gcfVal - 1), gcfVal * 3], rng)
      return {
        id: `${principleId}-${n1}-${n2}-gcf`,
        fingerprint: `${principleId}:${n1}:${n2}:gcf`,
        principleId,
        principleTitle,
        type: 'mc',
        prompt: `Find the Greatest Common Factor (GCF) of ${n1} and ${n2}.`,
        choices,
        answer: ans,
        explanation: `The largest factor that divides evenly into both ${n1} and ${n2} is ${gcfVal}.`,
      }
    }
    const ans = String(lcmVal)
    const choices = buildChoices(ans, [lcmVal * 2, lcmVal / 2, lcmVal + factor, lcmVal - factor], rng)
    return {
      id: `${principleId}-${n1}-${n2}-lcm`,
      fingerprint: `${principleId}:${n1}:${n2}:lcm`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the Least Common Multiple (LCM) of ${n1} and ${n2}.`,
      choices,
      answer: ans,
      explanation: `The smallest positive multiple shared by both ${n1} and ${n2} is ${lcmVal}.`,
    }
  },

  'g6.expressions-distributive': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 3, 8)
    const b = randInt(rng, 2, 9)
    const ans = `${a}x + ${a * b}`
    const choices = buildChoices(ans, [`${a}x + ${b}`, `${a}x - ${a * b}`, `${a + b}x`, `${a * b}x`], rng)
    return {
      id: `${principleId}-${a}-${b}-dist`,
      fingerprint: `${principleId}:${a}:${b}:dist`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Use the distributive property to expand: ${a}(x + ${b})`,
      choices,
      answer: ans,
      explanation: `Multiply ${a} by each term inside the parentheses: (${a} × x) + (${a} × ${b}) = ${ans}.`,
    }
  },

  'g6.equations-inequalities': (rng, principleId, principleTitle) => {
    const c = randInt(rng, 2, 6)
    const val = randInt(rng, 3, 9)
    const product = c * val
    const ans = `x ≤ ${val}`
    const choices = buildChoices(ans, [`x < ${val}`, `x ≥ ${val}`, `x > ${val}`, `x ≤ ${val + 1}`], rng)
    return {
      id: `${principleId}-${c}-${product}-ineq`,
      fingerprint: `${principleId}:${c}:${product}:ineq`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Solve the inequality: ${c}x ≤ ${product}`,
      choices,
      answer: ans,
      explanation: `Divide both sides by ${c}: x ≤ ${product} ÷ ${c}, so ${ans}.`,
    }
  },

  'g6.geometry-parallelogram': (rng, principleId, principleTitle) => {
    const base = randInt(rng, 6, 16)
    const height = randInt(rng, 4, 12)
    const area = base * height
    const ans = `${area} sq cm`
    const choices = buildChoices(ans, [`${area / 2} sq cm`, `${area * 2} sq cm`, `${area + base} sq cm`, `${(base + height) * 2} sq cm`], rng)
    return {
      id: `${principleId}-${base}-${height}-pll`,
      fingerprint: `${principleId}:${base}:${height}:pll`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the area of a parallelogram with base ${base} cm and height ${height} cm.`,
      choices,
      answer: ans,
      explanation: `Area of a parallelogram = base × height = ${base} × ${height} = ${ans}.`,
    }
  },

  'g6.geometry-surface-area': (rng, principleId, principleTitle) => {
    const l = randInt(rng, 3, 8)
    const w = randInt(rng, 2, 5)
    const h = randInt(rng, 4, 7)
    const sa = 2 * (l * w + l * h + w * h)
    const vol = l * w * h
    const ans = `${sa} sq units`
    const choices = buildChoices(ans, [`${vol} sq units`, `${sa - 10} sq units`, `${sa + 12} sq units`, `${sa / 2} sq units`], rng)
    return {
      id: `${principleId}-${l}-${w}-${h}-sa`,
      fingerprint: `${principleId}:${l}:${w}:${h}:sa`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the surface area of a box with length ${l}, width ${w}, and height ${h}.`,
      choices,
      answer: ans,
      explanation: `Surface Area = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = 2(${l * w + l * h + w * h}) = ${ans}.`,
    }
  },

  'g6.coords-quadrants': (rng, principleId, principleTitle) => {
    const quad = randInt(rng, 1, 4)
    let x = randInt(rng, 1, 9)
    let y = randInt(rng, 1, 9)
    let expectedQuad = 'Quadrant I'
    if (quad === 2) {
      x = -x
      expectedQuad = 'Quadrant II'
    } else if (quad === 3) {
      x = -x
      y = -y
      expectedQuad = 'Quadrant III'
    } else if (quad === 4) {
      y = -y
      expectedQuad = 'Quadrant IV'
    }
    const choices = ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV']
    return {
      id: `${principleId}-${x}-${y}-quad`,
      fingerprint: `${principleId}:${x}:${y}:quad`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `In which quadrant of the coordinate plane is the point (${x}, ${y}) located?`,
      choices,
      answer: expectedQuad,
      explanation: `Point (${x}, ${y}) has ${x > 0 ? 'positive x' : 'negative x'} and ${y > 0 ? 'positive y' : 'negative y'}, which places it in ${expectedQuad}.`,
    }
  },

  'g6.stats-range-iqr': (rng, principleId, principleTitle) => {
    const minVal = randInt(rng, 10, 25)
    const spread = randInt(rng, 15, 35)
    const maxVal = minVal + spread
    const n2 = randInt(rng, minVal + 2, minVal + 10)
    const n3 = randInt(rng, n2 + 1, maxVal - 5)
    const n4 = randInt(rng, n3 + 1, maxVal - 1)
    const nums = [minVal, n2, n3, n4, maxVal]
    const rangeVal = maxVal - minVal
    const ans = String(rangeVal)
    const choices = buildChoices(ans, [rangeVal + 5, rangeVal - 3, maxVal, minVal], rng)
    return {
      id: `${principleId}-${nums.join('_')}-rng`,
      fingerprint: `${principleId}:${nums.join(',')}:rng`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the range of this dataset: ${nums.join(', ')}`,
      choices,
      answer: ans,
      explanation: `Range = maximum value minus minimum value: ${maxVal} - ${minVal} = ${rangeVal}.`,
    }
  },

  // =========================================================================
  // GRADE 7 MATH GENERATORS (Plain-Language Micro-Lesson Standard)
  // =========================================================================
  'g7.proportional-constant': (rng, principleId, principleTitle) => {
    const k = randInt(rng, 3, 15)
    const x = randInt(rng, 2, 9)
    const y = k * x
    const choices = buildChoices(
      `k = ${k}`,
      [`k = ${x}`, `k = ${y - x}`, `k = ${k + 2}`, `k = ${y}`],
      rng
    )
    return {
      id: `${principleId}-${x}-${y}`,
      fingerprint: `${principleId}:k:${x}->${y}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `In y = kx, y = ${y} when x = ${x}. Find k.`,
      choices,
      answer: `k = ${k}`,
      explanation: `Divide y by x to find the constant of proportionality: k = ${y} ÷ ${x} = ${k}.`,
    }
  },

  'g7.unit-rate-fractions': (rng, principleId, principleTitle) => {
    const denom = randInt(rng, 2, 5)
    const miles = randInt(rng, 2, 6)
    const speed = miles * denom
    const ans = `${speed} mph`
    const choices = buildChoices(
      ans,
      [`${miles} mph`, `${miles + denom} mph`, `${speed + denom} mph`, `${denom} mph`],
      rng
    )
    return {
      id: `${principleId}-${miles}mi-1_${denom}hr`,
      fingerprint: `${principleId}:${miles}/(1/${denom})`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `A runner goes ${miles} miles in 1/${denom} hour. Find the speed.`,
      choices,
      answer: ans,
      explanation: `Divide distance by time: ${miles} ÷ (1/${denom}) = ${miles} × ${denom} = ${speed} mph.`,
    }
  },

  'g7.percent-change': (rng, principleId, principleTitle) => {
    const base = randInt(rng, 2, 10) * 10
    const pct = [10, 20, 25, 50][randInt(rng, 0, 3)]
    const delta = (base * pct) / 100
    const next = base + delta
    const ans = `${pct}%`
    const choices = buildChoices(
      ans,
      [`${delta}%`, `${pct + 10}%`, `${Math.max(5, pct - 5)}%`, `${100 - pct}%`],
      rng
    )
    return {
      id: `${principleId}-${base}-to-${next}`,
      fingerprint: `${principleId}:${base}->${next}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `A price rises from $${base} to $${next}. Find the percent increase.`,
      choices,
      answer: ans,
      explanation: `Change is $${delta}. Divide by original: ${delta} ÷ ${base} = ${
        pct / 100
      } = ${pct}%.`,
    }
  },

  'g7.simple-interest': (rng, principleId, principleTitle) => {
    const p = randInt(rng, 2, 9) * 100
    const rPct = randInt(rng, 3, 8)
    const t = randInt(rng, 2, 5)
    const interest = (p * rPct * t) / 100
    const ans = `$${interest}`
    const choices = buildChoices(
      ans,
      [`$${(p * rPct) / 100}`, `$${interest + p}`, `$${interest + 20}`, `$${rPct * t}`],
      rng
    )
    return {
      id: `${principleId}-${p}-${rPct}-${t}`,
      fingerprint: `${principleId}:${p}*${rPct}%*${t}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find simple interest: P = $${p}, rate = ${rPct}%, time = ${t} years.`,
      choices,
      answer: ans,
      explanation: `Use I = P × r × t: $${p} × 0.0${rPct} × ${t} = $${interest}.`,
    }
  },

  'g7.int-add-sub': (rng, principleId, principleTitle) => {
    const a = -randInt(rng, 5, 22)
    const b = -randInt(rng, 3, 18)
    const isSub = rng() < 0.5
    const correct = isSub ? a - b : a + b
    const op = isSub ? '-' : '+'
    const choices = buildChoices(
      String(correct),
      [-correct, isSub ? a + b : a - b, correct + 2, correct - 2],
      rng
    )
    return {
      id: `${principleId}-${a}${op}(${b})`,
      fingerprint: `${principleId}:${a}${op}(${b})`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Calculate: (${a}) ${op} (${b}) = ?`,
      choices,
      answer: String(correct),
      explanation: isSub
        ? `Subtracting ${b} is adding ${-b}: ${a} + ${-b} = ${correct}.`
        : `Add two negative integers: ${a} + (${b}) = ${correct}.`,
    }
  },

  'g7.int-mult-div': (rng, principleId, principleTitle) => {
    const a = -randInt(rng, 3, 11)
    const b = randInt(rng, 2, 9) * (rng() < 0.5 ? -1 : 1)
    const correct = a * b
    const choices = buildChoices(
      String(correct),
      [-correct, a + b, Math.abs(correct) + 3, -(Math.abs(correct) + 2)],
      rng
    )
    return {
      id: `${principleId}-${a}x${b}`,
      fingerprint: `${principleId}:${a}*${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Multiply the integers: (${a}) × (${b}) = ?`,
      choices,
      answer: String(correct),
      explanation: `${
        b < 0 ? 'Negative × negative = positive' : 'Negative × positive = negative'
      }: (${a}) × (${b}) = ${correct}.`,
    }
  },

  'g7.linear-combine': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 9)
    const b = randInt(rng, 2, 8)
    const c = randInt(rng, 3, 12)
    const ans = `${a + b}x + ${c}`
    const choices = buildChoices(
      ans,
      [`${a + b + c}x`, `${a * b}x + ${c}`, `${a + b}x² + ${c}`, `${Math.abs(a - b)}x + ${c}`],
      rng
    )
    return {
      id: `${principleId}-${a}x+${b}x+${c}`,
      fingerprint: `${principleId}:${a}x+${b}x+${c}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Combine like terms: ${a}x + ${b}x + ${c}`,
      choices,
      answer: ans,
      explanation: `Add the x coefficients (${a} + ${b} = ${a + b}) and keep + ${c}: ${ans}.`,
    }
  },

  'g7.distributive': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 7)
    const b = randInt(rng, 2, 6)
    const c = randInt(rng, 2, 9)
    const ans = `${a * b}x + ${a * c}`
    const choices = buildChoices(
      ans,
      [`${a * b}x + ${c}`, `${a + b}x + ${a + c}`, `${a * b + a * c}x`, `${b}x + ${a * c}`],
      rng
    )
    return {
      id: `${principleId}-${a}(${b}x+${c})`,
      fingerprint: `${principleId}:${a}(${b}x+${c})`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Expand using the distributive property: ${a}(${b}x + ${c})`,
      choices,
      answer: ans,
      explanation: `Multiply ${a} by both terms inside: ${a}·${b}x + ${a}·${c} = ${ans}.`,
    }
  },

  'g7.two-step-eq': (rng, principleId, principleTitle) => {
    const m = randInt(rng, 2, 9)
    const x = randInt(rng, 2, 12)
    const b = randInt(rng, 3, 18)
    const rhs = m * x - b
    const choices = buildChoices(
      `x = ${x}`,
      [`x = ${x - 2}`, `x = ${x + 3}`, `x = ${rhs + b}`, `x = ${Math.max(1, Math.floor((rhs - b) / m))}`],
      rng
    )
    return {
      id: `${principleId}-${m}x-${b}=${rhs}`,
      fingerprint: `${principleId}:${m}x-${b}=${rhs}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Solve for x: ${m}x - ${b} = ${rhs}`,
      choices,
      answer: `x = ${x}`,
      explanation: `Add ${b} to both sides (${m}x = ${
        rhs + b
      }), then divide by ${m}: x = ${x}.`,
    }
  },

  'g7.inequalities': (rng, principleId, principleTitle) => {
    const m = randInt(rng, 2, 7)
    const k = randInt(rng, 3, 11)
    const b = randInt(rng, 2, 14)
    const rhs = m * k + b
    const ans = `x > ${k}`
    const choices = buildChoices(
      ans,
      [`x < ${k}`, `x > ${k + 2}`, `x > ${rhs - b}`, `x < ${k - 1}`],
      rng
    )
    return {
      id: `${principleId}-${m}x+${b}>${rhs}`,
      fingerprint: `${principleId}:${m}x+${b}>${rhs}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Solve the inequality: ${m}x + ${b} > ${rhs}`,
      choices,
      answer: ans,
      explanation: `Subtract ${b} (${m}x > ${rhs - b}), then divide by ${m}: ${ans}.`,
    }
  },

  'g7.scale-drawings': (rng, principleId, principleTitle) => {
    const scale = randInt(rng, 4, 15)
    const inches = randInt(rng, 3, 9)
    const actual = scale * inches
    const ans = `${actual} ft`
    const choices = buildChoices(
      ans,
      [`${scale + inches} ft`, `${actual + scale} ft`, `${inches} ft`, `${actual - inches} ft`],
      rng
    )
    return {
      id: `${principleId}-${inches}in-${scale}ft`,
      fingerprint: `${principleId}:${inches}in*${scale}ft`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Scale: 1 inch = ${scale} ft. Find the length of ${inches} inches.`,
      choices,
      answer: ans,
      explanation: `Multiply drawing length by scale factor: ${inches} × ${scale} = ${actual} ft.`,
    }
  },

  'g7.circle-circumference': (rng, principleId, principleTitle) => {
    const r = randInt(rng, 2, 10)
    const c = (2 * 3.14 * r).toFixed(2)
    const ans = `${c} cm`
    const choices = buildChoices(
      ans,
      [
        `${(3.14 * r * r).toFixed(2)} cm`,
        `${(3.14 * r).toFixed(2)} cm`,
        `${2 * r} cm`,
        `${(2 * 3.14 * (r + 1)).toFixed(2)} cm`,
      ],
      rng
    )
    return {
      id: `${principleId}-r${r}`,
      fingerprint: `${principleId}:C:r=${r}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the circumference when radius r = ${r} cm. (Use π ≈ 3.14)`,
      choices,
      answer: ans,
      explanation: `Use C = 2 × π × r: 2 × 3.14 × ${r} = ${c} cm.`,
    }
  },

  'g7.circle-area': (rng, principleId, principleTitle) => {
    const r = randInt(rng, 2, 10)
    const area = (3.14 * r * r).toFixed(2)
    const ans = `${area} sq cm`
    const choices = buildChoices(
      ans,
      [
        `${(2 * 3.14 * r).toFixed(2)} sq cm`,
        `${(3.14 * r).toFixed(2)} sq cm`,
        `${r * r} sq cm`,
        `${(3.14 * (r + 1) * (r + 1)).toFixed(2)} sq cm`,
      ],
      rng
    )
    return {
      id: `${principleId}-r${r}`,
      fingerprint: `${principleId}:A:r=${r}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the circle area when radius r = ${r} cm. (Use π ≈ 3.14)`,
      choices,
      answer: ans,
      explanation: `Use A = π × r²: 3.14 × ${r}² = 3.14 × ${r * r} = ${area} sq cm.`,
    }
  },

  'g7.angles-relations': (rng, principleId, principleTitle) => {
    const isSupp = rng() < 0.5
    const total = isSupp ? 180 : 90
    const label = isSupp ? 'supplementary (180°)' : 'complementary (90°)'
    const a = isSupp ? randInt(rng, 40, 140) : randInt(rng, 15, 75)
    const b = total - a
    const ans = `${b}°`
    const choices = buildChoices(
      ans,
      [`${b + 10}°`, `${b - 10}°`, `${180 - a}°`, `${a}°`],
      rng
    )
    return {
      id: `${principleId}-${total}-${a}`,
      fingerprint: `${principleId}:${total}-${a}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Two angles are ${label}. One is ${a}°. Find the other.`,
      choices,
      answer: ans,
      explanation: `Subtract ${a}° from ${total}°: ${total}° - ${a}° = ${b}°.`,
    }
  },

  'g7.probability-simple': (rng, principleId, principleTitle) => {
    const red = randInt(rng, 2, 5)
    const blue = randInt(rng, 3, 7)
    const total = red + blue
    const g = gcd(red, total)
    const ans = `${red / g}/${total / g}`
    const choices = buildChoices(
      ans,
      [`${red}/${blue}`, `${blue / gcd(blue, total)}/${total / gcd(blue, total)}`, `1/${total}`, `${red + 1}/${total}`],
      rng
    )
    return {
      id: `${principleId}-${red}r-${blue}b`,
      fingerprint: `${principleId}:${red}/${total}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `A bag has ${red} red and ${blue} blue marbles. Find P(red).`,
      choices,
      answer: ans,
      explanation: `There are ${total} total marbles. P(red) = ${red}/${total} = ${ans}.`,
    }
  },

  // =========================================================================
  // GRADE 8 MATH GENERATORS (Plain-Language Micro-Lesson Standard)
  // =========================================================================
  'g8.exponent-product': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 7)
    const b = randInt(rng, 2, 6)
    const ans = `x^${a + b}`
    const choices = buildChoices(
      ans,
      [`x^${a * b}`, `2x^${a + b}`, `x^${Math.abs(a - b)}`, `x^${a + b + 1}`],
      rng
    )
    return {
      id: `${principleId}-x${a}-x${b}`,
      fingerprint: `${principleId}:x^${a}*x^${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Simplify using exponent rules: x^${a} · x^${b} = ?`,
      choices,
      answer: ans,
      explanation: `When multiplying same bases, add the exponents: x^(${a} + ${b}) = ${ans}.`,
    }
  },

  'g8.exponent-power': (rng, principleId, principleTitle) => {
    const a = randInt(rng, 2, 6)
    const b = randInt(rng, 2, 5)
    const ans = `x^${a * b}`
    const choices = buildChoices(
      ans,
      [`x^${a + b}`, `${b}x^${a}`, `x^${a * b + 1}`, `x^${Math.abs(a - b)}`],
      rng
    )
    return {
      id: `${principleId}-(x${a})${b}`,
      fingerprint: `${principleId}:(x^${a})^${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Simplify the power of a power: (x^${a})^${b} = ?`,
      choices,
      answer: ans,
      explanation: `Multiply the exponents for a power of a power: x^(${a} × ${b}) = ${ans}.`,
    }
  },

  'g8.sci-notation': (rng, principleId, principleTitle) => {
    const coeff = randInt(rng, 2, 9)
    const tenth = randInt(rng, 1, 8)
    const exp = randInt(rng, 3, 6)
    const val = (coeff + tenth / 10) * Math.pow(10, exp)
    const ans = `${coeff}.${tenth} × 10^${exp}`
    const choices = buildChoices(
      ans,
      [
        `${coeff}.${tenth} × 10^${exp - 1}`,
        `${coeff}.${tenth} × 10^${exp + 1}`,
        `${coeff}${tenth} × 10^${exp}`,
        `0.${coeff}${tenth} × 10^${exp}`,
      ],
      rng
    )
    return {
      id: `${principleId}-${val}`,
      fingerprint: `${principleId}:sci:${val}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Write ${Math.round(val).toLocaleString('en-US')} in scientific notation.`,
      choices,
      answer: ans,
      explanation: `Move the decimal ${exp} places left to get ${coeff}.${tenth} × 10^${exp}.`,
    }
  },

  'g8.square-cube-roots': (rng, principleId, principleTitle) => {
    const root = randInt(rng, 4, 15)
    const sq = root * root
    const choices = buildChoices(
      String(root),
      [root + 1, root - 1, sq / 2, root + 2],
      rng
    )
    return {
      id: `${principleId}-sqrt-${sq}`,
      fingerprint: `${principleId}:sqrt(${sq})`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the principal square root: √${sq} = ?`,
      choices,
      answer: String(root),
      explanation: `Because ${root} × ${root} = ${sq}, √${sq} = ${root}.`,
    }
  },

  'g8.slope-two-points': (rng, principleId, principleTitle) => {
    const x1 = randInt(rng, 1, 5)
    const y1 = randInt(rng, 1, 6)
    const m = randInt(rng, -4, 6) || 2
    const dx = randInt(rng, 2, 5)
    const x2 = x1 + dx
    const y2 = y1 + m * dx
    const choices = buildChoices(
      String(m),
      [-m, m + 1, y2 - y1, dx],
      rng
    )
    return {
      id: `${principleId}-(${x1},${y1})-(${x2},${y2})`,
      fingerprint: `${principleId}:slope:(${x1},${y1})(${x2},${y2})`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find the slope between (${x1}, ${y1}) and (${x2}, ${y2}).`,
      choices,
      answer: String(m),
      explanation: `Slope m = (${y2} - ${y1}) ÷ (${x2} - ${x1}) = ${
        y2 - y1
      } ÷ ${dx} = ${m}.`,
    }
  },

  'g8.slope-intercept': (rng, principleId, principleTitle) => {
    const m = randInt(rng, 2, 8)
    const b = randInt(rng, -9, 12)
    const sign = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`
    const askSlope = rng() < 0.5
    const ans = String(askSlope ? m : b)
    const choices = buildChoices(
      ans,
      [askSlope ? b : m, -m, Math.abs(b) + 2, m + b],
      rng
    )
    return {
      id: `${principleId}-y=${m}x${sign}-${askSlope ? 'm' : 'b'}`,
      fingerprint: `${principleId}:y=${m}x${sign}:${askSlope ? 'm' : 'b'}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `In y = ${m}x ${sign}, what is the ${askSlope ? 'slope' : 'y-intercept'}?`,
      choices,
      answer: ans,
      explanation: `In y = mx + b, m is the slope (${m}) and b is the y-intercept (${b}).`,
    }
  },

  'g8.multi-step-eq': (rng, principleId, principleTitle) => {
    const c = randInt(rng, 2, 5)
    const a = c + randInt(rng, 2, 5)
    const x = randInt(rng, 2, 9)
    const b = randInt(rng, 1, 10)
    const d = (a - c) * x + b
    const choices = buildChoices(
      `x = ${x}`,
      [`x = ${x + 2}`, `x = ${x - 1}`, `x = ${d - b}`, `x = ${-x}`],
      rng
    )
    return {
      id: `${principleId}-${a}x+${b}=${c}x+${d}`,
      fingerprint: `${principleId}:${a}x+${b}=${c}x+${d}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Solve for x: ${a}x + ${b} = ${c}x + ${d}`,
      choices,
      answer: `x = ${x}`,
      explanation: `Subtract ${c}x and ${b}: ${a - c}x = ${
        d - b
      }. Divide by ${a - c}: x = ${x}.`,
    }
  },

  'g8.systems-linear': (rng, principleId, principleTitle) => {
    const x = randInt(rng, 2, 8)
    const y = randInt(rng, 1, 6)
    const m = randInt(rng, 2, 4)
    const sum = x + y
    const choices = buildChoices(
      `(${x}, ${y})`,
      [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${m}, ${sum})`],
      rng
    )
    return {
      id: `${principleId}-y=${m}x-sum=${sum}-at-${x}-${y}`,
      fingerprint: `${principleId}:sys:${x},${y}:${m}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Solve the system: x = ${x} and x + y = ${sum}`,
      choices,
      answer: `(${x}, ${y})`,
      explanation: `Substitute x = ${x} into x + y = ${sum} to get y = ${y}: (${x}, ${y}).`,
    }
  },

  'g8.functions-rate': (rng, principleId, principleTitle) => {
    const m = randInt(rng, 2, 7)
    const b = randInt(rng, 1, 12)
    const x = randInt(rng, 2, 8)
    const correct = m * x + b
    const choices = buildChoices(
      String(correct),
      [m + x + b, m * (x + b), correct + m, correct - b],
      rng
    )
    return {
      id: `${principleId}-f(${x})-${m}x+${b}`,
      fingerprint: `${principleId}:f(${x})=${m}*${x}+${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `If f(x) = ${m}x + ${b}, find f(${x}).`,
      choices,
      answer: String(correct),
      explanation: `Substitute x = ${x}: f(${x}) = ${m}(${x}) + ${b} = ${correct}.`,
    }
  },

  'g8.pythagorean-hyp': (rng, principleId, principleTitle) => {
    const triples: [number, number, number][] = [
      [3, 4, 5],
      [6, 8, 10],
      [5, 12, 13],
      [9, 12, 15],
      [8, 15, 17],
    ]
    const [a, b, c] = triples[randInt(rng, 0, triples.length - 1)]
    const choices = buildChoices(
      `${c}`,
      [`${a + b}`, `${c + 2}`, `${a * a + b * b}`, `${c - 1}`],
      rng
    )
    return {
      id: `${principleId}-${a}-${b}-${c}`,
      fingerprint: `${principleId}:hyp:${a},${b}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Right triangle legs are ${a} and ${b}. Find hypotenuse c.`,
      choices,
      answer: `${c}`,
      explanation: `Use a² + b² = c²: ${a}² + ${b}² = ${
        a * a + b * b
      }, so c = √${a * a + b * b} = ${c}.`,
    }
  },

  'g8.pythagorean-leg': (rng, principleId, principleTitle) => {
    const triples: [number, number, number][] = [
      [3, 4, 5],
      [6, 8, 10],
      [5, 12, 13],
      [9, 12, 15],
      [8, 15, 17],
    ]
    const [a, b, c] = triples[randInt(rng, 0, triples.length - 1)]
    const choices = buildChoices(
      `${b}`,
      [`${c - a}`, `${b + 2}`, `${c * c - a * a}`, `${a + c}`],
      rng
    )
    return {
      id: `${principleId}-leg-${a}-${c}`,
      fingerprint: `${principleId}:leg:${a},${c}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `A right triangle has leg ${a} and hypotenuse ${c}. Find leg b.`,
      choices,
      answer: `${b}`,
      explanation: `Use b² = c² - a²: ${c}² - ${a}² = ${
        c * c - a * a
      }, so b = ${b}.`,
    }
  },

  'g8.transformations': (rng, principleId, principleTitle) => {
    const x = randInt(rng, 1, 7)
    const y = randInt(rng, 1, 7)
    const dx = randInt(rng, 2, 6)
    const dy = randInt(rng, 1, 5)
    const ans = `(${x + dx}, ${y - dy})`
    const choices = buildChoices(
      ans,
      [`(${x - dx}, ${y + dy})`, `(${x + dy}, ${y - dx})`, `(${x + dx}, ${y + dy})`, `(${-x}, ${-y})`],
      rng
    )
    return {
      id: `${principleId}-(${x},${y})+${dx}-${dy}`,
      fingerprint: `${principleId}:trans:(${x},${y})+${dx}-${dy}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Translate point (${x}, ${y}) right ${dx} and down ${dy}.`,
      choices,
      answer: ans,
      explanation: `Add ${dx} to x and subtract ${dy} from y: (${x} + ${dx}, ${y} - ${dy}) = ${ans}.`,
    }
  },

  'g8.volume-cylinder-cone': (rng, principleId, principleTitle) => {
    const r = randInt(rng, 2, 6)
    const h = randInt(rng, 3, 9)
    const coeff = r * r * h
    const ans = `${coeff}π cubic cm`
    const choices = buildChoices(
      ans,
      [`${2 * r * h}π cubic cm`, `${r * h}π cubic cm`, `${coeff + r}π cubic cm`, `${(r + h) * 2}π cubic cm`],
      rng
    )
    return {
      id: `${principleId}-cyl-r${r}-h${h}`,
      fingerprint: `${principleId}:cyl:r=${r},h=${h}`,
      principleId,
      principleTitle,
      type: 'mc',
      prompt: `Find cylinder volume: radius r = ${r} cm, height h = ${h} cm.`,
      choices,
      answer: ans,
      explanation: `Use V = πr²h: π × ${r}² × ${h} = ${coeff}π cubic cm.`,
    }
  },
}
