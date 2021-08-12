const express = require('express')
const https = require('https')
const app = express()
require('dotenv').config()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  console.log(req.body)
  city = req.body.cityName
  https.get(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`,
    (response) => {
      console.log(response.statusCode)
      response.on('data', (data) => {
        const wdata = JSON.parse(data)
        console.log(wdata)
        // console.log()
        res.write(`Temperature at ${city} is ${wdata.main.temp}`)
        res.send()
      })
    }
  )
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server is up and running')
})
