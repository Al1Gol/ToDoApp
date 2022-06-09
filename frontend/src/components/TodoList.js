import React from 'react'

const TodoItem = ({user, project, todo, deleteToDo}) => {
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

const TodoList = ({users, project, todoes, filter_word, deleteToDo, handleChange}) => {
    return (
        <div>
            <input type="text" name="filter_word" placeholder="Filtering by project name" value={filter_word} onChange={(event) => handleChange(event)}/>
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
                {todoes.map((todo) => <TodoItem user={users} project={project} todo={todo} deleteToDo={deleteToDo}/>)} 
            </table>
        </div>
    )
}

export default TodoList
