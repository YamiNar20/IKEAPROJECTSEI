import styles from './MenuList.module.scss'
import MenuListItem from '../MenuListItem'

export default function MenuList({ menuItems, handleAddToOrder }) {
    const items = menuItems.map(item =>
        <MenuListItem
        key={item._id}
        handleAddToOrder={handleAddToOrder}    
        menuItems={item}
        />
    )
    return (
        <main className={styles.MenuList}>
            {items}
        </main>
    )
}