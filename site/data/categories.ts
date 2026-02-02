export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  images?: string[]
  rating: number
  stock: number
  category: string
  colors?: string[]
  sizes?: string[]
}

export interface Category {
  slug: string
  name: string
  description: string
  image: string
  products: Product[]
}

export const categories: Category[] = [
  {
    slug: 'categoria-1',
    name: 'Categoria Premium 1',
    description: 'Produtos selecionados da mais alta qualidade, cuidadosamente escolhidos para oferecer a melhor experiência',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80&fm=jpg',
    products: [
      {
        id: 1,
        name: 'Produto Premium A',
        price: 450.00,
        description: 'Um produto excepcional que combina design elegante com funcionalidade superior. Perfeito para quem busca qualidade e sofisticação.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fm=jpg',
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        ],
        rating: 4.8,
        stock: 25,
        category: 'categoria-1',
        colors: ['Preto', 'Branco', 'Prata'],
        sizes: ['P', 'M', 'G', 'GG'],
      },
      {
        id: 2,
        name: 'Produto Premium B',
        price: 890.50,
        description: 'Design minimalista e elegante que se adapta perfeitamente ao seu estilo. Qualidade premium em cada detalhe.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fm=jpg',
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        ],
        rating: 4.9,
        stock: 12,
        category: 'categoria-1',
        colors: ['Preto', 'Dourado'],
        sizes: ['M', 'G'],
      },
      {
        id: 3,
        name: 'Produto Premium C',
        price: 320.00,
        description: 'Versatilidade e estilo em um único produto. Ideal para quem valoriza praticidade sem abrir mão da elegância.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        ],
        rating: 4.7,
        stock: 8,
        category: 'categoria-1',
        colors: ['Branco', 'Preto'],
        sizes: ['P', 'M', 'G'],
      },
      {
        id: 4,
        name: 'Produto Premium D',
        price: 1250.00,
        description: 'O ápice do luxo e sofisticação. Um produto exclusivo que define um novo padrão de excelência.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec32c3ed50?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec32c3ed50?w=1200&q=80&fm=jpg',
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
        ],
        rating: 5.0,
        stock: 5,
        category: 'categoria-1',
        colors: ['Preto', 'Prata'],
        sizes: ['Único'],
      },
    ],
  },
  {
    slug: 'categoria-2',
    name: 'Categoria Premium 2',
    description: 'Exclusividade e sofisticação em cada detalhe. Produtos que refletem seu estilo único e refinado',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80&fm=jpg',
    products: [
      {
        id: 5,
        name: 'Produto Premium E',
        price: 680.00,
        description: 'Combinação perfeita entre funcionalidade e estética. Um produto que se destaca pela sua qualidade excepcional.',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&fm=jpg',
        ],
        rating: 4.6,
        stock: 15,
        category: 'categoria-2',
        colors: ['Azul', 'Preto'],
        sizes: ['M', 'G', 'GG'],
      },
      {
        id: 6,
        name: 'Produto Premium F',
        price: 950.00,
        description: 'Design inovador que une tradição e modernidade. Um produto que impressiona pela sua atenção aos detalhes.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        ],
        rating: 4.9,
        stock: 20,
        category: 'categoria-2',
        colors: ['Branco', 'Bege'],
        sizes: ['P', 'M', 'G'],
      },
      {
        id: 7,
        name: 'Produto Premium G',
        price: 420.00,
        description: 'Elegância discreta e qualidade superior. Um produto que complementa perfeitamente seu estilo.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
        ],
        rating: 4.8,
        stock: 18,
        category: 'categoria-2',
        colors: ['Preto', 'Cinza'],
        sizes: ['M', 'G'],
      },
    ],
  },
  {
    slug: 'categoria-3',
    name: 'Categoria Premium 3',
    description: 'Design e funcionalidade em perfeita harmonia. Produtos que elevam sua experiência ao próximo nível',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7c1?w=1920&q=80&fm=jpg',
    products: [
      {
        id: 8,
        name: 'Produto Premium H',
        price: 1100.00,
        description: 'A excelência em cada detalhe. Um produto que representa o melhor em design e qualidade.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fm=jpg',
        ],
        rating: 5.0,
        stock: 10,
        category: 'categoria-3',
        colors: ['Dourado', 'Prata'],
        sizes: ['Único'],
      },
      {
        id: 9,
        name: 'Produto Premium I',
        price: 750.00,
        description: 'Inovação e tradição se encontram neste produto excepcional. Qualidade que você pode sentir.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec32c3ed50?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec32c3ed50?w=1200&q=80&fm=jpg',
        ],
        rating: 4.7,
        stock: 14,
        category: 'categoria-3',
        colors: ['Preto', 'Branco'],
        sizes: ['M', 'G'],
      },
      {
        id: 10,
        name: 'Produto Premium J',
        price: 580.00,
        description: 'Estilo atemporal e qualidade duradoura. Um investimento em excelência e sofisticação.',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&fm=jpg',
        ],
        rating: 4.8,
        stock: 22,
        category: 'categoria-3',
        colors: ['Azul', 'Verde'],
        sizes: ['P', 'M', 'G', 'GG'],
      },
    ],
  },
  {
    slug: 'categoria-4',
    name: 'Categoria Premium 4',
    description: 'Inovação e tecnologia de ponta. Produtos que definem o futuro do design e funcionalidade',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&q=80&fm=jpg',
    products: [
      {
        id: 11,
        name: 'Produto Premium K',
        price: 1350.00,
        description: 'Tecnologia de última geração combinada com design premium. A experiência definitiva em qualidade.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&fm=jpg',
        ],
        rating: 5.0,
        stock: 7,
        category: 'categoria-4',
        colors: ['Preto', 'Prata'],
        sizes: ['Único'],
      },
      {
        id: 12,
        name: 'Produto Premium L',
        price: 820.00,
        description: 'Performance excepcional e design sofisticado. Um produto que supera todas as expectativas.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        images: [
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80&fm=jpg',
        ],
        rating: 4.9,
        stock: 16,
        category: 'categoria-4',
        colors: ['Branco', 'Preto'],
        sizes: ['M', 'G'],
      },
    ],
  },
]

// Função helper para buscar categoria por slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug)
}

// Função helper para buscar produto por ID
export function getProductById(id: number): Product | undefined {
  for (const category of categories) {
    const product = category.products.find((p) => p.id === id)
    if (product) return product
  }
  return undefined
}

// Função helper para buscar todos os produtos
export function getAllProducts(): Product[] {
  return categories.flatMap((category) => category.products)
}
