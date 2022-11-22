const modelOrdonnance = require('../models/modelOrdonnance');

const controllerOrdonnance = {
	
	async homeOrdonnance(req, res) {

		try {

			let data = await modelOrdonnance.AfficherOrdonnance

			if (data) {
				console.log(data)
				res.render("ordonnance", { ordonnance: data })
			} else {
				res.render("ordonnance", { ordonnance: {} })
			}

		} catch (error) {
			console.log(error)
		}
	}

}

module.exports = controllerOrdonnance

