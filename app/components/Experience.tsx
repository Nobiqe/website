"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "ARTA",
      location: "Bonab, East Azerbaijan Province, Iran",
      period: "March 2025 - Present",
      role: "Artificial Intelligence Engineer (entry level)",
      responsibilities: [
        "Supporting AI projects in natural language processing (NLP) as an entry-level engineer",
        "Learning and applying Python for model development and implementation",
        "Utilizing Git for team collaboration and version control in AI projects",
        "Adapting to Linux environments to build and test machine learning solutions",
        "Gaining hands-on experience in AI technologies under supervision",
      ],
    },
    {
      company: "Pirooz Pardaz",
      location: "Bonab, East Azerbaijan Province, Iran",
      period: "2022 - 2023",
      role: "Junior Network Engineer",
      responsibilities: [
        "Independently designed and implemented network infrastructure for a new university building",
        "Led network setup for the expansion of the COVID-19 ward at Imam Bonab Hospital",
        "Ensured reliable and efficient connectivity for academic and healthcare purposes",
        "Collaborated with teams to enhance service delivery under urgent conditions",
        "Maintained and troubleshot network systems to ensure optimal performance",
      ],
    },
    {
      company: "Pirooz Pardaz",
      location: "Bonab, East Azerbaijan Province, Iran",
      period: "2021 - 2022",
      role: "Network Engineer (entry-level)",
      responsibilities: [
        "Assisted in the deployment of computer networks for governmental and private industrial offices",
        "Contributed to the setup and configuration of network systems",
        "Gained foundational experience in network engineering through hands-on involvement",
        "Supported connectivity needs across various sectors",
        "Worked closely with teams to ensure timely completion of installations",
      ],
    },
    {
      company: "Pirooz Pardaz",
      location: "Bonab, East Azerbaijan Province, Iran",
      period: "2019 - 2021",
      role: "Laptop and Computer Repair Technician",
      responsibilities: [
        "Repaired and maintained laptops and desktops, troubleshooting hardware and software issues",
        "Delivered timely and effective technical solutions under company supervision",
        "Contributed to high-quality service standards and client satisfaction",
        "Developed expertise in diagnosing and resolving technical problems",
        "Enhanced operational efficiency within a structured team environment",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

