/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialCard = ({
  name,
  role,
  text,
  bgColor,
  initial,
  rating,
}: any) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-current" : "opacity-30"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-white/80 italic mb-4">"{text}"</p>
      </div>
      <div className="flex items-center mt-6">
        <div
          className={`${bgColor} h-10 w-10 rounded-full flex items-center justify-center text-white font-bold`}
        >
          {initial}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{name}</p>
          <p className="text-white/60 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael T.",
      role: "Software Developer",
      text: "This service has completely changed how I handle online signups...",
      bgColor: "bg-indigo-400",
      initial: "M",
      rating: 4, // Full 5 stars
    },
    {
      name: "Sarah K.",
      role: "Digital Marketer",
      text: "I love how easy it is to create and manage disposable emails...",
      bgColor: "bg-pink-400",
      initial: "S",
      rating: 4, // 4 stars
    },
    {
      name: "Rudrax Singh",
      role: "Css God",
      text: "Sax-Sux kro itna nahi sochte",
      bgColor: "bg-green-400",
      initial: "Rx",
      rating: 5, // 3 stars
    },
  ];

  return (
    <motion.div
      className="mt-24 md:mt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </motion.div>
  );
}
