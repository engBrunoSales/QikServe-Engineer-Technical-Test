'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.bigInteger('product').unsigned().index().references('id').inTable('products')
      table.bigInteger('sale').unsigned().index().references('id').inTable('sales')
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
