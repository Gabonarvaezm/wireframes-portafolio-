import { motion } from "motion/react";

const items = [
  {
    title: "Interfaces limpias",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere velit sed sem porta, nec efficitur lectus malesuada.",
  },
  {
    title: "Logica funcional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida eros a neque faucibus, at faucibus justo faucibus.",
  },
  {
    title: "Mejora constante",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros vel justo tristique fermentum in quis odio.",
  },
];

export function Value() {
  return (
    <section id="valor" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Lo que aporto</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-3xl border-2 border-gray-300 bg-white p-7"
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
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="leading-relaxed text-gray-700">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
