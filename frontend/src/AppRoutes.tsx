import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";
import Homepage from "./pages/homepage/Homepage";
import AuthCallbackPage from "./pages/authCallbackPage/AuthCallbackPage";
import UserProfilePage from "./pages/userProfilepage/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={
                <Layout showHero>
                    <Homepage />
                </Layout>
            } />

            <Route path="/auth-callback" element={
                <AuthCallbackPage />
            } />

            <Route element={<ProtectedRoute />}>
                
                <Route path="/user-profile" element={
                    <Layout>
                        <UserProfilePage />
                    </Layout>
                } />

            </Route>


            <Route path="*" element={
                <Layout showHero>
                    <Navigate to="/" />
                </Layout>
            } />

        </Routes>
    );
};

export default AppRoutes;