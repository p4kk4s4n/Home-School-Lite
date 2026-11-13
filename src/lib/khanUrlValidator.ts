import type { Course, Unit } from '../types'

/**
 * Curated allowlist of live, sitemap-indexed US Khan Academy URLs
 * verified via search index redirect resolution (plus user-confirmed live paths).
 * Any non-search Khan Academy URL in curriculum data must appear verbatim here
 * so no synthesized or dead links can land on Khan's client-side "Oops" screen.
 */
export const VERIFIED_KHAN_URLS: ReadonlySet<string> = new Set([
  'https://www.khanacademy.org/economics-finance-domain',
  'https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro',
  'https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro/introduction-to-the-economic-way-of-thinking-macro/v/economic-models',
  'https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro/introduction-to-the-economic-way-of-thinking-macro/v/scarcity',
  'https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro/market-equilibrium-disequilibrium-and-changes-in-equilibrium/v/changes-in-equilibrium-price-and-quantity-when-supply-and-demand-change-khan-academy',
  'https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro/supply/v/law-of-supply',
  'https://www.khanacademy.org/economics-finance-domain/microeconomics',
  'https://www.khanacademy.org/economics-finance-domain/microeconomics/basic-economic-concepts-gen-micro',
  'https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium/market-equilibrium-tutorial/a/changes-in-equilibrium-price-and-quantity-the-four-step-process-cnx',
  'https://www.khanacademy.org/ela',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:craft-and-structure-4',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:craft-and-structure-4/xe0e52cf20ce2546d:identifying-text-structure-4/a/the-building-blocks-of-literature-4th',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:craft-and-structure-4/xe0e52cf20ce2546d:identifying-text-structure-4/v/the-structures-of-informational-texts-reading',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:craft-and-structure-long-passage-practice-4',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:integration-of-knowledge-and-ideas-4',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:integration-of-knowledge-and-ideas-4/xe0e52cf20ce2546d:connecting-texts-4/a/combining-information-from-two-sources',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:integration-of-knowledge-and-ideas-4/xe0e52cf20ce2546d:understanding-different-types-of-sources-4/v/comparing-written-and-spoken-versions-of-a-story-reading',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:key-ideas-and-details-4',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:key-ideas-and-details-4/xe0e52cf20ce2546d:identifying-main-ideas-and-summarizing-4/a/identifying-the-main-idea-of-a-text-4th',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:key-ideas-and-details-4/xe0e52cf20ce2546d:making-inferences-4/a/making-inferences-4th',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:key-ideas-and-details-4/xe0e52cf20ce2546d:referring-to-text-details-4/v/g4-referring-to-details',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:key-ideas-and-details-long-passage-practice-4',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:vocabulary-4th',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:vocabulary-4th/xe0e52cf20ce2546d:4th-grade-vocabulary-words-list-1/a/vocabulary-list-1-4th',
  'https://www.khanacademy.org/ela/4th-grade-reading-and-vocab/xe0e52cf20ce2546d:vocabulary-4th/xe0e52cf20ce2546d:4th-grade-vocabulary-words-list-1/v/admire-inspire-vocabulary',
  'https://www.khanacademy.org/ela/5th-grade-english-foundations',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:craft-and-structure-5',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:craft-and-structure-5/xb350e60168d6e96f:comparing-text-structures-5/v/g5-comparing-text-structures',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:craft-and-structure-long-passage-practice-5',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:key-ideas-and-details-5',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:life-on-the-edge-5/xb350e60168d6e96f:life-on-the-edge-vocab-practice-5/v/g5-vocab-strategy-unfamiliar',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:nouns-5-grammar',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:pronouns-5-grammar',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:style-and-tone-5-grammar',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:vocabulary-5th',
  'https://www.khanacademy.org/ela/5th-grade-reading-and-vocab/xb350e60168d6e96f:vocabulary-5th/xb350e60168d6e96f:5th-grade-vocabulary-words-list-1/a/vocabulary-list-1-5th',
  'https://www.khanacademy.org/ela/7th-and-8th-grade-grammar',
  'https://www.khanacademy.org/ela/7th-and-8th-grade-grammar/x9e6f4267f632f2c6:sentences-clauses-and-phrases-7',
  'https://www.khanacademy.org/ela/7th-and-8th-grade-grammar/x9e6f4267f632f2c6:style-and-tone-7',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary/x7538838f96af3430:craft-and-structure-7',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary/x7538838f96af3430:integration-of-knowledge-and-ideas-7/x7538838f96af3430:evaluating-claims-and-arguments-7/v/using-examples-reading',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary/x7538838f96af3430:key-ideas-and-details-7',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary/x7538838f96af3430:verbs-7-grammar',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary/x7538838f96af3430:vocabulary-7th',
  'https://www.khanacademy.org/ela/7th-grade-reading-and-vocabulary/x7538838f96af3430:word-study-7-grammar',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:craft-and-structure-8',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:craft-and-structure-8/x435b1de09a877dd7:interpreting-words-in-context-8/v/analyzing-tone-through-word-choice-reading',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:integration-of-knowledge-and-ideas-8',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:key-ideas-and-details-8',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:style-and-tone-8-grammar',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:verbs-8-grammar',
  'https://www.khanacademy.org/ela/8th-grade-reading-and-vocabulary/x435b1de09a877dd7:vocabulary-8th',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:craft-and-structure-6',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:integration-of-knowledge-and-ideas-6',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:integration-of-knowledge-and-ideas-6/x8ddea1200317e822:understanding-visual-evidence/v/comparing-stories-in-different-mediums-6',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:key-ideas-and-details-6',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:key-ideas-and-details-6/x8ddea1200317e822:main-idea-and-theme/e/main-idea-and-theme',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:key-ideas-and-details-6/x8ddea1200317e822:making-inferences/v/making-inferences-in-informational-texts-reading-khan-academy',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:key-ideas-and-details-long-passage-practice-6',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:pronouns-6-grammar',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:vocabulary-6th',
  'https://www.khanacademy.org/ela/new-6th-grade-reading-and-vocabulary/x8ddea1200317e822:word-study-6-grammar',
  'https://www.khanacademy.org/humanities/ap-us-government-and-politics',
  'https://www.khanacademy.org/humanities/ap-us-government-and-politics/interactions-among-branches-of-government',
  'https://www.khanacademy.org/humanities/ap-us-government-and-politics/interactions-among-branches-of-government/policy-and-the-branches/v/policy-and-the-branches-of-government',
  'https://www.khanacademy.org/humanities/ap-us-history/period-5/apush-compromise-of-1850-lesson/a/compromise-of-1850',
  'https://www.khanacademy.org/humanities/ap-us-history/period-5/apush-government-policies-during-the-civil-war-lesson/v/emancipation-proclamation',
  'https://www.khanacademy.org/humanities/approaches-to-art-history/very-beginner/renaissance-to-modern-art/v/renaissance-art-introduction',
  'https://www.khanacademy.org/humanities/constitution-101/x7a03a96a83aa80ff:slavery-the-emancipation-and-the-civil-war-and-reconstruction/x7a03a96a83aa80ff:reconstruction-an-overview/v/what-powers-did-the-reconstruction-amendments-grant-to-the-national-government',
  'https://www.khanacademy.org/humanities/grammar',
  'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-noun/welcome-to-grammar-subject/v/introduction-to-grammar',
  'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-preposition-and-the-conjunction/types-of-prepositions-and-phrases/v/terminal-prepositions-prepositions-the-parts-of-speech-grammar',
  'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/introduction-to-verbs/v/introduction-to-agreement-verbs-the-parts-of-speech',
  'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/the-tenses/v/introduction-to-verb-tense-the-parts-of-speech-grammar',
  'https://www.khanacademy.org/humanities/grammar/punctuation-the-comma-and-the-apostrophe',
  'https://www.khanacademy.org/humanities/grammar/punctuation-the-comma-and-the-apostrophe/commas-in-space-and-time/v/commas-and-introductory-elements-the-comma-punctuation-khan-academy',
  'https://www.khanacademy.org/humanities/grammar/syntax-sentences-and-clauses',
  'https://www.khanacademy.org/humanities/grammar/syntax-sentences-and-clauses/types-of-sentences/v/simple-and-compound-sentences-syntax-khan-academy',
  'https://www.khanacademy.org/humanities/grammar/usage-and-style',
  'https://www.khanacademy.org/humanities/medieval-world',
  'https://www.khanacademy.org/humanities/medieval-world/beginners-guide-to-medieval-europe',
  'https://www.khanacademy.org/humanities/oer-project-big-history/xc3079f0f2dd307e4:agriculture-complex-societies/xc3079f0f2dd307e4:empires-5-4/v/watch-persians-and-greeks',
  'https://www.khanacademy.org/humanities/renaissance-reformation',
  'https://www.khanacademy.org/humanities/renaissance-reformation/early-renaissance1',
  'https://www.khanacademy.org/humanities/renaissance-reformation/early-renaissance1/beginners-renaissance-florence/a/humanism-in-renaissance-italy',
  'https://www.khanacademy.org/humanities/renaissance-reformation/northern',
  'https://www.khanacademy.org/humanities/renaissance-reformation/northern-renaissance1',
  'https://www.khanacademy.org/humanities/renaissance-reformation/northern-renaissance1/beginners-guide-northern-renaissance/a/an-introduction-to-the-northern-renaissance-in-the-fifteenth-century',
  'https://www.khanacademy.org/humanities/renaissance-reformation/northern-renaissance1/beginners-guide-northern-renaissance/a/burgundy-and-the-burgundian-netherlands',
  'https://www.khanacademy.org/humanities/renaissance-reformation/protestant-reformation1/a/the-protestant-reformation',
  'https://www.khanacademy.org/humanities/renaissance-reformation/protestant-reformation1/v/introduction-to-the-protestant-reformation-luther-2-of-4',
  'https://www.khanacademy.org/humanities/seeing-america-sh/x35b7de5e9cd6796d:theme-geography-and-the-environment/x35b7de5e9cd6796d:1000-1875/a/the-great-serpent-mound',
  'https://www.khanacademy.org/humanities/us-government-and-civics',
  'https://www.khanacademy.org/humanities/us-government-and-civics/us-gov-foundations',
  'https://www.khanacademy.org/humanities/us-government-and-civics/us-gov-foundations/us-gov-relationship-between-the-states-and-the-federal-government/v/federalism-in-the-united-states',
  'https://www.khanacademy.org/humanities/us-government-and-civics/us-gov-foundations/x231f0f4241b58f49:welcome-to-us-government-and-civics/v/us-government-and-civics-introduction',
  'https://www.khanacademy.org/humanities/us-government-and-civics/us-gov-interactions-among-branches/us-gov-checks-on-the-presidency/a/checks-on-the-power-of-the-president',
  'https://www.khanacademy.org/humanities/us-government-and-civics/us-gov-interactions-among-branches/us-gov-the-bureaucracy-authority-and-accountability/v/congressional-oversight-of-bureaucracy',
  'https://www.khanacademy.org/humanities/us-government-and-civics/x231f0f4241b58f49:citizens-us-gov-civics/x231f0f4241b58f49:how-has-the-definition-of-citizenship-changed-over-time/v/the-dred-scott-case-and-citizenship',
  'https://www.khanacademy.org/humanities/us-government-and-civics/x231f0f4241b58f49:us-gov-democracy-today',
  'https://www.khanacademy.org/humanities/us-government-and-civics/x231f0f4241b58f49:us-gov-democracy-today/x231f0f4241b58f49:how-do-state-and-local-governments-work/v/state-and-local-government-video',
  'https://www.khanacademy.org/humanities/us-history',
  'https://www.khanacademy.org/humanities/us-history/civil-war-era',
  'https://www.khanacademy.org/humanities/us-history/civil-war-era/sectional-tension-1850s/v/dred-scott-v-sandford',
  'https://www.khanacademy.org/humanities/us-history/civil-war-era/sectional-tension-1850s/v/sectional-conflict-regional-differences',
  'https://www.khanacademy.org/humanities/us-history/civil-war-era/x71a94f19:the-end-of-the-civil-war/v/later-stages-of-the-civil-war-part-1',
  'https://www.khanacademy.org/humanities/us-history/civil-war-era/x71a94f19:unit-overview-unit-5/a/unit-5-overview',
  'https://www.khanacademy.org/humanities/us-history/colonial-america/colonial-north-america/a/developing-an-american-colonial-identity',
  'https://www.khanacademy.org/humanities/us-history/colonial-america/early-chesapeake-and-southern-colonies/v/early-english-settlements-jamestown',
  'https://www.khanacademy.org/humanities/us-history/colonial-america/x71a94f19:unit-overview-unit-2/a/unit-2-overview',
  'https://www.khanacademy.org/humanities/us-history/history-survey/us-history-survey/v/us-history-overview-1-jamestown-to-the-civil-war',
  'https://www.khanacademy.org/humanities/us-history/road-to-revolution',
  'https://www.khanacademy.org/humanities/us-history/road-to-revolution/creating-a-nation/a/the-constitutional-convention',
  'https://www.khanacademy.org/humanities/us-history/road-to-revolution/creating-a-nation/v/the-constitutional-convention',
  'https://www.khanacademy.org/humanities/us-history/road-to-revolution/the-american-revolution/a/the-american-revolution',
  'https://www.khanacademy.org/humanities/us-history/road-to-revolution/x71a94f19:unit-overview/a/unit-3-overview',
  'https://www.khanacademy.org/humanities/us-history/the-early-republic/politics-society-early-19th-c/a/the-louisiana-purchase',
  'https://www.khanacademy.org/humanities/us-history/the-early-republic/x71a94f19:unit-overview-unit-4/a/unit-4-overview',
  'https://www.khanacademy.org/humanities/world-history',
  'https://www.khanacademy.org/humanities/world-history-project-ap-preview/x7515b0ca3395d084:review-introduction-to-world-history/x7515b0ca3395d084:0-4collapse-and-restructuring/v/watch-rebuilding-the-silk-road-world-history-project-beta',
  'https://www.khanacademy.org/humanities/world-history-project-ap/xb41992e0ff5e0f09:unit-2-networks-of-exchange/xb41992e0ff5e0f09:2-3consequences-of-connectivity/a/activity-contextualization-mansa-musa',
  'https://www.khanacademy.org/humanities/world-history-project-ap/xb41992e0ff5e0f09:unit-2-networks-of-exchange/xb41992e0ff5e0f09:2-3consequences-of-connectivity/a/video-mansa-musa-and-islam-in-africa-crash-course-world-history-16',
  'https://www.khanacademy.org/humanities/world-history-project-ap/xb41992e0ff5e0f09:unit-4-transoceanic-interconnections/xb41992e0ff5e0f09:4-0technological-innovations-and-exploration/a/article-technology-in-the-age-of-exploration',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:early-humans/x66f79d8a:the-earliest-humans-2-1/v/early-humans-250-000-years-before-present-to-3000-bce-unit-2-overview',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:empires-and-belief-systems/x66f79d8a:rome-and-han-china-4-5/a/article-the-roman-empire-oer',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:empires-and-belief-systems/x66f79d8a:rome-and-han-china-4-5/v/emperors-of-pax-romana',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:empires-and-belief-systems/x66f79d8a:rome-and-han-china-4-5/v/fall-of-the-roman-empire',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:regional-webs/x66f79d8a:systems-restructure-in-europe-and-china-5-4/v/overview-of-the-middle-ages',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:regional-webs/x66f79d8a:the-islamic-world-5-6/a/medieval-muslim-societies',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:regional-webs/x66f79d8a:the-islamic-world-5-6/v/the-emergence-of-islam',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:the-first-global-age/x66f79d8a:age-of-exploration-6-7/v/spain-portugal-and-the-creation-of-a-global-economy',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:the-first-global-age/x66f79d8a:cultural-exchange-in-afro-eurasia-6-4/a/an-introduction-to-the-protestant-reformation',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:the-first-global-age/x66f79d8a:cultural-exchange-in-afro-eurasia-6-4/v/watch-the-protestant-reformation',
  'https://www.khanacademy.org/humanities/world-history/x66f79d8a:the-first-global-age/x66f79d8a:the-first-global-age-6-1/v/the-first-global-age-1200-to-1750-ce-unit-6-overview',
  'https://www.khanacademy.org/math/6th-grade-illustrative-math/unit-1-area-and-surface-area/lesson-11-polygons/v/area-breaking-up-shape',
  'https://www.khanacademy.org/math/6th-grade-math-eureka-squared-aligned/x0c458179b2148480:area-surface-area-and-volume',
  'https://www.khanacademy.org/math/7th-grade-illustrative-math/unit-1-scale-drawings/x16db28654a9632d7:scaled-relationships/v/corresponding-angles-and-distances-in-scaled-figures',
  'https://www.khanacademy.org/math/algebra-home/alg-linear-eq-func',
  'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:functions-and-equations/v/difference-between-equations-and-functions',
  'https://www.khanacademy.org/math/cc-eighth-grade-math',
  'https://www.khanacademy.org/math/cc-eighth-grade-math-essentials/x3ef2ca3186360389:geometry-transformations/x3ef2ca3186360389:dilations/v/dilations-and-properties',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-interpreting-scatter-plots/a/clusters-in-scatter-plots',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-line-of-best-fit/v/estimating-the-line-of-best-fit-exercise',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/two-way-tables/a/data-and-modeling-faq',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/two-way-tables/v/two-way-frequency-tables-and-venn-diagrams',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/a/pythagorean-theorem-intro',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/e/volume-of-cones',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/e/volume-of-spheres',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/e/volumes-of-cones--cylinders--and-spheres',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/pythagorean-theorem-application/v/pythagoriean-theorem-in-3d',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-linear-functions-modeling/v/exploring-linear-relationships',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-linear-functions-modeling/v/slope-example',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-slope-intercept-form',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/compare-linear-fuctions/e/compare-linear-functions-8th',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-approximating-irrational-numbers/v/approximating-square-roots-2',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exponent-properties/v/exponent-properties-involving-products',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-roots/v/finding-cube-roots',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation-compu/v/multiplying-and-dividing-in-scientific-notation',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/variables-on-both-sides/e/linear_equations_3',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-graphically/v/graphings-systems-of-equations',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/congruence-similarity/a/geometric-transformations-faq',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/congruence-similarity/v/comparing-side-lengths-after-dilation',
  'https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/rotations-8th/a/rotations-review',
  'https://www.khanacademy.org/math/cc-fifth-grade-math',
  'https://www.khanacademy.org/math/cc-fifth-grade-math-essentials/x0ca29c134f216eef:multi-digit-multiplication-and-division',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-multiply-fractions',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-multiply-fractions/imp-multiplying-fractions-and-whole-numbers/v/concept-fraction-whole-number-product',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-multiply-fractions/imp-multiplying-fractions-word-problems/v/multiplying-fractions-word-problem',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-multiply-fractions/imp-multiplying-fractions/v/multiplying-fractions',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-multiply-fractions/imp-multiplying-fractions/v/visualizing-fraction-products',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume/decompose-figures-to-find-volume/v/volume-in-unit-cubes-by-decomposing-shape',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume/decompose-figures-to-find-volume/v/volume-through-decomposition',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume/volume-with-unit-cubes/v/measuring-volume-with-unit-cubes',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/5th-volume/volume-word-problems/a/volume-of-rectangular-prisms-review',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-addition-and-subtraction-3',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-number-patterns/v/interpreting-and-graphing-relationships-between-patterns',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-algebraic-thinking/imp-number-patterns/v/interpreting-relationships-between-patterns',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-adding-and-subtracting-mixed-number-with-unlike-denominators/v/adding-mixed-numbers-with-regrouping',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-3/imp-visually-adding-and-subtracting-fractions-with-unlike-denominators/v/visually-adding-fractions-with-unlike-denominators',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-intro-to-the-coordinate-plane/a/graph-points-review',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-geometry-3/imp-intro-to-the-coordinate-plane/v/graphing-points-exercise',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-comparing-decimals-2/v/comparing-decimals-2-example',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-comparing-decimals-2/v/comparing-decimals-example',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-rounding-decimals/a/decimal-place-value-faq',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals/imp-rounding-decimals/v/rounding-decimals',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division/imp-multi-digit-division-2/a/multi-digit-multiplication-and-division-faq',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division/imp-multi-digit-division-2/v/division-3-more-long-division-and-remainder-examples',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/multi-digit-multiplication-and-division/imp-multi-digit-division-2/v/introduction-to-dividing-by-2-digits',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-whole-numbers-by-10-100-and-1000/v/multiplying-and-dividing-by-10-100-1000',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-with-powers-of-10/v/fractions-as-division-by-powers-of-10',
  'https://www.khanacademy.org/math/cc-fifth-grade-math/powers-of-ten/imp-multiplying-and-dividing-with-powers-of-10/v/multiplying-and-dividing-by-powers-of-10',
  'https://www.khanacademy.org/math/cc-fourth-grade-math',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/comparing-fractions-and-equivalent-fractions',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/comparing-fractions-and-equivalent-fractions/imp-equivalent-fractions-2/v/equivalent-amount-of-pizza',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/comparing-fractions-and-equivalent-fractions/imp-equivalent-fractions-2/v/equivalent-fractions-on-number-lines',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/comparing-fractions-and-equivalent-fractions/imp-equivalent-fractions-2/v/more-equivalent-fractions',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/division/division-place-value-and-area/v/division-using-understanding-of-place-value',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/division/multi-digit-division/v/long-division-without-remainder',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction-2',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-addition-and-subtraction-2/imp-subtracting-multi-digit-numbers/v/subtracting-multi-digit-numbers-with-regrouping',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals/imp-comparing-decimals/v/comparing-decimals-with-hundredths',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals/imp-decimals-vs-fractions/v/fraction-decimal-intuition-examples',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/adding-and-subtracting-mixed-numbers-word-problems/v/adding-fractions-word-problem-2',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-fractions-word-problems/v/subtracting-fractions-word-problem-1',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-mixed-numbers/v/adding-mixed-numbers-with-like-denominators',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-adding-and-subtracting-mixed-numbers/v/subtract-mixed-numbers-with-regrouping',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-decomposing-fractions/a/add-and-subtract-fractions-faq',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions-2/imp-mixed-numbers/e/converting_mixed_numbers_and_improper_fractions',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/e/drawing-angles',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry-2/imp-measuring-angles/v/using-a-protractor',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-conversion-word-problems/v/metric-system-unit-conversion-examples',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data-2/imp-converting-units-of-length/v/converting-metric-distance',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiplication-and-division-2/multiply-with-partial-products/v/multiplying-2-digits-by-1-digit-with-partial-products',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-how-10-relates-to-place-value/v/multiplying-whole-numbers-by-10',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2/imp-how-10-relates-to-place-value/v/place-value-when-multiplying-and-dividing-by-10',
  'https://www.khanacademy.org/math/cc-fourth-grade-math/plane-figures',
  'https://www.khanacademy.org/math/cc-seventh-grade-math',
  'https://www.khanacademy.org/math/cc-seventh-grade-math-essentials',
  'https://www.khanacademy.org/math/cc-seventh-grade-math-essentials/x220f497c584d1b35:integers-addition-and-subtraction',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-fracs-to-decimals/e/converting_fractions_to_decimals',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-angles/v/angle-basics',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circumference/a/area-of-circles-review',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circumference/v/parts-of-a-circle',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide/cc-7th-mult-div-negatives/e/multiplying_and_dividing_negative_numbers',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide/cc-7th-properties-of-mult-div/v/arithmetic-properties-with-negative-numbers',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-basic-prob/a/statistics-and-probability-faq',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-compound-events/v/probability-from-compound-sample-space',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-theoretical-and-experimental-probability/v/comparing-theoretical-to-experimental-probabilites',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion/7th-constant-of-proportionality/v/introduction-proportional-relationships',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion/cc-7th-equations-of-proportional-relationships/v/constructing-an-equation-for-a-proportional-relationship',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion/cc-7th-proportional-rel/v/analyzing-and-identifying-proportional-relationships-ex3',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions/cc-7th-interpreting-lin-exp/v/more-fancy-expressions-from-word-problems',
  'https://www.khanacademy.org/math/cc-seventh-grade-math/x6b17ba59:scale-drawings/cc-7th-scale-drawings/v/scale-factors-and-area',
  'https://www.khanacademy.org/math/cc-sixth-grade-math',
  'https://www.khanacademy.org/math/cc-sixth-grade-math-essentials/x2fbfb4d617cb5ebb:coordinate-plane-geometry',
  'https://www.khanacademy.org/math/cc-sixth-grade-math-essentials/x2fbfb4d617cb5ebb:rates-and-percentages/x2fbfb4d617cb5ebb:intro-to-percents/v/percent-from-fraction-models',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-dividing-decimals/v/dividing-decimals',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-dividing-decimals/v/dividing-decimals-with-hundredths',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/cc-6th-sub-decimals/v/subtracting-decimals',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6-mad/v/mean-absolute-deviation',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/mean-and-median/v/statistics-intro-mean-median-and-mode',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-inequalities/v/inequalities-on-a-number-line',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-intro-equations/v/variables-expressions-and-equations',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-add-sub-equations/v/adding-and-subtracting-the-same-thing-from-both-sides',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-mult-div-equations/v/solving-one-step-equations-2',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-solving-equations/v/one-step-equation-intuition',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-combining-like-terms/v/combining-like-terms-1',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-evaluating-expressions/a/terms-factors-and-coefficients-review',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-7th-evaluating-expressions-word-problems/v/evaluating-exponential-expressions',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/x0267d782:cc-6th-nets-of-3d-figures/v/surface-area-of-a-box',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/x0267d782:cc-6th-volume-with-mini-cubes/a/volume-with-cubes-of-fractional-side-lengths',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/x0267d782:cc-6th-volume-with-mini-cubes/v/volume-of-a-rectangular-prism-with-fractional-cubes',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-neg-num-intro/a/intro-to-negative-numbers',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-neg-num-intro/v/introduction-to-negative-numbers',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-equivalent-ratios/v/equivalent-ratios',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-equivalent-ratios/v/solving-ratio-problems-with-tables-exercise',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/a/intro-to-ratios',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/ratio-example-problems',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/ratios-as-fractions',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/ratios-intro',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/visualize-ratios/e/equivalent-ratio-word-problems--basic-',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/visualize-ratios/v/ratio-word-problem-examples',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/visualize-ratios/v/ratios-and-double-number-lines',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/visualize-ratios/v/ratios-with-tape-diagrams',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-exponents-and-order-of-operations/cc-6th-exponents/v/introduction-to-exponents',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-exponents-and-order-of-operations/cc-6th-order-of-operations/v/order-operations-intro',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-plane-figures/cc-6th-area-triangle/v/intuition-for-area-of-a-triangle',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-plane-figures/cc-6th-area/v/area-breaking-up-shape',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-percent-problems/e/finding_percents',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-percent-problems/v/finding-percentages-example',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-percent-word-problems/a/rates-and-percentages-faq',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-percentages/e/intro-to-percents',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-rates/a/rate-review',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-rates/v/practice-computing-and-comparing-rates',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/x0267d782:visualize-percents/v/finding-percentages-with-a-double-number-line',
  'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/x0267d782:visualize-percents/v/finding-the-whole-with-a-tape-diagram',
  'https://www.khanacademy.org/math/geometry-home/geometry-area-perimeter/geometry-perimeter/v/perimeter-and-unit-conversion',
  'https://www.khanacademy.org/math/geometry-home/geometry-pythagorean-theorem',
  'https://www.khanacademy.org/math/geometry-home/geometry-volume-surface-area',
  'https://www.khanacademy.org/math/geometry/xff63fac4:hs-geo-transformation-properties-and-proofs/hs-geo-rigid-transformations-overview/v/finding-measures-using-rigid-transformations',
  'https://www.khanacademy.org/math/geometry/xff63fac4:hs-geo-transformation-properties-and-proofs/hs-geo-transformations-definitions/v/sequences-of-transformations',
  'https://www.khanacademy.org/math/get-ready-for-5th-grade',
  'https://www.khanacademy.org/math/get-ready-for-algebra-i/x127ac35e11aba30e:get-ready-for-equations-inequalities/x127ac35e11aba30e:the-distributive-property-equivalent-expressions/v/factoring-algebraic-expressions',
  'https://www.khanacademy.org/math/grade-8-math/x37b9516354b6ae1a:data-and-modeling',
  'https://www.khanacademy.org/math/grade-8-math/x37b9516354b6ae1a:geometry',
  'https://www.khanacademy.org/math/grade-8-math/x37b9516354b6ae1a:pythagoras-theorem',
  'https://www.khanacademy.org/science',
  'https://www.khanacademy.org/science/ap-college-physics-1/xf557a762645cccc5:ap-physics-1-review/xf557a762645cccc5:ap-physics-1-concept-review/v/ap-physics-1-review-of-energy-and-work',
  'https://www.khanacademy.org/science/ap-college-physics-1/xf557a762645cccc5:linear-momentum',
  'https://www.khanacademy.org/science/ap-college-physics-1/xf557a762645cccc5:linear-momentum/xf557a762645cccc5:untitled-303/v/conservation-of-linear-momentum',
  'https://www.khanacademy.org/science/ap-college-physics-1/xf557a762645cccc5:work-energy-and-power',
  'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c:electric-circuits',
  'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c:geometric-optics',
  'https://www.khanacademy.org/science/ap-physics-c-mechanics/x077f5683c1428fac:kinematics',
  'https://www.khanacademy.org/science/ap-physics-c-mechanics/x077f5683c1428fac:linear-momentum/x077f5683c1428fac:linear-momentum-and-impulse/v/linear-momentum-and-impulse',
  'https://www.khanacademy.org/science/hs-bio',
  'https://www.khanacademy.org/science/hs-bio/x230b3ff252126bb6:biodiversity-and-human-impacts/x230b3ff252126bb6:biodiversity/a/biodiversity',
  'https://www.khanacademy.org/science/hs-bio/x230b3ff252126bb6:biodiversity-and-human-impacts/x230b3ff252126bb6:biodiversity/v/biodiversity',
  'https://www.khanacademy.org/science/hs-bio/x230b3ff252126bb6:ecology-and-natural-systems/x230b3ff252126bb6:interactions-in-communities/v/interactions-within-and-among-species',
  'https://www.khanacademy.org/science/hs-chemistry/x2613d8165d88df5e:chemical-reactions/x2613d8165d88df5e:energy-of-chemical-reactions/v/endothermic-and-exothermic-reactions',
  'https://www.khanacademy.org/science/hs-chemistry/x2613d8165d88df5e:chemical-reactions/x2613d8165d88df5e:representing-chemical-reactions/v/physical-and-chemical-changes',
  'https://www.khanacademy.org/science/hs-chemistry/x2613d8165d88df5e:thermochemistry/x2613d8165d88df5e:thermal-energy-and-equilibrium/v/thermal-energy-temperature-and-heat',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-and-society',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:earth-in-space/x87d03b443efbea0a:earths-place-in-the-universe/v/introduction-to-middle-school-earth-and-space-science',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-earth-sun-moon-system',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-earth-sun-moon-system/x87d03b443efbea0a:the-moon-and-its-motions/a/the-moon-and-its-motions',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:the-geosphere/x87d03b443efbea0a:the-rock-cycle/v/the-rock-cycle',
  'https://www.khanacademy.org/science/middle-school-earth-and-space-science/x87d03b443efbea0a:weather-and-climate',
  'https://www.khanacademy.org/science/ms-biology',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:cell-parts-and-functions/v/cell-parts-and-their-functions',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:cell-parts-and-functions/v/comparing-animal-and-plant-cells',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:cells-organisms/v/ms-cells-and-organisms',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:organization-in-the-human-body/v/ms-organization-in-the-human-body',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:ecosystems-and-biodiversity/x0c5bb03129646fd6:biodiversity-and-ecosystem-health/v/biodiversity-and-ecosystem-health-a-hawaiian-islands-case-study',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution/x0c5bb03129646fd6:evolution-and-common-ancestry/a/evolution',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution/x0c5bb03129646fd6:evolution-and-common-ancestry/e/understand-evolution-and-common-ancestry',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:evolution/x0c5bb03129646fd6:evolution-and-common-ancestry/v/evolution',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation/x0c5bb03129646fd6:chromosomes/v/chromosome-pairs',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation/x0c5bb03129646fd6:chromosomes/v/chromosomes-and-genes',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation/x0c5bb03129646fd6:mutations/v/mutations',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation/x0c5bb03129646fd6:reproduction-and-genetic-variation/v/sexual-reproduction-and-genetic-variation',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems/x0c5bb03129646fd6:populations-communities-and-ecosystems/v/biotic-and-abiotic-factors',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:interactions-in-ecosystems/x0c5bb03129646fd6:resources-and-population-growth/v/resources-and-population-growth',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-ecosystems/x0c5bb03129646fd6:matter-and-energy-in-foodwebs/v/matter-and-energy-in-food-webs-ms',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms/x0c5bb03129646fd6:food-and-energy-in-organisms/v/cellular-respiration-ms',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:matter-and-energy-in-organisms/x0c5bb03129646fd6:photosynthesis-in-organisms/v/ms-photosynthesis-in-organisms',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:natural-and-artificial-selection',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:organism-growth-and-the-environment/a/organism-growth-and-the-environment',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:organism-growth-and-reproduction/x0c5bb03129646fd6:plant-reproductive-success/v/ms-plant-reproductive-success',
  'https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:teacher-resources/x0c5bb03129646fd6:unit-guides/a/ngss-ms-biology-unit-guides',
  'https://www.khanacademy.org/science/ms-chemistry',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:chemical-changes',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:chemical-changes/xc370bc422b7f75fc:chemical-changes-ms/v/chemical-changes',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:chemical-changes/xc370bc422b7f75fc:chemical-reactions/v/chemical-equations',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:chemical-changes/xc370bc422b7f75fc:chemical-reactions/v/chemical-reactions',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:classifying-matter',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:classifying-matter/xc370bc422b7f75fc:compounds/v/compounds-and-chemical-formulas',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:physical-properties-of-matter',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:physical-properties-of-matter/xc370bc422b7f75fc:intrinsic-and-extrinsic-properties/a/physical-properties-and-changes',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:physical-properties-of-matter/xc370bc422b7f75fc:intrinsic-and-extrinsic-properties/v/physical-changes',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:physical-properties-of-matter/xc370bc422b7f75fc:intrinsic-and-extrinsic-properties/v/physical-properties',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:thermal-energy-and-heat',
  'https://www.khanacademy.org/science/ms-chemistry/xc370bc422b7f75fc:thermal-energy-and-heat/xc370bc422b7f75fc:temperature-and-heat/v/thermal-energy-and-heat-transfer',
  'https://www.khanacademy.org/science/ms-physics',
  'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:energy',
  'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:forces-at-a-distance/x1baed5db7c1bb50b:fields/v/fields-ms',
  'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:motion-and-forces',
  'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:motion-and-forces/x1baed5db7c1bb50b:forces/v/forces',
  'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:non-contact-interactions',
  'https://www.khanacademy.org/science/ms-physics/x1baed5db7c1bb50b:waves',
  'https://www.khanacademy.org/science/physics',
  'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound',
  'https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/work-and-the-work-energy-principle',
  'https://www.khanacademy.org/science/science-activities/x36e94577fc10b360:middle-school-life-science-activities',
])

/**
 * Verified live Ohio DNR / Ohio History Connection / Ohio Memory URLs.
 */
export const VERIFIED_OHIO_URLS: ReadonlySet<string> = new Set([
  'https://www.ohiohistory.org',
  'https://ohiomemory.org/',
  'https://ohiomemory.org/digital/collection/p267401coll36',
  'https://ohiodnr.gov/',
  'https://ohiodnr.gov/glacialgeology',
  'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-odnr/geologic-survey/educational-resources/isotelus-fossil',
  'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/geologic-survey/publications-maps/geologic-hiking-guides/geology-of-kelleys-island',
  'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/geologic-survey/glacial-geology/evidence-of-glaciers',
  'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/real-estate/canal-lands/recreation-ohio-canals',
  'https://ohiodnr.gov/discover-and-learn/safety-conservation/about-ODNR/real-estate/ohio-canal-maps',
  'https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/kelleys-island-state-park',
  'https://ohiodnr.gov/wps/portal/gov/odnr/go-and-do/family-friendly/fossil-collecting',
])

/**
 * Safe third-party educational simulation, archive, and media hosts allowed in
 * explore items, teacher resources, and supplemental curriculum links.
 */
export const ALLOWED_EXTERNAL_HOSTS: ReadonlySet<string> = new Set([
  'phet.colorado.edu',
  'apps.mathlearningcenter.org',
  'www.desmos.com',
  'storylineonline.net',
  'www.smashboom.org',
  'learn.genetics.utah.edu',
  'www.biointeractive.org',
  'artsandculture.google.com',
  'smarthistory.org',
  'naturalhistory.si.edu',
  'britishmuseum.withgoogle.com',
  'earth.google.com',
  'www.loc.gov',
  'www.pbslearningmedia.org',
  'museum.archives.gov',
  'www.battlefields.org',
  'www.ohiostatehouse.org',
  'www.nps.gov',
  'www.youtube.com',
  'ohiodnr.gov',
  'www.ohiohistory.org',
  'ohiomemory.org',
])

const BANNED_URL_PATTERNS: readonly { pattern: RegExp; reason: string }[] = [
  { pattern: /-tx(?:\/|$)/i, reason: 'Regional Texas (-tx) Khan variant is disallowed' },
  { pattern: /-matatag/i, reason: 'Regional Philippines (MATATAG) Khan variant is disallowed' },
  { pattern: /-pakistan|-ncf|-snc-aligned|up-sw-math|pisa-2025|indian-accent|class-7-english-grammar/i, reason: 'Non-US regional Khan course variant is disallowed' },
  { pattern: /^https:\/\/(?!www\.)[a-z0-9-]+\.khanacademy\.org/i, reason: 'Foreign-language Khan Academy subdomain is disallowed' },
  { pattern: /x87d03b443efbea42|x83571d44005c24e0|x24c4e73582d09141|x45a95ef365d91e36|x871d81186fec401a|x0c27387d81a952d7|x2e35759163e5e4fa/i, reason: 'Mismatched or fabricated Khan Academy unit hash' },
  { pattern: /\/science\/grade-5-science|\/science\/middle-school-physics|\/humanities\/writing-composition|\/ela\/[678]th-grade-reading-and-vocab(?:\/|$)|\/humanities\/world-history\/medieval-times(?:\/|$)/i, reason: 'Non-existent or deprecated Khan Academy course path' },
  { pattern: /ohiohistory\.org\/(?:learn|visit|research)\//i, reason: 'Legacy 404 Ohio History Connection subpath' },
  { pattern: /ohiodnr\.gov\/discover-and-learn\/(?:rock-minerals-fossils|land-water|history-culture)/i, reason: 'Legacy 404 Ohio DNR subpath' },
]

/**
 * Builds a pre-filled Khan Academy Search fallback URL for a lesson so the student
 * always has a 1-tap path to the target video or practice exercise even if Khan
 * reorganizes or renames a leaf slug.
 */
export function buildKhanSearchUrl(
  lessonTitle: string,
  videoTitle?: string,
  courseTitle?: string
): string {
  const clean = (raw?: string) =>
    (raw ?? '')
      .replace(/^Lesson\s+\d+\s*:\s*/i, '')
      .replace(/^(?:Unit\s+\d+\s+(?:Test|Exam)|Mid-Unit\s+Quiz|Quiz|Review)\s*:\s*/i, '')
      .replace(/\((?:Review|Part\s+\d+)\)$/i, '')
      .replace(/[↗▶]/g, '')
      .trim()

  const primary = clean(videoTitle) || clean(lessonTitle) || 'khan academy'
  const subjectHint = courseTitle
    ? courseTitle
        .replace(/^Grade\s+\d+\s+/i, '')
        .replace(/\s*\(.*\)$/, '')
        .trim()
    : ''

  const alreadyHasSubject =
    subjectHint &&
    subjectHint
      .toLowerCase()
      .split(/\s+/)
      .some((w) => w.length > 3 && primary.toLowerCase().includes(w))

  const query = alreadyHasSubject || !subjectHint ? primary : `${primary} ${subjectHint}`
  return `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(query.trim())}`
}

/**
 * Resolves the verified parent Khan Academy unit (or course) overview URL for a
 * curriculum unit, stripping leaf /v/, /a/, /e/ segments so the "Khan Unit" button
 * lands on the unit playlist instead of a single video or search URL.
 */
export function getCanonicalKhanUnitUrl(
  unit: Pick<Unit, 'lessons'>,
  course?: Pick<Course, 'externalCourseLinks'>
): string | null {
  const allKhanUrls = (unit.lessons ?? [])
    .map((l) => l.videoUrl)
    .filter((u): u is string => Boolean(u && u.startsWith('https://www.khanacademy.org/')))

  if (allKhanUrls.length === 0) {
    return null
  }

  const urls = allKhanUrls.filter((u) => !u.includes('/search?'))

  const counts = new Map<string, number>()

  for (const rawUrl of urls) {
    const cleanUrl = rawUrl.split('?')[0].split('#')[0]
    const leafIdx = cleanUrl.search(/\/(?:v|a|e)(?:\/|$)/)
    const beforeLeaf = leafIdx >= 0 ? cleanUrl.slice(0, leafIdx) : cleanUrl
    const parts = beforeLeaf.replace('https://www.khanacademy.org/', '').split('/').filter(Boolean)

    // Prefer depth 3 (course/subject/unit container) when verified, then depth 4 (topic), then depth 2 (course root)
    const candidates: string[] = []
    if (parts.length >= 3) {
      candidates.push(`https://www.khanacademy.org/${parts.slice(0, 3).join('/')}`)
    }
    if (parts.length >= 4) {
      candidates.push(`https://www.khanacademy.org/${parts.slice(0, 4).join('/')}`)
    }
    if (parts.length >= 2) {
      candidates.push(`https://www.khanacademy.org/${parts.slice(0, 2).join('/')}`)
    }

    const chosen = candidates.find((c) => VERIFIED_KHAN_URLS.has(c))
    if (chosen) {
      counts.set(chosen, (counts.get(chosen) ?? 0) + 1)
    }
  }

  if (counts.size > 0) {
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0]
  }

  const courseKhan = course?.externalCourseLinks?.find(
    (link) => link.url.startsWith('https://www.khanacademy.org/') && VERIFIED_KHAN_URLS.has(link.url)
  )
  return courseKhan?.url ?? allKhanUrls[0]
}

/**
 * Validates any curriculum, explore, assignment, or remediation URL against the
 * verified Khan Academy allowlist, Ohio primary URLs, and safe educational hosts.
 */
export function validateCurriculumUrl(
  url: string,
  context = ''
): { valid: boolean; reason?: string } {
  if (!url || typeof url !== 'string') {
    return { valid: false, reason: `${context}: URL is empty` }
  }

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return { valid: false, reason: `${context}: Malformed URL "${url}"` }
  }

  if (parsed.protocol !== 'https:') {
    return { valid: false, reason: `${context}: URL must use https:// ("${url}")` }
  }

  for (const rule of BANNED_URL_PATTERNS) {
    if (rule.pattern.test(url)) {
      return { valid: false, reason: `${context}: ${rule.reason} ("${url}")` }
    }
  }

  if (parsed.hostname.endsWith('khanacademy.org')) {
    if (parsed.hostname !== 'www.khanacademy.org') {
      return { valid: false, reason: `${context}: Khan URL must use www.khanacademy.org ("${url}")` }
    }
    if (parsed.pathname === '/search') {
      const q = parsed.searchParams.get('page_search_query')?.trim()
      if (!q) {
        return { valid: false, reason: `${context}: Khan search URL missing page_search_query` }
      }
      return { valid: true }
    }
    if (!VERIFIED_KHAN_URLS.has(url)) {
      return { valid: false, reason: `${context}: Unverified Khan Academy URL "${url}"` }
    }
    return { valid: true }
  }

  if (
    parsed.hostname === 'ohiodnr.gov' ||
    parsed.hostname === 'www.ohiohistory.org' ||
    parsed.hostname === 'ohiohistory.org' ||
    parsed.hostname === 'ohiomemory.org'
  ) {
    if (!VERIFIED_OHIO_URLS.has(url)) {
      return { valid: false, reason: `${context}: Unverified Ohio primary URL "${url}"` }
    }
    return { valid: true }
  }

  if (parsed.hostname === 'www.youtube.com') {
    if (parsed.pathname !== '/results' || !parsed.searchParams.get('search_query')?.trim()) {
      return { valid: false, reason: `${context}: YouTube URL must use verified /results?search_query= format` }
    }
    return { valid: true }
  }

  if (!ALLOWED_EXTERNAL_HOSTS.has(parsed.hostname)) {
    return { valid: false, reason: `${context}: Unapproved external host "${parsed.hostname}"` }
  }

  return { valid: true }
}
