
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";
import { useState } from "react";

export const Education = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const education = [
    {
      institution: "Prime Institute of Technology",
      degree: "Bachelor's in Engineering - Computer Engineering",
      status: "Currently pursuing, 5th Semester",
      type: "current",
      icon: GraduationCap,
      gradient: "from-blue-500/20 to-cyan-500/30",
      accent: "bg-blue-500/20 border-blue-400/30",
      color: "text-blue-400"
    },
    {
      institution: "UPL University of Sustainable Technology",
      degree: "Diploma in Computer Engineering",
      grade: "8.26 CGPA",
      type: "completed",
      icon: BookOpen,
      gradient: "from-indigo-500/20 to-purple-500/30",
      accent: "bg-indigo-500/20 border-indigo-400/30",
      color: "text-indigo-400"
    },
    {
      institution: "Ascent School (GSEB Board)",
      degree: "10th Grade",
      grade: "43%",
      type: "completed",
      icon: Award,
      gradient: "from-purple-500/20 to-pink-500/30",
      accent: "bg-purple-500/20 border-purple-400/30",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="education" className="py-32 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 relative overflow-hidden">
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
            {Math.random() > 0.5 ? '📚' : '🎓'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-mono">
              &lt;Education_Path/&gt;
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto font-mono">
            {'>'} Building knowledge, one degree at a time_
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
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
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50 ${isHovered ? 'animate-pulse' : ''}`}>
                        <IconComponent className={`w-8 h-8 ${edu.color}`} />
                      </div>
                      <CardTitle className={`text-2xl font-bold group-hover:${edu.color} transition-colors duration-300 font-mono`}>
                        {edu.institution}
                      </CardTitle>
                    </div>
                    {edu.type === "current" && (
                      <Badge className={`${edu.accent} hover:scale-110 border transition-all duration-300 hover:shadow-lg backdrop-blur-sm font-mono font-semibold`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Current
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <h3 className="text-lg font-semibold mb-4 text-slate-200 font-mono">{'{'}"{edu.degree}"{'}'};</h3>
                  {edu.grade && (
                    <p className="text-slate-400 mb-2 font-mono">const grade = "{edu.grade}";</p>
                  )}
                  {edu.status && (
                    <p className="text-slate-400 font-mono">const status = "{edu.status}";</p>
                  )}
                  
                  {/* Progress Bar Animation */}
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Completion</span>
                      <span>{edu.type === "current" ? "In Progress" : "100%"}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${edu.gradient} transition-all duration-1000 ease-out rounded-full ${isHovered ? (edu.type === "current" ? 'w-3/4' : 'w-full') : 'w-0'}`}
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
