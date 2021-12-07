'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SkillSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments('skillId')
      table.string('nombre').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillSchema
