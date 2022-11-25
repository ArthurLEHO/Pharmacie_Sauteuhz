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

const Medecins = {

    async afficherMedecins(){

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query("SELECT * FROM medecin",  (error, elements)=>{

                if(error){

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    }, 

    async ajouterMedecin(req){

        let medecinNom = req.body.nom
        let medecinPrenom = req.body.prenom
        let medecinNumero = req.body.numero
        let medecinDiplome = req.body.diplome
    
        console.log(`Ajout msg ID ${medecinNom} de ${medecinPrenom} contenant ${medecinNumero} et noté ${medecinDiplome}`)
    
        let requeteSQL = "INSERT INTO medecin (Medecin_Nom, Medecin_Prenom, Medecin_NumeroTelephone, Medecin_IdDiplome) VALUES"
        requeteSQL = requeteSQL + ' ("' + medecinNom + '","' + medecinPrenom + '","' + medecinNumero + '",' + medecinDiplome + ')'
    
        console.log("Requete : "+requeteSQL)

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Medecins
}