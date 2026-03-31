import { motion } from "motion/react";

const cards = [
  {
    title: "Temas que estoy fortaleciendo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nibh vel sem posuere finibus quis eu mauris.",
    items: ["Arquitectura de componentes", "Buenas practicas de backend", "Optimizacion responsive"],
  },
  {
    title: "Enfoque de crecimiento",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget arcu quis mauris maximus varius a in quam.",
    items: ["Control de versiones", "Despliegue en la nube", "Documentacion tecnica"],
  },
  {
    title: "Objetivo profesional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue est sed mauris feugiat, id tristique nibh facilisis.",
    items: ["Aplicaciones completas", "Interfaces memorables", "Codigo mantenible"],
  },
];

export function Learning() {
  return (
    <section id="aprendizaje" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Aprendizaje continuo</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="rounded-3xl border-2 border-gray-300 bg-gray-50 p-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                borderColor: "#3b82f6",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
              <ul className="mt-5 space-y-3 text-gray-700">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
