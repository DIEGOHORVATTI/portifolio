import { Home } from '@/sections/Home'

import { ServicesProducts } from '@/sections/ServicesProducts'
import { Header } from '../src/sections/Home/components/Header'

export default function Page() {
  return (
    <main style={{ position: 'relative' }}>
      <Home />
      <Header />

      <ServicesProducts />
    </main>
  )
}
