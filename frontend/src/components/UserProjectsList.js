import React from 'react'
import { useParams } from 'react-router-dom'


const ProjectItem = ({project, users}) => {
    return (
        <tbody>
            <tr>
                <td>{project.name}</td>
                <td>{project.repo}</td>
                <td>{project.workers.map(authorId => users.find(a => a.id === authorId).username).join(', ')}</td>
            </tr>
        </tbody>
    )
}

const UserProjectsList = ({projects, users}) => {
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
            {filteredProjects.map((project) => <ProjectItem project={project} users={users} />)}
        </table>
    )
}

export default UserProjectsList
