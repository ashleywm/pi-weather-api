'use strict'
const Logger = use('Logger')

class PostMeasurement {
  get rules () {
    return {
      temperature: 'number',
      pressure: 'number',
      humidity: 'number'
    }
  }

  async fails (errorMessages) {
    // Send a more useful error messages
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = PostMeasurement
