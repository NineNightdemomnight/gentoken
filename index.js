const express = require('express')
const { randomBytes } = require('crypto')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3000

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const base64Alphabet = alpha + alpha.toUpperCase() + '0123456789-_'

function genToken(len = 12, alphabet = base64Alphabet) {
  const sourceBytes = randomBytes(len)
  const token = Array.from(sourceBytes).map(x => alphabet[x % alphabet.length]).join('')
  
  console.log(`Generated Token: ${token}`)
  sendWebhook(token)

  return token
}

async function sendWebhook(token) {
  const webhookURL = 'https://discord.com/api/webhooks/1290579193641439302/E58ENcQatV291K8uzwHzEmugDp02Xun9t5Pq4tgjqV-ge2be6jcMG_iQEzwEdF4KAG89' // ใส่ Webhook URL ของคุณ

  try {
    await axios.post(webhookURL, {
      content: `🔑 Generated Token: \`${token}\``
    })
    console.log('Webhook sent successfully!')
  } catch (error) {
    console.error('Failed to send webhook:', error.message)
  }
}

// สร้าง API Endpoint สำหรับสร้าง Token
app.get('/generate-token', (req, res) => {
  const token = genToken()
  res.json({ token })
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})