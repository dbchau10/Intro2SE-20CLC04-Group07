const accountRouter = require('./accounts');
const borrowrequestRouter = require('./borrowrequests');
const itemRouter = require('./items');
const emailRouter=require('./email')
const logRouter = require('./logs');
const notificationRouter = require('./notifications');
const ratingRouter = require('./ratings');
const reportRouter = require('./reports');
const returnRouter = require('./returns');

function route(app) {
    
    app.use('/accounts', accountRouter);
    app.use('/borrowrequests', borrowrequestRouter);
    app.use('/items', itemRouter);
    app.use('/sendemail',emailRouter)
    app.use('/logs', logRouter);
    app.use('/notifications', notificationRouter);
    app.use('/ratings', ratingRouter);
    app.use('/reports', reportRouter);
    app.use('/returns', returnRouter);

}

module.exports = route