'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'

export default function SiteContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Mensagem enviada com sucesso!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-gray-400 text-lg">
              Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-neon-primary/20 rounded-lg">
                    <Mail className="w-6 h-6 text-neon-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-mail</h3>
                    <p className="text-gray-400 text-sm">contato@premiumstore.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-neon-primary/20 rounded-lg">
                    <Phone className="w-6 h-6 text-neon-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefone</h3>
                    <p className="text-gray-400 text-sm">(11) 9999-9999</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-neon-primary/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-neon-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Endereço</h3>
                    <p className="text-gray-400 text-sm">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-dark-surface rounded-2xl p-8 border border-dark-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nome"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="E-mail"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <Input
                    label="Assunto"
                    placeholder="Assunto da mensagem"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-primary/50 focus:border-neon-primary transition-all duration-300 min-h-[150px]"
                      placeholder="Sua mensagem..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
