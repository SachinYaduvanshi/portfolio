// --- Footer Section ---
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-100 text-gray-600 border-t border-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center">
                {/* Footer Text */}
                <p className="text-sm mb-4">
                    &copy; {new Date().getFullYear()} Sachin. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/SachinYaduvanshi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-400 dark:text-gray-600 dark:hover:text-purple-500 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sachin-yaduvanshi-765531252/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-400 dark:text-gray-600 dark:hover:text-purple-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:sy5457287@gmail.com"
                        className="text-gray-600 hover:text-purple-400 dark:text-gray-600 dark:hover:text-purple-500 transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;