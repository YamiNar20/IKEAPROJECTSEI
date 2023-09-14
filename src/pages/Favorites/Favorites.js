import styles from './Favorites.module.scss'
import { useState } from 'react'
import FavoriteList from '../../components/FavoriteList/FavoriteList'
import removeFromFavorites from '../../utilities/items-api'

export default function Favorites({ user, setUser, handleAddToOrder, removeFromFavorites}) {
    function handleRemoveFromFavorites() {
        removeFromFavorites()
    }
    return (
        <FavoriteList user={user} setUser={setUser} handleAddToOrder={handleAddToOrder} handleRemoveFromFavorites={handleRemoveFromFavorites}/>
    )
}

