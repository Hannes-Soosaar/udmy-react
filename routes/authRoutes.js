const passport = require(`passport`);

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google'), (req, res) => {
            res.redirect('/surveys');
        });

    app.get(`/api/logout`, (req, res) => {
        console.log("LOG OUT!")
        req.logout();
        res.redirect("/")
    });
    app.get(`/api/current_user`, (req, res) => {
        console.log(req.user);
        res.send(req.user);
    });

    app.get("/api/test", (req, res) => {
        res.send("some random string");
        console.log("we are Getting some info from TEST")
    });
}