import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
            SA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Akshayapriya</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Java Backend Developer
 | Designer | Problem Solver
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional web experiences with modern technologies.
            Passionate about clean code, elegant design, and innovative solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get In Touch
          </button>
          <a
            href="resume.pdf"
            download
            className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}