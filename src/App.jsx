import "./App.css"
import About from "./components/About"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
