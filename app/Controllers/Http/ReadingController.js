'use strict'

const Reading = use('App/Models/Reading')

class ReadingController {

    async read ({ params }) {
        if (params.id) {
        return await Reading.find(params.id)
        }
        return await Reading.all()
    }

    async create ({ request }) {
        const {temperature, pressure, humidity, sensor_id} = request.only(['temperature', 'pressure', 'humidity', 'sensor_id'])

        const reading = new Reading()
        reading.temperature = temperature
        reading.pressure = pressure
        reading.humidity = humidity
        reading.sensor_id = sensor_id
    
        await reading.save()
    
        return reading
    }
}

module.exports = ReadingController
