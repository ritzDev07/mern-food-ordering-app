import {  DropdownMenuContent, DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-primaryGreen gap-2">
                <img src={user?.picture} alt="Display Picture" className="w-10 h-10 rounded-full" />
                Hi {user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px] border-primaryGreen">
                <DropdownMenuItem>
                    <Link to="user/profile"
                        className="font-bold hover:text-primaryGreen">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => logout()}
                        className="flex flex-1 font-bold bg-primaryGreen">
                        Log out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu;