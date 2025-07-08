"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car,
  Wrench,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  Gauge,
  Plane,
} from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="loading-animation mb-4">
            <Image
              src="/redline-logo.png"
              alt="RedLine Logo"
              width={200}
              height={200}
              className="mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/redline-logo.png" alt="RedLine Logo" width={60} height={60} className="object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-white">RedLine</h1>
                <p className="text-red-400 text-sm">Tuning & Performance</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#servicos" className="text-white hover:text-red-400 transition-colors">
                Serviços
              </Link>
              <Link href="#sobre" className="text-white hover:text-red-400 transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-white hover:text-red-400 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transforme Seu
              <span className="gradient-text block">Veículo</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Especialistas em tuning, modificações e performance automotiva. Levamos seu carro ao próximo nível.
            </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Link href="/precos">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
                </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h3>
            <p className="text-gray-400 text-lg">Soluções completas para seu veículo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Estética Automotiva",
                description: "Detalhamento, enceramento, vitrificação e proteção completa",
                icon: Sparkles,
                href: "/precos/estetica",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Tuning Completo",
                description: "Modificações visuais e de performance para seu veículo",
                icon: Car,
                href: "/precos/tuning",
                color: "from-red-500 to-pink-500",
              },
              {
                title: "Full Tuning",
                description: "Transformação completa: motor, visual e performance",
                icon: Gauge,
                href: "/precos/full-tuning",
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "Reparos Automotivos",
                description: "Manutenção e reparos especializados",
                icon: Wrench,
                href: "/precos/reparos",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Helicóptero",
                description: "Instalação de sistema de abertura de portas",
                icon: Plane,
                href: "/precos/helicoptero",
                color: "from-orange-500 to-yellow-500",
              },
              {
                title: "Remap ECU",
                description: "Reprogramação de central eletrônica para mais potência",
                icon: Zap,
                href: "/precos/remap",
                color: "from-teal-500 to-blue-500",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-300 card-hover cursor-pointer h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-4xl font-bold text-white mb-6">Sobre a RedLine</h3>
              <p className="text-gray-300 text-lg mb-6">
                Com anos de experiência no mercado automotivo, a RedLine é referência em tuning e modificações
                veiculares. Nossa equipe especializada trabalha com as melhores marcas e tecnologias do mercado.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">500+</div>
                  <div className="text-gray-400">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">10+</div>
                  <div className="text-gray-400">Anos de Experiência</div>
                </div>
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-300 ml-2">Avaliação dos Clientes</span>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="relative">
                <Image
                  src="/redline-logo.png"
                  alt="RedLine Workshop"
                  width={500}
                  height={400}
                  className="rounded-lg object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Entre em Contato</h3>
            <p className="text-gray-400 text-lg">Pronto para transformar seu veículo?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <CardTitle className="text-white">E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">redline00dacity@gmail.com</p>
                <p className="text-gray-400 text-sm">Resposta em até 24h</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <CardTitle className="text-white">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Alta RJ Norte</p>
                <p className="text-gray-400 text-sm">Atendimento presencial</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/redline-logo.png" alt="RedLine Logo" width={40} height={40} className="object-contain" />
                <span className="text-white font-bold text-xl">RedLine</span>
              </div>
              <p className="text-gray-300">Transformando veículos com paixão e precisão.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/precos/estetica" className="text-gray-300 hover:text-red-400 transition-colors">
                    Estética
                  </Link>
                </li>
                <li>
                  <Link href="/precos/tuning" className="text-gray-300 hover:text-red-400 transition-colors">
                    Tuning
                  </Link>
                </li>
                <li>
                  <Link href="/precos/reparos" className="text-gray-300 hover:text-red-400 transition-colors">
                    Reparos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contatos do Desenvolvedor</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">pedroa.devfrontend@gmail.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2024 RedLine. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
