export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre mi</h2>
          <div className="h-1 w-20 bg-gray-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat nibh in
              eros viverra, eu volutpat justo dignissim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor in
              risus posuere luctus a sit amet lorem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-gray-300 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>
            <div className="border-2 border-gray-300 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>
            <div className="border-2 border-gray-300 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>
            <div className="border-2 border-gray-300 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
