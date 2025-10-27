import { FaReact, FaVuejs, FaJava, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiSass, SiApachekafka, SiSpringboot, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiJira, SiFigma, SiWebpack, SiMicrodotblog, SiHibernate, SiPostman, SiVscodium, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <SiHtml5 className="text-orange-500" />,
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
        { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
        // { name: "Angular", icon: <SiAngular className="text-red-600" /> }, // Commented out - remove later
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML5/CSS3", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "SASS/SCSS", icon: <SiSass className="text-pink-400" /> }
      ]
    },
    {
      category: "Backend Development",
      icon: <FaNodeJs className="text-green-600" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Kafka", icon: <SiApachekafka className="text-black" /> },
        { name: "Microservices", icon: <SiMicrodotblog className="text-blue-400" /> },
        { name: "Hibernate", icon: <SiHibernate className="text-green-700" /> },
        // { name: "Strapi", icon: <SiStrapi className="text-purple-500" /> }, // Removed as per user request
        // { name: "Python", icon: <SiPython className="text-yellow-500" /> }, // Commented out - remove later
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
        // { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> }, // Commented out - remove later
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
        // { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> }, // Commented out - remove later
        { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> }
      ]
    },
    {
      category: "Database & Cloud",
      icon: <FaDocker className="text-blue-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        // { name: "Redis", icon: <SiRedis className="text-red-500" /> }, // Commented out - remove later
        // { name: "AWS", icon: <SiAmazonaws className="text-yellow-500" /> }, // Commented out - remove later
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        // { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> }, // Commented out - remove later
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
      ]
    },
    {
      category: "Tools & Others",
      icon: <FaGitAlt className="text-orange-600" />,
      skills: [
        { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "VS Code", icon: <SiVscodium className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Jira", icon: <SiJira className="text-blue-700" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
        // { name: "Jest", icon: <SiJest className="text-pink-600" /> }, // Commented out - remove later
        // { name: "CI/CD", icon: <SiGithubactions className="text-purple-500" /> } // Commented out - remove later
      ]
    }
  ];

  return (
    <section id="skills" className="py-25 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <h2 className="text-5xl font-bold text-center mb-15 text-gradient animate-fadeInUp">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            className="bg-glass rounded-2xl p-8 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] transition-all duration-400 hover:-translate-y-4 hover:bg-glass-hover hover:shadow-[0_25px_50px_rgba(139,92,246,0.15)] shadow-[0_10px_30px_rgba(139,92,246,0.1)] animate-fadeInUp group"
            style={{ animationDelay: `${(categoryIndex + 1) * 0.2}s` }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl animate-float" style={{ animationDelay: `${categoryIndex * 0.3}s` }}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                {category.category}
              </h3>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="skill-tag text-white px-3 py-2 rounded-xl text-xs text-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,92,246,0.3)] animate-scaleIn cursor-pointer group-hover:bg-[rgba(139,92,246,0.3)] flex items-center justify-center gap-1"
                  style={{ animationDelay: `${(skillIndex + 1) * 0.1}s` }}
                >
                  <span className="text-sm">{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
            
            {/* Progress indicator for all categories */}
            <div className="mt-6 pt-4 border-t border-[rgba(139,92,246,0.1)]">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span>Expertise Level</span>
                <span className="text-purple-400 font-medium">
                  {categoryIndex === 0 ? '95%' : categoryIndex === 1 ? '75%' : categoryIndex === 2 ? '70%' : '80%'}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out animate-scaleIn"
                  style={{ 
                    width: categoryIndex === 0 ? '95%' : categoryIndex === 1 ? '75%' : categoryIndex === 2 ? '70%' : '80%',
                    animationDelay: '0.5s'
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Skills summary */}
      {/* <div className="mt-16 bg-glass rounded-2xl p-8 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] animate-fadeInUp" style={{ animationDelay: '1s' }}>
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Technical Proficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2 animate-float">32+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2 animate-float" style={{ animationDelay: '0.3s' }}>5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2 animate-float" style={{ animationDelay: '0.6s' }}>100%</div>
            <div className="text-gray-400">Project Success Rate</div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Skills; 