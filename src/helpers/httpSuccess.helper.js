const httpSuccess = (res, data, successCode) => {
  res.status(successCode).send({
    code: Number(successCode),
    status: 'FOUND',
    data
  })
}

module.exports = { httpSuccess }
