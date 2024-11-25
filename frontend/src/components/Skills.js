export default function Skills() {
    const skills = [
        {
            name: "Python",
            description: "Versatile programming language for AI and web.",
            img: "https://www.electrorules.com/wp-content/uploads/2023/08/Python-logo-notext.svg.png",
            link: "https://en.wikipedia.org/wiki/Python_%28programming_language%29",
        },
        {
            name: "HTML",
            description: "Markup language for creating web pages.",
            img: "https://icons.veryicon.com/png/System/Hex/html%205.png",
        },
        {
            name: "CSS",
            description: "Stylesheets for designing responsive layouts.",
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            name: "JavaScript",
            description: "Dynamic scripting for interactive web pages.",
            img: "https://freesvg.org/img/1486640958.png",
        },
        {
            name: "React",
            description: "Library for building modern web applications.",
            img: "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
        },
        {
            name: "Node.js",
            description: "JavaScript runtime for backend development.",
            img: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
        },
        {
            name: "MongoDB",
            description: "NoSQL database for scalable data storage.",
            img: "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png",
        },
        {
            name: "Express.js",
            description: "Framework for building server-side applications.",
            img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
        },
    ];

    return (
        <section id="skills" className="px-6 sm:px-10 w-full my-20 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl sm:text-6xl text-emerald-500 font-bold mb-12">
                MY SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group p-6 bg-gradient-to-r from-green-100 via-emerald-200 to-emerald-300
                                   rounded-xl shadow-md border border-emerald-400 relative
                                   overflow-hidden hover:shadow-2xl transform hover:scale-105
                                   transition-all duration-300"
                    >
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-grid-dots"></div>
                        <a href={skill.link || "#"} target="_blank" rel="noopener noreferrer">
                            <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-md transform group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="object-contain w-full h-full p-2"
                                />
                            </div>
                        </a>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">
                            {skill.name}
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm text-center">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
