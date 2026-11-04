import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#000] text-white min-h-screen flex flex-col justify-between selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main id="home" className="flex-grow pt-24">
        {/* Portfolio sections will be composed here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
