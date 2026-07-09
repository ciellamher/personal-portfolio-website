"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function WelcomeScreen() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Show only once per session
  useEffect(() => {
    const seen = sessionStorage.getItem("welcome_seen");
    if (!seen) {
      setVisible(true);
    }
  }, []);

  // Auto-dismiss after 3 seconds
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setLeaving(true);
      sessionStorage.setItem("welcome_seen", "true");
      setTimeout(() => setVisible(false), 600);
    }, 3000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="ws-overlay"
        >
          {/* Subtle dot-grid background — same vibe as the portfolio */}
          <div className="ws-dotgrid" />

          {/* Card — matches the portfolio's white card style */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="ws-card"
          >
            {/* Top status pill — matches portfolio's "Contact" pill style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="ws-pill"
            >
              <span className="ws-pill-dot" />
              Portfolio · 2026
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="ws-photo-wrap"
            >
              <img src="/me.jpeg" alt="Graciella Jimenez" className="ws-photo" />
            </motion.div>

            {/* Name — exact same style as portfolio h1 */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="ws-name"
            >
              Graciella Jimenez
            </motion.h1>

            {/* Location — same as portfolio's MapPin row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="ws-location"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Pampanga, Philippines
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
              className="ws-divider"
            />

            {/* Description split into two clean lines */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="ws-description"
            >
              BS in Computer Science Student<br />
              Notion Campus Leader at Holy Angel University
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.3 }}
              className="ws-progress-track"
            >
              <motion.div
                className="ws-progress-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.0, duration: 2.0, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Footer — matches portfolio footer style */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="ws-footer"
          >
            graciellajimenez.com
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
