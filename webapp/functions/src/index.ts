import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
// import restApi from './routes'

try{
    admin.initializeApp()
}
catch(e){ console.log(e.message) }

const settings = { timestampsInSnapshots: true }

const adminFs = admin.firestore()
adminFs.settings(settings)

const app  = require(`${process.cwd()}/dist/server`).app;
app.use(cors({ origin: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/api/v1', restApi)

exports.httpOnRequest = functions.https.onRequest(app)