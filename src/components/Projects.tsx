
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Palette, ArrowUpRight, Github, Eye } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Masjid-e-Ayesha Website",
      description: "Full-stack web application with dynamic prayer times, contact forms, and responsive design. Built with modern web technologies and optimized for performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
      icon: Code,
      gradient: "from-blue-500/20 to-cyan-500/30",
      accent: "border-blue-500/30",
      color: "text-blue-400",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Animated Portfolio",
      description: "Modern portfolio website featuring advanced animations, dark/light mode toggle, smooth scrolling effects, and responsive design principles.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      icon: Palette,
      gradient: "from-purple-500/20 to-violet-500/30",
      accent: "border-purple-500/30",
      color: "text-purple-400",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Interactive Wedding Page",
      description: "Personalized wedding invitation with guest name integration, countdown timer, confetti animations, and RSVP functionality.",
      technologies: ["React", "CSS Animations", "JavaScript", "Confetti.js"],
      icon: ExternalLink,
      gradient: "from-pink-500/20 to-rose-500/30",
      accent: "border-pink-500/30",
      color: "text-pink-400",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden">
      {/* Code Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.03)_50%,transparent_75%)] bg-[length:60px_60px]" />
      
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 font-mono text-cyan-400 text-sm animate-pulse">
          {'<div className="awesome">'}
        </div>
        <div className="absolute top-40 right-20 font-mono text-purple-400 text-sm animate-pulse delay-1000">
          {'const magic = () => {}'}
        </div>
        <div className="absolute bottom-40 left-20 font-mono text-pink-400 text-sm animate-pulse delay-500">
          {'return <Component />'}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-mono">
              {'<Projects/>'}
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto font-mono">
            {'>'} Showcasing innovative solutions and technical expertise_
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isHovered = hoveredProject === index;
            
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700 hover:-translate-y-6 border-2 ${project.accent} bg-gradient-to-br from-slate-800/90 to-slate-900/80 overflow-hidden relative backdrop-blur-sm transform hover:scale-105`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Matrix Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {isHovered && [...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-4 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50`}>
                      <IconComponent className={`w-10 h-10 ${project.color}`} />
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-600/50 transition-colors cursor-pointer backdrop-blur-sm border border-slate-600/30">
                        <Github className="w-5 h-5 text-slate-300" />
                      </div>
                      <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-600/50 transition-colors cursor-pointer backdrop-blur-sm border border-slate-600/30">
                        <Eye className="w-5 h-5 text-slate-300" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className={`text-2xl group-hover:${project.color} transition-colors duration-300 leading-tight font-mono font-bold`}>
                    {project.title}
                  </CardTitle>
                  <div className={`w-16 h-1 bg-gradient-to-r ${project.gradient} group-hover:w-24 transition-all duration-500 rounded-full`} />
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-slate-300 mb-8 leading-relaxed text-base font-light">
                    {project.description}
                  </p>
                  
                  {/* Progress Animation */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-slate-400 font-mono mb-2">
                      <span>Project Status</span>
                      <span>Completed</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-1000 ease-out rounded-full ${isHovered ? 'w-full' : 'w-0'}`}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-gradient-to-r from-slate-700/80 to-slate-800/60 hover:from-slate-600/80 hover:to-slate-700/60 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-600/30 font-mono font-semibold text-xs"
                      >
                        {'{'}{tech}{'}'}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
