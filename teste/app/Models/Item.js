'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
    product () {
        return this.belongsTo('App/Models/Product')
    }

    sale () {
        return this.belongsTo('App/Models/Sale')
    }
}

module.exports = Item
