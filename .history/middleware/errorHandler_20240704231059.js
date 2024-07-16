const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 
};

module.exports = errorHandler;