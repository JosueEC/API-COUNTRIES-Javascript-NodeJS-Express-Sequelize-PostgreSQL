const { HTTP_BAD_REQUEST } = require('../constants/httpCodes.constants')
const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(HTTP_BAD_REQUEST.CODE).send({
      code: HTTP_BAD_REQUEST.CODE,
      status: HTTP_BAD_REQUEST.STATUS,
      error: error.array()
    })
  }
}

module.exports = { validateResult }
