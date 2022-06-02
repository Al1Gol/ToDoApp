import React from 'react'
import { useParams } from 'react-router-dom'


const ProjectItem = ({project}) => {
    return (
        <tbody>
            <tr>
                <td>{project.name}</td>
                <td>{project.repo}</td>
                <td>{project.workers}</td>
            </tr>
        </tbody>
    )
}

const UserProjectsList = ({projects}) => {
    const {id} = useParams()
    var filteredProjects = projects.filter((project) => project.workers.includes(parseInt(id)))

    return (
        <table>
            <thead>   
                <th>
                    Name
                </th>
                <th>
                    Repository
                </th>
                <th>
                    Workers
                </th>
            </thead> 
            {filteredProjects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default UserProjectsList
