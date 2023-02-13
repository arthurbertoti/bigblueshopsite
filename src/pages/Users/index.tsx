import { useFetch } from '../../hooks/useFetch';
import IUser from '../../interfaces/IUser';
import TableComponent from '../../components/TableView';
import { Button } from '@mui/material';

export default function Users() {
    const { data: users, error, isFetching } = useFetch<IUser[]>('users');
    const headers = ["Nome", "Cargo", "Rule", "Email", "Username"];

    const filterData = [
        {
            id: 1,
            name: "Gerente"
        },
        {
            id: 2,
            name: "Subgerente"
        },
        {
            id: 3,
            name: "Colaborador"
        }
    ]
    const filterName = "Cargos";

    const bodyData = users?.map(user => {
        if (user.profileId === 1) {
            user.rule = "Administrador";
        } else if (user.profileId === 2) {
            user.rule = "Usuário";
        }

        return {
            name: user.name,
            function: user.function,
            rule: user.rule,
            email: user.email,
            username: user.name
        }
    });

    return (
        <>
            <h1>Todos os pedidos</h1>
            {TableComponent(
                headers,
                bodyData,
                isFetching,
                error,
                filterData,
                filterName
            )}
            <Button variant="outlined">
                Novo pedido
            </Button>
        </>
    );
}