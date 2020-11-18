const express = require('express');
const router = express.Router();

router.get('/', async(request, response) => {
    //check user session
    if (!request.session.user) {
        response.redirect('/auth/login');
    } else {
        response.render('pages/index');
    }
});

module.exports = router;