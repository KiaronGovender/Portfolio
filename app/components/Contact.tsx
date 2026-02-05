import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "kiagov02@gmail.com",
    href: "mailto:kiagov02@gmail.com",
    icon: Mail,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    value: "github.com/KiaronGovender",
    href: "https://github.com/KiaronGovender",
    icon: Github,
    color: "text-gray-400",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/kiarongovender",
    href: "https://www.linkedin.com/in/kiarongovender",
    icon: Linkedin,
    color: "text-blue-400",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            I&apos;m actively looking for junior developer or internship
            opportunities. Let&apos;s talk about how I can contribute to your
            team!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 border border-gray-700 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="space-y-4 sm:space-y-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-orange-500/50 transition-all group"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${link.color.replace("text-", "bg-")}/10 border border-${link.color.split("-")[1]}-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}
                >
                  <link.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${link.color}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">
                    {link.name}
                  </div>
                  <div className="text-base sm:text-lg font-medium group-hover:text-orange-500 transition-colors truncate">
                    {link.value}
                  </div>
                </div>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-orange-500 transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <Button
              onClick={() =>
                (window.location.href = "mailto:kiaron.govender@example.com")
              }
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Send me an email
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8 sm:mt-12 text-gray-500 text-xs sm:text-sm"
        >
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-2 text-center text-sm text-gray-500">© 2026 Kiaron Govender. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
