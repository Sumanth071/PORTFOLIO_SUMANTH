export default function About() {
    return (
        <section
            id="about"
            className="w-full flex justify-center items-center py-12 px-4"
            style={{
                background: "linear-gradient(to right, #e0f7df, #00000)", // Light green gradient
            }}
        >
            {/* About Card */}
            <div
                className="max-w-4xl w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 lg:p-12 transform hover:-translate-y-2"
            >
                {/* Image Section */}
                <div className="flex justify-center mb-8">
                    <img
                        src="https://img.freepik.com/premium-vector/cinematic-detailed-vector-cartoon-robot-ai-assistant-illustration_473883-306.jpg?w=740"
                        alt="About"
                        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-full shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                </div>

                {/* Content Section */}
                <div className="text-center space-y-6">
                    <h2 className="text-green-800 text-3xl lg:text-4xl font-extrabold">
                        ABOUT ME
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                        Hi! I’m <strong>Sumanth K</strong>, an aspiring AI Engineer with a passion for Artificial Intelligence, Machine Learning, and IoT. Currently pursuing a B.Tech in AI and Data Science at Muthayammal Engineering College, I strive to create innovative solutions to real-world problems through technology.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                        My expertise spans full-stack development (React.js, Node.js, Flask, MongoDB) and AI/ML frameworks (TensorFlow, OpenCV, Python). I specialize in combining hardware and software systems to craft impactful IoT solutions.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                        Some of my notable projects include:
                    </p>
                    <ul className="list-disc pl-8 text-left text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                        <li>
                            <strong>Smart Following Cart:</strong> An IoT-enabled cart using AI for object tracking and autonomous user-following.
                        </li>
                        <li>
                            <strong>Student Drowsiness Detection and Attendance Management System:</strong> An AI-powered application for detecting drowsiness and automating attendance using facial recognition.
                        </li>
                    </ul>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                        I’ve also built advanced chatbots with React.js frontends and Flask/Node.js backends, ensuring seamless user experiences. These include a customer support chatbot for General Chatbot for Medicals and an airline support bot for travel planning.
                    </p>
                </div>
            </div>
        </section>
    );
}
