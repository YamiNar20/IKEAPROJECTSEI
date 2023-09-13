import styles from './UserPortal.module.scss'
import { useState,  useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../utilities/users-services'
//import Logo from '../../components/Logo/Logo' 

export default function UserPortal({ user, setUser, cart }) {
    const [userInfo, setUserInfo] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    console.log(user)
    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const userData = await getUser(user)
    //             setUserInfo(userData)
    //         } catch (error) {
    //             setErrorMessage('Could Not Find Account Information')
    //         }
    //     }
    //     fetchUserInfo()
    // },[user])
    
    return (
        <main className={styles.LoginSignupBtn}>
            {user && user.isLoggedIn ? (
                <div>
                    <Link to="/account" className={styles.AccountLink}>
                        Hey, {user.username}
                    </Link>
                    <Link to="/favorites" className={styles.FavoritesLink}>
                        likes
                    </Link>
                    <Link to="/cart" className={styles.CartLink}>
                        {cart ? `cart(${cart.totalQty})` : 'cart(0)'}
                    </Link>
                    <button element={<Navigate to="/ikea" />} onClick={handleLogOut}>
                        Log Out
                    </button>
                </div>
            ) : (
                <div className={styles.GuestServicesBtns}>
                    <Link to="/guestSignUp" className={styles.LSBtn}>
                        Login/Signup
                    </Link>
                    <Link to="/cart" className={styles.CartBtn}>
                        {cart ? `Cart(${cart.totalQty})` : 'Cart(0)'}
                    </Link>
                </div>
            )}
        </main>
    );
}