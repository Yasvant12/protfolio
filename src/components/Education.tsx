const Education = () => {
  const educationData = [
    {
      title: "Master of Computer Applications",
      school: "Kongu Engineering College",
      year: "2021 - 2023",
      description: "Specialized in advanced computer applications, software development, and modern programming technologies. Focused on practical implementation and industry-relevant skills.",
      icon: "🎓",
      gpa: "7.8/10.0"
    },
    {
      title: "Bachelor of Computer Applications",
      school: "Beedi College",
      year: "2017 - 2020",
      description: "Strong foundation in computer applications, programming fundamentals, and software development principles. Active participation in technical projects and workshops.",
      icon: "⚡",
      gpa: "8.1/10.0"
    }
  ];

  return (
    <section id="education" className="py-25 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <h2 className="text-5xl font-bold text-center mb-15 text-gradient animate-fadeInUp">Education</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {educationData.map((item, index) => (
          <div 
            key={index}
            className="flex-1 bg-glass rounded-2xl p-8 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.02] hover:bg-glass-hover hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] shadow-[0_10px_30px_rgba(139,92,246,0.1)] animate-fadeInLeft group"
            style={{ animationDelay: `${(index + 1) * 0.3}s` }}
          >
            {/* Icon and Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-xl text-gray-200 mb-1 group-hover:text-white transition-colors duration-300">
                  {item.school}
                </h4>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="text-sm">{item.year}</span>
                  <span className="text-sm font-medium text-green-400">GPA: {item.gpa}</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {item.description}
            </p>
            
            {/* Animated border effect */}
            <div className="mt-6 pt-4 border-t border-[rgba(139,92,246,0.1)] group-hover:border-[rgba(139,92,246,0.3)] transition-colors duration-300">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full animate-scaleIn" style={{ animationDelay: '0.5s' }}>
                  Computer Science
                </span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full animate-scaleIn" style={{ animationDelay: '0.6s' }}>
                  Software Engineering
                </span>
              </div>
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
      
      {/* Additional education info */}
      {/* <div className="mt-12 bg-glass rounded-2xl p-8 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Additional Certifications</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full animate-scaleIn" style={{ animationDelay: '0.9s' }}>
            <span className="text-lg">🏆</span>
            <span className="text-sm text-purple-300">AWS Certified Developer</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full animate-scaleIn" style={{ animationDelay: '1s' }}>
            <span className="text-lg">🔒</span>
            <span className="text-sm text-blue-300">Google Cloud Professional</span>
          </div>
          <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full animate-scaleIn" style={{ animationDelay: '1.1s' }}>
            <span className="text-lg">🐳</span>
            <span className="text-sm text-green-300">Docker Certified Associate</span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Education; 