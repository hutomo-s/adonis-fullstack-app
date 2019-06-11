'use strict'

const CalcClass = use('App/Middleware/Calc')
const Calc = new CalcClass()

class DebugController {

	index ({ request, response }) {
		const query = request.get()

		const sum = Calc.aPlusB(1, 1)

		let responseVar = {
			query: query,
			sum: sum
		}

		response.send(responseVar)
	}

	welcome ({ request, view, response }) {
		let html = view.render('welcome')

		// TODO using html-minifier
		// https://www.npmjs.com/package/html-minifier

		console.log(html)
		
		response.send(html)
	}

}

module.exports = DebugController
