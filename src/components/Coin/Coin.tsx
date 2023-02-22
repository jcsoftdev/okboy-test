import styles from './Coin.module.scss'
const Coin = ({ icon, name, price, className }: Coin) => {
  return (
    <div className={`${styles.Coin} ${className}`}>
      <img src={icon} alt={name} className={styles.Coin__Image} />
      <p>{name}</p>
      <p className={styles.Coin__Price}>
        <span>USD</span>
        <span> {price.toFixed(3)}</span>
      </p>
    </div>
  )
}

export default Coin
