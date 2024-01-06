import './App.css';
import AboutSection from './layouts/AboutSection';
import ButtonSection from './layouts/ButtonSection';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div class="py-6 w-screen h-screen bg-no-repeat bg-center bg-[url('/src/assets/bgimage-ballet.jpg')]">
      <div class='relative w-4/5 h-full m-auto'>
        <Navbar />
        <AboutSection />
        <ButtonSection />
      </div>
    </div>
  );
}

export default App;
