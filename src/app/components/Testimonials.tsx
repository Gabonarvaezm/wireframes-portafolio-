import { motion } from "motion/react";

const testimonials = [
  {
    title: "Compañero de proyecto",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem eu turpis vestibulum, sed tincidunt neque sodales.",
    note: "Trabajo colaborativo y apoyo tecnico",
  },
  {
    title: "Revision academica",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra augue at quam posuere, ac gravida risus porttitor.",
    note: "Enfoque integral y mejora continua",
  },
  {
    title: "Cliente simulado",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue ac ipsum luctus, sed tristique tortor hendrerit.",
    note: "Claridad, criterio y funcionalidad",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Testimonios</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.title}
              className="relative rounded-3xl border-2 border-gray-300 bg-white p-7"
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
              <div className="absolute right-5 top-4 text-6xl font-extrabold leading-none text-blue-100">
                "
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="relative text-gray-700">{item.text}</p>
              <div className="mt-5 text-sm text-gray-500">{item.note}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
