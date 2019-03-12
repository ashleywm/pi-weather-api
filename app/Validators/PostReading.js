'use strict'
const Logger = use('Logger')

class PostReading {
  get rules () {
    return {
      temperature: 'number',
      pressure: 'number',
      humidity: 'number',
      sensor_id: 'required|exists:sensors,id'
    }
  }

  async fails (errorMessages) {
    // Send a more useful error messages
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = PostReading
