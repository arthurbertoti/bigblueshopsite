import TableComponent from '../../components/TableView';
import { useFetch } from '../../hooks/useFetch';
import IProduct from '../../interfaces/IProduct';
import ICategory from '../../interfaces/ICategory';
import { Button } from '@mui/material';

export default function Products() {
    const { data: products, error, isFetching } = useFetch<IProduct[]>('products');

    const { data: categories } = useFetch<ICategory[]>('categories');

    const filterData = categories?.map(category => {
        return {
            id: category.id,
            name: category.name
        }
    });
    const filterName = "Categorias";

    const headers = ["Produto", "Código", "Estoque", "Valor un", "Categoria"];

    const ToPriceUnit = (price: number) => {
        return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    const bodyData = products?.map(product => {
        return {
            name: product.name,
            code: product.barcode,
            storage: product.storage,
            priceUnit: ToPriceUnit(product.price),
            categoryName: product.categoryName
        }
    });

    return (
        <>
            <h1>Todos os produtos</h1>
            {TableComponent(
                headers,
                bodyData,
                isFetching,
                error,
                filterData,
                filterName,
            )}
            <Button variant="outlined">
                Novo produto
            </Button>
        </>
    );



}