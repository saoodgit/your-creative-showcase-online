
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl">
      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-pink-500/10" />
      
      <div className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="relative group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer font-mono">
              Khan.dev
            </h1>
          </div>
          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="relative px-6 py-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium group rounded-xl hover:bg-cyan-500/10 font-mono border border-transparent hover:border-cyan-500/20"
            >
              <span className="relative z-10">{'<'}{item}{'/>'}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-cyan-500/20 rounded-xl transition-all duration-300 hover:scale-110 border border-cyan-500/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-cyan-500/20">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-left text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium py-4 px-6 rounded-xl hover:bg-cyan-500/10 group font-mono border border-transparent hover:border-cyan-500/20"
              >
                <span className="flex items-center justify-between">
                  {'<'}{item}/>
                  <div className="w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-8 transition-all duration-300 rounded-full" />
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
