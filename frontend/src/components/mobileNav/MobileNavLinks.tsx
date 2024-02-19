import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return (
        <>
            <Link
                to="user/profile"
                className="flex bg-white items-center font-bold text-black hover:text-herogreen"
            >
                User Profile
            </Link>
            <Button
                onClick={() => logout()}
                className="flex items-center px-3 font-bold bg-herogreen hover:bg-gray-500">
                logout
            </Button>
        </>
    );
};

export default MobileNavLinks;