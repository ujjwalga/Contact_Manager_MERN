const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        
    }
    res.json({title : "Not Found", message : err.message, stackTrace : err.stack})
};

module.exports = errorHandler;