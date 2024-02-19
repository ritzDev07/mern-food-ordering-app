import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";


const MainNav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            variant="ghost"
            className="font-bold border bg-green-600 text-white border-green-600 hover:text-green-600 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
        >
            Log In
        </Button>
    );
};

export default MainNav;