import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Nabvar from './components/Navbar/Nabvar'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'

function App() {

  return (
    <>
      <div className='bg-[#D5D6CF]'>
        <div className='relative pt-20'>
          <Nabvar/>
          <About/>
          <Skills/>
          <Work/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
