import { motion } from "motion/react";
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
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="border-2 border-gray-300 bg-white hover:border-gray-800 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="aspect-video bg-gray-200 border-b-2 border-gray-300 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={`Proyecto ${project.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="p-6 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-xl font-semibold text-gray-900"
                  whileHover={{ scale: 1.02, color: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Lorem ipsum dolor sit amet
                </motion.h3>

                <motion.p
                  className="text-gray-700"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 pt-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {['Lorem', 'Ipsum', 'Dolor'].map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs border border-gray-400 bg-gray-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + index * 0.1 + tagIndex * 0.1,
                        type: "spring"
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#3b82f6",
                        color: "white",
                        borderColor: "#3b82f6"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
