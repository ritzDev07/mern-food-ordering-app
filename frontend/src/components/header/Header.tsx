import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="border-b-2 border-b-green-600 py-6">

            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-tighter text-green-600"
                >
                    RitzEats.com
                </Link>
            </div>

        </div>
    )
}

export default Header