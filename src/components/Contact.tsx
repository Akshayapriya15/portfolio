import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      value: '+91 63806 51142',
      link: 'https://wa.me/916380651142',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Akshaya Priya',
      link: 'https://linkedin.com/in/akshayapriya-s-a-aba271274',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'Akshayapriya15',
      link: 'https://github.com/Akshayapriya15',
      color: 'from-slate-700 to-slate-900',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'akshayapriya15112004@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=akshayapriya15112004@gmail.com',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 63806 51142',
      link: 'tel:+916380651142',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                {method.label}
              </h3>
              <p className="text-slate-600 break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
            Reach out through any of the channels above, and I'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send an Email
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-300 text-center text-slate-600">
          <p className="mb-4">© 2024 Your Name. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
