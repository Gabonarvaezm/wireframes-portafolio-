import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    { title: 'Frontend', skills: ['Angular', 'JavaScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'CSS', 'TypeScript'] },
    { title: 'Backend', skills: ['Node.js', 'Python', 'MySQL', 'SQLite', 'Java', 'Express.js'] },
    { title: 'Herramientas', skills: ['Git y GitHub', 'Postman', 'VS Code', 'Vercel', 'Trello', 'Notion'] },
    { title: 'Diseno', skills: ['Figma', 'Canva', 'Wireframing', 'Prototipado', 'Diseno responsive', 'Jerarquia visual'] },
  ];

  return (
    <section id="habilidades" className="py-24 bg-white relative overflow-hidden">
      {/* Animated background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades</h2>
          <motion.div
            className="h-1 w-20 bg-gray-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.p
          className="text-gray-700 max-w-3xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="border-2 border-gray-300 p-6"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                borderColor: "#3b82f6",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              <motion.ul
                className="space-y-2 text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={`${category.title}-${skill}`}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      color: "#2563eb",
                      x: 5,
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.1 + skillIndex * 0.1,
                        type: "spring"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.5, backgroundColor: "#1d4ed8" }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
