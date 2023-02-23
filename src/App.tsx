import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import { api } from './services'

function App() {
  const [coins, setCoins] = useState<Coin[]>([])

  useEffect(() => {
    const minutes = 0.5
    const interval = minutes * 60 * 1000

    const fetchCoins = async () => {
      console.log('fetching coins...')
      const response = await api.getCoins()
      setCoins(response.coins)
    }
    fetchCoins()

    const timer = setInterval(() => {
      fetchCoins()
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="App">
      <List coins={coins} />
    </div>
  )
}

export default App
