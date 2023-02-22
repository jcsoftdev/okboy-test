import { useEffect, useState } from 'react'
import Coin from '../Coin'
import Select from '../Select'
import styles from './List.module.scss'

const selectItems = [
  { value: 'all', label: 'All' },
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' }
]

type keyItem = 'all' | 'name' | 'price'
const List = ({ coins }: List) => {
  // const [selected, setSelected] = useState<keyof SelectItem>('all')

  const [items, setItems] = useState<Coin[]>(coins)

  const [selected, setSelected] = useState<keyItem>('all')

  const handleSelect = (value: keyItem) => {
    console.log(value)
    setSelected(value)
  }

  useEffect(() => {
    if (selected === 'all') {
      setItems(coins)
    } else {
      const sorted = [...coins].sort((a, b) => {
        // order

        if (selected === 'name') {
          console.log('name')
          const nameA = a.name.toLocaleLowerCase()
          const nameB = b.name.toLocaleLowerCase()

          let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0
          console.log(result)
          return result

          // return a.name
          //   .toLocaleLowerCase()
          //   .localeCompare(b.name.toLocaleLowerCase())
        }
        if (selected === 'price') {
          console.log('price')
          return a.price - b.price
        }
        return 0
      })
      setItems(sorted)
    }
  }, [selected, coins])

  return (
    <div className={styles.List}>
      <Select options={selectItems} onChange={handleSelect} />
      <div className={styles.List__Header}>
        <h1>Assets</h1>
      </div>
      <div className={styles.List__Content}>
        {items.map((coin: Coin) => (
          <Coin {...coin} key={coin.id} className={styles.List__Item} />
        ))}
      </div>
    </div>
  )
}

export default List
