const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/hello', (req, res) => {
  res.send({data:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Api is listening on port ${port}`)
})