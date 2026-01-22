import { Code2, Palette, Rocket } from 'lucide-react';

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
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating
              seamless digital experiences. With expertise in modern web technologies, I bring
              ideas to life through code.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether it's building responsive websites, crafting intuitive user interfaces,
              or solving complex problems, I approach every project with dedication and attention
              to detail.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm always eager to learn new technologies and take on challenging projects that
              push the boundaries of what's possible on the web.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="font-medium">Location</span>
                <span>Your City, Country</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="font-medium">Experience</span>
                <span>X+ Years</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="font-medium">Projects</span>
                <span>XX+ Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Availability</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Available</span>
              </div>
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
