import "./App.css"
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
