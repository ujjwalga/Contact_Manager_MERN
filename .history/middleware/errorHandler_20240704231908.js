const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({title : "Not "message : err.message, stackTrace : err.stack})
};

module.exports = errorHandler;