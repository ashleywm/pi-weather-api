'use strict'

const Station = use('App/Models/Station')

class StationController {

    async read ({ params }) {
        if (params.id) {
            return await Station.find(params.id)
        }
        return await Station.all()
    }

    async create ({ request }) {
        const {name, description, location} = request.only(['name', 'description', 'location'])

        const station = new Station()
        station.name = name
        station.description = description
        station.location = location

        await station.save()
    
        return station
    }
}

module.exports = StationController
