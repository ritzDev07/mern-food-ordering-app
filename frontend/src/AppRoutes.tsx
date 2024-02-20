import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";
import Homepage from "./pages/homepage/Homepage";
import AuthCallbackPage from "./pages/authCallbackPage/AuthCallbackPage";


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={
                <Layout>
                    <Homepage />
                </Layout>
            } />

            <Route path="/auth-callback" element={
                <AuthCallbackPage />
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