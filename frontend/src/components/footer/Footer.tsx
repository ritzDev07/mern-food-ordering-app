import { AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const footerProductLinks = [
    {
        name: "About us",
        link: "/",
    },
    {
        name: "Careers",
        link: "/",
    },
    {
        name: "Our Blog",
        link: "/",
    },
    {
        name: "Reviews",
        link: "/",
    },
];

const footercompanyLinks = [
    {
        name: "Recent Offers",
        link: "/",
    },
    {
        name: "Recent Food",
        link: "/",
    },
    {
        name: "Events",
        link: "/",
    },
];

const footerSupportLinks = [
    {
        name: "FAQ",
        link: "/",
    },
    {
        name: "Reviews",
        link: "/",
    },
    {
        name: "Contact Us",
        link: "/",
    },
    {
        name: "Live chat",
        link: "/",
    },
];

interface FooterLink {
    name: string;
    link?: string;
}

interface FooterProps {
    title: string;
    links: FooterLink[];
}



const FooterSection: React.FC<FooterProps> = ({ title, links }) => (
    <div className='text-left'>
        <h1 className="mb-1 font-semibold">{title}</h1>
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    {link.link ? (
                        <Link
                            className="text-gray-200 hover:text-emerald-400 duration-300 text-sm cursor-pointer leading-6"
                            to={link.link}
                        >
                            {link.name}
                        </Link>
                    ) : (
                        <span className="text-gray-200">{link.name}</span>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const SocialMediaLinks: React.FC = () => (
    <div className="flex items-start mt-4">
        {[
            { Icon: AiOutlineFacebook, label: 'Facebook' },
            { Icon: AiOutlineTwitter, label: 'Twitter' },
            { Icon: AiOutlineYoutube, label: 'YouTube' },
            { Icon: AiOutlineGithub, label: 'GitHub' },
        ].map(({ Icon, label }, index) => (
            <a
                key={index}
                href={`https://${label.toLowerCase()}.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-200 hover:text-emerald-500 duration-300${index !== 0 ? ' ml-2' : ''}`}
            >
                <Icon size={25} />
            </a>
        ))}
    </div>
);

const Footer: React.FC = () => (
    <footer className="bg-herogreen text-white mt-5">
        <div className='container mx-auto flex-1 py-10'>
            <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
                <FooterSection title="Company" links={footerProductLinks} />
                <FooterSection title="Shop" links={footercompanyLinks} />
                <FooterSection title="Support" links={footerSupportLinks} />
                <div className='text-left'>
                    <h1 className="mb-1 font-semibold">RitzEats</h1>
                    <p>Grab a tasty takeaway today!</p>
                    <SocialMediaLinks />
                </div>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-gray-300 text-sm pb-8 justify-center items-center">
                <span>&copy; {new Date().getFullYear()} RitzDev. All rights reserved</span>
                <span>
                    <Link className="text-gray-300 hover:text-white duration-300" to="/terms">
                        Terms
                    </Link>{' '}
                    |{' '}
                    <Link className="text-gray-300 hover:text-white duration-300" to="/privacy">
                        Privacy Policy
                    </Link>
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;