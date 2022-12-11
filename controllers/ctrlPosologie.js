const modelPosologie = require('../models/modelPosologie');
const modelMedicament = require('../models/modelMedicament');


const controllerPosologie = {
	
	async affichagePosologie(req, res){

		try {

			const data1 = await modelPosologie.Posologie.afficherPosologie(req)
			const data2 = await modelMedicament.Medicaments.afficherMedicaments()

			if(data1 && data2){

				res.render("posologie", {dataPosologie: data1, dataMedicament: data2})

			}else{

				res.render("posologie", {dataPosologie: {},dataMedicament: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async affichageUnePosologie(req, res){

		try {

			const data1 = await modelPosologie.Posologie.afficherUnePosologie(req)
			const data2 = await modelMedicament.Medicaments.afficherMedicaments()

			if(data1 && data2){

				res.render("modifierPosologie", {dataPosologie: data1, dataMedicament: data2})

			}else{

				res.render("modifierPosologie", {dataPosologie: {},dataMedicament: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierPosologie(req, res){

		try {

			const data = await modelPosologie.Posologie.modifierPosologie(req)

			if(data){

				res.redirect("/posologie/" + req.params.id);

			}else{

				console.log("champs incorrects")
				//res.redirect(encodeURIComponent("/medecin/modifierMedecin/" + req.params.id));
				res.redirect("/posologie/modifierPosologie/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerPosologie
