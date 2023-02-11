import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Filter(filterData: any[] | unknown[]){

    const [data, setData] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setData(event.target.value);
    };

    return (
        <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={data}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {filterData?.map((item: any) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>   
            ))}
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
    )
}