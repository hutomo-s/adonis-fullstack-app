'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Calc {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  // async handle ({ request }, next) {
  //   // call next to advance the request
  //   await next()
  // }

  aPlusB(a, b) {
  	return a + b
  }
  
}

module.exports = Calc
