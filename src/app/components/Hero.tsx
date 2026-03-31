import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 pt-16">
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-12 md:grid-cols-2 lg:gap-16">
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
              className="mx-auto aspect-square max-w-lg overflow-hidden rounded-[2rem] border-2 border-gray-300 bg-gray-200 shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="/image.png"
                alt="Foto de perfil de Gabriel Narvaez"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
