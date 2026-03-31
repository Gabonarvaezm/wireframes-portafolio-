export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Gabriel Narvaez</h3>
            <p className="text-sm text-gray-300">
              Portafolio orientado a mostrar desarrollo web, diseño de interfaces y crecimiento
              constante como futuro profesional full stack.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Secciones clave</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Sobre mi</li>
              <li>Proyectos</li>
              <li>Habilidades</li>
              <li>Testimonios</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>gabrielnarvaez.dev@gmail.com</li>
              <li>+57 300 000 0000</li>
              <li>Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          Portafolio academico de Gabriel Narvaez, 2026.
        </div>
      </div>
    </footer>
  );
}
