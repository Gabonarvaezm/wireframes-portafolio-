import { motion } from "motion/react";

export function About() {
  const stats = [
    { number: "12+", label: "Tecnologias dominadas" },
    { number: "6", label: "Areas de trabajo" },
    { number: "100%", label: "Enfoque responsive" },
    { number: "24/7", label: "Aprendizaje continuo" },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre mi</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6 text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat nibh in
              eros viverra, eu volutpat justo dignissim.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor in
              risus posuere luctus a sit amet lorem.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="border-2 border-gray-300 p-6 text-center"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  borderColor: "#3b82f6",
                }}
              >
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
