export const storageService = {
  query,
  getById,
  post,
  put,
  remove,
  _save,
}

function query(entityType, delay = 1000) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return new Promise((resolve) => {
    // setTimeout(() => {
    resolve(entities)
    // }, delay)
  })
}

function getById(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  )
}
function post(entityType, newEntity) {
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}
