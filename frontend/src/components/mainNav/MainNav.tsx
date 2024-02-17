import { Button } from "../ui/button";


const MainNav = () => {
    return (
        <Button
            variant="ghost"
            className="font-bold border bg-green-600 text-white border-green-600 hover:text-green-600 hover:bg-white"
        >
            Log In
        </Button>
    );
};

export default MainNav;