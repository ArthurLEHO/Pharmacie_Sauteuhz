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

const Accueil = {

    async connexion(){

        return new Promise((resolve, reject) => {

            let requeteSQL = "SELECT Pharmacien_NomUtilisateur, Pharmacien_MotDePasse FROM pharmacien"

            mysqlconnexion.query(requeteSQL, (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Accueil
}