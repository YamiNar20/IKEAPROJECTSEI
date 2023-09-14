import styles from './FavoriteListItem.module.scss';
import Favorites from '../../../models/favorites'
import { useState } from 'react';

//write export function for menu list items
export default function FavoriteListItem ({favoriteItem, handleRemoveFromFavorites, handleAddToOrder}) {
 return (
    <div className={styles.FavoriteListItem}>
        {/* img src controls the size and appearance of pictures for items */}
        <img src={favoriteItem.emojiURL} width='200' height='200' />
        <div className={styles.name}>{favoriteItem.name}</div>
        <div className={styles.buy}>
            <span>${favoriteItem.price.toFixed(2)}</span>
            <button className='btn-sm' onClick={() => handleAddToOrder(menuItem._id)}>
                ADD TO CART
            </button>
        </div>
    </div>
 );   
}