import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Default to dark mode if no theme is saved in localStorage
        return localStorage.getItem("theme") !== "light";
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Add or remove the "dark" class on the <html> element
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="dark:bg-gray-900 dark:text-white p-4 fixed top-0 w-full z-10 shadow-md bg-gray-100 text-gray-600">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-lg sm:text-xl font-bold">
                    <a href="#home" className="hover:text-purple-400 dark:hover:text-purple-500">
                        Sachin
                    </a>
                </h1>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-md bg-gray-100 text-black hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-300"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? "✖" : "☰"}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-200 transform ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:static lg:transform-none lg:flex lg:flex-row lg:space-x-6 lg:bg-transparent lg:dark:bg-transparent transition-transform duration-300 ease-in-out flex flex-col justify-center`}
                >
                    <li className="text-center lg:text-left">
                        <a
                            href="#about"
                            className="block py-4 px-6 hover:text-purple-400 dark:hover:text-purple-500"
                        >
                            About
                        </a>
                    </li>
                    <li className="text-center lg:text-left">
                        <a
                            href="#skills"
                            className="block py-4 px-6 hover:text-purple-400 dark:hover:text-purple-500"
                        >
                            Skills
                        </a>
                    </li>
                    <li className="text-center lg:text-left">
                        <a
                            href="#projects"
                            className="block py-4 px-6 hover:text-purple-400 dark:hover:text-purple-500"
                        >
                            Projects
                        </a>
                    </li>
                    <li className="text-center lg:text-left">
                        <a
                            href="#education"
                            className="block py-4 px-6 hover:text-purple-400 dark:hover:text-purple-500"
                        >
                            Education
                        </a>
                    </li>
                    <li className="text-center lg:text-left">
                        <a
                            href="#contact"
                            className="block py-4 px-6 hover:text-purple-400 dark:hover:text-purple-500"
                        >
                            Contact
                        </a>
                    </li>
                    {/* Theme Toggle Button */}
                    <li className="text-center lg:text-left mt-4 lg:mt-0">
                        <button
                            onClick={toggleTheme}
                            className="block py-4 px-6 rounded-full bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 mx-auto lg:mx-0"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;