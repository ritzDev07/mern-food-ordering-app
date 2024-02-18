

const Homepage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className= " bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-5">
                <h1 className=" text-xl md:text-5xl font-bold tracking-tight text-green-700">
                    Grab a tasty takeaway today!
                </h1>
                <span className="text-sm md:text-xl">
                    Instant cravings, one click away!
                </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {/* add image here */}
            </div>
        </div>
    );
};

export default Homepage;