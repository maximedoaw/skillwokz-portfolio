import { ChevronDown, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className=" min-h-screen mt-13 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Badge */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <img src="img1.jpg" alt="Avatar" className="w-full h-full rounded-full" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Je suis{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Maxime Doaw
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Développeur Full Stack passionné par la création d'applications web modernes et performantes
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToProjects}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg flex items-center gap-2 shadow-lg"
            >
              Voir mes projets
              <ChevronDown className="w-5 h-5" />
            </button>
            <a
              href="https://wa.me/677271237"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg"
            >
              Me contacter
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/maximedoaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/maxime-doaw-5849b8293"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:maximedoaw204@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}