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
    }
}

module.exports = {
    
    Mutuelles
}