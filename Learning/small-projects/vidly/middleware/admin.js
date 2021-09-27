

module.exports = function(req, res, next){
    // 401 - Unauthorized
    // 403 - Forbidden --> this should be given when JWT iscorrect but not have access to the resource

    if(!req.user.isAdmin) return res.status(403).send("Access Denied.");

    next();
}