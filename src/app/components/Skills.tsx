export function Skills() {
  const skillCategories = [
    { title: 'Frontend', skills: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'] },
    { title: 'Backend', skills: ['Lorem', 'Ipsum', 'Dolor', 'Sit'] },
    { title: 'Herramientas', skills: ['Lorem', 'Ipsum', 'Dolor'] },
    { title: 'Diseno', skills: ['Lorem', 'Ipsum', 'Dolor'] },
  ];

  return (
    <section id="habilidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades</h2>
          <div className="h-1 w-20 bg-gray-400"></div>
        </div>

        <p className="text-gray-700 max-w-3xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-2 border-gray-300 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {category.skills.map((skill) => (
                  <li key={`${category.title}-${skill}`}>Lorem ipsum</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
