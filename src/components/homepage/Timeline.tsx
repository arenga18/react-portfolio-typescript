import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./styles/timeline.css";

const timelineEvents = [
  {
    year: 2021,
    title: "First University College",
    description:
      "Our journey began with a passion for minimal design and floral artistry.",
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
  },
  {
    year: 2022,
    title: "Member of Education Division",
    description:
      "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    details:
      "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
  },
  {
    year: 2023,
    title: "Joined Laboratory Assistant",
    description:
      "Expanded our reach by bringing our creations to the digital world.",
    details:
      "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
  },
  {
    year: 2024,
    title: "Revou Tech Academy",
    description:
      "Partnered with leading lifestyle brands to create exclusive collections.",
    details:
      "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
  },
  {
    year: 2024,
    title: "PKM Hibah Mercubuana University",
    description: "Received the prestigious International Floral Design Award.",
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
  },
  {
    year: 2025,
    title: "Labschool Cirendeu",
    description: "Opened our first flagship store in the heart of Sydney.",
    details:
      "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
  },
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef(null);

  return (
    <section className="py-14 overflow-hidden">
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
          <div className="p-4 bg-background rounded-lg border border-gray-200 shadow-sm hover:bg-[#fafafa]">
            <span className="font-bold text-primary">{event.year}</span>
            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
            <p className="text-muted-foreground">{event.description}</p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden">
              <p className="mt-2 text-sm text-muted-foreground">
                {event.details}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}
