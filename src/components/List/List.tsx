import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
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
  if (!coins.length) {
    return <div className={styles.List}>Loading...</div>
  }
  const [items, setItems] = useLocalStorage<Coin[]>('coins', coins)
  const [selected, setSelected] = useLocalStorage<keyItem>('select', 'all')
  // debugger

  const handleSelect = (value: keyItem) => {
    setSelected(value)
  }

  useEffect(() => {
    if (selected && items.length) {
      if (selected === 'all') {
        const newItems = [...coins].map(coin => {
          const item = items.find(item => item.id === coin.id)
          return item || coin
        })
        setItems(newItems)
      } else {
        const sorted = [...items].sort((a, b) => {
          if (selected === 'name') {
            const nameA = a.name.toLocaleLowerCase()
            const nameB = b.name.toLocaleLowerCase()
            let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0
            return result
          }
          if (selected === 'price') {
            return a.price - b.price
          }
          return 0
        })

        const newItems = sorted.map(sortItem => {
          const item = items.find(coin => coin.id === sortItem.id)
          return item || sortItem
        })

        if (newItems.length) {
          setItems(newItems)
        }
      }
    }
  }, [selected, coins])

  const handleAddFavorite = (id: string) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite }
      }
      return item
    })
    setItems(newItems)
  }

  return (
    <div className={styles.List}>
      <div className={styles.List__Header}>
        <h1>Assets</h1>
        <Select
          value={selected}
          options={selectItems}
          onChange={handleSelect}
          label="Order by"
        />
      </div>
      <div className={styles.List__Content}>
        {items.map((coin: Coin) => (
          <Coin
            {...coin}
            key={coin.id}
            className={styles.List__Item}
            onAddFavorite={handleAddFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default List
