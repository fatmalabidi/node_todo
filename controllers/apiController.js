import Todos from '../models/todoModel.js'
import bodyParser from 'body-parser'

export default function(app) {

    // bodyParser is a middelware that looks into the HTTP request before we handle it
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));

    // this endpoint handles get all todos by [username]
    app.get('/api/todos/:username', function(req, res) {
        Todos.find({ username: req.params.username }, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        })
    })

    // this endpoint handles get todo by [id]
    app.get('/api/todos/:id', function(req, res) {
        Todos.findById({ _id: req.params.id }, function(err, todo) {
            if (err) throw err;
            res.send(todo);
        })
    })

    // this endpoint handles [add] and [update] based on the todo [id] in the request body
    app.post('/api/todo', function(req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if (err) throw err;
                res.send("Success");
            })
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            })
            newTodo.save(function(err) {
                if (err) throw err;
                res.send("Success");
            });
        }
    });

    // this endpoint handles  delete todo by [id]
    app.delete('/api/todo/:id', function(req, res) {
        Todos.findByIdAndRemove(req.params.id, function(err) {
            if (err) throw err;
            res.send("Success")
        })
    })
}