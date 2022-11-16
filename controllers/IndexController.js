const getIndex = async (req, res, next) => {
  return res.render("index")
}

module.exports = { getIndex }