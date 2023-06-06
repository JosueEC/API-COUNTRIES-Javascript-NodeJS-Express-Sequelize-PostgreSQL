const httpSuccess = (res, data, successObject) => {
  res.status(successObject.CODE).send({
    code: successObject.CODE,
    status: successObject.STATUS,
    data
  })
}

module.exports = { httpSuccess }
