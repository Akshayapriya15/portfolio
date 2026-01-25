import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Leaf Disease Detection',
      description: 'Deep learning system that identifies and classifies 33 different types of leaf diseases using transfer learning and CNN models, helping agricultural professionals diagnose plant health issues.',
      image: 'leaf1.jpg',
      tags: ['Python', 'Deep Learning', 'TensorFlow', 'Transfer Learning'],
      github: 'https://github.com/Akshayapriya15/leaf-disease-detect.git',
      live: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application built using the MERN stack with secure user authentication, one-to-one messaging, and persistent chat history stored in MongoDB.',
      image: 'chat.jpg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#',
    },
    {
      title: 'Forensic Face Sketch Construction & Recognition',
      description: 'Forensic application that enables construction of composite face sketches using facial components and matches the generated sketch with a criminal database using deep learning and face recognition techniques.',
      image: 'Face1.jpg',
      tags: ['Python', 'Deep Learning', 'Computer Vision', 'Face Recognition', 'CNN'],
      github: '#',
      live: '#',
    },
    {
      title: 'Indian Sign Language Detection',
      description: 'Machine learning based system for recognizing Indian Sign Language (ISL) hand gestures using image preprocessing, and Support Vector Machine (SVM) classification to enable accessible communication.',
      image: 'Sign.jpg',
      tags: ['Python', 'Machine Learning', 'OpenCV', 'SVM'],
      github: '#',
      live: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive personal portfolio website showcasing my projects, skills, and experience with a clean UI, smooth animations, and modern design principles.',
      image: 'portfolio.jpg',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Akshayapriya15/portfolio.git',
      live: 'https://portfolio-ten-rose-59947qvj4d.vercel.app/',
    },
    {
      title: 'Core Java Programs & OOP Concepts',
      description: 'Collection of Core Java programs covering fundamentals and Object-Oriented Programming concepts such as encapsulation, classes, objects, and basic problem-solving examples.',
      image: 'Java1.jpg',
      tags: ['Java', 'OOP', 'Core Java'],
      github: 'https://github.com/Akshayapriya15/JAVA.git',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
