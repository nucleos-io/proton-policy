'use strict'

/**
 * @class
 * @classdesc this class define a proton policy
 * @author Luis Hernandez
 */
 class ProtonPolicy {

  constructor(proton) {
    super(proton)
  }

  expose(policy) {
    global[this.name] = policy
  }

  get name() {
    return this.constructor.name
  }

  set fileName(fileName) {
    this.fileName = fileName
  }

}
