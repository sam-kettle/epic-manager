module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next()
        }
        req.flash('error_msg', 'You must be logged in to use EPIC Manager.')
        res.redirect('/users/login')
    }
}