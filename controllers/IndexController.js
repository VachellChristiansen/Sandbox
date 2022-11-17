const getIndex = async (req, res, next) => {
  return res.render("pages/index")
}

module.exports = { getIndex }