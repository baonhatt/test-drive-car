import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        
        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-24 px-4 bg-black text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-bold mb-6">Experience Porsche</h2>
                <div className="w-20 h-1 bg-[#d5001c] mb-8"></div>
                <p className="text-gray-300 text-lg mb-8">
                  Schedule a test drive or speak with our Porsche consultants to discover 
                  the perfect model for your lifestyle.
                </p>
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <div className="mt-1 bg-[#d5001c] p-2 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Visit Our Showroom</h3>
                      <p className="text-gray-400">Vo Nguyen Giap Street, Da Nang</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <div className="mt-1 bg-[#d5001c] p-2 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Contact Us</h3>
                      <p className="text-gray-400">+84 (834534722)</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <div className="mt-1 bg-[#d5001c] p-2 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-gray-400">info@porsche-driven.com</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur p-8 rounded-lg"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-6">Schedule a Test Drive</h3>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.alert("Thank you! A Porsche representative will contact you shortly.");
                  }}
                >
                  <motion.div 
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <Label htmlFor="model" className="text-white">Preferred Model</Label>
                    <select
                      id="model"
                      required
                      className="w-full h-10 rounded-md bg-white/20 border-0 text-white placeholder:text-gray-400 px-3"
                    >
                      <option value="" disabled selected className="text-gray-800">Select a model</option>
                      <option value="911" className="text-gray-800">911</option>
                      <option value="taycan" className="text-gray-800">Taycan</option>
                      <option value="cayenne" className="text-gray-800">Cayenne</option>
                      <option value="panamera" className="text-gray-800">Panamera</option>
                    </select>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-[#d5001c] hover:bg-[#b5001a] text-white py-6"
                      >
                        Request Test Drive
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Footer */}
        <motion.footer 
          className="py-6 px-4 bg-gray-900 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-4 md:mb-0"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <span className="font-bold text-white text-lg">PORSCHE</span>
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a href="#" className="hover:text-white transition-colors" variants={fadeInUp}>Privacy Policy</motion.a>
              <motion.a href="#" className="hover:text-white transition-colors" variants={fadeInUp}>Terms of Service</motion.a>
              <motion.a href="#" className="hover:text-white transition-colors" variants={fadeInUp}>Cookies</motion.a>
              <motion.a href="#" className="hover:text-white transition-colors" variants={fadeInUp}>Careers</motion.a>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              &copy; {new Date().getFullYear()} Porsche. All rights reserved.
            </motion.div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
