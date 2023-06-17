const HTTP_CREATED = Object.freeze({
  CODE: 201,
  STATUS: 'CREATED'
})

const HTTP_FOUND = Object.freeze({
  CODE: 200,
  STATUS: 'FOUND'
})

const HTTP_NOT_MODIFIED = Object.freeze({
  CODE: 304,
  STATUS: 'NOT MODIFIED'
})

const HTTP_NOT_FOUND = Object.freeze({
  CODE: 402,
  STATUS: 'NOT FOUND'
})

const HTTP_BAD_REQUEST = Object.freeze({
  CODE: 400,
  STATUS: 'BAD REQUEST'
})

module.exports = {
  HTTP_FOUND,
  HTTP_NOT_FOUND,
  HTTP_NOT_MODIFIED,
  HTTP_BAD_REQUEST,
  HTTP_CREATED
}
