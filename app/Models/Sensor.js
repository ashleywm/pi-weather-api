'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {
    readings () {
        return this.hasMany('App/Models/Reading')
    }
}

module.exports = Sensor
