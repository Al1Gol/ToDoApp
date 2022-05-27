import React from 'react'


const TodoItem = ({todo, user, project, deleteToDo}) => {
    return (
        <tr>
            <td>{project.find(a => a.id == todo.project).name}</td>
            <td>{todo.text_todo}</td>
            <td>{user.find(a => a.id == todo.creator).username}</td>
            <td><button onClick={() => deleteToDo(todo.id)}>Delete</button></td>
        </tr>
    )
}

const TodoList = ({todoes, user, project, deleteToDo}) => {
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
        {todoes.map((todo) => <TodoItem todo={todo} user={user} project={project} deleteToDo={deleteToDo} />)}
        </table>
    )
}

export default TodoList
