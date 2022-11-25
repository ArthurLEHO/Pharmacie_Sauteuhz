const modelMaladie = require('../models/modelMaladie');

const controllerMaladie = {
	
	async affichageMaladie(req, res){

		try {

			const data = await modelMaladie.Maladies.afficherMaladies()

			if(data){

				res.render("maladie", {dataMaladie: data})

			}else{

				res.render("maladie", {dataMaladie: {} })
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerMaladie

