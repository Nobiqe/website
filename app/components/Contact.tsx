"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, MessageSquare, ExternalLink } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      label: "Email",
      value: "ebrahimnobiqe@gmail.com",
      href: "mailto:ebrahimnobiqe@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/ebrahim-nezamparast-bonab-6716b3354",
    },
    {
      icon: <Github className="w-6 h-6 text-blue-600" />,
      label: "GitHub",
      value: "Nobiqe",
      href: "https://github.com/Nobiqe",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      label: "Telegram",
      value: "@Ebrahimbonab",
      href: "https://t.me/Ebrahimbonab",
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-blue-600" />,
      label: "Linktree",
      value: "linktr.ee/Nobiqe",
      href: "https://linktr.ee/Nobiqe",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      label: "Location",
      value: "Bonab, East Azerbaijan Province, Iran",
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Get in Touch" />

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">Connect With Me</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactLinks.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <div className="mr-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                        <p className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center p-4 rounded-lg">
                      <div className="mr-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full">{contact.icon}</div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

