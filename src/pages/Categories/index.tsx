import { useFetch } from '../../hooks/useFetch';
import ICategory from '../../interfaces/ICategory';
import TableComponent from '../../components/TableView';
import { Button } from '@mui/material';

export default function Categories() {
    const url = 'categories';
    const { data: categories, error, isFetching } = useFetch<ICategory[]>(url);
    const headers = ["Categoria", "Código", "Produtos cadastrados"];
    const bodyData = categories?.map(category => {
        return {
            category: category.name,
            code: category.description,
            productsCount: category.productsCount
        }
    });

    const filterData = null;
    const filterName = null;


    return (
        <>
            <h1>Todas as categorias</h1>
            {TableComponent(
                headers,
                bodyData,
                url,
                isFetching,
                error,
                filterData,
                filterName
            )}
            <Button variant="outlined">
                Nova categoria
            </Button>
        </>
    );
}