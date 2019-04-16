'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {
    measurements () {
        return this.hasMany('App/Models/Measurement')
    }
}

module.exports = Sensor
