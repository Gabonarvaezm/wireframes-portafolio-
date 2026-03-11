import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contactos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactos</h2>
          <div className="h-1 w-20 bg-gray-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-gray-900">Lorem ipsum</p>
                  <p className="text-sm">lorem@ipsum.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-gray-900">Lorem ipsum</p>
                  <p className="text-sm">+00 000 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-gray-900">Lorem ipsum</p>
                  <p className="text-sm">Lorem ipsum city, dolor sit</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-gray-700 mb-4">Lorem ipsum</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors cursor-pointer">
                  <Github size={20} />
                </div>
                <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={20} />
                </div>
                <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors cursor-pointer">
                  <Twitter size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300 p-6 sm:p-8 bg-white space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Lorem ipsum</label>
              <input
                type="text"
                placeholder="Lorem ipsum dolor"
                className="h-12 w-full border-2 border-gray-300 px-3 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Lorem ipsum</label>
              <input
                type="email"
                placeholder="lorem@ipsum.com"
                className="h-12 w-full border-2 border-gray-300 px-3 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Lorem ipsum</label>
              <input
                type="text"
                placeholder="Dolor sit amet"
                className="h-12 w-full border-2 border-gray-300 px-3 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Lorem ipsum</label>
              <textarea
                rows={5}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className="w-full border-2 border-gray-300 p-3 text-sm resize-none"
              />
            </div>

            <button className="h-12 w-full bg-gray-800 border-2 border-gray-800 text-white font-medium">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
