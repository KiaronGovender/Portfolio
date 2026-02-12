import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  sourceUrl: string;
  overview: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  inProgress: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm group h-full flex flex-col"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gray-900 aspect-video ">
        <Image
          src={project.image}
          alt={project.name}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60"></div>

        {/* In Progress Badge */}
        {project.inProgress && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <Badge className="bg-orange-500/90 text-white border-orange-400 hover:bg-orange-500 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-lg">
              🚧 In Progress
            </Badge>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.problem}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-700 text-xs sm:text-sm"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge
              variant="secondary"
              className="bg-gray-700/50 text-gray-300 border-gray-600 text-xs sm:text-sm"
            >
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 pt-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveUrl, "_blank");
            }}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm sm:text-base py-4 sm:py-5"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Live Demo
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.sourceUrl, "_blank");
            }}
            className="flex-1 bg-white hover:bg-gray-100 text-black rounded-xl text-sm sm:text-base py-4 sm:py-5 border-0"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-black" />
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
