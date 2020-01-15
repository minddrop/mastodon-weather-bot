import express from 'express'
import logger from 'morgan'

const app = express()
const port = 8080

app.use(logger('dev'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`server listening on port ${port}!`))
