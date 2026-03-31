import { motion } from "motion/react";

const timeline = [
  {
    phase: "Analisis y planeacion",
    title: "Organizo primero la estructura del proyecto",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lectus ac lacus dapibus, a auctor metus posuere.",
    tags: ["Wireframes", "Arquitectura UI", "Planificacion"],
  },
  {
    phase: "Desarrollo",
    title: "Construyo interfaces y logica con enfoque practico",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet lorem non dui tincidunt, sed posuere augue condimentum.",
    tags: ["React", "Node.js", "APIs"],
  },
  {
    phase: "Entrega y mejora",
    title: "Pulo detalles visuales y funcionales",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque neque et mi molestie, vel maximus lectus rutrum.",
    tags: ["Responsive", "Testing visual", "Refactor"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Experiencia y enfoque</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.p
          className="mb-10 max-w-3xl text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <motion.article
              key={item.phase}
              className="grid gap-4 rounded-3xl border-2 border-gray-300 bg-gray-50 p-6 md:grid-cols-[180px_1fr]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                borderColor: "#3b82f6",
                boxShadow: "0 18px 36px rgba(0,0,0,0.08)",
              }}
            >
              <div className="pt-1 text-sm font-bold uppercase tracking-[0.12em] text-blue-600">
                {item.phase}
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
