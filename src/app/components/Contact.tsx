import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const contactItems = [
    { icon: Mail, title: "Lorem ipsum", detail: "lorem@ipsum.com" },
    { icon: Phone, title: "Lorem ipsum", detail: "+00 000 000 0000" },
    { icon: MapPin, title: "Lorem ipsum", detail: "Lorem ipsum city, dolor sit" },
  ];

  const socialIcons = [
    { Icon: Github, name: "GitHub" },
    { Icon: Linkedin, name: "LinkedIn" },
    { Icon: Twitter, name: "Twitter" },
  ];

  return (
    <section id="contactos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactos</h2>
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
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </motion.p>

            <div className="space-y-6 text-gray-700">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#1f2937",
                      borderColor: "#3b82f6",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                  <motion.div
                    className="pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm">{item.detail}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-4">Lorem ipsum</p>
              <div className="flex gap-4">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={social.name}
                    className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#3b82f6",
                      borderColor: "#3b82f6",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.Icon size={20} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-2 border-gray-300 p-6 sm:p-8 bg-white space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              borderColor: "#3b82f6",
            }}
          >
            {[
              { label: "Lorem ipsum", type: "text", placeholder: "Lorem ipsum dolor" },
              { label: "Lorem ipsum", type: "email", placeholder: "lorem@ipsum.com" },
              { label: "Lorem ipsum", type: "text", placeholder: "Dolor sit amet" },
            ].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <label className="block text-sm text-gray-700 mb-2">{field.label}</label>
                <motion.input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-12 w-full border-2 border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-gray-700 mb-2">Lorem ipsum</label>
              <motion.textarea
                rows={5}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className="w-full border-2 border-gray-300 p-3 text-sm resize-none focus:border-blue-500 focus:outline-none transition-colors"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.button
              className="h-12 w-full bg-gray-800 border-2 border-gray-800 text-white font-medium hover:bg-gray-900 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3b82f6",
                borderColor: "#3b82f6",
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Lorem ipsum
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
