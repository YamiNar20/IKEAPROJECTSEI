import styles from './MenuListItem.module.scss'

export default function MenuListItem({ menuItem, handleAddToOrder }) {
    return (
        <div classNAme={ styles.MenuListItem }>
            <img className={styles.imgUrl + ' ' + 'flex-ctr-ctr'} src={`${menuItem.imgUrl}`}></img>
            <div className={styles.name}>{menuItem.name}</div>
            <div className={styles.buy}>
                <span>${menuItem.price.toFixed(2)}</span>
                <button className='add-btn' onClick={() => handleAddToOrder(menuItem._id)}>
                    ADD
                </button>
                <checkbox>Like Box</checkbox>
            </div>
        </div>
    )
}