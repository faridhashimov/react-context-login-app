import { useContext } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { AuthContext } from '../../context/AuthContext'
import './RightBar.css'

const RightBar = () => {
    const { user } = useContext(AuthContext)

    return (
        <section className="rightBar">
            <div className="rightBar-main">
                <div className="rightBar-box">
                    <h1 className="rightBar-box__title">Recomended for {user.username}</h1>
                    <div className="rightBar-box__image">
                        <img
                            src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                    </div>
                </div>
                <div className="rightBar-box">
                    <h1 className="rightBar-box__title">
                        Popular on Freddie App
                    </h1>
                    <div className="rightBar-box__image">
                        <img
                            src="https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt="popular"
                        />
                    </div>
                </div>
                <div className="rightBar-box">
                    <h1 className="rightBar-box__title">Editor's choise</h1>
                    <div className="rightBar-box__image">
                        <img
                            src="https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                    </div>
                </div>
                <button className="rightBar-btn">
                  See More <FaChevronDown style={{marginLeft: '10px'}}/>
                </button>
            </div>
        </section>
    )
}

export default RightBar
