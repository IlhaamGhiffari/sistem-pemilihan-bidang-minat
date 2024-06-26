// JavaScript (Next.js)
"use client";
import { useState } from "react";
import Marquee from "react-fast-marquee";

// Define the questions and answers
const questions = [
  // Soal 1 (RPL, DMML)
  {
    question:
      "Kamu ingin mengembangkan aplikasi mobile untuk membantu orang belajar bahasa baru. Fitur apa yang akan kamu implementasikan?",
    answers: [
      {
        text: "Permainan interaktif dan latihan untuk meningkatkan pemahaman dan pengucapan.",
        points: { RPL: 0.6, DMML: 0.4 },
      },
      {
        text: "Pembelajaran adaptif yang menyesuaikan konten dan kecepatan belajar berdasarkan kebutuhan pengguna.",
        points: { RPL: 0.5, DMML: 0.5 },
      },
      {
        text: "Chatbot percakapan dengan penutur asli untuk melatih keterampilan berbicara dan mendengarkan.",
        points: { RPL: 0.4, DMML: 0.6 },
      },
      {
        text: "Integrasi dengan teknologi augmented reality (AR) untuk pengalaman belajar yang lebih imersif.",
        points: { RPL: 0.3, DMML: 0.7 },
      },
    ],
  },

  // Soal 2 (GIS, Jaringan)
  {
    question:
      "Kamu ingin membangun sistem navigasi GPS untuk mobil. Teknologi apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Sistem Informasi Geografis (SIG) untuk menyimpan dan menganalisis data peta.",
        points: { GIS: 0.7, Jaringan: 0.3 },
      },
      {
        text: "Satelit navigasi seperti GPS atau GLONASS untuk menentukan lokasi.",
        points: { GIS: 0.6, Jaringan: 0.4 },
      },
      {
        text: "Algoritma perutean untuk menemukan jalur tercepat dan terpendek.",
        points: { GIS: 0.5, Jaringan: 0.5 },
      },
      {
        text: "Jaringan komunikasi untuk mentransfer data peta dan informasi lalu lintas.",
        points: { GIS: 0.4, Jaringan: 0.6 },
      },
    ],
  },

  // Soal 3 (RPL, Jaringan)
  {
    question:
      "Kamu ingin membuat platform e-learning untuk sekolah. Fitur apa yang akan kamu sediakan?",
    answers: [
      {
        text: "Kelas virtual untuk pembelajaran online secara real-time.",
        points: { RPL: 0.7, Jaringan: 0.3 },
      },
      {
        text: "Perangkat lunak penilaian untuk memberikan ujian dan tugas online.",
        points: { RPL: 0.6, Jaringan: 0.4 },
      },
      {
        text: "Sistem manajemen pembelajaran (LMS) untuk mengelola konten kursus dan melacak kemajuan siswa.",
        points: { RPL: 0.5, Jaringan: 0.5 },
      },
      {
        text: "Fitur komunikasi dan kolaborasi untuk interaksi antara guru dan siswa.",
        points: { RPL: 0.4, Jaringan: 0.6 },
      },
    ],
  },

  // Soal 4 (DMML, GIS)
  {
    question:
      "Kamu ingin menganalisis data sensor untuk memantau kondisi lingkungan. Teknik apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Pembelajaran mesin (machine learning) untuk memprediksi pola dan tren data sensor.",
        points: { DMML: 0.8, GIS: 0.2 },
      },
      {
        text: "Visualisasi data untuk menampilkan hasil analisis dan membantu memahami kondisi lingkungan.",
        points: { DMML: 0.7, GIS: 0.3 },
      },
      {
        text: "Sistem Informasi Geografis (SIG) untuk mengintegrasikan data sensor dengan peta dan data geografis lainnya.",
        points: { DMML: 0.6, GIS: 0.4 },
      },
      {
        text: "Pemrosesan bahasa alami (NLP) untuk mengekstrak informasi dari teks dan data sensor yang tidak terstruktur.",
        points: { DMML: 0.5, GIS: 0.5 },
      },
    ],
  },

  {
    question:
      "Kamu ingin mengembangkan aplikasi mobile untuk membantu orang mengelola keuangan mereka. Fitur apa yang akan kamu sediakan?",
    answers: [
      {
        text: "Pencatatan pendapatan dan pengeluaran untuk melacak arus kas.",
        points: { RPL: 0.6, DMML: 0.4 },
      },
      {
        text: "Analisis data keuangan untuk mengidentifikasi pola pengeluaran dan membuat anggaran.",
        points: { RPL: 0.5, DMML: 0.5 },
      },
      {
        text: "Fitur manajemen tagihan untuk mengatur pembayaran dan menghindari denda.",
        points: { RPL: 0.4, DMML: 0.6 },
      },
      {
        text: "Integrasi dengan platform investasi untuk membantu pengguna menumbuhkan kekayaan mereka.",
        points: { RPL: 0.3, DMML: 0.7 },
      },
    ],
  },

  {
    question:
      "Kamu ingin membangun sistem pemantauan pergerakan manusia di kota. Teknologi apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Sistem Informasi Geografis (SIG) untuk memetakan dan menganalisis data pergerakan manusia.",
        points: { GIS: 0.7, Jaringan: 0.3 },
      },
      {
        text: "Sensor dan perangkat IoT untuk mengumpulkan data pergerakan real-time.",
        points: { GIS: 0.6, Jaringan: 0.4 },
      },
      {
        text: "Algoritma analisis data untuk mengidentifikasi pola pergerakan dan memprediksi tren.",
        points: { GIS: 0.5, Jaringan: 0.5 },
      },
      {
        text: "Jaringan komunikasi untuk mentransfer data sensor dan hasil analisis.",
        points: { GIS: 0.4, Jaringan: 0.6 },
      },
    ],
  },

  {
    question:
      "Kamu ingin membuat platform e-commerce untuk menjual produk buatan tangan. Fitur apa yang akan kamu sediakan?",
    answers: [
      {
        text: "Sistem toko online untuk menampilkan dan menjual produk.",
        points: { RPL: 0.7, DMML: 0.3 },
      },
      {
        text: "Alat manajemen produk untuk membantu penjual mengelola inventaris dan pesanan.",
        points: { RPL: 0.6, DMML: 0.4 },
      },
      {
        text: "Fitur rekomendasi produk untuk membantu pembeli menemukan produk yang sesuai.",
        points: { RPL: 0.5, DMML: 0.5 },
      },
      {
        text: "Sistem pembayaran online yang aman dan terintegrasi dengan berbagai metode pembayaran.",
        points: { RPL: 0.4, DMML: 0.6 },
      },
    ],
  },

  {
    question:
      "Kamu ingin membangun sistem prediksi bencana alam. Teknologi apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Sistem Informasi Geografis (SIG) untuk memetakan dan menganalisis data geografis.",
        points: { GIS: 0.7, Jaringan: 0.3 },
      },
      {
        text: "Data sensor untuk memantau kondisi lingkungan seperti gempa bumi, tsunami, dan gunung berapi.",
        points: { GIS: 0.6, Jaringan: 0.4 },
      },
      {
        text: "Model prediksi bencana alam berdasarkan data historis dan faktor lingkungan.",
        points: { GIS: 0.5, Jaringan: 0.5 },
      },
      {
        text: "Sistem peringatan dini untuk memberi tahu masyarakat tentang potensi bahaya.",
        points: { GIS: 0.4, Jaringan: 0.6 },
      },
    ],
  },

  {
    question:
      "Kamu ingin mengembangkan aplikasi mobile untuk membantu orang belajar bahasa baru. Fitur apa yang akan kamu implementasikan? (Versi revisi)",
    answers: [
      {
        text: "Permainan interaktif dan latihan gamifikasi untuk meningkatkan pemahaman dan pengucapan.",
        points: { RPL: 0.7, DMML: 0.3 },
      },
      {
        text: "Pembelajaran adaptif yang menyesuaikan konten dan kecepatan belajar berdasarkan kemampuan pengguna.",
        points: { RPL: 0.4, DMML: 0.6 },
      },
      {
        text: "Pengenalan suara untuk melatih pengucapan dan memberi feedback kepada pengguna.",
        points: { RPL: 0.5, DMML: 0.5 },
      },
      {
        text: "Sistem spaced repetition (pengulangan berjeda) untuk optimalisasi retensi kata dan konsep.",
        points: { RPL: 0.3, DMML: 0.7 },
      },
    ],
  },
  {
    question:
      "Kamu ingin menganalisis data penjualan retail untuk mengidentifikasi tren dan mengoptimalkan strategi pemasaran. Teknik apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Analisis keranjang belanja (market basket analysis) untuk menemukan produk yang sering dibeli bersama.",
        points: { DMML: 0.8, GIS: 0.2 },
      },
      {
        text: "Visualisasi data untuk mengidentifikasi tren penjualan musiman dan memetakan popularitas produk.",
        points: { DMML: 0.7, GIS: 0.3 },
      },
      {
        text: "Pembangunan model prediktif untuk meramalkan penjualan berdasarkan faktor seperti musim, promosi, dan harga.",
        points: { DMML: 0.6, GIS: 0.4 },
      },
      {
        text: "Pemetaan data penjualan berdasarkan lokasi geografis untuk mengidentifikasi peluang regional.",
        points: { DMML: 0.5, GIS: 0.5 },
      },
    ],
  },
  {
    question:
      "Kamu ingin mendesain arsitektur jaringan untuk sebuah kantor baru. Apa faktor yang akan kamu pertimbangkan?",
    answers: [
      {
        text: "Jumlah perangkat yang akan terhubung ke jaringan dan jenis perangkat tersebut.",
        points: { RPL: 0.4, Jaringan: 0.6 },
      },
      {
        text: "Kebutuhan bandwidth untuk mendukung aplikasi dan layanan penting.",
        points: { RPL: 0.3, Jaringan: 0.7 },
      },
      {
        text: "Persyaratan keamanan untuk melindungi data sensitif dan mencegah akses tidak sah.",
        points: { RPL: 0.2, Jaringan: 0.8 },
      },
      {
        text: "Skalabilitas untuk mengakomodasi pertumbuhan dan perubahan jaringan di masa mendatang.",
        points: { RPL: 0.5, Jaringan: 0.5 },
      },
    ],
  },
  {
    question:
      "Kamu ingin mengembangkan aplikasi seluler untuk membantu turis menjelajahi kota besar. Fitur apa yang akan kamu sediakan?",
    answers: [
      {
        text: "Peta interaktif dengan informasi tentang tempat menarik, transportasi, dan restoran.",
        points: { GIS: 0.6, RPL: 0.4 },
      },
      {
        text: "Navigasi real-time dengan panduan arah berbasis lokasi.",
        points: { GIS: 0.7, RPL: 0.3 },
      },
      {
        text: "Ulasan (review) dan peringkat dari pengguna lain untuk membantu turis dalam proses pengambilan keputusan.",
        points: { GIS: 0.4, RPL: 0.6 },
      },
      {
        text: "Informasi real-time terkait transportasi publik dan jadwal.",
        points: { GIS: 0.5, RPL: 0.5 },
      },
    ],
  },
  {
    question:
      "Kamu ingin mengembangkan chatbot untuk layanan pelanggan. Fitur apa yang akan kamu implementasikan?",
    answers: [
      {
        text: "Pemrosesan bahasa alami (NLP) untuk memahami pertanyaan dan permintaan pelanggan.",
        points: { DMML: 0.7, RPL: 0.3 },
      },
      {
        text: "Basis pengetahuan untuk menjawab pertanyaan umum dan memberikan informasi produk.",
        points: { DMML: 0.6, RPL: 0.4 },
      },
      {
        text: "Algoritma pembelajaran mesin untuk meningkatkan akurasi dan personalisasi respons chatbot.",
        points: { DMML: 0.5, RPL: 0.5 },
      },
      {
        text: "Integrasi dengan sistem CRM untuk mengakses informasi pelanggan dan menyelesaikan tugas.",
        points: { DMML: 0.4, RPL: 0.6 },
      },
    ],
  },

  {
    question:
      "Kamu ingin membangun sistem manajemen armada untuk perusahaan transportasi. Teknologi apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Sistem Informasi Geografis (GIS) untuk melacak lokasi kendaraan dan mengoptimalkan rute.",
        points: { GIS: 0.7, Jaringan: 0.3 },
      },
      {
        text: "Perangkat GPS untuk melacak pergerakan kendaraan secara real-time.",
        points: { GIS: 0.6, Jaringan: 0.4 },
      },
      {
        text: "Perangkat komunikasi untuk mentransfer data lokasi dan status kendaraan.",
        points: { GIS: 0.5, Jaringan: 0.5 },
      },
      {
        text: "Sistem manajemen data untuk menyimpan dan menganalisis data perjalanan dan kinerja kendaraan.",
        points: { GIS: 0.4, Jaringan: 0.6 },
      },
    ],
  },

  {
    question:
      "Kamu ingin mengembangkan aplikasi mobile untuk membantu orang berolahraga dan menjaga kesehatan. Fitur apa yang akan kamu sediakan?",
    answers: [
      {
        text: "Pelacak aktivitas fisik untuk memantau langkah kaki, kalori yang terbakar, dan jarak tempuh.",
        points: { RPL: 0.6, DMML: 0.4 },
      },
      {
        text: "Rencana latihan yang dipersonalisasi berdasarkan tujuan kebugaran dan tingkat kebugaran pengguna.",
        points: { RPL: 0.5, DMML: 0.5 },
      },
      {
        text: "Fitur komunitas untuk berbagi kemajuan, mendapatkan motivasi, dan bersaing dengan teman.",
        points: { RPL: 0.4, DMML: 0.6 },
      },
      {
        text: "Integrasi dengan perangkat wearable (perangkat yang dapat dikenakan) untuk data kesehatan yang lebih akurat.",
        points: { RPL: 0.3, DMML: 0.7 },
      },
    ],
  },
  {
    question:
      "Kamu ingin membangun platform untuk memantau kualitas udara di kota. Teknologi apa yang akan kamu gunakan?",
    answers: [
      {
        text: "Sensor udara untuk mengukur polutan dan parameter kualitas udara lainnya.",
        points: { GIS: 0.7, Jaringan: 0.3 },
      },
      {
        text: "Sistem Informasi Geografis (SIG) untuk memetakan data kualitas udara dan melacak tren.",
        points: { GIS: 0.6, Jaringan: 0.4 },
      },
      {
        text: "Model prediksi untuk memperkirakan kualitas udara di masa depan berdasarkan faktor seperti cuaca dan emisi.",
        points: { GIS: 0.5, Jaringan: 0.5 },
      },
      {
        text: "Platform web dan aplikasi mobile untuk memvisualisasikan data kualitas udara dan memberikan peringatan kepada masyarakat.",
        points: { GIS: 0.4, Jaringan: 0.6 },
      },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    RPL: 0,
    DMML: 0,
    GIS: 0,
    Jaringan: 0,
  });
  const [showResult, setShowResult] = useState(false); // Add state to control result page visibility
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  const handleAnswerOptionClick = (points) => {
    setScores((prevScores) => {
      let newScores = { ...prevScores };
      for (const field in points) {
        newScores[field] += points[field];
      }
      return newScores;
    });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true); // Show result page when quiz is done
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScores({ RPL: 0, DMML: 0, GIS: 0, Jaringan: 0 });
    setShowResult(false); // Hide result page when reset button is clicked
    setShowWelcomePage(true);
  };

  const handleStartQuiz = () => {
    setShowWelcomePage(false); // Hide welcome page when start button is clicked
  };

  return (
    <div className=" font-poppins w-screen h-screen overflow-x-hidden xl:overflow-hidden bg-gradient-to-b from-[#000] via-[#000427] to-[#000427]/90 text-white relative">
      {showWelcomePage && (
        <div className=" flex flex-col xl:flex-row items-center justify-center min-h-screen w-screen py-2 relative">
          <div className="text-[16px] font-sans absolute z-[1] top-0">
            <Marquee
              direction="left"
              className="text-white text-[1rem] font-extrabold flex mt-3"
            >
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
            </Marquee>
          </div>
          <div className="hidden xl:flex xl:justify-center xl:items-center w-[50%]">
            <iframe width={400} height={400} src="https://lottie.host/embed/43a4bab4-93d6-432f-a329-4ca11e2951ad/skNLGj9hDe.json"></iframe>
          </div>
          <div className=" flex flex-col items-center justify-center gap-10 xl:w-[50%] box-border px-6">
            <div className="">
              <iframe src="https://lottie.host/embed/586958e7-45b5-4a8b-95e9-9953eb89e74f/8MbwOmpIo7.json"></iframe>
            </div>
            <h1 className="text-xl font-bold text-center px-6 text-white xl:text-2xl">
              SELAMAT DATANG DI QUIZ PEMBANTU PEMILIHAN BIDANG MINAT
            </h1>
            <button
              onClick={handleStartQuiz}
              className="bg-white text-[#000427] font-bold py-2 px-4 rounded text-[18px]"
            >
              Start Quiz
            </button>
          </div>
          <div className="text-[16px] font-sans absolute z-[1] bottom-[1%]">
            <Marquee
              direction="right"
              className="text-white text-[1rem] font-extrabold flex mt-3"
            >
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
            </Marquee>
          </div>
        </div>
      )}

      {showResult && (
        <div className=" font-poppins flex flex-col items-center justify-center min-h-screen w-screen py-2 box-border px-10 xl:px-36 gap-10 relative">
          <div className="text-[16px] font-sans absolute z-[1] top-0">
            <Marquee
              direction="left"
              className="text-white text-[1rem] font-extrabold flex mt-3"
            >
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
            </Marquee>
          </div>
          <h1 className="text-2xl font-bold text-center">
            Bidang yang Anda minati adalah :{" "}
            {Object.keys(scores).reduce((a, b) =>
              scores[a] > scores[b] ? a : b
            )}
          </h1>
          <table className=" w-full text-center bg-white text-[#000427] rounded-2xl font-semibold">
            <thead>
              <tr className=" h-16 border-[#5a5a5a] border-b-[1px]">
                <td className=" w-[50%]">Bidang Minat</td>
                <td className=" w-[50%]">Score</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(scores).map(([field, score]) => (
                <tr
                  className={`h-12 py-2 ${
                    field !== "Jaringan"
                      ? "border-[#5a5a5a] border-b-[1px]"
                      : ""
                  }`}
                  key={field}
                >
                  <td>{field}</td>
                  <td>{Math.round(score * 100) / 100}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 xl:px-16 rounded"
          >
            Reset
          </button>
          <div className="text-[16px] font-sans absolute z-[1] bottom-[1%]">
            <Marquee
              direction="right"
              className="text-white text-[1rem] font-extrabold flex mt-3"
            >
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
              <h1 className=" px-7">
                Dept. Pengembangan dan Penelitian Mahasiswa
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#fff" />
              </svg>
            </Marquee>
          </div>
        </div>
      )}

      {!showWelcomePage && !showResult && (
        <div className="font-poppins flex flex-col items-center justify-center min-h-screen py-10 w-screen box-border px-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-lg font-bold box-border text-justify xl:text-2xl xl:text-center">
              {questions[currentQuestion].question}
            </h1>
            <div className="flex flex-col items-center gap-7 xl:grid xl:grid-cols-2 xl:gap-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  onClick={() => handleAnswerOptionClick(answer.points)}
                  key={index}
                  className="bg-white hover:scale-[1.05] xl:hover:scale-[1.02] text-[#000427] font-semibold xl:font-bold py-4 xl:py-2 xl:h-20 px-3 rounded duration-300"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
