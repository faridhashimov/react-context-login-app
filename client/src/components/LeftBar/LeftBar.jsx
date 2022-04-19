import { useContext } from 'react'
import {
    FaClone,
    FaCog,
    FaHeart,
    FaHome,
    FaListUl,
    FaRegClock,
    FaRegFileImage,
    FaRegFileVideo,
    FaShoppingBasket,
    FaSignOutAlt,
    FaUserFriends,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './LeftBar.css'

const LeftBar = () => {
    let navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)

    const handleOut = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
        navigate('./login', { replace: true })
    }
    const { user } = useContext(AuthContext)
    return (
        <section className="leftBar">
            <div className="leftBar-main">
                <ul className="leftBar-nav">
                    <li className="leftBar-link">
                        <FaHome />
                        Homepage
                    </li>
                    <li className="leftBar-link">
                        <FaListUl />
                        Lists
                    </li>
                    <li className="leftBar-link">
                        <FaShoppingBasket />
                        Products
                    </li>
                    <li className="leftBar-link">
                        <FaUserFriends />
                        Groups
                    </li>
                    <li className="leftBar-link">
                        <FaClone />
                        Pages
                    </li>
                    <li className="leftBar-link">
                        <FaRegFileImage />
                        Photos
                    </li>
                    <li className="leftBar-link">
                        <FaRegFileVideo />
                        Videos
                    </li>
                    <li className="leftBar-link">
                        <FaRegClock />
                        Schedule
                    </li>
                    <li className="leftBar-link">
                        <FaHeart />
                        Wishlist
                    </li>
                    <li className="leftBar-link">
                        <FaCog />
                        Settings
                    </li>
                    <li onClick={handleOut} className="leftBar-link">
                        <FaSignOutAlt />
                        Logout ({user.username})
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default LeftBar
