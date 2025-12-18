import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FileText, CheckCircle, Zap, Download, Star, Shield, Layout } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import useResumeStore from '../store/useResumeStore';
import TemplateThumbnail from './TemplateThumbnail';
import GoogleAd from './GoogleAd';
import SEO from './SEO';

const templates = [
  { id: 'aurora', name: 'Aurora', description: 'Clean & modern two-column layout.', color: 'bg-slate-900' },
  { id: 'noir', name: 'Noir', description: 'Elegant dark mode for bold professionals.', color: 'bg-black' },
  { id: 'neo', name: 'Neo Classic', description: 'Timeless traditional style.', color: 'bg-slate-100' },
  { id: 'pulse', name: 'Pulse', description: 'Creative design with profile photo.', color: 'bg-blue-500' },
  { id: 'cosmic', name: 'Cosmic', description: 'Futuristic dark theme with neon accents.', color: 'bg-indigo-900' },
  { id: 'glass', name: 'Glass', description: 'Premium glassmorphism effects.', color: 'bg-teal-500' },
  { id: 'titan', name: 'Titan', description: 'High-impact black & white typography.', color: 'bg-stone-800' },
  { id: 'vogue', name: 'Vogue', description: 'Editorial fashion magazine style.', color: 'bg-purple-600' },
  { id: 'skyline', name: 'Skyline', description: 'Professional corporate structure.', color: 'bg-sky-600' },
  { id: 'edge', name: 'Edge', description: 'Minimalist tech-focused design.', color: 'bg-green-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Home = () => {
  const navigate = useNavigate();
  const { setActiveTemplate } = useResumeStore();
  const [visibleCount, setVisibleCount] = React.useState(4);

  const handleCreate = (templateId) => {
    setActiveTemplate(templateId);
    navigate('/editor');
  };

  const loadMore = () => {
      setVisibleCount(prev => Math.min(prev + 4, templates.length));
  };

   const x = useMotionValue(0);
   const y = useMotionValue(0);
   const rotateX = useTransform(y, [-100, 100], [30, -30]);
   const rotateY = useTransform(x, [-100, 100], [-30, 30]);

   const handleMouseMove = (event) => {
       const rect = event.currentTarget.getBoundingClientRect();
       const width = rect.width;
       const height = rect.height;
       const mouseX = event.clientX - rect.left;
       const mouseY = event.clientY - rect.top;
       const xPct = mouseX / width - 0.5;
       const yPct = mouseY / height - 0.5;
       x.set(xPct * 200); // Amplify movement
       y.set(yPct * 200);
   };

   const handleMouseLeave = () => {
       x.set(0);
       y.set(0);
   };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
      <SEO />
      
      {/* Navbar - Mobile Optimized */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">
               R
             </div>
             <span className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 hidden xs:block">ResumeKraft</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
             <a href="#templates" className="hover:text-pink-600 transition-colors">Templates</a>
             <a href="#features" className="hover:text-pink-600 transition-colors">Features</a>
             <a href="#faq" className="hover:text-pink-600 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="bg-slate-900 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-lg active:scale-95 whitespace-nowrap">
               Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <div className="relative z-10 pt-28 sm:pt-40 pb-12 sm:pb-20 px-3 sm:px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="space-y-6 sm:space-y-8 text-center lg:text-left z-20"
            >
               <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 font-bold text-xs sm:text-sm mb-4"
               >
                  <Star className="w-4 h-4" /> Rated #1 Resume Builder
               </motion.div>

               <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Build Your Dream <br className="hidden sm:block" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-500">Resume in Minutes</span>
               </h1>
               
               <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Join 5,000,000+ professionals who got hired at top companies. <br className="hidden lg:block"/>
                  Free to use • No Sign-up Required • ATS Friendly
               </p>

               <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <button onClick={() => navigate('/editor')} className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group">
                     Create My Resume
                     <Zap className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                     View Templates
                     <FileText className="w-5 h-5" />
                  </button>
               </div>

               <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-sm font-medium text-slate-400">
                  <div className="flex items-center gap-2">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Free Forever
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckCircle className="w-5 h-5 text-green-500" /> ATS Friendly
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Secure
                  </div>
               </div>
            </motion.div>

            {/* Right Image/Graphic (Interactive 3D Tilt) */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-0 mt-8 lg:mt-0 items-center justify-center perspective-[2000px] z-10"
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-orange-200 rounded-full blur-[90px] opacity-40 animate-pulse" />
               
               <motion.div 
                  style={{ rotateX, rotateY, rotate: -6 }}
                  className="relative w-full max-w-lg aspect-[3/4] bg-white rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-100 z-10"
               >
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden relative shadow-inner pointer-events-none">
                      {/* Detailed Dummy Resume Content */}
                      <div className="h-full flex flex-col">
                        <div className="bg-slate-900 text-white p-6 pb-8">
                           <div className="flex items-center gap-4">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 p-1">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-full h-full rounded-full object-cover border-2 border-white" alt="Profile" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">Sarah Jenkins</h3>
                                <p className="text-pink-400 text-sm font-medium tracking-wide">SENIOR UX DESIGNER</p>
                              </div>
                           </div>
                        </div>
                        
                        <div className="flex-1 bg-white p-5 grid grid-cols-3 gap-5 overflow-hidden">
                           <div className="col-span-1 space-y-6 border-r border-slate-100 pr-3">
                              <div className="space-y-2">
                                 <p className="text-[10px] font-bold text-slate-400 tracking-wider">CONTACT</p>
                                 <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1, duration: 1 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                 <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 1.2, duration: 1 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                 <motion.div initial={{ width: 0 }} animate={{ width: "83%" }} transition={{ delay: 1.4, duration: 1 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                              </div>
                              <div className="space-y-3">
                                 <p className="text-[10px] font-bold text-slate-400 tracking-wider">SKILLS</p>
                                 <div className="space-y-2">
                                    {[1,2,3,4,5].map((i) => (
                                       <div key={i} className="flex gap-2 items-center">
                                          <div className={`w-1.5 h-1.5 rounded-full ${i%2===0 ? 'bg-orange-400':'bg-pink-500'}`}></div>
                                          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1 + (i*0.2), duration: 0.8 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                              <div className="space-y-3">
                                 <p className="text-[10px] font-bold text-slate-400 tracking-wider">EDUCATION</p>
                                 <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-span-2 space-y-5">
                              <div className="space-y-2">
                                 <p className="text-[10px] font-bold text-slate-400 tracking-wider">ABOUT ME</p>
                                 <div className="space-y-1.5">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.8, duration: 1 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1.0, duration: 1 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                    <motion.div initial={{ width: 0 }} animate={{ width: "83%" }} transition={{ delay: 1.2, duration: 1 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                 </div>
                              </div>
                              <div className="space-y-4">
                                 <p className="text-[10px] font-bold text-slate-400 tracking-wider">EXPERIENCE</p>
                                 {[1,2,3].map((i) => (
                                    <div key={i} className="group/item">
                                       <div className="flex justify-between mb-1.5">
                                          <div className="h-3 w-1/3 bg-slate-800 rounded"></div>
                                       </div>
                                       <div className="h-1.5 w-1/4 bg-pink-100 rounded mb-2"></div>
                                       <div className="space-y-1.5">
                                         <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1.5 + (i*0.3), duration: 0.8 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                         <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ delay: 1.7 + (i*0.3), duration: 0.8 }} className="h-1.5 bg-slate-100 rounded"></motion.div>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                      </div>
                  </div>
                  
                  {/* Floating Elements for "Sexiness" */}
                  <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="hidden lg:block absolute top-10 -right-12 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 z-20"
                  >
                     <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                           <Star className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900 leading-tight">Pro Design</div>
                           <div className="text-xs text-slate-500">Unlock Potential</div>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div 
                     animate={{ y: [0, -15, 0] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute bottom-20 -left-12 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 z-20"
                  >
                     <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                           <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900 leading-tight">Hired!</div>
                           <div className="text-xs text-slate-500">Apple • Google • Meta</div>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </div>

      {/* Features Stripe */}
      <div id="features" className="py-20 bg-white border-y border-slate-100 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Why ResumeKraft Works</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">We've simplified the resume building process so you can focus on getting hired.</p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
               {[
                 { icon: Zap, title: "Instant Build", desc: "No bulky sign-up forms. Start editing immediately.", color: "text-orange-500", bg: "bg-orange-50" },
                 { icon: Layout, title: "ATS Friendly", desc: "Templates designed to pass automated HR filters.", color: "text-purple-500", bg: "bg-purple-50" },
                 { icon: Download, title: "PDF Export", desc: "Download high-quality PDFs ready for application.", color: "text-blue-500", bg: "bg-blue-50" },
                 { icon: Shield, title: "Private", desc: "Data stored locally. We don't see your info.", color: "text-green-500", bg: "bg-green-50" },
               ].map((feature, i) => (
                 <motion.div key={i} variants={itemVariants} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                       <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </div>

      {/* Templates Gallery */}
      <div id="templates" className="py-24 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 space-y-4">
              <span className="text-pink-600 font-bold tracking-widest uppercase text-sm">Our Collections</span>
              <h2 className="text-4xl font-extrabold text-slate-900">Choose Your Perfect Template</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Professional, creative, or simple. We have a style for every career path.</p>
           </div>

           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
           >
             {templates.slice(0, visibleCount).map((template) => (
               <motion.div 
                 key={template.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 onClick={() => handleCreate(template.id)}
                 className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100"
                 whileHover={{ y: -10 }}
               >
                 {/* Live Preview Thumbnail */}
                 <div className="h-[480px] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <TemplateThumbnail templateId={template.id} />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6">
                      <motion.button 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                      >
                        <FileText className="w-5 h-5 text-orange-400" />
                        Use Template
                      </motion.button>
                    </div>
                 </div>
                 
                 <div className="p-6">
                   <div className="flex justify-between items-center">
                     <div>
                       <h3 className="text-xl font-bold text-slate-900">{template.name}</h3>
                       <p className="text-slate-500 text-sm mt-1">{template.description}</p>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </motion.div>

           {/* Load More Button */}
           {visibleCount < templates.length && (
               <div className="mt-16 text-center">
                   <button 
                      onClick={loadMore}
                      className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-lg hover:shadow-xl"
                   >
                      View More Templates
                   </button>
               </div>
           )}
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-slate-600">Got questions? We've got answers.</p>
              </div>
              
              <div className="space-y-4">
                  {[
                      { q: "Is ResumeKraft really free?", a: "Yes! You can use our builder to create and export your resume for free. We believe in empowering job seekers." },
                      { q: "Do the templates work with ATS?", a: "Absolutely. All our templates are designed with Applicant Tracking Systems (ATS) in mind to ensure your resume gets read by recruiters." },
                      { q: "Can I download as PDF?", a: "Yes, once you're done editing, simply click the Download PDF button to get a high-quality print-ready file." },
                      { q: "Is my data private?", a: "Your data is stored locally in your browser. We don't host your personal information on our servers, ensuring maximum privacy." }
                  ].map((faq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h3>
                          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
                  
                  <h2 className="text-3xl font-bold mb-6 relative z-10">Still have questions?</h2>
                  <p className="text-slate-300 mb-8 relative z-10">We're here to help you get hired. Reach out to our support team anytime.</p>
                  <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors relative z-10">
                      Contact Support
                  </button>
              </div>
          </div>
      </div>

      <GoogleAd slot="HOME_BOTTOM_SLOT_ID" format="horizontal" />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10 relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2 space-y-6">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">R</div>
                     <span className="text-xl font-bold text-slate-900 tracking-tight">ResumeKraft</span>
                  </div>
                  <p className="text-slate-500 max-w-sm leading-relaxed">
                     Helping professionals tell their story with elegance and impact. Built for modern careers.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                  <ul className="space-y-4 text-slate-500 text-sm">
                     <li><a href="#templates" className="hover:text-pink-600 transition-colors">Templates</a></li>
                     <li><a href="#features" className="hover:text-pink-600 transition-colors">Features</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-6">Support</h4>
                  <ul className="space-y-4 text-slate-500 text-sm">
                     <li><a href="#faq" className="hover:text-pink-600 transition-colors">FAQ</a></li>
                     <li><Link to="/contact" className="hover:text-pink-600 transition-colors">Contact</Link></li>
                     <li><Link to="/privacy" className="hover:text-pink-600 transition-colors">Privacy</Link></li>
                  </ul>
               </div>
            </div>
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
               <p>© 2025 ResumeKraft. All rights reserved.</p>
               <div className="flex gap-8">
                  <Link to="/terms" className="hover:text-slate-600 cursor-pointer transition-colors">Terms</Link>
                  <Link to="/privacy" className="hover:text-slate-600 cursor-pointer transition-colors">Privacy</Link>
                  <span className="hover:text-slate-600 cursor-pointer transition-colors">Cookies</span>
               </div>
            </div>
         </div>
       <div className="hidden" aria-hidden="true">
          Resume Builder, Free CV Maker, PDF Resume, Job Application Tool, Fast Resume, Professional Templates, ResumeKraft
       </div>
      </footer>
    </div>
  );
};

export default Home;
