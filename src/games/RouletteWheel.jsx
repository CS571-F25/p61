// src/components/RouletteWheel.jsx
import { motion } from "framer-motion";

export default function RouletteWheel({ isSpinning, lastNumber }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
        transition={
          isSpinning
            ? { duration: 1, ease: "easeInOut" }
            : { duration: 0.2 }
        }
        style={{ position: "relative", width: 260, height: 260 }}
      >
        {/* Pointer at the top */}
        <div
          style={{
            position: "absolute",
            top: -18,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderBottom: "18px solid #222",
            zIndex: 3,
          }}
        />

        {/* Outer wheel */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundImage:
              "repeating-conic-gradient(#d62828 0deg 10deg, #000 10deg 20deg)",
            boxShadow: "0 8px 22px rgba(0, 0, 0, 0.25)",
            border: "6px solid #222",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner ring */}
          <div
            style={{
              width: "72%",
              height: "72%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #1b4332 0%, #081c15 65%)",
              border: "4px solid #f1f1f1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Center hub with last number */}
            <div
              style={{
                width: "45%",
                height: "45%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #f8f9fa 0%, #dee2e6 100%)",
                border: "3px solid #222",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "800",
                  color: "#222",
                  lineHeight: 1,
                }}
              >
                {lastNumber === null ? "–" : lastNumber}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  opacity: 0.7,
                  marginTop: 2,
                }}
              >
                Last
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
