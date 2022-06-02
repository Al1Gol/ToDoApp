import React from 'react'
import { useParams } from 'react-router-dom'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repo}</td>
            <td>{project.workers}</td>
        </tr>
    )
}

const UserProjectsList = ({projects}) => {
    const {id} = useParams()
    var filteredProjects = projects.filter((project) => project.workers.includes(parseInt(id)))

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
        {filteredProjects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default UserProjectsList
