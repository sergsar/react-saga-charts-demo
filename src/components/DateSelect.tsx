import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './dateSelect.css';
import {DATES} from "../consts/dates";
import {useDispatch} from "react-redux";
import {getMarketRequest} from "../utils/market-request";
import {fetchMarketRequest} from "../store/market/actions";

const DateSelect: React.FC<{ className: string }> = (props: any) => {
    const dispatch = useDispatch();

    const [date, setDate] = useState(DATES[0].value);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        const chartParams = getMarketRequest(value)
        dispatch(fetchMarketRequest({ request: chartParams }))
        setDate(value);
    };

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
                        { DATES.map((item, index) =>
                            <MenuItem value={item.value} key={index}>{item.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default DateSelect;
