import { useFetch } from '../../hooks/useFetch';
import ICategory from '../../interfaces/ICategory';
import TableComponent from '../../components/Table';
import { Button } from '@mui/material';

export default function Categories() {
    const { data: categories, error, isFetching } = useFetch<ICategory[]>('categories');
    const headers = ["Categoria", "Código", "Produtos cadastrados"];
    const bodyData = categories?.map(category => {
        return {
            category: category.name,
            code: category.description,
            productsCount: category.productsCount
        }
    });

    return (
        <section>
            <h1>Todos os produtos</h1>
            {TableComponent(headers, bodyData, isFetching, error)}
            <Button variant="outlined">
                Nova categoria
            </Button>
        </section>
    );
}