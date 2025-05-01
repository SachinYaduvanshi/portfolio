// --- Hero Section ---

import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Code, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center min-h-screen py-16 text-center bg-gradient-to-b from-gray-100 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black"
        >
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 dark:from-teal-400 dark:to-blue-500 mb-4 sm:mb-6"
            >
                Hi, I&apos;m <span className="text-gray-800 dark:text-white">Sachin</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl"
            >
                I&apos;m a{" "}
                <span className="font-semibold text-blue-500 dark:text-teal-300">
                    Data Scientist
                </span>{" "}
                specializing in visualization tools excel, tableau and power bi. Let&apos;s create something amazing together!
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                className="flex gap-4 sm:gap-6"
            >
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-gray-800 border-blue-500/30 hover:border-blue-500/50 hover:from-blue-500/30 hover:to-teal-500/30 dark:bg-gradient-to-r dark:from-teal-500/20 dark:to-blue-500/20 dark:text-white dark:border-teal-500/30 dark:hover:border-teal-500/50 dark:hover:from-teal-500/30 dark:hover:to-blue-500/30"
                >
                    <a href="#projects" className="flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        My Work
                    </a>
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-gray-800 border-blue-500/30 hover:border-blue-500/50 hover:from-blue-500/30 hover:to-teal-500/30 dark:bg-gradient-to-r dark:from-teal-500/20 dark:to-blue-500/20 dark:text-white dark:border-teal-500/30 dark:hover:border-teal-500/50 dark:hover:from-teal-500/30 dark:hover:to-blue-500/30"
                >
                    <a href="#contact" className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </a>
                </Button>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                className="absolute bottom-8 flex gap-4"
            >
                <div className="w-4 h-4 bg-blue-500 dark:bg-teal-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-teal-500 dark:bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-purple-500 dark:bg-purple-500 rounded-full animate-pulse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;