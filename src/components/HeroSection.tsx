import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => (
  <section id="models" className="relative pt-20 bg-black overflow-hidden">
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/B7oOtTgYEZM?autoplay=1&mute=1&loop=1&playlist=B7oOtTgYEZM&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&version=3&playerapiid=ytplayer"
          title="Porsche Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute w-[100vw] h-[100vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          style={{ 
            width: '177.77777778vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </motion.div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-start">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Unleash the <span className="text-[#d5001c]">Extraordinary</span>
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-white/80 max-w-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Experience performance, precision, and passion in every drive. 
        A Porsche is not just a car, it's a statement of excellence.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="bg-[#d5001c] hover:bg-[#b5001a] text-white border-none rounded px-8 py-6"
          >
            <a href="#gallery">Explore Models</a>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/40 px-8 py-6"
          >
            <a href="#contact">Book a Test Drive</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
