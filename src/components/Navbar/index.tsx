// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
// import { Nav } from './styles';
// import { Divider } from '@mui/material';


// export default function Navbar() {
//     const routes = [{
//         label: "Produtos",
//         to: "/products"
//     }, {
//         label: "Categorias",
//         to: "/categories"
//     }, {
//         label: "Usuários",
//         to: "/users"
//     }, {
//         label: "Pedidos",
//         to: "/orders"
//     }, {
//         label: "Minha conta",
//         to: "/myaccount"
//     }

//     ]
//     return (
//         <Nav>
//             <Toolbar>
//                 <IconButton
//                     size="large"
//                     edge="start"
//                     color="inherit"
//                     aria-label="menu"
//                     sx={{ mr: 2 }}
//                 >
//                     <MenuIcon />
//                 </IconButton>
//                 <Divider sx={{ my: 0.5 }} />
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                     Superfood
//                 </Typography>
//                 {routes.map((route, index) => (
//                     <li key={index}>
//                         <Link to={route.to}>{route.label}</Link>
//                     </li>
//                 ))}
//             </Toolbar>
//         </Nav>

//     )
// }

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Nav } from './styles';
import { Divider } from '@mui/material';
import { Button } from '@mui/material';
import Modal from '../Modal';
import { useState } from 'react';

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
        to: "/orders"
    }, {
        label: "Minha conta",
        to: "/myaccount"
    }

    ]
    return (
        <Nav>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Divider sx={{ my: 0.5 }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Superfood
                </Typography>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link to={route.to}>{route.label}</Link>
                    </li>
                ))}
            </Toolbar>
        </Nav>
    );
}