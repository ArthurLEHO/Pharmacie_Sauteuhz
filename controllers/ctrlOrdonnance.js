const modelOrdonnance = require('../models/modelOrdonnance');
const modelMedecin = require('../models/modelMedecin');
const modelPatient = require('../models/modelPatient');
const modelMaladie = require('../models/modelMaladie');

const controllerOrdonnance = {
	
	async affichageOrdonnance(req, res){

		try {

			const data1 = await modelOrdonnance.Ordonnances.afficherOrdonnances();
			const data2 = await modelMedecin.Medecins.afficherMedecins()
			const data3 = await modelPatient.Patients.afficherPatients()
			const data4 = await modelMaladie.Maladies.afficherMaladies()

			if(data1 && data2 && data3 && data4){

				res.render("ordonnance", {dataOrdonnance: data1, dataMedecin: data2, dataPatient: data3, dataMaladie: data4})

			}else{

				res.render("ordonnance", {dataOrdonnance: {} })
			}

		} catch (error) {

			console.log(error)
		}
	}, 

	async affichageUneOrdonnance(req, res){

		try {

			const data = await modelOrdonnance.Ordonnances.afficherUneOrdonnance(req)

			if(data){

				res.render("modifierOrdonnance", {dataOrdonnance: data})

			}else{

				res.render("ordonnance", {dataOrdonnance: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async redirectionOrdonnance(req, res){

		const data1 = await modelOrdonnance.Ordonnances.afficherOrdonnances();
		const data2 = await modelMedecin.Medecins.afficherMedecins()
		const data3 = await modelPatient.Patients.afficherPatients()
		const data4 = await modelMaladie.Maladies.afficherMaladies()

		try {

			res.render("ajouterOrdonnance", {dataOrdonnance: data1, dataMedecin: data2, dataPatient: data3, dataMaladie: data4})

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterOrdonnance(req, res){

		try {

			const data = await modelOrdonnance.Ordonnances.ajouterOrdonnance(req)

			if(data){

				res.redirect("/ordonnance");

			}else{

				console.log("champs incorrects")
				res.render("ajouterOrdonnance");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerOrdonnance(req, res){

		try {

			const data = await modelOrdonnance.Ordonnances.supprimerOrdonnance(req)

			if(data){

				res.redirect("/ordonnance");

			}else{

				console.log("erreur lors de l'ajout");
				res.redirect("/ordonnance");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierOrdonnance(req, res){

		try {

			const data = await modelOrdonnance.Ordonnances.modifierOrdonnance(req)

			if(data){

				res.redirect("/ordonnance");

			}else{

				console.log("champs incorrects")
				//res.redirect(encodeURIComponent("/Ordonnance/modifierOrdonnance/" + req.params.id));
				res.redirect("/ordonnance/modifierOrdonnance/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerOrdonnance

