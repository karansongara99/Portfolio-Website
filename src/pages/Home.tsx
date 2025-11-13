import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Karan Songara
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 font-medium"
          >
            I'm a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Full Stack Web Developer
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions with expertise in React, MERN Stack, PHP, and Laravel.
            I transform ideas into elegant, functional applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link to="/projects">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">7+</p>
            <p className="text-gray-600 mt-2">Client Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600 mt-2">Live Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">15+</p>
            <p className="text-gray-600 mt-2">Completed</p>
          </div>
        </motion.div>
      </div>
    </div>
    <About />
    <Education />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    </>
  );
};

export default Home;
