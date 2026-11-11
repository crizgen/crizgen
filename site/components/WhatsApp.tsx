"use client";

import { motion } from "motion/react";
import { CONTACT } from "@/lib/content";

export default function WhatsApp() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Crizgen on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.6 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-5 right-5 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.175.2-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.301-.501.1-.2.05-.376-.025-.526s-.677-1.631-.928-2.235c-.244-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01s-.526.075-.802.376c-.276.301-1.053 1.028-1.053 2.508s1.078 2.909 1.228 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.721.23 1.378.197 1.9.12.581-.087 1.782-.727 2.032-1.429.25-.701.25-1.303.175-1.429-.075-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.986.58 3.844 1.583 5.412L2 22l4.733-1.554c1.513.882 3.27 1.385 5.144 1.385 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2z" />
      </svg>
    </motion.a>
  );
}
