import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./styles/timeline.css";
const timelineEvents = [
  {
    year: 2021,
    title: "Began University Journey",
    description:
      "The academic journey in Information Systems officially began.",
    details:
      "Entered Mercubuana University as an Information Systems major, laying the foundation with courses in system analysis, databases, and programming fundamentals.",
  },
  {
    year: 2022,
    title: "Joined the Education Division",
    description:
      "Started contributing through campus organizations focused on education.",
    details:
      "Became actively involved in organizing educational events, mentoring fellow students, and supporting academic growth within the student community.",
  },
  {
    year: 2023,
    title: "Appointed as a Laboratory Assistant",
    description:
      "Took part in assisting practical classes related to systems and technology.",
    details:
      "Supported lecturers during hands-on sessions, guided peers in understanding practical course materials, and helped manage lab operations efficiently.",
  },
  {
    year: 2024,
    title: "Joined RevoU Tech Academy",
    description:
      "Pursued advanced training in both data analytics and software engineering.",
    details:
      "Completed an intensive 4-month program focusing on Data Analytics and Software Engineering. Gained hands-on experience in data processing, visualization, and statistical analysis, as well as modern software development practices such as full-stack web development, API integration, and agile collaboration on real-world projects. Delivered a capstone project involving dashboard development using Chart.js and backend technologies.",
  },
  {
    year: 2024,
    title: "Internship under PKM Program",
    description:
      "Carried out a university-funded digital waste management project as part of the PKM initiative.",
    details:
      "Built a Laravel-based Waste Bank system enabling communities to record and manage waste transactions digitally. Conducted training sessions for community members, collaborated with lecturers to deploy the system in the field, and developed user documentation to ensure successful adoption and usability.",
  },
  {
    year: 2025,
    title: "Internship at Labschool Cirendeu",
    description: "Applied academic knowledge in a professional tech setting.",
    details:
      "Designed and developed educational web platforms including a tracer study system and responsive landing pages using Laravel. Enhanced digital services for the institution by improving user experience and system reliability across devices.",
  },
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef(null);

  return (
    <section className="py-14">
      <div className="max-w-7xl text-center mx-auto mb-10">
        <motion.div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            My Journey
          </h2>
          <p className="mt-4 text-md text-muted-foreground">
            The evolution of my experience through the years
          </p>
        </motion.div>
      </div>
      <div className="relative" ref={containerRef}>
        {/* Vertical Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"
          style={{ scaleY: 0.88 }}
        />

        {timelineEvents.map((event, index) => (
          <TimelineEvent
            key={event.year}
            event={event}
            index={index}
            isExpanded={expandedEvent === index}
            onToggle={() =>
              setExpandedEvent(expandedEvent === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );

  function TimelineEvent({
    event,
    index,
    isExpanded,
    onToggle,
  }: {
    event: {
      year: number;
      title: string;
      description: string;
      details: string;
    };
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
  }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className={`mb-8 flex justify-between items-center w-full ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}>
        <div className="w-5/12"></div>
        <div className="z-20">
          <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
        <motion.div
          className="w-5/12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggle}>
          <div className="p-4 bg-background rounded-lg border border-gray-200 shadow-sm hover:bg-[#fafafa] z-40">
            <span className="font-bold text-[#14b8a6]">{event.year}</span>
            <h3 className="text-sm md:text-lg font-semibold mb-1">
              {event.title}
            </h3>
            <p className="hidden md:block text-muted-foreground">
              {event.description}
            </p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden">
              <p className="hidden md:block mt-2 text-sm text-muted-foreground">
                {event.details}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}
