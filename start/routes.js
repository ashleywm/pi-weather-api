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
  Route.get('/stations/:station_id', 'StationController.read')
  Route.post('/stations', 'StationController.create').validator('PostStation')

  Route.get('/stations/:station_id/sensors', 'SensorController.read')
  Route.get('/stations/:station_id/sensors/:sensor_id', 'SensorController.read')
  Route.post('/stations/:station_id/sensors', 'SensorController.create').validator('PostSensors')

  Route.get('/stations/:station_id/measurements', 'MeasurementController.read')
  Route.get('/stations/:station_id/sensors/:sensor_id/measurements', 'MeasurementController.read')
  Route.get('/stations/:station_id/sensors/:sensor_id/measurements/:measurement_id', 'MeasurementController.read')
  Route.post('/stations/:station_id/sensors/:sensor_id/measurements', 'MeasurementController.create').validator('PostMeasurement')
}).prefix('/v1')
