import { Routes, Route } from "react-router-dom";
import {CartPage, HomePage, Login, ProductDetail, ProductList, Register, OrderPage, DashboardPage, PageNotFound} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:id" element={<ProductDetail />} />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="cart" element={<ProtectedRoute> <CartPage /></ProtectedRoute>} />
                <Route path="order-summary" element={<ProtectedRoute> <OrderPage /></ProtectedRoute>} />
                <Route path="dashboard" element={<ProtectedRoute> <DashboardPage /></ProtectedRoute>} />

                <Route path="*" element={ <PageNotFound />} />

            </Routes>
        </>
    )
}