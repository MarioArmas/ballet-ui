import './App.css';
import AboutSection from './layouts/AboutSection';
import ButtonSection from './layouts/ButtonSection';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div class="px-16 w-screen h-screen bg-no-repeat bg-center bg-[url('/src/assets/bgimage-ballet.jpg')]">
      <Navbar />
      <AboutSection />
      <ButtonSection />
    </div>
  );
}

export default App;
