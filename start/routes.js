'use strict'

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
Route.post('/user', ()=> {
  return {greeting: "Hola creando un usuario"}
})
// Read
Route.get('/user/:id', ()=> {
  return {greeting: "Hola comprobando usuario"}
})
// update
Route.put('/user/:id', ()=>{
  return {greeting: 'Actualizando un usuario'}
})
// Delete
Route.delete('/user/:id', ()=>{
  return{greeting: 'Borrando un usuario'}
})
// ---CRUD CANDIDATOS
// Create 
Route.post('/candidate/:id',()=>{
  return {greeting: "Modificando un candidato"}
 })
// Read 
Route.get('/candidate/:id', ()=>{
  return { greeting: 'Soy el candidato {id}'}
})
// Update 
Route.put('/candidate/:id',()=>{
  return {greeting: "Modificando un candidato"}
 })
// Delete 
Route.delete('/candidate/:id',()=>{
  return {greeting: "Borrando un candidato"}
 })
/*lista de candidatos*/
Route.get('/candidates', ()=>{
  return { greeting: 'Hola Listado de candidate'}
})



