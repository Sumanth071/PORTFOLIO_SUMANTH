export default function Navbar() {
    const handleScroll = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className="w-full px-5 sm:px-10 py-5 shadow-xl
                        backdrop-blur-lg sticky top-0 z-50 bg-white"
        >
            <div
                className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full
                            items-center max-w-5xl mx-auto"
            >
                <h3 className="text-3xl text-emerald-500 font-bold hover:scale-110 transition-transform duration-300">
                    K Sumanth'Portfolio
                </h3>
                <div className="flex gap-3 align-center p-1 flex-wrap">
                    <button
                        className="text-sm sm:text-base px-2 lg:px-5 py-2
                                   transition-all duration-300 ease-in-out rounded
                                   hover:text-white hover:bg-emerald-600 transform
                                   hover:scale-105 hover:shadow-lg"
                        onClick={() => handleScroll('#about')}
                    >
                        About
                    </button>
                    <button
                        className="text-sm sm:text-base px-2 lg:px-5 py-2
                                   transition-all duration-300 ease-in-out rounded
                                   hover:text-white hover:bg-emerald-600 transform
                                   hover:scale-105 hover:shadow-lg"
                        onClick={() => handleScroll('#skills')}
                    >
                        Skills
                    </button>
                    <button
                        className="text-sm sm:text-base px-2 lg:px-5 py-2
                                   transition-all duration-300 ease-in-out rounded
                                   hover:text-white hover:bg-emerald-600 transform
                                   hover:scale-105 hover:shadow-lg"
                        onClick={() => handleScroll('#projects')}
                    >
                        Projects
                    </button>
                    <button
                        className="text-sm sm:text-base px-2 lg:px-5 py-2
                                   transition-all duration-300 ease-in-out rounded
                                   hover:text-white hover:bg-emerald-600 transform
                                   hover:scale-105 hover:shadow-lg"
                        onClick={() => handleScroll('#contact')}
                    >
                        Contact
                    </button>
                    <button
                        className="text-sm sm:text-base px-2 lg:px-5 py-2
                                   transition-all duration-300 ease-in-out rounded
                                   hover:text-white hover:bg-emerald-600 transform
                                   hover:scale-105 hover:shadow-lg"
                        onClick={() => handleScroll('#resume')}
                    >
                        Resume
                    </button>
                </div>
            </div>
        </nav>
    );
}
