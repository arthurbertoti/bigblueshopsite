import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
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
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Superfood
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
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
            </header>
        </>
    )
}