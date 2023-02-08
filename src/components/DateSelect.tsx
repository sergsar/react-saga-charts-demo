import './dateSelect.css'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { DATES } from '../consts/dates'
import { fetchMarketRequest } from '../store/market/actions'
import { getMarketRequest } from '../utils/market-request'

interface DateSelectProps {
  className: string
}

const DateSelect: React.FC<DateSelectProps> = (props) => {
  const dispatch = useDispatch()

  const [date, setDate] = useState(DATES[0].value)

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    const chartParams = getMarketRequest(value)
    dispatch(fetchMarketRequest({ request: chartParams }))
    setDate(value)
  }

  return (
    <div className={props.className}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            label="Date"
            onChange={handleChange}
          >
            {DATES.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default DateSelect
