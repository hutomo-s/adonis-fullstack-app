'use strict'

const use = require('./use')
const CalcObj = use('./app/Handlers/Calc')
const Calc = new CalcObj()

test('adds 1 + 2 to equal 3', () => {
    expect(Calc.aPlusB(1, 2)).toBe(3)
})
