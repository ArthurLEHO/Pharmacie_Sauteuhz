const modelMedecin = require('../models/modelMedecin');

const controllerMedecin = {
	
	async affichageMedecin(req, res){

		try {

			const data = await modelMedecin.Medecins.afficherMedecins()

			if(data){

				res.render("medecin", {dataMedecin: data})

			}else{

				res.render("medecin", {dataMedecin: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	redirectionMedecin(req, res){

		try {

			res.render("ajouterMedecin")

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterMedecin(req, res){

		try {

			const data = await modelMedecin.Medecins.ajouterMedecin(req)

			if(data){

				res.redirect("/medecin");

			}else{

				console.log("erreur lors de l'ajout");
				res.redirect("/medecin");
			}

		} catch (error) {

			console.log(error)
		}
	},

	


}

module.exports = controllerMedecin

