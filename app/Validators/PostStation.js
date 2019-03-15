'use strict'
const Logger = use('Logger')

class PostStation {
  get rules () {
    return {
      name: 'required|string|unique:stations',
      description: 'string',
      location: 'string'
    }
  }

  async fails (errorMessages) {
    // Send a more useful error messages
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = PostStation
