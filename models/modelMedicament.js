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

const Medicaments = {

    async afficherMedicaments() {

        return new Promise((resolve, reject) => {

            mysqlconnexion.query("SELECT * FROM medicament", (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherUnMedicament(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM medicament WHERE Medicament_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if (err) {

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

        async ajouterMedicament(req){

    let nom = req.body.nom
    let fabricant = req.body.fabricant
    let stock = req.body.stock
    let prix = req.body.prix

    let requeteSQL = "INSERT INTO medicament (Medicament_Nom, Medicament_Fabriquant, Medicament_Stock, Medicament_Prix) VALUES(?,?,?,?)"

    return new Promise((resolve, reject) => {

        mysqlconnexion.query(requeteSQL, [nom, fabricant, stock, prix], (err, lignes, champs) => {

            if (err) {

                return reject(err)

            }

            return resolve(lignes)

        })
    })
},

async supprimerMedicament(req){

    let id = req.params.id
    let requeteSQL = "DELETE FROM medicament WHERE Medicament_Id = ?"

    return new Promise((resolve, reject) => {

        mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

            if (err) {

                return reject(err)

            }

            return resolve(lignes)

        })
    })
},

async modifierMedicament(req){

    let id = req.params.id
    let nom = req.body.nom
    let fabricant = req.body.fabricant
    let stock = req.body.stock
    let prix = req.body.prix

    let requeteSQL = "UPDATE medicament SET Medicament_Nom = ?, Medicament_Fabriquant = ?, Medicament_Stock = ?, Medicament_Prix = ? WHERE Medicament_Id = ?"

    return new Promise((resolve, reject) => {

        mysqlconnexion.query(requeteSQL, [nom, fabricant, stock, prix, id], (err, lignes, champs) => {

            if (err) {

                return reject(err)

            }

            return resolve(lignes)

        })
    })
}
}

module.exports = {

    Medicaments
}