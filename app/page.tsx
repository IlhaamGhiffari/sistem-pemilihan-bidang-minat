"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Brain, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function StartPage() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d0a42] to-[#1a0523] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden relative">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple circles */}
        <motion.div
          className="absolute top-1/4 -left-20 w-64 h-64 bg-[#8a2be2]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#6a0dad]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-300/20"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            >
              {i % 4 === 0 && <Code size={24 + i * 8} />}
              {i % 4 === 1 && <Brain size={24 + i * 8} />}
              {i % 4 === 2 && <Sparkles size={24 + i * 8} />}
              {i % 4 === 3 && <Zap size={24 + i * 8} />}
            </motion.div>
          ))}
        </div>

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                width: "150%",
                top: `${20 + i * 15}%`,
                left: "-25%",
                transform: "rotate(-15deg)",
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                left: ["-25%", "-35%", "-25%"],
              }}
              transition={{
                duration: 8 + i,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Logo and branding */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-2">
              <span className="font-serif italic">N</span>
              <span className="text-white font-bold">GOBAR</span>
            </h1>
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 text-purple-300"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Sparkles />
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="font-serif italic text-2xl">X</span>
            <span className="font-serif italic text-2xl">Informatics</span>
            <span className="text-2xl font-bold">CLUB</span>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="text-lg font-light tracking-widest mb-2">SHOWCASE SESSION</div>
            <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Quiz title card */}
        <motion.div
          className="w-full mb-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-purple-500/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Kuis Minat Bidang Informatika</h2>
            <p className="text-base sm:text-lg text-purple-100/80 max-w-2xl mx-auto">
              Temukan bidang informatika yang paling sesuai dengan minat dan bakatmu. Jawab pertanyaan-pertanyaan
              berikut untuk mengetahui apakah kamu lebih cocok di bidang RPL, DMML, GIS, atau Jaringan.
            </p>
          </div>
        </motion.div>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/quiz">
            <motion.button
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] rounded-lg text-white font-bold text-lg sm:text-xl
              shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Mulai Quiz
                <motion.span animate={{ x: isHovering ? 5 : 0 }} transition={{ duration: 0.3 }}>
                  <ArrowRight />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: isHovering ? "0%" : "-100%",
                  opacity: isHovering ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Event details */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-4">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold">3</div>
              <div className="text-sm sm:text-base">
                <div>MEI</div>
                <div>2025</div>
              </div>
            </div>

            <div className="h-12 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">08.00</div>
              <div className="text-sm sm:text-base">WIB</div>
            </div>
          </div>

          <div className="text-sm sm:text-base tracking-wide opacity-80">GEDUNG D RUANG TEATER FMIPA USK</div>
        </motion.div>
      </div>
    </div>
  )
}
