const bookObj=require("../models/bookModel")
exports.logRequests=(req, res , next) => {
    console.log(`request made to: ${req.url}`);
    next();
};

exports.getAllBooks=(req, res , next) => {
    bookObj.find({}, (error, books) => {
        if (error) next(error);
        req.data=books;
        next();
    });
};

exports.respondWithBookInfo=(req, res, next) => {
    let bookNum = req.params.bookNum;
    bookObj.findOne({ numId: bookNum }, (error, book) => {
        if (error) next(error);
        req.data=book;
        next();
    });
}
