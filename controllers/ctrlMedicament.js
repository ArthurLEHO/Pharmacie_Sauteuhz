const modelMedicament = require('../models/modelMedicament');

const controllerMedicament = {
	
	async affichageMedicament(req, res){

		try {

			const data = await modelMedicament.Medicaments.afficherMedicaments()

			if(data){

				res.render("medicament", {dataMedicament: data})

			}else{

				res.render("medicament", {dataMedicament: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async affichageUnMedicament(req, res){

		try {

			const data = await modelMedicament.Medicaments.afficherUnMedicament(req)

			if(data){

				res.render("modifierMedicament", {dataMedicament: data})

			}else{

				res.render("medicament", {dataMedicament: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	redirectionMedicament(req, res){

		try {

			res.render("ajouterMedicament")

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterMedicament(req, res){

		try {

			const data = await modelMedicament.Medicaments.ajouterMedicament(req)

			if(data){

				res.redirect("/medicament");

			}else{

				console.log("champs incorrects")
				res.render("ajouterMedicament");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerMedicament(req, res){

		try {

			const data = await modelMedicament.Medicaments.supprimerMedicament(req)

			if(data){

				res.redirect("/medicament");

			}else{

				console.log("erreur lors de l'ajout");
				res.redirect("/medicament");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierMedicament(req, res){

		try {

			const data = await modelMedicament.Medicaments.modifierMedicament(req)

			if(data){

				res.redirect("/medicament");

			}else{

				console.log("champs incorrects")
				res.redirect("/medicament/modifierMedicament/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerMedicament

