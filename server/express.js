const express = require('express')
const app = express()

app.get('/', (req, res) => { // '/' is voor het pad naar de root van de site.
  res.send('Hello World!')
})

app.listen("3001", () => {
  console.log(`Example app listening on port 3001`)
})
