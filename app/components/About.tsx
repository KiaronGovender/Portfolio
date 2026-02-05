import { motion } from "framer-motion";
import { Heart, Zap, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A bit more about my journey and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="aspect-square bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl overflow-hidden border-4 border-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-7xl sm:text-9xl">
                👨‍💻
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 border-4 border-dashed border-orange-500/30 rounded-full"
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I&apos;m a{" "}
              <span className="text-orange-500 font-semibold">
                self-taught full-stack developer
              </span>{" "}
              who started coding 18 months ago by building a simple to-do app.
              That spiraled into an obsession with understanding how real
              applications work—from WebSocket connections to database
              optimization to CI/CD pipelines.{" "}
              <span className="font-semibold">
                I don&apos;t just follow tutorials; I build real tools that
                solve actual problems I&apos;ve encountered.
              </span>
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My approach is simple:{" "}
              <span className="text-orange-500 font-semibold">
                pick an ambitious project, struggle through it, and emerge with
                deep understanding.
              </span>{" "}
              Whether it&apos;s implementing CRDT algorithms for real-time
              collaboration or building a caching proxy that reduces API calls
              by 70%, I dive into the details that separate tutorial projects
              from production-ready code. I measure success in working
              deployments and performance metrics, not just code that runs
              locally.
            </p>

            <div className="grid gap-3 sm:gap-4 pt-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    Passionate Learner
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Constantly exploring new technologies and best practices
                    through documentation, courses, and building.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    Quick Adapter
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Comfortable jumping into new codebases and learning on the
                    fly. Each project teaches me something new.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    Results-Focused
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    I prioritize shipping working products over perfect code.
                    Iteration and improvement come with experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
