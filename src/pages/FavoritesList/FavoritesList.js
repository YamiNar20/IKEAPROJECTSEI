import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Removed unused import
import * as ordersAPI from '../../utilities/order-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

import styles from './FavoritesList.module.scss';
export default function FavoritesList({ user, setUser }) {
  /*--- State --- */
  const [favorites, setFavorites] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchFavoritesList() {
      const favorites = await ordersAPI.getFavorites(); // Fixed function name
      setFavorites(favorites);
      setActiveOrder(orders[0] || null);
    }
    fetchFavoritesList();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectFavriotes(favorites) {
    setFavorites(favorites);
  }

  /*--- Rendered UI --- */
  return (
    <main className={styles.FavoritesList}>
      <aside className={styles.aside}>
        <Logo />
        <Link to="/favorites" className="button btn-sm">FavoritesList</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <FavoritesList // Assuming this should display the list of Favorites
        favorites={favorites}
        activeFavorites={activeFavorites}
        handleSelectFavorites={handleSelectFavorites}
      />
      <OrderDetail // Assuming this should display the details of the active favorites
        order={activeOrder}
      />
    </main>
  );
}
