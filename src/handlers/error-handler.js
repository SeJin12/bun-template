import logger from "../loaders/winston";

export default (error, req, res, next) => {
    // ex. throw new Error("Custom Error!");
    logger.error(`${req.url} :: ${error}`);
    res.status(500).render('Error', {title: 'error title'});
}