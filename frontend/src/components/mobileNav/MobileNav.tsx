import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";


const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-green-600" />
            </SheetTrigger>

            <SheetContent className="space-y-4">
                <SheetTitle>
                    <span>
                        Welcome to RitzEats
                    </span>
                </SheetTitle>

                <Separator />

                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-green-600">
                        Log In
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
