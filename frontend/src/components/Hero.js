export default function Hero() {
  return (
    <section
      id="hero"
      className="px-4 w-full flex justify-center items-center mt-20 mb-16 lg:mt-10"
    >
      <div
        className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full flex flex-col lg:flex-row gap-8 items-center lg:items-stretch"
      >
        {/* Left Side: About Section */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hello, Welcome Everyone!!
            </h1>
            <h2 className="text-emerald-500 text-4xl font-bold mt-2">
              Let's Connect
            </h2>
          </div>
          <p className="mt-4 text-gray-600">
            I am your friendly neighborhood developer, passionate about crafting
            innovative and impactful web solutions. Welcome to my world of
            development!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="#projects" // Adjust link to your projects section
              className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition duration-300"
            >
              <span>View Projects</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sumanth-k-60041b269/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition duration-300"
            >
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/Sumanth071"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition duration-300"
            >
              <span>GitHub Profile</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex gap-4">
            <a
              href="https://www.linkedin.com/in/sumanth-k-60041b269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-500 transition duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Sumanth071"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-500 transition duration-300 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-500 transition duration-300 text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <img
              src="/assets/Sumanth.JPG.png" // Path to the uploaded image
              alt="Sumanth"
              className="w-[250px] h-[250px] object-cover rounded-full shadow-lg border-4 border-emerald-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
