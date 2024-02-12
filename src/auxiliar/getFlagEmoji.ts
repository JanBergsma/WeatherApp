export function getFlagEmoji(countryCode: string) {
  // https://dev.to/jorik/country-code-to-flag-emoji-a21
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}
