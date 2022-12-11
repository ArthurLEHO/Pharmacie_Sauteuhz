const modelPatient = require('../models/modelPatient');
const modelMutuelle = require('../models/modelMutuelle')

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

			const data1 = await modelPatient.Patients.afficherUnPatient(req)
			const data2 = await modelMutuelle.Mutuelles.afficherMutuelles(req)

			if(data1 && data2){

				res.render("modifierPatient", {dataPatient: data1, dataMutuelle: data2})

			}else{

				res.render("patient", {dataPatient: {}, dataMutuelle: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async redirectionPatient(req, res){

		try {

			const data = await modelMutuelle.Mutuelles.afficherMutuelles(req)

			if(data){

				res.render("ajouterPatient", {dataMutuelle: data})

			}else{

				console.log("Problème de récupération")
				res.render("ajouterPatient");
			}


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

