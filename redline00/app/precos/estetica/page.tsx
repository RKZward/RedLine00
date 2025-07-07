"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EsteticaPage() {
  const itens = [
    { nome: "Aerofólio", valor: "R$ 10.000" },
    { nome: "Parachoque Dianteiro", valor: "R$ 10.000" },
    { nome: "Parachoque Traseiro", valor: "R$ 10.000" },
    { nome: "Saias", valor: "R$ 10.000" },
    { nome: "Escapamento", valor: "R$ 10.000" },
    { nome: "Chassi / Gaiola", valor: "R$ 10.000" },
    { nome: "Grelha", valor: "R$ 10.000" },
    { nome: "Capô", valor: "R$ 10.000" },
    { nome: "Para-lama", valor: "R$ 10.000" },
    { nome: "Teto", valor: "R$ 10.000" },
    { nome: "Interior / Enfeites", valor: "R$ 10.000" },
    { nome: "Interior / Painel", valor: "R$ 10.000" },
    { nome: "Interior / Ponteiros", valor: "R$ 10.000" },
    { nome: "Interior / Janela", valor: "R$ 10.000" },
    { nome: "Interior / Bancos", valor: "R$ 10.000" },
    { nome: "Decal", valor: "R$ 10.000" },
    { nome: "Rodas", valor: "R$ 10.000" },
    { nome: "Cor das Rodas", valor: "R$ 10.000" },
    { nome: "Custom das Rodas", valor: "R$ 10.000" },
    { nome: "Placa", valor: "R$ 10.000" },
    { nome: "Pintura Primária", valor: "R$ 10.000" },
    { nome: "Pintura Secundária", valor: "R$ 10.000" },
    { nome: "Vidro Insulfilm", valor: "R$ 10.000" },
    { nome: "Buzina", valor: "R$ 10.000" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
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
        <Link href="/precos" className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar aos Preços</span>
        </Link>
      </header>

      {/* Content */}
      <div className="px-5 pb-5">
        <motion.h1
          className="text-4xl font-bold text-center mb-4 text-red-500"
          style={{ textShadow: "0 0 10px red" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          ESTÉTICA
        </motion.h1>

        <motion.p
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Personalização visual completa do seu veículo
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-red-500/10 p-6 rounded-2xl max-w-4xl mx-auto"
        >
          <div className="grid gap-3">
            {itens.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
                className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0 hover:bg-red-500/5 px-4 rounded transition-colors"
              >
                <span className="text-white">{item.nome}</span>
                <span className="text-red-500 font-semibold">{item.valor}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
    </div>
  )
}
