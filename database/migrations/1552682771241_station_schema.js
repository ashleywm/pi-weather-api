'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StationSchema extends Schema {
  up () {
    this.create('stations', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description')
      table.string('location')
      table.timestamps()
    })
  }

  down () {
    this.drop('stations')
  }
}

module.exports = StationSchema
