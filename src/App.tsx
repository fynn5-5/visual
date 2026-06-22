import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Bestseller } from "@/components/sections/Bestseller"
import { Products } from "@/components/sections/Products"
import { Story } from "@/components/sections/Story"
import { Reviews } from "@/components/sections/Reviews"
import { Newsletter } from "@/components/sections/Newsletter"

function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-terra focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-cream"
      >
        Zum Inhalt springen
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Bestseller />
        <Products />
        <Story />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
