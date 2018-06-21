import * as express from 'express';
import { ObjectId } from 'mongodb';
import { User, UserModel } from './models/user';

export const router = express.Router();

router.route('/users').post((req, res) => {
    const user = new User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.age = req.body.age;
    user.email = req.body.email;

    user.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

router.route('/users').get((_req, res) => {
    User.find((err, users: Array<UserModel>) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

router.route('/users/:id').get((req, res) => {
    User.findById(req.params.id, (err, user: UserModel) => {
        if (err) {
            res.send(err);
        }

        if (user === null) {
            res.statusCode = 404;
            res.json({ error: "User not found" });
        }
        else {
            res.json(user);
        }
    });
});

router.route('/users/:id').patch((req, res) => {
    User.findById(req.params.id, (err, user: UserModel) => {
        if (err) {
            res.send(err);
        }

        if (req.body.first_name) {
            user.first_name = req.body.first_name;    
        }
        
        if (req.body.last_name) {
            user.last_name = req.body.last_name;
        }
        
        if (req.body.age) {
            user.age = req.body.age;
        }
        
        if (req.body.email) {
            user.email = req.body.email;
        }
        
        user.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    });
});

router.route('/users/:id').delete((req, res) => {
    User.remove({
        _id: <ObjectId> req.params.id
    }, (err) => {
        if (err) {
            res.send(err);
        }
        res.statusCode = 201
        res.json();
    });
});
