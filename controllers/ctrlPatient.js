const modelPatient = require('../models/modelPatient');

const controllerPatient = {
	
	async affichagePatient(req, res){

		try {

			const data = await modelPatient.Patients.afficherPatients()

			if(data){

				res.render("patient", {dataPatient: data})

			}else{

				res.render("patient", {dataPatient: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async affichageUnPatient(req, res){

		try {

			const data = await modelPatient.Patients.afficherUnPatient(req)

			if(data){

				res.render("modifierPatient", {dataPatient: data})

			}else{

				res.render("patient", {dataPatient: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	redirectionPatient(req, res){

		try {

			res.render("ajouterPatient")

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterPatient(req, res){

		try {

			const data = await modelPatient.Patients.ajouterPatient(req)

			if(data){

				res.redirect("/patient");

			}else{

				console.log("champs incorrects")
				res.render("ajouterPatient");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerPatient(req, res){

		try {

			const data = await modelPatient.Patients.supprimerPatient(req)

			if(data){

				res.redirect("/patient");

			}else{

				console.log("erreur lors de l'ajout");
				res.redirect("/patient");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierPatient(req, res){

		try {

			const data = await modelPatient.Patients.modifierPatient(req)

			if(data){

				res.redirect("/patient");

			}else{

				console.log("champs incorrects")
				//res.redirect(encodeURIComponent("/medecin/modifierMedecin/" + req.params.id));
				res.redirect("/patient/modifierPatient/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerPatient

