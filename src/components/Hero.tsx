import profileImg from '../assets/yasvant.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-10 pb-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-center">
        <div className="space-y-6">
          <p className="text-gray-400 text-lg animate-fadeInUp animate-stagger-1">Hi There 👋</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gradient animate-fadeInUp animate-stagger-2">
            I'm Yasvant Kumar,<br />Software Engineer
          </h1>
          <p className="text-xl text-gray-400 max-w-lg animate-fadeInUp animate-stagger-3">
            Passionate full-stack developer creating innovative solutions with cutting-edge technologies. 
            Specialized in React, Spring Boot, and cloud architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 animate-fadeInUp animate-stagger-4">
            <a 
              href="/Yasvant_Kumar_CV.pdf" 
              download
              className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] shadow-[0_8px_32px_rgba(139,92,246,0.3)] animate-glow"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="bg-[rgba(255,255,255,0.1)] text-white px-8 py-4 rounded-xl font-semibold border border-[rgba(139,92,246,0.3)] backdrop-blur-[10px] transition-all duration-300 hover:bg-[rgba(139,92,246,0.2)] hover:border-[rgba(139,92,246,0.5)] hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Animated stats */}
          <div className="flex gap-8 pt-8 animate-fadeInUp animate-stagger-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 animate-float">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 animate-float" style={{ animationDelay: '0.5s' }}>5+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 animate-float" style={{ animationDelay: '1s' }}>15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
        
        <div className="animate-fadeInRight">
          <div className="bg-glass rounded-3xl p-10 text-center shadow-[0_20px_40px_rgba(139,92,246,0.1)] animate-float">
            <div className="w-48 h-48 rounded-full mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-6xl overflow-hidden animate-pulse animate-bounce border-3 border-[rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-rotateIn">
              <img 
                src={profileImg}
                alt="Yasvant Kumar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 animate-slideInFromBottom">Full Stack Developer</h3>
            <p className="text-gray-400 animate-slideInFromBottom" style={{ animationDelay: '0.2s' }}>INDIA, BANGALORE</p>
            
            {/* Animated tech stack */}
            <div className="mt-6 flex justify-center gap-2 animate-slideInFromBottom" style={{ animationDelay: '0.4s' }}>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">React</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Spring Boot</span>
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 