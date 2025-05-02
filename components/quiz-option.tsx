"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface QuizOptionProps {
  id: string
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
  isMobile: boolean
  delay?: number // Optional animation delay
}

export function QuizOption({ id, isSelected, onClick, children, isMobile, delay = 0 }: QuizOptionProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}>
      <Card
        className={`
          relative overflow-hidden cursor-pointer transition-all duration-300 border-0
          ${
            isSelected
              ? "bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] text-white shadow-lg shadow-purple-900/30 scale-[1.02]"
              : "bg-white/10 backdrop-blur-sm hover:bg-white/15"
          }
        `}
        onClick={onClick}
      >
        <div className="p-4 sm:p-6 relative z-10" style={{ minHeight: isMobile ? "80px" : "100px" }}>
          <div className="text-center text-sm sm:text-base">{children}</div>
        </div>

        {/* Decorative diagonal line when selected */}
        {isSelected && (
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -right-4 -bottom-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rotate-45 transform origin-bottom-right"></div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}

// Enhanced version with hover effects
export function QuizOptionEnhanced({ id, isSelected, onClick, children, isMobile, delay = 0 }: QuizOptionProps) {
  const [isHovering, setIsHovering] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Card
        className={`
          relative overflow-hidden cursor-pointer transition-all duration-300 border-0
          ${
            isSelected
              ? "bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] text-white shadow-lg shadow-purple-900/30 scale-[1.02]"
              : "bg-white/10 backdrop-blur-sm hover:bg-white/15"
          }
        `}
        onClick={onClick}
      >
        <div className="p-4 sm:p-6 relative z-10" style={{ minHeight: isMobile ? "80px" : "100px" }}>
          <div className="text-center text-sm sm:text-base">{children}</div>
        </div>

        {/* Decorative diagonal line when selected */}
        {isSelected && (
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -right-4 -bottom-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rotate-45 transform origin-bottom-right"></div>
          </motion.div>
        )}

        {/* Hover effect */}
        {!isSelected && (
          <motion.div
            className="absolute inset-0 bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Card>
    </motion.div>
  )
}
