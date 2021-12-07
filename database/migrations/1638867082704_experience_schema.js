'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienceSchema extends Schema {
  up () {
    this.create('experiences', (table) => {
      table.increments('experienceId')
      table.integer('candidateId').unsigned().references('candidateId').inTable('candidate')
      table.integer('skillId').unsigned().references('skillId').inTable('skill')
      table.integer('nivel', 1).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('experiences')
  }
}

module.exports = ExperienceSchema
