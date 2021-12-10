'use strict'

const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
/* pagina principal*/
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/* ----CRUD USER */
//create
Route.post('/user', 'UserController.store')
// Read
Route.get('/user/:id', 'UserController.show')
// update
Route.put('/user/:id', 'UserController.update')
// Delete
Route.delete('/user/:id', 'UserController.destroy')


// ---CRUD CANDIDATOS
// Create 
Route.post('/candidate', 'CandidateController.store')
// Read 
Route.get('/candidate/:id', 'CandidateController.show')
// Update 
Route.put('/candidate/:id','CandidateController.update')
// Delete 
Route.delete('/candidate/:id','CandidateController.destroy')
/*lista de candidatos*/
Route.get('/candidates', 'CandidateController.index')

// CRUD SKILLS
// Create
Route.post('/skill', 'SkillController.store')
//Read
Route.get('/skill/:id','SkillController.edit')
//Update
Route.put('/skill/:id','SkillController.update')
//Delete
Route.delete('/skill/:id','SkillController.delete')


