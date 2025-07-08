const { constants } = require("../constants");

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    console.log("err==>", error);
    switch (statusCode) {
        case constants.VALLIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "UnAuthorized",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        default:
            break;
    }
}

module.exports = errorHandler