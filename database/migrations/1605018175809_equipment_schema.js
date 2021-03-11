'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipmentSchema extends Schema {
  up () {
    this.create('equipment', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('hostname')
      table.string('model')
      table.string('address')
      table.string('serial_number')
      table.string('buy_vat')
      table.string('disk_size')
      table.boolean('is_ssd').default(false)
      table.string('memory_size')
      table.string('operating_system')
      table.string('')
      table
        .integer('manufacturer_id')
        .unsigned()
        .references('id')
        .inTable('manufacturers')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('equipment')
  }
}

module.exports = EquipmentSchema
