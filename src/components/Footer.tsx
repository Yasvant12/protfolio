const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
  ];

  return (
    <footer className="bg-[rgba(15,15,35,0.5)] border-t border-[rgba(139,92,246,0.2)] py-10 px-10 text-center">
      <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 text-2xl transition-all duration-300 hover:-translate-y-1"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="text-gray-400 mb-4">
          <p className="text-lg font-medium mb-2">Yasvant Kumar</p>
          <p className="text-sm">Full Stack Software Engineer</p>
        </div>
        
        <div className="border-t border-[rgba(139,92,246,0.2)] pt-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} Yasvant Kumar. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 