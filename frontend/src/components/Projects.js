export default function Projects() {
    const projectsData = [
        {
            title: "Smart Following Cart",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarNtHcFhXuAUbYSoa8OVmg6aQBqbCMAtmDg&s",
            link: "https://github.com/Sumanth071/Smart_Following-_Cart",
            description:
                "An autonomous cart that follows users in stores, powered by AI and IoT for enhanced shopping convenience.",
        },
        {
            title: "College Attendance System",
            image: "https://www.zimyo.com/wp-content/uploads/2020/08/Technologies-used-in-the-Attendance-management.jpg",
            link: "https://your-college-attendance-system-project-link.com",
            description:
                "An AI-powered system that detects student drowsiness and automates attendance tracking to ensure effective learning environments.",
        },
        {
            title: "Student Drowsiness Detection",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAMY3S6eH57s9uvZCy80yAIDAoaivZQ82Hg&s",
            link: "https://github.com/Sumanth071",
            description:
                "A machine learning application that detects drowsiness in students during classes to improve focus and learning efficiency.",
        },
        {
            title: "Recipe Generator",
            image: "https://recipecard.io/wp-content/uploads/2024/07/ai-recipe-generator.png",
            link: "https://your-recipe-generator-project-link.com",
            description:
                "A web app that generates recipes based on available ingredients using AI-powered algorithms.",
        },
        {
            title: "Diwali Sales Prediction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-dE2sKNZ3yGceMEKdelseJznbs1lJivnV-1Fk3iSder9sTvinDL2fE-KNlN5SLGrBws&usqp=CAU",
            link: "https://github.com/Sumanth071/Diwali_Sales_Prediction-",
            description:
                "A machine learning model designed to predict sales trends during the Diwali season using historical data.",
        },
        {
            title: "AI Chatbots",
            image: "Sumanthprojects.jpg",
            link: "https://github.com/Sumanth071/Chat_BOT_REACT-VITE",
            description:
                "A chatbot system built with AI to handle various tasks like customer service and real-time user support.",
        },
        {
            title: "Face Recognition",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8lPcu03YP8irlTSlJ9wv8IX9EgVVJa2eBQ&s",
            link: "https://github.com/Sumanth071",
            description:
                "An AI-powered facial recognition system for security and personal identification purposes.",
        },
        {
            title: "Fruit & Vegetable Catalog",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIe0Q-rxrmBgT4AAlhynufa18DeyD8qBc-A&s",
            link: "https://github.com/Sumanth071/Fruit-_Catlog",
            description:
                "A responsive catalog of fruits and vegetables with real-time pricing and availability, using modern frontend technologies.",
        },
    ];

    return (
        <section id="projects" className="my-20 w-full flex flex-col items-center max-w-7xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-extrabold text-center mb-10 tracking-wide">
                MY PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="p-5 bg-white shadow-lg rounded-lg transition hover:shadow-xl hover:scale-105"
                    >
                        <div className="w-full h-52 overflow-hidden rounded-t-lg">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        </div>
                        <div className="p-5 flex flex-col gap-3">
                            <h3 className="text-2xl font-bold text-center text-emerald-600">
                                <a className="hover:underline" href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            <p className="text-gray-700 text-center">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
