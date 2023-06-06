const httpError = (res, error, errorObject) => {
  res.status(errorObject.CODE).send({
    code: errorObject.CODE,
    status: errorObject.STATUS,
    error: error.message
  })
}

module.exports = { httpError }
