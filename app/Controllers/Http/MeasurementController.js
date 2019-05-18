'use strict'

const Measurement = use('App/Models/Measurement')
const Station = use('App/Models/Station')
const Sensor = use('App/Models/Sensor')

const Database = use('Database')

class MeasurementController {

    async read ({ params, response, request }) {
        if (params.id) {
            return await Measurement.find(params.id)
        }

        if (params.station_id && !params.sensor_id) {

            if (!Station.find(params.station_id)) {
                return response.status(404).send("Station not found")
            }

            const station = await Station.query().with('sensors').where('id', params.station_id).first()

            let sensors = []
            
            Object.entries(station.sensors).forEach(async ([sensor, value]) => {
                sensor.latest_measurement = {}
                sensor.latest_measurement = await Measurement.query().where('id', sensor.id).first()
                sensors.push(sensors)
            })

            station.sensors = sensors

            return station

            console.log(station.toJSON())
        }
    }

    async create ({ request, params }) {
        const {temperature, pressure, humidity} = request.only(['temperature', 'pressure', 'humidity'])

        const exists = await Station.query().where('id', params.station_id).with('sensors', (builder) => {
            builder.where('id', params.sensor_id)
        }).first()

        if (!params.sensor_id ||  !params.station_id|| !exists) {
            return response.status(404).send("Sensor not found")
        }

        const measurement = new Measurement()
        measurement.temperature = temperature
        measurement.pressure = pressure
        measurement.humidity = humidity
        measurement.sensor_id = params.sensor_id
    
        await measurement.save()
    
        return measurement
    }
}

module.exports = MeasurementController
