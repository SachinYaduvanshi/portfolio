import { motion } from "framer-motion";

const educationData = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    university: "Lovely Professional University",
    date: "2022 - present",
    description:
      "Specialized in Data Science and Distributed Data Systems. Focused on designing scalable and high-performance analytics solutions that transform data into actionable insights.",
  },
  {
    id: "2",
    degree: "XII Standard",
    university: "Sanyasi Sr. Sec. School",
    date: "2020 - 2022",
    description:
      "Completed Higher Secondary Education with a focus on Science and Mathematics. Built a strong foundation in analytical and problem-solving skills.",
  },
  {
    id: "3",
    degree: "X Standard",
    university: "Dev Rishi Vidya Niketan",
    date: "2019 - 2020",
    description:
      "Completed Secondary Education with a focus on core subjects including Science, Mathematics, and English. Developed a strong academic foundation.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                {edu.university}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {edu.date}
              </p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
