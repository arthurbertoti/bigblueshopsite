import { Link } from 'react-router-dom';
export default function Navbar() {
    const routes = [{
        label: "Produtos",
        to: "/products"
    }, {
        label: "Categorias",
        to: "/categories"
    }, {
        label: "Usuários",
        to: "/users"
    }, {
        label: "Pedidos",
        to: "/requests"
    }, {
        label: "Minha conta",
        to: "/myaccount"
    }

    ]
    return (
        <header>
            <nav>
                <p>Navbar</p>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link to={route.to}>
                                {route.label}
                            </Link>
                        </li>
                    )
                    )}
                </ul>
            </nav>
            <h1>Superfood</h1>
        </header>
    )
}