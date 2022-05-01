import React from 'react'


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.project}</td>
            <td>{todo.text_todo}</td>
            <td>{todo.creator}</td>
        </tr>
    )
}

const TodoList = ({todoes}) => {
    return (
        <table>
        <th>
            Project
        </th>
        <th>
            Text Todo
        </th>
        <th>
            Creator
        </th>
        {todoes.map((todo) => <TodoItem todo={todo} />)}
        </table>
    )
}

export default TodoList
