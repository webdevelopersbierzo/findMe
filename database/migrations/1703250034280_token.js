'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.increments('tokensid')
      table.integer('Iduser').unsigned().references('userId').inTable('users')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
