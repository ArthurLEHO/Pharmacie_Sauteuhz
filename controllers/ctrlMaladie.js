const modelMaladie = require('../models/modelMaladie');

const controllerMaladie = {

	async affichageMaladie(req, res) {

		try {

			const data = await modelMaladie.Maladies.afficherMaladies()

			if (data) {

				res.render("maladie", { dataMaladie: data })

			} else {

				res.render("maladie", { dataMaladie: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async affichageUneMaladie(req, res) {

		try {

			const data = await modelMaladie.Maladies.afficherMaladies(req)

			if (data) {

				res.render("modifierMaladie", { dataMaladie: data })

			} else {

				res.render("maladieMaladie", { dataMaladie: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	redirectionMaladie(req, res) {

		try {

			res.render("ajouterMaladie")

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterMaladie(req, res) {

		try {

			const data = await modelMaladie.Maladies.ajouterMaladie(req)

			if (data) {

				res.redirect("/maladie");

			} else {

				console.log("champs incorrects")
				res.render("ajouterMaladie");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerMaladie(req, res) {

		try {

			const data = await modelMaladie.Maladies.supprimerMaladie(req)

			if (data) {

				res.redirect("/maladie");

			} else {

				console.log("erreur lors de l'ajout");
				res.redirect("/maladie");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierMaladie(req, res) {

		try {

			const data = await modelMaladie.Maladies.modifierMaladie(req)

			if (data) {

				res.redirect("/maladie");

			} else {

				console.log("champs incorrects")
				res.redirect("/maladie/modifierMaladie/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerMaladie

