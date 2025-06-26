
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Database, Code, Shield, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiences = [
    {
      company: "TechOwl InfoSec Private Limited",
      position: "SOC Analyst L1",
      duration: "Aug 2024 - May 2025",
      location: "Surat",
      description: [
        "Employed as a SOC Analyst L1 in the SOC department of TechOwl InfoSec Private Limited",
        "Developed skills in field and gained knowledge of SOC Analyst operations",
        "Responsible for handling the SOC department with far-sighted decisions to help in the company's growth",
        "Shown dedication towards work throughout work tenure"
      ],
      type: "professional",
      icon: Shield,
      gradient: "from-red-500/20 to-orange-500/30",
      accent: "bg-red-500/20 border-red-400/30",
      color: "text-red-400"
    },
    {
      company: "Sparkline Technosys Pvt. Ltd.",
      position: "Networking Intern",
      description: [
        "Gained knowledge in high-speed internet connectivity via Fiber Optics and Radio Links",
        "Understood how redundant networking solutions are implemented in the field"
      ],
      type: "internship",
      icon: Building,
      gradient: "from-blue-500/20 to-cyan-500/30",
      accent: "bg-blue-500/20 border-blue-400/30",
      color: "text-blue-400"
    },
    {
      company: "IICL Skill Development Pvt. Ltd.",
      position: "Database Connectivity Intern",
      description: [
        "Hands-on experience in Python for data retrieval, manipulation, and integration",
        "Supported projects focused on skill development and database systems"
      ],
      type: "internship",
      icon: Database,
      gradient: "from-green-500/20 to-emerald-500/30",
      accent: "bg-green-500/20 border-green-400/30",
      color: "text-green-400"
    },
    {
      company: "Centre for Development of Advanced Computing (C-DAC)",
      position: "C Language Intern",
      description: [
        "Worked on software development using C",
        "Focused on debugging and algorithm implementation"
      ],
      type: "internship",
      icon: Code,
      gradient: "from-purple-500/20 to-violet-500/30",
      accent: "bg-purple-500/20 border-purple-400/30",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(79,172,254,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(79,172,254,0.05),transparent_70%)]" />
      
      {/* Matrix Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '💼' : '🚀'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-mono">
              &lt;Experience_Log/&gt;
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto font-mono">
            {'>'} Professional journey & learning milestones_
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Glitch Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50 ${isHovered ? 'animate-pulse' : ''}`}>
                        <IconComponent className={`w-8 h-8 ${exp.color}`} />
                      </div>
                      <div>
                        <CardTitle className={`text-2xl font-bold group-hover:${exp.color} transition-colors duration-300 font-mono`}>
                          {exp.company}
                        </CardTitle>
                        {exp.duration && (
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-400 font-mono text-sm">{exp.duration}</span>
                          </div>
                        )}
                        {exp.location && (
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-400 font-mono text-sm">{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge className={`${exp.accent} hover:scale-110 border transition-all duration-300 hover:shadow-lg backdrop-blur-sm font-mono font-semibold`}>
                      {exp.type === "professional" ? "Professional" : "Internship"}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-slate-200 font-mono">{'{'}"{exp.position}"{'}'};</h3>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start group/item">
                        <span className={`inline-block w-2 h-2 ${exp.color.replace('text-', 'bg-')} rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:animate-pulse`}></span>
                        <span className="text-slate-300 font-mono text-sm leading-relaxed">console.log("{desc}");</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Progress Bar Animation */}
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Impact Level</span>
                      <span>{85 + Math.floor(Math.random() * 15)}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${exp.gradient} transition-all duration-1000 ease-out rounded-full ${isHovered ? 'w-full' : 'w-0'}`}
                      />
                    </div>
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
