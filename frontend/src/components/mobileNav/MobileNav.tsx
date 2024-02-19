import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";


const MobileNav = () => {

    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-green-600" />
            </SheetTrigger>

            <SheetContent className="space-y-4">
                <SheetTitle>
                    {
                        isAuthenticated ?
                            <span className="flex items-center font-bold gap-2 text-herogreen">
                                <img src={user?.picture} alt="Display Picture" className="w-10 h-10 rounded-full" />
                                Hi {user?.name}
                            </span>
                            :
                            <span>
                                Welcome to RitzEats
                            </span>
                    }

                </SheetTitle>

                <Separator />

                <SheetDescription className="flex flex-col gap-4">
                    {
                        isAuthenticated ? <MobileNavLinks />
                            :
                            <Button
                                onClick={() => loginWithRedirect()}
                                className="flex-1 font-bold bg-green-600">
                                Log In
                            </Button>
                    }

                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
