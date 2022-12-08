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

const Mutuelles = {

    async afficherMutuelles(){

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query("SELECT * FROM mutuelle",  (error, elements)=>{

                if(error){

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    }, 

    async afficherUneMutuelle(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM mutuelle WHERE Mutuelle_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }, 

    async ajouterMutuelle(req){

        let nom = req.body.nom
        let taux = req.body.taux

        let requeteSQL = "INSERT INTO mutuelle (Mutuelle_Nom, Mutuelle_Taux) VALUES(?,?)"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, taux], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerMutuelle(req){ 
        
        let id = req.params.id
        let requeteSQL = "DELETE FROM mutuelle WHERE Mutuelle_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierMutuelle(req){

        let id = req.params.id
        let nom = req.body.nom
        let taux = req.body.taux
        
        let requeteSQL = "UPDATE mutuelle SET Mutuelle_Nom = ?, Mutuelle_Taux = ? WHERE Mutuelle_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, taux, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Mutuelles
}