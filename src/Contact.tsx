import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Contact Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-center lg:text-left">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Mail className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                <a
                  href="mailto:sy5457287@gmail.com"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg sm:text-xl"
                >
                  sy5457287@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Linkedin className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                <a
                  href="https://www.linkedin.com/in/sachin-yaduvanshi-765531252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg sm:text-xl"
                >
                  https://www.linkedin.com/in/sachin-yaduvanshi-765531252/
                </a>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Github className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                <a
                  href="https://github.com/SachinYaduvanshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg sm:text-xl"
                >
                  https://github.com/SachinYaduvanshi
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 p-6 rounded-lg shadow-lg w-full">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 p-3 bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 p-3 bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full mt-1 p-3 bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
