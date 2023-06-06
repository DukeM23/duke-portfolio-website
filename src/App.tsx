import './App.css'
import Menu from './components/Navbars/Menu'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import LetsTalk from './components/LetsTalk/LetsTalk';
function App() {
  return (
    <>
      <Menu />
      <Intro />
      <Projects />
      <AboutMe />
      <LetsTalk />
    </>
  );
}

export default App
