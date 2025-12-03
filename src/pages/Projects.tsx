import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: 'Ai ChatBot',
      description: 'Developed an intelligent AI ChatBot Assistant powered by the OpenAI API. The application enables real-time human-like interactions with context-aware responses, designed with a modern and responsive UI.',
      image: 'https://strategicpa.ecohmedia.com/wp-content/uploads/2025/07/STRATEGIC-S-37-sfondo-Chatbot-servizi-pubblici-800x456-1.jpg',
      liveUrl: 'https://captiaichat.netlify.app/',
      codeUrl: 'https://github.com/karansongara99/Prompt-Generator-AI-Assistant-Fronted',
      tags: ['React', 'Node.js', 'MongoDB','OpenAI API','Tailwind CSS','Express.js'],
    },
   
    {
      title: 'Real Time Collaboration Environment',
      description: 'Built a real-time collaborative development platform featuring live code updates, shared team workspaces, and progress tracking. Integrated Socket.io for real-time communication and MongoDB for persistent data storage.',
      image: 'https://media.licdn.com/dms/image/v2/C4E12AQElJueRcVaSFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1543954512034?e=2147483647&v=beta&t=avRwXE95Tm1o_LUV8808Khxnj_L4g6EqNQuTAHGsvS4',
      liveUrl: '',
      codeUrl: 'https://github.com/karansongara99/Real-Time-Collaboration-Environemnt',
      tags: ['React', 'Express.js', 'Node.js','Socket.io','MongoDB','Tailwind CSS'],
    },
     {
      title: 'HR Admin Panel',
      description: 'Developed a centralized HR Management Panel for employee data, attendance, and payroll management. Features real-time analytics and data visualization for improved HR decision-making. Tech Stack: Laravel, PHP, MySQL',
      image: 'https://i0.wp.com/menaitech.com/wp-content/uploads/2025/03/HRnew.jpg?fit=900%2C506&ssl=1',
      liveUrl: '',
      codeUrl: '',
      tags: ['Laravel','MySQL','PHP'],
    },
    {
      title: 'News Website',
      description: 'Designed and developed a responsive news website platform enabling news access and live News.Org API Integrated for real-time updates. Tech Stack: React, Node.js, Express.js, News.Org API',
      image: 'https://images.news18.com/ibnlive/uploads/2025/08/World-News-AI-Blog-2025-07-71d087050940689d8621058405992e8c.jpg',
      liveUrl: 'https://captilnews.netlify.app/',
      codeUrl: 'https://github.com/karansongara99/News-Website',
      tags: ['Node.js', 'MongoDB','Express.js','React','News.Org API'],
    },
    {
      title: 'Dynamic Data Visualization',
      description: 'Implemented an interactive data visualization dashboard that transforms complex datasets into clear, dynamic charts. Utilized D3.js and Recharts for visually appealing and insightful analytics. Tech Stack: React, D3.js, Chart.js, Recharts',
      image: 'https://ik.imagekit.io/edtechdigit/usdsi/content/images/articles/explore-the-vital-role-of-data-visualisation-in-data-science.jpeg',
      liveUrl: 'https://captilance-data-visualizer.netlify.app/',
      codeUrl: 'https://github.com/karansongara99/Dynamic-Data-Visualizer',
      tags: ['React','D3.js','Chart.js','Recharts'],
    },
     {
      title: 'Logistics Management System',
      description: 'Developed a comprehensive Logistics Management System to manage logistics records ,shipping, and delivery. Integrated with .NET Core Web API and SQL Server for secure and scalable data handling.',
      image: 'https://etimg.etb2bimg.com/photo/118316548.cms',
      liveUrl: '',
      codeUrl: 'https://github.com/karansongara99/Logistic-Management-System-Backend',
      tags: ['React', '.Net Core Web API','MS SQL Server','C#'],
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
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
