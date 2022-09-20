const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (word === undefined || word === null) return undefined
  return word?.startsWith(startWord) ? word : `${startWord}${word}`
}
module.exports = fillStartWord
