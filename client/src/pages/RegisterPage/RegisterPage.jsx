import axios from 'axios'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterPage.css'

const RegisterPage = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                'http://localhost:5000/api/auth/register',
                JSON.stringify({
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )
            console.log(res)
            navigate('/login', { replace: true })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="registerMain">
            <form onSubmit={handleSubmit} className="registerForm">
                <div className="registerForm-header">
                    <h1 className="registerForm-header__logo">Freddie App</h1>
                    <h1 className="registerForm-header__title">Register</h1>
                </div>
                <div className="registerForm-inputContainer">
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
                <div className="registerForm-inputContainer">
                    <label htmlFor="email">Email</label>
                    <input
                        ref={email}
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email..."
                    />
                </div>
                <div className="registerForm-inputContainer">
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
                    Already have an Account?{' '}
                    <span className="signUp">
                        <Link style={{ color: '#fff' }} to="/login">
                            Log In
                        </Link>
                    </span>
                </p>
                <button className="sendregister">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage
