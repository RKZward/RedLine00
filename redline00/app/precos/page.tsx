"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Wrench, Car, Shield, BirdIcon as Helicopter, Zap, Sparkles } from "lucide-react"

export default function PrecosPage() {
  const [showLogo, setShowLogo] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false)
      setShowContent(true)
    }, 2700)

    return () => clearTimeout(logoTimer)
  }, [])

  const categorias = [
    {
      nome: "ESTÉTICA",
      descricao: "Personalização visual do seu veículo",
      icon: <Sparkles className="w-8 h-8" />,
      link: "/precos/estetica",
      cor: "from-red-500/20 to-pink-500/20",
    },
    {
      nome: "TUNING",
      descricao: "Melhorias de performance",
      icon: <Wrench className="w-8 h-8" />,
      link: "/precos/tuning",
      cor: "from-red-500/20 to-orange-500/20",
    },
    {
      nome: "FULL TUNING",
      descricao: "Pacotes completos de modificação",
      icon: <Car className="w-8 h-8" />,
      link: "/precos/full-tuning",
      cor: "from-red-500/20 to-yellow-500/20",
    },
    {
      nome: "REPAROS",
      descricao: "Manutenção e consertos",
      icon: <Shield className="w-8 h-8" />,
      link: "/precos/reparos",
      cor: "from-red-500/20 to-blue-500/20",
    },
    {
      nome: "HELICÓPTERO",
      descricao: "Serviços para aeronaves",
      icon: <Helicopter className="w-8 h-8" />,
      link: "/precos/helicoptero",
      cor: "from-red-500/20 to-purple-500/20",
    },
    {
      nome: "REMAP",
      descricao: "Reprogramação de ECU",
      icon: <Zap className="w-8 h-8" />,
      link: "/precos/remap",
      cor: "from-red-500/20 to-green-500/20",
    },
    {
      nome: "KIT NEON|XENON",
      descricao: "Iluminação especial",
      icon: <Sparkles className="w-8 h-8" />,
      link: "/precos/neon-xenon",
      cor: "from-red-500/20 to-cyan-500/20",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 2.7,
                ease: "easeOut",
              }}
            >
              <Image
                src="/redline-logo.png"
                alt="RedLine Logo"
                width={600}
                height={600}
                className="w-80 h-80 md:w-96 md:h-96 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen"
          >
            {/* Header */}
            <header className="w-full bg-black p-5 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/redline-logo.png"
                  alt="RedLine"
                  width={70}
                  height={70}
                  className="w-[70px] h-auto object-contain"
                />
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Início
                </Link>
                <Link href="/precos" className="text-red-500">
                  Preços
                </Link>
              </nav>
            </header>

            {/* Content */}
            <div className="flex-1 px-5 pb-5">
              <motion.h1
                className="text-4xl font-bold text-center mb-4 text-red-500"
                style={{ textShadow: "0 0 10px red" }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Nossos Serviços - RedLine
              </motion.h1>

              <motion.p
                className="text-center text-gray-400 mb-12 text-lg"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Escolha a categoria de serviço para ver os preços detalhados
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {categorias.map((categoria, index) => (
                  <motion.div
                    key={categoria.nome}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                  >
                    <Link href={categoria.link}>
                      <div
                        className={`bg-gradient-to-br ${categoria.cor} border border-red-600/30 p-6 rounded-lg hover:border-red-600/70 transition-all duration-300 hover:scale-105 cursor-pointer h-full`}
                      >
                        <div className="text-red-500 mb-4">{categoria.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-red-500">{categoria.nome}</h3>
                        <p className="text-gray-400">{categoria.descricao}</p>
                        <div className="mt-4 text-red-400 text-sm font-semibold">Ver Preços →</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Credits Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center py-5 px-3 text-sm border-t border-gray-700">
              <p className="mb-2">
                Feito por <strong className="text-white">Pedro Arthur</strong>
              </p>
              <p>
                Contatos:{" "}
                <a href="mailto:pedroa.devfrontend@gmail.com" className="text-red-500 hover:underline">
                  pedroa.devfrontend@gmail.com
                </a>{" "}
                | Instagram:{" "}
                <a
                  href="https://instagram.com/pp_arthuzin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  @pp_arthuzin
                </a>
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
