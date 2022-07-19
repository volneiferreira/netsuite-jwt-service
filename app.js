const express = require('express')
const config = require("./config.json");
const fs = require("fs");
const jose = require("jose");
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const fs = require('fs')
  const jose = require('jose')
  const config = require('./config.json')
  const privateKeyContent = fs.readFileSync('./private-key/auth-key.pem', 'utf-8')
  const algorithm = 'RS256'
  const privateKey = await jose.importPKCS8(privateKeyContent, algorithm)

  const header = {
    alg: algorithm,
    typ: 'JWT',
    kid: config.certificateId
  }

  const payload = {
    iss: config.clientId,
    scope: config.scope,
    aud: `https://${config.accountId}.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token`
  }

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader(header)
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(privateKey)

  res.send(jwt)
})

app.listen(port, () => {
  console.log(`JWT app listening on port ${port}`)
})
