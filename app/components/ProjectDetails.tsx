import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "./Projectcard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-0 sm:p-4 sm:py-10 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 border-0 sm:border border-gray-700 sm:rounded-3xl max-w-5xl w-full sm:my-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <Image
              src={project.image}
              alt={project.name}
              className="h-48 sm:h-64 md:h-80 object-cover"
              fill
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

            <Button
              onClick={onClose}
              variant="ghost"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">
                {project.problem}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Button
                  onClick={() => window.open(project.liveUrl, "_blank")}
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm sm:text-base py-4 sm:py-5"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  onClick={() => window.open(project.sourceUrl, "_blank")}
                  className="bg-white hover:bg-gray-100 text-black rounded-xl text-sm sm:text-base py-4 sm:py-5 border-0"
                >
                  <Github className="w-4 h-4 mr-2 text-black" />
                  View Source
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-h-[60vh] sm:max-h-none overflow-y-auto">
            {/* Overview */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-500">
                Overview
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-500">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-orange-500/10 text-orange-500 border-orange-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-500">
                Key Features
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-500">
                Challenges Overcome
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange-500">
                What I Learned
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {learning}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
