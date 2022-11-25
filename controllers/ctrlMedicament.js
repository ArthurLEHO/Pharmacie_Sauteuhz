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
	}
}

module.exports = controllerMedicament

