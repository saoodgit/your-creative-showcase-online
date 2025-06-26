
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, User, Code, Cpu } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(79,172,254,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(79,172,254,0.05),transparent_70%)]" />
      
      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '{' : '}'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-mono">
              &lt;About_Me/&gt;
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto font-mono">
            {'>'} Passionate developer & cybersecurity enthusiast_
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12 border border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-4 backdrop-blur-sm overflow-hidden relative group">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <User className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-4xl text-blue-400 font-mono">Career_Objective</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-xl leading-relaxed text-slate-300 font-light">
                As a <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 font-mono">responsible and organized individual</span>, I am eager to gain professional experience in the IT and 
                cybersecurity field. I aim to contribute, learn, and grow through practical involvement in real-world 
                projects. Passionate about web development, cybersecurity, and building user-focused solutions.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="pt-8 pb-8 text-center relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50">
                    <Phone className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400 font-mono">&lt;Phone/&gt;</h3>
                <p className="text-slate-300 text-lg font-mono">9499623940</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="pt-8 pb-8 text-center relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50">
                    <Mail className="w-10 h-10 text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-400 font-mono">&lt;Email/&gt;</h3>
                <p className="text-slate-300 text-base break-all font-mono">khansaood7860@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="pt-8 pb-8 text-center relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50">
                    <MapPin className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-400 font-mono">&lt;Location/&gt;</h3>
                <p className="text-slate-300 text-base leading-relaxed font-mono">29, Hifazat Nagar, Rajpipla Road, Sarangpur, Ankleshwar, Bharuch, Gujarat - 393001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
