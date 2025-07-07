"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RemapPage() {
  const itens = [{ nome: "Remap Completo", valor: "R$ 900.000" }]

  return (
    <div className="min-h-screen bg-black text-white">
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
        <Link href="/precos" className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar aos Preços</span>
        </Link>
      </header>

      <div className="px-5 pb-5">
        <motion.h1
          className="text-4xl font-bold text-center mb-4 text-red-500"
          style={{ textShadow: "0 0 10px red" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          REMAP
        </motion.h1>

        <motion.p
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Reprogramação completa da ECU para máxima performance
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-black/40 p-6 rounded-2xl max-w-4xl mx-auto"
        >
          <div className="grid gap-3">
            {itens.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
                className="flex justify-between items-center py-4 border-b border-gray-700 last:border-b-0 hover:bg-red-500/5 px-4 rounded transition-colors"
              >
                <span className="text-white">{item.nome}</span>
                <span className="text-red-500 font-semibold text-lg">{item.valor}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
    </div>
  )
}
