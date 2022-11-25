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
	}
}

module.exports = controllerPatient

