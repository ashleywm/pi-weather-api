'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Station extends Model {
    sensors () {
        return this.hasMany('App/Models/Sensor')
    }
}

module.exports = Station
