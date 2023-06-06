const HTTP_FOUND = Object.freeze({
  CODE: 302,
  STATUS: 'FOUND'
})

const HTTP_NOT_FOUND = Object.freeze({
  CODE: 402,
  STATUS: 'NOT FOUND'
})

module.exports = {
  HTTP_FOUND,
  HTTP_NOT_FOUND
}
