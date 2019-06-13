'use strict'

const mainPath = __dirname + '/../'

function use(param) {
    return require(mainPath + param)
}

module.exports = use;