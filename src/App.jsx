import "./App.css"
import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
