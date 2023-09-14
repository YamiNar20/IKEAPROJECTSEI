import FavoriteListItem from '../FavoriteListItem/FavoriteListItem'
import styles from './FavoriteList.module.scss'
export default function FavoriteList({ favorites, handleAddToOrder, handleFavoriteItem, user, setUser }) {
  console.log(user)
    const favoriteItems = favorites.map(f =>
      <FavoriteListItem
      key={f._id}
      handleAddToOrder={handleAddToOrder}
      favorite={f}
      />
    );
    // Link favorites to logged in user here?
    return (
      <main className={styles.FavoriteList}>
        {/* {user.isLoggedIn ?
          {user ?
            favoriteItems
            :
            <span className={styles.noFavorites}>You Have No Favorites, What's That About?</span>
          }
          :
          <span className={styles.noUser}>Log In To See Your Favorites</span>
        } */}
      </main>
    );
    }