const mysql2 = require('mysql2')
const iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')

let mysqlconnexion = mysql2.createConnection({

    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']

});

mysqlconnexion.connect((err) => {

    if (err) console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))

})

const Posologie = {

    async afficherPosologie(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM posologie WHERE Posologie_IdOrdonnance = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async afficherUnePosologie(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM posologie WHERE Posologie_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierPosologie(req){

        let id = req.params.id
        let medicament = req.body.medicament
        let duree = req.body.duree
        let quantite = req.body.quantite
        
        let requeteSQL = "UPDATE posologie SET Posologie_IdMedicament = ?, Posologie_Duree = ?, Posologie_QuantiteMedicament = ? WHERE Posologie_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [medicament, duree, quantite, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Posologie
}