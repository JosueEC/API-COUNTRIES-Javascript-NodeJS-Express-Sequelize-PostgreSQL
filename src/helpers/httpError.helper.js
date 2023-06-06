const httpError = (res, error, errorCode) => {
  res.status(errorCode).send({
    code: Number(errorCode),
    status: 'INTERNAL_SERVER_ERROR',
    error: error.message
  })
}

module.exports = { httpError }
