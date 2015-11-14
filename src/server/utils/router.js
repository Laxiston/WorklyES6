import express from 'express'
import Handler from './handler'

export default (name, handler) => {
  let app = express()

  let api = express.Router()
    .get('/', handler.getAll)
    .get('/:id', handler.getItem)
    .post('/', handler.addItem)
    .put('/:id', handler.updateItem)
    .delete('/', handler.removeAll)
    .delete('/:id', handler.removeItem)

  app
    .get(`/${name}-count`, handler.getCount)
    .get(`/${name}-search`, handler.searchItem)
    .get(`/${name}-autocomplete`, handler.autocomplete)
    .get(`/${name}-random`, handler.getRandom)
    .use(`/${name}`, api)

  return app
}
