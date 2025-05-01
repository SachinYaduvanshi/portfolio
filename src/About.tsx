// --- About Section ---
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Download, Mail } from "lucide-react";

const About = () => {
  // Replace with your actual resume file path
  const resumeUrl = "Sachincvu.pdf";

  return (
    <section
      id="about"
      className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-800">
              <img
                src="WhatsApp Image 2025-04-24 at 17.27.21_4ca06a67.jpg" // Replace with your image
                alt="Sachin"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t to-transparent dark:from-black/70"></div>
              <div className="absolute bottom-4 left-4 text-gray-800 dark:text-white">
                <h3 className="text-xl font-semibold text-white">Sachin</h3>
                <p className="text-sm text-white dark:text-gray-300">
                  Data Scientist
                </p>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:w-2/3 space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300"
          >
            <p className="text-lg sm:text-xl">
              Hello! I'm Sachin, a passionate and results-oriented
              Data Science Engineer.I have worked upon various visualization tools such as excel,tableau and currently i am working on power bi . 
              I thrive on solving complex problems and crafting
              scalable, efficient, and user-friendly solutions that make a real
              impact. I have learned python,c,c++,r and java programing languages.
            </p>
            <p className="text-lg sm:text-xl">
              Committed to writing clean, maintainable code and following
              industry best practices, I focus on building solutions that are
              not only technically sound but also optimized for performance and
              usability. Let's create something amazing together!
            </p>
            <div className="flex gap-4">
              {/* Resume Button */}
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-gray-800 border-blue-500/30 hover:border-blue-500/50 hover:from-blue-500/20 hover:to-teal-500/20 dark:bg-gradient-to-r dark:from-teal-500/20 dark:to-blue-500/20 dark:text-white dark:border-teal-500/30 dark:hover:border-teal-500/50 dark:hover:from-teal-500/30 dark:hover:to-blue-500/30"
              >
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </Button>

              {/* Contact Me Button */}
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-gray-800 border-blue-500/30 hover:border-blue-500/50 hover:from-blue-500/20 hover:to-teal-500/20 dark:bg-gradient-to-r dark:from-teal-500/20 dark:to-blue-500/20 dark:text-white dark:border-teal-500/30 dark:hover:border-teal-500/50 dark:hover:from-teal-500/30 dark:hover:to-blue-500/30"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
