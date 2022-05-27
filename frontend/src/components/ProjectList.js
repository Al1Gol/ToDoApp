import React from 'react'


const ProjectItem = ({project, users}) => {
    console.log(project.workers.map(authorId => users.find(a => a.id == authorId).username))
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repo}</td>
            <td>{project.workers.map(authorId => users.find(a => a.id == authorId).username).join(', ')}</td>
        </tr>
    )
}

const ProjectList = ({projects, users}) => {
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
        {projects.map((project) => <ProjectItem project={project} users={users} />)}
        </table>
    )
}

export default ProjectList
