import { motion } from 'framer-motion';
import { Briefcase, Users, Globe } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    { icon: <Globe size={24} />, text: 'Live Hosting & Deployment', color: 'from-blue-500 to-blue-600' },
    { icon: <Users size={24} />, text: 'Client Communication & Management', color: 'from-green-500 to-green-600' },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Briefcase size={48} className="text-white" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Full Stack Web Developer</h3>
              <p className="text-xl text-gray-600 mb-2">MDIDM Infoway.</p>
              <p className="text-lg text-blue-600 font-semibold">6 Months Experience</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'MongoDB', 'Express', 'PHP', 'Laravel', 'MySQL'].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800 rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Key Responsibilities</h4>
            <div className="space-y-4">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg text-white flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              7+
            </p>
            <p className="text-gray-600 font-medium">Client Projects</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              10+
            </p>
            <p className="text-gray-600 font-medium">Live Projects</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              15+
            </p>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
