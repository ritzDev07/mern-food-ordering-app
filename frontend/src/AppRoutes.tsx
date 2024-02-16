import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={
                <Layout>
                    home page
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