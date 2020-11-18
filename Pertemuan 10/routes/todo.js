// const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', async(request, response) => {
    response.render('pages/todo', {tasks: request.session.tasks});
});

router.post('/add', async(request, response) => {
    //if there's no tasks in the session, create one
    if(!request.session.tasks) {
        request.session.tasks = [];
    }

    //add new task
    const newTask = request.body.taskName;
    request.session.tasks.push(newTask);

    response.redirect('/todo');
});

router.post('/done/:index', async(request, response) => {
    //get the index of the task to be deleted
    const index = request.params.index

    //only delete if there's that task
    if (request.session.tasks && index < request.session.tasks.length) {
        request.session.tasks.splice(index, 1);
    }

    response.redirect('/todo');
})

module.exports = router;