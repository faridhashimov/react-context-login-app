import './App.css'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

function App() {
    const { user } = useContext(AuthContext)

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
                <Route
                    path="login"
                    element={
                        user ? (
                            <Navigate to="/" replace={true} />
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="register"
                    element={
                        user ? (
                            <Navigate to="/" replace={true} />
                        ) : (
                            <RegisterPage />
                        )
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
