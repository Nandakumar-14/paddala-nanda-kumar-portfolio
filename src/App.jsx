import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#000] text-white min-h-screen flex flex-col justify-between selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
