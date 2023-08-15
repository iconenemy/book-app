import express from 'express'
import cors from 'cors'
import cookie from 'cookie-parser'
import 'dotenv/config'

import AppRouter from './routes'
import connectDB from './config'

const app = express()
const router = new AppRouter(app)

app.set('port', process.env.PORT || 5000)
app.set('client_url', process.env.CLIENT_URL)
const port = app.get('port')
const clientUrl = app.get('client_url')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true,
    origin: clientUrl
}))
app.use(cookie())

router.init()

app.listen(port, () => {
    console.log(`Server has been stating on port ${port}`);
    // Connect to PostgreSQL
    connectDB();
})