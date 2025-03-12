import './App.css';
import AboutPage from './components/AboutPage';
import MainPage from './components/MainPage';
import ProjectDetails from './components/ProjectDetails';
import ProjectsPage from './components/ProjectsPage';
import Skills from './components/Skills';
import { Route, Routes } from 'react-router-dom'; // Removed BrowserRouter import

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}  />
      </Routes>
    </div>
  );
}

export default App;
