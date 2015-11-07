import mongoose from '../index'

let  {Schema} = mongoose
const schema = new Schema({name: {type: String, required: true}})

schema.statics.addItem = function (name, callback) {
  const University = this
  let university = new University({name})
  university.save(err => callback(err, university))
}

schema.statics.getItem = function (id, callback) {
  if (id) this.findById(id, (err, university) => callback(university))
  else this
    .find({})
    .sort({'name': 1})
    .exec((err, universities) => callback(universities))
}

schema.statics.updateItem = function (id, name, callback) {
  this.findById(id, (err, university) => {
    if (err) return callback(err)
    university.name = name
    university.save(err => callback(err, university))
  })
}

schema.statics.getCount = function (callback) {
  this.count({}, (err, count) => callback(count))
}

schema.statics.removeItem = function (id, callback) {
  if (id) this.findByIdAndRemove(id, callback)
  else this.remove({}, callback)
}

schema.statics.autocomplete = function (name, callback) {
  this
    .find({name: new RegExp(`.*${name}.*`, 'i')})
    .sort({'date': -1})
    .limit(20)
    .exec((err, universities) => callback(universities))
}

export default mongoose.model('University', schema)