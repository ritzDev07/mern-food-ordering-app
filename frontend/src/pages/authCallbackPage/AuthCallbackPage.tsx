import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();

    const hasCreatedUser = useRef(false);

    useEffect(() => {

        // If user has sub (subject) and email, and user has not been created yet
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({
                auth0Id: user.sub,
                email: user.email
            });
            hasCreatedUser.current = true;
        }
        // Navigate to home page
        navigate("/");
    }, [createUser, navigate, user]);

    return (
        <>
            loading...
        </>
    );
};

export default AuthCallbackPage;
