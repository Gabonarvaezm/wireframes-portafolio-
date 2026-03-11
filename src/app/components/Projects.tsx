import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMTUwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc3MzIyMzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzMxODYyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMxNDk5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos</h2>
          <div className="h-1 w-20 bg-gray-400"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="border-2 border-gray-300 bg-white hover:border-gray-800 transition-colors">
              <div className="aspect-video bg-gray-200 border-b-2 border-gray-300 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={`Proyecto ${project.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Lorem ipsum dolor sit amet</h3>

                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 text-xs border border-gray-400 bg-gray-100">Lorem</span>
                  <span className="px-3 py-1 text-xs border border-gray-400 bg-gray-100">Ipsum</span>
                  <span className="px-3 py-1 text-xs border border-gray-400 bg-gray-100">Dolor</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
