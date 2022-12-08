const mysql2 = require('mysql2')
const iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')

let mysqlconnexion = mysql2.createConnection({

    host: configDB['dev']['host'],
    user: configDB['dev']['user'],
    password: configDB['dev']['password'],
    database: configDB['dev']['database']

});

mysqlconnexion.connect((err) => {

    if (err) console.log('BDD connexion échouée \n Erreur: ' + JSON.stringify(err))

})

const Maladies = {

    async afficherMaladies() {

        return new Promise((resolve, reject) => {

            mysqlconnexion.query("SELECT * FROM maladie", (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherUneMaladie(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM maladie WHERE Maladie_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }, 

    async ajouterMaladie(req) {

        let nom = req.body.nom

        let requeteSQL = "INSERT INTO maladie (Maladie_Nom) VALUES(?)"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [nom], (err, lignes, champs) => {

                if (err) {

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerMaladie(req) {

        let id = req.params.id
        let requeteSQL = "DELETE FROM maladie WHERE Maladie_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if (err) {

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierMaladie(req) {

        let id = req.params.id
        let nom = req.body.nom

        let requeteSQL = "UPDATE maladie SET Maladie_Nom = ? WHERE Maladie_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [nom, id], (err, lignes, champs) => {

                if (err) {

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}


module.exports = {

    Maladies
}