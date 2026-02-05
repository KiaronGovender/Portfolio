import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "HTML/CSS",
      "JavaScript (ES6+)",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Firebase",
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "npm/pnpm",
      "Chrome DevTools",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-orange-500">Technologies</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies I&apos;ve learned and used in my projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-orange-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/50 text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
