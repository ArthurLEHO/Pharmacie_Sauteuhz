
const express = require('express')
const ejs = require('ejs')
const path = require('path')

const ordonnancesRoutes = require('./routes/routesOrdonnance.js')
/*
const ordonnancesRoutes = require('./routes/routesMedecin.js')
const ordonnancesRoutes = require('./routes/routesPatient.js')
const ordonnancesRoutes = require('./routes/routesMedicament.js')
*/

let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded());
app.listen(3000);

//Définition des routes
app.use('/ordonnance', ordonnancesRoutes)
/*
app.use('/medecin', medecinsRoutes)
app.use('/patient', patientsRoutes)
app.use('/medicament', medicamentsRoutes)
*/
