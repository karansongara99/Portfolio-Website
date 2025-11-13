import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      icon: <BookOpen size={32} />,
      title: 'Secondary Education',
      institution: 'Krishna International School',
      duration: '2020 - 2021',
      board: 'Central Board',
      side: 'left',
    },
    {
      icon: <Award size={32} />,
      title: 'Diploma in Computer Engineering',
      institution: 'Darshan University',
      duration: '2021 - 2024',
      board: 'Computer Engineering',
      side: 'right',
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'Darshan University',
      duration: '2024 - 2027',
      board: 'Computer Science & Engineering',
      side: 'left',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: edu.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  edu.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                <div className={`w-full md:w-5/12 ${edu.side === 'right' ? 'md:text-right' : ''}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                    <div className={`flex items-center gap-3 mb-4 ${edu.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full text-white">
                        {edu.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.title}</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">{edu.institution}</p>
                    <p className="text-blue-600 font-medium mb-2">{edu.duration}</p>
                    <p className="text-gray-600">{edu.board}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
