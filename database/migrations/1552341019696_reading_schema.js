'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReadingSchema extends Schema {
  up () {
    this.create('readings', (table) => {
      table.increments()
      table.decimal('temperature').comment('Kelvin').nullable()
      table.decimal('pressure').comment('Pascal').nullable()
      table.decimal('humidity').comment('Percentage').nullable()
      table.integer('sensor_id').references('id').inTable('sensors')
      table.timestamps()
    })
  }

  down () {
    this.drop('readings')
  }
}

module.exports = ReadingSchema
