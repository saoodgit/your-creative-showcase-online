
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Shield, Globe, Palette, Languages, Terminal, Cpu } from "lucide-react";
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      category: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript ES6+"],
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/30",
      accent: "bg-blue-500/20 border-blue-400/30",
      color: "text-blue-400"
    },
    {
      category: "Programming",
      skills: ["C/C++", "Python", "Algorithms"],
      icon: Code,
      gradient: "from-green-500/20 to-emerald-500/30",
      accent: "bg-green-500/20 border-green-400/30",
      color: "text-green-400"
    },
    {
      category: "Developer Tools",
      skills: ["GitHub", "VS Code", "Git"],
      icon: Terminal,
      gradient: "from-purple-500/20 to-violet-500/30",
      accent: "bg-purple-500/20 border-purple-400/30",
      color: "text-purple-400"
    },
    {
      category: "Design & UX",
      skills: ["UI/UX Design", "Responsive Design", "Figma"],
      icon: Palette,
      gradient: "from-pink-500/20 to-rose-500/30",
      accent: "bg-pink-500/20 border-pink-400/30",
      color: "text-pink-400"
    },
    {
      category: "Cybersecurity",
      skills: ["FortiSIEM", "DFIR Analysis", "Security Protocols"],
      icon: Shield,
      gradient: "from-red-500/20 to-orange-500/30",
      accent: "bg-red-500/20 border-red-400/30",
      color: "text-red-400"
    },
    {
      category: "System Architecture",
      skills: ["Database Design", "API Development", "Cloud Services"],
      icon: Cpu,
      gradient: "from-yellow-500/20 to-amber-500/30",
      accent: "bg-yellow-500/20 border-yellow-400/30",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,119,198,0.05),transparent_70%)]" />
      
      {/* Matrix Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-mono">
              &lt;Skills_Matrix/&gt;
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto font-mono">
            {'>'} Constantly evolving tech stack and expertise_
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isHovered = hoveredSkill === index;
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Glitch Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50 ${isHovered ? 'animate-pulse' : ''}`}>
                      <IconComponent className={`w-10 h-10 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className={`text-2xl font-bold group-hover:${category.color} transition-colors duration-300 font-mono`}>
                        {category.category}
                      </CardTitle>
                      <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} mt-3 group-hover:w-20 transition-all duration-500 rounded-full`} />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={`text-sm py-2 px-4 ${category.accent} hover:scale-110 border transition-all duration-300 hover:shadow-lg backdrop-blur-sm font-mono font-semibold`}
                      >
                        <span className="mr-1">{'{'}
                        {skill}
                        {'}'}</span>
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Progress Bar Animation */}
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Proficiency</span>
                      <span>{85 + Math.floor(Math.random() * 15)}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out rounded-full ${isHovered ? 'w-full' : 'w-0'}`}
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
