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
}

module.exports = DebugController
