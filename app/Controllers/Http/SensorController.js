'use strict'

const Sensor = use('App/Models/Sensor')

class SensorController {

    async read ({ params }) {
        if (params.id) {
        return await Sensor.find(params.id)
        }
        return await Sensor.all()
    }

    async create ({ request }) {
        const {name, description, location, hardware_address} = request.only(['name', 'description', 'location', 'hardware_address'])

        const sensor = new Sensor()
        sensor.name = name
        sensor.description = description
        sensor.location = location
        sensor.hardware_address = hardware_address
    
        await sensor.save()
    
        return sensor
    }
}

module.exports = SensorController
