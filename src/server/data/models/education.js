import Charlatan from 'charlatan'
import async from 'async'
import {Education, University, Speciality} from '../../models/models'
import addArray from '../utils/add_array'

let data = []

for (let i = 0; i < 200; i++) {
  data.push({
    start: Charlatan.Date.birthday(4, 7),
    end: Charlatan.Date.birthday(0, 4)
  })
}

export default cb => async.waterfall([
  callback => async.each(data, (item, next) => University.getRandom((err, university) => {
    item.university = university._id
    next()
  }), err => callback()),
  callback => async.each(data, (item, next) => Speciality.getRandom((err, speciality) => {
    item.speciality = speciality._id
    next()
  }), err => callback())
], err => addArray(Education, data, cb))
