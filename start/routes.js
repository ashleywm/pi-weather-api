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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/stations', 'StationController.read')
  Route.get('/stations/:id', 'StationController.read')
  Route.post('/stations', 'StationController.create').validator('PostStation')
  Route.get('/sensors', 'SensorController.read')
  Route.get('/sensors/:id', 'SensorController.read')
  Route.post('/sensors', 'SensorController.create').validator('PostSensors')
  Route.get('/readings', 'ReadingController.read')
  Route.get('/readings/:id', 'ReadingController.read')
  Route.post('/readings', 'ReadingController.create').validator('PostReading')
}).prefix('/v1')
