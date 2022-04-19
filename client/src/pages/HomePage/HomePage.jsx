import './HomePage.css'
import { AppHeader, LeftBar, RightBar } from '../../components'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { updateCall } from '../../apiCalls'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import noavatar from '../../assets/no_avatar.jpeg'
import app from '../../firbase'

const HomePage = () => {
    const username = useRef()
    const password = useRef()
    const [file, setFile] = useState(null)
    const { user, error, isFetching, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)

        const uploadTask = uploadBytesResumable(storageRef, file)

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused')
                        break
                    case 'running':
                        console.log('Upload is running')
                        break
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    updateCall(
                        user._id,
                        {
                            username: username.current.value,
                            password: password.current.value,
                            img: downloadURL,
                        },
                        dispatch
                    )
                })
            }
        )
    }

    return (
        <>
            <AppHeader />
            <div className="main">
                <LeftBar />
                <section className="sectionCenter">
                    <header className="sectionCenter-header">
                        <h1 className="homepage-title">Update Your Account</h1>
                        <p className="homepage-info">
                            Deleting cannot be undone{' '}
                            <span>{user.username}</span>! You should confirm
                            your password to delete your account.
                        </p>
                        <span className="delete">Delete Account</span>
                    </header>
                    <main className="sectionCenter-body">
                        <form
                            onSubmit={handleSubmit}
                            className="sectionCenter-body__form"
                        >
                            <h1 className="sectionCenter-body__form_header">
                                Profile Picture
                            </h1>
                            <div className="sectionCenter-body__form_changeImage">
                                <img
                                    className="sectionCenter-body__form_changeImage-image"
                                    src={user.img ? user.img : noavatar}
                                    alt="profile"
                                />

                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="sectionCenter-body__form_changeImage-image-input"
                                    type="file"
                                    name=""
                                    id=""
                                />
                            </div>
                            <div className="sectionCenter-body__form_input">
                                <label htmlFor="username">Username</label>
                                <input
                                    ref={username}
                                    type="text"
                                    autoComplete="off"
                                    name="username"
                                    id="username"
                                    placeholder={user.username}
                                />
                            </div>
                            <div className="sectionCenter-body__form_input">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    id="email"
                                    placeholder={user.email}
                                />
                            </div>
                            <div className="sectionCenter-body__form_input">
                                <label htmlFor="password">Password</label>
                                <input
                                    ref={password}
                                    type="password"
                                    autoComplete="off"
                                    id="password"
                                />
                            </div>
                            <button className="update">Update</button>
                        </form>
                    </main>
                </section>
                <RightBar />
            </div>
        </>
    )
}

export default HomePage
