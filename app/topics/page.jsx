import Link from "next/link";
import { topics } from "../../public/classes";
import Container from "../../components/ui/Container";

export default function page() {
  return (
    <Container>
      <div className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {topics.map((e, index) => (
            <Link 
              key={index} 
              href={`/topics${e.link}`}
              className="group relative block h-[120px] rounded-2xl p-6 bg-gradient-to-r from-slate-800 via-blue-900/30 to-slate-900 hover:from-blue-800 hover:to-purple-900/50 border border-green-500 hover:border-blue-400/40 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-[100%] group-hover:translate-x-[110%] transition-transform duration-1000" />
              
              <div className="flex items-center gap-5 h-full relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-blue-400/20 group-hover:border-blue-400/40 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <span className="text-3xl group-hover:text-blue-300 drop-shadow-lg transition-all duration-500">
                    {e.icon}
                  </span>
                </div>
                
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200/80 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-700 leading-tight">
                    {e.topic}
                  </h1>
                  
                  {/* Bottom accent line */}
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
