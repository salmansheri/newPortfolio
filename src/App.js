import React from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectList from './components/projectsList/ProjectLists';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';

function App() {
  // const [dark, setDark] = useState(false);
  return (
    <div className="App">
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      
    </div>
  );
}

export default App;
