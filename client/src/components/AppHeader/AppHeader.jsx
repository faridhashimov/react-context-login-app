import { FaChevronDown } from 'react-icons/fa'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import noavatar from '../../assets/no_avatar.jpeg'

import './AppHeader.css'

const AppHeader = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="appHeader-container">
            <div className="wrapper">
                <h1 className="logo">Freddie App</h1>
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <input
                    type="text"
                    className="search"
                    placeholder="Search for something..."
                />
                <div className="profile">
                    <img
                        src={user.img ? user.img : noavatar}
                        alt="img"
                        className="profile-img"
                    />
                    <h1 className="username">{user.username}</h1>
                    <FaChevronDown style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default AppHeader
