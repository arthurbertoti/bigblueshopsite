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
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import { Nav } from './styles';
import { Divider, Hidden, List, ListItem, SwipeableDrawer } from '@mui/material';
import { Button } from '@mui/material';
import Modal from '../Modal';
import { useState } from 'react';

export default function Navbar() {
    const routes = [{
        label: "Produtos",
        to: "/products",
        icon: ShoppingBagOutlinedIcon
    }, {
        label: "Categorias",
        to: "/categories",
        icon: SortOutlinedIcon
    }, {
        label: "Usuários",
        to: "/users",
        icon: PersonOutlineOutlinedIcon
    }, {
        label: "Pedidos",
        to: "/orders",
        icon: ShoppingCartOutlinedIcon
    }, {
        label: "Minha conta",
        to: "/myaccount",
        icon: SettingsOutlinedIcon
    }
    ]

    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => { setOpen(true) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Superfood
                </Typography>
            </Toolbar>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { setOpen(true) }}
            >
                <>
                    <div>
                        <IconButton onClick={() => { setOpen(false) }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Typography variant="h6" align="center">
                        Superfood
                    </Typography>
                    <Divider />
                    <List>
                        {routes.map((route, index) => (
                            <ListItem>
                                <Button>
                                    <route.icon color="inherit"/>
                                    <Link key={index} to={route.to}>
                                        {route.label}
                                    </Link>
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Button onClick={() => { }}>Login</Button>
                </>
            </SwipeableDrawer>

        </Nav>
    );
}