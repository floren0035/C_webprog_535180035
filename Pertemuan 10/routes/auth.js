const { request, response } = require('express');
const express = require('express');

const router = express.Router();

router.get('/login', async(request, response) => {
    //if the user has logged-in, redirect to index
    if (request.session.user) {
        response.redirect('/');
    } else {
        response.render('pages/login', {layout: false});
    }
});

router.get('/logout', async(request, response) => {
    //destroy all session
    request.session.destroy();

    //redirect to login
    response.redirect('/auth/login');
})

module.exports = router;

router.post('/login', async(request, response) => {
    //get user input
    const username = request.body.username;
    const password = request.body.password;

    if (username === "admin" && password === "admin") {
        //TODO: implement sessions to check user is logged-in
        //implement sessions to check user is logged-in
        request.session.user = "admin";

        //redirect to member area
        response.redirect('/');
    } else {
        //TODO: render the login page with error information
        //render the login page with error information
        response.render('pages/login', {layout: false, error: 'Wrong username or password'});
    }
});