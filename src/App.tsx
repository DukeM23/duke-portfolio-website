import './App.css'

import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import LetsTalk from './components/LetsTalk/LetsTalk'
import Footer from './components/Navbars/Footer'
import NavBarLayout from './components/Navbars/NavBarLayout'
function App() {
  return (
    <>
      <NavBarLayout />
      <Intro />
      <Projects />
      <AboutMe />
      <LetsTalk />
      <Footer />
    </>
  );
}

export default App
