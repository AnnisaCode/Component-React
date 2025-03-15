import { useState } from "react";
import './App.css'
import Button from './components/Button';
// import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  // Reusable Button Component
  // const handleClick = () => {
  //   alert("Button clicked!");
  // };
  //End

  // Reusable Navbar Component
  // const navLinks = [
  //  { text: "Home", href: "/"},
  //  { text: "About", href: "/about"},
  //  { text: "Contact", href: "/contact"},
  // ];
  //End

  // Reusable Modal Component
  const [isModalOpen, setIsModalOpen] = useState(false);
  //End

  return (
    <>
      <div>
        {/* <Button text="Click Me" onClick={handleClick} color="blue" size="lg" /> */}
        {/* <Navbar links={navLinks}/>
        <h1 className="p-4">Welcome to My Life</h1> */}
        <Button text="Buka Modal" onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Ini Modal</h2>
          <p>Konten modal bisa apa saja</p>
        </Modal>
      </div>
    </>
  );
}

export default App;