"use client";
import React, { useRef, useState } from "react";
import { Hero } from "./components/Hero";
import { Project } from "./components/Projectcard";
import { AnimatedBackground } from "./components/Animatedbackground";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { projects } from "./data/projects";

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="relative z-10">
        <Hero onViewProjects={scrollToProjects} />
        <div ref={projectsRef}>
          <Projects projects={projects} onProjectClick={setSelectedProject} />
        </div>
      </div>
    </div>
  );
}
