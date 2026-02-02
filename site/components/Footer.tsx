'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-primary to-neon-secondary bg-clip-text text-transparent mb-4">
              Premium Store
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              A experiência de compra mais premium e sofisticada do mercado.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-dark-card rounded-lg hover:bg-dark-hover transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-neon-primary transition-colors" />
              </a>
              <a href="#" className="p-2 bg-dark-card rounded-lg hover:bg-dark-hover transition-colors">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-neon-primary transition-colors" />
              </a>
              <a href="#" className="p-2 bg-dark-card rounded-lg hover:bg-dark-hover transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-neon-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/site" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/site/produtos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/site/categorias" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/site/sobre" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/site/contato" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                contato@premiumstore.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-border text-center text-sm text-gray-500">
          <p>© 2024 Premium Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
