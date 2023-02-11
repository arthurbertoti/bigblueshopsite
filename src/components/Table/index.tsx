import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Input, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Filter from './Filter';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TableComponent<T = unknown>(
  header: string[],
  data: T[] | null | undefined,
  isFetching: boolean,
  error: any
  /*,
  filterMenu: boolean,
  filterData: [] | null | undefined*/
) {

  const [search, setSearch] = React.useState('');
  const searchLabel = 'Pesquisar...';
  const [filter, setFilter] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
  };




  const filteredData = data?.filter((item: any) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <>
              {header.map((headerName: any) => (
                <TableCell key={headerName} align={headerName === header[0] ? 'left' : 'center'}
                >{headerName}</TableCell>
              ))}
              <TableCell>
                {/* {filterMenu &&
                { Filter(filterData: [] | null | undefined) { } }} */}
                <FormControl variant="outlined">
                  <Input
                    placeholder="Pesquisar..."
                    onChange={(e) => handleSearch(e.target.value)}
                    value={search}
                    inputProps={{ 'aria-label': 'search' }}
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon color="inherit" fontSize="small" />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </TableCell>
            </>
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching && <TableRow>Carregando...</TableRow>}
          {error && <TableRow>Erro ao carregar os produtos</TableRow>}
          {filteredData?.map((item: any) => (

            <TableRow key={item.id}>

              {Object.keys(item).map((key: any) => (

                <TableCell key={key}
                  align={key === Object.keys(item)[0] ? 'left' : 'center'}
                >{item[key]}</TableCell>
              ))}
              <TableCell style={{ width: 160 }} align="center">
                <IconButton color="inherit"
                  onClick={() => {
                    alert('clicked');
                  }}
                >
                  <InfoIcon color="inherit" fontSize="small" />
                </IconButton>
                <IconButton color="inherit"
                  onClick={() => {
                    alert('clicked');
                  }}>
                  <EditIcon color="inherit" fontSize="small" />
                </IconButton>
                <IconButton color="inherit"
                  onClick={() => {
                    alert('clicked');
                  }}>
                  <DeleteIcon color="inherit" fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}