const errorHandler = (error, req, res, next) => {
    console.log('error:', error.Error)
    if (error.code == 11000 && error.keyPattern.email) {
        return res.status(400).json('user with this email exist')
    }
    if (error.code == 11000) {
        return res.status(400).json('username taken!')
    }
}

module.exports = {errorHandler}