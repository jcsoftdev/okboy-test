import { useMemo } from 'react'
import styles from './Select.module.scss'

const Select = ({ onChange, options: optionsProp, label, value }: Select) => {
  const options = useMemo(() => {
    return optionsProp
  }, [optionsProp])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
    // label: options.find(option => option.value === e.target.value)!.value
  }

  return (
    <div className={styles.Select}>
      <label htmlFor="filter">{label || 'Filter by'}</label>
      <select name="filter" id="" onChange={handleSelect} value={value}>
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
