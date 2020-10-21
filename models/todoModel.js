// we need this file to set-up our schema
import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})

//create new model using that schema

var Todos = mongoose.model('Todos', todoSchema);

// reusable model: this model will not be only used in this file
export default Todos;