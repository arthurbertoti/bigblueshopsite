
import { useFetch } from '../../hooks/useFetch';
import ICategory from '../../interfaces/ICategory';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Categories() {

    const { data: categories } = useFetch<ICategory[]>('categories');
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell align="right">Código</TableCell>
                            <TableCell align="right">Produtos Cadastrados</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories?.map((category) => (
                            <TableRow
                                key={category.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {category.name}
                                </TableCell>
                                <TableCell align="right">"category.code"</TableCell>
                                <TableCell align="right">{category.productsCount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}