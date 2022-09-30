let ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        next();
    }
    else{
        res.redirect("/silpae");
    }
};

module.exports = ensureAuthenticated;
