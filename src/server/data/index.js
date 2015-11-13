import async from 'async'
import Dictionary from './models/dictionary'
import Education from './models/education'
import Experience from './models/experience'

async.waterfall([
  callback => Dictionary.generate(err => callback(err)),
  callback => Education(err => callback(err)),
  callback => Experience(err => callback(err))
], err => process.exit(err ? 1 : 0))
