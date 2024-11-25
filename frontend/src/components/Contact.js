export default function Contact() {
    return (
        <section
            id="contact"
            className="my-40 max-w-5xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg"
        >
            <h2 className="text-5xl font-bold text-emerald-500 text-center mb-10">
                CONTACT ME
            </h2>
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Section - Contact Form */}
                <div className="w-full lg:w-1/2 p-5 bg-white rounded-lg shadow-md">
                    {/* Get in Touch Short Note */}
                    <h3 className="text-2xl font-semibold text-gray-800 mb-5">Get in Touch</h3>
                    <p className="text-gray-700 mb-5">
                        Feel free to reach out for collaborations, queries, or just to say hi!
                    </p>
                    <form className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-400 outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Section - Contact Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center">
                    {/* Social Links */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Social Links</h4>
                        <a
                            href="https://www.instagram.com/blacky__ceo/profilecard/?igsh=MXBhM3E3a3Y5anVwaQ=="
                            target="_blank"
                            rel="noreferrer"
                            className="block text-gray-700 hover:text-emerald-500"
                        >
                            Instagram: <span className="font-bold">@blacky_ceo</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sumanth-k-60041b269/"
                            target="_blank"
                            rel="noreferrer"
                            className="block text-gray-700 hover:text-emerald-500"
                        >
                            LinkedIn: <span className="font-bold">linkedin.com/in/sumanth</span>
                        </a>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Contact Details</h4>
                        <p className="text-gray-700">
                            Phone: <span className="font-bold">+91 9949337308</span>
                        </p>
                        <p className="text-gray-700">
                            Email:{" "}
                            <span className="font-bold">ksumanthyadav10@gmail.com</span>
                        </p>
                    </div>

                    {/* Address */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Address</h4>
                        <p className="text-gray-700">
                            Address: <span className="font-bold">Kondepalle Village  Nellepalle Post  GangadharaNellore Mandal Chittoor(dist) Andhrapradesh 517167</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
