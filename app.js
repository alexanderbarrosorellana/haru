const express = require('express');
const cors = require('cors');
const path = require('path')
const router = require('./src/routes')
const { json, urlencoded } = express;
const app = express();

const port = process.env.PORT || 8080;
app.use(json());
app.use(urlencoded({extended: false}))

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(router)

app.use('/', (req, res) => {
  res.send("API STATUS OK")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
