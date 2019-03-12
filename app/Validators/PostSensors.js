'use strict'
const Logger = use('Logger')

class PostSensors {
  get rules () {
    return {
      name: 'required|string',
      description: 'string',
      location: 'string',
      hardware_address: 'required|unique:sensors'
    }
  }

  async fails (errorMessages) {
    // Send a more useful error messages
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = PostSensors
