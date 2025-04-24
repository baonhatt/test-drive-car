import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    alt: "Porsche 911",
    title: "911",
    desc: "The timeless sports car, since 1963"
  },
  {
    src: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Porsche Taycan",
    title: "Taycan",
    desc: "Pure electric performance"
  },
  {
    src: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    alt: "Porsche Cayenne",
    title: "Cayenne",
    desc: "Sports car spirit, SUV capability"
  },
  {
    src: "https://images.unsplash.com/photo-1611859266720-147cc87658f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Porsche Panamera",
    title: "Panamera",
    desc: "Luxury and performance in perfect balance"
  },
];

const GallerySection = () => (
  <section id="gallery" className="bg-gray-50 py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Models</h2>
        <div className="w-20 h-1 bg-[#d5001c] mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the perfect blend of performance, design, and innovation across our model range.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="p-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg h-[18rem]">
                    <motion.div 
                      className="aspect-video relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <CardContent className="py-4">
                      <motion.h3 
                        className="text-xl font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {img.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {img.desc}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CarouselNext className="relative inset-0 translate-y-0 right-0" />
            </motion.div>
          </div>
        </Carousel>
      </motion.div>

      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded text-white bg-[#d5001c] hover:bg-[#b5001a] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Test Drive
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
