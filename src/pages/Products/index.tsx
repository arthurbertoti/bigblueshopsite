import TableComponent from '../../components/Table';
import { useFetch } from '../../hooks/useFetch';
import IProduct from '../../interfaces/IProduct';
import { Button } from '@mui/material';

export default function Products() {
    const { data: products, error, isFetching } = useFetch<IProduct[]>('products');
    const headers = ["Produto", "Código", "Estoque", "Valor un", "categoryName"];
    const bodyData = products?.map(product => {
        return {
            product: product.name,
            code: product.description,
            storage: 100,
            priceUnit: product.barcode,
            categoryName: product.categoryName
        }
    });

    return (
        <section>
            <h1>Todos os produtos</h1>
            {TableComponent(headers, bodyData, isFetching, error)}
            <Button variant="outlined">
                Novo produto
            </Button>
        </section>
    );



}