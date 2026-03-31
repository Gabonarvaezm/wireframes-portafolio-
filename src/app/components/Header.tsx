import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#sobre-mi", label: "Sobre mi" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#aprendizaje", label: "Aprendizaje" },
    { href: "#contactos", label: "Contactos" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-10 h-10 border-2 border-gray-800 flex items-center justify-center cursor-pointer"
              whileHover={{
                borderColor: "#3b82f6",
                boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-bold">GB</span>
            </motion.div>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: "#3b82f6",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden border-t border-gray-300 bg-white overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{
                    x: 10,
                    color: "#3b82f6",
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
