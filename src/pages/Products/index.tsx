import { useFetch } from '../../hooks/useFetch';
import IProduct from '../../interfaces/IProduct';
export default function Products() {

    const { data: products, error, isFetching } = useFetch<IProduct[]>('products');
    return (
        <section>
            <h1>Os produtos mais <em>bacanas</em>!</h1>
            <ul>
                { isFetching && <li>Carregando...</li> }
                { error && <li>Erro ao carregar os produtos</li> }
                {products?.map(product => {
                    return (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
