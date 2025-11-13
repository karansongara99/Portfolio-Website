import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={40} />,
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      icon: <Server size={40} />,
      skills: ['Node.js', 'Express', 'PHP', 'Laravel', 'REST APIs', '.Net Core Web API'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Database',
      icon: <Database size={40} />,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Tools',
      icon: <Wrench size={40} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-2xl text-white mb-4`}>
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
