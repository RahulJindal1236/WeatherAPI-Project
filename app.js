const express = require('express')

const app = express()
port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server is up and running')
})
