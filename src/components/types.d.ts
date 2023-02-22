interface List {
  coins: Coin[]
}

interface CoinDTO {
  id: string
  icon: string
  name: string
  symbol: string
  rank: number
  price: number
  priceBtc: number
  volume: number
  marketCap: number
  availableSupply: number
  totalSupply: number
  priceChange1h: number
  priceChange1d: number
  priceChange1w: number
  websiteUrl: string
  twitterUrl: string
  exp: string[]
  contractAddress?: string
  decimals?: number
}

interface Coin extends CoinDTO {
  className?: string
  onClick?: () => void
}

interface Select {
  options: SelectItem[]
  onChange: (value: T | string) => void
  label?: string
}

interface SelectItem {
  value: string
  label: string
}
