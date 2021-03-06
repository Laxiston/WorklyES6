import Charlatan from 'charlatan'
import async from 'async'
import faker from 'faker'
import {Education, Experience, Skill, City, Student} from '../../models/models'
import addArray from '../utils/add_array'
import random from '../utils/random'

let data = []

for (let i = 0; i < 100; i++) {
  let name = Charlatan.Name.name()
  let email = `${name.toLowerCase().split(' ').join('.')}.${Charlatan.Internet.email()}`
  data.push({
    email, name,
    telephone: Charlatan.PhoneNumber.cellPhone(),
    about: Charlatan.Lorem.text(3, 20, '\n'),
    dob: Charlatan.Date.birthday(18, 25),
    skills: [], city: '', password: '1111',
    educations: [], experiences: [],
    avatar: faker.image.avatar(200, 200)
  })
}

export default cb => async.waterfall([
  callback => async.each(data, (item, next) => City.getRandom((err, city) => {
    item.city = city._id
    next()
  }), err => callback()),
  callback => Skill.getItem(null, (err, skills) => {
    for (let i = 0; i < data.length;i++) {
      let count = Math.floor(Math.random() * 15)
      for (let j = 0; j < count; j++)
        data[i].skills.push(random(skills)._id)
    }
    callback()
  }),
  callback => Education.getItem(null, (err, educations) => {
    let j = 0
    for (let i = 0; i < data.length; i++) {
      data[i].educations.push(educations[j]._id)
      j++
      data[i].educations.push(educations[j]._id)
      j++
    }
    callback()
  }),
  callback => Experience.getItem(null, (err, experience) => {
    let j = 0
    for (let i = 0; i < data.length; i++) {
      data[i].experiences.push(experience[j]._id)
      j++
      data[i].experiences.push(experience[j]._id)
      j++
    }
    callback()
  })
], err => addArray(Student, data, cb))
