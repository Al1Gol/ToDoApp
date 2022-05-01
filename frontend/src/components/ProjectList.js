import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repo}</td>
            <td>{project.workers}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
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
        {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default ProjectList
