import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({header, isAuth, logOut, checkHidden}) => {
    return (
        <header>
            <li><Link onClick={() => checkHidden} to='/'>Projects</Link></li>
            <li><Link onClick={() => checkHidden} to='/users/'>Users</Link></li>
            <li><Link onClick={() => checkHidden} to='/todo/'>Todo</Link></li>
            <li><Link onClick={() => checkHidden} to='/todo/create/'>New todo</Link></li>
            <li><Link onClick={() => checkHidden} to='/projects/create/'>New project</Link></li>
            <li>
                { isAuth ? <button onClick={logOut}>Logout</button> : <Link to='/login'>Login</Link> }
            </li>
        </header>
    )
}

export default Menu