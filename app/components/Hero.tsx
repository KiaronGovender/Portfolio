import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ArrowDown, GithubIcon } from "lucide-react";

interface HeroProps {
  onViewProjects: () => void;
}

export function Hero({ onViewProjects }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-20 sm:pt-0">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-xs sm:text-sm font-mono">
              {"<Developer />"}
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hey, I&apos;m{" "}
            <span className="text-orange-500">Kiaron Govender</span>
            <br />I build developer tools & real-world apps
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
            Self-taught full-stack developer who learns by building
            production-ready projects. From GitHub analytics to real-time
            collaboration tools, I tackle complex problems that push my skills
            forward.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
            <Button
              onClick={onViewProjects}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto"
            >
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={() => window.open("https://github.com/kiarongovender", "_blank")}
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto border-0"
            >
              <GithubIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-black" />
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Code Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm text-gray-300 font-mono leading-relaxed">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{\n"}
                {"  "}name:{" "}
                <span className="text-green-400">Kiaron Govender</span>,{"\n"}
                {"  "}role:{" "}
                <span className="text-green-400">Software Engineer</span>,{"\n"}
                {"  "}passion:{" "}
                <span className="text-green-400">Building & Learning</span>,
                {"\n"}
                {"  "}skills: [<span className="text-green-400">React</span>,{" "}
                <span className="text-green-400">Node.js</span>,{" "}
                <span className="text-green-400">TypeScript</span>],{"\n"}
                {"  "}status:{" "}
                <span className="text-orange-400">Open to opportunities</span>
                {"\n"}
                {"};"}
              </code>
            </pre>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 border border-orange-500/30 rounded-2xl backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-3xl">⚡</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-2xl backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
