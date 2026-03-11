import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 border-2 border-gray-800 flex items-center justify-center">
              <span className="font-bold">GB</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#sobre-mi" className="text-gray-700 hover:text-gray-900 transition-colors">
              Sobre mi
            </a>
            <a href="#proyectos" className="text-gray-700 hover:text-gray-900 transition-colors">
              Proyectos
            </a>
            <a href="#habilidades" className="text-gray-700 hover:text-gray-900 transition-colors">
              Habilidades
            </a>
            <a href="#contactos" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contactos
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-300 bg-white">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#sobre-mi"
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mi
            </a>
            <a
              href="#proyectos"
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </a>
            <a
              href="#contactos"
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
