// TODO: Create the service for this handler
// TODO: Add the successHelper and errorHelper
const getCountries = (req, res) => {
  try {
    res.status(200).send({
      code: 200,
      status: 'FOUND',
      data: 'handler GET /countries'
    })
  } catch (error) {
    res.status(400).send({
      code: 400,
      status: 'NOT FOUND',
      error: error.message
    })
  }
}

module.exports = {
  getCountries
}
