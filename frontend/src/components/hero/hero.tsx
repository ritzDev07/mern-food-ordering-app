import heroImage from "../../assets/images/hero.png";

interface SectionProps {
    bgColor: string;
}

const Section = ({ bgColor }: SectionProps) => {
    // Conditionally apply shadow to green divs
    const shadowClass = bgColor.includes('green') ? 'drop-shadow-lg' : '';

    return (
        <div className={`bg-${bgColor} ${shadowClass} w-1/2 h-[100px] md:h-[250px]`}></div>
    );
};

const Hero = () => {
    return (
        <div className="relative">
            {/* First row */}
            <div className="w-full max-h-[500px] flex flex-row justify-center items-center">
                <Section bgColor="green-600" />
                <Section bgColor="white" />
            </div>

            {/* Second row */}
            <div className="w-full max-h-[500px] md:max-h-[600px] flex flex-row justify-center items-center">
                <Section bgColor="white" />
                <Section bgColor="green-600" />
            </div>

            {/* Image container */}
            <div className="absolute inset-0 flex justify-center items-center z-10">
                <img src={heroImage} className="object-cover w-[230px] md:mt-[-6px] md:w-[564px] drop-shadow-xl" alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
