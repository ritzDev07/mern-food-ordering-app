import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";
import Homepage from "./pages/homepage/Homepage";


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={
                <Layout>
                    <Homepage />
                </Layout>
            } />

            <Route path="/user-profile" element={
                <Layout>
                    <span>User Profile</span>
                </Layout>
            } />

            <Route path="*" element={
                <Layout>
                    <Navigate to="/" />
                </Layout>
            } />

        </Routes>
    );
};

export default AppRoutes;