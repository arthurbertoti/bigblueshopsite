import { useFetch } from '../../hooks/useFetch';
import IOrder from '../../interfaces/IOrder';
import TableComponent from '../../components/TableView';
import { Button } from '@mui/material';

export default function Orders() {
    const url = 'orders';
    const { data: orders, error, isFetching } = useFetch<IOrder[]>(url);
    const headers = ["Número", "Data/Hora", "Cliente", "Quantidade"];

    const bodyData = orders?.map(order => {
        return {
            number: order.number,
            date: order.date.toLocaleString(),
            client: order.client,
            amount: order.amount
        }
    });

    const filterData = null;
    const filterName = null;

    return (
        <>
            <h1>Todos os pedidos</h1>
            {TableComponent(
                headers,
                bodyData,
                url,
                isFetching,
                error,
                filterData,
                filterName,
            )}
            <Button variant="outlined">
                Novo pedido
            </Button>
        </>
    );
}