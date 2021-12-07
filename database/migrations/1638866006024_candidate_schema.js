'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up () {
    this.create('candidates', (table) => {
      table.increments('candidateId')
      table.string('namefull',100),notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('telefono', 254).notNullable()
      table.timestamps('nacimiento',{useTz:true})
      table.string('salarioActual', 10).notNullable()
      table.string('salarioDeseado', 10).notNullable()
      table.string('localidad', 254).notNullable().unique()
      table.string('pais', 254).notNullable().unique()
      table.boolean('remoto').notNullable
      table.boolena('movilidad'),notNullable()
      table.integer('userId').unsigned().references('userId').inTable('user')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
