import { motion } from "framer-motion";
import { 
  Gauge, 
  Shield, 
  BadgeCheck, 
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Gauge size={32} />,
    title: "Superior Performance",
    desc: "Experience acceleration from 0 to 100 km/h in as little as 2.8 seconds, powered by cutting-edge engineering.",
  },
  {
    icon: <Shield size={32} />,
    title: "Uncompromising Safety",
    desc: "Advanced driver assistance systems and precision handling ensure protection without sacrificing the driving experience.",
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "Iconic Design",
    desc: "Unmistakable silhouettes that combine timeless elegance with cutting-edge aerodynamics.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Legendary Heritage",
    desc: "Over 70 years of motorsport success and engineering excellence in every vehicle we create.",
  },
];

const FeaturesSection = () => (
  <section
    id="features"
    className="bg-white py-24 px-4"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">The Porsche Difference</h2>
        <div className="w-20 h-1 bg-[#d5001c] mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          When you choose Porsche, you're choosing more than a car. You're choosing an unparalleled driving experience.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <Card className="border border-gray-200 h-[17rem] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="pt-6">
                <motion.div 
                  className="text-[#d5001c] mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-20 bg-gray-100 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 items-center">
          <motion.div 
            className="p-8 md:p-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Precision Engineering</h3>
            <p className="text-gray-600 mb-6">
              Every Porsche is a perfect combination of performance and everyday usability. 
              We build cars that excel not just on the racetrack, but in everyday driving.
            </p>
            <motion.ul 
              className="space-y-2 text-gray-600"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.li 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <BadgeCheck className="text-[#d5001c] mr-2" size={20} />
                <span>Twin-turbocharged engines for maximum power delivery</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <BadgeCheck className="text-[#d5001c] mr-2" size={20} />
                <span>PDK transmission for lightning-fast gear changes</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <BadgeCheck className="text-[#d5001c] mr-2" size={20} />
                <span>All-wheel drive systems for perfect traction</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div 
            className="h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" 
              alt="Porsche Engine" 
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
