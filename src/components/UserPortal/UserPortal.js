import styles from './UserPortal.module.scss'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { logOut } from '../../utilities/users-services'
export default function UserPortal({ user, setUser, cart, setCart, createGuestUser }) {

    function handleLogOut() {
        logOut()
        setCart(null)
        createGuestUser()
    }
    return (
<<<<<<< HEAD
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
=======
        <div className={styles.portalcontainer}>
            {user.isLoggedIn || !user.username === 'guestuser' ? (
                <div className={styles.loggedin}>
                    <Link  to='/account' className='userlink'>Hey, {user.username}</Link>
                    <Link to='/favorites' className='favbtn'>likes</Link>
                    <Link to='/cart' className={styles.cartbtn}>{cart ? `cart(${cart.totalQty})` : 'cart(0)'}</Link>
                    <button className='logout-btn' element={<Navigate to='/ikea' />} onClick={handleLogOut}>Log Out</button>
>>>>>>> 7ae62d6e49cd143942a7446c2140baacc7872545
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