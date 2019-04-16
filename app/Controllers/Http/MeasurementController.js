'use strict'

const Measurement = use('App/Models/Measurement')

class MeasurementController {

    async read ({ params }) {
        if (params.id) {
            return await Measurement.find(params.id)
        }
        return await Measurement.all()
    }

    async create ({ request }) {
        const {temperature, pressure, humidity, sensor_id} = request.only(['temperature', 'pressure', 'humidity', 'sensor_id'])

        const measurement = new Measurement()
        measurement.temperature = temperature
        measurement.pressure = pressure
        measurement.humidity = humidity
        measurement.sensor_id = sensor_id
    
        await measurement.save()
    
        return measurement
    }
}

module.exports = MeasurementController
