const controllerMain = {
	
	affichageAccueil(req, res){

		try {

            res.render("main")

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerMain
