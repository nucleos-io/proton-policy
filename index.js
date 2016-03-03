'use strict'

const BaseClass = require('proton-base-class')

/**
 * @class
 * @classdesc this class define a proton policy
 * @author Luis Hernandez
 */
 class ProtonPolicy extends BaseClass {

  constructor(proton) {
    this.proton = proton
  }

}

module.exports = ProtonPolicy
