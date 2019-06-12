'use strict'

const minify = require('html-minifier').minify
const CalcObj = use('App/Handlers/Calc')
const Calc = new CalcObj()

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

		var htmlMin = minify(html, {
			collapseWhitespace: true,
			removeAttributeQuotes: true
		})
		console.log(htmlMin)
		response.send(htmlMin)
	}

}

module.exports = DebugController
