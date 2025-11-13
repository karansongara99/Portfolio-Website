import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import img from '../Ellipse 2.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
              <img
                src={img}
                alt="Karan Songara"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Hello! I'm Karan Songara, a passionate Full Stack Web Developer with expertise in building
                modern, scalable web applications. With a strong foundation in both frontend and backend
                technologies, I specialize in creating seamless user experiences that blend beautiful design
                with powerful functionality.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in web development has been driven by curiosity and a commitment to continuous
                learning. I excel in React, MERN Stack, PHP, and Laravel, and I'm dedicated to writing clean,
                maintainable code. I believe in the power of technology to solve real-world problems and create
                meaningful impact through innovative solutions.
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              <Download size={20}  />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
