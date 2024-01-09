import mongoose from 'mongoose';

//creating subTodos schema
const subTodoSchema = new mongoose.Schema(
    {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      //ref meaning the creating a user
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
