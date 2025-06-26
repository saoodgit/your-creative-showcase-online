
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, User, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(79,172,254,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(79,172,254,0.05),transparent_70%)]" />
      
      {/* Matrix Code Rain Effect */}
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
            {Math.random() > 0.5 ? '📧' : '📞'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-mono">
              &lt;Connect_With_Me/&gt;
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto font-mono">
            {'>'} Let's build something amazing together_
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card 
            className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('info')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/30 rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50">
                  <User className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl flex items-center gap-2 text-blue-400 font-mono">
                  Contact_Info
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              <div className="group/item hover:bg-blue-500/5 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/30 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-green-400 font-mono text-lg">Phone</h3>
                </div>
                <p className="text-slate-300 font-mono ml-16">const phone = "9499623940";</p>
              </div>
              
              <div className="group/item hover:bg-indigo-500/5 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-indigo-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/30 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-indigo-400 font-mono text-lg">Email</h3>
                </div>
                <p className="text-slate-300 font-mono ml-16 break-all">const email = "khansaood7860@gmail.com";</p>
              </div>
              
              <div className="group/item hover:bg-purple-500/5 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-purple-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-purple-400 font-mono text-lg">Address</h3>
                </div>
                <p className="text-slate-300 font-mono ml-16 leading-relaxed">
                  const address = {'{'}
                  <br />
                  &nbsp;&nbsp;street: "29, Hifazat Nagar, Rajpipla Road",
                  <br />
                  &nbsp;&nbsp;city: "Sarangpur, Ankleshwar",
                  <br />
                  &nbsp;&nbsp;state: "Bharuch, Gujarat",
                  <br />
                  &nbsp;&nbsp;pincode: "393001"
                  <br />
                  {'}'};
                </p>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:-translate-y-6 backdrop-blur-sm overflow-hidden relative transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('form')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/30 rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl border border-slate-600/50">
                  <Mail className="w-8 h-8 text-indigo-400" />
                </div>
                <CardTitle className="text-3xl flex items-center gap-2 text-indigo-400 font-mono">
                  Send_Message
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <form className="space-y-6">
                <div className="group/input">
                  <Label htmlFor="name" className="text-slate-300 font-mono">const name =</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="mt-2 bg-slate-800/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-blue-400/50 focus:ring-blue-400/20 font-mono group-focus/input:bg-slate-700/50 transition-all duration-300"
                  />
                </div>
                <div className="group/input">
                  <Label htmlFor="email" className="text-slate-300 font-mono">const email =</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="mt-2 bg-slate-800/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-indigo-400/50 focus:ring-indigo-400/20 font-mono group-focus/input:bg-slate-700/50 transition-all duration-300"
                  />
                </div>
                <div className="group/input">
                  <Label htmlFor="message" className="text-slate-300 font-mono">const message =</Label>
                  <textarea
                    id="message"
                    className="w-full min-h-32 px-3 py-2 mt-2 border border-slate-600/50 bg-slate-800/50 rounded-md resize-none text-slate-200 placeholder:text-slate-500 focus:border-purple-400/50 focus:ring-purple-400/20 font-mono group-focus/input:bg-slate-700/50 transition-all duration-300"
                    placeholder="Your message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full relative text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-500 rounded-xl font-mono font-bold overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover/btn:animate-bounce" />
                    Send_Message()
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
