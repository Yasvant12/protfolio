import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[rgba(15,15,35,0.95)] shadow-[0_8px_32px_rgba(139,92,246,0.1)]' 
        : 'bg-[rgba(15,15,35,0.9)]'
    } backdrop-blur-[20px] border-b border-[rgba(139,92,246,0.1)] animate-slideInDown`}>
              <nav className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 flex justify-between items-center h-20">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
          Yasvant.dev
        </div>
        
        <ul className="hidden md:flex list-none gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div 
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgba(15,15,35,0.95)] backdrop-blur-[20px] border-t border-[rgba(139,92,246,0.1)]">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white font-medium transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 