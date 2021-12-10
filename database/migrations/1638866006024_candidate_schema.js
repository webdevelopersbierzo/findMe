'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up () {
    this.create('candidates', (table) => {
      table.increments('candidateId')
      table.string('namefull',100).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('telefono', 10).notNullable()
      table.date('nacimiento')
      table.string('salarioActual', 10).notNullable()
      table.string('salarioDeseado', 10).notNullable()
      table.string('localidad', 254).notNullable().unique()
      table.string('pais', 254).notNullable().unique()
      table.boolean('remoto').notNullable
      table.boolean('movilidad').notNullable()
      //table.integer('id').unsigned().references('userId').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
