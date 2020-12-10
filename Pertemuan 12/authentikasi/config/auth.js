module.exports = {
    ensureAuthenticated: function(req, res, next){
        if (req.isAuthenticated()){
            return next();
        }
        req.flash("error_msg", "Harap login untuk melihat halaman ini");
        res.redirect("/users/login");
    },
};