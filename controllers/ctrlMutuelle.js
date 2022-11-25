const modelMutuelle = require('../models/modelMutuelle');

const controllerMutuelle = {
	
	async affichageMutuelle(req, res){

		try {

			const data = await modelMutuelle.Mutuelles.afficherMutuelles()

			if(data){

				res.render("mutuelle", {dataMutuelle: data})

			}else{

				res.render("mutuelle", {dataMutuelle: {} })
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerMutuelle

