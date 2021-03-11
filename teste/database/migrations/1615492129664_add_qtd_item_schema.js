'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddQtdItemSchema extends Schema {
  up () {
    this.alter('items', (table) => {
      table.integer('qtd').unsigned()
    })
  }

  down () {
    this.alter('items', (table) => {
      table.dropColumn('qtd')
    })
  }
}

module.exports = AddQtdItemSchema
