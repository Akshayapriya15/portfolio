import { Code2, Palette, Rocket, Download } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Beautiful Design',
      description: 'Creating intuitive and visually stunning user experiences.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Delivery',
      description: 'Delivering high-quality projects on time, every time.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <div className="w-80 h-96 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-2xl opacity-60"></div>
              <img
                src="aki.jpg"
                alt="Profile"
                className="w-full h-full rounded-3xl object-cover shadow-2xl relative z-10 border-4 border-white"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Backend Development Is My Passion
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I am a Computer Science Engineering student with a strong interest in software development and backend technologies. I am passionate about building efficient, scalable applications and continuously improving my technical skills.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
             I have a solid foundation in Core Java, Object-Oriented Programming, Data Structures & Algorithms, and MySQL. I have completed internships in Java Full Stack Development and Web Development, where I gained hands-on experience in backend logic, database operations, and frontend fundamentals using HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
             Currently, I am enhancing my skills in Spring Boot and the Java Collections Framework, and working on mini-projects to apply my knowledge to real-world scenarios. I am familiar with Git and GitHub for version control and actively practice problem-solving to strengthen my logical thinking.
            </p>
            <div className="pt-4">
              <a
                href="resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
