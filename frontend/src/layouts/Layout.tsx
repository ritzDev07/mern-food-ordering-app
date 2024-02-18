import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/hero";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            <Hero />


            <div className="container mx-auto flex-1 py-10">
                {
                    children
                }

            </div>

            <Footer />

        </div>
    )
};

export default Layout;