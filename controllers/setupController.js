import Todos from '../models/todoModel.js';

export default function(app) {
    //add an endpoint and seed the db with mock data
    app.get('/api/setupTodos', function(req, res) {

        // we can generate faka data using the online JSON generator https://www.json-generator.com/
        // seed database
        var mockTodos = [{
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        // this [callback] will be sent to the [create] function to be executed 
        var callback = function(err, result) {
            if (err) throw err;
            res.send(result)
        };

        Todos.create(mockTodos, callback);

    });
}