import { HeartFilled, Heart } from '../Icons'
import styles from './Coin.module.scss'
const Coin = ({
  icon,
  name,
  price,
  className,
  isFavorite,
  onAddFavorite,
  id
}: Coin) => {
  return (
    <div className={`${styles.Coin} ${className}`}>
      <img src={icon} alt={name} className={styles.Coin__Image} />
      <p>{name}</p>
      <p className={styles.Coin__Price}>
        <span>USD</span>
        <span> {price.toFixed(3)}</span>
      </p>
      <span
        className={styles.Coin__Favorite}
        onClick={() => onAddFavorite?.(id)}
      >
        {isFavorite ? <HeartFilled /> : <Heart />}
      </span>
    </div>
  )
}

export default Coin
