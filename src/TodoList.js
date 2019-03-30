import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log('executing effect')
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        console.log('unwrapping request')
        return res.data
      })
      .then(setTodos)
  }, [])

  return (
    <div>
      some things:
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  )
}
