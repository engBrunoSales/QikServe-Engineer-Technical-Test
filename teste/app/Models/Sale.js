'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
    items () {
        return this.hasMany('App/Models/Item')
    }
}

module.exports = Sale
