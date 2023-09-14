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
        <div className={styles.portalcontainer}>
            {user && user.isLoggedIn ? (
                <div className={styles.loggedin}>
                    <Link  to='/account' className='userlink'>Hey, {user.username}</Link>
                    <Link to='/favorites' className='favbtn'>likes</Link>
                    <Link to='/cart' className={styles.cartbtn}>{cart ? `cart(${cart.totalQty})` : 'cart(0)'}</Link>
                    <button className='logout-btn' element={<Navigate to='/ikea' />} onClick={handleLogOut}>Log Out</button>
                </div>
            ) : (
                <div className={styles.notloggedin}>
                <Link to='/guestSignUp' className='loginbtn'>Login/Signup</Link>
                <Link to='/cart' className={styles.cartbtn}>{cart ? `cart(${cart.totalQty})` : 'cart(0)'}</Link>
                </div>
            )}
        </div>
    )
}









