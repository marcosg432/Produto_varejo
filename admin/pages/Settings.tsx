'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Bell, Lock, User, Globe } from 'lucide-react'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import Card from '@/shared/ui/Card'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: 'Premium Store',
    email: 'contato@premiumstore.com',
    phone: '(11) 9999-9999',
    address: 'São Paulo, SP',
    currency: 'BRL',
    language: 'pt-BR',
  })

  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Configurações</h1>
            <p className="text-gray-400">Gerencie as configurações do sistema</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* General Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-neon-primary/20 rounded-lg">
                    <Globe className="w-5 h-5 text-neon-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Configurações Gerais</h2>
                </div>
                <div className="space-y-4">
                  <Input
                    label="Nome da Loja"
                    value={settings.storeName}
                    onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                  />
                  <Input
                    label="E-mail"
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  />
                  <Input
                    label="Telefone"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  />
                  <Input
                    label="Endereço"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  />
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-neon-primary/20 rounded-lg">
                    <User className="w-5 h-5 text-neon-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Perfil</h2>
                </div>
                <div className="space-y-4">
                  <Input label="Nome" placeholder="Seu nome" />
                  <Input label="E-mail" type="email" placeholder="seu@email.com" />
                  <Button variant="secondary">Alterar Senha</Button>
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card>
                <h3 className="font-bold mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-2" />
                    Notificações
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <Lock className="w-4 h-4 mr-2" />
                    Segurança
                  </Button>
                </div>
              </Card>

              <Card>
                <h3 className="font-bold mb-4">Salvar Alterações</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Não esqueça de salvar suas alterações antes de sair
                </p>
                <Button className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Tudo
                </Button>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
