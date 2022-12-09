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

	redirectionOrdonnance(req, res){

		try {

			res.render("ajouterOrdonnance")

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

