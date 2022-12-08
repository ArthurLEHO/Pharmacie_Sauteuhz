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

    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))

})

const Patients = {

    async afficherPatients(){

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query("SELECT * FROM patient",  (error, elements)=>{

                if(error){

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherUnPatient(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM patient WHERE Patient_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }, 

    async ajouterPatient(req){

        let nom = req.body.nom
        let prenom = req.body.prenom
        let dateNaissance = req.body.dateNaissance
        let numeroSecurite = req.body.numeroSecurite
        let numero = req.body.numero
        let mutuelle = req.body.mutuelle

        let requeteSQL = "INSERT INTO patient (Patient_Nom, Patient_Prenom, Patient_DateNaissance, Patient_NumeroSecurite, Patient_NumeroTelephone, Patient_IdMutuelle) VALUES(?,?,?,?,?,?)"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, prenom, dateNaissance, numeroSecurite, numero, mutuelle], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerPatient(req){ 
        
        let id = req.params.id
        let requeteSQL = "DELETE FROM patient WHERE Patient_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierPatient(req){

        let id = req.params.id
        let nom = req.body.nom
        let prenom = req.body.prenom
        let dateNaissance = req.body.dateNaissance
        let numeroSecurite = req.body.numeroSecurite
        let numero = req.body.numero
        let mutuelle = req.body.mutuelle
        
        let requeteSQL = "UPDATE patient SET Patient_Nom = ?, Patient_Prenom = ?, Patient_dateNaissance = ?, Patient_NumeroSecurite = ?, Patient_NumeroTelephone = ?, Patient_IdMutuelle = ? WHERE Patient_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, prenom, dateNaissance, numeroSecurite, numero, mutuelle, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Patients
}