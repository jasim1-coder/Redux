import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,deleteTodo } from '../redux/actions/CounterActions'
function TodoList() {
    const task = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [input,setInput] = useState('');

    const handleAddTodo = () => {
        if(input){
            dispatch(addTodo({name:input}))
            setInput('')
        }
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo({id}))
    }

  return (
    <div>
        <h1>Todo List </h1>
       <div>
                <input type="text" value={input}  onChange={(e) => setInput(e.target.value)} placeholder='Add new task' /> 
                <button onClick={handleAddTodo}>ADD</button>
                </div>
                <div>
                    <ul>
                        {task.map((todo) => (
                            <li key={todo.id}>{todo.name}<button onClick={() => handleDelete(todo.id)}>Delete</button></li>
                        ))}
                    </ul>
                </div>
    </div>
  )
}

export default TodoList