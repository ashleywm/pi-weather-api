'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SensorSchema extends Schema {
  up () {
    this.create('sensors', (table) => {
      table.increments()
      table.string('name')
      table.string('description').nullable()
      table.string('location')
      table.string('hardware_address').nullable().unique()
      table.integer('station_id').references('id').inTable('station')
      table.timestamps()
    })
  }

  down () {
    this.drop('sensors')
  }
}

module.exports = SensorSchema
