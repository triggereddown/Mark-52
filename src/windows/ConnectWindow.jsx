import React, { useState, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SocialLink = ({ icon, label, href, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-${color}-400/50 hover:text-${color}-400 transition-all flex items-center justify-center gap-2 group`}
  >
    <div className={`text-gray-400 group-hover:text-${color}-400 transition-colors`}>{icon}</div>
    <span className="text-sm font-medium text-gray-300">{label}</span>
  </a>
);

const ConnectWindow = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual IDs later
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    
    // Simulating success for now as we don't have keys
    setTimeout(() => {
        setLoading(false);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col md:flex-row">
       {/* Sidebar / Socials */}
       <div className="w-full md:w-1/3 bg-black/20 p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-white/5">
          <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-sm mb-6">
            Feel free to reach out for collaborations, opportunities, or just a quick chat.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
             <SocialLink icon={<Mail size={18} />} label="Email" href="mailto:deepmoitra2@gmail.com" color="red" />
             <SocialLink icon={<Linkedin size={18} />} label="LinkedIn" href="https://www.linkedin.com/in/deep-moitra-59202a1a5/" color="blue" />
             <SocialLink icon={<Github size={18} />} label="GitHub" href="https://github.com/triggereddown" color="white" />
             <SocialLink icon={<Phone size={18} />} label="+91 7319824670" href="tel:7319824670" color="green" />
          </div>
       </div>

       {/* Contact Form */}
       <div className="flex-1 p-6 overflow-y-auto">
         <p>Please connect via links as the contact form is under updation</p>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
             <Send size={20} className="text-cyan-400" /> Send a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md">
             <div>
                <label className="block text-xs font-medium text-gray-400 mb-1 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
             </div>
             <div>
                <label className="block text-xs font-medium text-gray-400 mb-1 ml-1">Your Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
             </div>
             <div>
                <label className="block text-xs font-medium text-gray-400 mb-1 ml-1">Message</label>
                <textarea 
                  name="message" 
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  placeholder="Hello! I'd like to discuss a project..."
                ></textarea>
             </div>

             <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
             >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <span className="flex items-center gap-2">Send Message <Send size={16} /></span>}
             </motion.button>

             {status === 'success' && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                   Message sent successfully!
                </div>
             )}
          </form>
       </div>
    </div>
  );
};

export default ConnectWindow;
