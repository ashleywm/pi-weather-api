'use strict'

const Sensor = use('App/Models/Sensor')
const Station = use('App/Models/Station')

class SensorController {

    async read ({ params }) {
        if (params.station_id && params.sensor_id) {
            return await Station.query().where('id', params.station_id).with('sensors', (builder) => {
                builder.where('id', params.sensor_id)
            }).first()
        }

        if (params.station_id) {
            return await Station.query().with('sensors').where('id', params.station_id).first()
        }
    }

    async create ({ request, params, response }) {
        const {name, description, location, hardware_address} = request.only(['name', 'description', 'location', 'hardware_address'])

        if (!params.station_id || !Station.find(params.station_id)) {
            return response.status(404).send("Station not found")
        }

        const sensor = new Sensor()
        sensor.name = name
        sensor.description = description
        sensor.location = location
        sensor.hardware_address = hardware_address
        sensor.station_id = params.station_id
    
        await sensor.save()
    
        return sensor
    }
}

module.exports = SensorController
