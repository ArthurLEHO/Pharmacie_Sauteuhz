const express = require('express')
const ejs = require('ejs')
const path = require('path')

const mainRoutes = require('./routes/routesMain.js')
const ordonnancesRoutes = require('./routes/routesOrdonnance.js')
const medecinsRoutes = require('./routes/routesMedecin.js')
const patientsRoutes = require('./routes/routesPatient.js')
const medicamentsRoutes = require('./routes/routesMedicament.js')
const mutuellesRoutes = require('./routes/routesMutuelle.js')
const maladiesRoutes = require('./routes/routesMaladie.js')


let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded());
app.listen(3000);

//Définition des routes
app.use('/', mainRoutes)
app.use('/ordonnance', ordonnancesRoutes)
app.use('/medecin', medecinsRoutes)
app.use('/patient', patientsRoutes)
app.use('/medicament', medicamentsRoutes)
app.use('/mutuelle', mutuellesRoutes)
app.use('/maladie', maladiesRoutes)


