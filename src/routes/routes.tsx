import { Route, BrowserRouter, Routes } from 'react-router-dom'; import DefaultPage from '../components/DefaultPage';
import Navbar from '../components/Navbar';
import Categories from '../pages/Categories';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import Users from '../pages/Users';
import Products from '../pages/Products';
export default function Router() {
    return (
        <main>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<DefaultPage />} >
                        <Route index element={"home"} />
                        <Route path="products" element={<Products />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="users" element={<Users />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}