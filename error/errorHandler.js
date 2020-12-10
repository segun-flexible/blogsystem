const errorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode || 500).send({
        success: false,
        error: err.message || "Server Error"
    })
}

module.exports = errorHandler