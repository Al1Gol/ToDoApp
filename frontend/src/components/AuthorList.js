const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>{author.username}</td>
            <td>{author.first_name}</td>
            <td>{author.last_name}</td>
            <td>{author.email}</td>
        </tr>
    )
}

const AuthorList = ({authors}) => {
    return (
        <table>
        <th>
            username
        </th>
        <th>
            first_name
        </th>
        <th>
            last_name
        </th>
        <th>
            email
        </th>
        {authors.map((author) => <AuthorItem author={author} />)}
        </table>
    )
}

export default AuthorList