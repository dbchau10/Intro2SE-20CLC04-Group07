const accountRouter = require('./accounts');
const borrowrequestRouter = require('./borrowrequests');
const itemRouter = require('./items');
const emailRouter=require('./email')
// const logRouter = require('./logs');
// const notificationRouter = require('./notifications');
// const ratingRouter = require('./ratings');
// const reportRouter = require('./reports');
// const returnRouter = require('./returns');

function route(app) {
    
    app.use('/accounts', accountRouter);
    app.use('/borrowrequests', borrowrequestRouter);
    app.use('/items', itemRouter);
    app.use('/sendemail',emailRouter)
    // app.use('/logs', logRouter);
    // app.use('/notifications', notificationRouter);
    // app.use('/ratings', ratingRouter);
    // app.use('/reports', reportRouter);
    // app.use('/returns', returnRouter);

    // // GET
    // app.get('/', (req, res) => {
    //     res.send('Hello World!!!');
    // });

    // // functions
    // function validateStudent(student) {
    //     const schema = Joi.object({
    //         name: Joi.string().min(3).required()
    //     });
    //     return schema.validate(student);
    // }

    // // get advanced
    // // format: /path/:param?query=value
    // app.get('/test/:year/:month/:day', (req, res) => {
    //     res.send(req.params);
    //     // res.send(req.query);
    // });

    // app.get('/student/:id', (req, res) => {
    //     const s = students.find(s => s.id === parseInt(req.params.id));
    //     if (!s) return res.status(404).send("The student's id is not found!");
    //     res.send(s);
    // });

    // // POST
    // app.post('/students', (req, res) => {
    //     const { error } = validateStudent(req.body);
    //     if (error) return res.status(400).send(error.details[0].message);
    //     const student = {
    //         id: students.length + 1,
    //         name: req.body.name
    //     };
    //     students.push(student);
    //     res.send(student);
    // });

    // // PUT
    // app.put('/student/:id', (req, res) => {
    //     // Find
    //     const s = students.find(s => s.id === parseInt(req.params.id));
    //     if (!s) return res.status(404).send("The student's id is not found!");
    //     // Validate
    //     const { error } = validateStudent(req.body);
    //     if (error) return res.status(400).send(error.details[0].message);
    //     s.name = req.body.name;
    //     res.send(s);
    // })

    // // DELETE
    // app.delete('/student/:id', (req, res) => {
    //     const s = students.find(s => s.id === parseInt(req.params.id));
    //     if (!s) return res.status(404).send("The student's id is not found!");
    //     const index = students.indexOf(s);
    //     students.splice(index, 1);
    //     res.send(s);
    // })
}

module.exports = route