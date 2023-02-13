import { Close } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Modal, IconButton, Input, InputAdornment, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filterStyle, tableStyle } from './styles';

export default function TableComponent<T = unknown>(
  header: string[],
  data: T[] | null | undefined,
  isFetching: boolean,
  error: any,
  filterData: any[] | null | undefined,
  filterName: string | null | undefined
) {

  const [open, setOpen] = React.useState(false);
  const handleModalOpen = (modalType: string, labelNames: string[]) => () => {
    setOpen(true);
  };

  const [labelNames, setLabelNames] = React.useState<string[]>([]);

  const handleClose = () => setOpen(false);

  const rowInput = () => {
    return (
      <>
        <IconButton color="inherit"
          onClick={handleModalOpen("info", labelNames)}
        >
          <InfoIcon fontSize="small" />
        </IconButton>
        <IconButton color="inherit"
          onClick={handleModalOpen("edit", labelNames)}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton color="inherit"
          onClick={handleModalOpen("delete", labelNames)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </>
    );
  };




  /*<Button onClick={handleOpen}>Abrir modal</Button>
               /*<Modal open={open} handleClose={handleClose}>
                    <h1>Modal</h1>
                </Modal>*/
  const [search, setSearch] = React.useState('');

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  if (isFetching) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados</p>;
  }

  if (!data) {
    return <p>Nenhum dado encontrado</p>;
  }

  const seachedData = data.filter((item: any) => {
    return Object.keys(item).some((key: any) =>
      item[key].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      {open && <Modal open={open} onClose={handleClose}>
        <div>
          <h1>Modal</h1>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
      </Modal>}

      <Table sx={tableStyle}>
        <TableHead>
          <TableRow>
            <>
              {header.map((headerName: any) => (
                <TableCell key={headerName} align={headerName === header[0] ? 'left' : 'center'} style={{ width: 160 }}
                >{headerName}</TableCell>
              ))}


              <TableCell align="right">
                {filterName && filterData && (
                  <FormControl sx={{ filterStyle }}>
                    <Select
                      variant="outlined"
                      value={search}
                      onChange={(event: SelectChangeEvent) => handleSearch(event.target.value)}
                      displayEmpty
                    >
                      <MenuItem value="">
                        {filterName}
                      </MenuItem>
                      {filterData?.map((item: any) => (
                        <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>)}
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
          {seachedData.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.keys(row).map((key: any) => (
                <TableCell key={key} align={key === Object.keys(row)[0] ? 'left' : 'center'}>
                  {row[key]}
                </TableCell>
              ))}
              <TableCell align="right">
                {rowInput()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}