import React from 'react'

const TodoItem = ({todo, user, project, deleteToDo}) => {
    return (
        <tbody>
            <tr>
                <td className={todo.is_active ? "not_complete" : "complete" }>{project.find(obj => obj.id === todo.project).name}</td>
                <td className={todo.is_active ? "not_complete" : "complete" }>{todo.text_todo}</td>
                <td className={todo.is_active ? "not_complete" : "complete" }>{user.find(obj => obj.id === todo.creator).username}</td>
                <td className={todo.is_active ? "not_complete" : "complete" }><button onClick={() => deleteToDo(todo.id)}>Complete</button></td>
            </tr>
        </tbody>
    )
}

const TodoList = ({todoes, users, project, filter_word, deleteToDo, handleChange, handleFilterSubmit}) => {
    return (
        <div>
            <table>
                <thead>
                    <th>
                        Project
                    </th>
                    <th>
                        Text Todo
                    </th>
                    <th>
                        Creator
                    </th>
                </thead>
                {todoes.map((todo) => <TodoItem todo={todo} user={users} project={project} deleteToDo={deleteToDo}/>)} 
            </table>
        </div>
    )
}

export default TodoList
