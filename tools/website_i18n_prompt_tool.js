#!/usr/bin/env node

const localeSet = [
  "en",
  "ar",
  "es",
  "fr",
  "ja",
  "ko",
  "vi",
  "zh-Hans",
  "zh-Hant",
  "de",
  "ru",
];

const keys = [
  "brandCompany",
  "navPlatform",
  "navSystems",
  "navFlow",
  "navContact",
  "githubTop",
  "languageLabel",
  "eyebrow",
  "heroTitle",
  "heroLead",
  "primaryCta",
  "secondaryCta",
  "cardLabel",
  "cardHeadline",
  "signalOne",
  "signalTwo",
  "signalThree",
  "platformEyebrow",
  "platformTitle",
  "platformText",
  "productEyebrow",
  "productTitle",
  "productText",
  "productLink",
  "cardOneTitle",
  "cardOneText",
  "cardTwoTitle",
  "cardTwoText",
  "cardThreeTitle",
  "cardThreeText",
  "promiseEyebrow",
  "promiseTitle",
  "promiseOne",
  "promiseTwo",
  "promiseThree",
  "footerCompany",
  "footerContact",
];

console.log(`# AgInTi website i18n prompt

Update the AgInTi landing website with multilingual UI support.

Locale set:
${localeSet.map((locale) => `- ${locale}`).join("\n")}

Translation keys:
${keys.map((key) => `- ${key}`).join("\n")}

Rules:
- Keep the top hero concise and vivid.
- Match the README language set exactly.
- Keep AgInTiFlow GitHub visible in the header.
- Preserve the bright autonomous-lab positioning for chemistry and biomedicine.
- Use docs/app.js for translations and docs/index.html for the language dropdown options.
- Validate with: node --check docs/app.js.
`);
