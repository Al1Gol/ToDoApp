import React from 'react'


const ProjectItem = ({project, users, deleteProject}) => {
    console.log(project.workers.map(authorId => users.find(a => a.id == authorId).username))
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repo}</td>
            <td>{project.workers.map(authorId => users.find(a => a.id == authorId).username).join(', ')}</td>
            <td><button onClick={() => deleteProject(project.id)}>Delete</button></td>
        </tr>
    )
}

const ProjectList = ({projects, users, deleteProject}) => {
    return (
        <table>
        <th>
            Name
        </th>
        <th>
            Repository
        </th>
        <th>
            Workers
        </th>
        {projects.map((project) => <ProjectItem project={project} users={users} deleteProject={deleteProject}/>)}
        </table>
    )
}

export default ProjectList
