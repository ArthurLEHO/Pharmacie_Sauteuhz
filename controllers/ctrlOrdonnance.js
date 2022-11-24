const modelOrdonnance = require('../models/modelOrdonnance');

const controllerOrdonnance = {
	
	async affichageOrdonnance(req, res){

		try {

			const data = await modelOrdonnance.Ordonnances.afficherOrdonnances();

			if(data){

				res.render("ordonnance", {dataOrdonnance: data})

			}else{

				res.render("ordonnance", {dataOrdonnance: {} })
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerOrdonnance

