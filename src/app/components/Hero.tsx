export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-12">
          <div className="order-2 md:order-1">
            <div className="bg-gray-800 border-2 border-gray-900 p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                GABRIEL NARVAEZ
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed">
                Codigo limpio, APIs solidas, deploy continuo.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-square max-w-lg mx-auto border-2 border-gray-300 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-sm tracking-wide">FOTO DE PERFIL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
