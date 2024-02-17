import { Link } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";
import MainNav from "../mainNav/MainNav";

const Header = () => {
    return (
        <div className="py-6">

            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-tighter text-green-600"
                >
                    RitzEats
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>

        </div>
    );
};

export default Header;