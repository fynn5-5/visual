import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Work } from "@/components/sections/Work"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-void-accent focus:text-void-black focus:rounded-sm focus:font-sans focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
