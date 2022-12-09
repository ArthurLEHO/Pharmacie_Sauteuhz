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

const Ordonnances = {

    async afficherOrdonnances(){

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query("SELECT * FROM ordonnance",  (error, elements)=>{

                if(error){

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    }, 

    async afficherUneOrdonnance(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM ordonnance WHERE Ordonnance_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }, 

    async ajouterOrdonnance(req){

        let medecin = req.body.medecin
        let patient = req.body.patient
        let maladie = req.body.maladie
        let date = req.body.date

        let requeteSQL = "INSERT INTO ordonnance (Ordonnance_IdMedecin, Ordonnance_IdPatient, Ordonnance_IdMaladie, Ordonnance_Date) VALUES(?,?,?,?)"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [medecin, patient, maladie, date], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerOrdonnance(req){ 
        
        let id = req.params.id
        let requeteSQL = "DELETE FROM ordonnance WHERE Ordonnance_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierOrdonnance(req){

        let id = req.params.id
        let medecin = req.body.medecin
        let patient = req.body.patient
        let maladie = req.body.maladie
        let date = req.body.date
        
        let requeteSQL = "UPDATE ordonnance SET Ordonnance_IdMedecin = ?, Ordonnance_IdPatient = ?, Ordonnance_IdMaladie = ?, Ordonnance_Date = ? WHERE Ordonnance_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [medecin, patient, maladie, date, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Ordonnances
}