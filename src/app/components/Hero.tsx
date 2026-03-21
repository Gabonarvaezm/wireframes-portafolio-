import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 bg-gray-50 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-12">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-gray-800 border-2 border-gray-900 p-8 md:p-10"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                GABRIEL NARVAEZ
              </motion.h1>
              <motion.p
                className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Codigo limpio, APIs solidas, deploy continuo.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="aspect-square max-w-lg mx-auto border-2 border-gray-300 bg-gray-200 flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="text-center text-gray-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-sm tracking-wide">FOTO DE PERFIL</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
