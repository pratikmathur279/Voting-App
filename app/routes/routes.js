//var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    app.put('/snacks/:id', (req, res) => {
        const id1 = req.params.id;
        const details = {
            'id': id1
        };
        const snackUpdate = {
            $inc: {
                votes: 1
            }
        }
        db.collection('snacks').update(details, snackUpdate, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log('passed');
                res.send(snackUpdate);
                console.log(snackUpdate);
            }
        });
    });

    app.get('/snacks/:id', (req, res) => {
        const param = req.params.id;
        if (param === 'all') {
            console.log(param);
            db.collection('snacks').find().toArray((err, item) => {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    res.send(item);
                    console.log('passed in all');
                }
            });
        } else {
            const details = {
                'id': param
            };
            db.collection('snacks').findOne(details, (err, item) => {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    console.log('passed in one item');
                    res.send(item);
                }
            });
        }

    });

    app.post('/snacks', (req, res) => {
        const snacks = {
            snack: req.body.snack,
            votes: parseInt(req.body.votes),
            id: req.body.id
        }

        db.collection('snacks').insert(snacks, (err, results) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(results.ops[0]);
                console.log('success');
            }
        });
    });


};
