import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Seacher from './Searcher';

export default function TableComponent<T = unknown>(Header: string[], data: T[] | null | undefined, isFetching: boolean, error: any) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {Header.map((header: any) => (
              <TableCell key={header} align={header === Header[0] ? 'left' : 'center'}
               >{header}</TableCell>
            ))}
            <Seacher />
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching && <TableRow>Carregando...</TableRow>}
          {error && <TableRow>Erro ao carregar os produtos</TableRow>}
          {data?.map((item: any) => (
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