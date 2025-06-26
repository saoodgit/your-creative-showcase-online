
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Cpu, Database } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Khan Saood Ahmed";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,172,254,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(79,172,254,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-blue-400/30 animate-bounce">
        <Code className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 text-indigo-400/20 animate-bounce delay-1000">
        <Terminal className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-purple-400/25 animate-bounce delay-500">
        <Cpu className="w-7 h-7" />
      </div>
      <div className="absolute bottom-20 right-10 text-cyan-400/20 animate-bounce delay-700">
        <Database className="w-6 h-6" />
      </div>

      {/* Matrix-like falling elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Photo with Glitch Effect */}
          <div className="mb-16 animate-fade-in">
            <div className="relative inline-block group">
              <div className="relative w-80 h-80 mx-auto">
                {/* Glitch layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/20 rounded-full blur-xl transform rotate-12 animate-spin-slow" />
                
                {/* Main photo */}
                <img
                  src="https://i.ibb.co/BVn3ZBMS/Khan-Saood.jpg"
                  alt="Khan Saood Ahmed"
                  className="relative w-full h-full rounded-full object-cover object-top border-4 border-blue-500/50 shadow-2xl group-hover:scale-110 transition-all duration-700 z-10"
                />
                
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping" />
                <div className="absolute inset-2 rounded-full border border-indigo-400/30 animate-pulse delay-1000" />
                
                {/* Tech icons orbiting */}
                <div className="absolute inset-0 animate-spin-slow">
                  <Code className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-blue-400 w-8 h-8" />
                  <Terminal className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-indigo-400 w-6 h-6" />
                  <Cpu className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-purple-400 w-7 h-7" />
                  <Database className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12 animate-fade-in">
            {/* Typewriter Effect Name */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent leading-tight tracking-tight font-mono">
                {text}
                {isTyping && <span className="animate-pulse">|</span>}
              </h1>
              <div className="w-40 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mx-auto rounded-full animate-pulse" />
            </div>
            
            {/* Glitch Effect Description */}
            <div className="relative">
              <p className="text-2xl md:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="relative inline-block">
                  <span className="text-blue-400 font-bold bg-blue-400/10 px-3 py-1 rounded-lg border border-blue-400/20">
                    &lt;Coder/&gt;
                  </span>
                </span>
                {" "}crafting digital experiences with{" "}
                <span className="text-indigo-400 font-bold bg-indigo-400/10 px-3 py-1 rounded-lg border border-indigo-400/20">
                  innovative code
                </span>
                {" "}and{" "}
                <span className="text-purple-400 font-bold bg-purple-400/10 px-3 py-1 rounded-lg border border-purple-400/20">
                  cybersecurity expertise
                </span>
              </p>
            </div>
            
            {/* Animated Tech Stack */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {[
                { label: "React.js", color: "from-blue-500/20 to-blue-600/30", icon: <Code className="w-4 h-4" /> },
                { label: "Python", color: "from-yellow-500/20 to-yellow-600/30", icon: <Terminal className="w-4 h-4" /> },
                { label: "Cybersecurity", color: "from-red-500/20 to-red-600/30", icon: <Cpu className="w-4 h-4" /> },
                { label: "Database", color: "from-green-500/20 to-green-600/30", icon: <Database className="w-4 h-4" /> }
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className={`text-lg py-4 px-8 bg-gradient-to-r ${skill.color} hover:scale-110 transition-all duration-500 border border-white/10 backdrop-blur-sm font-mono group`}
                >
                  <span className="mr-2 group-hover:animate-spin">{skill.icon}</span>
                  {skill.label}
                </Badge>
              ))}
            </div>
            
            {/* Futuristic Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12">
              <Button 
                size="lg" 
                onClick={scrollToContact} 
                className="relative text-xl px-16 py-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-3 transition-all duration-500 rounded-2xl font-mono font-bold overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 animate-pulse" />
                <span className="relative z-10">Initialize_Contact()</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToProjects}
                className="relative text-xl px-16 py-8 border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 shadow-2xl hover:shadow-blue-400/25 transform hover:-translate-y-3 transition-all duration-500 rounded-2xl backdrop-blur-sm font-mono font-bold overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Browse_Projects()</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
