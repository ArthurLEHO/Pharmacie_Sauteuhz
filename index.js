// inclure les dépendances et middlewares
//const mysql2 = require('mysql2')
const express = require('express')
const ejs = require('ejs')
const path = require('path')
//const iniparser = require('iniparser')
//const dbconnexion = require('./connexion')
//const defaultRoutes = require('./routes/defaultRoutes') 
const ordonnancesRoutes = require('./routes/routesOrdonnance.js')

// activer les dépendances
//let configDB = iniparser.parseSync('./DB.ini')
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

/*
let mysqlconnexion = mysql2.createConnection({

    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']

})

mysqlconnexion.connect((err) => {

    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))

})
*/
//dbconnexion.connecter;

// activer le middleware et lancer l'application sur le port 3000
app.use(express.json());
app.use(express.urlencoded());
app.listen(3000, () => console.log('le serveur Livre d\'Or est prêt.'));
app.use('/ordonnance', ordonnancesRoutes)
/*
app.get('/ordonnances', function(req, res) {

    mysqlconnexion.query("SELECT * FROM ordonnance", (err, lignes, champs) => {

        if (!err) {

            console.log(lignes);
            res.render("ordonnance.ejs", {ordonnance : lignes});

        }
    });
});
*/