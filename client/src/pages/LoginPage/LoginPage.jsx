import { useContext, useRef, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './LoginPage.css'
import { loginCall } from '../../apiCalls'
import Spinner from '../../components/Spinner/Spinner'

const LoginPage = () => {
    const username = useRef()
    const password = useRef()
    const { user, error, isFetching, dispatch } = useContext(AuthContext)
    let navigate = useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Clicked')
        loginCall(
            {
                username: username.current.value,
                password: password.current.value,
            },
            dispatch
        )
        navigate('/', { replace: true })
    }
    console.log(user)

    return (
        <div className="loginMain">
            <form onSubmit={handleSubmit} className="loginForm">
                <div className="loginForm-header">
                    <h1 className="loginForm-header__logo">Freddie App</h1>
                    <h1 className="loginForm-header__title">Login</h1>
                </div>
                <div className="loginForm-inputContainer">
                    <label htmlFor="username">Username</label>
                    <input
                        required
                        ref={username}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                    />
                </div>
                <div className="loginForm-inputContainer">
                    <label htmlFor="password">Password</label>
                    <input
                        ref={password}
                        required
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <p>
                    Need an Account? <span className="signUp">Sign Up</span>
                </p>
                <button className="sendLogin">{isFetching ? <Spinner/> : "Log In"}</button>
            </form>
        </div>
    )
}

export default LoginPage
