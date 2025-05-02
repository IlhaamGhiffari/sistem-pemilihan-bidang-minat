"use client";

import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { QuizOption } from "@/components/quiz-option";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";

type ScoreType = {
  RPL: number;
  DMML: number;
  GIS: number;
  Jaringan: number;
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scores, setScores] = useState<ScoreType>({
    RPL: 0,
    DMML: 0,
    GIS: 0,
    Jaringan: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [topSpecialization, setTopSpecialization] = useState<string>("");
  const [secondSpecialization, setSecondSpecialization] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useMobile();

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Determine top specializations when showing results
  useEffect(() => {
    if (showResult) {
      const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      setTopSpecialization(sortedScores[0][0]);
      setSecondSpecialization(sortedScores[1][0]);
    }
  }, [showResult, scores]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(`option${optionIndex + 1}`);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    // Get the selected answer's points
    const selectedAnswerIndex =
      Number.parseInt(selectedOption.replace("option", "")) - 1;
    const points =
      questions[currentQuestion].answers[selectedAnswerIndex].points;

    // Update scores
    setScores((prevScores) => {
      const newScores = { ...prevScores };
      for (const field in points) {
        newScores[field as keyof ScoreType] +=
          points[field as keyof typeof points];
      }
      return newScores;
    });

    setIsTransitioning(true);

    // Short delay for transition effect
    setTimeout(() => {
      // Move to next question or show results
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
      setIsTransitioning(false);
    }, 500);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScores({
      RPL: 0,
      DMML: 0,
      GIS: 0,
      Jaringan: 0,
    });
    setShowResult(false);
    setShowWelcomePage(true);
  };

  const startQuiz = () => {
    setShowWelcomePage(false);
  };

  // Welcome page
  if (showWelcomePage) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-[#2d0a42] to-[#1a0523] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link href="/">
            <button className="flex items-center gap-1 text-purple-200 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              <span className="text-sm">Kembali</span>
            </button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 sm:w-64 h-40 sm:h-64 bg-[#8a2be2]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-10 sm:-right-20 w-40 sm:w-72 h-40 sm:h-72 bg-[#6a0dad]/20 rounded-full blur-3xl"></div>
        </div>

        {/* Logo area */}
        <motion.div
          className="mb-6 sm:mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="font-serif italic">N</span>
            <span className="text-white font-bold">GOBAR</span>
          </h1>
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="font-serif italic text-lg sm:text-xl">X</span>
            <span className="font-serif italic text-lg sm:text-xl">
              Informatics
            </span>
            <span className="text-lg sm:text-xl font-bold">CLUB</span>
          </div>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm font-light tracking-widest">
            SHOWCASE SESSION
          </div>
        </motion.div>

        {/* Welcome content */}
        <motion.div
          className="w-full max-w-3xl z-10 px-4 sm:px-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-purple-500/20 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Temukan Minat Bidang Informatika Kamu
            </h2>
            <p className="text-base sm:text-lg text-purple-100/80 mb-6 text-center">
              Quiz ini akan membantu kamu menemukan bidang informatika yang
              paling sesuai dengan minat dan bakatmu. Jawab
              pertanyaan-pertanyaan berikut dengan jujur untuk hasil yang
              akurat.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Rekayasa Perangkat Lunak (RPL)
                </h3>
                <p className="text-sm text-purple-100/70">
                  Fokus pada pengembangan aplikasi, desain sistem, dan
                  metodologi pengembangan software.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Data Mining & Machine Learning (DMML)
                </h3>
                <p className="text-sm text-purple-100/70">
                  Fokus pada analisis data, kecerdasan buatan, dan pengembangan
                  model prediktif.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Geographic Information System (GIS)
                </h3>
                <p className="text-sm text-purple-100/70">
                  Fokus pada sistem informasi geografis, pemetaan, dan analisis
                  data spasial.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Jaringan Komputer</h3>
                <p className="text-sm text-purple-100/70">
                  Fokus pada infrastruktur jaringan, keamanan, dan komunikasi
                  data.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm mb-2 text-purple-200/60">
                Quiz terdiri dari {questions.length} pertanyaan
              </p>
            </div>
          </div>

          {/* Start button */}
          <motion.div className="flex justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] rounded-lg text-white font-bold text-lg sm:text-xl
              shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 flex items-center gap-2"
              onClick={startQuiz}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Mulai Quiz
              <ArrowRight />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Results page
  if (showResult) {
    // Map specialization codes to full names
    const specializationNames: Record<string, string> = {
      RPL: "Rekayasa Perangkat Lunak",
      DMML: "Data Mining & Machine Learning",
      GIS: "Geographic Information System",
      Jaringan: "Jaringan Komputer",
    };

    // Map specialization codes to descriptions
    const specializationDescriptions: Record<string, string> = {
      RPL: "Kamu memiliki bakat dalam pengembangan aplikasi dan desain sistem. Bidang ini cocok untuk mereka yang suka memecahkan masalah dan menciptakan solusi software.",
      DMML: "Kamu memiliki bakat dalam analisis data dan kecerdasan buatan. Bidang ini cocok untuk mereka yang suka bekerja dengan data dan mengembangkan model prediktif.",
      GIS: "Kamu memiliki bakat dalam sistem informasi geografis dan analisis spasial. Bidang ini cocok untuk mereka yang tertarik dengan pemetaan dan data geografis.",
      Jaringan:
        "Kamu memiliki bakat dalam infrastruktur jaringan dan keamanan. Bidang ini cocok untuk mereka yang tertarik dengan komunikasi data dan sistem terdistribusi.",
    };

    // Calculate percentages for visualization
    const totalScore = Object.values(scores).reduce(
      (sum, score) => sum + score,
      0
    );
    const scorePercentages = Object.fromEntries(
      Object.entries(scores).map(([key, value]) => [
        key,
        Math.round((value / totalScore) * 100),
      ])
    );

    return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-[#2d0a42] to-[#1a0523] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 sm:w-64 h-40 sm:h-64 bg-[#8a2be2]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-10 sm:-right-20 w-40 sm:w-72 h-40 sm:h-72 bg-[#6a0dad]/20 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#9370db]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Logo area */}
        <motion.div
          className="mb-6 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="font-serif italic">N</span>
            <span className="text-white font-bold">GOBAR</span>
          </h1>
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="font-serif italic text-lg sm:text-xl">X</span>
            <span className="font-serif italic text-lg sm:text-xl">
              Informatics
            </span>
            <span className="text-lg sm:text-xl font-bold">CLUB</span>
          </div>
          <div className="mt-1 text-xs sm:text-sm font-light tracking-widest">
            SHOWCASE SESSION
          </div>
        </motion.div>

        {/* Results content */}
        <motion.div
          className="w-full max-w-3xl z-10 px-4 sm:px-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-purple-500/20 mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600/30 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
              Hasil Quiz
            </h2>
            <p className="text-center text-purple-200 mb-8">
              Berdasarkan jawaban kamu, berikut adalah bidang informatika yang
              paling sesuai dengan minat dan bakatmu:
            </p>

            {/* Top specialization */}
            <div className="bg-gradient-to-r from-[#8a2be2]/30 to-[#6a0dad]/30 p-4 sm:p-6 rounded-lg mb-6 border border-purple-500/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-purple-400" />
                {specializationNames[topSpecialization]}
              </h3>
              <p className="text-purple-100/90 mb-4">
                {specializationDescriptions[topSpecialization]}
              </p>
              <div className="w-full bg-white/10 rounded-full h-4 mb-1">
                <div
                  className="bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] h-4 rounded-full"
                  style={{
                    width: `${
                      scorePercentages[
                        topSpecialization as keyof typeof scorePercentages
                      ]
                    }%`,
                  }}
                ></div>
              </div>
              <div className="text-right text-sm text-purple-200">
                {
                  scorePercentages[
                    topSpecialization as keyof typeof scorePercentages
                  ]
                }
                %
              </div>
            </div>

            {/* Second specialization */}
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {specializationNames[secondSpecialization]}
              </h3>
              <p className="text-purple-100/80 text-sm mb-4">
                {specializationDescriptions[secondSpecialization]}
              </p>
              <div className="w-full bg-white/10 rounded-full h-3 mb-1">
                <div
                  className="bg-purple-500/50 h-3 rounded-full"
                  style={{
                    width: `${
                      scorePercentages[
                        secondSpecialization as keyof typeof scorePercentages
                      ]
                    }%`,
                  }}
                ></div>
              </div>
              <div className="text-right text-sm text-purple-200/80">
                {
                  scorePercentages[
                    secondSpecialization as keyof typeof scorePercentages
                  ]
                }
                %
              </div>
            </div>

            {/* All scores */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(scores).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-sm text-purple-200/70">
                    {specializationNames[key]}
                  </div>
                  <div className="text-xl font-bold">
                    {scorePercentages[key as keyof typeof scorePercentages]}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-bold
              hover:bg-white/20 transition-all duration-300"
              onClick={handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ulangi Quiz
            </motion.button>

            <Link href="/">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] rounded-lg text-white font-bold
                shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Kembali ke Beranda
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Quiz questions
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#2d0a42] to-[#1a0523] text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back button */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/">
          <button className="flex items-center gap-1 text-purple-200 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">Kembali</span>
          </button>
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 sm:w-64 h-40 sm:h-64 bg-[#8a2be2]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-10 sm:-right-20 w-40 sm:w-72 h-40 sm:h-72 bg-[#6a0dad]/20 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#9370db]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Logo area */}
      <motion.div
        className="mb-4 sm:mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          <span className="font-serif italic">N</span>
          <span className="text-white font-bold">GOBAR</span>
        </h1>
        <div className="flex items-center justify-center gap-1">
          <span className="font-serif italic text-base sm:text-lg">X</span>
          <span className="font-serif italic text-base sm:text-lg">
            Informatics
          </span>
          <span className="text-base sm:text-lg font-bold">CLUB</span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-full max-w-3xl px-4 mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span>
            Pertanyaan {currentQuestion + 1} dari {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress
          value={progress}
          className="h-2 bg-white/10"
          indicatorClassName="bg-gradient-to-r from-[#8a2be2] to-[#6a0dad]"
        />
      </div>

      {/* Quiz content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          className="w-full max-w-3xl z-10 px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isTransitioning ? 0 : 1,
            x: isTransitioning ? 50 : 0,
          }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-purple-500/20 mb-6">
            <div className="text-center mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <QuizOption
                  key={index}
                  id={`option${index + 1}`}
                  isSelected={selectedOption === `option${index + 1}`}
                  onClick={() => handleOptionSelect(index)}
                  isMobile={isMobile}
                  delay={0.1 * (index + 1)}
                >
                  {answer.text}
                </QuizOption>
              ))}
            </div>
          </div>

          {/* Next button - appears when an option is selected */}
          {selectedOption && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#8a2be2] to-[#6a0dad] rounded-lg text-white font-bold
                shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 flex items-center gap-2"
                onClick={handleNextQuestion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                disabled={isTransitioning}
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Pertanyaan Berikutnya
                    <ArrowRight size={18} />
                  </>
                ) : (
                  <>
                    Lihat Hasil
                    <Trophy size={18} />
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
