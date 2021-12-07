'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up () {
    this.create('candidates', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
