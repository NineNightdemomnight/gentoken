const {randomBytes} = require('crypto')

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const base64Alphabet = alpha + alpha.toUpperCase() + '0123456789-_'

function genToken(len = 12, alphabet = base64Alphabet) {
  const sourceBytes = randomBytes(len)
  return Array.from(sourceBytes).map(x => alphabet[x % alphabet.length]).join('')
}
genToken.default = genToken // es6 module support
module.exports = genToken