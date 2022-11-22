const mysqlconnexion = require('../connexion')

mysqlconnexion.connecter

async function AfficherOrdonnances(){

    mysqlconnexion.query("SELECT * FROM ordonnance", (err, lignes, champs) => {

        return(lignes)
        
    });
}

module.export = {

    AfficherOrdonnances
}