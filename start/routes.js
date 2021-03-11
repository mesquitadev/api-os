'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const ENV = use('Env')
Route.get('/', ({ response }) => response.redirect('/api/v1'))

Route.group(() => {
  Route.get('/', () => {
    return { success: `Server is Running on ${ENV.get('APP_URL')}` }
  })
  Route.resource('equipamentos', 'EquipmentController')
}).prefix('api/v1')
