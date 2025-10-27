import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-25 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-15 text-gradient animate-fadeInUp">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-10 animate-fadeInUp animate-stagger-1">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to connect!
        </p>
        
        <form onSubmit={handleSubmit} className="grid gap-6 mt-10">
          <div className="grid gap-2 animate-fadeInUp animate-stagger-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[rgba(255,255,255,0.08)] border border-[rgba(139,92,246,0.2)] rounded-xl p-4 text-white backdrop-blur-[10px] transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-[rgba(255,255,255,0.12)] focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] placeholder-gray-400 hover:border-[rgba(139,92,246,0.4)]"
            />
          </div>
          
          <div className="grid gap-2 animate-fadeInUp animate-stagger-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[rgba(255,255,255,0.08)] border border-[rgba(139,92,246,0.2)] rounded-xl p-4 text-white backdrop-blur-[10px] transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-[rgba(255,255,255,0.12)] focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] placeholder-gray-400 hover:border-[rgba(139,92,246,0.4)]"
            />
          </div>
          
          <div className="grid gap-2 animate-fadeInUp animate-stagger-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[rgba(255,255,255,0.08)] border border-[rgba(139,92,246,0.2)] rounded-xl p-4 text-white backdrop-blur-[10px] transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-[rgba(255,255,255,0.12)] focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] placeholder-gray-400 hover:border-[rgba(139,92,246,0.4)]"
            />
          </div>
          
          <div className="grid gap-2 animate-fadeInUp animate-stagger-5">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-[rgba(255,255,255,0.08)] border border-[rgba(139,92,246,0.2)] rounded-xl p-4 text-white backdrop-blur-[10px] transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-[rgba(255,255,255,0.12)] focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] placeholder-gray-400 resize-vertical min-h-[120px] hover:border-[rgba(139,92,246,0.4)]"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] shadow-[0_8px_32px_rgba(139,92,246,0.3)] mt-4 animate-fadeInUp animate-stagger-6 disabled:opacity-50 disabled:cursor-not-allowed animate-glow"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        
        <div className="mt-15 animate-fadeInUp animate-stagger-7">
          <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:peter.morris@example.com" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 animate-float"
            >
              <span className="text-xl">📧</span>
              yasvantkumar@gmail.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 animate-float"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-xl">📞</span>
              +91 9162198492
            </a>
          </div>
        </div>
        
        {/* Contact info cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp animate-stagger-8">
          <div className="bg-glass rounded-xl p-6 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] hover:bg-glass-hover transition-all duration-300 hover:-translate-y-2 animate-float">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="font-semibold text-white mb-2">Location</h4>
            <p className="text-gray-400 text-sm">Bangalore, India</p>
          </div>
          <div className="bg-glass rounded-xl p-6 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] hover:bg-glass-hover transition-all duration-300 hover:-translate-y-2 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl mb-3">⏰</div>
            <h4 className="font-semibold text-white mb-2">Availability</h4>
            <p className="text-gray-400 text-sm">Open to opportunities</p>
          </div>
          <div className="bg-glass rounded-xl p-6 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] hover:bg-glass-hover transition-all duration-300 hover:-translate-y-2 animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl mb-3">💼</div>
            <h4 className="font-semibold text-white mb-2">Work Type</h4>
            <p className="text-gray-400 text-sm">Remote & On-site</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 